function solve(numOne, numTwo, operator) {
    let calc = function (numOne, numTwo, operator) { return operator(numOne, numTwo) }
    let add = function (numOne, numTwo) { return numOne + numTwo };
    let substract = function (numOne, numTwo) { return numOne - numTwo };
    let multiply = function (numOne, numTwo) { return numOne * numTwo };
    let divide = function (numOne, numTwo) { return numOne / numTwo }

    switch (operator) {
        case '+': return calc(numOne, numTwo, add);
        case '-': return calc(numOne, numTwo, substract);
        case '*': return calc(numOne, numTwo, multiply);
        case '/': return calc(numOne, numTwo, divide);
    }
}

solve(2, 4, '+');