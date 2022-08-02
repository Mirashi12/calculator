let operation = []
let a = 0;
let b = 0;
let operator = '';
let result = 0;
// We can be sure that operation[0] is a number, [1] is an operator, [2] is an other number
// If we basde our operation variable on i = odd is an operator, we can chain multiple operations
// We can probably make the code better by using the redeuce() function, check later

let operant = 0;
let carry = 0;

let display_calculation = document.getElementById('display-calculation');
let display_result = document.getElementById('display-result');

let history_container = document.getElementById('history-ul');


function add (a, b) {
    result = parseInt(a) + parseInt(b);
    display_result.textContent = result;
    return result;
}

function substract (a, b) {
    result = parseInt(a) - parseInt(b);
    display_result.textContent = result;
    return result;
}

function multiply (a, b) {
    result = parseInt(a) * parseInt(b);
    display_result.textContent = result;
    return result;
}

function divide (a, b) {
    result = parseInt(a) / parseInt(b);
    display_result.textContent = result;
    return result;
}

function operate (operation) {
    while (operation.length != 0) {
        let numA = 0;
        let numB = 0;
        let i = 0;
        if (parseInt(operation[i]) >= 0) {
            numA = operation[i];
            operator = operation[i+1];
            numB = operation[i+2];
        } else {
            operator = operation[i];
            numA = result;
            numB = operation[i+1];
        }
        switch(operator) {
            case '+':
                add(numA,numB);
                break;
            case '-':
                substract(numA,numB);
                break;
            case '*':
                multiply(numA,numB);
                break;
            case '/':
                divide(numA,numB);
                break;
        }

        if (parseInt(operation[i]) >= 0 && operation.length > 3) {
            operation = operation.slice(3);
            console.log(operation);
        } else {
            operation = operation.slice(2);
            console.log(operation.join(' '));
        }
    }
    addHistory();
}

let calc_buttons = document.querySelectorAll('.btn');


for (let y =0 ; y < calc_buttons.length ; y++) {
    calc_buttons[y].addEventListener('click', (e) => {
        if (Number.isInteger(parseInt(e.target.id)) == true ) {
            operant = operant + e.target.id;
            display_calculation.textContent = operation.join(' ') + operant.slice(1);
        } else if (e.target.id == '=') {
            operation.push(operant.slice(1));
            operant = 0;
            console.log(operation);
            operate(operation);
            operation = [];
            operation.push(result)
            display_calculation.textContent = '';
        } else if (e.target.id == 'btn-ac') {
            operation = [];
            operant = 0;
            result = 0;
            display_calculation.textContent = '';
            display_result.textContent = '';
        } else {
            if (result > 0 && operation.length == 2) {
                operation.push(operant.slice(1));
                operate(operation);
                operant = 0;
                operation = [];
                operation.push(result);
                operation.push(e.target.id);
                display_calculation.innerText = operation.slice(1).join(' ');
            } else if (result == 0 && operation.length == 0) {
                operation.push(operant.slice(1));
                operation.push(e.target.id);
                operant = 0;
                display_calculation.innerText = operation.join(' ');
            } else if (result == 0 && operation.length == 2) {
                operation.push(operant.slice(1));
                operate(operation);
                operant = 0;
                operation = [];
                operation.push(result);
                operation.push(e.target.id);
                display_calculation.innerText = operation.join(' ');
            } else if (result > 0 && operation.length == 1) {
                operation.push(e.target.id);
                display_calculation.innerText = operation.slice(1).join(' ');
        }
    }});
}

function addHistory() {
    let li_result = document.createElement('li');
    li_result.textContent = operation.join(' ');
        if (history_container.childElementCount > 13) { 
            history_container.lastElementChild.remove()
            history_container.prepend(li_result);
        } else {
            history_container.prepend(li_result);
        }
}