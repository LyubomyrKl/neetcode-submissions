class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {


            const stack = [];                                            // changed: start empty, loop from 0

        for (let i = 0; i < asteroids.length; i++) {
            const incomingAsteroid = asteroids[i];
            const lastMetAsteroid = stack[stack.length - 1];

            if (!stack.length || lastMetAsteroid < 0 || incomingAsteroid > 0) {
                stack.push(incomingAsteroid);
                continue;
            }

            // changed: stop at empty stack or a left-moving top
            while (stack.length && stack[stack.length - 1] > 0 &&
                Math.abs(incomingAsteroid) > stack[stack.length - 1]) {
                stack.pop();
            }

            // moved: decide incoming's fate after the pops, not before
            const top = stack[stack.length - 1];
            if (!stack.length || top < 0) stack.push(incomingAsteroid);  // survived
            else if (top === -incomingAsteroid) stack.pop();              // both explode
            // else: top is bigger, incoming explodes
        }

        return stack;
    }
}


