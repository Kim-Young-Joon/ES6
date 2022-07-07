// 프로토타입 객체를 변경한다고?

function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    sayHello() {
        console.log('안녕하세요!');
    }
}

// Prototype 객체를 변경할 때는 주의하자! (연결되는 하는 것이 변경될 수 있다.)
// Person의 prototype property에 원래 연결되어 있던 상위 Prototype 객체를 연결하고 있다가
// 위와 같이 prototype에 대한 내용을 변경해주게 되면
// 객체 literal을 통해 생성한 객체로 다시 연결을 하게 됨

const me = new Person('홍길동');
console.log(me.constructor === Person); // true

