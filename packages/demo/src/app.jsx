import { Captcha } from "@thebrownguy/gotcha";
import { FaNpm, FaGithub } from "react-icons/fa";
import { PiStepsBold } from "react-icons/pi";
import { MdRestartAlt } from "react-icons/md";
import { GiCardRandom } from "react-icons/gi";

import styles from "./app.module.css";
import ModernSelect from "./modern-select/modern-select";
import { useState } from "react";

function compute_stats(record) {
	const captcha_iq = +(
		(record.score / (record.total_games + 0.00001)) *
		100
	).toFixed(2);
	const success_rate = +record.total_success / (record.total_games + 0.00001);
	const retires = +(
		(record.total_retries / (record.total_games + 0.00001)) *
		100
	).toFixed(0);
	const one_shots = +(
		(record.total_one_shot_success / (record.total_success + 0.00001)) *
		100
	).toFixed(0);
	let title = "Rookie 🐓";

	if (captcha_iq > 99) {
		title = "Bot Slayer ⚡";
	}

	if (success_rate < 50 || captcha_iq < 50) {
		title = "Rookie 🐓";
	}
	if (one_shots > 70) {
		title = "Sniper 🎯";
	}
	if (success_rate > 80 && retires > 40) {
		title = "Clutch Player 🕹";
	}
	if (captcha_iq >= 90 && one_shots > 50) {
		title = "Overachiever 🤓";
	}
	if (success_rate >= 50 && success_rate <= 70 && retires >= 50) {
		title = "Chaos Agent 🌀";
	}
	if (retires < 20 && success_rate > 75) {
		title = "Steady Hands ✋";
	}
	if (success_rate >= 60 && one_shots <= 30) {
		title = "Lucky Shot 🤞";
	}
	if (record.total_games <= 3) {
		title = "Rookie 🐓";
	}

	return title;
}

function App() {
	const [difficulty, set_difficuly] = useState("ladder");
	const [completed, set_completed] = useState(null);
	const handle_option_change = (option) => {
		set_difficuly(option);
	};

	const on_captcha_complete = ({ score, record = null }) => {
		set_completed({
			...record,
			score,
			title: compute_stats({ ...record, score }),
		});
	};

	const handle_restart_game = () => {
		set_completed(null);
	};

	return (
		<div className={styles["app"]}>
			<header className={styles["app__header"]}>
				<h1 className={styles["logo"]}>Gotcha</h1>

				<div className={styles["select__wrapper"]}>
					<ModernSelect
						name="Challenge Type"
						type="icon"
						options={{
							ladder: {
								icon: PiStepsBold,
								name: "Ladder Mode",
								info: "Gradually increases the difficulty level",
							},
							random: {
								icon: GiCardRandom,
								name: "Random Mode",
								info: "Might be easy or hard or impossible.",
							},
						}}
						initial_option={"ladder"}
						on_option_change={handle_option_change}
					/>
				</div>
			</header>

			<main className={styles["app__main"]}>
				{!completed && (
					<Captcha
						difficulty={difficulty}
						onComplete={on_captcha_complete}
						tries={2}
					/>
				)}
				{completed && (
					<div className={styles["statistics"]}>
						<div className={styles["stats__header"]}>
							<p>You've earned the title</p>
							<h3>{completed.title ?? "Rookie 🐓"}</h3>
						</div>

						<div className={styles["stats__numbers"]}>
							<div className={styles["stats__numbers__row"]}>
								<div className={styles["stats__numbers__total"]}>
									<p>Your Captcha IQ</p>
									<h3>
										{(
											(completed.score / (completed.total_games + 0.000001)) *
											100
										).toFixed(2) ?? 0}
										%
									</h3>
								</div>
							</div>

							<div className={styles["stats__numbers__row"]}>
								<div className={styles["stats__numbers__total"]}>
									<p>Total Successful Games</p>
									<h3>
										{completed.total_success}/{completed.total_games}
									</h3>
								</div>
							</div>

							<div className={styles["stats__numbers__row"]}>
								<div className={styles["stats__numbers__retries"]}>
									<p>Total Retries</p>
									<h3>
										{(
											(completed.total_retries /
												(completed.total_games + 0.00001)) *
											100
										).toFixed(0) ?? 0}
										%
									</h3>
								</div>

								<div className={styles["stats__numbers__one_shot"]}>
									<p>One Shots</p>
									<h3>
										{(
											(completed.total_one_shot_success /
												(completed.total_success + 0.001)) *
											100
										).toFixed(0) ?? 0}
										%
									</h3>
								</div>
							</div>
						</div>
						<button onClick={handle_restart_game}>
							<MdRestartAlt size="2rem" />
						</button>
					</div>
				)}

				<div className={styles["app__header__links"]}>
					<a href="">
						<FaNpm size="2rem" />
					</a>
					<a href="">
						<FaGithub size="1.5rem" />
					</a>
				</div>
			</main>

			<footer className={styles["app__footer"]}>
				<p>
					Get on your website with - <span>npm -i @thebrownguy/gotcha</span>
				</p>
			</footer>
		</div>
	);
}

export default App;
