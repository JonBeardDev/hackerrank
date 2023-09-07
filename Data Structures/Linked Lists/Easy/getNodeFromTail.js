function getNode(llist, positionFromTail) {
  const arr = [];

  while (llist) {
    arr.push(llist.data);
    llist = llist.next;
  }

  return arr[arr.length - 1 - positionFromTail];
}
