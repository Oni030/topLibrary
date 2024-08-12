// Arrays
const myLibrary = [];

// Buttons
const newBtn = document.querySelector(".new-btn");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");

// Dialog modal
const modal = document.querySelector(".modal");

// Inputs
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const nopInput = document.getElementById("nop");
const readInput = document.getElementById("read");

// Functions
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
};

// Event listeners
newBtn.addEventListener('click', () => {
    modal.showModal();
});

cancelBtn.addEventListener('click', () => {
    modal.close();
});

addBtn.addEventListener('click', () => {})