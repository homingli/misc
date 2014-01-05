var node = function(num) {
  this.left = null;
  this.right = null;
  this.value = num;
}

var tree = null;

function bst_insert (subtree, num) {
  if (subtree == null) {
    return new node(num);
  } else {
    if (num > subtree.value) {
      subtree.right = bst_insert(subtree.right, num); 
    } else {
      subtree.left = bst_insert(subtree.left, num); 
    }
  }
  return subtree;
};

function print_inorder(subtree) {
  if (subtree != null) {
    print_inorder(subtree.left);
    process.stdout.write(subtree.value+", ");
    print_inorder(subtree.right);
  }
}

function print_preorder(subtree) {
  if (subtree != null) {
    process.stdout.write(subtree.value+", ");
    print_preorder(subtree.left);
    print_preorder(subtree.right);
  }
}

function print_postorder(subtree) {
  if (subtree != null) {
    print_postorder(subtree.left);
    print_postorder(subtree.right);
    process.stdout.write(subtree.value+", ");
  }
}

function search(subtree,num) {
  if (subtree == null) return false;
  if (subtree.value == num) {
    return true;
  } else {
    if (num > subtree.value) {
      return search(subtree.right, num); 
    } else {
      return search(subtree.left, num); 
    }
  }
}

  tree = bst_insert(tree,1);
  tree = bst_insert(tree,4);
  tree = bst_insert(tree,2);
  tree = bst_insert(tree,3);
  tree = bst_insert(tree,7);
  tree = bst_insert(tree,6);
  tree = bst_insert(tree,5);
  tree = bst_insert(tree,8);
  tree = bst_insert(tree,9);

  console.log("\n== in order ==");
  print_inorder(tree);
  console.log("\n== pre order ==");
  print_preorder(tree);
  console.log("\n== post order ==");
  print_postorder(tree);
  console.log("\n======");
 
  console.log(search(tree,100));
  console.log(search(tree,3));
  console.log(search(tree,8));
  console.log(search(tree,50));

