function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const add = outer();

add(); // 결과: 1
add(); // 결과: 1 (클로저가 없는 경우, count가 초기화되므로 항상 1이 출력됨)
