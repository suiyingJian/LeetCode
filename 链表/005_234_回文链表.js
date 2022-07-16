let pointer
function fn(head) {
    if (!head) return true
    const res = fn(head.next) && (pointer.val === head.val)

    pointer = pointer.next
    return res
}

var isPalindrome = function(head) {
    pointer = head
    return fn(head)
}