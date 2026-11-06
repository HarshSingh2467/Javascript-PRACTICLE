/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 6
 * Assignment Name: JSON Text
 * Question: 3
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

const bad = "{name: Rohan}";

try {
  JSON.parse(bad);
} catch (error) {
  console.log("Invalid JSON");
}
