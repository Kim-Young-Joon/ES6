
// 함수 선언문
function foo() {}

// 함수 표현식
var bar = function() {};

// 일반 객체 (객체 literal)
// 객체의 property로 함수가 할당
const barx = {
    x: function() {}
}

new foo(); // 내부 메서드로 [[Constructor]] 를 가지고 있음
// 왜? 함수 선언문이니까

new bar(); // 내부 메서드로 [[Constructor]] 를 가지고 있음
// 왜? 함수 표현식이니까

new barx.x(); // 내부 메서드로 [[Constructor]] 를 가지고 있음
// 

// arrow 함수
const arrow = () => {}; 

// new arrow(); // TypeError : arrow is not a constructor
// 왜? arrow 함수 = non-constructor

// ES6 함수 축약형 (method)
const obj = {
    x() {}
}

// new obj.x(); // TypeError: obj.x is not a constructor
// 왜? ES6 함수 축약형 = non-constructor