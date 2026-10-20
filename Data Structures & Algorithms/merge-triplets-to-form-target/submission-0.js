class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const valid = new Array(3).fill(false)

        for(let t of triplets){
            if(
                t[0] > target[0] ||
                t[1] > target[1] ||
                t[2] > target[2]
            ) continue;

            if(t[0] === target[0]) valid[0] = true;

            if(t[1] === target[1]) valid[1] = true;

            if(t[2] === target[2]) valid[2] = true;

        }

        return valid.every(Boolean)

    }
}
