// var keyword를 이용하여 변수 선언이 일어난 함수가 있을 경우,
// 해당 함수가 수행되면서 호이스팅이 일어난다.
// 즉, 호이스팅은 프로그램 실행간에 한번만 일어나는 것이 아니다.

var x = 1; // 전역변수

function myFunc() {
    var x = 100; // function-level scope
    console.log(x); // 100
}

console.log(x); // 1

myFunc();