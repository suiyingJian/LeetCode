/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const set = new Set()
  let i = 0,
    j = 0,
    maxLength = 0;
  
  if (s.length === 0) {
    return 0;
  }

  for (i; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size)
    } else {
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }

  return maxLength;
};


/**
 * siding window
 * 1.创建一个set
 * 2.两个指针（不要被这个名词吓到），
 * 第一个指向字符串开头，
 * 第二个随着for循环遍历字符串-i
 * 3.如果set里没有s[i]，说明目前为止，还没有重复字符，把s[i]添加到set里，然后更新最大不重复字符的数量。
 * 4.如果set里有s[i]，则从set里开始删除s[j],并且递增j,再检查set里是否有s[i]
 * 如此反复步骤3和4，直到遍历完整个字符串
 */