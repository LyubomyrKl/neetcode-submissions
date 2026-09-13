

class TrieNode {
    constructor(val) {
        this.val = val;
        this.children = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word){
        let level = this.root;

        for(const char of word){
            if(!level.children.has(char)){
                level.children.set(char, new TrieNode(char));
            }

            level = level.children.get(char);
        }

        level.isEnd = true;
    }

    search(word){
        let currentLevel = this.root;

        for(const char of word){
            if(!currentLevel.children.has(char)) return false;

            currentLevel = currentLevel.children.get(char);
        }

        return currentLevel.isEnd;
    }

    startsWith(word){
        let currentLevel = this.root;

        for(const char of word){
            if(!currentLevel.children.has(char)) return false;

            currentLevel = currentLevel.children.get(char);
        }

        return true
    }
}
