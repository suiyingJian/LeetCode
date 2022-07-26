/**
 * 买卖股票最佳时期
 * best-time-to-buy-and-sell-stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) { return 0;}       //如果数组为0 直接返回这个数字

    let minPrice = prices[0];       //定义一个minPeice 存储当前这个卖出点左半边的最小价格

    let maxProfit = 0;              //记录到目前为止最大利润
    for (let i = 0; i < prices.length; i++) {       //遍历数组，
        if (prices[i] < minPrice) {
            minPrice = prices[i];       //如果发现当前价格小于之前的 就把当前价格设置为最低价格
        } else if ((prices[i] - minPrice) > maxProfit) {
            maxProfit = prices[i] - minPrice        //更新新的最大利润
        }
    }

    return maxProfit
};


/**
 * 记录【今天之前买入的最小值】minPrice
 * 计算【今天之前最小值买入，今天卖出的获利】，也即【今天卖出的最大获利】maxProfit
 * 比较【每天的最大获利】，取最大值即可
 */