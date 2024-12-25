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
    
     document.querySelector('form').reset(); //resets the form after the button is clicked
     bookForm.style.display = 'none';
});
