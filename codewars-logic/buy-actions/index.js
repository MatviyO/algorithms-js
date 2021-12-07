//max profit

let prices1 = [7, 1, 5, 3, 6, 4] //7

let prices2 = [7, 6, 4, 3, 1] // 0

function maxProfix(prices) {
    let result = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1]
        }
    }


}

maxProfix()