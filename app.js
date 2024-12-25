//Array to contain all our books
const myLibrary = [];

//class for Books
class Book {
    constructor (author, title, numberOfPages, read){
        this.author = author;
        this.title = title;
        this.numberOfPages = numberOfPages;
        this.read = read;
    }
};


// add button
const addButton = document.querySelector('.add-btn');

// close button on form
const closeButton =  document.querySelector('.close-btn');


//form selector
const bookForm = document.querySelector(".bookform");



//once add button is clicked form is visable
addButton.addEventListener('click', function() {
    bookForm.style.display = 'block';
});


//close button
closeButton.addEventListener('click', function() {
    bookForm.style.display = 'none';
    document.querySelector('form').reset(); 
});


//add book / form submition button
const formSubmission = document.querySelector(".addBook-btn");

formSubmission.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const numberOfPages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    //creat new book objects
    const newBook = new Book(author, title, numberOfPages, read)
    myLibrary.push(newBook);

    displayBook()

    document.querySelector('form').reset(); //resets the form after the button is clicked
    bookForm.style.display = 'none';
});



// Grid container to add each book onto the screen.
gridContainer = document.querySelector(".grid-container");


function displayBook() {
    // Clear the grid container before rendering (to avoid duplicates)
    gridContainer.innerHTML = '';

    // Loop through the library array
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        // Create a container for each book
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book'); // Add a CSS class for styling

        // Add book details using innerHTML
        bookDiv.innerHTML = `
            <div class="book-author"><strong>Author:</strong> ${book.author}</div>
            <div class="book-title"><strong>Title:</strong> ${book.title}</div>
            <div class="book-pages"><strong>Pages:</strong> ${book.numberOfPages}</div>
            <div class="book-read"><strong>Read:</strong> ${book.read}</div>
            <button class="remove-btn" data-index="${i}">Remove</button>
        `;

        // Append the new book div to the grid container
        gridContainer.appendChild(bookDiv);
    }

    addRemoveListeners();

   
}


// book removal
function addRemoveListeners() {
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => { 
            const index = e.target.dataset.index; // Get the index from the button
            myLibrary.splice(index, 1); // Remove the book from the array
            displayBook(); 
        });
    });
}


