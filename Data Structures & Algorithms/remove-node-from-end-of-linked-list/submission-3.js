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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let firstPointer = head;

        for(let i = 0; i < n; i++){
            firstPointer = firstPointer.next;
        }

        const dummy = {
            next: head,
        }

        let secondPointer = dummy;

        while(firstPointer !== null){
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        } 

        secondPointer.next = secondPointer.next.next;

        return dummy.next;


    }
}

// [dummy, 1, 2, 3, 4]
//