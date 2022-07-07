
function foo() {
    const x = 1;
    const y = 2;

    // 외부 함수의 식별자를 참조하고 있지 않으므로 closure가 아니다.
    function bar() {
        const z = 3;
        console.log(z);
        // console.log(x); // 이 문장이 들어가면 closure
    }
    return bar;
}

const bar = foo();
bar();