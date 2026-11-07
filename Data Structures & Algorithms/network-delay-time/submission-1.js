/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */


class MinHeap {
    constructor(cmp = (a, b) => a - b){
        this.minHeap = [];
        this.cmp = cmp;
    }

    size(){
        return this.minHeap.length;
    }

    peek(){
        return this.minHeap[0];
    }

    insert(item){
        this.minHeap.push(item);
        this.heapifyUp();
    }

    pop(){
        if(this.minHeap.length === 0) return;
        if(this.minHeap.length === 1) return this.minHeap.pop();

        const itemToReturn = this.minHeap[0];
        this.minHeap[0] = this.minHeap.pop();

        this.heapifyDown();

        return itemToReturn;
    }


    heapifyUp(){
        let i = this.size() - 1;

        while(i > 0){
            const itemToHeapify = this.minHeap[i];
            const parentIdx = Math.floor((i - 1) / 2)
            const parent = this.minHeap[parentIdx];

            if(this.cmp(itemToHeapify, parent) >= 0) return
                
            this.minHeap[i] = parent;
            this.minHeap[parentIdx] = itemToHeapify;
            i = parentIdx;
        }
    }

   heapifyDown(){
        let i = 0;
        while(true){
            const parent = this.minHeap[i];
            const leftIdx = i * 2 + 1;
            const rightIdx = i * 2 + 2;

            if(leftIdx >= this.minHeap.length) return;

            let minChildIdx = leftIdx;

            if(
                rightIdx < this.minHeap.length &&
                this.cmp(this.minHeap[leftIdx], this.minHeap[rightIdx]) > 0
            ){
                minChildIdx = rightIdx;
            }

            const minItem = this.minHeap[minChildIdx];

            if(this.cmp(parent, minItem) <= 0) return;

            this.minHeap[i] = minItem;
            this.minHeap[minChildIdx] = parent;
            i = minChildIdx;
        }
    }
}

class Solution {
    // [[from, to, weight]]
   networkDelayTime(times, n, startNode) {
        // from: [to, weight]
        const adj = new Map();
        // node: distance
        const dist = new Map();

        //[weightToNode, node]
        const minHeap = new MinHeap((a, b) => a[0] - b[0])

        minHeap.insert([0, startNode])

        for(let i = 0; i < times.length; i++){
            const [from, to, weight] = times[i];

            if(!adj.has(from)) adj.set(from, []);
            
            adj.get(from).push([to, weight]);
        }


        let t = 0;
        while(minHeap.size()){
            const [weightToNode, node] = minHeap.pop();
        
            if(dist.has(node)) continue;

            dist.set(node, weightToNode);
            t = weightToNode;
            
            for(let [to, weight] of adj.get(node) || []){
                if(dist.has(to)) continue;

                minHeap.insert([weightToNode + weight, to]);
            }
        }

        return dist.size === n ? t : -1
      
  }
}