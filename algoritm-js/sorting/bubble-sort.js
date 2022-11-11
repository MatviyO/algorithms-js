//сама не ефективна сортировка
const arr = [6,1,5,9,7,3,11,2];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j + 1]
                array[j + 1] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(arr))
