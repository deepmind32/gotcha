import { useEffect, useState } from "react";
import styles from "./timer.module.css";

function is_last_moments(time) {
	return time < 10;
}

export default function Timer({ start = 60, on_time_finished }) {
	const [second, set_second] = useState(start);

	useEffect(() => {
		const timer_interval = setInterval(() => {
			set_second((prev) => {
				if (prev > 0) {
					return prev - 1;
				} else {
					on_time_finished();
					clearInterval(timer_interval);
					return 0;
				}
			});
		}, 1000);

		return () => {
			clearInterval(timer_interval);
		};
	}, []);

	useEffect(() => {
		set_second(start);
	}, [start]);

	return (
		<div
			className={`${styles["timer__wrapper"]} ${
				is_last_moments(second)
					? styles["timer--last"]
					: styles["timer--normal"]
			}
		`}
		>
			<span>{second}</span>
		</div>
	);
}
