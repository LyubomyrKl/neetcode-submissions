class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const n = nums.length;
        const total = nums.reduce((i, a) => i + a, 0);
        const sumMap = new Map();

        if (target > total || target < -total) return 0

        for (let v = -total; v <= total; v++) {
            sumMap.set(v, new Array(n + 1).fill(0));
        }

        sumMap.get(0)[n] = 1;


        for(let i = n - 1; i >= 0; i--){
            for (let v = -total; v <= total; v++) {
                const plusItem = v - nums[i];
                const minusItem = v + nums[i]

                const plusWays  = sumMap.get(plusItem)?.[i + 1] ?? 0;   // box (plusItem, i + 1)
                const minusWays = sumMap.get(minusItem)?.[i + 1] ?? 0;  // box (minusItem, i + 1)

                sumMap.get(v)[i] = plusWays + minusWays;
            }
        }


        return sumMap.get(target)[0];
    }
}
