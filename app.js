//Symmetric Tree

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (val === undefined ? null : left);
    this.right = (val === undefined ? null : right);
}

const isSymmetric = (root) => isSameTree(root, root);
cons isSameTree = (p, q) => !p || !q ? p === q : p.val === q.val && isSameTree(p.right, q.left) && isSameTree(p.left, q.right);

//Pascal's Triangle




//Valid Palindrome