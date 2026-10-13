class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let occurences = this.occMap(tasks);
        let queue = [];
        let qLeft = 0;
        let time = 0;

        for (let i = Math.floor((occurences.length - 1) / 2); i >= 0; i--) {
            this.heapDown(i, occurences);
        }

        while (occurences.length || qLeft < queue.length) {
            time++;

            if (occurences.length) {
                let max = this.removeElement(occurences);
                max.occ--;
                if (max.occ > 0) {
                    queue.push({
                        ...max,
                        toReady: time + n,
                    });
                }
            }

            if (qLeft < queue.length && queue[qLeft].toReady <= time) {
                occurences.push(queue[qLeft]);
                this.heapUp(occurences);
                qLeft++;
            }
        }

        return time;
    }

    heapUp(array) {
        let i = array.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (array[parent].occ < array[i].occ) {
                [array[parent], array[i]] = [array[i], array[parent]];
                i = parent;
            } else {
                break;
            }
        }
    }

    heapDown(i, array) {
        let n = array.length;
        while (true) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let max = i;

            if (left < n && array[max].occ < array[left].occ) max = left;
            if (right < n && array[max].occ < array[right].occ) max = right;
            if (max === i) break;

            [array[max], array[i]] = [array[i], array[max]];

            i = max;
        }
    }

    occMap(tasks) {
        let map = new Map();

        for (let item of tasks) {
            let value = map.get(item);
            if (value) {
                map.set(item, {
                    occ: value.occ + 1,
                    char: value.char,
                });
            } else {
                map.set(item, {
                    occ: 1,
                    char: item,
                });
            }
        }

        return [...map.values()];
    }

    removeElement(array) {
        if (!array.length) return null;
        let max = array[0];
        let last = array.pop();

        if (array.length) {
            array[0] = last;
            this.heapDown(0, array);
            return max;
        }
        return last;
    }
}
