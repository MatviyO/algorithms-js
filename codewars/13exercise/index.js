//2
const a1 = [1,2,3]
const b = [2,3,4]

const findOne = () => {
    let res = []
    for (let i = 0; i < a1.length; i++) {
        if (b.includes(a1[i])) res.push(a1[i])
    }
    return res;
}
console.log(findOne())

const findOne2 = () => a1.filter(item => b.includes(item));
console.log(findOne2())

// task 3
//sorting value in object

let obj = {
    1: 22,
    0: 1,
    5: 4
}
const sortObj = (item) => {
    let val = Object.values(item)
    return val.sort((a, b) => a - b)
    // return val.sort((a, b) => a + b)
}
console.log(sortObj(obj));
//4
// assign objects

const a3 = {1:10, 3: 20}
const b4 = {2: 30, 5: 30}
console.log(Object.assign({}, a3, b4))

//6
// equal string palendrom

const pal = 'aabb'

const palindrom = str => {
    return str === str.split('').reverse().join('');
}

















