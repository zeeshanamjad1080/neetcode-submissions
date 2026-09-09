class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
         const cars = position.map((pos, i) => [pos, speed[i]]);

        // Closest to target first
        cars.sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let lastFleetTime = 0;

        for (const [pos, spd] of cars) {
            const time = (target - pos) / spd;

            if (time > lastFleetTime) {
                fleets++;
                lastFleetTime = time;
            }
        }

        return fleets;
    }
}
