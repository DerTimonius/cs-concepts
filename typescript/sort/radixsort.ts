export function radixSort(nums: number[]) {
	const maxLength = getLongestNumberLength(nums);

	const buckets: number[][] = Array.from({ length: 10 }, () => []);

	for (let i = 0; i < maxLength; i++) {
		while (nums.length) {
			// biome-ignore lint/style/noNonNullAssertion: existence ensured
			const num = nums.shift()!;
			buckets[getDigit(num, i)].push(num);
		}

		for (const bucket of buckets) {
			while (bucket.length) {
				// biome-ignore lint/style/noNonNullAssertion: existence ensured
				nums.push(bucket.shift()!);
			}
		}
	}

	return nums;
}

function getDigit(num: number, place: number) {
	return (
		num
			.toString()
			.split("")
			.at(-1 - place) ?? 0
	);
}

function getLongestNumberLength(nums: number[]) {
	let max = Number.NEGATIVE_INFINITY;

	for (const num of nums) {
		max = Math.max(max, num.toString().length);
	}

	return max;
}
