class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null; 
        
        const copyNodesMap = new Map();
        let pointer = head;

        while(pointer !== null){
            copyNodesMap.set(pointer, {
                val: pointer.val,
                next: null,
                random: null
            })

            pointer = pointer.next;
        }
        
        pointer = head;

        while(pointer !== null){
            const newNode = copyNodesMap.get(pointer);

            newNode.next = pointer.next ? copyNodesMap.get(pointer.next) : null
            newNode.random = pointer.random ? copyNodesMap.get(pointer.random) : null

            pointer = pointer.next;
        }

        return copyNodesMap.get(head)
        
    }
}