
const Person = '안녕하세요';

{
    console.log(Person); // 안녕하세요
    
    class Person {}
}

/*
    Class도 hoisting이 발생한다. (let, const 와 같은 hoistin)

    ReferenceError: Cannot access 'Person' before initialization
    ** Reference Error 발생
    hoistin이 발생하기 때문에 TDZ(Temporal Dead Zone) 이 생기게 되고, 해당 영역에서 출력하려고 하면
    초기화 되지 않았다는 reference error가 발생하게 된다.
*/