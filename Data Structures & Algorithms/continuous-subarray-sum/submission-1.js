class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
       const reminders = new Map();
        let sum = 0;

        reminders.set(0, -1)

        for(let i = 0; i < nums.length; i++){
            sum += nums[i];

            const reminder = sum % k;

            if(
                reminders.has(reminder) && 
                i - reminders.get(reminder) > 1
            ) return true

            if(!reminders.has(reminder)) {  // Only set if not seen before
                reminders.set(reminder, i);
            }
        }

        return false
    }
}
