let quoteData = [];
const quoteText =  document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author');

const quoteContainer = document.querySelector('.quote-container');
const loader = document.querySelector('.loader');

const newQuoteBtn = document.querySelector('.newQuoteBtn');
const twitterBtn = document.querySelector('.twitter-btn');

//random qote from api
const randomQuote = () =>{
    const quote = quoteData[ Math.floor(Math.random()* quoteData.length )];
    quoteText.textContent = quote.text;
    if(quote.author === null ){
        quoteAuthor.textContent = "Anonymous";
    }else{
        quoteAuthor.textContent = quote.author;
    }

    if(quote.text.length > 50 ){
        quoteAuthor.classList.add('long-quote');
    }else{
        quoteAuthor.classList.remove('long-quote');
    }
    
}

// loading function
const loading = () =>{
    loader.hidden = false;
    quoteContainer.hidden = true;
}
//show fetch data after loading
const showData = () =>{
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//fetch api data 
async function quoteGenerator(){
    loading();
    const apiURL = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiURL);
        quoteData = await response.json();
        randomQuote();
    }catch(error){
        console.log(error);
    }
    showData();
}
quoteGenerator();

//new quote btn
newQuoteBtn.addEventListener('click',randomQuote );
