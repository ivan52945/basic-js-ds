const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.END = this.HEAD = null;
	}
	getUnderlyingList() {
		return this.HEAD;
	}

	enqueue(value) {
		const add = new ListNode(value);
		add.next = null;

		if (this.END === null) this.END = add;
		else {
			this.END.next = add;
			this.END = this.END.next;
		}
		if (this.HEAD === null) this.HEAD = this.END;
	}

	dequeue() {
		if (this.HEAD === null) return null;

		const remove = this.HEAD;
		this.HEAD = this.HEAD?.next;

		return remove.value;
	}
}

module.exports = {
	Queue
};
