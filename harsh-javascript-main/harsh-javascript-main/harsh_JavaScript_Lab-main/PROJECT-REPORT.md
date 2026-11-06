# BCS352 Java Script Introduction Lab — Project Report
**Student Name:** Harsh Narayan Singh  
**Roll Number / Student ID:** BCS2025367  
**Course:** B.Tech CSE - 3rd Semester  
**Subject:** Java Script Introduction Lab (BCS352)

## Project overview
This report contains all 15 assignments and 48 questions from the supplied lab PDF. Each question is kept in its own folder with its program file(s), an output capture and a screenshot.

## Assignment 1: Your First JavaScript Script
**Aim:** Run a script in the browser and with Node, and declare values with const and let.

### Question 1
**Problem statement:** Create a page that has a script tag inside the body that prints the text Hello from the script with console.log. Open the page in a browser and check the console (F12).

**Output:**
```text
Hello from the script
```

**Files:** `Assignment-01/Question-01/Main.html`, `Assignment-01/Question-01/OUTPUT.txt`, `Assignment-01/Question-01/screenshot.png`

### Question 2
**Problem statement:** Create a program with a constant schoolName (text Sample College) and a let variable year (number 2026). Print both values, one on each line, and run it with node.

**Output:**
```text
Sample College
2026
```

**Files:** `Assignment-01/Question-02/OUTPUT.txt`, `Assignment-01/Question-02/screenshot.png`, `Assignment-01/Question-02/script.js`

### Question 3
**Problem statement:** Create a program that prints, one on each line, the type of the text hello, the number 7 and the value true, using typeof. Run it with node.

**Output:**
```text
string
number
boolean
```

**Files:** `Assignment-01/Question-03/OUTPUT.txt`, `Assignment-01/Question-03/screenshot.png`, `Assignment-01/Question-03/script.js`

## Assignment 2: Operators, Type Conversion and a Calculator
**Aim:** Use arithmetic operators, convert between text and numbers, and use if and else if to choose an operation.

### Question 1
**Problem statement:** Create a program that uses the values 17 and 5 and prints their sum, their difference, their product and their quotient, one result on each line.

**Output:**
```text
22
12
85
3.4
```

**Files:** `Assignment-02/Question-01/OUTPUT.txt`, `Assignment-02/Question-01/screenshot.png`, `Assignment-02/Question-01/script.js`

### Question 2
**Problem statement:** Create a program that converts the text 12 to a number and adds 5 to it, then prints the result; then converts the number 7 to text, joins it with the text 3, and prints the result.

**Output:**
```text
17
73
```

**Files:** `Assignment-02/Question-02/OUTPUT.txt`, `Assignment-02/Question-02/screenshot.png`, `Assignment-02/Question-02/script.js`

### Question 3
**Problem statement:** Create a program with the numbers 8 and 4 and the operator +. Use if and else if to print the sum for + or the difference for -, then change the operator to - and repeat the check.

**Output:**
```text
12
4
```

**Files:** `Assignment-02/Question-03/OUTPUT.txt`, `Assignment-02/Question-03/screenshot.png`, `Assignment-02/Question-03/script.js`

## Assignment 3: Conditions and Loops
**Aim:** Choose between cases with if, else if and else, and repeat work with a for loop and a while loop.

### Question 1
**Problem statement:** Create a program that stores the marks 72 in a variable and prints Grade A when the marks are 75 or more, Grade B when they are 60 or more, and Grade C otherwise.

**Output:**
```text
Grade B
```

**Files:** `Assignment-03/Question-01/OUTPUT.txt`, `Assignment-03/Question-01/screenshot.png`, `Assignment-03/Question-01/script.js`

### Question 2
**Problem statement:** Use a for loop to print the numbers from 1 to 5, one on each line.

**Output:**
```text
1
2
3
4
5
```

**Files:** `Assignment-03/Question-02/OUTPUT.txt`, `Assignment-03/Question-02/screenshot.png`, `Assignment-03/Question-02/script.js`

### Question 3
**Problem statement:** Use a while loop to add 1, then 2, then 3 and so on to a total until the total is more than 20, then print the total.

**Output:**
```text
21
```

**Files:** `Assignment-03/Question-03/OUTPUT.txt`, `Assignment-03/Question-03/screenshot.png`, `Assignment-03/Question-03/script.js`

## Assignment 4: Writing Functions
**Aim:** Write a function with a return value, an arrow function, and a default parameter.

