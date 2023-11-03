export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j = i - 1;
    while (j >= 0) {
      if (value < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = value;
        j--;
      } else {
        break;
      }
    }
  }
  return arr;
}
