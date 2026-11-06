/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 8
 * Assignment Name: Inheritance, Methods and Composition
 * Question: 1
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi, I am " + this.name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

const anita = new Teacher("Anita", "Maths");
console.log(anita.greet());
