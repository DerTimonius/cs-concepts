import { expect, test } from 'vitest';

import { bubblesort } from '../bubblesort';

test('bubblesort', () => {
  const unsorted = [4, 7, 1, 8, 3, 9, 12, 6, 0];
  bubblesort(unsorted);
  expect(unsorted).toEqual([0, 1, 3, 4, 6, 7, 8, 9, 12]);
});
