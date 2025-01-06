export function quicksort(arr: number[], start: number, end: number): void {
	if (start >= end) {
		return;
	}

	const pivot = arr[start];

	let pointer = start + 1;
	for (let i = pointer; i <= end; i++) {
		if (arr[i] < pivot) {
			const tmp = arr[i];
			arr[i] = arr[pointer];
			arr[pointer] = tmp;
			pointer++;
		}
	}

	arr[start] = arr[pointer - 1];
	arr[pointer - 1] = pivot;

	quicksort(arr, start, pointer - 2);
	quicksort(arr, pointer, end);
}
