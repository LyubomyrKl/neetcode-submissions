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

     reverseList(head) {
        let prev = null
        let current = head

        while(current !== null){
            const next = current.next;

            current.next = prev;

            prev = current;

            current = next;
        }

        return prev
    }
}


