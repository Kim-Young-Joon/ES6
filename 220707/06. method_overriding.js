
function Person(name) {
    this.name = name;
    
    // instance method
    // this.getName = function() {

    // }
}

// 이와 같이 만든 함수는 Prototype 객체에 붙게 되므로
// 'Prototype method' 라고 한다
Person.prototype.sayHello = function() {
    console.log(`${this.name}님 안녕하세여`);
}

// instance 생성
const me = new Person('김흥국');
me.sayHello(); // 김흥국님 안녕하세요

// overriding
me.sayHello = function() {
    console.log(`Hello ${this.name}~`);
}

me.sayHello(); // Hello 김흥국~

/*
    overriding의 발생으로 인해 기존에 있는 Prototype method 가 숨겨지게 되는 현상
    => property shadowing 되었다고 한다
*/