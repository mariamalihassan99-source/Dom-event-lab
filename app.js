
/*------------------------ Cached Element References ------------------------*/

const equalsElement = document.querySelector('.equals')
const operatorElement = document.querySelectorAll('.operator')
const numberElement = document.querySelectorAll('.number')

console.log(numberElement)
console.log(equalsElement)
console.log(operatorElement)


/*-------------------------------- Variables --------------------------------*/

let number1 = ''
let number2 = ''
let operator = null

/*-------------------------------- Functions --------------------------------*/

function handleClickNumber(event) {
    console.log(event.target.textContent)

    if (!operator) {
        number1 += event.target.textContent
    } else {
        number2 += event.target.textContent
    }

    console.log(`number1: ${number1}`)
    console.log(`number2: ${number2}`)
    console.log(`operator: ${operator}`)
}

function handleClickOperator(event) {
    operator = event.target.textContent

    console.log(`Operator selected: ${operator}`)
}

function handleClickEquals() {
    let result

    if (operator === '+') {
        result = Number(number1) + Number(number2)
    } else if (operator === '-') {
        result = Number(number1) - Number(number2)
    } else if (operator === '*') {
        result = Number(number1) * Number(number2)
    } else if (operator === '/') {
        result = Number(number1) / Number(number2)
    }

    console.log(`Result: ${result}`)
}


function handleClickClear() {
    number1 = ''
    number2 = ''
    operator = null

    console.log('Calculator cleared')
}

/*----------------------------- Event Listeners -----------------------------*/

equalsElement.addEventListener('click', handleClickEquals)

const clearElement = document.querySelector('.clear')

clearElement.addEventListener('click', handleClickClear)


for (let oneNumElement of numberElement) {
    oneNumElement.addEventListener('click', handleClickNumber)
}

for (let oneOperatorElement of operatorElement) {
    oneOperatorElement.addEventListener('click', handleClickOperator)
}