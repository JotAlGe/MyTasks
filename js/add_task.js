
let but_remember = document.getElementById('but-remember')

/* function add_element(){
    console.log('click')
} */
//but_remember.addEventListener('click', add_element)
function validate(){
    let length = document.getElementById('main_text').value.length
    let div_input = document.getElementById('div_input');
    
    if(length == 0 ){
            div_input.classList.add('error')
            div_input.children[0].classList.add('error_input')
            div_input.children[0].placeholder = 'Do not leave the field empty, please!'
        }else{
            div_input.classList.remove('error')
            div_input.firstElementChild.classList.remove('error_input')
            div_input.children[0].placeholder = 'Write a task or something to remember...'
        }


}
but_remember.addEventListener('click', validate)