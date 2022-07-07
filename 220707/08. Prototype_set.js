
function Person(name) {
    this.name = name;
}

const me = new Person('홍길동');
const you = new Person('장길산');

const parent = {
    sayHello() {
        console.log('안녕하세요!');
    }
}

// Prototype 객체 설정
// Object.setPrototypeOf([바꿀 대상], [변경하고자 하는 객체]);
Object.setPrototypeOf(me, parent);
// me의 Prototype 객체를 parent로 변경하겠다.
// 설정한 instance에 대해서만 적용된다. (Person을 이용하여 만든 다른 instance에는 적용되지 않음)

console.log(me.__proto__ === Person.prototype); // false
console.log(you.__proto__ === Person.prototype); // true
