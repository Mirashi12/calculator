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
    result = a -b;
    console.log(result);
    return result;
}

function multiply (a, b) {
    result = a * b;
    console.log(result);
    return result;
}

function divide (a, b) {
    result = a / b;
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

        if (parseInt(operation[i]) >= 0) {
            operation = operation.slice(3,)
            console.log(operation);
        } else {
            operation = operation.slice(2,)
        }
    }
}

//operation.push(1);
//operation.push('*');
//operation.push(5);

//operate(operation);

//let btn_container = document.getElementById('btn-container');
//console.table(btn_container);
let calc_buttons = document.querySelectorAll('.btn');

//Need to assign numberA first, if more than 1 digit it doesnt work; need to make sure the whole number takes 1 index in array

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
        } else {
            operation.push(operant.slice(1,));
            operation.push(e.target.id);
            operant = 0;
            console.log(operation);
        }
    });
}