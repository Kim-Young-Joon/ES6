
// 생성자 함수로 사용할 목적
// 함수 선언문
function Person(name) {
    // 생성자 함수로 만들어질 instance가 가지는 property를 설정
    this.name = name;
}

const person1 = new Person('길동홍');
const person2 = new Person('길동김');


/*
    Javascript Engine이 시작
    1. Built-in 객체 생성
    2. 전역 객체 생성 (환경에 따라 상이, browser는 global 객체로 'window'라는 이름의 객체를 가짐)
    3. Creation phase 시작
        - window 객체에 property로 var keyword로 만든 전역변수, 함수명 (undefined 형태로)
        - 함수 객체가 만들어지면서, 해당 함수에 매칭되는 prototype 객체가 만들어 짐
        (여기서 만들어진 prototype 객체는 함수 객체 내에 있는 property 중 하나인 prototype가 가리키고 있는 객체)

    4. Execution phase 시작
        - let, const keyword로 만든 전역변수
*/

/*
    Prototype chain : property 찾기

    1. 함수 객체가 만들어 짐과 동시에 prototype 객체가 먼저 생성된다.
    2. 이 함수 객체의 prototype이라는 property 가 있는데 이 property가 Prototype 객체를 참조하고 있다.
        (여기서 만들어진 Prototype 객체 하나를, 이후에 만들어지는 instance들이 모두 참조하는 형태가 됨)

    3. 이후 new keyword를 통해 instance를 만든다.
    4. 이 instance 객체에도 '객체' 이기 때문에 [[Prototype]] 이라는 내부 슬롯을 가지게 되고
    5. 이 [[Prototype]] 은 이 instance 객체가 만들어진 함수 객체의 prototype이 가리키는 prototype 객체를 가리키고 있는 상황이다.
*/