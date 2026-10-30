class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
         let maxProduct = nums[0];
        let minProduct = nums[0];

        let res = nums[0];

        for(let i = 1; i < nums.length; i++){
            const x = nums[i];
            const prevMax = maxProduct;
            const prevMin = minProduct;

            maxProduct = Math.max(x, x * prevMax, x * prevMin);
            minProduct = Math.min(x, x * prevMax, x * prevMin);


            res = Math.max(res, maxProduct);
        }
        
        return res;
    }
}