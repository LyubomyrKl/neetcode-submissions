class MinStack {
    #stack
    #mins
    constructor() {
        this.#stack = [];
        this.#mins = [];
    }

    /**
     * @param {number} val
     * @return {void} 
     */
    push(val) {
        this.#stack.push(val)
        val = Math.min(
            val,
            this.#mins.length === 0
                ? val
                : this.#mins[this.#mins.length - 1],
        );
        this.#mins.push(val);
        return this;
    }

    /**
     * @return {void}
     */
    pop() {
        this.#stack.pop()
        this.#mins.pop()
        return this;
    }

    /**
     * @return {number}
     */
    top() {
        return this.#stack[this.#stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.#mins[this.#stack.length - 1]
    }
}
