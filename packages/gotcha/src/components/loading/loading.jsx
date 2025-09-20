import { useState, useEffect } from "react";
import {
	RiProgress1Line,
	RiProgress2Line,
	RiProgress3Line,
	RiProgress4Line,
	RiProgress5Line,
	RiProgress6Line,
	RiProgress7Line,
	RiProgress8Line,
} from "react-icons/ri";

const LOADINGS = [
	RiProgress1Line,
	RiProgress2Line,
	RiProgress3Line,
	RiProgress4Line,
	RiProgress5Line,
	RiProgress6Line,
	RiProgress7Line,
	RiProgress8Line,
];
export default function LoadingIcon() {
	const [index, set_index] = useState(7);
	useEffect(() => {
		const logo_interval = setInterval(() => {
			set_index((prev) => (prev + 1) % LOADINGS.length);
		}, 100);

		return () => {
			clearInterval(logo_interval);
		};
	}, []);

	const Logo = LOADINGS[index]

	return <Logo style={{margin: -8}} size={46}/>
}
