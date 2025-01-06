export function mergesort(arr: number[]): number[] {
	const length = arr.length;
	if (length === 1) return arr;

	const middle = Math.floor(length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle, length);
	const leftSorted = mergesort(left);
	const rightSorted = mergesort(right);

	return merge(leftSorted, rightSorted);
}

function merge(left: number[], right: number[]): number[] {
	const sorted: number[] = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			// biome-ignore lint/style/noNonNullAssertion: existence checked
			sorted.push(left.shift()!);
		} else {
			// biome-ignore lint/style/noNonNullAssertion: existence checked
			sorted.push(right.shift()!);
		}
	}

	return sorted.concat(left, right);
}
