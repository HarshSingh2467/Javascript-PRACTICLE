/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 9
 * Assignment Name: DOM, Validation, Storage and Quiz
 * Question: 2
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

function validateForm(name) {
  const errors = [];
  if (name === "") {
    errors.push("Name is required");
  }
  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
