class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let result = false;
        function backtrack(i, j, index) {
            if (i < 0 || j < 0 || i >= board.length || i >= board[0].length) return;

            let char = board[i][j];

            if (word[index] !== char) return;

            if (char === "#") return;

            if (index === word.length - 1){
                result = true
                return;
            }

            board[i][j] = "#";

            backtrack(i + 1, j, index + 1);
            backtrack(i, j + 1, index + 1);
            backtrack(i - 1, j, index + 1);
            backtrack(i, j - 1, index + 1);

            board[i][j] = char;
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                backtrack(i, j, 0);
            }
        }

        return result;
    }
}
