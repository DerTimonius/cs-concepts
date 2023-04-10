# Trees and associated algorithms

The **Tree** data structure resembles, as the name suggests, a tree. It starts with a _root_ node with several child nodes, which by itself could also have several children. The last node in the tree, that do not have any children, is called _leaf_

![Visualisation of the tree data structure](https://i.pinimg.com/originals/df/45/62/df4562211623069bbb41c7fab92cc7f7.jpg)

## Search algorithms

If you search for the value of a specific node there are two different methods:

1. Depth-First Search (DFS)
2. Breadth-First Search (BFS)

Although the way they work is very different, they do not differ very much in terms of asymptotic notation and runtime.
The time and space complexity of both is `O(n)`.

### Depth-First Search

The `DFS` searches all the way down the tree, so for example the left children of the root node, and uses a `stack` for the search - meaning LIFO (_last in, first out_). If the child node is not the correct one, it searches the children.

With the example of the tree above, how would this work when looking for the value of 1?

- It would look at the root node, which is 10 and definitely not 1. The children are now added to the stack (`[5, 9, 27]`)
- Since it's a stack, the next node is 27. It's not 1, the children get added (`[5, 9, 4]`).
- 4 is not 1, there are no children, so the stack is `[5, 9]`
- 9 is not 1, the child nodes are added (`[5, 1]`)
- And here we are, at the destination!

It can be implemented iteratively or recursively (like it is displayed here):

```python
def dfs(root, target, path=()):
  path = path + (root,)

  if root.value == target:
    return path

  for child in root.children:
    path_found = dfs(child, target, path)

    if path_found is not None:
      return path_found

  return None
```

### Breadth-First Search

The `BFS` looks at the tree one level at the time, hence the name _breadth-first_. It resembles a `queue` in that the first node in the list is the first that will be checked.

Our example would now look like this:

- The root is still 10, which is still not 1, so the child nodes are added: `[5, 9, 27]`
- Now we look at the first entry of the list, which sadly is not 1, and add its children: `[9, 27, 55, 8]`
- 9 is not 1, so it's removed and the child node added: `[27, 55, 8, 1]`
- and so on

## Binary Search Algorithm

A _binary search algorithm_ can be called on arrays that are sorted to find a value. It is also a typical case of a `divide and conquer` algorithm.
Take the following array:

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

Using binary search, the target value is compared against the value in the middle of the array. If it's the same, great, we found it. If it's smaller than the middle value, we're doing the same but on the left side of the array (meaning from the beginning up to the middle value) - if it's larger, we take the right half.
We repeat that process until we find the correct value.

```python
def binary_search(arr, target, first, last):
  if first > last:
    return False
  middle_idx = (first + last) // 2
  middle_val = arr[middle_idx]
  if middle_val == target:
    return middle_idx
  if middle_val > target:
    return binary_search(arr, target, first, middle_idx)
  if middle_val < target:
    return binary_search(arr, target, middle_idx, last)
```

Since you halve the array with every iteration, the time complexity is `O(log N)`.
The binary search can also be implented iteratively.
