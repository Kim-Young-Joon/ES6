
// 객체 literal을 이용해서 객체를 생성
const person = {
    firstName: '길동',
    lastName: '홍',

    get fullName() {
        return `My name is ${this.lastName}${this.firstName}`;
    },
    set fullName(name) {
        // 유효성 검사
        [this.lastName, this.firstName] = name.split(' ');
    }
}

// 직접적인 접근은 지양
// person.lastName = '김'
// person.firstName = '연아';

// 이러한 방식으로 넘겨주고, 각각의 값에 대한 유효성 검사 실시 가능
person.fullName = '김 연아';

console.log(person.fullName);

/*
    get keyword : property 만들기 (축약 함수 형태)
        get을 이용하면 반드시 return 구문이 존재해야 한다.
        이렇게 만든 함수는 참조방식을 사용하기 때문에 () 를 쓰지 않는다.
    
    set keyword는 return 구문은 존재하지 않는다.
        사용하는 형태에 주의
*/