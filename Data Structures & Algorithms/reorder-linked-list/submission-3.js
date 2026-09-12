class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;

        let prev = null;

        while (second) {
            const next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        second = prev;

        let first = head;

        while (second) {
            const firstNext = first.next;
            const secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}