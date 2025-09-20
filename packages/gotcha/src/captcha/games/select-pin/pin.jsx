import Timer from "../../../components/timer/timer";

export default function PinGame() {
	const handle_time_finished = () => {
		console.log("Oops, you failed");
	};

	return (
		<>
			<header>
				<Timer start={15} on_time_finished={handle_time_finished} />
			</header>
			<main>A dummy game</main>
		</>
	);
}
