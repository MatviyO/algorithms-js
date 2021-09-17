const input1 = [1,8,6,2,5,4,8,3,7]
const input1 = [1,1]
const input1 = [4,3,2,1,4]
const input1 = [1,2,1]

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

console.log(input1, maxArea(input1))