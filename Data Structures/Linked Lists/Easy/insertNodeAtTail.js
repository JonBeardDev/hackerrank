function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);

  if (!head) return newNode;

  let node = head;

  while (node.next) {
    node = node.next;
  }
  node.next = newNode;

  return head;
}
