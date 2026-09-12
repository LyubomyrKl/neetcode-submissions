class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = []; // [temperature, index];

        for(let i = 0; i < temperatures.length; i++){
            const t = temperatures[i];

            while(stack.length > 0 && t > stack[stack.length - 1][0]){
                const idx = stack.pop()[1];

                res[idx] = i - idx
            }

            stack.push([t, i])
        }
        

        return res
    }
}

[0, 1, 2, 3, 4, 5];