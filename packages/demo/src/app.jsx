import { Captcha } from "@thebrownguy/gotcha";

import "./app.css";

function App() {
	const on_captcha_complete = ({score, total_games=0, recording=null}) => {
		console.log(score)
	}
	return (
		<>
			<Captcha onComplete={on_captcha_complete}/>
		</>
	);
}

export default App;
