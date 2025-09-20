import { useState } from "react";
import { RiCheckboxLine, RiErrorWarningFill } from "react-icons/ri";
import {
	RiProgress1Line,
	RiProgress2Line,
	RiProgress3Line,
	RiProgress4Line,
	RiProgress5Line,
	RiProgress6Line,
	RiProgress7Line,
	RiProgress8Line,
} from "react-icons/ri";

import styles from "./captcha.module.css";

export function Captcha() {
	// initial, progress, success, error
	const [captcha_state, set_captcha_state] = useState("initial");

	const handle_captcha_clicked = () => {
		set_captcha_state((prev) => {
			if (prev === "initial") {
				return "error";
			} else {
				return "initial";
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
						<RiCheckboxLine style={{ margin: -8 }} size={46} color="#41A818"/>
					)}
					{captcha_state === "error" && (
						<RiErrorWarningFill style={{ margin: -8 }} size={46} color="#A81818"/>
					)}
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
			<div className={styles["captcha__content"]}></div>
		</div>
	);
}
