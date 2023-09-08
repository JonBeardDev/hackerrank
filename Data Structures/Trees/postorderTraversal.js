function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  process.stdout.write(`${root.data} `);
}
