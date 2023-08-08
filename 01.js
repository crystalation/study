function outerFunction() {
  let outerVariable = 10;

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

//closure없이 실행시 10이 반환되지 않는 이유
//outerVariable은 innerfunction의 외부 환경에 있는 변수, 클로저의 핵심적인 개념
//즉 outer에서 반환된 inner를 호출하려면 outer()의 결과를 변수에 할당한 후에, 해당 변수를 실행해야한다.
console.log(outerFunction());
// Output: [Function: innerFunction]

//outerfunction()을 호출하여 반환된 결과값 innerFunction 을 closureExample이라는 변수에 할당한다
//변수에 할당한 함수를 나중에 실행하려면 함수 이름 다음에 ()를 붙여서 호출
const closureExample = outerFunction();
closureExample();
// Output: 10
