import { useState } from "react";
import { RiCheckboxLine, RiErrorWarningFill } from "react-icons/ri";
import { BiSolidError, BiSolidFlagCheckered } from "react-icons/bi";
import { IoRefreshCircleOutline } from "react-icons/io5";

import styles from "./captcha.module.css";
import LoadingIcon from "../components/loading/loading";
import PinGame from "./games/select-pin/pin";
import WASDReflexGame from "./games/wasd-reflex/wasd-reflex";
import MathGame from "./games/math-game/math-game";
import AToZGame from "./games/a-to-z/a-to-z";
import ImposterEmojiGame from "./games/imposter-emoji/imposter-emoji";

export function Captcha({ difficulty, onComplete }) {
	// initial, progress, success, error
	const [captcha_state, set_captcha_state] = useState(
		process.env.NODE_ENV === "development" ? "progress" : "initial"
	);
	const [message, set_message] = useState(null);

	const handle_captcha_clicked = () => {
		set_captcha_state((prev) => {
			if (prev === "initial") {
				return "progress";
			} else {
				return prev;
			}
		});
	};

	const handle_challenge_failed = ({ score, message }) => {
		set_message({
			score,
			message,
			type: "failure",
		});
	};

	const handle_challenge_success = ({ score, message }) => {
		set_message({
			score,
			message,
			type: "success",
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
					{/* <PinGame
						onFail={handle_challenge_failed}
						onSuccess={handle_challenge_success}
					/> */}
					{/* <WASDReflexGame
						onFail={handle_challenge_failed}
						onSuccess={handle_challenge_success}
					/> */}
					{/* <MathGame
						difficulty="hard"
						question="2+3"
						answer={5}
						time={400}
						onFail={handle_challenge_failed}
						onSuccess={handle_challenge_success}
					/> */}
					{/* <AToZGame
						difficulty="hard"
						time={10}
						onFail={handle_challenge_failed}
						onSuccess={handle_challenge_success}
					/> */}
					<ImposterEmojiGame
						onFail={handle_challenge_failed}
						onSuccess={handle_challenge_success}
					/>
					{message && (
						<div className={styles["captcha__failed"]}>
							<div className={styles["captcha__failed__content"]}>
								{message["type"] === "failure" ? (
									<BiSolidError color="#b0b0b0" size="32px" />
								) : (
									<BiSolidFlagCheckered color="#b0b0b0" size="32px" />
								)}
								<p>{message["message"]}</p>
								<button style={{ marginTop: 16 }}>
									<IoRefreshCircleOutline size="32px" />
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
