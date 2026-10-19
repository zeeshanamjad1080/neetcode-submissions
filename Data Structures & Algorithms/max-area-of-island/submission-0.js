class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        let area = 0;

        function areaMaxIsland(row, col) {
            if (
                row < 0 ||
                col < 0 ||
                row >= grid.length ||
                col >= grid[0].length ||
                grid[row][col] === 0
            )
                return;

            area++;
            grid[row][col] = 0;
            areaMaxIsland(row - 1, col);
            areaMaxIsland(row, col - 1);
            areaMaxIsland(row + 1, col);
            areaMaxIsland(row, col + 1);
        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                area = 0;
                areaMaxIsland(row, col);
                maxArea = Math.max(maxArea, area);
            }
        }

        return maxArea;
    }
}