### Question 1
**Problem statement:** Create a program with a function greet that takes a name and returns the text Hello, followed by a comma, a space and the name. Print greet for the name Asha.

**Output:**
```text
Hello, Asha
```

**Files:** `Assignment-04/Question-01/OUTPUT.txt`, `Assignment-04/Question-01/screenshot.png`, `Assignment-04/Question-01/script.js`

### Question 2
**Problem statement:** Create a program with an arrow function square that returns a number multiplied by itself. Print square(6).

**Output:**
```text
36
```

**Files:** `Assignment-04/Question-02/OUTPUT.txt`, `Assignment-04/Question-02/screenshot.png`, `Assignment-04/Question-02/script.js`

### Question 3
**Problem statement:** Create a program with a function billWithTax(amount, taxRate) that returns the amount plus the amount times taxRate, where taxRate is 0.18 when not given. Print billWithTax for 100 with no tax rate given.

**Output:**
```text
118
```

**Files:** `Assignment-04/Question-03/OUTPUT.txt`, `Assignment-04/Question-03/screenshot.png`, `Assignment-04/Question-03/script.js`

## Assignment 5: Arrays, Array Methods and Nested Arrays
**Aim:** Create an array, read its items, use forEach and filter, and read a value from an array inside an array.

### Question 1
**Problem statement:** Create a program that stores the four marks 72, 85, 64 and 90 in an array named marks, then prints the number of items and the first mark.

**Output:**
```text
4
72
```

**Files:** `Assignment-05/Question-01/OUTPUT.txt`, `Assignment-05/Question-01/screenshot.png`, `Assignment-05/Question-01/script.js`

### Question 2
**Problem statement:** Store the three subjects Maths, Science and English in an array, then use forEach to print each subject.

**Output:**
```text
Maths
Science
English
```

**Files:** `Assignment-05/Question-02/OUTPUT.txt`, `Assignment-05/Question-02/screenshot.png`, `Assignment-05/Question-02/script.js`

### Question 3
**Problem statement:** Store the marks 72, 85, 45 and 90 in an array, then use filter to make a new array with only the marks of 60 or more and print the new array.

**Output:**
```text
[ 72, 85, 90 ]
```

**Files:** `Assignment-05/Question-03/OUTPUT.txt`, `Assignment-05/Question-03/screenshot.png`, `Assignment-05/Question-03/script.js`

### Question 4
**Problem statement:** Store the array [1, 2, 3] and the array [4, 5, 6] inside another array named grid, then print the number in row 2 and column 3.

**Output:**
```text
6
```

**Files:** `Assignment-05/Question-04/OUTPUT.txt`, `Assignment-05/Question-04/screenshot.png`, `Assignment-05/Question-04/script.js`

## Assignment 6: JSON Text
**Aim:** Convert an object to JSON text, convert JSON text back to an object, and catch invalid JSON.

### Question 1
**Problem statement:** Create an object with the name Rohan and the marks 70 and 80 in an array, convert it to JSON text with JSON.stringify and print the text.

**Output:**
```text
{"name":"Rohan","marks":[70,80]}
```

**Files:** `Assignment-06/Question-01/OUTPUT.txt`, `Assignment-06/Question-01/screenshot.png`, `Assignment-06/Question-01/script.js`

### Question 2
**Problem statement:** Store the text {"city":"Pune","pin":411001} in a variable, convert it to an object with JSON.parse and print the city.

**Output:**
```text
Pune
```

**Files:** `Assignment-06/Question-02/OUTPUT.txt`, `Assignment-06/Question-02/screenshot.png`, `Assignment-06/Question-02/script.js`

### Question 3
**Problem statement:** Store the text {name: Rohan} in a string variable, use try and catch to call JSON.parse on it, and print Invalid JSON in the catch block.

**Output:**
```text
Invalid JSON
```

**Files:** `Assignment-06/Question-03/OUTPUT.txt`, `Assignment-06/Question-03/screenshot.png`, `Assignment-06/Question-03/script.js`

## Assignment 7: Constructor Functions and Classes
**Aim:** Create objects with a constructor function and with an ES6 class, and add a method through the prototype.

### Question 1
**Problem statement:** Create a program with a constructor function Student that takes a name and marks and saves them on the object. Create a student named Asha with marks 88 and print her name and her marks, one on each line.

**Output:**
```text
Asha
88
```

**Files:** `Assignment-07/Question-01/OUTPUT.txt`, `Assignment-07/Question-01/screenshot.png`, `Assignment-07/Question-01/script.js`

