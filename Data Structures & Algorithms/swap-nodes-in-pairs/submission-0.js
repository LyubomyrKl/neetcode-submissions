/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    swapPairs(head) {
        const dummy = {
            next: head
        }

        let pointer = dummy;
        
    
        while(pointer){
            const next = pointer.next;
            const afterNext = pointer.next?.next;

            if(!next || !afterNext) break;
            
            const temp = afterNext.next;

            pointer.next = afterNext;
            afterNext.next = next;
            next.next = temp;
            
            pointer = next;
        }

        return dummy.next;
    }
}
