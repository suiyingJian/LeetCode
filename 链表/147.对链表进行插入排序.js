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
var insertionSortList = function(head) {
    if(!head){
        return head
    }
    const dummyHead = new ListNode(0)
    dummyHead.next = head

    let last = head, cur = head.next

    while(cur){
        if(last.val <= cur.val){
            last = last.next
        }else{
            let pre = dummyHead
            while(pre.next.val <= cur.val){
                pre = pre.next
            }
            last.next = cur.next
            cur.next = pre.next
            pre.next = cur
        }
        cur = last.next
    }
    return dummyHead.next
};