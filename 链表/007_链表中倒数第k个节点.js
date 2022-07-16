/**
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 2 个节点是值为 4 的节点。
 */
/**
 * 
 * @param {ListNode} head 
 * @param {number} k 
 * @returns ListNode
 */
var getKthFromEnd = function (head, k) {
    let slow = head, fast = head
    let cur = 0;
    while (cur < k) {
        fast = fast.next
        cur++
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}

/**
 * 对于这个题目，我们可以使用快慢指针来解决，初始化slow和fast两个指针，开始时两个指针都在链表的头部。
首先让快指针fast先走，向后走k个节点，这样快指针和慢指针之间就相差k个节点。之后，两个指针同时向后移动，知道快指针移动到最后一个节点。这时，由于快慢指针之间相差k个节点，所以此时慢指针所指向的节点就是倒数第k个节点。


 */