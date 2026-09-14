class Solution {
    constructor(){
        this.maxHeap = [];
    }

    
    lastStoneWeight(stones) {
        for(let stone of stones){
            this.insert(stone);
        }

        while(this.maxHeap.length > 1){
           const rest = this.pop() - this.pop()

           if(rest) this.insert(rest);
        }

        return this.maxHeap[0] || 0
    }

    insert(value){
        this.maxHeap.push(value);
        this.heapifyUp();
    }

    pop(){
        const maxValue = this.maxHeap[0];

        if (this.maxHeap.length === 1) {
            this.maxHeap.pop();
            return maxValue;
        }

        this.maxHeap[0] = this.maxHeap.pop();
        this.heapifyDown();
        return maxValue;
    }

    heapifyUp() {
        let i = this.maxHeap.length - 1;

        while(i > 0){
            const elementValue = this.maxHeap[i];
            const parentIndex = Math.floor((i - 1) / 2);
            const parentValue = this.maxHeap[parentIndex];

            if(parentValue >= elementValue) return;

            this.maxHeap[i] = parentValue;
            this.maxHeap[parentIndex] = elementValue;

            i = parentIndex;
        }
    }

    heapifyDown() {
        let i = 0;

        while(i < this.maxHeap.length - 1){
            const parentElementValue = this.maxHeap[i]

            const leftIndex = i * 2 + 1;
            const rightIndex = i * 2 + 2;

            const leftValue = this.maxHeap[leftIndex] || 0;
            const rightValue = this.maxHeap[rightIndex] || 0;

            const maxValue = Math.max(rightValue, leftValue)
            const maxItemIdx = maxValue === rightValue ? rightIndex : leftIndex;

            if(parentElementValue >= maxValue) return;

            this.maxHeap[i] = maxValue;
            this.maxHeap[maxItemIdx] = parentElementValue;

            i = maxItemIdx
        }
    }
}
