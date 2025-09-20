import { useRef, useState } from "react";
import Timer from "../../../components/timer/timer";
import styles from "./pin.module.css";

function is_all_pin_entered(pin_refs) {
	const pins = [0, 1, 2, 3].map((index) => pin_refs.current[index].value);

	if (pins.map((pin) => pin.length > 0).every(Boolean)) {
		return pins.reduce((acc, val) => `${acc}${val}`);
	} else {
		return false;
	}
}

export default function PinGame() {
	const pin_refs = useRef([]);
	const [pin, set_pin] = useState(undefined);
	const handle_time_finished = () => {
		console.log("Oops, you failed");
	};

	const handle_pin_change = (position, event) => {
		const value = event.target.value;

		if (position <= 2 && value.length === 1) {
			pin_refs.current[position + 1].focus();
		}

		const current_pin = is_all_pin_entered(pin_refs);
		if (current_pin) {
			set_pin(current_pin);
		} else {
			set_pin(undefined);
		}
	};

	const handle_pin_keydown = (position, event) => {
		const current_value = event.target.value; // here the value change is not seen still in the UI
		if (current_value.length > 0 && event.key === "Backspace") {
			// if there is some digit and backspace is pressed then clear the input field, despite of cursor location adn front or back of digit
			pin_refs.current[position].value = null;

			// if backspace pressed then, set undefined
			if (!is_all_pin_entered(pin_refs)) {
				set_pin(undefined);
			}
		} else if (
			position !== 0 &&
			(event.key === "Backspace" || event.key === "ArrowLeft")
		) {
			pin_refs.current[position - 1].focus();
		} else if (position !== 3 && event.key === "ArrowRight") {
			pin_refs.current[position + 1].focus();
		} else if (
			current_value.length === 1 &&
			event.key.length == 1 &&
			!event.ctrlKey &&
			!event.metaKey
		) {
			// if already there is a digit and the user is writing then overwrite it
			pin_refs.current[position].value = String(event.key);
			event.preventDefault();
			
			if (position < 3) {
				pin_refs.current[position+1].focus();
			}
		}
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
					<div className={styles["form__pin"]}>
						{[0, 1, 2, 3].map((index) => (
							<input
								key={index}
								type="number"
								placeholder="x"
								onInput={handle_pin_change.bind(null, index)}
								onKeyDown={handle_pin_keydown.bind(null, index)}
								ref={(el) => (pin_refs.current[index] = el)}
							/>
						))}
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
