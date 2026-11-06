/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 9
 * Assignment Name: DOM, Validation, Storage and Quiz
 * Question: 3
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

const noteBox = document.getElementById("noteBox");
const saveBtn = document.getElementById("saveBtn");

// Show the saved text when the page opens
const saved = localStorage.getItem("note");
if (saved !== null) {
  noteBox.value = saved;
}

saveBtn.addEventListener("click", () => {
  localStorage.setItem("note", noteBox.value);
});
