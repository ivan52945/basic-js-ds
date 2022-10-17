const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

function Node(data, parrent) {
	this.left = null
	this.data = data;
	this.right = null;
	this.parrent = parrent;

}
class BinarySearchTree {

	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode;
	}

	add(value) {
		if (!this.rootNode) {
			this.rootNode = new Node(value, null);
			return;
		}

		for (let i = this.rootNode; true;) {
			let parrent = i;
			if (i.data > value) {
				if (i.left) i = i.left;

				else {

					i.left = new Node(value, parrent);
					return;
				}
			}
			else if (i.data < value) {
				if (i.right) i = i.right;
				else {
					let parrent = i;
					i.right = new Node(value, parrent);
					return;
				}
			}
			else if (i.data === value) return;
		}

	}

	has(data) {
		if (!this.rootNode) return false;

		for (let i = this.rootNode; true;) {
			if (i.data > data) {
				if (i.left) i = i.left;
				else return false;
			}
			else if (i.data < data) {
				if (i.right) i = i.right;
				else return false;
			}
			else return true;
		}

	}

	find(data) {
		if (!this.rootNode) return null;

		for (let i = this.rootNode; true;) {
			if (i.data > data) {
				if (i.left) i = i.left;
				else return null;
			}
			else if (i.data < data) {
				if (i.right) i = i.right;
				else return null;
			}
			else return i;
		}
	}

	remove(data) {
		let i = this.find(data);

		if (!i) return null;

		let parrent = i.parrent;
		//console.log(parrent);
		if (!i.left && !i.right) {
			if (parrent.data > data) parrent.left = null;
			else parrent.right = null;
		}
		else if (i.left ^ i.right) {
			if (parrent.data > data) {
				parrent.left = i.left;
				parrent.left.parrent = parrent;
			}
			else {
				parrent.right = i.right;
				parrent.right.parrent = parrent;
			}
		}
		else {
			let left = i.left;

			let right = i.right;

			let rightMin = i.right; while (rightMin.left) { rightMin = rightMin.left; }

			let rightMinLastFromRight = rightMin; while (rightMinLastFromRight.right) { rightMinLastFromRight = rightMinLastFromRight.right; }

			if (parrent.data > i.data) {
				parrent.left = rightMin;
			}
			else { parrent.right = rightMin; }
			console.log()
			rightMin.parrent = parrent;
			rightMin.left = left
			left.parrent = rightMin;

			if (rightMinLastFromRight != rightMin.right) {
				rightMinLastFromRight.right = right;
				right.parrent = rightMinLastFromRight;
			}


		}
	}

	min() {
		if (!this.rootNode) return null;

		let i = this.rootNode; while (i.left) i = i.left;

		return i.data;
	}

	max() {
		if (!this.rootNode) return null;

		let i = this.rootNode; while (i.right) i = i.right;

		return i.data;
	}
}

const tree = new BinarySearchTree();
tree.add(9);

tree.add(8);
tree.add(7);

tree.add(14);

tree.add(15);
tree.add(13);
tree.add(2);

tree.add(54);


tree.remove(14);

console.log(tree.find(15))





module.exports = {
	BinarySearchTree
};