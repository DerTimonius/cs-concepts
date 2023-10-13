class MaxHeap:
    def __init__(self):
        self.count = 0
        self.heap_list = []

    # Helper methods
    def parent_idx(self, idx):
        return idx // 2

    def left_child_idx(self, idx):
        return idx * 2

    def right_child_idx(self, idx):
        return idx * 2 + 1

    def child_present(self, idx):
        return self.left_child_idx(idx) <= self.count

    # No more helper methods
    def add(self, element):
        self.count += 1
        self.heap_list.append(element)
        self.heapify_up()

    def heapify_up(self):
        idx = self.count
        while self.parent_idx(idx) > 0:
            child = self.heap_list[idx]
            parent = self.heap_list[self.parent_idx(idx)]
            if parent < child:
                self.heap_list[idx] = parent
                self.heap_list[self.parent_idx(idx)] = child
            idx = self.parent_idx(idx)

    def retrieve_max(self):
        if self.count == 0:
            print("No items in heap")
            return None
        max_value = self.heap_list[1]
        self.heap_list[1] = self.heap_list[self.count]
        self.count -= 1
        self.heap_list.pop()
        self.heapify_down()
        return max_value

    def heapify_down(self):
        idx = 1
        while self.child_present(idx):
            larger_child_idx = self.get_larger_child_idx(idx)
            child = self.heap_list[larger_child_idx]
            parent = self.heap_list[idx]
            if parent < child:
                self.heap_list[idx] = child
                self.heap_list[larger_child_idx] = parent
            idx = larger_child_idx


    def get_larger_child_idx(self, idx):
        if self.right_child_idx(idx) > self.count:
            print("There is only a left child")
            return self.left_child_idx(idx)
        else:
            left_child = self.heap_list[self.left_child_idx(idx)]
            right_child = self.heap_list[self.right_child_idx(idx)]
            if left_child > right_child:
                print("Left child "+ str(left_child) + " is larger than right child " + str(right_child))
                return self.left_child_idx(idx)
            else:
                print("Right child " + str(right_child) + " is larger than left child " + str(left_child))
                return self.right_child_idx(idx)

def heapsort(lst):
    sorted_list = []
    max_heap = MaxHeap()

    for item in lst:
        max_heap.add(item)
    while max_heap.count > 0:
        max_value = max_heap.retrieve_max()
        sorted_list.insert(0, max_value)
    return sorted_list
