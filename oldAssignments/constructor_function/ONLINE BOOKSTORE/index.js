// Create constructor functions for Book and Author to represent books and authors.
// The Author constructor should take name, birthYear, and nationality as arguments.
// The Book constructor should take title, author (an Author object), genre, and price as arguments.

function Author(name, birthY, nat) {
  this.name = name;
  this.birthYear = birthY;
  this.nationality = nat;
}
function Book(title, author, genre, price) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
}

// Implement methods in the Book prototype:
// getBookInfo - to print the book's title, author's name, genre, and price.
// Create an online bookstore by creating instances of Book and Author objects.
// Display the book details for each book in the bookstore.

Book.prototype.getBookInfo = function () {
  console.log(`${this.title}, ${this.author.name}, ${this.genre}, ${this.price}`);
};

let p1 = new Author("Vikram Seth", 2001, "india");
let p1book = new Book("A Suitable Boy", p1, "sci-fi", 200);

console.log(p1);
console.log(p1book);
p1book.getBookInfo()