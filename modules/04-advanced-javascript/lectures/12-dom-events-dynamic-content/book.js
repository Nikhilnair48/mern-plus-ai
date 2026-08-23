/*
    declare a variable using let, para
    Using document object, we call getElementById
    We pass an argument, reading-status (ID of the paragraph element)
    Note: we don't use # because the method the method is getElementById
*/
// selection
let para = document.getElementById("reading-status");
let orderList = document.querySelector("#reading-list");
let button1 = document.getElementById("add-book");
let button2 = document.querySelector("#remove-book");

function testA() {
    let test = "test A";
    console.log(test);
}

// handler
function handleAddBook() {
    // 1. create the html element; still not added to the HTML
    let li = document.createElement("li");
    
    testA();
    // 2. 
    li.textContent  = "The Design of Everyday Things";
    // 3. add the list item to the document
    orderList.append(li);
    para.textContent = "A book was added";
    para.classList.add("bg-green-500", "text-white");
}

function handleRemoveBook() {
    const latestBook = orderList.querySelector("li:last-child");
    // why the if condition? 
    // querySelector will return null if we couldn't find a list item
    // also the same as: if (latestBook){
    if (latestBook !== null){
      latestBook.remove();
      para.textContent = "Display The latest book was removed.";
      para.classList.add("bg-red-500");
    } else{
        para.textContent = "No books to remove";
    }
}

// event listner
button1.addEventListener("click", handleAddBook);
button2.addEventListener("click", handleRemoveBook);