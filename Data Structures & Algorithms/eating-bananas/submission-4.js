class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);

        while (l < r) {
            const m = l + Math.floor((r - l) / 2);

            let timeSpent = 0;

            for (const pile of piles) {
                timeSpent += Math.ceil(pile / m);
            }

            if (timeSpent <= h) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return l;
    }
}