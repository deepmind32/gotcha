import QuizGame from "./games/quiz/quiz";
import AToZGame from "./games/a-to-z/a-to-z";
import ImposterEmojiGame from "./games/imposter-emoji/imposter-emoji";
import MathGame from "./games/math-game/math-game";
import RememberTheOrderGame from "./games/remember-the-order/remember";
import PinGame from "./games/select-pin/pin";
import WASDReflexGame from "./games/wasd-reflex/wasd-reflex";

// ordering represents difficulty
export const ALL_GAMES = [
	{
		game: "quiz",
		component: QuizGame,
		props: [
			{
				question: "2 + 2 = ?",
				answer: "4",
				time: 7,
			},
			{
				question:
					"You ate 1 apple from an basket with 3 oranges and 2 apples. How many oranges are left?",
				answer: "3",
				time: 10,
			},
			{
				question: "What is 0/0?",
				answer: "undefined",
				time: 7,
			},
		],
	},
	{
		type: "math game",
		component: MathGame,
		props: [
			{
				difficulty: "easy",
				time: 7,
				question: "7+65=?",
				answer: 72,
			},
			{
				difficulty: "medium",
				time: 10,
				question: "99+102=?",
				answer: 201,
			},
			{
				difficulty: "hard",
				time: 20,
				question: "86+21=?",
				answer: 107,
			},
		],
	},
	{
		type: "remember",
		component: RememberTheOrderGame,
		props: [
			{
				width: 3,
				numbers: 5,
				order_matters: false,
				time: [10, 3, 20],
			},
			{
				width: 4,
				numbers: 6,
				order_matters: false,
				time: [10, 3, 20],
			},
			{
				width: 4,
				numbers: 5,
				order_matters: true,
				time: [12, 3, 20],
			},
		],
	},
	{
		type: "A to Z",
		component: AToZGame,
		props: [
			{
				time: 26,
				total_light_glows: 0,
				reverse: false,
			},
			{
				time: 15,
				total_light_glows: 0,
				reverse: false,
			},
			{
				time: 26,
				total_light_glows: 0,
				reverse: true,
			},
		],
	},
	{
		type: "quiz",
		component: QuizGame,
		props: [
			{
				question: "Who is the yellow color electric pokemon?",
				answer: "pikachu",
				time: 7,
			},
			{
				question: "What does LOL stands for?",
				answer: "Laugh Out Loud",
				time: 7,
			},
			{
				question: "Right or Wrong?",
				answer: "wrong",
				time: 5,
			},
		],
	},
	{
		type: "Imposter Emoji",
		component: ImposterEmojiGame,
		props: [
			{
				width: 3,
				time: [8, 3, 15],
			},
			{
				width: 4,
				time: [10, 3, 10],
			},
			{
				width: 4,
				time: [5, 3, 10],
			},
		],
	},
	{
		type: "wasd reflex",
		component: WASDReflexGame,
		props: [
			{
				target: 3,
				times: [10, 30],
				speed_factor: 0.5,
			},
			{
				target: 5,
				times: [5, 30],
				speed_factor: 1,
			},
			{
				target: 8,
				times: [5, 30],
				speed_factor: 0.8,
			},
		],
	},
	{
		type: "select-pin",
		component: PinGame,
		props: [
			{
				digit: 1,
				time: [10, 30],
			},
			{
				digit: 2,
				time: [5, 60],
			},
			{
				digit: 2,
				time: [5, 30],
			},
		],
	},
	{
		type: "quiz",
		component: QuizGame,
		props: [
			{
				question:
					"Deocode this message from Base64 encoding: SSBhbSBub3QgYSByb2JvdA==",
				answer: "I am not a robot",
				time: 30,
			},
			{
				question:
					"Which country does this coordinate belongs too? 28.3949° 84.1240° E",
				answer: "Nepal",
				time: 30,
			},
			{
				question: "Type first 15 digits of PI (3.14...)",
				answer: "3.14159265358979",
				time: 25,
			},
		],
	},
	{
		type: "math game",
		component: MathGame,
		props: [
			{
				difficulty: "medium",
				question: "73+21=?",
				answer: 94,
				time: 10,
			},
			{
				difficulty: "hard",
				question: "136+25=?",
				answer: 61,
				time: 13,
			},
			{
				difficulty: "very hard",
				question: "87+49=?",
				answer: 136,
				time: 15,
			},
		],
	},
	{
		type: "remember",
		component: RememberTheOrderGame,
		props: [
			{
				width: 5,
				numbers: 8,
				order_matters: false,
				time: [10, 3, 15],
			},
			{
				width: 5,
				numbers: 8,
				order_matters: true,
				time: [15, 3, 20],
			},
			{
				width: 6,
				numbers: 9,
				order_matters: true,
				time: [15, 3, 20],
			},
		],
	},
	{
		type: "A to Z",
		component: AToZGame,
		props: [
			{
				time: 20,
				total_light_glows: 2,
				reverse: false,
			},
			{
				time: 25,
				total_light_glows: 3,
				reverse: true,
			},
			{
				time: 20,
				total_light_glows: 3,
				reverse: true,
			},
		],
	},
	{
		type: "Imposter Emoji",
		component: ImposterEmojiGame,
		props: [
			{
				width: 5,
				time: [8, 3, 12],
			},
			{
				width: 6,
				time: [8, 5, 10],
			},
			{
				width: 6,
				time: [5, 5, 10],
			},
		],
	},
	{
		type: "wasd reflex",
		component: WASDReflexGame,
		props: [
			{
				target: 8,
				times: [5, 20],
				speed_factor: 1,
			},
			{
				target: 9,
				times: [5, 20],
				speed_factor: 1.1,
			},
			{
				target: 11,
				times: [5, 22],
				speed_factor: 1,
			},
		],
	},
	// impossible begins here
	{
		type: "select-pin",
		component: PinGame,
		props: [
			{
				digit: 3,
				time: [5, 20],
			},
			{
				digits: 4,
				time: [5, 20],
			},
			{
				digits: 5,
				time: [5, 20],
			},
		],
	},
	{
		type: "quiz",
		component: QuizGame,
		props: [
			{
				question:
					"Can you unhash the string using MD5 hash? 474433b791d01af5c4a0e802e419014f",
				answer: "i am not a robot duhh!",
				time: 20,
			},
			{
				question: "100 digits of PI?",
				answer: "You can't type that within 10 seconds",
				time: 10,
			},
			{
				question: "What is the largest prime number?",
				answer: "noone knows",
				time: 10,
			},
		],
	},
	{
		type: "math game",
		component: MathGame,
		props: [
			{
				difficulty: "medium",
				question: "73x21=?",
				answer: 1533,
				time: 8,
			},
			{
				difficulty: "hard",
				question: "136x25=?",
				answer: 3400,
				time: 8,
			},
			{
				difficulty: "very hard",
				question: "87x49=?",
				answer: 4263,
				time: 10,
			},
		],
	},
	{
		type: "remember",
		component: RememberTheOrderGame,
		props: [
			{
				width: 6,
				numbers: 9,
				order_matters: true,
				time: [9, 3, 15],
			},
			{
				width: 6,
				numbers: 21,
				order_matters: false,
				time: [10, 3, 15],
			},
			{
				width: 6,
				numbers: 21,
				order_matters: true,
				time: [10, 3, 15],
			},
		],
	},
	{
		type: "A to Z",
		component: AToZGame,
		props: [
			{
				time: 10,
				total_light_glows: 0,
				reverse: false,
			},
			{
				time: 15,
				total_light_glows: 0,
				reverse: true,
			},
			{
				time: 15,
				total_light_glows: 2,
				reverse: false,
			},
		],
	},
	{
		type: "Imposter Emoji",
		component: ImposterEmojiGame,
		props: [
			{
				width: 6,
				time: [5, 5, 5],
			},
			{
				width: 7,
				time: [5, 5, 5],
			},
			{
				width: 7,
				time: [4, 5, 4],
			},
		],
	},
	{
		type: "wasd reflex",
		component: WASDReflexGame,
		props: [
			{
				target: 12,
				times: [5, 15],
				speed_factor: 0.9,
			},
			{
				target: 15,
				times: [5, 20],
				speed_factor: 1,
			},
			{
				target: 16,
				times: [5, 20],
				speed_factor: 1.1,
			},
		],
	},  
].slice(0, 1);
