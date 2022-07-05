
// 함수 선언문
function foo() {
    console.log('foo 함수');
}

// 함수 표현식
// (function bar() {
//     console.log('bar 함수');
// })
// bar(); 호출 불가

// 함수 표현식
var add = function bar() {
    console.log('bar 함수');
}

foo();

// -----------------------------------

// 함수 선언문
function add() {
    // 함수 내에서만 사용가능한 객체인 arguments가 있다.
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(add(2, 5)); // 7
console.log(add(2));
console.log(add(2, 5, 3)); // 7
// arguments에 [2, 5, 3]
