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
    let val = Object.values(obj)
    return val.sort()
}
console.log(sortObj());






















