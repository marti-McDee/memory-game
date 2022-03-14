// index.js

document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cards = [
        {
            name: 'fries',
            img: 'src/images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png',
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png',
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png',
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png',
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png',
        },
        {
            name: 'fries',
            img: 'src/images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png',
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png',
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png',
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png',
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png',
        },
    ]

const shuffledCards = cards.sort(() => 0.5 - Math.random())
console.log(shuffledCards)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard() {
    for(let i = 0; i < shuffledCards.length; i++) {
        const card = document.createElement('img')
        card.classList.add('card')
        card.setAttribute('src', 'src/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId === optionTwoId) {
        alert('you have clicked on the same card!')
        cards[optionOneId].setAttribute('src', 'src/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
    } else if(cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'src/images/white.png')
        cards[optionTwoId].setAttribute('src', 'src/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'src/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        alert('Nope, try again!')
    }

    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cards.length / 2) {
        resultDisplay.textContent = "Congratulations! You're winner!"
    }

    console.log(cardsWon)
    console.log(cardsChosen)
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if(cardsChosen.length === 2) { 
        setTimeout(checkForMatch, 500) 
    }
}


createBoard()


})