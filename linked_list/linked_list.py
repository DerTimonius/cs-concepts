from node import Node

class LinkedList:
    def __init__(self, value=None):
        self.head_node = Node(value)

    def get_head_node(self):
        return self.head_node

    def insert_beginning(self, value):
        new_head = Node(value)
        current_head = self.head_node
        self.head_node = new_head
        if current_head:
            new_head.set_next_node(current_head)

    def stringify(self):
        output = ""
        current_node = self.get_head_node()
        while current_node:
            if current_node.get_value() != None:
                output += str(current_node.get_value()) + "\n"
            current_node = current_node.get_next_node()
        return output

    def remove_node(self, value):
        current_node = self.get_head_node()
        if current_node.get_value() == value:
            self.head_node = current_node.get_next_node()
        else:
            while current_node:
              next_node = current_node.get_next_node()
              if next_node.get_value() == value:
                  current_node.set_next_node(next_node.get_next_node())
                  current_node = None
              else:
                  current_node = next_node


my_list = LinkedList()
my_list.insert_beginning("Pikachu")
my_list.insert_beginning(23)
my_list.insert_beginning("New York")
my_list.insert_beginning([1, 2, 3])
my_list.insert_beginning({"key": "value"})
my_list.insert_beginning(12)
my_list.insert_beginning("Vecna")
my_list.remove_node(12)

stringified_list = my_list.stringify()
print(stringified_list)
