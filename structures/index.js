const quickStart = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot =array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        if ( i === pivotIndex) {
            continue
        }
        if (array[i] < pivot) {
            less
        }
    }
}
