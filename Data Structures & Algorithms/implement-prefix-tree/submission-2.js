

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
        let curr = this.root;

        for(const char of word){
            if(!curr.children.has(char)){
                 curr.children.set(char, new TrieNode());
            }
            curr = curr.children.get(char);
        }

        curr.isEnd = true
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
