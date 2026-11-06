/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 11
 * Assignment Name: Scope and Closures
 * Question: 1
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

let level = "outer";

{
  let level = "inner";
  console.log(level);
}

console.log(level);
