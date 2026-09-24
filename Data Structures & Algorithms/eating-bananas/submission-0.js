class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1,
            right = Math.max(...piles);

        while (right > left) {
            let mid = Math.floor(left + (right - left) / 2);

            let totalHours = piles.reduce((a, b) => {
                let hours = Math.ceil(b / mid);
                return hours + a;
            }, 0);
            
            if (totalHours <= h) {
                // Speed works. Try a smaller speed.
                right = mid;
            } else {
                // Speed is too slow. Try a larger speed.
                left = mid + 1;
            }
        }

        return right;
    }
}
