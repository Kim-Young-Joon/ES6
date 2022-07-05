
var x = 100; // global scope (전역 변수)
var y = 200; // global scope (전역 변수)

// outer function
function outer() {
    let x = 0; // function-level scope(지역 변수)
    
    // inner function
    function inner() {
        let x = 10; // function-level scope(지역 변수)
        console.log(y); // 200
    }
}

// 잘 만든 함수가 존재!
// 그런데 이 함수의 기능을 변경(추가)
// 1. 원래 있는 함수를 수정!
// function repeat(n) {
//     for(var i = 0; i < n; i++) {
//         console.log(i);
//     }
// }
// repeat(5);

// 2. 함수를 새로 추가해서 만듦!
function repeat1(n) {
    for(var i = 0; i < n; i++) {
        if(i % 2 == 1) {
            console.log(i);
        }
    }
}

// 3. 함수를 추상화 시켜서 인자로 받아서 사용
function repeat(n, f) {
    for(var i = 0; i < n; i++) {
        f(i);
    }
}

let logAll = function (i) {
    console.log(i);
}

let logOdd = function(i) {
    if(i % 2 == 1) {
        console.log(i);
    }
}

repeat(5, logAll);
repeat(5, logOdd);
// 함수 식별자 뒤에 ()를 넣으면 안된다 => 이것은 함수를 실행하라는 의미이기 때문
// 여기서는 실행해야할 함수를 전달해주는 역할이기 때문에 괄호 쓰지 않음!