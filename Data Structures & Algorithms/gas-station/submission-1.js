class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const net = gas.map((item, idx) => item - cost[idx])

        if(net.reduce((i, a) => i + a, 0) < 0) return -1;

        let gasTank = 0;
        let lastStartIdx = 0;

        for(let i = 0; i < net.length; i++){
            if(gasTank < 0){
                lastStartIdx = i;
                gasTank = 0;
            }
            gasTank += net[i];
        }

        return lastStartIdx;
    }
}
