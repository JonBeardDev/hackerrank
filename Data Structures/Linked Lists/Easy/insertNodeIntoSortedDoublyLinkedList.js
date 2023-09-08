function sortedInsert(llist, data) {
  const newNode = new DoublyLinkedListNode(data);

  if (!llist) return newNode;

  if (llist.data > data) {
    newNode.next = llist;
    return newNode;
  }

  let node = llist;

  while (node.next && node.next.data < data) {
    node = node.next;
  }

  newNode.next = node.next;
  newNode.prev = node;
  node.next = newNode;

  return llist;
}
