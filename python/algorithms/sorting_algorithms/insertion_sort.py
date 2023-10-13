def insertion_sort(arr):
    for i in range(1, len(arr)):
        value = arr[i]
        j = i - 1
        while j >= 0:
            if value < arr[j]:
                arr[j + 1], arr[j] = arr[j], value
                j -= 1
            else:
                break
    return arr

unsorted = [3, 2, 5, 1, 7, 2, 8, 6, 12, 45, 0, 4]
print(f"Unsorted list: \n {unsorted}")
sorted_arr = insertion_sort(unsorted)
print(f"Sorted list: \n {sorted_arr}")
