import Book from "./Book.js"

let myLibrary = [
  {
    "title": "IQ84",
    "author": "Haruki Murakami",
  },
  {
    "title": "Kafka on the Shore",
    "author": "Haruki Murakami",
  },

];

displayBookTable();

const form = document.getElementById('add_book_form');
let table = document.getElementById('booksTable');



form.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
   
    addBookToLibrary(title, author);
    
    updateBookTableView(title, author);
  
});

  

function updateBookTableView(title, author) {
  
  fetch = document.getElementById('fetch');

  var newRow = fetch.insertRow(fetch.length);

  for(var j=0; j<2; j++){
    var cell = newRow.insertCell(j);
    cell.innerHTML = Object.values(myLibrary[myLibrary.length-1])[j];
  }

}


function addBookToLibrary(title, author) {
  // do stuff here
  const book = new Book(title, author)
  myLibrary.push(book);
  // console.log(myLibrary[myLibrary.length - 1]);
  

}

function displayBookTable() {
    
    fetch = document.getElementById('fetch');

    for(var i=0; i <myLibrary.length; i++){

      var newRow = fetch.insertRow(fetch.length);
        
        for(var j=0; j<2; j++){
            var cell = newRow.insertCell(j);
            cell.innerHTML = Object.values(myLibrary[i])[j];
        }
    }

}      
        














