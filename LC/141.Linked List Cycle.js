/**
* 环形链表
 * Definition for singly)-linked list
 * function ListNode(val) {
 *      this.val = val
 *      this.next = null     
 * }
 */
/**
 * 给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
我们只需要对每个遍历过的节点进行标记（因为这里每个节点都是一个对象，所以相当于遍历这个节点时，给他设置一个flag属性，如果在此遍历到的节点存在这个属性说明形成了环），后面如果再遇到它，说明有环，就直接返回true：
 */
/**
 * @param {ListNode} head
 * @return {boolean}
*/
var hasCycle = function (head) {
    while (head) {
        if (head.flag) {
            return true
        } else {
            head.flag = true
            head = head.next
        }
    }
    return false
}



/**
 * 复杂度分析：
 * 
时间复杂度：O(n)，其中n是链表的节点数，最差坏的情况下我们要遍历完整个链表；

空间复杂度：O(n)，其中n是链表的节点数，主要为哈希表的开销，最坏情况下需要将每个节点插入到哈希表中一次。
 */