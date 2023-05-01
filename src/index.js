import './style/style.css';
import './app';

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

const getQuote = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
