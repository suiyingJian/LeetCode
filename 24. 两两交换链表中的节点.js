
//递归实现
// var swapPairs = function (head) {
//     if (!head  || ! head.next ) {
//         return head
//     }
//     const newHead = head.next //获取第二个节点
//     head.next = swapPairs(newHead.next) // 将其余节点进行递归交换 
//     newHead.next = head //完成节点的交换
//     return newHead
// }


//迭代

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
var swapPairs = function(head) {
    if(!head || !head.next) {
        return head
    }

    const list = new ListNode(0) 
    list.next = head

    let temp = list
    while(temp.next && temp.next.next) {
        const node1 = temp.next
        const node2 = temp.next.next
        // node1 和 node2 进行交换
        temp.next = node2
        node1.next = node2.next
        node2.next = node1
        // 更新temp节点
        temp = node1
    }
    return list.next
};