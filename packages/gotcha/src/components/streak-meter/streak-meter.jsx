import styles from "./streak-meter.module.css";

function get_fire_emojis(streak) {
	if (streak == 0) {
		return "🔥x0";
	} else if (streak >= 1 && streak <= 3) {
		return Array(streak).fill("🔥").join("");
	} else {
		return `🔥x${streak}`;
	}
}

function get_streak_status(streak) {
	if (streak <= 5) {
		return "beginner";
	} else if (streak <= 15) {
		return "intermediate";
	} else {
		return "advance";
	}
}

export default function StreakMeter({
	streak,
	max_streak = undefined,
	target = "♾",
}) {
	return (
		<div className={styles["streak_meter"]}>
			<p className={styles[get_streak_status(streak)]}>
				{get_fire_emojis(streak)}/{target}
			</p>
			{typeof max_streak !== "undefined" && <p>Max Streak: {max_streak}</p>}
		</div>
	);
}
