
class ValueNode{
    constructor(timestamp, value) {
        this.timestamp = timestamp;
        this.value = value;
    }
}

class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) this.keyStore.set(key, []);

        this.keyStore.get(key).push(new ValueNode(timestamp, value))
    }

    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const values = this.keyStore.get(key);

        return this.findClosestValue(values, timestamp);
    }

    findClosestValue(values, timestamp) {
        let l = 0;
        let r = values.length - 1;

        let result = "";

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const midItem = values[mid];

            if (midItem.timestamp === timestamp) {
                return midItem.value;
            }

            if (midItem.timestamp < timestamp) {
                result = midItem.value;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return result;
    }
}