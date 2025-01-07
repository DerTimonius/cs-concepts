export function binarySearch(
	arr: number[],
	val: number,
	low: number,
	high: number,
): number {
	if (low >= high) {
		return -1;
	}

	const middle = Math.floor((low + high) / 2);
	const middleVal = arr[middle];

	if (middleVal === val) {
		return middle;
	}
	if (middleVal > val) {
		return binarySearch(arr, val, low, middle);
	}

	return binarySearch(arr, val, middle + 1, high);
}
