
const permute = (nums) => {
  const ans = [];
  const res = [];
  const hash = [];
  const len = nums.length;
  const dfs = (num, ns) => {
    if (num === len) ans.push([...res]);
    for (let i = 0; i < len; i += 1) {
      if (!hash[i]) {
        hash[i] = true;
        res.push(ns[i]);
        dfs(num + 1, ns);
        hash[i] = false;
        res.pop();
      }
    }
  };

  dfs(0, nums);
  return ans;
};

module.exports = permute;
