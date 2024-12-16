const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
}


function displayBooks() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; 

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-div');
        bookDiv.innerHTML = `
            <strong>Author:</strong> ${book.author} <br>
            <strong>Title:</strong> ${book.title} <br>
            <strong>Pages:</strong> ${book.pages} <br>
            <strong>Read:</strong> <span class="read-status">${book.read ? "Yes" : "No"}</span> <br>
            <div><button class="readornot">Toggle Read Status</button></div>
            <button class="rmvbook">Remove</button>
        `;

        const readStatusElement = bookDiv.querySelector('.read-status');
        const readStatusButton = bookDiv.querySelector('.readornot');
        readStatusButton.addEventListener('click', () => {
            book.read = !book.read; 
            readStatusElement.textContent = book.read ? "Yes" : "No"; 
        });

       
        const removeButton = bookDiv.querySelector('.rmvbook');
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1); 
            displayBooks(); 
        });

        gridContainer.appendChild(bookDiv);
    });
}




const modal = document.getElementById('bookModal');
const addBtn = document.querySelector('.add-btn');
const closeModal = document.getElementById('closeModal');
const bookForm = document.getElementById('bookForm');


addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


bookForm.addEventListener('submit', (e) => {
    e.preventDefault();  

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    
    addBookToLibrary(author, title, pages, read);

    
    modal.style.display = 'none';

   
    bookForm.reset();

    displayBooks();
});
