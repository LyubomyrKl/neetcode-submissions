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

     const dummy = {
            next: head,
        };

        let first = head;

        for (let i = 0; i < n; i++) {
            first = first.next;
        }

        let second = dummy;

        while (first !== null) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;

        return dummy.next;
    }



}

// [dummy, 1, 2, 3, 4]
//