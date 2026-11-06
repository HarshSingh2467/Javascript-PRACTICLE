/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 12
 * Assignment Name: Callbacks and Higher-Order Functions
 * Question: 2
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

function formatMarks(marks, callback) {
  return callback(marks);
}

console.log(formatMarks(76, (m) => "Marks: " + m + "/100"));
