class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0;
        let end = matrix.length - 1;

        while (end >= start) {
            let mid = Math.floor(start + (end - start) / 2);
            let matLen = matrix[mid].length - 1;
            if (target >= matrix[mid][0] && target <= matrix[mid][matLen]) {
                let l = 0;
                let r = matLen;

                while (r >= l) {
                    let m = Math.floor(l + (r - l) / 2);
                    if (matrix[mid][m] === target) {
                        return true;
                    } else if (matrix[mid][m] > target) {
                        r = m - 1;
                    } else {
                        l = m + 1;
                    }
                }

                return false;
            } else if (matrix[mid][0] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return false;
    }
}
