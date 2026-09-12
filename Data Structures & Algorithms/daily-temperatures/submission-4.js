class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []; // [temp, index]
        const res = new Array(temperatures.length).fill(0);

        temperatures.forEach((temperature, index) => {
            
            while(stack.length > 0 && stack[stack.length - 1][0] < temperature){
                const idx = stack.pop()[1];
                res[idx] = index - idx
            }

            stack.push([temperature, index])
        })

        return res;
    }
}

