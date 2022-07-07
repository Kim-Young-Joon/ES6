
const obj = {}; // 객체 literal로 만든 객체

const parent = {x : 1};

obj.__proto__ = parent; // 이게 무슨 의미?
// obj 객체가 상위 객체를 가지고 있었는데, parent를 상속받음 (x 가 생겨벌임)
// 상위 prototype 객체를 바꿔치기 하는 중 (동적으로 상속 받음, 일반적인 객체지향 언어에서는 안됨)

console.log(obj.x); // 1

// obj의 상위 prototype 객체를 알고 싶어 -> obj.__proto__
// 그 상위 prototype 객체가 어떤 생성자 함수에 의해서 생성이 되었는지 알고 싶다 -> obj.__proto__.constructor
// 그 생성자 함수의 이름은 무엇?
console.log(obj.__proto__.constructor.name); // Object