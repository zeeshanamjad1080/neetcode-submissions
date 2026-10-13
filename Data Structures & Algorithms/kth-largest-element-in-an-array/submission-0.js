class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        for (let i = Math.floor((nums.length - 1) / 2); i >= 0; i--) {
            this.heapDown(i, nums);
        }

        while (nums.length > k) {
            this.removeElement(nums);
        }

        return nums[0];
    }

    heapDown(i, array) {
        let n = array.length;
        while (true) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let min = i;

            if (left < n && array[min] > array[left]) min = left;
            if (right < n && array[min] > array[right]) min = right;
            if (min === i) break;

            [array[min], array[i]] = [array[i], array[min]];

            i = min;
        }
    }

    removeElement(array) {
        if (!array.length) return;
        let last = array.pop();

        if (array.length) {
            array[0] = last;
            this.heapDown(0, array);
        }
    }
}
