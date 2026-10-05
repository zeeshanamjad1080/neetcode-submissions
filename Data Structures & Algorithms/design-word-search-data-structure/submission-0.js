class Tries {
    constructor() {
        this.childern = {};
        this.isEnd = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new Tries();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.childern[char]) {
                current.childern[char] = new Tries();
            }

            current = current.childern[char];
        }

        current.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function traverse(node, index) {
            if (index === word.length) return node.isEnd;
    
            let char = word[index];

            if (char === ".") {
                for (let keys of Object.keys(node.childern)) {
                    if (traverse(node.childern[keys], index + 1)) {
                        return true;
                    }
                }
                return false;
            }

            if (!node.childern[char]) {
                return false;
            }

            return traverse(node.childern[char], index + 1);
        }

        return traverse(this.root, 0);
    }
}