### Question 2
**Problem statement:** Create an ES6 class Book that takes a title and pages, and a summary method that returns the title, has, the page count and pages, with spaces. Create the book Algorithms with 320 pages and print its summary.

**Output:**
```text
Algorithms has 320 pages
```

**Files:** `Assignment-07/Question-02/OUTPUT.txt`, `Assignment-07/Question-02/screenshot.png`, `Assignment-07/Question-02/script.js`

### Question 3
**Problem statement:** Write a constructor function Student that stores a name and marks, add a method result to Student.prototype returning Pass for marks of 40 or more and Fail otherwise, then create a student Asha with marks 88 and print her result.

**Output:**
```text
Pass
```

**Files:** `Assignment-07/Question-03/OUTPUT.txt`, `Assignment-07/Question-03/screenshot.png`, `Assignment-07/Question-03/script.js`

## Assignment 8: Inheritance, Methods and Composition
**Aim:** Use extends to make a child class, write a method that checks a value, and place one object inside another.

### Question 1
**Problem statement:** Create a class Person, whose method greet returns Hi, I am followed by the name, and a class Teacher that extends Person and adds a subject. Create Anita, who teaches Maths, and print her greeting.

**Output:**
```text
Hi, I am Anita
```

**Files:** `Assignment-08/Question-01/OUTPUT.txt`, `Assignment-08/Question-01/screenshot.png`, `Assignment-08/Question-01/script.js`

### Question 2
**Problem statement:** Create a class Locker (pin 1234) and a method checkPin that returns true if its number equals the pin, otherwise false. Create a Locker and print checkPin(1111) and checkPin(1234), one per line.

**Output:**
```text
false
true
```

**Files:** `Assignment-08/Question-02/OUTPUT.txt`, `Assignment-08/Question-02/screenshot.png`, `Assignment-08/Question-02/script.js`

### Question 3
**Problem statement:** Create classes Engine (stores a power) and Car (holds an Engine made from its power, and method start returns Car starts with, the power and HP). Create a Car with power 150 and print start().

**Output:**
```text
Car starts with 150 HP
```

**Files:** `Assignment-08/Question-03/OUTPUT.txt`, `Assignment-08/Question-03/screenshot.png`, `Assignment-08/Question-03/script.js`

## Assignment 9: DOM, Validation, Storage and Quiz
**Aim:** Change a page with a click, check form values in code, save text in local storage, and build a small quiz.

### Question 1
**Problem statement:** Create a page that has a heading with the text Welcome and a button with the text Change text. When the button is clicked, the heading text changes to Button clicked.

**Output:**
```text
Heading before click: Welcome
Heading after click: Button clicked
```

**Files:** `Assignment-09/Question-01/Main.html`, `Assignment-09/Question-01/OUTPUT.txt`, `Assignment-09/Question-01/screenshot-before-click.png`, `Assignment-09/Question-01/screenshot.png`, `Assignment-09/Question-01/script.js`

### Question 2
**Problem statement:** Create a function validateForm(name) that returns a list of errors, and adds Name is required when name is empty. Print validateForm for Asha, then for an empty name.

**Output:**
```text
[]
[ 'Name is required' ]
```

**Files:** `Assignment-09/Question-02/OUTPUT.txt`, `Assignment-09/Question-02/screenshot.png`, `Assignment-09/Question-02/script.js`

### Question 3
**Problem statement:** Create a page that has a text box and a Save button, where clicking Save stores the text in localStorage under the key note. When the page opens, the saved text is shown in the box.

**Output:**
```text
On first open, box value: ''
localStorage note after Save: Submit the lab file on Friday
After reload, box value: 'Submit the lab file on Friday'
```

**Files:** `Assignment-09/Question-03/Main.html`, `Assignment-09/Question-03/OUTPUT.txt`, `Assignment-09/Question-03/screenshot-1-empty-page.png`, `Assignment-09/Question-03/screenshot-2-after-save.png`, `Assignment-09/Question-03/screenshot.png`, `Assignment-09/Question-03/script.js`

### Question 4
**Problem statement:** Create a page that has the question What is 2 + 3?, three radio buttons labelled 4, 5 and 6, and a Check answer button. The page shows Correct when the answer 5 is chosen, and Try again otherwise.

**Output:**
```text
Chosen 5 -> Correct
Chosen 4 -> Try again
```

