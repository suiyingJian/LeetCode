/**
 * 有效括号
 * 
 * stack 栈
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const mappings = new Map()
    mappings.set('(', ')');
    mappings.set('[', ']');
    mappings.set('{', '}');

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (mappings.has(s[i])) {
            stack.push(mappings.get(s[i]))
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;

};





/**
 * 1.创建一个HashMap,把括号配对放进去
 * 2.创建一个stack(object),for循环遍历字符串，对于每一个字符，如果map里有这个key，那说明它是个左括号，从map里取得相对应的右括号（为什么？），把它push进stack里，否则的话，他就是右括号，需要pop出stack里的第一个字符然后看它是否等于当前的字符，如果不相符，则返回FALSE
 * 3.循环结束后，如果stack不为空，说明还剩一些左括号没有闭合，返回false，否则返回true
 */