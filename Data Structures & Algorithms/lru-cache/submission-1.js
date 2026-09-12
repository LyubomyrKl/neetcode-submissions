class Node {
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    #capacity
    #cache
    #leastRecentlyUsedDummyNode
    #mostRecentlyUsedDummyNode


    constructor(capacity) {
        this.#capacity = capacity;
        this.#cache = new Map();

        this.#leastRecentlyUsedDummyNode = new Node(0, 0);
        this.#mostRecentlyUsedDummyNode = new Node(0, 0);

        this.#leastRecentlyUsedDummyNode.next = this.#mostRecentlyUsedDummyNode;
        this.#mostRecentlyUsedDummyNode.prev = this.#leastRecentlyUsedDummyNode;
    }

    // Remove item from linkedList 
    #removeFromLinkedList(node) {
        const prev = node.prev;
        const nxt = node.next;
        prev.next = nxt;
        nxt.prev = prev;
    }

    #insertToLinkedList(node) {
        const secondToLastElement = this.#mostRecentlyUsedDummyNode.prev

        secondToLastElement.next = node
        node.next = this.#mostRecentlyUsedDummyNode;
        node.prev = secondToLastElement;
        this.#mostRecentlyUsedDummyNode.prev = node;
    }

    get(key) {
        if(this.#cache.has(key)){
            const node = this.#cache.get(key)
            this.#removeFromLinkedList(node)
            this.#insertToLinkedList(node)
            return node.val;
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.#cache.has(key)){
            this.#removeFromLinkedList(this.#cache.get(key))
        }

        const newNode = new Node(key, value)
        this.#cache.set(key, newNode);
        this.#insertToLinkedList(newNode);

        if(this.#cache.size > this.#capacity){
            const lru = this.#leastRecentlyUsedDummyNode.next;
            this.#removeFromLinkedList(lru);
            this.#cache.delete(lru.key);
        }  
    }
}