class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1; 

        while(l < r){
            // if(numbers[l] > target) return [];  

            if(numbers[l] + numbers[r] === target) return [l+1, r+1]

            numbers[l] + numbers[r] > target ? r-- : l++
        }
    }
}

