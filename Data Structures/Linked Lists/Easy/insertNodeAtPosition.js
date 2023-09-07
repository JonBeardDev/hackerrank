function insertNodeAtPosition(llist, data, position) {
  const newNode = new SinglyLinkedListNode(data);

  if (!llist) return newNode;

  if (position === 0) {
    newNode.next = llist;
    return newNode;
  }

  let node = llist;
  let pointer = 1;

  while (pointer < position) {
    node = node.next;
    pointer++;
  }

  newNode.next = node.next;
  node.next = newNode;

  return llist;
}