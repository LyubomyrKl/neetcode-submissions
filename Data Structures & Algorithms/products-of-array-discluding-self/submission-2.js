class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const numsWithoutZeros = nums.filter(num => num !== 0)
        let indexOfZero;

        if(nums.length - numsWithoutZeros.length >= 2){
            return new Array(nums.length).fill(0)
        }

        if(nums.length - numsWithoutZeros.length === 1){
            indexOfZero = nums.indexOf(0)
        }

        let productWithoutZero = 1;

        for (let i = 0; i < numsWithoutZeros.length; i++){
            productWithoutZero *= numsWithoutZeros[i]
        }

        if(indexOfZero){
            const result = new Array(nums.length).fill(0)
            result[indexOfZero] = productWithoutZero;
            console.log(result)
            return result
        }



        const result = [];

        for (let i = 0; i < nums.length; i++){
            result.push(productWithoutZero/nums[i])
        }

        return result
    }
}
