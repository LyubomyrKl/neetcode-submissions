class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        if (n < 3) return 0;

        let sum = 0;

        let left = 0;
        let stones = 0;

        for (let right = 1; right < n; right++) {
            if (height[right] >= height[left]) {
                const level = height[left];
                const width = right - left - 1;
                sum += level * width - stones;
                stones = 0;
                left = right;
            } else {
                stones += height[right];
            }
        }

        const peak = left;
        let wall = n - 1;
        stones = 0;

        for (let i = n - 2; i >= peak; i--) {
            if (height[i] >= height[wall]) {
                const level = height[wall];
                const width = wall - i - 1;
                sum += level * width - stones;
                stones = 0;
                wall = i;
            } else {
                stones += height[i];
            }
        }

        return sum;
    }
}