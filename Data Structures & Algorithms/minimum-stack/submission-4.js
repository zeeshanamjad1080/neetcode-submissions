class MinStack {
    constructor() {
        this.stack = [];
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.min === null || this.min > val) this.min = val;
        this.stack.push(val);
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length - 1 && this.stack[this.stack.length - 1] === this.min) {
            this.min= this.stack[0];
            for (let i = 0; i < this.stack.length - 1; i++) {
                if (this.stack[i] < this.min) {
                    this.min = this.stack[i];
                }
            }
        }else if(this.stack.length === 1){
            this.min = null;
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
