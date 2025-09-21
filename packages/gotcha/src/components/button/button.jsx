import styles from "./button.module.css";

export default function Button({ children, className, ...props }) {
	return (
		<button className={`${styles["button"]} ${className ?? ""}`} {...props}>
			{children}
		</button>
	);
}
