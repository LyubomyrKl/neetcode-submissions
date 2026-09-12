class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueElements = Array.from(new Set(nums));

        const map = new Map()
    
        let longestSeqLen = 0;

        for(let i = 0; i < uniqueElements.length; i++){
            map.set(uniqueElements[i]-1, uniqueElements[i])
        }

        for(let i = 0; i < uniqueElements.length; i++){
            const response = this.getMapValueRecursevely(map, uniqueElements[i])
            
            if(response.length > longestSeqLen){
                longestSeqLen = response.length
            }
        }
     
        return longestSeqLen;
        
    }

    getMapValueRecursevely(map, initialKey){
        if(!map.has(initialKey)){
            return [initialKey];
        } else {
            return [initialKey, ...this.getMapValueRecursevely(map, map.get(initialKey))]
        }
    }
}


// [0, -1]

// -1 <= 0
// -2 <= -1



