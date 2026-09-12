class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = position.map((p, i) => [p, speed[i]])
        pair.sort((a, b) => b[0] - a[0])

        const stack = [];

        pair.forEach(([p, s]) => {
        
           const takeTime = (target - p) / s 

            if(
                stack.length === 0 ||
                takeTime > stack[stack.length - 1]
            ) {
                stack.push(takeTime);
            }
        });

        return stack.length
    }
}