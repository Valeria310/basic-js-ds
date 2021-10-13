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
      if(node===null) {
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

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}
