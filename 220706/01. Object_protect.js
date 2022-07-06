
const person = {
    username: 'Lee'
};

// 객체가 확장이 가능한지 확인
console.log(Object.isExtensible(person));

person.age = 20;
console.log(person); // {username: 'Lee', age: 20}

Object.preventExtensions(person); // 객체의 확장 금지

person.address = '서울'; // 확장되지 않음, 에러가 발생하지는 않음
// 최상단에 'use strict'를 작성하면 오류 발생 (ES6) - 함수마다 적용할 수도 있음
// 유연성 - 정형성
console.log(person); // {username: 'Lee', age: 20}

Object.seal(person); // property 추가, 삭제도 안됨
delete person.username; // 실행되지 않음

Object.freeze(person); // property 값 변경 안됨
person.username = '아이유'; // 실행되지 않음
