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
var reverseList = function(head) {
    let p1 = head 
    let p2 = null
    while (p1) {
        // console.log(p1.val,p2 && p2.val);

        const tmp = p1.next
        p1.next = p2
        p2 = p1
        p1 = tmp

    }
    // console.log(p1 && p1.val, p2 && p2.val);
    return p2
};

var reverseList = function (head) {
    //设置指针指向前前驱结点和当前结点
    let pre = null
    let cur = head
    //遍历链表，直到链表结点为空
    while (cur != null) {
        //记录当前的节点，用于后面的遍历
        let next = cur.next
        //调转链表的指针方向
        cur.next = pre
        //向后移动指针
        pre = cur 
        cur = next
        
    }
    return pre
}

var reverseList = function (head) {
    // 首先判断链表为空或者只有一个节点的情况
    if (!head || !head.next) {
        return head
    }
    // 储存下一个节点，便于后面的递归
    let next = head.next
    // 递归
    let result = reverseList(next)
    // 断开当前节点和它的后驱节点
    head.next = null
    // 把后面的节点作为当前的节点
    next.next = head
    return result
}