import { Captcha } from "@thebrownguy/gotcha";
import { FaNpm, FaGithub } from "react-icons/fa";
import { PiStepsBold } from "react-icons/pi";
import { GiCardRandom } from "react-icons/gi";

import styles from "./app.module.css";
import ModernSelect from "./modern-select/modern-select";
import { useState } from "react";

function App() {
	const [difficulty, set_difficuly] = useState("ladder");

	const handle_option_change = (option) => {
		set_difficuly(option);
	};

	const on_captcha_complete = ({ score, record = null }) => {
		console.log(score, record);
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
				<Captcha
					difficulty={difficulty}
					onComplete={on_captcha_complete}
					tries={2}
				/>
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
