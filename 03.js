// 클로저를 활용하여 덧셈, 뺄셈, 곱셈, 나눗셈 함수를 생성하는 함수
function createMathOperations(x) {
  return {
    add: function (y) {
      return x + y;
    },
    subtract: function (y) {
      return x - y;
    },
    multiply: function (y) {
      return x * y;
    },
    divide: function (y) {
      return x / y;
    },
  };
}

// 클로저를 사용하여 10을 기준으로 한 다양한 수학 연산을 수행하는 객체 생성
const mathWithTen = createMathOperations(10);

console.log(mathWithTen.add(5)); // Output: 15
console.log(mathWithTen.subtract(3)); // Output: 7
console.log(mathWithTen.multiply(2)); // Output: 20
console.log(mathWithTen.divide(2)); // Output: 5
