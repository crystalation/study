function outerFunction() {
  let outerVariable = 10;

  function innerFunction(callback) {
    setTimeout(function () {
      console.log(outerVariable); // 콜백 함수에서 outerVariable에 접근
      callback();
    }, 1000);
  }

  return innerFunction;
}

const closureExample = outerFunction();

closureExample(function () {
  console.log('Callback function executed!');
});
