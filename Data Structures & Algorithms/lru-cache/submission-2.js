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
        this.#leastRecentlyUsedDummyNode = new Node('somedummynodeunqueleftkey', 0)
        this.#mostRecentlyUsedDummyNode = new Node('somedummynodeunquerightkey', 0)

        this.#leastRecentlyUsedDummyNode.next = this.#mostRecentlyUsedDummyNode;
        this.#mostRecentlyUsedDummyNode.prev = this.#leastRecentlyUsedDummyNode;
    }

    #removeFromLinkedList(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    #insertToLinkedList(node) {
        node.next = this.#mostRecentlyUsedDummyNode;
        node.prev = this.#mostRecentlyUsedDummyNode.prev;

        this.#mostRecentlyUsedDummyNode.prev.next = node;
        this.#mostRecentlyUsedDummyNode.prev = node;
        
    }

    get(key) {
        if(this.#cache.has(key)){
            const node = this.#cache.get(key);
            this.#removeFromLinkedList(node);
            this.#insertToLinkedList(node);
            return node.val
        }
        return -1
    }

    put(key, value) {
        if(this.#cache.has(key)){
            this.#removeFromLinkedList(this.#cache.get(key))
            this.#cache.delete(key);
        }

        const newNode = new Node(key, value);

        this.#cache.set(key, newNode);
        this.#insertToLinkedList(newNode);

        if(this.#cache.size > this.#capacity){
            const lru = this.#leastRecentlyUsedDummyNode.next;

            this.#removeFromLinkedList(lru);
            this.#cache.delete(lru.key);    
        }
    }
}