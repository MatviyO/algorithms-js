//по принципу поділу, ділимо масив на підмасиви, ділимо по центру
//cамий кращий
const arr = [6,1,5,9,7,3,11,2];
let time = performance.now();
console.time('mark')
//example 1
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIndex = Math.floor(array.length / 2);
    let midValue = array[midIndex];
    let less = [];
    let more = [];
    for (let i = 0; i < array.length; i++) {
        if (i === midIndex) continue;
        if (array[i] < midValue) {
            less.push(array[i])
        } else {
            more.push(array[i])
        }
    }
    return [...quickSort(less), midValue, ...quickSort(more)]
}
time = performance.now() - time;
console.log(time)
console.timeEnd('mark')
console.log(quickSort(arr))

//example 2

