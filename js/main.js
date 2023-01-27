import './scrollTriger.js';
import './time.js'
import './reviews.js'

const inputName = document.querySelector('.input_name');
const inputTel = document.querySelector('.input_tel');
const inputNameHint = document.querySelector('.inputNameHint');
const inputTelHint = document.querySelector('.inputTelHint');

function addClass(input, hint) {
    input.addEventListener('blur', () => {
        hint.classList.add("hidden");
    })
}

function removeClass(input, hint) {
    input.addEventListener('focus', () => {
        hint.classList.remove("hidden");
    })
}

addClass(inputName, inputNameHint)
addClass(inputTel, inputTelHint)
removeClass(inputName, inputNameHint)
removeClass(inputTel, inputTelHint)



