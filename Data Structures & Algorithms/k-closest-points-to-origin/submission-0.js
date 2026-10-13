class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let distance = this.distance(points);
        for (let i = Math.floor((distance.length - 1) / 2); i >= 0; i--) {
            this.heapDown(i, distance);
        }

        while (distance.length > k) {
            this.removeElement(distance);
        }

        return distance.map((rec) => rec.cord);
    }

    distance(coordinates) {
        let response = [];

        for (let item of coordinates) {
            let distance = item[0] * item[0] + item[1] * item[1];
            response.push({
                dis: distance,
                cord: item,
            });
        }
        return response;
    }

    heapDown(i, array) {
        let n = array.length;
        while (true) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let max = i;

            if (left < n && array[max].dis < array[left].dis) max = left;
            if (right < n && array[max].dis < array[right].dis) max = right;
            if (max === i) break;

            [array[max], array[i]] = [array[i], array[max]];

            i = max;
        }
    }

    removeElement(array) {
        if (!array.length) return;
        let last = array.pop();

        if (array.length) {
            array[0] = last;
            this.heapDown(0, array);
        }
    }
}
