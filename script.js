class Person {
  constructor(name, age) {
    this._name = name; // Private variable for name
    this._age = age;   // Private variable for age
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

// Defining the Student class which extends Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Defining the Teacher class which extends Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;