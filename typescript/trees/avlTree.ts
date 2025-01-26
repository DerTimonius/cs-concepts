class AVLNode<T> {
	public value: T;
	public left: AVLNode<T> | null;
	public right: AVLNode<T> | null;
	public height: number;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.height = 1;
	}
}

export class AVLTree<T> {
	private root: AVLNode<T> | null;

	constructor() {
		this.root = null;
	}

	// traversals
	preorderTraversal(output: T[] = [], node: AVLNode<T> | null = this.root) {
		if (!node) return;

		output.push(node.value);
		this.preorderTraversal(output, node.left);
		this.preorderTraversal(output, node.right);

		return output;
	}

	inorderTraversal(output: T[] = [], node: AVLNode<T> | null = this.root) {
		if (!node) return;

		this.inorderTraversal(output, node.left);
		output.push(node.value);
		this.inorderTraversal(output, node.right);

		return output;
	}

	postorderTraversal(output: T[] = [], node: AVLNode<T> | null = this.root) {
		if (!node) return;

		this.postorderTraversal(output, node.left);
		this.postorderTraversal(output, node.right);
		output.push(node.value);

		return output;
	}

	#getHeight(node: AVLNode<T> | null) {
		if (!node) {
			return 0;
		}

		return node.height;
	}

	#updateHeight(node: AVLNode<T> | null) {
		if (!node) {
			return;
		}

		node.height =
			1 + Math.max(this.#getHeight(node.right), this.#getHeight(node.left));
	}

	#getBalanceFactor(node: AVLNode<T> | null) {
		if (!node) return 0;

		return this.#getHeight(node.left) - this.#getHeight(node.right);
	}

	#findRightMin(node: AVLNode<T>): AVLNode<T> {
		let current = node;
		while (current.left) {
			current = current.left;
		}
		return current;
	}

	insert(value: T, node: AVLNode<T> | null = this.root) {
		if (!this.root) {
			this.root = new AVLNode(value);
			return this.root;
		}

		if (!node) {
			return new AVLNode(value);
		}

		if (value < node.value) {
			node.left = this.insert(value, node.left);
		} else {
			node.right = this.insert(value, node.right);
		}

		this.#updateHeight(node);

		const balance = this.#getBalanceFactor(node);

		if (balance > 1 && node.left) {
			if (value > node.left.value) {
				node.left = this.rotateLeft(node.left);
				return this.rotateRight(node);
			}
			return this.rotateRight(node);
		}

		if (balance < -1 && node.right) {
			if (value < node.right.value) {
				node.right = this.rotateRight(node.right);
				return this.rotateLeft(node);
			}
			return this.rotateLeft(node);
		}

		return node;
	}

	delete(value: T, node: AVLNode<T> | null = this.root): AVLNode<T> | null {
		if (!node) return null;

		if (value < node.value) {
			node.left = this.delete(value, node.left);
		} else if (value > node.value) {
			node.right = this.delete(value, node.right);
		} else {
			if (!node.right) return node.left;
			if (!node.left) return node.right;

			const successor = this.#findRightMin(node.right);
			node.value = successor.value;
			node.right = this.delete(successor.value, node.right);
		}

		this.#updateHeight(node);
		const balance = this.#getBalanceFactor(node);

		if (balance > 1) {
			const leftBalance = this.#getBalanceFactor(node.left);
			if (leftBalance >= 0) {
				return this.rotateRight(node);
			}
			if (leftBalance < 0 && node.left) {
				node.left = this.rotateLeft(node.left);
				return this.rotateRight(node);
			}
		}
		if (balance < -1) {
			const rightBalance = this.#getBalanceFactor(node.right);
			if (rightBalance <= 0) {
				return this.rotateLeft(node);
			}
			if (rightBalance > 0 && node.right) {
				node.right = this.rotateRight(node.right);
				return this.rotateLeft(node);
			}
		}
		return node;
	}

	rotateLeft(node: AVLNode<T>) {
		// biome-ignore lint/style/noNonNullAssertion: has to exist
		const newRoot = node.right!;
		const newRight = newRoot.left;

		newRoot.left = node;
		node.right = newRight;

		this.#updateHeight(node);
		this.#updateHeight(newRoot);

		if (node === this.root) {
			this.root = newRoot;
		}

		return newRoot;
	}

	rotateRight(node: AVLNode<T>) {
		// biome-ignore lint/style/noNonNullAssertion: has to exist
		const newRoot = node.left!;
		const newLeft = newRoot.right;

		newRoot.right = node;
		node.left = newLeft;

		this.#updateHeight(node);
		this.#updateHeight(newRoot);

		if (node === this.root) {
			this.root = newRoot;
		}

		return newRoot;
	}

	getRoot() {
		return this.root;
	}
}
