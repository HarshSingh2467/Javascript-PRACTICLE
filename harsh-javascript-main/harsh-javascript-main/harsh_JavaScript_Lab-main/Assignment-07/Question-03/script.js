/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 7
 * Assignment Name: Constructor Functions and Classes
 * Question: 3
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype.result = function () {
  return this.marks >= 40 ? "Pass" : "Fail";
};

const asha = new Student("Asha", 88);
console.log(asha.result());
