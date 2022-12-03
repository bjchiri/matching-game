// DOM selectors

let p1Wins = document.getElementById("p1wins");

let p2Wins = document.getElementById("p2wins");

let p1Matches = document.getElementById("p1matches");

let p2Matches = document.getElementById("p2matches");

let reset = document.getElementById("reset");

reset.addEventListener('click', () => {
    console.log("you clicked the reset button");
})

const cards = document.getElementsByClassName("flip-card-inner");


cards.forEach(card => {
    card.addEventListener('click', () => {
        
    })
})
cards.addEventListener('click', () => {
    console.log("you clicked a card");
})