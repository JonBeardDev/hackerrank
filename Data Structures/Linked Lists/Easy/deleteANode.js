function deleteNode(llist, position) {
  if (!llist.next) return null;

  if (position === 0) {
    return llist.next;
  }

  let node = llist;
  let pointer = 1;

  while (pointer < position) {
    node = node.next;
    pointer++;
  }

  node.next = node.next.next;

  return llist;
}
