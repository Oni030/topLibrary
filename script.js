// Arrays
const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 320,
        read: false
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        pages: 311,
        read: true
    }
];

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

// Other html elements
const libTable = document.querySelector(".libTable");

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

function displayLibrary(libraryArray) {
    // Steps to do:
    // 1. Loop through myLibrary to retreave book objects
    for (let i = 0; i < libraryArray.length; i++) {
       // 2. Create a new <tr> inside <tbody> for each object 
        const newTableRow = document.createElement("tr");
        libTable.appendChild(newTableRow);
        // 3. Loop through properties of each object to retrieve values
        for (let j = 0; j < libraryArray[i].length; i++) {
            // 4. Create one <td> for each property value
            const newTableData = document.createElement("td");
            // 5. Set <td>.textContent to property value
            newTableData.textContent = libraryArray[i][j];
        };
    };
};

// Event listeners
newBtn.addEventListener('click', () => {
    modal.showModal();
});

cancelBtn.addEventListener('click', () => {
    modal.close();
});

addBtn.addEventListener('click', () => {})