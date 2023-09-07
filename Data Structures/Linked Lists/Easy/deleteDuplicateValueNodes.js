function removeDuplicates(llist) {
  let paredList = llist;

  while (paredList.next) {
    paredList.data === paredList.next.data
      ? (paredList.next = paredList.next.next)
      : (paredList = paredList.next);
  }
  return llist;
}
