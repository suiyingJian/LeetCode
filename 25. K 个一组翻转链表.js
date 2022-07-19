var reverseKGroup = function (head, k) {
    let cur = head
    let count = 0

    while (cur !== null && count !== k) {
        cur = cur.next
        count ++
    }

    if (count == k) {
        cur = reverseKGroup(cur,k)
        // 翻转链表
        while (count !== 0) {
            count--
            let tmp = head.next
            head.next = cur
            cur = head
            head = tmp
        }
        head = cur  
    } 
    return head
}