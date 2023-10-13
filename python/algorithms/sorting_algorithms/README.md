# Sorting algorithms

## Bubble sort

Bubble sort is a simple sorting algorithm that check repeatedly if the element at a certain position is larger than the next element. If it's not optimized, it keeps checking until the end - and optimized bubble sort stops at the last correct positioned element (when working with a list of numbers, that's the biggest number).
Since it changes the positions of the list in place without the need of creating another variable, it has a `space complexity` of `O(1)`.

> It's called `bubble sort` because the smallest element are rising to the start like a bubble.

### Efficiency

The downside to its simplicity is its `time complexity` - in the best case it's `O(n)` because it checks the whole list at least once. The worst case would be `O(n * n -1)`or (to keep it simple) `O(n^2)`. Even if the algorithm has been optimized, the worst case does not change.

## Merge sort

Merge sort is a prime example for a `divide and conquer` algorithm: it splits up a given list into smaller and smaller pieces until it has a length of 1 (meaning that the `sublist` is now sorted). Now the merging takes places: The smallest element of one sublist is checked against the smallest element on the next sublist and put into the correct position until there's only one list left.
![Visualization of the merge sort algorithm](https://imgs.search.brave.com/kIW9nWQzIUs71p6SnwA46ifAG45djPDk_OwKTb32wx4/rs:fit:980:800:1/g:ce/aHR0cHM6Ly93d3cu/d29ybGRvZml0ZWNo/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMy9tZXJn/ZS1zb3J0LWV4YW1w/bGVfMC0uMS5wbmc)

### Efficiency

The merge sort algorithm is kind of special in this regard: no matter if you're looking at the best case (meaning an already sorted list), the worst case or the average, the `time complexity` is always `O(n * log n)`.
The space complexity is `O(n)` since there will be `n` sublists of length 1.

## Quicksort

Quicksort is also a `divide and conquer` algorithm that checks all elements against a `pivot element`. This pivot element can be chosen in different ways, the most common ones are:

- Choosing the last element as the pivot
- Choosing a random element as the pivot (it is then put to the last element of the list for the moment)

At the beginning of the function a `pointer` variable is created with the given start parameter. In the next step, every element in the array (from the given start and end parameters) will be checked against the pivot - if that's the case it will be swapped with the position at the pointer variable which will then be increased. At the end of the loop, the `pivot` will be swapped with the element at the pointer.
Now every element on the `left` of the pivot will `smaller` than the pivot, elements on the `right` will be `larger`. The quicksort function is then called recursively twice: once for the left sublist and once for the right until there's nothing left to sort.

### Efficiency

Techinically, quicksort has a worst case efficiency of `O(n^2)` but this is very rarely the case. The average (and also best) case is `O(n * log n)`.
From the space complexity perspective one would think that it's `O(1)` since it's swapping the elements in place. But because it's called recursively one must not forget the stack frames which leads to `O(log n)` - `O(n)` complexity.
