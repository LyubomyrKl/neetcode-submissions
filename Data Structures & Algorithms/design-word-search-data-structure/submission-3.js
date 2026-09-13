class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
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
       const dfs = (node, i) => {
        //if this is the last node -> hance it should be complete word
        if(i === word.length) return node.isEnd

        const char = word[i]

        if(char !== '.'){
            if(!node.children.has(char)) return false

            return dfs(node.children.get(char), i + 1);
        }

        for(const child of node.children.values()){
            if(dfs(child, i+1)){
                return true;
            }
        }

        return false;
       }

       return dfs(this.root, 0)
    }
}