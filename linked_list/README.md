# Linked List

A `linked list` is a (linear) data structure that connects a series of `nodes` which itself stores the `data` and the `pointer` to the next node.
![Presentation of linked list structure](https://cdn.programiz.com/sites/tutorial2program/files/linked-list-concept.png)

There are multiple types of linked lists:

- _singly_ linked
- _doubly_ linked
- _circular_ linked

I will write about singly linked lists here.

## Structure

A (_singly_) linked list always starts at the `HEAD` that points to the first node, which then points to next and so on until the last node. That one points to `null` (or `None`) since there is nothing to point to.

## Adding values

In a singly linked list, how a value is added to it depends on where it should be added.

### 1. Add it as the first node

If we add it as the first node, we have to do two things:

1. Set the pointer of `HEAD` to the inserted node
2. Set the pointer of the inserted node to the previously first node

```python
def insert_at_beginning(self, value):
  new_head_node = Node(value)
  new_head_node.set_next_node = self.head_node
  self.head_node = new_head_node
```

### 2. Add it at the end

Pretty much the same, just flipped.

```python
def insert_at_end(self, value):
  new_node = Node(value)
  self.tail_node.set_next_node = new_node
  self.tail_node = new_node
```

### 3. Add it somewhere in the middle

Here we have to add another parameter: either the _position_ where it should go or a _value_ after which it should inserted. Then pointer magic.

```python
def insert_somewhere(self, value, position):
  new_node = Node(value)
  if position == 0:
    self.insert_at_beginning(value)
    return
  current_position = 0
  current_node = self.head_node
  while current_node is not None:
    current_position += 1
    if current_position == position:
      next_node = current_node.get_next_node()
      current_node.set_next_node(new_node)
      new_node.set_next_node(next_node)
      return
    current_node = current_node.get_next_node()
```

## Removing values

When removing values from a linked list, it's more often than not performed against a certain value. Then we need to update the existing pointers to reflect the missing node.

```python
def remove_node(self, value):
  current_node = self.head_node
  if current_node.get_value() == value:
    self.head_node = current_node.get_next_node()
  previous_node = current_node
  while current_node:
    current_node = current_node.get_next_node()
    if current_node.get_value() == value:
      previous_node.set_next_node(current_node.get_next_node())
      return current_node.get_value()
    previous_node = current_node
  print(f"No node with value {value} found")
```

## Getting indexes of certain values

Getting an index of a value in the linked list is pretty easy to perform using a `while` loop and incrementing the numeric value that will be returned.

```python
def get_index(self, value):
  position = 0
  current_node = self.head_node
  while current_node:
    if current_node.get_value() == value:
      return position
    position += 1
    current_node = current_node.get_next_node()
```

### Getting the middle index

In an array/list it's pretty easy to access the middle index with the built-in methods/functions. But in a linked list, if you don't specify something like `self.length`, you need to do this a bit differently - with a second positional pointer that gets incremented by two:

```python
def get_middle_index(self):
  position_1 = 0
  position_2 = 0
  first_pointer_node = self.head_node
  second_pointer_node = self.head_node
  while second_pointer_node:
    first_pointer_node = first_pointer_node.get_next_node()
    position_1 += 1
    second_pointer_node = second_pointer_node.get_next_node().get_next_node()
    position_2 += 2
  return {"index": position_2, "value": second_pointer_node.get_value()}
```
