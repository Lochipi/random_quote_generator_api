let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

// random quote function

function randomQuote(){
    // fecting random quotes/data from the api and parsing it into js object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        // output result to the html id's
        quote.innerText = result.content;
        author.innerText = result.author;
    })
}


btn.addEventListener("click", randomQuote);