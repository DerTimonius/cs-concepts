import { expect, test } from "vitest";

import { LinkedList } from "../linkedList";

test("linked list", () => {
	const linkedList = new LinkedList();
	linkedList.addToHead(2);
	linkedList.addToHead(3);
	linkedList.addToHead(4);
	linkedList.addToHead(5);
	linkedList.addToTail(6);
	linkedList.addToTail(7);
	linkedList.addToTail(8);
	linkedList.addToTail(9);
	expect(linkedList.getAllValues()).toEqual([5, 4, 3, 2, 6, 7, 8, 9]);
	expect(linkedList.deleteHead()).toEqual(5);
	expect(linkedList.deleteTail()).toEqual(9);
	expect(linkedList.getAllValues()).toEqual([4, 3, 2, 6, 7, 8]);
	expect(linkedList.getValueByIndex(3)).toEqual(6);
});
