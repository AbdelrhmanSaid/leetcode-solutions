const fourSum = (nums: number[], target: number): number[][] => {
    nums = nums.sort((a, b) => a - b);

    const result: number[][] = [];
    for (let i: number = 0; i < nums.length - 3; i++) {
        const num1 = nums[i];
        if (i > 0 && num1 === nums[i - 1]) {
            continue;
        }
        for (let j: number = i + 1; j < nums.length - 2; j++) {
            const num2 = nums[j];
            if (j > i + 1 && num2 === nums[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = num1 + num2 + nums[left] + nums[right];
                if (sum === target) {
                    result.push([num1, num2, nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};