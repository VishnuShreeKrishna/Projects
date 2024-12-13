const popup = document.querySelector('.popup')
const btn = document.querySelector('button')
const closeicon = document.querySelector('.close-icon');


btn.addEventListener('click', () => {
    popup.classList.add('open')
})

closeicon.addEventListener('click', () => {
    popup.classList.remove('open')
})