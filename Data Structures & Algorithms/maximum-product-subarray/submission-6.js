class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProduct = nums[nums.length - 1];
        let minProduct = nums[nums.length - 1];
        let result = nums[nums.length - 1];

        for (let i = nums.length - 2; i >= 0; i--) {
            const x = nums[i];

            const tempMax = Math.max(
                x,
                x * maxProduct,
                x * minProduct
            );

            const tempMin = Math.min(
                x,
                x * maxProduct,
                x * minProduct
            );

            maxProduct = tempMax;
            minProduct = tempMin;

            result = Math.max(result, maxProduct);
        }

        return result;
    }
}