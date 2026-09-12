class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }

            current = current.children.get(char);
        }

        current.isEnd = true;
    }

    search(word) {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) {
                return false;
            }

            current = current.children.get(char);
        }

        return current.isEnd;
    }

    startsWith(prefix) {
        let current = this.root;

        for (const char of prefix) {
            if (!current.children.has(char)) {
                return false;
            }

            current = current.children.get(char);
        }

        return true;
    }
}