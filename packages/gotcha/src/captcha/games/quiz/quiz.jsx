import { useEffect, useRef, useState } from "react";
import Timer from "../../../components/timer/timer";
import styles from "./quiz.module.css";
import Button from "../../../components/button/button";
import { get_generic_failure_taunt, get_success_taunt } from "../../taunts";

// answer can be text or
// {correct: true, text: ""}
export default function QuizGame({
	question,
	answer,
	time = 100,
	onSuccess,
	onFail,
}) {
	const input_ref = useRef(null);

	useEffect(() => {
		input_ref && input_ref.current.focus();
	}, []);

	const [active, set_active] = useState(true);

	const handle_time_finished = () => {
		if (active) {
			onFail({
				score: 0,
				message: get_generic_failure_taunt(),
			});
			set_active(false);
		}
	};

	const handle_submit = () => {
		if (!input_ref.current || !active) {
			return;
		}

		const given = input_ref.current.value.toLocaleLowerCase();
		if (given === answer.toLocaleLowerCase()) {
			onSuccess({
				score: 1,
				message: get_success_taunt(),
			});
		} else {
			onFail({
				score: 0,
				message: get_generic_failure_taunt(),
			});
		}
		set_active(false);
	};

	const handle_key_down = (event) => {
		if (event.key === "Enter" && active) {
			handle_submit();
		}
	};

	return (
		<>
			<header>
				<div>
					<h3>Quiz...</h3>
					<p>Can you answer??</p>
				</div>
				<Timer start={time} on_time_finished={handle_time_finished} />
			</header>
			<main className={styles["main"]}>
				<p>
					<span>Q:</span> {question}
				</p>
				<input
					type="text"
					ref={input_ref}
					placeholder="Answer"
					autoComplete="false"
					onKeyDown={handle_key_down}
				/>
				<Button onClick={handle_submit}>Submit</Button>
			</main>
		</>
	);
}
