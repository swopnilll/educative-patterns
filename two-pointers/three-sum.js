const findSumOfThree = (nums, target) => {
  // sort the number
  nums.sort((a, b) => a - b);

  let temp;
  let smallIndex;
  let bigIndex = nums.length - 1;

  for (let i = 0; i < nums.length - 2; i++) {
    smallIndex = i + 1;
    bigIndex = nums.length - 1;

    while (smallIndex < bigIndex) {
      temp = nums[i] + nums[smallIndex] + nums[bigIndex];

      if (temp === target) {
        return true;
      }

      if (temp < target) {
        smallIndex++;
      } else {
        bigIndex--;
      }
    }
  }

  return false;
};
