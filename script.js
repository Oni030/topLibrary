// Arrays
const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: "295",
        read: false
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        pages: "325",
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
    const pagesInput = document.getElementById("pages");
    const readInput = document.getElementById("read");

    // Other html elements
    const form = document.querySelector("form[method='dialog']")
    const libraryDisplay = document.querySelector(".library-display");

    // Function executions
    displayLibrary(myLibrary, libraryDisplay, newBtn);

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
        const newPages = pagesInput.value;
        const newRead = checkbox(readInput);

        if (form.checkValidity()) {
            addToLibrary(newTitle, newAuthor, newPages, newRead);
            clear(libraryDisplay, titleInput, authorInput, pagesInput, readInput);
            displayLibrary(myLibrary, libraryDisplay, newBtn);
            modal.close();
        } else {
            form.reportValidity();
        };
        console.log(myLibrary);
    });

    libraryDisplay.addEventListener('click', (event) => { 
        const target = event.target;
        if (target.classList.contains("remove-btn")) {
            remove(target);
        } else if (target.classList.contains("readStatus")) {
            updateRead(target);
        };
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

function displayLibrary(libraryArray, libraryDisplay, newBtn) {
    for (let i = 0; i < libraryArray.length; i++) {
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.setAttribute('data-index', i);
        const bookInfo = document.createElement("div");
        bookInfo.classList.add("bookInfo");
        newCard.appendChild(bookInfo);
        const cardFunctions = document.createElement("div");
        cardFunctions.classList.add("cardFunctions");
        newCard.appendChild(cardFunctions);
        libraryDisplay.insertBefore(newCard, newBtn);
        for (let key in libraryArray[i]) {
            if (key === "title") {
                const newTitle = document.createElement("div");
                newTitle.classList.add("title");
                newTitle.textContent = "'" + libraryArray[i][key] + "'";
                bookInfo.appendChild(newTitle);
            } else if (key === "author") {
                const newAuthor = document.createElement("div");
                newAuthor.classList.add("author");
                newAuthor.textContent = libraryArray[i][key];
                bookInfo.appendChild(newAuthor);
            } else if (key === "pages") {
                const newPages = document.createElement("div");
                newPages.classList.add("pages");
                newPages.textContent = libraryArray[i][key] + " pages";
                bookInfo.appendChild(newPages);
            } else if (key === "read") {
                const newRead = document.createElement("label");
                newRead.classList.add("read");
                newRead.textContent = "Read status: ";
                const newCheck = document.createElement("input");
                newCheck.classList.add("readStatus");
                newCheck.setAttribute("type", "checkbox");
                newCheck.checked = libraryArray[i][key];
                newRead.appendChild(newCheck);
                cardFunctions.appendChild(newRead); 
            };
        };
        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-btn");
        removeButton.setAttribute("type", "button");
        removeButton.textContent = "Remove"
        cardFunctions.appendChild(removeButton);
    };
};

function clear(libraryDisplay, titleInput, authorInput, pagesInput, readInput) {
    const cards = libraryDisplay.querySelectorAll('[data-index]');
    cards.forEach(card => libraryDisplay.removeChild(card));

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
};

function remove(target) {
    const parent = target.parentElement;
    const dataValue = parent.dataset.index;
    parent.remove();
    myLibrary.splice(dataValue, 1);
    const remainingCards = document.querySelectorAll('[data-index]');
    remainingCards.forEach((card, index) => {
        card.setAttribute('data-index', index);
    });
    console.log(myLibrary);
};

function updateRead(target) {
    const card = target.closest("[data-index]");
    const dataValue = card.dataset.index;
    if(target.checked) {
        myLibrary[dataValue]["read"] = true;
    } else {
        myLibrary[dataValue]["read"] = false;
    };
    console.log(myLibrary);
};

function checkbox(readInput) {
    if (readInput.checked) {
        return true;
    } else {
        return false;
    };
};