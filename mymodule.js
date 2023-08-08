// 모듈에서 노출할 기능 정의
function greet(name) {
  return `Hello, ${name} !`;
}

// 모듈에서 노출할 객체 정의
const person = {
  name: 'John',
  age: 30,
};

// 모듈에서 노출할 함수와 객체 설정
exports.greet = greet;
module.exports.person = person;
