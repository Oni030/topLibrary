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

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

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
    const readInput = document.querySelectorAll("input[name='read']");

    // Other html elements
    const libTable = document.querySelector(".libTable");

    // Function executions
    displayLibrary(myLibrary, libTable);

    // Event listeners
    newBtn.addEventListener('click', () => {
        modal.showModal();
    });
    
    cancelBtn.addEventListener('click', () => {
        modal.close();
    });
    
    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const newTitle = titleInput.value;
        const newAuthor = authorInput.value;
        const newPages = nopInput.value;
        const newRead = readInput.value;

        addToLibrary(newTitle, newAuthor, newPages, newRead);
        displayLibrary(myLibrary, libTable);

        modal.close();
    });
});

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

function displayLibrary(libraryArray, tableElement) {
    for (let i = 0; i < libraryArray.length; i++) {
        const newTableRow = document.createElement("tr");
        tableElement.appendChild(newTableRow);
        for (let key in libraryArray[i]) {
            const newTableData = document.createElement("td");
            newTableRow.appendChild(newTableData);
            newTableData.textContent = libraryArray[i][key];
        };
    };
};