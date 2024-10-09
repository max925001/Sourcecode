// Node structure
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to print the left view of the tree
function leftView(root) {
  if (root === null) return;  // If the tree is empty

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    // Number of nodes at the current level
    let levelSize = queue.length;

    // Traverse all nodes of the current level
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      // Print the first node of this level (i.e., the leftmost node)
      if (i === 0) {
        console.log(node.value);
      }

      // Add the left child to the queue
      if (node.left !== null) {
        queue.push(node.left);
      }

      // Add the right child to the queue
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("Left View of the Tree:");
leftView(root);
