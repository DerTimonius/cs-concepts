# Asymptotic & Big O Notation

The efficiency of an algorithm can not be represented in be compared using the amount of time it took for the algorithm to complete its task. Too many variables can distort this outcome:

- Processing power
- Programming language used
- Complexity of input size

So there's a need for a method of describing the efficiency. Look no further than algebra. With algebra it's possible to describe this problem.

But since not everyone wants to learn the algebra necessary it has become standard to describe it with the Big O Notation.

> Technically the Big O Notation shows the worst case scenario of the algorithm. The best case scenario would be the Ω(omega) Notation, the average case would be the Θ(theta) Notation.

## Time complexity vs space complexity

Not only is it necessary to describe the `time complexity` of a function, but also the `space complexity`. The space complexity usually refers to the amount of memory that is used up with new variables, lists etc.
Take for example the `bubble sort` algorithm: since it is not creating any variables or lists along the way and keeps moving the elements in the given list inside said list, it has a constant space complexity of `O(1)`.
The merge sort algorithm on the other hand has a space complexity of `O(N)` since it is creating small arrays with length of 1.

## Ranking

From fastest to slowest (speaking from a time complextity perspective):

1. O(1)
2. O(logN)
3. O(N)
4. O(N\*logN)
5. O(N\*logN)
6. O(N²)
7. O(2^N)
8. O(N!)

## Different types

### O(1)

The fastest algorithm runs on O(1), also known as constant time. An example of this would be a simple addition function:

```python
def add(a, b):
  return a + b
```

It takes two numbers and regardless of the size of the numbers, it will always take O(1) time to compute this.
Another example could be the best case of a linear search if the target value is at index 0.

```python
def find(arr, target):
  for i in range(len(arr)):
    if arr[i] == target:
      return i

arr = [1, 2, 3, 4]
find(arr, 1) # constant time since 1 is at index 0
```

<!-- ### O(logN)

### O(N)

### O(N\*logN)

### O(N²)

### O(2^N)

### O(N!) -->
