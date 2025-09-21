import { useState } from "react";
import Pin from "../../../components/pin/pin";
import Timer from "../../../components/timer/timer";
import styles from "./pin.module.css";

export default function PinGame() {
	const [pin, set_pin] = useState(undefined);

	const handle_time_finished = () => {
		console.log("Oops, you failed");
	};

	const handle_pin_change = (new_pin) => {
		set_pin(new_pin);
	};

	const handle_pin_submit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<header className={styles["header"]}>
				<div className={styles["header__info"]}>
					<h3>Set the pin</h3>
					<p>Prove yourself a human by changing a random pin</p>
				</div>
				<Timer start={15} on_time_finished={handle_time_finished} />
			</header>
			<main className={styles["main"]}>
				<form className={styles["form"]} onSubmit={handle_pin_submit}>
					<div className={styles["form__pin__wrapper"]}>
						<Pin digits={4} onChange={handle_pin_change} />
					</div>

					<div className={styles["form__btn"]}>
						<button type="submit" disabled={!pin}>
							Submit
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
