// 1. string으로의 형변환

console.log(typeof String(333)); // string
console.log(typeof String(NaN)); // string
console.log(typeof (1).toString()); // string

/*
    1은 primitive value 인데, Javascript Engine에 의해
    내부적으로 wrapper 객체를 만든다.

    => 이렇게 객체화 되었고, 따라서 객체가 가지고 있는 프로토타입의
    toString()이 사용가능
*/