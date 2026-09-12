class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map(); // original node -> copied node

        // 1. Create all copied nodes
        let current = head;

        while (current !== null) {
            map.set(current, {
                val: current.val,
                next: null,
                random: null
            });

            current = current.next;
        }

        current = head;

        while (current !== null) {
            const copy = map.get(current);

            copy.next = map.get(current.next) ?? null;
            copy.random = map.get(current.random) ?? null;

            current = current.next;
        }

        return map.get(head) ?? null;
    }
}