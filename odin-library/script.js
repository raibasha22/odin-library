

let myLibrary = [
  {
    "title": "IQ84",
    "author": "Haruki Murakami",
    "pages": "23",
    "status": "In-progress"
  },
  {
    "title": "Kafka on the Shore",
    "author": "Haruki Murakami",
    "pages": "25",
    "status": "Finished"
  },

];

displayBookTable();

const form = document.getElementById('add_book_form');
let table = document.getElementById('booksTable');



form.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    console.log(document.getElementById('pages').value);
    const pages = document.getElementById('pages').value;
    console.log(displayRadioValue());
    var checked_status = displayRadioValue();

   
    addBookToLibrary(title, author, pages, checked_status);
    
    updateBookTableView(title, author, pages, checked_status);
  
});

function displayRadioValue() {
  var ele = document.getElementsByName('bookStatus');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){
        return ele[i].value;
      }
      }
      
}

function updateBookTableView(title, author, pages, checked_status) {
  
  fetch = document.getElementById('fetch');

  var newRow = fetch.insertRow(fetch.length);

  for(var j=0; j<4; j++){
    var cell = newRow.insertCell(j);
    cell.innerHTML = Object.values(myLibrary[myLibrary.length-1])[j];
  }

}


function addBookToLibrary(title, author, pages, checked_status) {
  // do stuff here
  const book = new Book(title, author, pages, checked_status)
  myLibrary.push(book);
  // console.log(myLibrary[myLibrary.length - 1]);
  

}

function displayBookTable() {
    
    fetch = document.getElementById('fetch');

    for(var i=0; i <myLibrary.length; i++){

      var newRow = fetch.insertRow(fetch.length);
        
        for(var j=0; j<4; j++){
            var cell = newRow.insertCell(j);
            cell.innerHTML = Object.values(myLibrary[i])[j];
        }
    }

}      
        



function Book(title, author, pages, status) {
  // the constructor...
  this.title= title; 
  this.author= author;
  this.pages= pages;
  this.status= status;
}










