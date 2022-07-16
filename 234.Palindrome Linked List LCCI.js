/**
 * 234 回文链表
 * 编写一个函数，检查输入的链表是否是回文的。
 * 请判断一个链表是否为回文链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 
 * @param {ListNode} head 
 * @returns {boolean}
 */
/**
 * 
 *  (1) 字符串拼接： 对于这道题，最直接的思路就是，遍历链表，同时正向和反向拼接链表的节点，最后比较两个拼接出来的字符串是否一样。} head 
 *
 */
var isPalindrome = function (head) {
    let a = '' 
    let b = ''
    while (head) {
        const nodeVal = head.val
        a = a + nodeVal 
        b = nodeVal + b
        head = head.next

    } 
    return a === b
}

/**
 * 2）递归遍历：

首先，定义一个全局的指针pointer，其初始值为head，用来正序遍历
然后，调用递归函数，对链表进行逆序遍历，当头部节点为null的时候停止遍历
如果正序遍历的节点值和逆序遍历的节点值都相等，就返回true，否则就返回false
 */

let pointer
function fn(head) {
    if (!head) return true
    const res = fn(head.next) && (pointer.val === head.val)

    pointer = pointer.next
    return res
}

var isPalindrome = function (head) {
    pointer = head
    return fn(head)
}