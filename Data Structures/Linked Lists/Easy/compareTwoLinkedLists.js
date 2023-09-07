function CompareLists(llist1, llist2) {
  let node1 = llist1;
  let node2 = llist2;

  while (node1 && node2) {
    if (node1.data !== node2.data) return 0;
    node1 = node1.next;
    node2 = node2.next;
  }

  if (node1 || node2) return 0;

  return 1;
}
