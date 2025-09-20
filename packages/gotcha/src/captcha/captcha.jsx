import { useState } from "react";
import { RiCheckboxLine, RiErrorWarningFill } from "react-icons/ri";

import styles from "./captcha.module.css";
import LoadingIcon from "../components/loading/loading";
import PinGame from "./games/select-pin/pin";

export function Captcha() {
	// initial, progress, success, error
	const [captcha_state, set_captcha_state] = useState("initial");

	const handle_captcha_clicked = () => {
		set_captcha_state((prev) => {
			if (prev === "initial") {
				return "progress";
			} else {
				return prev
			}
		});
	};

	return (
		<div className={styles["captcha__wrapper"]}>
			<button
				className={styles["captcha__btn"]}
				onClick={handle_captcha_clicked}
			>
				<div className={styles["captcha__btn__main"]}>
					{captcha_state === "initial" && (
						<div className={styles["captcha__unchecked"]} />
					)}
					{captcha_state === "success" && (
						<RiCheckboxLine style={{ margin: -8 }} size={46} color="#41A818" />
					)}
					{captcha_state === "error" && (
						<RiErrorWarningFill
							style={{ margin: -8 }}
							size={46}
							color="#A81818"
						/>
					)}
					{captcha_state === "progress" && <LoadingIcon />}
					<p>Are you a human?</p>
				</div>
				<div className={styles["captcha__btn__footer"]}>
					<p>
						Powered by{" "}
						<a href="https://www.npmjs.com/package/@thebrownguy/gotcha">
							Gotcha
						</a>
					</p>
				</div>
			</button>
			{captcha_state === "progress" && (
				<div className={styles["captcha__content"]}>
					<PinGame />
				</div>
			)}
		</div>
	);
}
