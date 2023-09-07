function printLinkedList(head) {
  let node = head;

  while (node) {
    console.log(node.data);
    node = node.next;
  }
}
