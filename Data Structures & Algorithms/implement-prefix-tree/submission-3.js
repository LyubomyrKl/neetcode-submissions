

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
        let currNode = this.root;

        for(let char of word){
            if(!currNode.children.has(char)){
                currNode.children.set(char, new TrieNode())
            }

            currNode = currNode.children.get(char);
        }

        currNode.isEnd = true;
    }


    search(word){
        let currNode = this.root;

        for(let char of word){
            if(!currNode.children.has(char)) return false;

            currNode = currNode.children.get(char);
        }

        return currNode.isEnd;
    }

    startsWith(word){
        let currNode = this.root;

        for(let char of word){
            if(!currNode.children.has(char)) return false;

            currNode = currNode.children.get(char);
        }

        return true;
    }
}
