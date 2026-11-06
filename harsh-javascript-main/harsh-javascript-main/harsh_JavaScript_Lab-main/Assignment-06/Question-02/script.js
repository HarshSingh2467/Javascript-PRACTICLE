/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 6
 * Assignment Name: JSON Text
 * Question: 2
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

const text = '{"city":"Pune","pin":411001}';
const obj = JSON.parse(text);

console.log(obj.city);