**Files:** `Assignment-09/Question-04/Main.html`, `Assignment-09/Question-04/OUTPUT.txt`, `Assignment-09/Question-04/screenshot-start.png`, `Assignment-09/Question-04/screenshot-try-again.png`, `Assignment-09/Question-04/screenshot.png`, `Assignment-09/Question-04/script.js`

## Assignment 10: Objects and Destructuring
**Aim:** Create an object, read and change its properties, and take values out of an array and an object with destructuring.

### Question 1
**Problem statement:** Create an object student with the properties name (Rohan), roll (12) and marks (78), print the name, change the marks to 81 and print the marks again.

**Output:**
```text
Rohan
81
```

**Files:** `Assignment-10/Question-01/OUTPUT.txt`, `Assignment-10/Question-01/screenshot.png`, `Assignment-10/Question-01/script.js`

### Question 2
**Problem statement:** Store the subjects Maths, Science and English in an array, use array destructuring to put the first two subjects into the variables first and second, and print each one on its own line.

**Output:**
```text
Maths
Science
```

**Files:** `Assignment-10/Question-02/OUTPUT.txt`, `Assignment-10/Question-02/screenshot.png`, `Assignment-10/Question-02/script.js`

### Question 3
**Problem statement:** Create an object student with the name Rohan, the roll 12 and the marks 81, use object destructuring to take out name and roll, and print each one on its own line.

**Output:**
```text
Rohan
12
```

**Files:** `Assignment-10/Question-03/OUTPUT.txt`, `Assignment-10/Question-03/screenshot.png`, `Assignment-10/Question-03/script.js`

## Assignment 11: Scope and Closures
**Aim:** Explain block scope and global scope, and use a function that returns a function that keeps a value between calls.

### Question 1
**Problem statement:** Create a program that declares a variable level with the value outer, then inside a block declares level with the value inner and prints it, and after the block prints level again.

**Output:**
```text
inner
outer
```

**Files:** `Assignment-11/Question-01/OUTPUT.txt`, `Assignment-11/Question-01/screenshot.png`, `Assignment-11/Question-01/script.js`

### Question 2
**Problem statement:** Create a program with a function makeCounter that sets count to 0 and returns a function that adds 1 to count and returns it. Call the returned function twice and print each result.

**Output:**
```text
1
2
```

**Files:** `Assignment-11/Question-02/OUTPUT.txt`, `Assignment-11/Question-02/screenshot.png`, `Assignment-11/Question-02/script.js`

### Question 3
**Problem statement:** Create a program that declares a variable school with the text Sample College outside any function, and a function showSchool that prints Welcome to followed by the value of school. Call showSchool.

**Output:**
```text
Welcome to Sample College
```

**Files:** `Assignment-11/Question-03/OUTPUT.txt`, `Assignment-11/Question-03/screenshot.png`, `Assignment-11/Question-03/script.js`

## Assignment 12: Callbacks and Higher-Order Functions
**Aim:** Pass a function as an argument to another function and call it.

### Question 1
**Problem statement:** Create a program with applyTwice, which takes a function and a value, calls the function on the value and then on the result, and returns it. Add addTen, which adds 10 to a number, and print applyTwice(addTen, 5).

**Output:**
```text
25
```

**Files:** `Assignment-12/Question-01/OUTPUT.txt`, `Assignment-12/Question-01/screenshot.png`, `Assignment-12/Question-01/script.js`

### Question 2
**Problem statement:** Create a program with a function formatMarks(marks, callback) that returns callback(marks). Print formatMarks with the marks 76 and an arrow function that returns Marks: followed by the marks, then /100.

**Output:**
```text
Marks: 76/100
```

**Files:** `Assignment-12/Question-02/OUTPUT.txt`, `Assignment-12/Question-02/screenshot.png`, `Assignment-12/Question-02/script.js`

### Question 3
**Problem statement:** Create a program with a function repeatAction(times, action) that calls action once for each round from 1 to times, passing the round number. Call repeatAction with 3 and an arrow function that prints Round followed by the round number.

**Output:**
```text
Round 1
Round 2
Round 3
```

**Files:** `Assignment-12/Question-03/OUTPUT.txt`, `Assignment-12/Question-03/screenshot.png`, `Assignment-12/Question-03/script.js`

## Assignment 13: Reduce, Some, Every and Map
**Aim:** Use reduce, some, every and map on arrays, and keep the original array unchanged.

