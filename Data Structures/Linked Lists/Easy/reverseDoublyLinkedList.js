function reverse(llist) {
  let pointer = llist;

  while (pointer) {
    let oldNext = pointer.next;
    let oldPrev = pointer.prev;
    pointer.prev = oldNext;
    pointer.next = oldPrev;
    if (!oldNext) {
      break;
    }
    pointer = oldNext;
  }
  return pointer;
}
