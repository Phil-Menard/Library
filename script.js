const submitButton = document.querySelector('button');
const titleValue = document.querySelector('#title');
const authorValue = document.querySelector('#author');
const pagesValue = document.querySelector('#pages');
const yearValue = document.querySelector('#year');

//VARIABLES
const values = [titleValue, authorValue, pagesValue, yearValue];
const books = [];

//EVENT LISTENER
submitButton.addEventListener('click', getValues);

//CONSTRUCTOR
function Book(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
}

//FUNCTIONS
function getValues(e)    {
    books.push(new Book(titleValue.value, authorValue.value, pagesValue.value, yearValue.value));
    for (let i = 0; i < values.length; i++) {
        values[i].value = "";
    }
    e.preventDefault(); //avoid the datas to be send to a non-existant server
    //displayBook(); A CREER
}