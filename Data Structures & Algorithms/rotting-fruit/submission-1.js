class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let cols = grid[0].length;
        let rows = grid.length;
        let queue = [];
        let head = 0;
        let fresh = 0;
        let minutes = 0;

        const directions = [
            [-1, 0],
            [+1, 0],
            [0, -1],
            [0, +1],
        ];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        while (head < queue.length && fresh > 0) {
            let levelSize = queue.length - head;
            for (let l = 0; l < levelSize; l++) {
                let [row, col] = queue[head++];

                for (let [qr, qc] of directions) {
                    let newRow = row + qr;
                    let newCol = col + qc;

                    if (
                        newRow < 0 ||
                        newCol < 0 ||
                        newRow >= rows ||
                        newCol >= cols ||
                        grid[newRow][newCol] !== 1
                    )
                        continue;

                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = 2;
                    fresh--;
                }
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
