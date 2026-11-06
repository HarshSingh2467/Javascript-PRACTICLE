/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 9
 * Assignment Name: DOM, Validation, Storage and Quiz
 * Question: 1
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

const heading = document.getElementById("heading");
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  heading.textContent = "Button clicked";
});
