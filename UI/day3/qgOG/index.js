// const quotesArray = [
//   {
//     quote:
//       "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//     person: "Nelson Mandela",
//   },
//   {
//     quote:
//       "Don't judge each day by the harvest you reap but by the seeds that you plant.",
//     person: "Robert Louis Stevenson",
//   },
//   {
//     quote: "Whoever is happy will make others happy too",
//     person: "Anne Frank",
//   },
//   {
//     quote:
//       "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
//     person: "Oprah Winfrey",
//   },
//   {
//     quote: "Life is what happens when you're busy making other plans.",
//     person: "John Lennon",
//   },
//   {
//     quote:
//       "If life were predictable it would cease to be life, and be without flavor.",
//     person: "Eleanor Roosevelt",
//   },
//   {
//     quote:
//       "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
//     person: "Steve Jobs",
//   },
//   {
//     quote: "The way to get started is to quit talking and begin doing",
//     person: "Walt Disney",
//   },
// ];

let quotesArray = [];
let quoteElement = document.getElementById("quote");
let nameElement = document.getElementById("name");
let buttonElement = document.getElementById("genBTN");

async function fetchNewQuotes() {
  const QUOTE_URL = "https://type.fit/api/quotes";
  let response = await fetch(QUOTE_URL);
  let result = await response.json();
  quotesArray = result;
}
function genNewQuote() {
  let randomIndex = parseInt(Math.random() * quotesArray.length);
  return quotesArray[randomIndex];
}

function updateDOM(quote) {
  // quoteElement.innerHTML = quote.quote;
  // nameElement.innerHTML = quote.person;

  quoteElement.innerHTML = quote.text;
  nameElement.innerHTML = quote.author.split(",")[0];
}

async function fetchAndUpdate() {
  await fetchNewQuotes();
  updateDOM(genNewQuote());
}

buttonElement.addEventListener("click", fetchAndUpdate);
fetchAndUpdate();
