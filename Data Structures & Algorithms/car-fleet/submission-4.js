class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const pair = position.map((p, i) => [p, speed[i]])
                            .sort((a, b) => b[0] - a[0])

        const fleets = [];


    
        pair.forEach(([p, s]) => {
            const timeToFinish = (target - p) / s
            fleets.push(timeToFinish)

            if(fleets.length > 1 && timeToFinish <= fleets[fleets.length-2]){
                fleets.pop()
            }
        })

        console.log(fleets)

        return fleets.length
        
    }
}