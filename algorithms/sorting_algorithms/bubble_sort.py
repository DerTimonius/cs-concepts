def bubble_sort(arr):
    iterations = 0
    for item in arr:
        for i in range(len(arr)-1):
            iterations += 1
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
    print("Total number of iterations: {}".format(iterations))
    return arr

unsorted_arr = [12, 23, 10, 4, 68, 57, 98, 17]
print("Unsorted: \n", unsorted_arr, "\n")
bubble_sort(unsorted_arr)
print("Sorted: \n", unsorted_arr, "\n")

def bubble_sort_optimized(arr):
    iterations = 0
    for idx in range(len(arr)):
        for i in range(len(arr)-1-idx):
            iterations += 1
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
    print("Total number of iterations: {}".format(iterations))
    return arr

unsorted_arr_opt = [12, 23, 10, 4, 68, 57, 98, 17]
print("Unsorted: \n", unsorted_arr_opt, "\n")
bubble_sort_optimized(unsorted_arr_opt)
print("Sorted: \n", unsorted_arr_opt, "\n")
