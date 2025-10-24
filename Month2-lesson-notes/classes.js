// ES6 Classes: Blueprints for Your Objects ES6 classes are “syntactic sugar” over
// JavaScript’s prototype-based inheritance. They provide a much cleaner syntax for creating
// object blueprints, which is essential for Object-Oriented Programming (OOP) patterns
// used in frameworks like NestJS.


class User {
    constructor(name, age) {
        this.name = name,
        this.age = age
        this.isAge = 23;
    }

    getName() {
        console.log(this.name)
    }

    getAge() {
        console.log(this.age);
        console.log(this.isAge = 45);
    }

    getActualAge() {
        console.log(this.isAge);
    }
}


class Person extends User {
    constructor(name, age, state) {
        super(name, age)
        this.state = state
    }

    getState() {
        console.log(this.state)
    }
}


class Animal {
    speak() {
        console.log("Lion is a danangerous animal")
    }
}

class Dog extends Animal {
    speak() {
        // Animal.prototype.speak.call(this); // 👈 manually call parent method
        super.speak();
        console.log("Dog is a friendly animal")
    }
}


const extension = new Dog()

extension.speak();


const user1 = new User("Divine", 76);
const user2 = new User("Ikechukwu", 85);

const person = new Person("Gideon", 67, "Ebonyi State")


user1.getName();
user2.getAge()
user1.getActualAge()
person.getState()
console.log(person.name)
