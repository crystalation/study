// const obj = {
//   a: 27,
// };
// const obj2 = {
//   a: 27,
// };
// console.log(obj === obj2);
// false;

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return console.warn('Warning: Singleton class already instantiated');
    }
    Singleton.instance = this;
    this.version = Date.now();
    this.config = 'test';
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

// const a = new Singleton();
// console.log(a);
// const b = new Singleton();
// console.log(b);

// console.log(a === b); // true
// console.log(a, b);

const a1 = Singleton.getInstance();
const b1 = Singleton.getInstance();
console.log(a1, b1);
console.log(a1 === b1);
