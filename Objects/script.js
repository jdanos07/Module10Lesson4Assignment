// Task 1
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2
Book.prototype.display = function() {
    console.log("Title: " + this.title + ", Author: " + this.author + ", Pages: "+ this.pages);
}

// Task 3
let books = []

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    books.push(newBook);
}

function searchTitle(title) {
    return books.filter(book => 
        book.title.toLowerCase().includes(title.toLowerCase())
    );     
}

function searchAuthor(author) {
    return books.filter( book => 
        book.author.toLowerCase().includes(author.toLowerCase())
    );
}

// Task 4
function pageFilter() {
    return books.filter(book => book.pages > 100);
}

function formatBookDetails() {
    return books.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}


// Example Usage
addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBook("To Kill a Mockingbird", "Harper Lee", 281);
addBook("Animal Farm", "George Orwell", 112);
addBook("The Old Man and the Sea", "Ernest Hemingway", 96);

books.forEach(book => book.display());
console.log("Search Result:", searchAuthor("George"));
console.log("Books with more than 100 pages:", pageFilter());
console.log("Formatted Books:", formatBookDetails());