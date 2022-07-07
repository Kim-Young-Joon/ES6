
// static property/method
function Person(name) {
    this.name = name;
    this.callme = function() {
        console.log('안녕하세요.');
    }
}

// Prototype method
Person.prototype.sayHello = function() {
    console.log('하이루방가방가!!');
}

// 객체이기 때문에 객체의 속성으로 붙인다.
// static method
// instanc를 활용하여 사용할 수 없다. (함수 객체를 가지고 사용)
Person.staticMethod = function() {
    console.log('ㅎㅇㅎㅇ!!!');
}
