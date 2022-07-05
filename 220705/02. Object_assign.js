
var obj = {
    10: 100,
    // 'let': '사용할 수 있지만 권장되지 않음'
    myName: '홍길동',
    '!myName': '김길동',
    myName: '김연아'
};

console.log(obj);

console.log(obj.myAddress); // undefined

// ------------------------------------------


let x = 1;
let y = 2;

const newobj = {x, y};

console.log(newobj);

// let myObj = {
//     name: '홍길동',
//     printName: function() {
//         console.log(this.name);
//     }
// };

let myObj = {
    name: '홍길동',
    // Javascript에서 말하는 method (굉장히 좁은 의미로 사용된다.)
    printName() {
        console.log(this.name);
    }
}

myObj.printName();