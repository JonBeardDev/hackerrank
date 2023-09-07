function reverse(llist) {
  if (!llist || !llist.next) return llist;

  let node = llist;
  let previous = null;

  while (node) {
    const next = node.next;
    node.next = previous;
    previous = node;
    node = next;
  }
  return previous;
}
