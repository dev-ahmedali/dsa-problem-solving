var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let listA = headA;
  let listB = headB;

  while (listA !== listB) {
    if (listA === null) {
      listA = headB;
    } else {
      listA = listA.next;
    }
    if (listB === null) {
      listB = headA;
    } else {
      listB = listB.next;
    }
  }
  return listA;
};
