'use strict';

function foo() {
    x = 10; // implicit global (묵시적 전역)
    // 전역변수화 (window 객체의 property로 붙음)
}

foo();

console.log(x);

/*
    변수를 선언도 하지 않고 사용했기 때문에 ReferenceError 가 나올 것으로 예상이 된다.
    근데, 문제 없이 됨. 왜 됨?
    -> Javascript Engine 이 자동으로 window 전역 객체의 property로 붙여벌임 (browser 환경)
    
    좋은가? -> ㄴㄴ
        코드의 신뢰도를 떨어뜨리고, 어디에서 문제가 발생하는지 알기 쉽지 않음
    
    언어적인 차원에서 implicit global를 허용하지 않겠다 => strict mode 사용 ('use strict')
        1. strict mode는 일반적으로 전역에 잡지 않는다.
        ** 다른 일반 library가 작동하지 않을 수 있기 때문
        2. 일반적으로 함수에서 사용 (특히 즉시 실행 함수)
*/

