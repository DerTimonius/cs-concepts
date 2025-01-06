import { expect, test } from "vitest";
import { nestedAdd } from "../recursion/nestedAdd";
import { factorial } from "../recursion/factiorial";

test("nested arrays addition", () => {
	expect(nestedAdd([1, 2, 3])).toEqual(6);
	expect(nestedAdd([1, [2], 3])).toEqual(6);
	expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
	expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});

test("factorials", () => {
	expect(factorial(1)).toEqual(1);
	expect(factorial(2)).toEqual(2);
	expect(factorial(3)).toEqual(6);
	expect(factorial(10)).toEqual(3628800);
});
