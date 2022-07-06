
function foo() {}

foo.myName = '홍길동';
foo.getName = function() {
    console.log(this);
}

foo(); // 함수 호출
new foo(); // 생성자 함수 호출
foo.getName(); // method 호출