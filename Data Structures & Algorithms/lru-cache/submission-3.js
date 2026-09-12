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
    #leftDummyNode
    #rightDummyNode

    constructor(capacity) {
        this.#capacity = capacity;
        this.#cache = new Map;
        this.#leftDummyNode = new Node('leftDummyNode', 0);
        this.#rightDummyNode = new Node('rightDummyNode', 0);

        this.#leftDummyNode.next = this.#rightDummyNode
        this.#rightDummyNode.prev  = this.#leftDummyNode
    }

    #removeNodeFromRecentLinkedList(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    #insertNodeToRecentLinkedList(node){
        node.next = this.#rightDummyNode;
        node.prev = this.#rightDummyNode.prev

        this.#rightDummyNode.prev.next = node;
        this.#rightDummyNode.prev = node
    }

    get(key) {
      if(this.#cache.has(key)){
        const node = this.#cache.get(key);
        this.#removeNodeFromRecentLinkedList(node);
        this.#insertNodeToRecentLinkedList(node);
        return node.val
      }
      return -1
    }

    put(key, value) {
        if(this.#cache.has(key)){
            this.#removeNodeFromRecentLinkedList(this.#cache.get(key));
        }

        const newNode = new Node(key, value);
        this.#cache.set(key, newNode);
        this.#insertNodeToRecentLinkedList(newNode);

        if(this.#cache.size > this.#capacity){
            const lru = this.#leftDummyNode.next;

            this.#removeNodeFromRecentLinkedList(lru);
            this.#cache.delete(lru.key);
        }
        
    }
}