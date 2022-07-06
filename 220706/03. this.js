
// 생성자 함수의 이름 식별자는 PascalCase
function Person() {
    // this
    // this 라는 keyword는 생성자 함수일 경우도 있고
    // 일반 함수인 경우에도 있다.
    // 생성자 함수에서의 this => 생성자 함수에 의해서 만들어질 instance 를 가리키는 reference
    // 일반 함수에서의 this => window
    //      일반 함수로 판단하게 되면 해당 함수는 global 객체의 property로 추가되어 있기 때문에
    //      이 함수를 가지고 있는 객체는 window
    console.log(this);
}

Person(); // 함수 자체 호출
new Person(); // 생성자 함수 호출

// ------------------------------------------------------------------------------

function Person2(name) {{
    this.name = name;
    this.getName = function() {
        return `내 이름은 ${this.name} 입니다.`;
    }
}}

/*
    생성자 함수에서 또다른 객체를 리턴하게 되면 원하는대로 만들어지지 않고 
    근데, 근데, Primitive value 를 리턴하는 경우에는 그 primitive value는 무시되고, this가 return됨
    따라서 생성자 함수를 만들 때는 return 구문이 없는게 맘편하다~
*/

const person1 = new Person2('아이유');
const person2 = new Person2('홍길동');

console.log(person1.getName());
console.log(person2.getName());