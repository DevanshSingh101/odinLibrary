//selectors

const addButton = document.querySelector('#addBook');
const bookContainer = document.querySelector('.bookContainer');
const openPop = document.querySelector('#openPop.button-30');
const closePop = document.querySelector('.close');
const popUp = document.querySelector('.popContainer');
let removeButton = document.querySelectorAll('.delBook');


let bookList = [];

refreshBooks();
popUpFunctionality();


//when addbutton is clicked
//validate form
//show error otherwise
//add the book

addButton.onclick = ()=>{ 
 
    let selectorList = [document.getElementById('title'), document.getElementById('author'), document.getElementById('Read')];
    addBook(selectorList);
    refreshBooks();
    // -----------------------------------------------------------------Problem
    removeButton = document.querySelectorAll('.delBook');
    removeButton.forEach((e)=>{
            
        // console.log(e);
        e.onclick = removeBook(e);
    });
    
    
}

function removeBook(btn){
  console.log('remove')
  btnId = btn.id;
  bookList.splice(btnId, 1);
  refreshBooks();

}

function refreshBooks(){
    
    let allBooks = document.querySelectorAll('.book');
    //remove all books
    allBooks.forEach((bookx)=>{
        bookx.remove();
    });
    //add from the new list
    bookList.forEach((element, i)=>{
        //Creating Book
        //Creating Book Div   
        element.index = i;
        let bookDiv = document.createElement('div');;
        bookDiv.classList.add('book');
        bookContainer.appendChild(bookDiv);

        //add title
        let titleCreate = document.createElement('p');
        bookDiv.appendChild(titleCreate);
        titleCreate.innerHTML = element.title;

        //add author
        let authorCreate = document.createElement('p');
        bookDiv.appendChild(authorCreate);
        authorCreate.innerHTML = element.author;


        //add remove button
        let buttonCreate = document.createElement('button');
        buttonCreate.classList.add('button-30');
        buttonCreate.classList.add('delBook');
        bookDiv.appendChild(buttonCreate);
        buttonCreate.innerHTML = 'Remove';
        buttonCreate.id = i;
    })
    
    //delete functionality



}

function addBook(sList){ //selector list as input
 let bookInst = new book(sList[0].value, sList[1].value, sList[2].checked);
 bookList.push(bookInst);
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