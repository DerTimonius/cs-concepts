from node import Node

class Stack:
    def __init__(self, limit=1000):
        self.limit = limit
        self.size = 0
        self.top_item = None

    def is_empty(self):
        return self.size == 0

    def has_space(self):
        return self.size < self.limit

    def push(self, value):
        if self.has_space():
            item = Node(value)
            item.set_next_node(self.top_item)
            self.top_item = item
            self.size += 1
        else:
            print("no more, no more")

    def pop(self):
        if self.is_empty():
            print("nothing to see here")
        else:
            item = self.top_item
            self.top_item = item.get_next_node()
            self.size -= 1
            return item.get_value()

    def peek(self):
        if self.is_empty():
            print("nothing to see here")
        else:
            return self.top_item.get_value()
