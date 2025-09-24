import { useState } from "react";
import Timer from "../../../components/timer/timer";
import styles from "./remember.module.css";
import { range } from "../../../utils/python";
import { get_random_samples } from "../../utils";

export default function RememberTheOrderGame({
	width = 3,
	numbers = 4,
	order_matters = true,
	time = [5, 3, 15],
	onSuccess,
	onFail,
}) {
	const [game, set_game] = useState({
		active: true,
		stage: 0,
		instruction: "Memorize the patterns",
		correct: get_random_samples(range(width * width), numbers),
		clicked: [],
	});

	const handle_time_finished = () => {
		if (game.stage === 0) {
			set_game((prev) => ({
				...prev,
				stage: 1,
				instruction: "Do you know you cannot laugh while your nose are closed?",
			}));
		} else if (game.stage === 1) {
			set_game((prev) => ({
				...prev,
				stage: 2,
				instruction: order_matters
					? "Click the boxes in correct order."
					: "Click the earlier highlighted boxes.",
			}));
		} else if (game.stage === 2) {
			if (game.active) {
				set_game((prev) => ({
					...prev,
					active: false,
				}));
				onFail({
					score: game.clicked.length,
					message: "Better care about your time at next round",
				});
			}
		}
	};

	const handle_btn_clicked = (index) => {
		if (!game.active || game.stage !== 2) {
			return;
		}

		const pos = Math.max(0, game.clicked.length);

		if (
			game.correct[pos] === index ||
			(!order_matters && game.correct.includes(index))
		) {
			if (game.clicked.length === numbers - 1) {
				set_game((prev) => ({ ...prev, active: false }));
				onSuccess({
					score: 1,
					message: "Didn't knew you were that sharp",
				});
				return;
			}
			set_game((prev) => ({ ...prev, clicked: [...prev.clicked, index] }));
		} else {
			set_game((prev) => ({ ...prev, active: false }));
			onFail({
				score: game.clicked.length / numbers,
				message: "Whoops! you may need to sharpen your brain",
			});
		}
	};
	return (
		<>
			<header>
				<div>
					<h3>Test your brain</h3>
					{order_matters && (
						<p>
							Remember the number patterns and click as per the pattern later
						</p>
					)}
					{!order_matters && (
						<p>Remember the number patterns and click the pattern later</p>
					)}
				</div>
				<Timer
					start={time[game?.stage ?? 0]}
					on_time_finished={handle_time_finished}
				/>
			</header>

			<main className={styles["main"]}>
				<p className={styles["instruction"]}>{game.instruction}</p>
				{game.stage !== 1 && (
					<div
						className={styles["pattern_grid"]}
						style={{ gridTemplateColumns: `repeat(${width}, auto)` }}
					>
						{range(width * width).map((item) => (
							<button
								key={item}
								onClick={handle_btn_clicked.bind(null, item)}
								className={
									(game.clicked.includes(item) || game.stage !== 2) &&
									game.correct.includes(item)
										? styles["button--correct"]
										: ""
								}
							>
								{order_matters && (game.clicked.includes(item) || game.stage !== 2) &&
									game.correct.includes(item) && (
										<span>{game.correct.indexOf(item) + 1}</span>
									)}
							</button>
						))}
					</div>
				)}
			</main>
		</>
	);
}
