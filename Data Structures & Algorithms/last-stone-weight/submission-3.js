class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = [...stones];

        for (let i = Math.floor(stones.length / 2) - 1; i >= 0; i--) {
            maxHeap = this.heapDown(i, maxHeap);
        }

        while (maxHeap.length > 1) {
            let max1 = this.removeMax(maxHeap);
            let max2 = this.removeMax(maxHeap);

            let diff = max1 - max2;
            if (diff > 0) {
                this.add(maxHeap, diff);
            }
        }

        return maxHeap[0] ?? 0;
    }

    add(maxHeap, value) {
        maxHeap.push(value);
        this.heapUp(maxHeap);
    }

    heapUp(maxHeap) {
        let index = maxHeap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (maxHeap[index] > maxHeap[parent]) {
                [maxHeap[index], maxHeap[parent]] = [maxHeap[parent], maxHeap[index]];
                index = parent;
            } else {
                break;
            }
        }
    }

    removeMax(array) {
        if (!array.length) return;
        let max = array[0];
        let last = array.pop();

        if (array.length) {
            array[0] = last;
            array = this.heapDown(0, array);
            return max;
        }
        return last;
    }

    heapDown(index, array) {
        let n = array.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let max = index;

            if (left < n && array[max] < array[left]) max = left;
            if (right < n && array[max] < array[right]) max = right;
            if (max === index) break;

            [array[index], array[max]] = [array[max], array[index]];
            index = max;
        }

        return array;
    }
}
