const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const input2 = [1, 1]
const input3 = [4, 3, 2, 1, 4]
const input4 = [1, 2, 1]

function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let currentVolume = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(maxArea, currentVolume);
        if (height[left] < height[right]) {
            left++
        } else {
            right -= 1;
        }
    }

    return maxArea;

}

// console.log(input1, maxArea(input1))


function sayHi(person) {
    const name = person.name;
    setTimeout(() => {
        console.log('Hello, ' + name);
    }, 3000);
}

let someone = { name: 'Dan' };
sayHi(someone);

someone = { name: 'Yuzhi' };
sayHi(someone);

someone = { name: 'Dominic' };
sayHi(someone);