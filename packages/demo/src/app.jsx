import { Captcha } from "@thebrownguy/gotcha";

import "./app.css";

function App() {
	const on_captcha_complete = ({ score, record = null }) => {
		console.log(record);
	};
	return (
		<>
			<Captcha onComplete={on_captcha_complete} />
		</>
	);
}

export default App;
