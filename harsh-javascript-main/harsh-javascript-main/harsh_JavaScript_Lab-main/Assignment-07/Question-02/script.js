/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 7
 * Assignment Name: Constructor Functions and Classes
 * Question: 2
 * Student Name: Harsh Narayan Singh
 * Roll Number: BCS2025367
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  summary() {
    return this.title + " has " + this.pages + " pages";
  }
}

const book = new Book("Algorithms", 320);
console.log(book.summary());
