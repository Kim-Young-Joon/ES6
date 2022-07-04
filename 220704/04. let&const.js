// ES6 : let과 const

let x = 5;

// let x = 3; SyntaxError

// =============================

let score = 100;

{
    let score = 10;
    let myVar = 1;
}

// console.log(myVar); ReferenceError (let 은 block-level scope)