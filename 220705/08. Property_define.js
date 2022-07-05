const person = {};

// person.name = '홍길동';
// Object.defineProperty([객체명], [key], {});

Object.defineProperty(person, 'name', {
    value: '홍길동',
    writable: false,
    enumerable: false,
    configurable: true
});

console.log(person);
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

person.name = '아이유';
console.log(person);

console.log(Object.keys(person));

for(let idx in person) {
    console.log(idx); // property key
}

// for(let value of person) {
//     console.log(value); // property value
// }