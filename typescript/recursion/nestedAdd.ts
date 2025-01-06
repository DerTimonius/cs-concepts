import { NestedArray } from "../utils/types";

export function nestedAdd<T>(nums: NestedArray<T>) {
	let sum = 0;
	for (const num of nums) {
		sum += Array.isArray(num)
			? nestedAdd(num)
			: typeof num === "number"
				? num
				: 0;
	}

	return sum;
}
