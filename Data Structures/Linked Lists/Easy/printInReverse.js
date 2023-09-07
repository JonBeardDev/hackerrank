function reversePrint(llist) {
  if (llist) {
    let arr = [];
    let node = llist;

    while (node) {
      arr.push(node.data);
      node = node.next;
    }

    arr.reverse();

    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}
