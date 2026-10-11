
class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [...nums];

        // Step 1: Build Min Heap (bottom-up)
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }

        // Step 2: Keep only K largest elements
        while (this.heap.length > this.k) {
            this.removeMin();
        }
    }

    heapifyUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    heapifyDown(index) {
        const n = this.heap.length;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;

            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }

    removeMin() {
        if (this.heap.length === 0) return;

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return min;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // Insert at the end
        this.heap.push(val);

        // Adjust upwards
        this.heapifyUp(this.heap.length - 1);

        // Remove smallest if heap exceeds K
        if (this.heap.length > this.k) {
            this.removeMin();
        }

        // Root is the Kth largest
        return this.heap[0];
    }
}
