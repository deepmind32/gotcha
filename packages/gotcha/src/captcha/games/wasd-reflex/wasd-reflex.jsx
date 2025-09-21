import { useEffect, useRef, useState } from "react";
import Timer from "../../../components/timer/timer";
import styles from "./wasd-reflex.module.css";

function get_key_satus(game_active, pressed_key, active_key) {
	if (!game_active) {
		return "pressed";
	}

	if (pressed_key === active_key) {
		return "correct";
	} else {
		return "wrong";
	}
}

export default function WASDReflexGame({
	word = "wasdwasdwasdsawdsawdssswwwwa",
	speed_factor = 1,
	onSuccess,
	onFail,
}) {
	// normal, correct, incorrect
	const [active_key, set_active_key] = useState({
		w: "normal",
		a: "normal",
		s: "normal",
		d: "normal",
	});
	const game_ref = useRef({
		active: false,
		word,
		corrects: Array(word.length).fill(undefined),
		index: 0,
	});

	const handle_time_over = () => {
		game_ref.current["active"] = true;
	};

	// used to handle the glowing thing
	useEffect(() => {
		const glow_interval = setInterval(() => {
			if (game_ref.current["active"]) {
				if (game_ref.current["index"] >= game_ref.current["word"].length) {
					game_ref.current.active = false;
					game_ref.current.ranned = true;
					clearInterval(game_ref);

					const corrects = game_ref.current.corrects;
					const correct = corrects.reduce(
						(acc, item) => acc + (typeof item === "boolean" && item ? 1 : 0),
						0
					);

					if (correct > 0) {
						onSuccess({
							score: correct / corrects.length,
							message: `You completed with score ${correct} out of ${corrects.length}`,
						});
					} else {
						onFail({
							score: 1 - correct / corrects.length,
							message: "You failed",
						});
					}

					return;
				}

				const current_word =
					game_ref.current["word"][game_ref.current["index"]];
				game_ref.current.index += 1;

				set_active_key((prev) => ({
					w: "normal",
					a: "normal",
					s: "normal",
					d: "normal",
					[current_word]: "active",
				}));
			}
		}, 400 * speed_factor);

		return () => {
			clearInterval(glow_interval);
		};
	}, [game_ref.current.active]);

	// adding event listener to listen to WASD and arrow keys
	useEffect(() => {
		const handle_key_down = (event) => {
			const active_key = game_ref.current.word[game_ref.current.index - 1];

			switch (event.key) {
				case "w":
				case "W":
				case "ArrowUp":
					const status_w = get_key_satus(
						game_ref.current.active,
						"w",
						active_key
					);
					if (
						typeof game_ref.current.corrects[game_ref.current.index - 1] ===
						"undefined"
					) {
						if (status_w === "correct") {
							game_ref.current.corrects[game_ref.current.index - 1] = true;
						} else if (status_w === "wrong") {
							game_ref.current.corrects[game_ref.current.index - 1] = false;
						}
					}
					set_active_key((prev) => ({
						...prev,
						w: status_w,
					}));
					break;

				case "a":
				case "A":
				case "ArrowLeft":
					let status_a = get_key_satus(
						game_ref.current.active,
						"a",
						active_key
					);
					if (
						typeof game_ref.current.corrects[game_ref.current.index - 1] ===
						"undefined"
					) {
						if (status_a === "correct") {
							game_ref.current.corrects[game_ref.current.index - 1] = true;
						} else if (status_a === "wrong") {
							game_ref.current.corrects[game_ref.current.index - 1] = false;
						}
					}
					set_active_key((prev) => ({
						...prev,
						a: status_a,
					}));
					break;

				case "s":
				case "S":
				case "ArrowDown":
					let status_s = get_key_satus(
						game_ref.current.active,
						"s",
						active_key
					);
					if (
						typeof game_ref.current.corrects[game_ref.current.index - 1] ===
						"undefined"
					) {
						if (status_s === "correct") {
							game_ref.current.corrects[game_ref.current.index - 1] = true;
						} else if (status_s === "wrong") {
							game_ref.current.corrects[game_ref.current.index - 1] = false;
						}
					}
					set_active_key((prev) => ({
						...prev,
						s: status_s,
					}));
					break;

				case "d":
				case "D":
				case "ArrowRight":
					let status_d = get_key_satus(
						game_ref.current.active,
						"d",
						active_key
					);
					if (
						typeof game_ref.current.corrects[game_ref.current.index - 1] ===
						"undefined"
					) {
						if (status_d === "correct") {
							game_ref.current.corrects[game_ref.current.index - 1] = true;
						} else if (status_d === "wrong") {
							game_ref.current.corrects[game_ref.current.index - 1] = false;
						}
					}
					set_active_key((prev) => ({
						...prev,
						d: status_d,
					}));
					break;

				default:
					break;
			}
		};

		const handle_key_up = (event) => {
			switch (event.key) {
				case "w":
				case "W":
				case "ArrowUp":
					set_active_key((prev) => ({ ...prev, w: "normal" }));
					break;

				case "a":
				case "A":
				case "ArrowLeft":
					set_active_key((prev) => ({ ...prev, a: "normal" }));
					break;

				case "s":
				case "S":
				case "ArrowDown":
					set_active_key((prev) => ({ ...prev, s: "normal" }));
					break;

				case "d":
				case "D":
				case "ArrowRight":
					set_active_key((prev) => ({ ...prev, d: "normal" }));
					break;

				default:
					break;
			}
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
				<Timer start={5} on_time_finished={handle_time_over} />
			</header>
			<main style={{ position: "relative" }}>
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
