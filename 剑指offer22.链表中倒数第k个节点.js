var getKthFromEnd = function (head, k) {
    let slow = head , fast = head
    let cur = 0
    while (cur < k) {
        fast = fast.next
        cur ++
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}