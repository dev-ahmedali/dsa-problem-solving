var removeElements = function(head, val) {
    while(head != null && head.val == val) {
        head = head.next
    }

    if(head == null) {
        return head;
    }

    let temp = head;
    while(temp.next != null) {
        if(temp.next.val == val) {
            temp.next = temp.next.next
        }
        else {
            temp = temp.next;
        }
    }
    return head;
};