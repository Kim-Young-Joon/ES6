
// 생성자 함수
// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function() {
//         return 2 * this.radius;
//     }
// }
// console.log(circle1.getDiameter === circle2.getDiameter);
// 다른 instance에서 사용하는 함수가 같은 함수일까? (메모리 상에서 같은 주소?) : false

// 위와 같은 형태로 만들게 되면, 같은 기능을 하는 getDiameter 함수도 instance 마다 생성됨
// 메모리 낭비가 발생함
// 따라서 아래와 같이 한다.

function Circle(radius) {
    this.radius = radius;

    Circle.prototype.getDiameter = function() {
        return 2 * this.radius;
    } // 이렇게 하면 prototype 객체 안에 함수 하나만 생성된다.

    // 공용 변수
    Circle.prototype.name = '홍길동';
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.name, circle2.name);

circle1.name = '아이유';
// circle1 instance 에 name 이라는 property 가 추가되는 거임~

console.log(circle1.name, circle2.name);