
// MENU

// HEADER

// CARDS

function changeOrderCards() {
    let cards = document.querySelectorAll('.col-lg-3')

    cards[0].outerHTML = cards[3].outerHTML
    cards[1].outerHTML = cards[0].outerHTML
    cards[2].outerHTML = cards[2].outerHTML
    cards[3].outerHTML = cards[1].outerHTML

    let changeColorButton = document.getElementsByClassName('btn btn-primary').item([2])

    changeColorButton.style.backgroundColor = '#28a745'
    changeColorButton.style.borderColor = '#28a745'
}

changeOrderCards()

// LISTA

