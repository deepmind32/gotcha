import { useEffect, useRef, useState } from "react";
import styles from "./timer.module.css";

function is_last_moments(time) {
	return time < 10;
}

export default function Timer({ start = 60, on_time_finished, on_change }) {
	const [second, set_second] = useState(start);
	const second_ref = useRef(start);

	useEffect(() => {
		if (second <= 0) {
			on_time_finished?.();
			return;
		}

		const timer_timeout = setTimeout(() => {
			set_second((prev) => prev - 1);
			second_ref.current -= 1;
			on_change(second_ref.current);
		}, 1000);

		return () => clearTimeout(timer_timeout);
	}, [second]);

	useEffect(() => {
		set_second(start);
	}, [start]);

	return (
		<div
			className={`${styles["timer__wrapper"]} ${
				is_last_moments(second)
					? styles["timer--last"]
					: styles["timer--normal"]
			}`}
		>
			<span>{second}</span>
		</div>
	);
}
