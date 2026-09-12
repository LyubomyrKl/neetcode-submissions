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

        let i = 0;

        while(i < n){
            firstPointer = firstPointer.next;
            i++
        }

        let dummy = new ListNode(0, head);
        let dummyPointer = dummy;

        while(firstPointer !== null){
            firstPointer = firstPointer.next;
            dummyPointer = dummyPointer.next;
        }

        dummyPointer.next = dummyPointer.next.next

        return dummy.next;
    }
}

// [dummy, 1, 2, 3, 4]
//