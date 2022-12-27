const main = document.querySelector('.main');
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
    e.preventDefault(); //avoid the datas to be send to a non-existant server
    books.push(new Book(titleValue.value, authorValue.value, pagesValue.value, yearValue.value));
    displayBook(titleValue.value, authorValue.value, pagesValue.value, yearValue.value);
    for (let i = 0; i < values.length; i++) {
        values[i].value = "";   //reinitiate the values on the form
    }
}

function displayBook(title, author, pages, year)   {
    //create all the divs necessary for the card
    let card = document.createElement('div');
    card.className = "card";
    let closeButton = document.createElement('button');
    closeButton.className = "closeIcon";
    let iconClose = document.createElement('img');
    iconClose.setAttribute("src", "./images/close-svgrepo-com.svg");
    closeButton.appendChild(iconClose);
    let titleDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let pagesDiv = document.createElement('div');
    let yearDiv = document.createElement('div');

    //add the content from the form to the divs
    titleDiv.textContent = "Title : " + title;
    authorDiv.textContent = "Author : " + author;
    pagesDiv.textContent = "Pages : " + pages;
    yearDiv.textContent = "Year : " + year;

    //add the divs to the card, and finally the card to the main
    card.append(closeButton ,titleDiv, authorDiv, pagesDiv, yearDiv);
    main.appendChild(card);

    iconClose.addEventListener('click', removeCard);
}

function removeCard()   {
    this.parentElement.parentElement.remove();
}