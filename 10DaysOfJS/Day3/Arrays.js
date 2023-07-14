function getSecondLargest(nums) {
  let first = 0,
    second = 0;
  // Complete the function
  if (nums.length > 10 || nums.length < 1) {
    return 'Invalid Input';
  }

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    if (num < 0 || num > 100) {
      return 'Invalid Input';
    }

    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second;
}
