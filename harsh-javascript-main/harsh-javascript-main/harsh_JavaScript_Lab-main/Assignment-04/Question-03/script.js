/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 4
 * Assignment Name: Writing Functions
 * Question: 3
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

function billWithTax(amount, taxRate = 0.18) {
  return amount + amount * taxRate;
}

console.log(billWithTax(100));
