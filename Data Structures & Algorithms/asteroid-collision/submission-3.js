class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let i = 0; i < asteroids.length; i++) {
            const incomingAsteroid = asteroids[i];
            const lastMetAsteroid = stack[stack.length - 1];

            if (!stack.length || lastMetAsteroid < 0 || incomingAsteroid > 0) {
                stack.push(incomingAsteroid);
                continue;
            }

            while (stack.length && stack[stack.length - 1] > 0 &&
                Math.abs(incomingAsteroid) > stack[stack.length - 1]) {
                stack.pop();
            }

        
            const top = stack[stack.length - 1];
            if (!stack.length || top < 0) stack.push(incomingAsteroid);  
            else if (top === -incomingAsteroid) stack.pop();              
        }

        return stack;
    }
}


