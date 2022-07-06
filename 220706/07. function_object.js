
function foo(f) {
    return f();
}

function bar() {
    return 'caller : ' + bar.caller;
}

console.log(bar()); // caller : null
// 

console.log(foo(bar));
/*
    caller : function foo(f) {
        return f();
    }
*/