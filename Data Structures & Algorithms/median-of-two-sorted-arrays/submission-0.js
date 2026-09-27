class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        let totalLen = nums1.length + nums2.length;
        let half = Math.floor((totalLen + 1) / 2);

        let left = 0;
        let right = nums1.length;

        while (right >= left) {
            let mid = Math.floor(left + (right - left) / 2);
            let j = half - mid;
            const leftA = mid > 0 ? nums1[mid - 1] : -Infinity,
                rightA = mid < nums1.length ? nums1[mid] : Infinity,
                leftB = j > 0 ? nums2[j - 1] : -Infinity,
                rightB = j < nums2.length ? nums2[j] : Infinity;

            if (leftA <= rightB && rightA >= leftB) {
                if (totalLen % 2 === 1) {
                    return Math.max(leftA, leftB);
                }

                return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
            }

            if (leftA > rightB) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
}
