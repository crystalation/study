// myModule.js 모듈을 불러옴
const myModule = require('./mymodule');

// 모듈에서 노출한 함수 사용
console.log(myModule.greet('Alice')); // 출력: Hello, Alice!
console.log(myModule.greet('Crystal'));

// 모듈에서 노출한 객체 사용
console.log(myModule.person.name); // 출력: John
console.log(myModule.person.age); // 출력: 30
