
class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length;
        let cols = heights[0].length;

        let pacific = new Set();
        let atlantic = new Set();
        let result = [];

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        function dfs(row, col, visited) {
            let key = `${row},${col}`;

            if (visited.has(key)) return;

            visited.add(key);

            for (let [dr, dc] of directions) {
                let newRow = row + dr;
                let newCol = col + dc;

                if (
                    newRow < 0 ||
                    newCol < 0 ||
                    newRow >= rows ||
                    newCol >= cols
                ) {
                    continue;
                }

                if (
                    heights[newRow][newCol] <
                    heights[row][col]
                ) {
                    continue;
                }

                dfs(newRow, newCol, visited);
            }
        }

        // Pacific: Top and Left borders
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific);
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific);
        }

        // Atlantic: Bottom and Right borders
        for (let c = 0; c < cols; c++) {
            dfs(rows - 1, c, atlantic);
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, cols - 1, atlantic);
        }

        // Cells reachable from BOTH oceans
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let key = `${r},${c}`;

                if (
                    pacific.has(key) &&
                    atlantic.has(key)
                ) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
