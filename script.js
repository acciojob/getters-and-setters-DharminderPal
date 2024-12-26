class Person {
  constructor(name, age) {
    this._name = name; // Using a private-like naming convention for properties
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Please provide a valid age.");
    }
  }
}

// Subclass: Student
class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;