function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
};

const o1 = new Book("Lorem and Ipsum", "Nelson", 345, "read");
const o2 = new Book("Something", "Nothing", 636, "not read yet");
const o3 = new Book("dasopdaso", "dsfjisjjkd", 12, "read");

let myLibrary = [o1, o2, o3];

const container = document.querySelector(".container");

const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  startButton.remove();
  showInDOM();
});

function addBookToLibrary() {}

function showInDOM() {
  for (i = 0; i < myLibrary.length; i++) {
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
