
function foo(param1, ...args) {
    // 첫번째 parameter 로 오는 값은 param1 에 저장하고,
    // 나머지 값들은 args 에 저장하겠다
    // ** 주의 : rest parameter 뒤에는 다른 parameter를 사용할 수 없다.

    console.log(arguments);
    // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

    console.log(args);
    // [ 2, 3, 4, 5 ]
    return args.pop();
}

var result = foo(1,2,3,4,5);
console.log(result); // 5