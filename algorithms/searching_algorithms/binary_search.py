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

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
print(binary_search(arr, 6, 0, len(arr)-1))
