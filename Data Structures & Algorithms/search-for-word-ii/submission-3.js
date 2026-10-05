class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();

        // 1. Build Trie
        for (const word of words) {
            let current = root;

            for (const char of word) {
                if (!current.children[char]) {
                    current.children[char] = new TrieNode();
                }

                current = current.children[char];
            }

            current.isEnd = true;
            current.word = word;
        }

        const result = [];

        // 2. DFS / Backtracking
        function track(i, j, node) {
            // Out of bounds
            if (
                i < 0 ||
                j < 0 ||
                i >= board.length ||
                j >= board[0].length
            ) {
                return;
            }

            const char = board[i][j];

            // Already visited
            if (char === "#") {
                return;
            }

            // Trie does not contain this path
            if (!node.children[char]) {
                return;
            }

            // Move Trie pointer forward
            const nextNode = node.children[char];

            // Found complete word
            if (nextNode.isEnd) {
                result.push(nextNode.word);

                // Avoid duplicate result
                nextNode.isEnd = false;
            }

            // Mark board position as visited
            board[i][j] = "#";

            // Explore 4 directions
            track(i - 1, j, nextNode);
            track(i + 1, j, nextNode);
            track(i, j - 1, nextNode);
            track(i, j + 1, nextNode);

            // Backtrack
            board[i][j] = char;
        }

        // 3. Start DFS from every board cell
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                track(i, j, root);
            }
        }

        return result;
    }
}