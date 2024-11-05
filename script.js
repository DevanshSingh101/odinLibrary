//selectors

const addButton = document.querySelector('#addButton');
const allBooks = document.querySelectorAll('.books');
const delBook = document.querySelector('#delBook');
const openPop = document.querySelector('#openPop.button-30');
const closePop = document.querySelector('.close');
const popUp = document.querySelector('.popContainer');


//Pop Up
    //open
openPop.onclick = ()=>{
    console.log('C');
    popUp.classList.add('show');
}    
    //close
    closePop.onclick= ()=>{
        popUp.classList.remove('show');
    }


//create array of book objects with names 1 and 2
let bookList = [];


//addBooks
















//Book Constructer
function book(title, author, read){
  this.title = title;
  this.author = author;
  this.read = read;
}

    


