/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 8
 * Assignment Name: Inheritance, Methods and Composition
 * Question: 2
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

class Locker {
  constructor(pin) {
    this.pin = pin;
  }

  checkPin(number) {
    return number === this.pin;
  }
}

const locker = new Locker(1234);
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
