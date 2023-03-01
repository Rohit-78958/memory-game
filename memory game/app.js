document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())
//console.log(cardArray)

const gridDisplay=document.querySelector('.grid')
const result = document.querySelector('#result')
let cardChosen = []
let cardChosenId = []
const cardsWon = []

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        //console.log(card,i)
        gridDisplay.appendChild(card)
    }
}

//createBoard()

function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('you clicked the same image')
    }
    if(cardChosen[0]==cardChosen[1]){    
        alert('you found a match')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("sorry try again")
    }
    result.textContent=cardsWon.length
    cardChosen = []
    cardChosenId= []

    if (cardsWon.length==cardArray.length/2){
        result.innerHTML='congratulations you found them all'
    }
}

function flipCard(){
    let cardId=this.getAttribute('data-id')
    //console.log(cardArray[cardId].name)
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)

    //console.log('clicked',cardId)

    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length===2){
        setTimeout(checkMatch, 500)
    }
}

createBoard()

})