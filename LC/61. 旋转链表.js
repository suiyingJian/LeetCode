
var rotateRight = function (head, k) {
    if (!head || !head.next) {
        return head
    }
    // 找到尾结点，将单链表形成环形链表
    let tail = head
    let length = 1
    while (tail.next) {
        length++
        tail = tail.next
    }
    tail.next = head
    // 尾结点进行移动
    k = k % length
    for (let i = 0; i < length - k; i++){
        tail = tail.next
    }
    // 找到头结点，断开环形链表
    head = tail.next
    tail.next = null
    return head
}