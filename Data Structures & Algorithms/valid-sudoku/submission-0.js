class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = new Set();
        let colSet = Array.from({ length: 9 }, () => new Set());
        let secSet = Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                let value = board[i][j];
                if (value === ".") continue;

                let box = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rowSet.has(value) || colSet[j].has(value) || secSet[box].has(value)) {
                    return false;
                }

                rowSet.add(value);
                colSet[j].add(value);
                secSet[box].add(value);
            }
            rowSet.clear();
        }
        return true;
    }
}
