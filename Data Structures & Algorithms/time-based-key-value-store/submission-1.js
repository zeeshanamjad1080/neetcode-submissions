class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let keyVal = this.keyStore.get(key);

        if (keyVal) {
            let fValue = [...keyVal, [timestamp, value]];
            this.keyStore.set(key, fValue);
        } else {
            let fValue = [[timestamp, value]];
            this.keyStore.set(key, fValue);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let value = this.keyStore.get(key);
        if (value) {
            let l = 0;
            let r = value.length - 1;

            while (r >= l) {
                let m = Math.floor(l + (r - l) / 2);

                if (value[m][0] === timestamp) return value[m][1];

                if (value[m][0] > timestamp) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
            return r >= 0 ? value[r][1] : "";
        } else {
            return "";
        }
    }
}
