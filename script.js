let operation = []
let a = 0;
let b = 0;
let operator = '';
let result = 0;
// We can be sure that operation[0] is a number, [1] is an operator, [2] is an other number
// If we basde our operation variable on i = odd is an operator, we can chain multiple operations
// We can probably make the code better by using the redeuce() function, check later

function add (a, b) {
    result = a + b;
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
    for (let i = 0; i <= operation.length; i+=3) {
        let numA = operation[i];
        operator = operation[i+1];
        let numB = operation[i+2];
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
    }
}

operation.push(1);
operation.push('*');
operation.push(5);

operate(operation);