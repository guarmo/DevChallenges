// UI vars
const author = document.querySelector(".author");
const genre = document.querySelector(".genre");
const quoteBtn = document.querySelector("#quote-btn");
const footer = document.querySelector("#footer");
const main = document.querySelector("#main");

// Event listeners
window.addEventListener("load", getData);
quoteBtn.addEventListener("click", getData);
footer.addEventListener("click", getAuthorData);

// Fetch random quote
function getData() {
  fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
    .then((res) => res.json())
    .then((data) => setData(data.quote));
}
// Fetch author Quote
function getAuthorData() {
  fetch(
    `https://quote-garden.herokuapp.com/api/v2/authors/${author.textContent}?page=1&limit=3`
  )
    .then((res) => res.json())
    .then((data) => setAuthorData(data.quotes));
}

// Set data
function setData(quote) {
  footer.style.display = "flex";
  genre.textContent = quote.quoteGenre;
  author.textContent = quote.quoteAuthor;
  main.innerHTML = "";
  const quoteContainer = document.createElement("div");
  quoteContainer.classList.add("quote-container");
  quoteContainer.textContent = `${quote.quoteText}`;
  main.appendChild(quoteContainer);
}

// Set authror data
function setAuthorData(quotes) {
  console.log(quotes);
  main.innerHTML = `
    <h6 id="author-title">${quotes[0].quoteAuthor}</h6>
      <div class="quote-container">
      ${quotes[0].quoteText}
      </div>
      <div class="quote-container">
      ${quotes[1].quoteText}
      </div>
      <div class="quote-container">
      ${quotes[2].quoteText}
      </div>
    `;
  footer.style.display = "none";
}
