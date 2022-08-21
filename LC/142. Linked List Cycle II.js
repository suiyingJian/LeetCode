/**142 环形链表 II
 * Definition for singly-linked list
 * function ListNode(val) {
 *      this.val = val;
 *      this.next = null;
 * } 
 */
//设置标识法
var deteCycle = function (head) {
    while (head) {
        if (head.flag) {
            return head
        } else {
            head.flag = true
            head = head.next
        }
    }
    return null;
}