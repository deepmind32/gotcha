import { useEffect, useRef, useState } from "react";
import Timer from "../../../components/timer/timer";
import styles from "./a-to-z.module.css";

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
	difficulty = "easy",
	time = 26,
	onSuccess,
	onFail,
}) {
	const [game, set_game] = useState({
		active: true,
		index: -1,
	});
	const input_ref = useRef(null);
	let alphabets = ALPHABETS;

	if (difficulty === "medium" || alphabets === "very hard") {
		alphabets = ALPHABETS.reverse();
	}

	useEffect(() => {
		input_ref.current.focus();
	}, []);

	const handle_time_finished = () => {
		if (game.active) {
			onFail({
				score: 0,
				message: "My brother could type it faster.",
			});
		}

		set_game((prev) => ({ ...prev, active: false }));
	};

	const handle_alphabet_entered = (event) => {
		if (!game.active) {
			return;
		}
		const entered_key = event.key;

		if (entered_key === alphabets[game.index + 1]) {
			if (entered_key === alphabets.at(-1)) {
				onSuccess({
					score: 1,
					message: "Didn't expect you to be that fast",
				});
				set_game((prev) => ({ ...prev, active: false }));
			}
			set_game((prev) => ({ ...prev, index: prev.index + 1 }));
		} else {
			onFail({
				score: (game.index + 1) / 26,
				message: "You are the typo master",
			});
		}
	};

	const handle_key_up = () => {
		input_ref.current.value = "";
	};

	return (
		<>
			<header>
				<div>
					<h3>Type to win</h3>
					<p>
						Write {alphabets[0]} to {alphabets.at(-1)} in given time. No
						backspaces. Only lowercase allowed.{" "}
						{(difficulty === "hard" || difficulty === "very hard") && (
							<span>Don't write when the light is glowing</span>
						)}
					</p>
				</div>

				<Timer start={time} on_time_finished={handle_time_finished} />
			</header>
			<main>
				{(difficulty === "hard" || difficulty === "very hard") && (
					<div className={styles["light"]} />
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
