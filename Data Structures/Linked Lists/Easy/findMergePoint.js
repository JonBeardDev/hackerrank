function findMergeNode(headA, headB) {
  while (headA) {
    let node = headB;
    while (node) {
      if (headA === node) return node.data;
      node = node.next;
    }
    headA = headA.next;
  }
}
