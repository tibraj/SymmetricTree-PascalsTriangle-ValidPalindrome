//Symmetric Tree

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (val === undefined ? null : left);
    this.right = (val === undefined ? null : right);
}

const isSymmetric = (root) => isSameTree(root, root);
const isSameTree = (p, q) => !p || !q ? p === q : p.val === q.val && isSameTree(p.right, q.left) && isSameTree(p.left, q.right);

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

console.log(pascalTriangle(5));


//Valid Palindrome

function isPalindrome(s) {
    const expression = /[\W_]/g;
    const lowcaseStr = s.toLowerCase().replace(expression, '');
    const reverseStr = lowcaseStr.split('').reverse().join('');
    return lowcaseStr === reverseStr;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));