from random import shuffle, randrange

def quicksort(arr, start, end):
    if start >= end:
        return
    # select a random pivot
    pivot_idx = randrange(start, end + 1)
    pivot_element = arr[pivot_idx]
    # switch the pivot to the last position of the array
    arr[end], arr[pivot_idx] = arr[pivot_idx], arr[end]

    left_pointer = start
    for i in range(start, end):
        # check if the element is smaller than the pivot
        if arr[i] < pivot_element:
            # swap them
            arr[i], arr[left_pointer] = arr[left_pointer], arr[i]
            left_pointer += 1
    # move the pivot to the position of the left_pointer == pivot is placed correctly
    arr[end], arr[left_pointer] = arr[left_pointer], arr[end]
    # call the function recursively
    quicksort(arr, start, left_pointer - 1)
    quicksort(arr, left_pointer + 1, end)





data = [23, 12, 3, 4, 6, 1, 0, 99, 45, 2, 15]
shuffle(data)
print("Unsorted Array")
print(data)
quicksort(data, 0, len(data) - 1)

print('Sorted Array in Ascending Order:')
print(data)
