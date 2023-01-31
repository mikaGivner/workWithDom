// You are given a function, Square, that takes four parameters, a,b, c, d, denoting the length of the square edges.Using prototype properties, add a method to Square named isSquare that prints true if a Square object has equal edges and false if they are unequal.

function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  return (
    this.b - this.a === this.d - this.c && this.c - this.a === this.d - this.b
  );
};

square = new Square(1, 2, 2, 3);

console.log(square.isSquare());
