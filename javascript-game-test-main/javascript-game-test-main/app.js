document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {    
            name: 'discord',
            img: 'imgages/Discord.jpg'
        },
        {
            name: 'discord',
            img: 'imgages/Discord.jpg'
        },
        {
            name: 'duolingo',
            img: 'imgages/Duolingo.jpg'
        },
        {
            name: 'duolingo',
            img: 'imgages/Duolingo.jpg'
        },
        {
            name: 'growtopia',
            img: 'imgages/growtopia.jpg'
        },
        {
            name: 'growtopia',
            img: 'imgages/growtopia.jpg'
        },
        {
            name: 'jiafei',
            img: 'imgages/Jiafei.jpg'
        },
        {
            name: 'jiafei',
            img: 'imgages/Jiafei.jpg'
        },
        {
            name: 'minecraft',
            img: 'imgages/Minecraft.jpg'
        },
        {
            name: 'minecraft',
            img: 'imgages/Minecraft.jpg'
        },
        {
            name: 'twitch',
            img: 'imgages/Twitch.png'
        },
        {
            name: 'twitch',
            img: 'imgages/Twitch.png'
        }
     ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //The game board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgages/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //Check for card match
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'imgages/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'imgages/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'imgages/white.png')
        cards[optionTwoId].setAttribute('src', 'imgages/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'imgages/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'imgages/blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //card flip mechanic.
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
