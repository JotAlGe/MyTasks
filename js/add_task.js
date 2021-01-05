
let but_remember = document.getElementById('but-remember')

/* function add_element(){
    console.log('click')
} */
//but_remember.addEventListener('click', add_element)
function validate(){
    let length = document.getElementById('main_text').value.length
    
    if(length == 0 ){
        let div_input = document.getElementById('div_input');
            let paragraph = document.createElement('p')
            paragraph.textContent = 'Do not leave the field empty, please!'
            div_input.classList.add('error')
            div_input.firstElementChild.classList.add('error_input')
            div_input.insertBefore(paragraph, circle.children[1])
        }else{
            div_input.classList.remove('error')
            div_input.firstElementChild.classList.remove('error_input')
            div_input.children[1].remove()
        }


}
but_remember.addEventListener('click', validate)