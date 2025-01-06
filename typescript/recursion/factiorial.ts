export function factorial(num: number) {
	if (num === 1) return 1;
	if (num < 1) throw new Error("only works with positive integers");

	return num * factorial(num - 1);
}
