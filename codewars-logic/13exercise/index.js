//2
const a1 = [1, 2, 3]
const b = [2, 3, 4]

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

const a3 = {1: 10, 3: 20}
const b4 = {2: 30, 5: 30}
console.log(Object.assign({}, a3, b4))

//6
// equal string palendrom

const pal = 'aabb'

const palindrom = str => {
    return str === str.split('').reverse().join('');
}

//10
const f = ['white', 'red']
const k = ['black', 'red']

const function10 = (arr1, arr2) => {
    return arr1.filter(item => !arr2.includes(item))
}

function10(f, k)

//11


const z = 'z';
const strZ = 'asfzazaszaza';


const function11 = (str, z) => {
    let index = str.indexOf(z)
    let count = 0;
    while (index !== -1) {
        count ++;
        index = str.indexOf(z, index + 1)
    }
    return count;

}


//12

const a12 = [1,2,3,4,5,6,2,7]

let s12 = new Set(a12)
console.log(a12.length === s12.size)




























