class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const abdullah = new Person('Abdullah',21);
console.log(abdullah)

// inheritence class

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age); // Parent class constructor call
        this.studentId = studentId;
    }

    study() {
        console.log(`${this.name} is studying.He is ${this.age} years old.Her student id is ${this.studentId}`);
    }
}

const student1 = new Student('Abdullah',21,602767);
console.log(student1)
student1.study();
