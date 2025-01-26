import { describe, expect, test } from "vitest";
import { BinarySearchTree } from "../trees/binarySearchTree";
import { AVLTree } from "../trees/avlTree";

describe("binary search tree", () => {
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

describe("AVL Tree", () => {
	describe("basic operations", () => {
		test("should maintain balance after simple insertions", () => {
			const avl = new AVLTree<number>();
			avl.insert(5);
			avl.insert(3);
			avl.insert(7);

			expect(avl.preorderTraversal([])).toEqual([5, 3, 7]);
			expect(avl.inorderTraversal([])).toEqual([3, 5, 7]);
		});
	});

	describe("rotations", () => {
		test("should perform left rotation (right-right case)", () => {
			const avl = new AVLTree<number>();
			avl.insert(5);
			avl.insert(7);
			avl.insert(9);

			expect(avl.preorderTraversal([])).toEqual([7, 5, 9]);
		});

		test("should perform right rotation (left-left case)", () => {
			const avl = new AVLTree<number>();
			avl.insert(5);
			avl.insert(3);
			avl.insert(1);

			expect(avl.preorderTraversal([])).toEqual([3, 1, 5]);
		});

		test("should perform left-right rotation", () => {
			const avl = new AVLTree<number>();
			avl.insert(5);
			avl.insert(3);
			avl.insert(4);

			expect(avl.preorderTraversal([])).toEqual([4, 3, 5]);
		});

		test("should perform right-left rotation", () => {
			const avl = new AVLTree<number>();
			avl.insert(5);
			avl.insert(7);
			avl.insert(6);

			expect(avl.preorderTraversal([])).toEqual([6, 5, 7]);
		});
	});

	describe("complex scenarios", () => {
		test("should maintain balance in a larger tree", () => {
			const avl = new AVLTree<number>();
			// biome-ignore lint/complexity/noForEach: <explanation>
			[1, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18].forEach((num) => {
				avl.insert(num);
			});

			// Should create a balanced tree with height difference ≤ 1 at each node
			const inorder = avl.inorderTraversal([]);
			expect(inorder).toEqual([
				1, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18,
			]);
			const preorder = avl.preorderTraversal([]);
			expect(preorder).toEqual([
				10, 5, 3, 1, 4, 7, 6, 8, 15, 13, 12, 14, 17, 16, 18,
			]);
		});
	});

	describe("height and balance properties", () => {
		test("should maintain correct heights after rotations", () => {
			const avl = new AVLTree<number>();
			avl.insert(5);
			avl.insert(3);
			avl.insert(1);

			const root = avl.getRoot();
			expect(root).not.toBeNull();

			expect(root?.height).toBe(2);
			expect(root?.left?.height).toBe(1);
			expect(root?.right?.height).toBe(1);
		});
	});

	describe("traversals", () => {
		test("all traversals should work on balanced tree", () => {
			const avl = new AVLTree<number>();
			// biome-ignore lint/complexity/noForEach: <explanation>
			[2, 3, 4, 5, 6, 7, 8].forEach((num) => {
				avl.insert(num);
			});

			expect(avl.preorderTraversal([])).toEqual([5, 3, 2, 4, 7, 6, 8]);
			expect(avl.inorderTraversal([])).toEqual([2, 3, 4, 5, 6, 7, 8]);
			expect(avl.postorderTraversal([])).toEqual([2, 4, 3, 6, 8, 7, 5]);
		});
	});

	test("deletion", () => {
		const avl = new AVLTree<number>();
		// biome-ignore lint/complexity/noForEach: <explanation>
		[1, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18].forEach((num) => {
			avl.insert(num);
		});

		expect(avl.preorderTraversal()).toEqual([
			10, 5, 3, 1, 4, 7, 6, 8, 15, 13, 12, 14, 17, 16, 18,
		]);

		avl.delete(6);
		avl.delete(15);
		expect(avl.preorderTraversal()).toEqual([
			10, 5, 3, 1, 4, 7, 8, 16, 13, 12, 14, 17, 18,
		]);
		avl.delete(7);
		avl.delete(8);
		expect(avl.preorderTraversal()).toEqual([
			10, 3, 1, 5, 4, 16, 13, 12, 14, 17, 18,
		]);
	});
});
