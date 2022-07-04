
const mySymbol = Symbol(); // Symbol 값을 하나 만들겠다.

console.log(typeof mySymbol); // type 확인 (symbol)
console.log(mySymbol); // Symbol() 로 출력된다.
/*
    Symbol() 을 통해서 Unique 한 값을 만들어 내긴 했는데 그 값을 확인할 수는 없다.
    값이 노출되지 않는다!
    
    Symbol() 내에 들어가는 매개변수는 만들어지는 Symbol의 descript 같은 것이다 (설명)
    Symbol에는 아무런 영향을 주지 않는다.
    따라서 같은 인자를 전달한다고 하더라도 같은 Symbol 값이 되는 것은 아니다

    Symbol 은 값을 알 수 없으므로 casting 할 수 없다.
    하지만 symbol이 있는지에 대한 확인은 가능하다
*/

const mySymbol1 = Symbol('소리없는 아우성');
const mySymbol2 = Symbol('소리없는 아우성');

console.log(mySymbol1 === mySymbol2); // false
console.log(mySymbol1.description); // Symbol의 꼬리표 출력 : 소리없는 아우성

if(mySymbol1) {
    console.log('있어요!');
}

// =========== Symbol.for / Symbol.keyFor ===========

// global symbol registry 라는 곳이 있다.
// 일단 거기에서 해당 인자를 키로 가지고 있는 symbol을 찾는다.
// 만약 존재하지 않으면 Symbol을 만들고 global symbol registry에 등록하고 symbol을 리턴
const s1 = Symbol.for('SymbolKey'); // key 값을 가지고 symbol 찾기

const s2 = Symbol.for('SymbolKey');

console.log(s1 === s2); // true 


console.log(Symbol.keyFor(s2)); // symbol 을 가지고 key 값 찾기