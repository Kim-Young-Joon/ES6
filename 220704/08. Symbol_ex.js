
const Direction = {
    'UP' : Symbol(),
    'DOWN' : Symbol(),
    'LEFT' : Symbol(),
    'Right' : Symbol()
}

let myDirection = Direction.DOWN;

if(myDirection == Direction.DOWN) {
    console.log("Good~");
}

/*
    구분을 지어야 하는데, 그 값의 의미가 중요한 것이 아니라 의미하는 것에 초점을 맞추는 경우
    Symbol을 이용해서 각각이 의미하는 것을 구분 짓는다.

    ** 절대 겹치지 말아야 할 값들을 내가 동적으로 만들어서 사용해야 하는 경우에 Symbol을 이용한다.
*/