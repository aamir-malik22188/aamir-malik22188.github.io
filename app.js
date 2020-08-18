// Projects to list
    // Train Project
    // Node JS project
    // Covid Project
    // XML to Json Converter

const next = document.querySelector("#next");
const previous = document.querySelector("#previous");

function handleScrollNext (direction) {
    const cards = document.querySelector('.con-cards')
    cards.scrollLeft = cards.scrollLeft += window.innerWidth /2 > 600 ? window.innerWidth / 2 : window.innerWidth -100
}

function handleScrollPrevious (direction) {
    const cards = document.querySelector('.con-cards')
    cards.scrollLeft = cards.scrollLeft += window.innerWidth /2 > 600 ? window.innerWidth / 2 : window.innerWidth -100
}

next.addEventListener('click', handleScrollNext);
previous.addEventListener('click', handleScrollPrevious);