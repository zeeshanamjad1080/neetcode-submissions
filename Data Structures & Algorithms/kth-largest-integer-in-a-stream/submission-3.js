class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [...nums];

        // Because we want to heap down by finding the last parent node not the leaf node.
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapDown(i);
        }

        while (this.heap.length > k) {
            this.removeMin();
        }
    }

    heapDown(index) {
        let n = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;
            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];

            index = smallest;
        }
    }

    heapUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[index] < this.heap[parent]) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    removeMin() {
        if (this.heap.length === 0) return;
        let last = this.heap.pop();

        if (this.heap.length) {
            this.heap[0] = last;
            this.heapDown(0);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);

        this.heapUp(this.heap.length - 1);

        if (this.heap.length > this.k) {
            this.removeMin();
        }

        return this.heap[0];
    }
}
