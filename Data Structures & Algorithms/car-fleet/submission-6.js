class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0])

        const fleetMonotonicStack = [];

        pair.forEach(pair => {
            const timeToFinish = (target - pair[0]) / pair[1];

            if(timeToFinish <= fleetMonotonicStack[fleetMonotonicStack.length - 1]) return;

            fleetMonotonicStack.push(timeToFinish)
        })

        return fleetMonotonicStack.length   
    }
}