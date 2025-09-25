import { useRef, useState } from "react";
import { RiCheckboxLine, RiErrorWarningFill } from "react-icons/ri";
import {
	BiSolidError,
	BiSolidFlagCheckered,
	BiSkipNextCircle,
} from "react-icons/bi";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { GiStopSign } from "react-icons/gi";

import styles from "./captcha.module.css";
import LoadingIcon from "../components/loading/loading";
import { ALL_GAMES } from "./captcha-utils";

function get_game(previous_index, previous_difficulty, type) {
	const total_games = ALL_GAMES.length;

	let [game_index, game_difficulty] = [undefined, undefined];
	if (type === "random") {
		game_index = Math.floor(Math.random() * total_games);
		game_difficulty = Math.floor(Math.random() * 3);
	} else if (type === "ladder") {
		if (
			typeof previous_difficulty === "undefined" ||
			typeof previous_index === "undefined"
		) {
			[game_index, game_difficulty] = [0, 0];
		} else {
			game_difficulty = previous_difficulty == 2 ? 0 : previous_difficulty + 1;
			game_index =
				previous_difficulty == 2 ? previous_index + 1 : previous_index;
		}
	}

	return [game_index, game_difficulty];
}

const GameComponent = ({ index, difficulty, onFail, onSuccess }) => {
	const Game = ALL_GAMES[index]["component"];
	const props = ALL_GAMES[index]["props"][difficulty];

	return <Game {...props} onSuccess={onSuccess} onFail={onFail} />;
};

// questions = -1 means infinity and any positive number means there will be n number of questions
// for each question there will be t tries
// difficuly = random, ladder
export function Captcha({
	difficulty = "random",
	questions = -1,
	tries = 1,
	show_cancel = true,
	record = true,
	onComplete,
}) {
	// initial, progress, success, error
	const [captcha, set_captcha] = useState({
		state: "initial",
		questions,
		try: tries,
		index: undefined,
		difficulty: undefined,
		score: 0,
	});
	const [message, set_message] = useState(null);
	const key_ref = useRef(1);

	const handle_captcha_clicked = () => {
		if (captcha.state !== "initial") {
			return;
		}

		let [game_index, game_difficulty] = get_game(
			captcha.index,
			captcha.difficulty,
			difficulty
		);

		set_captcha((prev) => ({
			...prev,
			state: prev["state"] === "initial" ? "progress" : prev,
			questions: prev.questions - 1,
			try: prev.try - 1,
			index: game_index,
			difficulty: game_difficulty,
		}));
	};

	const handle_challenge_failed = ({ score, message }) => {
		// if last question and last try do complete failed
		if (
			difficulty === "ladder" &&
			captcha.index === ALL_GAMES.length - 1 &&
			captcha.difficulty === 2 &&
			captcha.try == 0
		) {
			set_captcha((prev) => ({
				...prev,
				state: "error",
				score: prev.score + score,
			}));
			onComplete({
				score: captcha.score + score,
			});
			return;
		}

		if (captcha.questions === 0 && captcha.try === 0) {
			set_captcha((prev) => ({
				...prev,
				state: "error",
				score: prev.score + score,
			}));
			onComplete({
				score: captcha.score + score,
			});
			return;
		}

		// if last try then, do next question
		if (captcha.try === 0) {
			set_captcha((prev) => ({ ...prev, score: prev.score + score }));
			set_message({
				score,
				message,
				type: "failure",
				option: "next",
			});
			return;
		}

		set_captcha((prev) => ({ ...prev, score: prev.score + score }));

		set_message({
			score,
			message,
			type: "failure",
			option: "retry",
		});
	};

	const handle_game_retry = () => {
		set_captcha((prev) => ({
			...prev,
			try: prev.try - 1,
		}));
		key_ref.current = Date.now();
		set_message(null);
	};

	const handle_next_game = () => {
		const [new_index, new_difficulty] = get_game(
			captcha.index,
			captcha.difficulty,
			difficulty
		);
		set_captcha((prev) => ({
			...prev,
			try: tries - 1,
			index: new_index,
			questions: prev.questions - 1,
			difficulty: new_difficulty,
		}));

		set_message(null);
		key_ref.current += 1;
	};

	const handle_challenge_success = ({ score, message }) => {
		// check if all the questions and the difficulty has been completed
		// TODO add data like what was done in the game history using game_ref
		if (
			difficulty === "ladder" &&
			captcha.index === ALL_GAMES.length - 1 &&
			captcha.difficulty === 2
		) {
			onComplete?.({
				score: captcha.score + score,
				message: "You completed all the challenge.",
			});
			set_captcha((prev) => ({
				...prev,
				state: "success",
				score: prev.score + score,
			}));
			return;
		}

		set_captcha((prev) => ({ ...prev, score: captcha.score + score }));

		set_message({
			score,
			message,
			type: "success",
			option: "next",
		});
	};

	const handle_stop_game = () => {
		set_captcha((prev) => ({
			...prev,
			state: "success",
		}));
		onComplete({
			score: captcha.score,
		});
	};

	return (
		<div className={styles["captcha__wrapper"]}>
			<button
				className={styles["captcha__btn"]}
				onClick={handle_captcha_clicked}
			>
				<div className={styles["captcha__btn__main"]}>
					{captcha.state === "initial" && (
						<div className={styles["captcha__unchecked"]} />
					)}
					{captcha.state === "success" && (
						<RiCheckboxLine style={{ margin: -8 }} size={46} color="#41A818" />
					)}
					{captcha.state === "error" && (
						<RiErrorWarningFill
							style={{ margin: -8 }}
							size={46}
							color="#A81818"
						/>
					)}
					{captcha.state === "progress" && <LoadingIcon />}
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
			{captcha.state === "progress" && (
				<div className={styles["captcha__content"]}>
					<GameComponent
						key={key_ref.current}
						index={captcha.index}
						difficulty={captcha.difficulty}
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
								{message.option === "retry" && (
									<button style={{ marginTop: 16 }} onClick={handle_game_retry}>
										<IoRefreshCircleOutline size="32px" />
									</button>
								)}
								{message.option === "next" && (
									<div className={styles["buttons"]}>
										<button onClick={handle_next_game}>
											<BiSkipNextCircle size="32px" />
										</button>
										{show_cancel && (
											<button onClick={handle_stop_game}>
												<GiStopSign size="32px" color="var(--color-red)" />
											</button>
										)}
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
