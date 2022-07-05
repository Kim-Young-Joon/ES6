
var obj = {
    'name': '홍길동',
    'printName': function myPrint() {
        console.log(`내 이름은 ${this.name}입니다.`);
    }
};

console.log(typeof obj); // object

var obj2 = {
    myName: '홍길동'
};

obj2.myAge = 20;
obj2['!myPhone'] = '010-1234-5678';

console.log(obj2);

delete obj2.myAge;

console.log(obj2);
