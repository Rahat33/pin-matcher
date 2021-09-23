function generatePin() {
    const pin = (Math.round(Math.random() * 10000));
    const pinCheck = pin + '';
    if (pinCheck.length == 4) {
        return pin;
    }
    else {
        return generatePin();
    }
}


function getPin() {
    const pin = generatePin();
    document.getElementById('display-pin').value = pin;
}

function verifyPin() {
    const displayPin = document.getElementById('display-pin').value;
    const inputPin = document.getElementById('typed-numbers').value;
    const successPopUp = document.getElementById('success-popup');
    const errorPopUp = document.getElementById('error-popup');

    if (displayPin == inputPin) {
        successPopUp.style.display = 'block';
        errorPopUp.style.display = 'none';
    }
    else {

        errorPopUp.style.display = 'block';
        successPopUp.style.display = 'none';
    }
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        // else if (number == '<') {
        //     const inputValue = calcInput.value;
        //     const newValue = parseInt(inputValue.toString().slice(0, -1));
        //     return newValue;
        // }
    }
    else {

        const previousCalc = calcInput.value;
        const newCalc = previousCalc + number;
        calcInput.value = newCalc;
    }
})