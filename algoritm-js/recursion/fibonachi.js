//наступне число сума двох попережніх

function fibonachi(n) {
    if (n===1) {
        return 1
    }

    return fibonachi(n -1) + fibonachi(n -2);
}

console.log(fibonachi(5))
