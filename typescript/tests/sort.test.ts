import { expect, test } from "vitest";

import { bubblesort } from "../bubblesort";
import { mergesort } from "../mergesort";
import { insertionSort } from "../insertionSort";
import { quicksort } from "../quicksort";

test("bubblesort", () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  bubblesort(unsorted);
  expect(unsorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});

test("mergesort", () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  const sorted = mergesort(unsorted);
  expect(sorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});

test("insertion sort", () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  const sorted = insertionSort(unsorted);
  expect(sorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});

test("quicksort", () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  quicksort(unsorted, 0, unsorted.length);
  expect(unsorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});

test("quicksort with larger array", () => {
  const arr = [
    214, 295, 99, 170, 68, 878, 157, 671, 120, 319, 66, 256, 32, 470, 779, 848,
    110, 802, 105, 768, 55, 880, 498, 964, 631, 611, 880, 33, 228, 283, 325,
    403, 698, 41, 85, 413, 625, 739, 771, 584, 679, 437, 831, 443, 334, 315,
    534, 326, 649, 591, 76, 92, 928, 990, 190, 477, 542, 504, 432, 402, 734,
    630, 246, 429, 984, 276, 852, 116, 494, 265, 905, 493, 185, 531, 513, 614,
    899, 878, 7, 817, 480, 706, 509, 673, 66, 924, 772, 496, 499, 683, 755, 689,
    452, 507, 570, 562, 775, 520, 669, 447,
  ];

  quicksort(arr, 0, arr.length);
  expect(arr).toEqual([
    7, 32, 33, 41, 55, 66, 66, 68, 76, 85, 92, 99, 105, 110, 116, 120, 157, 170,
    185, 190, 214, 228, 246, 256, 265, 276, 283, 295, 315, 319, 325, 326, 334,
    402, 403, 413, 429, 432, 437, 443, 447, 452, 470, 477, 480, 493, 494, 496,
    498, 499, 504, 507, 509, 513, 520, 531, 534, 542, 562, 570, 584, 591, 611,
    614, 625, 630, 631, 649, 669, 671, 673, 679, 683, 689, 698, 706, 734, 739,
    755, 768, 771, 772, 775, 779, 802, 817, 831, 848, 852, 878, 878, 880, 880,
    899, 905, 924, 928, 964, 984, 990,
  ]);
});
