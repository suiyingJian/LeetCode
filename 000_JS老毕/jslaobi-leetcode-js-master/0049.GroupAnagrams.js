var groupAnagrams = function (strs) {
  if (strs.length === 0) {
    return [];
  }
  const map = new Map();

  for (const str of strs) {
    const characters = Array(26).fill(0);
    //ES6新特性，像数组中添加26位都是0的数字
    for (let i = 0; i < str.length; i++) {
      // console.log(str[i]);
      const ascii = str.charCodeAt(i) - 97;

      // console.log(str.charCodeAt(i));
      // console.log(ascii);

      characters[ascii]++;
    }

    //一种很重要的解题技巧，很多题目都可以用到，把26位小写字母对应的assic码-97 变成从0开始的数组
    const key = characters.join(" "); // 感谢L30Yu提交bug并提出解决方案： https://github.com/jslaobi/jslaobi-leetcode-js/issues/1
    if (map.has(key)) {
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }

  const result = [];
  for (const arr of map) {
    result.push(arr[1]);
  }

  return result;
};
