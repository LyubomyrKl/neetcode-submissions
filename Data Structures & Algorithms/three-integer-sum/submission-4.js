class Solution {
    threeSum(numsInitial) {
        const nums = numsInitial.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    r--;
                    continue;
                }

                if (sum < 0) {
                    l++;
                    continue;
                }

                res.push([nums[i], nums[l], nums[r]]);

                l++;
                r--;

                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }

        return res;
    }
}