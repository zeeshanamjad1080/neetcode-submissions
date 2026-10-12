class MinStack {
    constructor() {
        this.stack = [];
        this.min = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.min > val) this.min = val;
        this.stack.push(val);
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length && this.stack[this.stack.length - 1] === this.min) {
            this.min= this.stack[0];
            for (let i = 0; i < this.stack.length - 1; i++) {
                if (this.stack[i] < this.min) {
                    this.min = this.stack[i];
                }
            }
        }
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (!this.stack.length) return null;
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
