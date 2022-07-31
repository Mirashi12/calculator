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


function add (a, b) {
    result = parseInt(a) + parseInt(b);
    console.log(result);
    return result;
}

function substract (a, b) {
    result = parseInt(a) - parseInt(b);
    console.log(result);
    return result;
}

function multiply (a, b) {
    result = parseInt(a) * parseInt(b);
    console.log(result);
    return result;
}

function divide (a, b) {
    result = parseInt(a) / parseInt(b);
    console.log(result);
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
            case 'addition':
                add(numA,numB);
                break;
            case 'substraction':
                substract(numA,numB);
                break;
            case 'multiplication':
                multiply(numA,numB);
                break;
            case 'division':
                divide(numA,numB);
                break;
        }

        if (parseInt(operation[i]) >= 0 && operation.length >= 3) {
            operation = operation.slice(3,);
            console.log(operation);
        } else {
            operation = operation.slice(2,);
            console.log(operation);
        }
    }
}

let calc_buttons = document.querySelectorAll('.btn');


for (let y =0 ; y < calc_buttons.length ; y++) {
    calc_buttons[y].addEventListener('click', (e) => {
        if (parseInt((e.target.id)) < 10) {
            operant = operant + e.target.id;
        } else if (e.target.id == 'equal') {
            operation.push(operant.slice(1,));
            operant = 0;
            console.log(operation);
            operate(operation);
            operation = [];
        } else if (e.target.id == 'btn-ac') {
            operation = [];
            operant = 0;
        } else {
            operation.push(operant.slice(1,));
            operation.push(e.target.id);
            operant = 0;
            console.log(operation);
        }
    });
}