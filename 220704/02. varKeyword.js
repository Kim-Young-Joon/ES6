// var keyword는 함수 level scope를 가진다.
var x = 1;

if(true) {
    var x = 100;
}

console.log(x); // 100

for(var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);