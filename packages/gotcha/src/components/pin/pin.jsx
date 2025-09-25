import { useRef, useState } from "react";
import { range } from "../../utils/python";

import styles from "./pin.module.css";

function is_all_pin_entered(pin_refs, digits) {
	const pins = range(digits).map((index) => pin_refs.current[index].value);

	if (pins.map((pin) => pin.length > 0).every(Boolean)) {
		return pins.reduce((acc, val) => `${acc}${val}`);
	} else {
		return false;
	}
}

export default function Pin({ digits = 4, onChange }) {
	const pin_refs = useRef([]);

	const handle_pin_change = (position, event) => {
		const value = event.target.value;

		if (position < digits - 1 && value.length === 1) {
			pin_refs.current[position + 1].focus();
		}

		const current_pin = is_all_pin_entered(pin_refs, digits);
		if (current_pin) {
			onChange(+current_pin);
		} else {
			onChange(undefined);
		}
	};

	const handle_pin_keydown = (position, event) => {
		const current_value = event.target.value; // here the value change is not seen still in the UI
		if (current_value.length > 0 && event.key === "Backspace") {
			// if there is some digit and backspace is pressed then clear the input field, despite of cursor location adn front or back of digit
			pin_refs.current[position].value = null;

			// if backspace pressed then, set undefined
			if (!is_all_pin_entered(pin_refs, digits)) {
				onChange(undefined);
			}
		} else if (
			position !== 0 &&
			(event.key === "Backspace" || event.key === "ArrowLeft")
		) {
			pin_refs.current[position - 1].focus();
		} else if (position !== digits - 1 && event.key === "ArrowRight") {
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

			if (position < digits - 1) {
				pin_refs.current[position + 1].focus();
			}
		}
	};

	return (
		<div className={styles["form__pin"]}>
			{range(digits).map((index) => (
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
	);
}
