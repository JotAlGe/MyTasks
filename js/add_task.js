let but_remember = document.getElementById("but-remember");

/* function validate() */
function validate() {
  let length = document.getElementById("main_text").value.length;
  let div_input = document.getElementById("div_input");

  if (length == 0) {
    div_input.classList.add("error");
    div_input.children[0].classList.add("error_input");
    div_input.children[0].placeholder = "Do not leave the field empty, please!";
  } else {
    div_input.classList.remove("error");
    div_input.firstElementChild.classList.remove("error_input");
    div_input.children[0].placeholder =
      "Write a task or something to remember...";
  }
}

/* *******  function add_element() ******************************* */
function add_element() {
    let input = document.getElementById('main_text')
    let check = document.getElementById('check')
    if(input.value.length !== 0){
        let circle = document.getElementById('circle')
        let fragment = document.createDocumentFragment()
        let div = document.createElement('div')
        let task = document.createElement('p')
        let close_div = document.createElement('a')

        close_div.textContent = 'X'
        close_div.setAttribute('id', 'close_div')
        div.setAttribute('id', 'div_content')

        /* close div */
        close_div.addEventListener('click', () => {
           close_div.parentElement.remove()
        })


        div.appendChild(close_div)
        div.append(task)
        
        fragment.append(div)
        task.textContent = '- ' + input.value
        circle.append(fragment)
        input.value = ''
        
        check.classList.add('check')
        input.classList.add('check_input')
    }else{
        validate()
        check.classList.remove('check')
        input.classList.remove('check_input')
    }   
    
}

/* /* ------------------cerrar div ---------------- *//* 
const div_close = document.getElementById('close_div')
const div_content = document.getElementById('div_content')  */

/* function closeDiv(){

} */


/* div_close.addEventListener('click' , closeDiv) */
but_remember.addEventListener("click", validate);
but_remember.addEventListener("click", add_element);
