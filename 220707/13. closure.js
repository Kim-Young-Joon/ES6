
var obj = {} // 전역 코드

function myFunc() {
    console.log('Hello'); // 함수 코드
    
    // nested function, inner function (중첩함수)
    function sayHello() {
        console.log('안녕');
    }
}

myFunc(); // 전역 코드

