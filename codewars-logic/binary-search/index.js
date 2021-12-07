let arr = [-1, 2, 5, 6, 9, 12]

let search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((right - left) / 2) + left;

        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}