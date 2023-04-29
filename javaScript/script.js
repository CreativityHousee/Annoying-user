const $ = document

const inputs = $.querySelectorAll('.input')
const error = $.querySelectorAll('.error-text')
let isOkFlag = false;

inputs.forEach((element, index) => {
    element.addEventListener('keydown', e => {
        if (e.target.value.length > 7) {
            error[index].innerHTML = "it's ok"
            error[index].style.color = "green"
        } else {
            error[index].innerHTML = "input should have 8 letters"
            error[index].style.color = "red"           
        }

        if (inputs[0].value.length > 6 && inputs[1].value.length > 6) {
            loginButton.className = ""   
            isOkFlag = true;
        }
    })
});

const loginButton = $.getElementById("login")

loginButton.addEventListener('mouseover', e => {
    if (isOkFlag) {
        console.log("true")
    } else {
        if (e.target.classList.contains("left")) {
            e.target.classList.remove("left")
            e.target.classList.add("right")

        } else {
            e.target.classList.remove("right")
            e.target.classList.add("left")
        }
    }
})