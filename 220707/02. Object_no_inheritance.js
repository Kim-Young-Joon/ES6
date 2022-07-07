
// 객체 생성하는 방법 중 create() 사용
// 객체를 생성할 때, 객체의 상위 prototype 객체를 직접 지정할 수 있다.
const obj = Object.create(null);

console.log(obj.__proto__); // undefined

// 그럼 이런 경우를 위해 어떻게 하면 좋을까?
// Object가 가지고 있는 method를 이용하자 -> getPrototypeOf([원하는 객체명])
// 상위 Prototype 객체에 access 한다는 점에서 __proto__ 와 동일하다.

console.log(Object.getPrototypeOf(obj)); // null