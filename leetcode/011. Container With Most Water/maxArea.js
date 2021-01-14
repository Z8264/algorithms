const maxArea = (height) => {
  let [max, left, right] = [0, 0, height.length - 1];

  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] > height[right]) right -= 1;
    else left += 1;
  }

  return max;
};

module.exports = maxArea;
