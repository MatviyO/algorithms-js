function findDeletedNumber(arr, mixArr) {
    return arr.filter(el => !mixArr.includes(el))[0] || 0;
}
