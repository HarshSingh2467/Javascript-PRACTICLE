/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 12
 * Assignment Name: Callbacks and Higher-Order Functions
 * Question: 3
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}

repeatAction(3, (round) => console.log("Round " + round));
