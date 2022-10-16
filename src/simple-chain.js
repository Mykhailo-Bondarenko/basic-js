const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainLinks: [],
  chainCount: 0,
  getLength() {
    this.chainCount++;
    return this.chainCount;
  },
  addLink(value) {
    this.chainCount++;
    if ([...arguments].length === 0) {
      this.chainLinks.push('( )');
    }
    this.chainLinks.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    this.chainCount++;
    if (typeof position === 'number'
      && position > 0
      && Number.isInteger(position)
      && position <= this.chainLinks.length) {
      this.chainLinks.splice(position - 1, 1);
    } else {
      this.chainLinks = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    if (this.chainLinks.length === 0) {
      return this;
    }
    this.chainLinks = this.chainLinks.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainLinks;
    this.chainLinks = [];
    return result.join('~~');
  }
};
module.exports = {
  chainMaker
};