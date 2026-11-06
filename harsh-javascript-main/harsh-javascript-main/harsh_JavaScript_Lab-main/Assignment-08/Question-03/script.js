/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 8
 * Assignment Name: Inheritance, Methods and Composition
 * Question: 3
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

class Engine {
  constructor(power) {
    this.power = power;
  }
}

class Car {
  constructor(power) {
    this.engine = new Engine(power);
  }

  start() {
    return "Car starts with " + this.engine.power + " HP";
  }
}

const car = new Car(150);
console.log(car.start());
