function solve(numOne, numTwo, operator) {
    let calc = function (numOne, numTwo, operator) { return operator(numOne, numTwo) }
    let add = function (numOne, numTwo) { return numOne + numTwo };
    let substract = function (numOne, numTwo) { return numOne - numTwo };
    let multiply = function (numOne, numTwo) { return numOne * numTwo };
    let divide = function (numOne, numTwo) { return numOne / numTwo }

    switch (operator) {
        case '+': calc(numOne, numTwo, add);
        case '-': calc(numOne, numTwo, substract);
        case '*': calc(numOne, numTwo, multiply);
        case '/': calc(numOne, numTwo, divide);
    }
}

solve(2, 4, '+');