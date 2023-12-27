let Cards_el = document.getElementById("card-el");
let Sum_el = document.getElementById("sum-el");
let start_G = document.getElementById("start-g");
let Game_Status = document.getElementById("Game-Status");
let new_Card = document.getElementById("new-card");

let isAlive;
let cards = [];
let sum = 0;

function updateDOM() {
  Cards_el.innerHTML = "Cards - ";
  cards.forEach((card) => {
    Cards_el.innerHTML += ` ${card} `;
  });
  Sum_el.innerHTML = `Sum : ${sum}`;
  checkGameStatus();
}

function computeSumAndCheckAlive() {
  sum = cards.reduce((currSum, ele) => currSum + ele, 0);
  console.log(sum);
  console.log(cards);
  isAlive = sum > 21 ? false : true;
}
function checkGameStatus() {
  if (sum == 0) {
    Game_Status.innerHTML = "";
    return;
  }
  if (sum == 21) {
    Game_Status.innerHTML = "Congo, you won!!";
    new_Card.disabled = true;
  } else if (isAlive) {
    Game_Status.innerHTML = "You still have a chance, Get a new Card";
  } else {
    Game_Status.innerHTML = "Sorry, you lost start a new game";
  }
}

function getRandom() {
  const x = Math.floor(Math.random() * 13) + 1;
  if (x > 10) {
    return 10;
  } else if (x == 1) {
    return 11;
  } else {
    return x;
  }
}

function startGame() {
  cards = [];
  cards.push(getRandom());
  cards.push(getRandom());
  computeSumAndCheckAlive();
  updateDOM();
}

function getNewCard() {
  if (isAlive) {
    cards.push(getRandom());
    computeSumAndCheckAlive();
    updateDOM();
  }
}

start_G.addEventListener("click", startGame);
new_Card.addEventListener("click", getNewCard);
