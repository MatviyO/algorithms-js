let arr = [44, 22, 55];
let imm;

// imm = arr
// arr.pop() // remove last element    mutable
// console.log(arr)
imm = arr.slice(0, -1) // return new arr with removed last item   immunaable
console.log(imm)


//push
let arr1 = [44, 22, 55];
arr.push(100) // mutable
imm = [...arr1, 100] //immunable

//shift method remove  first elemtn in array mutable
arr2 = [22, 33, 44]
arr2.shift()

let item;
[item, ...imm] = arr;


//unshift added to first elemtnt
arr3 = [22, 33, 44]
arr3.unshift(200)


//reverce 

arr4 = [22, 33, 44]

arr4.reverce()

imm = [...arr4].reverse()