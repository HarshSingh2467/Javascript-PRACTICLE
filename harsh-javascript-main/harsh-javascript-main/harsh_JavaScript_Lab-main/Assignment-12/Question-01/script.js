/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 12
 * Assignment Name: Callbacks and Higher-Order Functions
 * Question: 1
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

function applyTwice(fn, value) {
  return fn(fn(value));
}

const addTen = (n) => n + 10;

console.log(applyTwice(addTen, 5));
