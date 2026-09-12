class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map(); // original node -> copied node

        let current = head;
        
        while(current !== null){
            map.set(current, {
                val: current.val,
                next: null,
                random: null
            })

            current = current.next
        }

        current = head 

        while(current !== null){
            const newNode = map.get(current);

            if(current.next){
                newNode.next = map.get(current.next)
            }
            

            if(current.random){
                newNode.random = map.get(current.random)
            }

            current = current.next
        }
    

        return map.get(head) ?? null;
    }
}