
class MedianFinder {
    constructor() {
        this.maxHeapFH = []; // Smaller half
        this.minHeapSH = []; // Larger half
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // Step 1: Always insert into Max Heap first
        this.maxHeapFH.push(num);
        this.heapUpMax(this.maxHeapFH);

        // Step 2: Maintain ordering between both heaps
        if (
            this.minHeapSH.length &&
            this.maxHeapFH[0] > this.minHeapSH[0]
        ) {
            let elem = this.removeMaxHeap(this.maxHeapFH);
            this.minHeapSH.push(elem);
            this.heapUpMin(this.minHeapSH);
        }

        // Step 3: Balance heap sizes
        if (this.maxHeapFH.length > this.minHeapSH.length + 1) {
            let elem = this.removeMaxHeap(this.maxHeapFH);
            this.minHeapSH.push(elem);
            this.heapUpMin(this.minHeapSH);
        }

        if (this.minHeapSH.length > this.maxHeapFH.length + 1) {
            let elem = this.removeMinHeap(this.minHeapSH);
            this.maxHeapFH.push(elem);
            this.heapUpMax(this.maxHeapFH);
        }
    }

    heapUpMax(array) {
        let i = array.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (array[i] > array[parent]) {
                [array[i], array[parent]] = [array[parent], array[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    heapUpMin(array) {
        let i = array.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (array[i] < array[parent]) {
                [array[i], array[parent]] = [array[parent], array[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    removeMaxHeap(array) {
        if (!array.length) return null;

        let max = array[0];
        let last = array.pop();

        if (array.length) {
            array[0] = last;

            let i = 0;
            let n = array.length;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let largest = i;

                if (left < n && array[left] > array[largest]) {
                    largest = left;
                }

                if (right < n && array[right] > array[largest]) {
                    largest = right;
                }

                if (largest === i) break;

                [array[i], array[largest]] =
                    [array[largest], array[i]];

                i = largest;
            }
        }

        return max;
    }

    removeMinHeap(array) {
        if (!array.length) return null;

        let min = array[0];
        let last = array.pop();

        if (array.length) {
            array[0] = last;

            let i = 0;
            let n = array.length;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < n && array[left] < array[smallest]) {
                    smallest = left;
                }

                if (right < n && array[right] < array[smallest]) {
                    smallest = right;
                }

                if (smallest === i) break;

                [array[i], array[smallest]] =
                    [array[smallest], array[i]];

                i = smallest;
            }
        }

        return min;
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxHeapFH.length > this.minHeapSH.length) {
            return this.maxHeapFH[0];
        }

        if (this.minHeapSH.length > this.maxHeapFH.length) {
            return this.minHeapSH[0];
        }

        return (this.maxHeapFH[0] + this.minHeapSH[0]) / 2;
    }
}
