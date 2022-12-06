// DOM selectors

// let p1Wins = document.getElementById("p1wins");

// let p2Wins = document.getElementById("p2wins");

// let p1Matches = document.getElementById("p1matches");

// let p2Matches = document.getElementById("p2matches");

// let reset = document.getElementById("reset");

// // const shuffleCards = () => {

// // }

// reset.addEventListener('click', () => {
//     p1Wins.innerText = 0;
//     p2Wins.innerText = 0;
//     p1Matches.innerText = 0;
//     p2Matches.innerText = 0;
//     // shuffleCards();
// })

// if(p1Matches > p2Matches) {
//     p1Wins.innerHTML = 
// }


// const cards = document.querySelectorAll("flip-card");


// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         console.log("you clicked a card");
//     })
// })


// cards.addEventListener('click', () => {
//     console.log("you clicked a card");
// })

// class of gameBoard
// methods of randomization
// 2D array - render to DOM
// map in the class


class gameBoard {
    constructor(cards) {
        this.cardsArray = cards;
        this.p1Matches = document.getElementById('p1matches');
        this.p2Matches = document.getElementById('p2matches');
        this.p1Wins = document.getElementById('p1wins');
        this.p2Wins = document.getElementById('p2wins');
    }
    startGame() {
        this.p1Matches = 0;
        this.p2Matches = 0;
        this.p1Wins = 0;
        this.p2Wins = 0;
        this.matchedCards = [];

    cardMatch() {
        
    }
  
    newGame() {
        this.p1Matches = 0;
        this.p2Matches = 0;
        renderboard();
    }

}



class Players {
    constructor() {

    }
}


const player1 = new Players()

const player2 = new Players()


function ready() {
    let cards = Array.from(document.getElementsByClassName('flip-card'));
    let game = new gameBoard(cards)
    game.startGame();
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        })
    })
}

const squares = document.getElementsByClassName("flip-card");

for(let i=0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        console.log(`Square ${i} got clicked`);
        if(squares[i].innerText === '') {
        squares[i].innerHTML = player;
            checkWinner();
        } if(player1 === 'X') {
            player = 'O'
        } else {
            player2 = 'X'
        }
    })
}

