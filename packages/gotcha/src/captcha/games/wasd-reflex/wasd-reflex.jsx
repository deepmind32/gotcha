import { useEffect, useRef, useState } from "react";
import Timer from "../../../components/timer/timer";
import styles from "./wasd-reflex.module.css";
import StreakMeter from "../../../components/streak-meter/streak-meter";

function get_key_status(game_active, pressed_key, active_key) {
	if (!game_active) return "normal";
	return pressed_key === active_key ? "correct" : "wrong";
}

function generate_wasd_words(length) {
	const keys = ["w", "a", "s", "d"];
	let sequence = "";

	for (let i = 0; i < length; i++) {
		const random_index = Math.floor(Math.random() * keys.length);
		sequence += keys[random_index];
	}

	return sequence;
}

// map keys
const keyMap = {
	w: ["w", "W", "ArrowUp"],
	a: ["a", "A", "ArrowLeft"],
	s: ["s", "S", "ArrowDown"],
	d: ["d", "D", "ArrowRight"],
};

function findPressed(eventKey) {
	return Object.keys(keyMap).find((k) => keyMap[k].includes(eventKey));
}

export default function WASDReflexGame({
	target = 5,
	times = [6, 30],
	speed_factor = 1,
	onSuccess,
	onFail,
}) {
	const [active_key, set_active_key] = useState({
		w: "normal",
		a: "normal",
		s: "normal",
		d: "normal",
	});
	const word = generate_wasd_words(100);
	const game_ref = useRef({
		active: false,
		word,
		corrects: Array(word.length).fill(undefined),
		index: 0,
		streak: 0,
		max_streak: 0,
	});
	const [time, set_time] = useState(times[0]);

	const handle_time_over = () => {
		game_ref.current.active = true;
	};

	// glowing keys loop
	useEffect(() => {
		const glow_interval = setInterval(() => {
			if (!game_ref.current.active) return;

			// game finished
			if (game_ref.current.index >= game_ref.current.word.length) {
				game_ref.current.active = false;
				clearInterval(glow_interval);

				const corrects = game_ref.current.corrects;
				const correct = corrects.filter((x) => x === true).length;

				if (correct > 0) {
					onSuccess({
						score: correct / corrects.length,
						streak: game_ref.current.max_streak,
						message: `Score: ${correct}/${corrects.length}, Best streak: ${game_ref.current.max_streak}`,
					});
				} else {
					onFail({
						score: 0,
						message: "You failed!",
					});
				}
				return;
			}

			// next target
			const current_word = game_ref.current.word[game_ref.current.index];
			game_ref.current.index += 1;

			set_active_key({
				w: "normal",
				a: "normal",
				s: "normal",
				d: "normal",
				[current_word]: "active",
			});
		}, 600 * speed_factor);

		return () => clearInterval(glow_interval);
	}, [speed_factor, onSuccess, onFail]);

	// keyboard input
	useEffect(() => {
		const heldKeys = new Set();

		const handle_key_down = (event) => {
			const pressed = findPressed(event.key);
			if (!pressed || heldKeys.has(event.key)) return;
			heldKeys.add(event.key);

			const currentIndex = game_ref.current.index - 1;
			const active_key_char = game_ref.current.word[currentIndex];
			const status = get_key_status(
				game_ref.current.active,
				pressed,
				active_key_char
			);

			// accept only first attempt for this step
			if (typeof game_ref.current.corrects[currentIndex] === "undefined") {
				if (status === "correct") {
					game_ref.current.corrects[currentIndex] = true;
					game_ref.current.streak++;
					game_ref.current.max_streak = Math.max(
						game_ref.current.max_streak,
						game_ref.current.streak
					);
				} else if (status === "wrong") {
					game_ref.current.corrects[currentIndex] = false;
					game_ref.current.streak = 0;
				}
			}

			set_active_key((prev) => ({ ...prev, [pressed]: status }));

			// quick reset for visual feedback
			setTimeout(() => {
				set_active_key((prev) => ({ ...prev, [pressed]: "normal" }));
			}, 150);
		};

		const handle_key_up = (event) => {
			heldKeys.delete(event.key);
		};

		window.addEventListener("keydown", handle_key_down);
		window.addEventListener("keyup", handle_key_up);

		return () => {
			window.removeEventListener("keydown", handle_key_down);
			window.removeEventListener("keyup", handle_key_up);
		};
	}, []);

	return (
		<>
			<header>
				<div>
					<h3>Show off your reflexes</h3>
					<p>Use WASD or arrow keys to hit the glowing key (yellow).</p>
				</div>
				<Timer start={time} on_time_finished={handle_time_over} />
			</header>
			<main style={{ position: "relative" }}>
				<div className={styles["streaks"]}>
					<StreakMeter
						max_streak={game_ref.current.max_streak}
						streak={game_ref.current.streak}
						target={target}
					/>
				</div>
				<div className={styles["wasd__display"]}>
					<div className={styles["wasd__display__row"]}>
						<div
							className={`${styles["wasd__key"]} ${styles[active_key["w"]]}`}
						>
							W
						</div>
					</div>
					<div className={styles["wasd__display__row"]}>
						<div
							className={`${styles["wasd__key"]} ${styles[active_key["a"]]}`}
						>
							A
						</div>
						<div
							className={`${styles["wasd__key"]} ${styles[active_key["s"]]}`}
						>
							S
						</div>
						<div
							className={`${styles["wasd__key"]} ${styles[active_key["d"]]}`}
						>
							D
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
