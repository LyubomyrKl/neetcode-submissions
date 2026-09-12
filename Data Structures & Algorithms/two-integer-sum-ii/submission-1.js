class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1 

        while (l <= r){
            const curSum = numbers[l] + numbers[r];

            if(curSum > target){
                r--;
                continue
            }

            if(curSum < target){
                l++
                continue
            }

            return [l+1, r+1]
        }

        return [];
    }
}