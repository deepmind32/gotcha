import { useEffect, useRef, useState } from "react";
import Timer from "../../../components/timer/timer";
import styles from "./math-game.module.css";
import Button from "../../../components/button/button";

const names = {
	easy: "normal",
	medium: "horizontal_flipped",
	hard: "vertical_flipped",
	"very hard": "both_flipped",
};

export default function MathGame({
	difficulty = "easy",
	time = 10,
	question,
	answer,
	onFail,
	onSuccess,
}) {
	const [game, set_game] = useState({
		active: true,
	});

	const input_ref = useRef(null);
	const handle_time_finished = () => {
		if (!game.active) {
			return;
		}

		const answered_value = +input_ref.current.value;
		if (answered_value === answer) {
			onFail({
				score: 0.5,
				message: "You were right but hey, time and tide waits for none.",
			});
		} else {
			onFail({
				score: 0.5,
				message: "My two year brother solves the question faster than you.",
			});
		}
		set_game((prev) => ({ ...prev, active: false }));
	};

	useEffect(() => {
		input_ref.current && input_ref.current.focus();
	}, [difficulty]);

	const handle_on_answered = () => {
		if (!game.active) {
			return;
		}
		const answered_value = +input_ref.current.value;

		if (answered_value === answer) {
			onSuccess({
				score: 1,
				message: "Didn't expect you to win. Wait for another challenge.",
			});
		} else {
			onFail({
				score: 0,
				message:
					"I have not encountered any human who couldn't solve this simple math.",
			});
		}
		set_game((prev) => ({ ...prev, active: false }));
	};

	const handle_if_pressed_enter = (event) => {
		if (event.key === "Enter") {
			handle_on_answered();
		}
	};

	return (
		<>
			<header>
				<div>
					<h3>Solve this simple maths</h3>
					<p>Watch out for the time.</p>
				</div>
				<Timer start={time} on_time_finished={handle_time_finished} />
			</header>
			<main>
				<p className={`${styles["question"]} ${styles[names[difficulty]]}`}>
					{question}
				</p>

				<div className={styles["input__wrapper"]}>
					<input
						type="number"
						ref={input_ref}
						onKeyDown={handle_if_pressed_enter}
						className={styles["input"]}
						placeholder="Eg. 4"
					/>
					<Button onClick={handle_on_answered}>Submit</Button>
				</div>
			</main>
		</>
	);
}
