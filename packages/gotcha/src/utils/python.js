// returns an array from first to end but not including end
export function range(first, end, increment = 1) {
	const start = typeof end === "undefined" ? 0 : first;
	const finish = typeof end == "undefined" ? first : end;

	const return_array = [];

	let next_number = start;
	while (next_number < finish) {
		return_array.push(next_number)
		next_number += increment
	}

	return return_array;
}
