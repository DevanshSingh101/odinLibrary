//selectors

const addButton = document.querySelector('#addBook');
const bookContainer = document.querySelector('.bookContainer');
const delBook = document.querySelector('#delBook');
const openPop = document.querySelector('#openPop.button-30');
const closePop = document.querySelector('.close');
const popUp = document.querySelector('.popContainer');

//create array of book objects with names 1 and 2
let bookList = [];


//Pop Up
popUpFunctionality();


//when addbutton is clicked
//validate form
//show error otherwise
//add the book
addButton.onclick = ()=>{ 
    let selectorList = [document.getElementById('#title'), document.getElementById('author'), document.getElementById('#Read')];
    addBook(selectorList);}





function refreshBooks(){
    let allBooks = document.querySelectorAll('.books');
    //remove all books
    allBooks.forEach((bookx)=>{
        bookx.remove();
    });
    //add from the new list
    bookList.forEach((element)=>{
        let bookDiv = document.createElement('div');
        
        //I hope this creates the book and sets class to it
        bookDiv.setAttribute('class', 'book');
    })


}

function addBook(sList){ //selector list as input
 let bookInst = new book(sList[0].innerHTML, sList[1].innerHTML, sList[2].innerHTML);
 bookList.push(bookInst);
 console.log('subed');
 console.log(bookList);
}



function popUpFunctionality(){
openPop.onclick = ()=>{
    console.log('C');
    popUp.classList.add('show');
}    
    //close
    closePop.onclick= ()=>{
        popUp.classList.remove('show');
    }
}












//Book Constructer
function book(title, author, read){
  this.title = title;
  this.author = author;
  this.read = read;
}

    


