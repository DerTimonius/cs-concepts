export function mergesort(arr: number[]): number[] {
  const length = arr.length;
  if (length === 1) return arr;

  const middle = Math.floor(length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle, length);
  const leftSorted = mergesort(leftHalf);
  const rightSorted = mergesort(rightHalf);
  return merge(leftSorted, rightSorted);
}

function merge(left: number[], right: number[]): number[] {
  const sorted: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left[0]);
      left.shift();
    } else {
      sorted.push(right[0]);
      right.shift();
    }
  }
  if (left.length) {
    sorted.push(...left);
  }
  if (right.length) {
    sorted.push(...right);
  }
  return sorted;
}
