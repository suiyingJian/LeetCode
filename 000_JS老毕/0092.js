/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
   // 定义虚拟头结点
   let dummy = new ListNode()
   dummy.next = head
   // 寻找第m-1节点
   let p = dummy
   for(let i =0; i<m-1; i++){
       p= p.next
   }
   // 定义当前节点和前驱节点，当前节点指向m节点
   let pre = null 
   let cur = p.next
   // 将m到n的节点进行反转
   for(let i = 0; i<= n-m; i++){
       let next = cur.next
       cur.next = pre
       pre = cur
       cur = next
   }
   // 将反转的局部链表和原链表进行拼接
   p.next.next = cur
   p.next = pre
   
   return dummy.next
};