const main = document.querySelector('.main');
const submitButton = document.querySelector('button');
const titleValue = document.querySelector('#title');
const authorValue = document.querySelector('#author');
const pagesValue = document.querySelector('#pages');
const yearValue = document.querySelector('#year');
const readValue = document.querySelector("#read");

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
    if (readValue.checked)  {   //uncheck the read button if it was checked
        readValue.checked = false;
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

    let readDiv = document.createElement('div');
    let switchButton = document.createElement('input');
    switchButton.setAttribute("type", "checkbox");
   switchButton.style.width = "24px";
   switchButton.style.height = "24px";
   readDiv.style.display = "flex";
   readDiv.style.alignItems = "center";
   readDiv.style.gap = "20px";
   //add the content from the form to the divs
   titleDiv.textContent = "Title : " + title;
   authorDiv.textContent = "Author : " + author;
   pagesDiv.textContent = "Pages : " + pages;
   yearDiv.textContent = "Year : " + year;
   if (readValue.checked)    {
       readDiv.textContent = "Read";
       readDiv.style.color = "green";
       switchButton.checked = true;
    }
    else    {
        readDiv.textContent = "Not Read";
        readDiv.style.color = "red";
    }

    //add the divs to the card, and finally the card to the main
    readDiv.appendChild(switchButton);
    card.append(closeButton ,titleDiv, authorDiv, pagesDiv, yearDiv, readDiv);
    main.appendChild(card);

    iconClose.addEventListener('click', removeCard);
    switchButton.addEventListener('click', function()   {
        if (switchButton.checked)   {
            readDiv.textContent = "Read";
            readDiv.style.color = "green";
            readDiv.appendChild(switchButton);
        }
        else    {
            readDiv.textContent = "Not Read";
            readDiv.style.color = "red";
            readDiv.appendChild(switchButton);
        }
    });
}

function removeCard()   {   //delete the card 
    this.parentElement.parentElement.remove();
}