### Question 1
**Problem statement:** Store the prices 120, 45 and 300 in an array, use reduce starting from 0 to find the total, and print the total.

**Output:**
```text
465
```

**Files:** `Assignment-13/Question-01/OUTPUT.txt`, `Assignment-13/Question-01/screenshot.png`, `Assignment-13/Question-01/script.js`

### Question 2
**Problem statement:** Create a program that stores the marks 72, 85, 30 and 90 in an array, uses some to print whether any mark is below 40, and uses every to print whether all marks are 35 or more.

**Output:**
```text
true
false
```

**Files:** `Assignment-13/Question-02/OUTPUT.txt`, `Assignment-13/Question-02/screenshot.png`, `Assignment-13/Question-02/script.js`

### Question 3
**Problem statement:** Store the marks 72, 85, 64 and 90 in an array, use map to make a new array where every mark is 5 more, print the new array, then print the original array.

**Output:**
```text
[ 77, 90, 69, 95 ]
[ 72, 85, 64, 90 ]
```

**Files:** `Assignment-13/Question-03/OUTPUT.txt`, `Assignment-13/Question-03/screenshot.png`, `Assignment-13/Question-03/script.js`

## Assignment 14: Timers and Intervals
**Aim:** Run code after a delay with setTimeout, cancel a timer, and repeat code with setInterval.

### Question 1
**Problem statement:** Create a program that prints Start, schedules the message Timer done with setTimeout and a delay of 0, then prints End. Run it and note the order of the three lines.

**Output:**
```text
Start
End
Timer done
```

**Files:** `Assignment-14/Question-01/OUTPUT.txt`, `Assignment-14/Question-01/screenshot.png`, `Assignment-14/Question-01/script.js`

### Question 2
**Problem statement:** Schedule the message Not shown with setTimeout and a delay of 1000 milliseconds, keep its id in a variable, cancel it with clearTimeout, and print Cancelled.

**Output:**
```text
Cancelled
```

**Files:** `Assignment-14/Question-02/OUTPUT.txt`, `Assignment-14/Question-02/screenshot.png`, `Assignment-14/Question-02/script.js`

### Question 3
**Problem statement:** Use setInterval to print Tick followed by a space and the count every 200 milliseconds, and stop it with clearInterval when the count reaches 3.

**Output:**
```text
Tick 1
Tick 2
Tick 3
```

**Files:** `Assignment-14/Question-03/OUTPUT.txt`, `Assignment-14/Question-03/screenshot.png`, `Assignment-14/Question-03/script.js`

## Assignment 15: Promises and async/await with Local Data
**Aim:** Create a Promise that resolves or rejects, use async/await with try and catch, and load local data as a Promise.

### Question 1
**Problem statement:** Create a function checkMarks that returns a Promise: it resolves with the marks for 0 to 100, otherwise rejects with an Error saying Marks out of range. Call checkMarks with 80 and print the value.

**Output:**
```text
80
```

**Files:** `Assignment-15/Question-01/OUTPUT.txt`, `Assignment-15/Question-01/screenshot.png`, `Assignment-15/Question-01/script.js`

### Question 2
**Problem statement:** Create a function checkMarks(marks) that returns a Promise: it resolves with the marks for 0 to 100, otherwise rejects with an Error saying Marks out of range. Call checkMarks with 120 and print the error message when it is rejected.

**Output:**
```text
Marks out of range
```

**Files:** `Assignment-15/Question-02/OUTPUT.txt`, `Assignment-15/Question-02/screenshot.png`, `Assignment-15/Question-02/script.js`

### Question 3
**Problem statement:** Create checkMarks(marks), a Promise that resolves with marks 0 to 100 or rejects with Error Marks out of range. Create async run() with try printing await checkMarks(65), then await checkMarks(-5) and catch printing Caught: and its message; then call run.

**Output:**
```text
65
Caught: Marks out of range
```

**Files:** `Assignment-15/Question-03/OUTPUT.txt`, `Assignment-15/Question-03/screenshot.png`, `Assignment-15/Question-03/script.js`

### Question 4
**Problem statement:** Create a function getUsers, which returns a Promise that resolves after 100 milliseconds with three local users (id and name: Asha, Rohan, Meera). Write an async function that awaits getUsers and prints each name, then call it.

**Output:**
```text
Asha
Rohan
Meera
```

**Files:** `Assignment-15/Question-04/OUTPUT.txt`, `Assignment-15/Question-04/screenshot.png`, `Assignment-15/Question-04/script.js`
