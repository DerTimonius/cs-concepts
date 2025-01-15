import { describe, expect, test } from "vitest";
import { BinarySearchTree } from "../trees/binarySearchTree";

describe("binary search tree", () => {
	test("basic adding of elements", () => {
		const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
		const tree = new BinarySearchTree();
		nums.map((num) => tree.add(num));
		const objs = tree.toObject();
		// render(objs, nums);

		if (!objs) {
			expect(false).toBeTruthy();
		}

		// @ts-ignore
		expect(objs.value).toEqual(3);

		// @ts-ignore
		expect(objs.left.value).toEqual(1);
		// @ts-ignore
		expect(objs.left.left).toBeNull();

		// @ts-ignore
		expect(objs.left.right.value).toEqual(2);
		// @ts-ignore
		expect(objs.left.right.left).toBeNull();
		// @ts-ignore
		expect(objs.left.right.right).toBeNull();

		// @ts-ignore
		expect(objs.right.value).toEqual(7);

		// @ts-ignore
		expect(objs.right.left.value).toEqual(4);
		// @ts-ignore
		expect(objs.right.left.left).toBeNull();

		// @ts-ignore
		expect(objs.right.left.right.value).toEqual(6);
		// @ts-ignore
		expect(objs.right.left.right.left.value).toEqual(5);
		// @ts-ignore
		expect(objs.right.left.right.left.right).toBeNull();
		// @ts-ignore
		expect(objs.right.left.right.left.left).toBeNull();

		// @ts-ignore
		expect(objs.right.right.value).toEqual(10);
		// @ts-ignore
		expect(objs.right.right.right).toBeNull();

		// @ts-ignore
		expect(objs.right.right.left.value).toEqual(9);
		// @ts-ignore
		expect(objs.right.right.left.right).toBeNull();

		// @ts-ignore
		expect(objs.right.right.left.left.value).toEqual(8);
		// @ts-ignore
		expect(objs.right.right.left.left.right).toBeNull();
		// @ts-ignore
		expect(objs.right.right.left.left.left).toBeNull();
	});

	describe("traversals", () => {
		test("preorderTraversal", () => {
			const bst = new BinarySearchTree<number>();
			//       5
			//      / \
			//     3   7
			//    / \
			//   2   4
			bst.add(5);
			bst.add(3);
			bst.add(7);
			bst.add(2);
			bst.add(4);

			expect(bst.preorderTraversal([])).toEqual([5, 3, 2, 4, 7]);
		});

		test("inorderTraversal", () => {
			const bst = new BinarySearchTree<number>();
			//       5
			//      / \
			//     3   7
			//    / \
			//   2   4
			bst.add(5);
			bst.add(3);
			bst.add(7);
			bst.add(2);
			bst.add(4);

			expect(bst.inorderTraversal([])).toEqual([2, 3, 4, 5, 7]);
		});

		test("postorderTraversal", () => {
			const bst = new BinarySearchTree<number>();
			//       5
			//      / \
			//     3   7
			//    / \
			//   2   4
			bst.add(5);
			bst.add(3);
			bst.add(7);
			bst.add(2);
			bst.add(4);

			expect(bst.postorderTraversal([])).toEqual([2, 4, 3, 7, 5]);
		});
	});

	describe("deletion", () => {
		test("should correctly delete a leaf node", () => {
			const bst = new BinarySearchTree<number>();
			//       5
			//      / \
			//     3   7
			//    / \
			//   2   4
			bst.add(5);
			bst.add(3);
			bst.add(7);
			bst.add(2);
			bst.add(4);

			bst.delete(2);
			expect(bst.preorderTraversal([])).toEqual([5, 3, 4, 7]);
		});

		test("should correctly delete a node with one child", () => {
			const bst = new BinarySearchTree<number>();
			//       5
			//      / \
			//     3   7
			//      \
			//       4
			bst.add(5);
			bst.add(3);
			bst.add(7);
			bst.add(4);

			bst.delete(3);
			expect(bst.preorderTraversal([])).toEqual([5, 4, 7]);
		});

		test("should correctly delete a node with two children", () => {
			const bst = new BinarySearchTree<number>();
			//       5
			//      / \
			//     3   7
			//    / \   \
			//   2   4   8
			bst.add(5);
			bst.add(3);
			bst.add(7);
			bst.add(2);
			bst.add(4);
			bst.add(8);

			bst.delete(3);
			expect(bst.preorderTraversal([])).toEqual([5, 4, 2, 7, 8]);
		});

		test("should handle deletion when successor is immediate right child", () => {
			const bst = new BinarySearchTree<number>();
			//       5
			//      / \
			//     3   6
			//    /     \
			//   2       7
			bst.add(5);
			bst.add(3);
			bst.add(6);
			bst.add(2);
			bst.add(7);

			bst.delete(5);
			expect(bst.preorderTraversal([])).toEqual([6, 3, 2, 7]);
		});

		test("should correctly handle root deletion", () => {
			const bst = new BinarySearchTree<number>();
			//       5
			//      / \
			//     3   7
			bst.add(5);
			bst.add(3);
			bst.add(7);

			bst.delete(5);
			expect(bst.preorderTraversal([])).toEqual([7, 3]);
		});

		test("should maintain BST properties after multiple deletions", () => {
			const bst = new BinarySearchTree<number>();
			//        5
			//      /   \
			//     3     7
			//    / \   / \
			//   2   4 6   8
			bst.add(5);
			bst.add(3);
			bst.add(7);
			bst.add(2);
			bst.add(4);
			bst.add(6);
			bst.add(8);

			expect(bst.preorderTraversal([])).toEqual([5, 3, 2, 4, 7, 6, 8]);
			bst.delete(3);
			expect(bst.preorderTraversal([])).toEqual([5, 4, 2, 7, 6, 8]);
			bst.delete(7);
			expect(bst.preorderTraversal([])).toEqual([5, 4, 2, 8, 6]);
			bst.delete(5);

			expect(bst.preorderTraversal([])).toEqual([6, 4, 2, 8]);
		});
	});
	test("inversion of tree", () => {
		const bst = new BinarySearchTree<number>();
		//        5
		//      /   \
		//     3     7
		//    / \   / \
		//   2   4 6   8
		bst.add(5);
		bst.add(3);
		bst.add(7);
		bst.add(2);
		bst.add(4);
		bst.add(6);
		bst.add(8);

		expect(bst.inorderTraversal([])).toEqual([2, 3, 4, 5, 6, 7, 8]);
		bst.invert();

		expect(bst.inorderTraversal([])).toEqual([8, 7, 6, 5, 4, 3, 2]);
	});
});
