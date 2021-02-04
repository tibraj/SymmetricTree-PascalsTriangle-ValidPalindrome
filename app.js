//Symmetric Tree

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (val === undefined ? null : left);
    this.right = (val === undefined ? null : right);
}

const isSymmetric = (root) => isSameTree(root, root);
cons isSameTree = (p, q) => !p || !q ? p === q : p.val === q.val && isSameTree(p.right, q.left) && isSameTree(p.left, q.right);

//Pascal's Triangle

function pascalTriangle(numRows) {
    if(numRows === 0) return [];
    let arr = [[1]];
    for(let i = 1; i < numRows; i++) {
        arr[i] = [];
        for(let j = 0; j < i + 1; j++) {
            const left = arr[i - 1][j - 1] || 0;
            const right = arr[i - 1][j] || 0;
            arr[i].push(left + right);
        }
    }
    return arr;
}


//Valid Palindrome