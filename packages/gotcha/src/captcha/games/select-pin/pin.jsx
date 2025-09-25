import { useRef, useState } from "react";

import Pin from "../../../components/pin/pin";
import Timer from "../../../components/timer/timer";
import styles from "./pin.module.css";
import Button from "../../../components/button/button";

export default function PinGame({
	digit = 4,
	time = [10, 30],
	onFail,
	onSuccess,
}) {
	const [pin, set_pin] = useState(undefined);
	const [stage, set_stage] = useState("enter-pin");
	const [entered_pin, set_entered_pin] = useState(null);

	// ref is used here instead of state because the state change cannot be captured inside the closure in handle_time_finished
	const is_game_finished_ref = useRef(false);

	const handle_time_finished = () => {
		if (!is_game_finished_ref.current) {
			onFail({
				score: 0,
				message: "A turtle is faster than you",
			});
		}
	};

	const handle_pin_change = (new_pin) => {
		set_pin(new_pin);
	};

	const handle_pin_submit = (event) => {
		event.preventDefault();

		if (pin) {
			set_stage("verify-pin");

			// start with entered pin that is longest from either side
			set_entered_pin(
				+pin < Math.pow(10, digit) / 2
					? Array(digit).fill("9").join("")
					: Array(digit).fill("0").join("")
			);
		}
	};

	const handle_entered_pin_interact = (increment) => {
		const updated_pin = +entered_pin + increment;
		if (updated_pin >= 0 && updated_pin <= Math.pow(10, digit) - 1) {
			set_entered_pin(String(updated_pin));
		}
	};

	const handle_verify_pin = () => {
		is_game_finished_ref.current = true;
		if (pin === +entered_pin) {
			onSuccess({
				score: 1,
				message: "Looks like you need something little harder",
			});
		} else {
			onFail({
				score: 0,
				message: "Looks like you are not human enough",
			});
		}
	};

	return (
		<>
			<header className={styles["header"]}>
				<div className={styles["header__info"]}>
					<h3>PIN Challenge</h3>
					{stage === "enter-pin" && (
						<p>Prove yourself a human by creating a random pin</p>
					)}
					{stage === "verify-pin" && (
						<p>Human can remember their earlier PIN</p>
					)}
				</div>
				<Timer
					start={stage === "enter-pin" ? time[0] : time[1]}
					on_time_finished={handle_time_finished}
				/>
			</header>
			<main className={styles["main"]}>
				{stage === "enter-pin" && (
					<form className={styles["form"]} onSubmit={handle_pin_submit}>
						<div className={styles["form__pin__wrapper"]}>
							<Pin digits={digit} onChange={handle_pin_change} />
						</div>

						<div className={styles["form__btn__wrapper"]}>
							<Button type="submit" disabled={!pin}>
								Submit PIN
							</Button>
						</div>
					</form>
				)}
				{stage === "verify-pin" && (
					<div className={styles["form"]}>
						<div className={styles["form__btn__wrapper"]}>
							<div className={styles["enter_pin"]}>
								<Button onClick={handle_entered_pin_interact.bind(null, -1)}>
									-
								</Button>
								<span>{entered_pin}</span>
								<Button onClick={handle_entered_pin_interact.bind(null, 1)}>
									+
								</Button>
							</div>
							<Button onClick={handle_verify_pin}>Verify PIN</Button>
						</div>
					</div>
				)}
			</main>
		</>
	);
}
