import {
	RiCheckboxBlankLine,
	RiCheckboxLine,
	RiErrorWarningFill,
} from "react-icons/ri";
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
	return (
		<div className={styles["captcha__wrapper"]}>
			<button className={styles["captcha__btn"]}>
				<div className={styles["catpcha__btn__icon"]}>
					<RiCheckboxBlankLine />
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
