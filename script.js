function Book(title, author, pages, status, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.index = index;
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
};

const o1 = new Book("Lorem and Ipsum", "Nelson", 345, "read");
const o2 = new Book("Something", "Nothing", 636, "not read yet");
const o3 = new Book("dasopdaso", "dsfjisjjkd", 12, "read");

let myLibrary = [];
const container = document.querySelector(".container");
const form = document.querySelector(".form");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookStatus = document.querySelector("#book-status");
const inputs = document.getElementsByTagName("input");
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
  toggleForm();
  addBookToLibrary();
  cleanInputs();
});

document.addEventListener("DOMContentLoaded", () => showInDOM(0));
document.querySelector(".add-button").addEventListener("click", toggleForm);

// const startButton = document.querySelector(".start");
// startButton.addEventListener("click", () => {
//   startButton.remove();
//   showInDOM();
// });

function addBookToLibrary() {
  let status;
  if (bookStatus.checked) {
    status = "read";
  } else {
    status = "not read yet";
  }
  myLibrary[myLibrary.length] = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    status,
    myLibrary.length
  );
  showInDOM(myLibrary.length - 1);
}

function cleanInputs() {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  bookStatus.checked = false;
}

function toggleForm() {
  form.classList.toggle("show-form");
}

function showInDOM(index) {
  for (i = index; i < myLibrary.length; i++) {
    let temp = Object.assign(document.createElement("div"), {
      className: "card",
    });
    const cardLayout = modifyTemplate(myLibrary[i]);
    temp.innerHTML = cardLayout;
    container.appendChild(temp);
  }
}

function modifyTemplate(book) {
  const card = `
  <div class="title-author">
  <div class="title">${book.title}</div>
  <div class="author">${book.author}</div>
  </div>
  <div class="page-status">
  <div class="ps-container1">
    <div class="pages">${book.pages}</div>
    <div class="status">${book.status}</div>
  </div>
  <div class="ps-container2">
    <img src="./icons/delete-forever.svg" alt="" srcset="" />
  </div>
  </div>
  `;
  return card;
}
