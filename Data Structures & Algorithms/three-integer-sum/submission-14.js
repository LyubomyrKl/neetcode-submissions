class Solution {
    threeSum(numsInitial) {
        const results = [];
        const nums = numsInitial.sort((a, b) => a - b)

        for(let i = 0; i < nums.length; i++){
          if (i > 0 && nums[i] === nums[i - 1]) continue;

          let l = i + 1;
          let r = nums.length - 1;


          while(l < r){
            const sum = nums[i] + nums[l] + nums[r];

            if(sum > 0){
                r--;
                continue;
            }
            
            if(sum < 0){
                l++;
                continue;
            } 
            
            results.push([nums[i], nums[l], nums[r]])>
            l++;
            while (l < r && nums[l - 1] === nums[l]){
                l++;
            }
          }
        }

        return results;
    }
}