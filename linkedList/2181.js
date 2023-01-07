var mergeNodes = function (head) {
  const pseudo = new ListNode(0);
  let ptr = pseudo;
  let temp = head;
  temp = temp.next;

  let sum = 0;
  while (temp != null) {
    while (temp.val != 0) {
      sum += temp.val;
      temp = temp.next;
    }
    ptr.next = new ListNode(sum);
    ptr = ptr.next;
    temp = temp.next;
    sum = 0;
  }
  return pseudo.next;
};
