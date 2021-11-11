// event elements
const form = document.querySelector('form');
const taskList = document.querySelector('#books-list');

// events
form.addEventListener('submit', addBook);
taskList.addEventListener('click', deleteBook);
deleteTasksBtn.addEventListener('click', deleteTasks);

function deleteBook(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you want to delete this task?')){
            event.target.parentElement.remove();
        }
    }
}

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    //create book
    const book = [title, author, isbn]
    // create <tr> element
    const tr = document.createElement('tr');
    for(let 1 =0; 1 < book.lenght;i++){
        let td = document.createElement('td');
        let text = document.createTextNode(book[1]);
    }
    //title
    // create <td> element
    let td = document.createElement('td');
    //create text element
    let text = document.createTextNode(title);
    //add text to <td>
    td.appendChild(td);

    //author
    // create <td> element
    let td = document.createElement('td');
    //create text element
    let text = document.createTextNode(author);
    //add text to <td>
    td.appendChild(td);

    //isbn
    // create <td> element
    let td = document.createElement('td');
    //create text element
    let text = document.createTextNode(isbn);
    //add text to <td>
    td.appendChild(td);

    //X-link





    //save book
    addBookToLocalStorage(book);
    




    // add css class
    li.className = 'collection-item';
    // create text element
    const text = document.createTextNode(task);
    // add text to <li>
    li.appendChild(text);
    // create <a> element
    const link = document.createElement('a');
    // add css class
    link.className = 'secondary-content';
    // set href atribute to <a>
    link.setAttribute('href', '#');
    // add text content to <a>
    link.appendChild(document.createTextNode('X'));
    // add <a> to <li> Yeeesh
    li.appendChild(link);
    // add li to ul
    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    taskInput.value = "";
    event.preventDefault();
}