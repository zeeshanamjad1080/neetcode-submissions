class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        let result = 0;
        let board = Array.from({ length: n }, () => Array(n).fill("."));

        const backtrack = (row) => {
            if (row === n) {
                result++;
                return;
            }

            for (let c = 0; c < n; c++) {
                if (this.isSafe(c, row, board)) {
                    board[row][c] = "Q";
                    backtrack(row + 1);
                    board[row][c] = ".";
                }
            }
        };

        backtrack(0);
        return result;
    }

    isSafe(c, r, board) {
        for (let row = r - 1; row >= 0; row--) {
            if (board[row][c] === "Q") return false;
        }
        for (let row = r - 1, col = c - 1; row >= 0; row--, col--) {
            if (board[row][col] === "Q") return false;
        }
        for (let row = r - 1, col = c + 1; row >= 0; row--, col++) {
            if (board[row][col] === "Q") return false;
        }
        return true;
    }
}
