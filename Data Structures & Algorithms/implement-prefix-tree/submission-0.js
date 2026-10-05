class Tries {
    constructor() {
        this.childern = {};
        this.isEnd = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new Tries();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let current = this.root;

        for (let char of word) {
            if (!current.childern[char]) {
                return false;
            }
            current = current.childern[char];
        }

        return current.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;

        for (let char of prefix) {
            if (!current.childern[char]) {
                return false;
            }
            current = current.childern[char];
        }

        return true;
    }
}
