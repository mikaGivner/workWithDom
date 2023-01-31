// 1. Build your own filter method with the help of prototypes
// 2. Build your own find method with the help of prototypes
// 3. Build your own reduce method with the help of prototypes

Array.prototype.filterMethod = function (num) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (num(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.findMethod = function (num) {
  for (let i = 0; i < this.length; i++) {
    if (num(this[i])) {
      return this[i];
    }
  }
  return undefined;
};
console.log([1, 2, 3, 4, 5].filterMethod((x) => x > 3));
console.log([1, 2, 3, 4, 5].findMethod((x) => x > 3));

Array.prototype.myReduce = function (callback, initial) {
  let accumulator = initial;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

console.log([1, 2, 3, 4, 5].myReduce((a, b) => a + b, 0));
