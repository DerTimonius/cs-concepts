import { expect, test } from 'vitest';

import { bubblesort } from '../bubblesort';
import { mergesort } from '../mergesort';
import { insertionSort } from '../insertionSort';
import { quicksort } from '../quicksort';

test('bubblesort', () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  bubblesort(unsorted);
  expect(unsorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});

test('mergesort', () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  const sorted = mergesort(unsorted);
  expect(sorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});

test('insertion sort', () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  const sorted = insertionSort(unsorted);
  expect(sorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});

test('quicksort', () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  const sorted = quicksort(unsorted);
  expect(sorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});
