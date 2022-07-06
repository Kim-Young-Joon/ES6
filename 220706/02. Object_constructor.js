
// 객체 literal을 이용한 객체 생성
const person1 = {};
console.dir(person1);

// 생성자 함수를 이용한 객체 생성
// => instance 라고 부름 (객체 literal을 이용하여 생성한 객체는 instance라고 부르지 않음)
const person2 = new Object();
console.dir(person2);

// ------------------------------------------------------------------------------

var tmp = String(true); // built-in constructor

console.log(tmp);

function add() { // 이 함수도 생성자 함수로써 사용 가능하다 (new keyword를 이용)
    console.log('Hello');
}

/*
    생성자 함수를 만든다고 해서 특별한 키워드가 들어가지 않음
    그냥 사용해도 되는데, 일반 함수와 너무 헷갈리기 때문에
    생성자 함수로 사용하고자 하면 첫글자를 대문자로 사용하자 (관용적 표현)
*/

// ------------------------------------------------------------------------------

// 함수 선언문으로 함수 만들기
// 생성자 함수의 이름 식별자는 PascalCase
function Person() {

}

const person3 = Person(); // 함수
console.log(person3); // undefined

const person4 = new Person(); // 생성자 함수 (instance)
console.log(person4); // Person {}

var person5 = {}; // 객체 literal (일반 객체)
console.log(person5); // {}

/*
    생성자 함수 내부에 아무 내용이 없다면
    instance 만드고 this에 바인딩
    리턴 구문이 없어도 this 를 리턴

    ** 생성자 함수는 일반적으로 this를 사용하지 않음
*/