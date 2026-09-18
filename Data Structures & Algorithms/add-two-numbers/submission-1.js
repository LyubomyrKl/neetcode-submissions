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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
       return this.func(l1, l2)
    }

    func(l1, l2, extra = 0){
        if(!l1 && !l2 && extra === 0) return null;
        let v1 = 0,
            v2 = 0; 

        if(l1){
            v1 = l1.val
        }

        if(l2){
            v2 = l2.val;
        }

       
        const sum = v1 + v2 + extra;
        const nextExtra = Math.floor(sum / 10);

        let nodeValue = sum % 10;

        const nextNode = this.func(l1 ? l1.next : null, l2 ? l2.next : null, nextExtra)

        return new ListNode(nodeValue, nextNode)

    }

    

   
}
