class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        let fastPointer = head;
        let slowPointer = head; 

        while(fastPointer.next && fastPointer.next.next){
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer.next;
        }

        let firstPointer = head;
        let secondPointer = slowPointer.next;
        slowPointer.next = null

        let prev = null

        while(secondPointer){
            const nxt = secondPointer.next;
            secondPointer.next = prev;
            prev = secondPointer;
            secondPointer = nxt;
        }

        secondPointer = prev;

        while(secondPointer){
            const firstNext = firstPointer.next;
            const secondNext = secondPointer.next;

            firstPointer.next = secondPointer;
            secondPointer.next = firstNext;

            firstPointer = firstNext;
            secondPointer = secondNext;
        }
    }
}