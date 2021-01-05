let but_list = document.getElementById('but-list')
let circle = document.getElementById('circle')
let but_close = document.getElementById('close');

/* show list */
but_list.addEventListener('click', () => {
    /* console.log('Show List') */
    circle.classList.toggle('show')
})
/* hide list */
but_close.addEventListener('click', () => {
    circle.classList.toggle('show')
})