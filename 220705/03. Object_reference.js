
let myStr = 'Hello';

// primitive type을 마치 객체(배열)처럼 사용
console.log(myStr[0]); // H
console.log(myStr.length); // 5

myStr[0] = 's'; // 될꺼라고 생각하면 바보다 바보 ㅋㅋ
console.log(myStr); // Hello

let person = {name: 'lee'};
let copy = person; // person이 가지고 있는 값이 복사가 되는 형태
/*
    person은 객체 -> reference (주소를 가리키고 있는 중)
    -> copy도 person과 같은 객체를 가리키는 중

    ** 따라서 둘 중 하나의 식별자를 이용하여 변경한다면, 다른 하나에도 영향을 준다.
*/

person.name = 'sssss'; // person 식별자를 이용해서 업데이트를 했는데
console.log(copy.name); // copy에도 영향을 미친다.