class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minLeft = prices[0] || 0;
        let maxprofit = 0;

        for (let i = 0; i < prices.length; i++) {
            let profit = prices[i] - minLeft;
            minLeft = Math.min(minLeft, prices[i]);
            maxprofit = Math.max(maxprofit, profit);
        }

        return maxprofit;
    }
}
