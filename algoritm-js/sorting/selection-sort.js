//масив не відсортованих елементів, в циклі проходимось і знаходимо мінмальне число і ставимо його на перше місце,
// потім знов те саме тільки тепер число міняєм місце на другий елемент і так далі
const arr = [6,1,5,9,7,3,11,2];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if ( array[j] < array[i]) {
                indexMin = j;
            }
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp

    }
    return array;
}

console.log(selectionSort(arr))
