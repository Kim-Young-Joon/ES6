
// super class
class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }
    eat() {
        return '밥 먹는중~';
    }
    move() {
        return '움직이는중~'
    }
}

// sub class
class Bird extends Animal {
    constructor(age, weight, kk) { // rest parameter 활용
        // 상위 class의 constructor를 호출
        super(age, weight);
        this.kk = kk; // super class의 constructor를 호출하는 곳 이전에 나오게 되면 오류 발생
        // 객체의 생성이 아직 일어나지 않았기 때문에 super(); 실행 이후에 객체가 생성된 상태에서
        // sub class 의 property를 추가해야 한다.
    }

    fly() {
        return '나는중~';
    }
}

const bird = new Bird(10, 30, 100);
console.log(bird);
// A instanceof B : A가 B의 instance인가?
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true