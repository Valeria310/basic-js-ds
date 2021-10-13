const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  node=null

  root() {
    return this.node
  }

  add(data) {
    function addData(node, data) {
      if(!node) {
        return new Node(data)
      }
      if(node.data===data) {
        return node
      }
      if(data<node.data) {
        node.left = addData(node.left, data)
      } else {
        node.right = addData(node.right, data)
      }
      return node
    }
    this.node=addData(this.node, data)
  }

  has(data) {
    function findNode(node, data) {
      if(!node) {
        return false
      }
      if(node.data===data) {
        return true
      }
      if(data<node.data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
    return findNode(this.node, data);
  }

  find(data) {
    function findNode(node, data) {
      if(node===null) {
        return null
      }
      if(node.data===data) {
        return node
      }
      if(data<node.data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
    return findNode(this.node, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if(!node) {
        return null
      }
      if(data<node.data) {
        node.left = removeNode(node.left, data);
        return node
      } else if(data>node.data) {
        node.right = removeNode(node.right, data);
        return node
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node
        }
        if(!node.right) {
          node = node.left;
          return node
        }
        let right = node.right;
        while (right.left) {
          right=right.left
        }

        node.data = right.data;
        node.right = removeNode(node.right, right.data);

        return node;
      }
    }
    return removeNode(this.node, data)
  }

  min() {
    if(!this.node) {
      return null
    }
    function min(node) {
      if(node.left) {
        return min(node.left)
      }
      return node.data
    }
    return min(this.node);
  }

  max() {
    if(!this.node) {
      return null
    }
    function max(node) {
      if(node.right) {
        return max(node.right)
      }
      return node.data
    }
    return max(this.node);
  }

}
