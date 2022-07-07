
var obj = new Object();

var str = 'Hello'; // primitive value
// data type : string

var abb = str.toUpperCase(); // wrapper 객체를 생성하게 되고, 이 line이 끝나게 되면 바로 소멸된다.
var abc = str.toLowerCase(); // wrapper 객체를 생성하게 되고, 이 line이 끝나게 되면 바로 소멸된다.

var strObj = new String('홍길동');
// Primitive type인 string의 유사 배열 객체로 생성됨(wrapper)

'Hello'.toUpperCase();
/*
    원래 이렇게 사용하면 primitive value를 객체처럼 사용해서 오류가 날 법도 하지만,
    Javascript Engine이 이를 보고 wrapper 객체를 만들어서 객체처럼 메서드를 사용한다.
*/

console.log(typeof strObj); // object

console.dir(strObj); // 유사 배열 객체