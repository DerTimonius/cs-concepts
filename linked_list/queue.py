from node import Node

class Queue:
    def __init__(self, limit=1000):
      self.limit = limit
      self.size = 0
      self.top_item = None
      self.bottom_item = None

    def is_empty(self):
        return self.size == 0

    def has_space(self):
        return self.size < self.limit

    def enqueue(self, value):
        if not self.has_space():
            print("no more room, please wait")
        else:
            if self.is_empty():
                self.top_item = self.bottom_item = Node(value)
            else:
                item_to_add = Node(value)
                self.bottom_item.set_next_node(item_to_add)
                item_to_add.set_prev_node(self.bottom_item)
                self.bottom_item = item_to_add

    def dequeue(self):
        if self.is_empty():
            print("nothing to see here")
        else:
            item_to_remove = self.bottom_item
            self.bottom_item = item_to_remove.get_prev_node()
            return item_to_remove.get_value()

    def peek(self):
        if self.is_empty():
            print("nothing to see here")
        else:
            return self.bottom_item.get_value()
