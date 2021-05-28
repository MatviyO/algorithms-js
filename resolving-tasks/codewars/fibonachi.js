//1 ,1,2,3,5,8,13
//f(N) =  f(n-1) + f(n -2)

//recursion example 1
function fibonachi(n) {
    if (n <= 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    return fibonachi(n - 1) + fibonachi(n - 2)
}

//iterative example 2

function interativeFibonachi(n) {
    if (n <= 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }

    let prev = 1
    let result = 1
    for (let i = 0; i < n - 2; i++) {
        let tmp = result;
        result += prev;
        prev = tmp;
    }
    return result

}

console.log(fibonachi(7))