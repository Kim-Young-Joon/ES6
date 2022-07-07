
// 함수 표현식
var foo = function() {};

console.log(foo.__proto__ === Function.prototype); // true

console.log(foo.prototype.__proto__ === Object.prototype); // true

console.log(Object.prototype.__proto__); // null (prototype의 최상위기 때문에 그 위는 없음)

console.log(foo.constructor === Function); // true