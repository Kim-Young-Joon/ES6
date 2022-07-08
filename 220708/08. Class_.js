
class Base {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return '안녕하세요';
    }
}

class Derived extends Base {
    // overriding
    // overriding 되면서 super class에서 shadowing이 일어난다
    sayHello() {
        // return 'Hello';
        return super.sayHello() + ' ' + this.name;
        // super keyword를 통해 super class의 method를 호출한다.
    }
}

const derived = new Derived('홍길동');
console.log(derived.sayHello()); // 안녕하세요 홍길동