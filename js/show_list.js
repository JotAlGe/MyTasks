let but_list = document.getElementById('but-list')
let circle = document.getElementById('circle')
let but_close = document.getElementById('close');

/* mostrar lista */
but_list.addEventListener('click', () => {
    /* console.log('Show List') */
    circle.classList.toggle('show')
})
but_close.addEventListener('click', () => {
    circle.classList.toggle('show')
})