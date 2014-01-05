var node = {
  value: 0,
  left: null,
  right: null 
}

function findNode_recur (root, value) {
  if (root!=null) {
      if (root.value == value)
      // value found
        console.log('found')
      else if (value > root.value)
      // look right subtree
        findNode(root.right, value)
      else (value < root.value)
      // look left subtree
        findNode(root.left, value)
  }
}

function findNode_iter (root, value) {
  var curr = root;
  while (curr != null) {
      if (root.value == value) {
        // value found
        console.log('found');
        break;
      }
      else if (value > root.value)
      // look right subtree
        curr = curr.right;
      else (value < root.value)
      // look left subtree
        curr = curr.left;
  }
  console.log('not found');
}


console.log('end');
