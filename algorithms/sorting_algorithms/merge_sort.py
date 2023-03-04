from random import shuffle

def merge_sort(arr):
    length = len(arr)
    if length <= 1:
        return arr
    middle_index = length // 2
    left_arr = arr[:middle_index]
    right_arr = arr[middle_index:]
    sort_left = merge_sort(left_arr)
    sort_right = merge_sort(right_arr)
    return merge(sort_left, sort_right)

def merge(left, right):
    arr = []
    while left and right:
        if left[0] < right[0]:
            arr.append(left[0])
            left.pop(0)
        else:
            arr.append(right[0])
            right.pop(0)
    if left:
        arr += left
    if right:
        arr += right
    return arr

base = [2, 5, 3, 7, 9, 12, 1, 0, 25]
shuffle(base)
print(base)
sorted_arr = merge_sort(base)
print(sorted_arr)
