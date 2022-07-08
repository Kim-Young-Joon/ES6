
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `My name is ${this.lastName}${this.firstName}`;
    }

    set fullName(name) {
        [this.lastName, this.firstName] = name.split(' ');
    }
}

const me = new Person('흥국', '김'); // My name is 김흥국
console.log(me.fullName);

me.fullName = '홍 명보';
console.log(me.fullName); // My name is 홍명보
