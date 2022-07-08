
class Person {
    // constructor (생성자)
    constructor(name) {
        // instance의 초기화
        // instance의 property를 설정
        this.name = name;
    }

    // prototype method
    sayHello() {
        console.log('안녕하세요');
    }

    static sayHi() {
        console.log('static method 입니다.');
    }
}

const me = new Person('홍길동'); // 이렇게 되면서, construct가 호출됨
me.sayHello();
Person.sayHi();

/*
    instance 의 property 는 무조건 constructor 내부에서만 설정 가능
*/