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
     * @return {void}
     */
    reorderList(head) {
        // find mid

        let slowPointer = head;
        let fastPointer = head.next;

        while(fastPointer !== null && fastPointer.next !== null ){
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        let prev = null;  
        let secondHalfHead = slowPointer.next;
        slowPointer.next = null;

        // reverse second half
        while(secondHalfHead !== null){
            const next = secondHalfHead.next;
            secondHalfHead.next = prev
            prev = secondHalfHead
            secondHalfHead = next
        }

        let first = head;
        let second = prev;

        while(second !== null){
            const tmp1 = first.next;
            const tmp2 = second.next; 

            first.next = second;
            second.next = tmp1;

            first = tmp1
            second = tmp2
        }

    }
}

[,]