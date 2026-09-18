class Node {
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;

        this.right = new Node(0, 0);
        this.left = new Node(0, 0);
        this.cache = new Map();

        this.right.prev = this.left;
        this.left.next = this.right;
    }

    remove(node) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    insert(node) {
        let prev = this.right.prev;

        node.prev = prev;
        prev.next = node;

        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.cache.get(key);

        if (!node) {
            return -1;
        }

        this.remove(node);
        this.insert(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const node = this.cache.get(key);
        if (node) {
            this.remove(node);
            this.cache.delete(node.key);
        }

        const newNode = new Node(key, value);
        this.insert(newNode);
        this.cache.set(newNode.key, newNode);

        if (this.cache.size > this.capacity) {
            const lru = this.left.next;
            this.cache.delete(lru.key);
            this.remove(lru);
        }
    }
}
