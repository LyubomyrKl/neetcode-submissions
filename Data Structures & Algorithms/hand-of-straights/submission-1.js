class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {

        if(hand.length % groupSize !== 0) return false;

        const cardsCount = new Map();

        for(let i = 0; i < hand.length; i++){
            cardsCount.set(hand[i], (cardsCount.get(hand[i]) ?? 0) + 1);
        }

        const minHeap = new MinPriorityQueue();
        
        for (const card of cardsCount.keys()) minHeap.enqueue(card);

        while (!minHeap.isEmpty()) {
            const first = minHeap.front();                 // smallest remaining card

            for(let i = first; i < first + groupSize; i++){
                if (!cardsCount.has(i) || cardsCount.get(i) === 0) return false;

                cardsCount.set(i, cardsCount.get(i) - 1);
                
                if (cardsCount.get(i) === 0) {
                    minHeap.dequeue();
                }
            }
        }

        return true;
    }   
}
