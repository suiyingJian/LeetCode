/**
 * 876 链表的中间结点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
    let fast = head, slow = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}