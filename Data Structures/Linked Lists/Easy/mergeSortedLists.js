function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let startData;

  if (head1.data <= head2.data) {
    startData = head1.data;
    head1 = head1.next;
  } else {
    startData = head2.data;
    head2 = head2.next;
  }

  const mergedList = new SinglyLinkedListNode(startData);
  let node = mergedList;

  while (head1 && head2) {
    if (head1.data <= head2.data) {
      node.next = head1;
      head1 = head1.next;
    } else {
      node.next = head2;
      head2 = head2.next;
    }
    node = node.next;
  }
  if (head1) node.next = head1;
  if (head2) node.next = head2;

  return mergedList;
}
