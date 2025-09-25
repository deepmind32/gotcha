import { useEffect, useRef, useState } from "react";
import Timer from "../../../components/timer/timer";
import styles from "./a-to-z.module.css";
import {
	get_red_light_taunt,
	get_slow_typing_taunt,
	get_success_taunt,
	get_typo_taunt,
} from "../../taunts";

const ALPHABETS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

export default function AToZGame({
	reverse = false,
	time = 26,
	total_light_glows = 3,
	onSuccess,
	onFail,
}) {
	const [game, set_game] = useState({
		active: true,
		index: -1,
		light_glow: false,
		lights: null,
		glow: false,
	});
	const [curr_time, set_curr_time] = useState(time);
	const input_ref = useRef(null);
	let alphabets = ALPHABETS;

	if (reverse) {
		alphabets = [...ALPHABETS].reverse();
	}

	useEffect(() => {
		input_ref.current.focus();

		// getting three random times to glow the light and random glow duration anywhere from 1 sec to 3second
		const lights = Array(total_light_glows)
			.fill(null)
			.map((_) => ({
				time: Math.floor(Math.random() * (time - 1)),
				duration: Math.floor(Math.random() * time * 100),
			}));

		set_game((prev) => ({ ...prev, lights }));
	}, []);

	const handle_time_finished = () => {
		if (game.active) {
			onFail({
				score: (game.index + 1) / 26,
				message: get_slow_typing_taunt(),
			});
		}

		set_game((prev) => ({ ...prev, active: false }));
	};

	const handle_alphabet_entered = (event) => {
		if (!game.active) {
			return;
		}
		const entered_key = event.key;

		if (game.glow) {
			onFail({
				score: (game.index + 1) / 26,
				message: get_red_light_taunt(),
			});

			set_game((prev) => ({ ...prev, active: false }));
		}

		if (entered_key === alphabets[game.index + 1]) {
			if (entered_key === alphabets.at(-1)) {
				onSuccess({
					score: 1,
					message: get_success_taunt(),
				});
				set_game((prev) => ({ ...prev, active: false }));
			}
			set_game((prev) => ({ ...prev, index: prev.index + 1 }));
		} else {
			onFail({
				score: (game.index + 1) / 26,
				message: get_typo_taunt(),
			});
			set_game((prev) => ({ ...prev, active: false }));
		}
	};

	const handle_key_up = () => {
		input_ref.current.value = "";
	};

	const handle_time_change = (t) => {
		set_curr_time(t);
	};

	useEffect(() => {
		let glow_timeout = undefined;
		if (game.lights) {
			const light_time = game.lights.map((item) => item["time"]);
			const light_duration = game.lights.map((item) => item["duration"]);

			const index = light_time.indexOf(curr_time);

			if (index !== -1) {
				set_game((prev) => ({ ...prev, glow: true }));
				glow_timeout = setTimeout(() => {
					set_game((prev) => ({ ...prev, glow: false }));
				}, light_duration[index]);
			}
		}

		return () => glow_timeout && clearTimeout(glow_timeout);
	}, [curr_time]);

	return (
		<>
			<header>
				<div>
					<h3>Type to win</h3>
					<p>
						Write {alphabets[0]} to {alphabets.at(-1)} in given time. No
						backspaces. Only lowercase allowed.{" "}
						{total_light_glows >= 1 && (
							<span>Don't write when the light is glowing</span>
						)}
					</p>
				</div>

				<Timer
					start={time}
					on_time_finished={handle_time_finished}
					on_change={handle_time_change}
				/>
			</header>
			<main>
				{total_light_glows >= 1 && (
					<div
						className={`${styles["light"]} ${
							game.glow ? styles["light--active"] : ""
						}`}
					/>
				)}
				<div className={styles["alphabet_showcase"]}>
					{game.index >= 0 &&
						alphabets
							.slice(0, game.index + 1)
							.map((item) => <span key={item}>{item}</span>)}
				</div>
				<input
					type="text"
					ref={input_ref}
					onKeyDown={handle_alphabet_entered}
					onKeyUp={handle_key_up}
					className={styles["alphabet_input"]}
				/>
			</main>
		</>
	);
}
