import Timer from "../../../components/timer/timer";
import styles from "./wasd-reflex.module.css";

export default function WASDReflexGame({
	number = [],
	time = [],
	onSuccess,
	onFail,
}) {
	const handle_time_over = () => {};

	return (
		<>
			<header>
				<div>
					<h3>Show off your reflexes</h3>
					<p>
						You get 3 tries: 2 practice, 1 real. Use WASD or arrow keys to hit
						the glowing key. Fastest wins.
					</p>
				</div>
				<Timer start={60} on_time_finished={handle_time_over} />
			</header>
			<main>
				<div className={styles["wasd__display"]}>
					<div className={styles["wasd__display__row"]}>
						<div className={`${styles["wasd__key"]} ${styles["active"]}`}>
							W
						</div>
					</div>
					<div className={styles["wasd__display__row"]}>
						<div className={`${styles["wasd__key"]} ${styles["correct"]}`}>A</div>
						<div className={`${styles["wasd__key"]} ${styles["wrong"]}`}>S</div>
						<div className={styles["wasd__key"]}>D</div>
					</div>
				</div>
			</main>
		</>
	);
}
