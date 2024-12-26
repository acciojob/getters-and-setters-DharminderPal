//complete this code
// class Person {}

// class Student extends Person {}

// class Teacher extends Person {}

// Do not change the code below this line

class Person {
    constructor(name, age) {
        this._name = name;  // Store name in an internal property
        this._age = age;    // Store age in an internal property
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);  // Call the parent constructor
    }

    // Method for studying
    study() {
        console.log(`${this.name} is studying`);  // Access name via `this.name`
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);  // Call the parent constructor
    }

    // Method for teaching
    teach() {
        console.log(`${this.name} is teaching`);  // Access name via `this.name`
    }
}
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
// // Example usage
// const reiv = new Student('Alice', 20);  // Create a Student object
// reiv.study();  // Logs: Alice is studying

// const suko = new Teacher('Bob', 35);  // Create a Teacher object
suko.teach();  // Logs: Bob is teaching