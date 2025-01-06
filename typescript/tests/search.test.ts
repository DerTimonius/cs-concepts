import { expect, test } from "vitest";

import { binarySearch } from "../search/binarySearch";
import { linearSearch } from "../search/linearSearch";

test("binary search", () => {
	const arr = [1, 4, 6, 8, 12, 20, 34, 56, 67, 90];
	expect(binarySearch(arr, 8, 0, arr.length)).toEqual(3);
	expect(binarySearch(arr, 11, 0, arr.length)).toEqual(-1);
});

test("linear search", () => {
	const arr = [1, 4, 2, 6, 7, 3, 0, 9];
	expect(linearSearch(arr, 6)).toBeTruthy();
	expect(linearSearch(arr, 5)).toBeFalsy();
});
