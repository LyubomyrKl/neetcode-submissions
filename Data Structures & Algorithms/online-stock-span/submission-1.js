class StockSpanner {
    constructor() {
        this.stack = []; // [price, day]
        this.day = 0;
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.day += 1;

        while(this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            this.stack.pop(); 
        }
        
        this.stack.push([price, this.day]);

        return this.stack.length >= 2 ? this.day - this.stack[this.stack.length - 2][1] : this.day;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

[[110, 1], [110, 2]]
