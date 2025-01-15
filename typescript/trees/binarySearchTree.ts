class BSTNode<T> {
	public value: T;
	public right: BSTNode<T> | null;
	public left: BSTNode<T> | null;

	constructor(value: T, right = null, left = null) {
		this.value = value;
		this.right = right;
		this.left = left;
	}

	serialize() {
		const ans = { value: this.value };
		// @ts-expect-error: won't bother
		ans.left = this.left === null ? null : this.left.serialize();
		// @ts-expect-error: won't bother
		ans.right = this.right === null ? null : this.right.serialize();
		return ans;
	}
}

export class BinarySearchTree<T> {
	private root: BSTNode<T> | null;

	constructor() {
		this.root = null;
	}

	// traversals
	preorderTraversal(output: T[], node: BSTNode<T> | null = this.root) {
		if (!node) return;

		output.push(node.value);
		this.preorderTraversal(output, node.left);
		this.preorderTraversal(output, node.right);

		return output;
	}

	inorderTraversal(output: T[], node: BSTNode<T> | null = this.root) {
		if (!node) return;

		this.inorderTraversal(output, node.left);
		output.push(node.value);
		this.inorderTraversal(output, node.right);

		return output;
	}

	postorderTraversal(output: T[], node: BSTNode<T> | null = this.root) {
		if (!node) return;

		this.postorderTraversal(output, node.left);
		this.postorderTraversal(output, node.right);
		output.push(node.value);

		return output;
	}

	add(value: T, root: BSTNode<T> | null = this.root) {
		if (!root) {
			this.root = new BSTNode(value);
			return;
		}

		if (value > root.value) {
			if (root.right) {
				this.add(value, root.right);
			} else {
				root.right = new BSTNode(value);
			}
		} else {
			if (root.left) {
				this.add(value, root.left);
			} else {
				root.left = new BSTNode(value);
			}
		}
	}

	find(value: T, node: BSTNode<T> | null = this.root): BSTNode<T> | null {
		if (!node) return null;

		if (node.value === value) {
			return node;
		}

		if (value > node.value) {
			return this.find(value, node.right);
		}

		return this.find(value, node.left);
	}

	delete(value: T): BSTNode<T> | null {
		const foundNodes = this.findWithParent(value);

		if (!foundNodes) {
			return null;
		}

		const { parent, node, direction } = foundNodes;

		// node is the root of the tree
		if (!parent) {
			if (!node.right && !node.left) {
				this.root = null;
			} else if (!node.right) {
				this.root = node.left;
			} else if (!node.left) {
				this.root = node.right;
			} else {
				const successor = this.findRightSmallestChild(node);
				if (!successor) {
					throw new Error("should never happen");
				}

				successor.next.left = node.left;
				successor.parent.left = successor.next.right;
				if (successor.parent.value !== node.value) {
					successor.next.right = node.right;
				}
				this.root = successor.next;
			}
			return node;
		}

		// node has no children
		if (!node.right && !node.left) {
			parent[direction] = null;

			return node;
		}

		// node has only one child
		if (!node.right && node.left) {
			parent[direction] = node.left;

			return node;
		}

		if (!node.left && node.right) {
			parent[direction] = node.right;

			return node;
		}

		// node has two children

		const successor = this.findRightSmallestChild(node);

		if (!successor) {
			throw new Error("should never happen");
		}

		parent[direction] = successor.next;
		successor.next.left = node.left;
		successor.parent.left = successor.next.right;

		// check to not end up with a circle
		if (successor.parent.value !== node.value) {
			successor.next.right = node.right;
		}

		return node;
	}

	findRightSmallestChild(
		node: BSTNode<T>,
	): { parent: BSTNode<T>; next: BSTNode<T> } | null {
		let curr = node;
		let next = node.right;

		while (next) {
			if (!next.left) {
				return { parent: curr, next };
			}
			curr = next;
			next = next.left;
		}

		return null;
	}

	findLeftLargestChild(
		node: BSTNode<T>,
	): { parent: BSTNode<T>; next: BSTNode<T> } | null {
		let curr = node;
		let next = node.left;

		while (next) {
			if (!next.right) {
				return { parent: curr, next };
			}
			curr = next;
			next = next.right;
		}

		return null;
	}

	findWithParent(
		value: T,
		node: BSTNode<T> | null = this.root,
	): {
		node: BSTNode<T>;
		parent: BSTNode<T> | null;
		direction: "left" | "right";
	} | null {
		if (!node) return null;

		if (node.value === value && node.value === this.root?.value) {
			return { parent: null, node, direction: "left" };
		}

		if (node.value < value && !node.right) return null;

		if (node.value > value && !node.left) return null;

		if (node.right?.value === value) {
			return {
				parent: node,
				node: node.right,
				direction: "right",
			};
		}

		if (node.left?.value === value) {
			return {
				parent: node,
				node: node.left,
				direction: "left",
			};
		}

		if (node.value < value) {
			return this.findWithParent(value, node.right);
		}

		return this.findWithParent(value, node.left);
	}

	toObject() {
		return this.root?.serialize();
	}

	invert(node: BSTNode<T> | null = this.root) {
		if (!node) return;

		[node.right, node.left] = [node.left, node.right];

		this.invert(node.right);
		this.invert(node.left);
	}
}
