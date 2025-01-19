export function selectionSort(nums: number[]) {
	for (let i = 0; i < nums.length; i++) {
		let min = nums[i];
		let minIdx = i;
		for (let j = i; j < nums.length; j++) {
			minIdx = min < nums[j] ? minIdx : j;
			min = Math.min(min, nums[j]);
		}
		[nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
	}
}
