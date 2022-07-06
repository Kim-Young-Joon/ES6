
// callable 이면서 constructor
function add(x, y) {
    return x + y;
}

var inst = new add(); // instance 생성
// 함수에 리턴문이 있지만. 객체가 리턴되지 않으므로 결국 this가 return
console.log(inst); // add {}

function createUser(name, role) {
    return {name, role}; // name, role 이라는 key 를 만들고 이에 대한 값을 매칭시켜 객체로 return
}

inst = new createUser();
console.log(inst); // { name: undefined, role: undefined }

// 생성자 함수
function Circle(radius) {
    this.radius = radius; // new keyword 없이 함수가 호출되면, 여기서 this 는 window를 의미
    this.getDiameter = function() {
        return  2 * this.radius;
    }
}

const circle = Circle(5);
console.log(radius); // 5
console.log(circle); // undefined

/*
    생성자 함수로 사용하려 했지만, 'new' keyword를 실수로 쓰지 않은 상황
    1. 일반 함수로 호출이 됨
    2. 일반 함수의 global 객체는 window
    3. Circle 함수의 내부에서 말하는 this는 window를 의미하게 됨
    4. 함수 내부에서 행해지는 일들은 window 객체에 property 를 추가하는 행위
    5. 따라서 console.log(radius); 는 결국 console.log(window.radius); 와 같은 의미이고
    6. undefined가 아닌 함수 호출시에 저장된 5라는 값이 나오게 된 상황
    
    7. Circle 함수의 자체 return 값은 없으므로 circle 이라는 변수를 출력하게 되면 undefined가 나오게 됨
*/
