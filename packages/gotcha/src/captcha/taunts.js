export function get_slow_typing_taunt() {
	const taunts = [
		"Even my grandma types faster… and she uses one finger.",
		"Autocorrect just beat your high score.",
		"Your keyboard fell asleep waiting for you.",
		"Is this a typing test or a meditation session?",
		"My Wi-Fi lagged and still finished before you.",
		"Even Morse code is quicker than that.",
		"Did you stop to write a novel mid-sentence?",
		"You type like you’re scared of the keys.",
		"Voice typing would’ve lapped you twice.",
		"Even a captcha bot types faster than you.",
	];

	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_typo_taunt() {
	const taunts = [
		"Your ABCs just rage quit.",
		"Sesame Street is ashamed of you.",
		"Even kindergarteners are side-eyeing you rn.",
		"Imagine failing the alphabet in 2025.",
		"School called. They want their tuition back.",
		"This isn’t A to Z, it’s A to ???",
		"Bro just leaked Season 2 of the alphabet.",
		"Alphabet soup makes more sense than that.",
	];
	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_red_light_taunt() {
	const taunts = [
		"Breaking rules like a true rebel… kinda dumb tho.",
		"That light was glowing, not giving consent.",
		"Congratulations, you just pressed ‘oops’ IRL.",
		"Rule #1: Light = stop. You: lol nope.",
		"Next time, try reading lights like humans do.",
		"Glowing light called, it wants its respect back.",
		"You typed… and the universe facepalmed.",
	];

	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_success_taunt() {
	const taunts = [
		"Whoa! You actually did it",
		"Impressive! Your fingers deserve a medal",
		"Speed typing legend unlocked!",
		"You crushed it! Respect",
		"A+ performance! Even I’m impressed.",
		"Nice! But next time… prepare for chaos",
		"Well done… don’t get too comfy, harder awaits!",
		"You nailed it… I’ll see you in the next round!",
		"Congrats! Next time, the challenge fights back.",
		"Good job… but next level won’t go easy on you!",
		"Nice! Next time… chaos incoming",
		"GG! Harder mode is watching",
		"You won… but I’m coming",
		"Fastest? Yes. Safe? Not next round",
	];

	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_distraction() {
	const taunts = [
		"You can’t lick your elbow.",
		"You can’t breathe and swallow at the same time.",
		"It’s impossible to sneeze with your eyes open.",
		"You can’t hum if you pinch your nose shut.",
		"Your tongue can’t touch your chin.",
		"You can’t tickle yourself.",
		"It’s impossible to fold a paper more than 7 times.",
		"You can’t blow air out while laughing.",
		"You can’t say ‘toy boat’ five times fast without messing up.",
		"You can’t wiggle your ears without moving your eyebrows.",
	];

	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_memory_taunts() {
	const taunts = [
		"Congrats, you remembered something that never existed.",
		"Even your brain’s doing improv now.",
		"Nice try, but that emoji is from the DLC pack.",
		"You just clicked pure imagination",
		"That emoji is playing hide-and-seek in your head only.",
		"Bro unlocked ‘false memories’ achievement",
		"I wasn't here before",
	];
	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_time_taunts() {
	const taunts = [
		"Time’s up — even a sloth moves faster than you.",
		"Bro lost to a clock",
		"Did you think this was a turn-based game?",
		"Deadline said hi, you said bye.",
		"Your speed: Windows XP loading screen.",
		"Even buffering YouTube beats you.",
		"Timer won, you didn’t.",
		"You moved slower than my grandma’s Wi-Fi.",
		"Imagine losing to numbers counting down",
		"Time flies, you… clearly don’t.",
		"Are you internet explorer?",
	];

	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_last_minute_taunt() {
	const taunts = [
		"You wrote your homework but forgot to turn it in.",
		"So close… yet your keyboard betrayed you.",
		"You had the answer, but the clock said ‘nah.’",
		"Imagine losing to the submit button.",
		"Congrats, you solved it in another timeline.",
		"Right answer, wrong century",
		"You typed history… but history forgot you.",
		"Submit button speedrun: failed.",
		"The timer clutched harder than you.",
		"Correct but late = still wrong",
	];
	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_math_taunt() {
	const taunts = [
		"Math: 1, You: still loading…",
		"Looks like numbers won this round",
		"Even the calculator is giggling.",
		"So close, yet so… unsolved.",
		"Math isn’t mad, just disappointed.",
		"Don’t worry, numbers confuse me too.",
		"Math teachers everywhere just sighed in sync.",
		"You gave effort… math wanted answers.",
		"Wrong submission? Nah, just ‘creative math.’",
	];

	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}

export function get_generic_failure_taunt() {
	const taunts = [
		"Error 404: skills not found.",
		"You had one job… and missed it.",
		"Failure achieved, achievement unlocked",
		"Even your shadow facepalmed.",
		"Close, but nope.exe",
		"You lost… but stylishly",
		"Don’t worry, failure builds character… lots of it.",
		"Mission failed successfully",
		"Well… that was something.",
		"Game: 1, You: still buffering.",
	];

	return taunts[Math.floor(Math.random() * taunts.length)] ?? taunts[0];
}
