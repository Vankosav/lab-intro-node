class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
   this.items.push(item); 
   this.items.sort((a, b) => a-b ); 
   this.length = this.items.length; 
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[pos];   
  }
  }
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
return this.items[this.items.length - 1]
}
    }
  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
  } else {
 return this.items[0];
  }
  }

  sum() {
    let result = 0;
    if (!this.items.length) {
      return 0;
    }
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i];
    }
    
     
    return result;
  
  }
  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
