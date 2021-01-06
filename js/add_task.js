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

function add_element() {
    let input = document.getElementById('main_text')
    let check = document.getElementById('check')
    if(input.value.length !== 0){
        let circle = document.getElementById('circle')
        let fragment = document.createDocumentFragment()
        let div = document.createElement('div')
        let task = document.createElement('p')

        div.append(task)
        fragment.append(div)
        task.textContent = '- ' + input.value
        circle.append(fragment)
        input.value = ''
        check.classList.add('check')
    }else{
        validate()
        check.classList.remove('check')
    }   
    
}
but_remember.addEventListener("click", validate);
but_remember.addEventListener("click", add_element);
