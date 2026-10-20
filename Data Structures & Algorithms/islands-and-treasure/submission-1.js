class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let cols = grid[0].length;
        let rows = grid.length;
        let INF = 2147483647;
        let queue = [];
        let head = 0;
        const directions = [
            [-1, 0],
            [+1, 0],
            [0, -1],
            [0, +1],
        ];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        while (head < queue.length) {
            let [row, col] = queue[head++];

            for (let [qr, qc] of directions) {
                let newRow = row + qr;
                let newCol = col + qc;

                if (
                    newRow < 0 ||
                    newCol < 0 ||
                    newRow >= rows ||
                    newCol >= cols ||
                    grid[newRow][newCol] !== INF
                )
                    continue;

                queue.push([newRow, newCol]);
                grid[newRow][newCol] = grid[row][col] + 1;
            }
        }
    }
}
