let firstNumber = 0
let secondNumber = 0
let action = '+'
let answer = 0

let input = document.getElementById('calc-input')
let calculationSpan = document.getElementById('calculation')

let history = []

function onNumberClick(number) {
    // Jei pirmas simbolis yra 0, ir paspaudžiamas kitas skaičius (1-9), pakeičiame 0 su tuo skaičiumi
    if (input.value.startsWith('0') && number !== '.') {
        input.value = number; // pakeičiam 0 su nauju skaičiumi
        return;
    }

    // Jei kablelis paspaustas, leidžiame įvesti tik vieną kartą
    if (number === '.' && input.value.includes('.')) {
        return; // neleisime įvesti daugiau nei vieno kablelio
    }

    // Paprastai pridedame skaičių
    input.value += number

    // arba kita idėja tai paspaudus tą mygtuką pasižiūrėti kas yra inpute, 
    // ir jei jame nieko nėra o dabar buvo paspausta 0, 
    // tada to 0 nerašyti ir funkciją nutraukti, o jeigu jau yra suvestos info tada ir pridėti
    // tada tikrintum kaip su tuščiom kabutėm, ar inputas == '' && paspaustaDabar == 0
}

// veiksmo funkcija
function onActionClick(clickedAction) {
    // input.value += ' ' + clickedAction + ' '
    // action = clickedAction

    let inputValue = input.value.trim(); // Pašaliname nereikalingus tarpus
    let lastChar = inputValue.slice(-1); // Paskutinis simbolis

    // Sąrašas veiksmų, kuriuos tikriname
    let operators = ['+', '-', 'x', '/'];

    // Jei paskutinis simbolis yra veiksmas, pakeičiame jį nauju
    if (operators.includes(lastChar)) {
        input.value = inputValue.slice(0, -1) + ` ${clickedAction} `;
    } 

    // Jei paskutinis simbolis yra skaičius, leidžiame pridėti veiksmą
    else if (inputValue !== '') {
        input.value += ` ${clickedAction} `;
    }
}

// skaičiavimų funkcija
function onCountClick() {
    let splitted = input.value.split(' ')
    firstNumber = parseFloat(splitted[0])
    action = splitted[1]
    secondNumber = parseFloat(splitted[2])

    // pakviečiame funkciją ir išvedame ats
    calculateAnswer()
    input.value = answer

    calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`

    addToHistory()
}

// atsakymo skaičiavimas
function calculateAnswer() {
    switch (action) {
        case '+': answer = firstNumber + secondNumber; break;
        case '-': answer = firstNumber - secondNumber; break;
        case 'x': answer = firstNumber * secondNumber; break;
        case '/': answer = firstNumber / secondNumber; break;
    }
}

// išvalymo funkcija
function onCleanClick() {
    firstNumber = 0
    secondNumber = 0
    action = '+'
    answer = 0
    input.value = ''
    calculationSpan.innerText = ''
}

// backspace mygtuko funkcija
function onBackspaceClick() {
    // Jei inputas nėra tuščias, pašaliname paskutinį simbolį
    if (input.value.length > 0) {
        input.value = input.value.slice(0, -1);
    }
}

// pridėjimo prie istorijos funkcija
function addToHistory() {
    let historyItem = {
        firstNumber,
        action,
        secondNumber,
        answer
    };
    history.push(historyItem)

    if (history.length > 5) {
        history.shift(); // Pašalina pirmą (seniausią) elementą
    }
}

// istorijos rodymo / nerodymo mygtuko funkcija
document.getElementById('toggle-history').onclick = function() {
    let historyBlock = document.querySelector('.calculator .history .history-items')
    let historyButton = document.getElementById('toggle-history')
    let formatted = history.slice(-5).map(x => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`)

    // let formatted = history.length > 0
    // ? history.map(x => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`)
    // : ['<p>Istorija tuščia.</p>'];
    if (historyBlock.style.display === 'none') {
        historyBlock.style.display = 'block';
        historyButton.innerText = 'Išjungti istoriją'; 
        historyBlock.innerHTML = formatted.join('')
    } else {
        historyBlock.style.display = 'none';
        historyButton.innerText = 'Įjungti istoriją'; 
    }
}

// istorijos išvalymo mygtuko funkcija
document.getElementById('clean-history').onclick = function() {
    history = []
    let historyBlock = document.querySelector('.calculator .history .history-items')
    historyBlock.innerHTML = ''
    document.getElementById('toggle-history').innerText = 'Įjungti istoriją';
}


