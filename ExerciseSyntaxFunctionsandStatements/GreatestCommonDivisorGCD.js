function solve(numOne, numTwo) {
    numOne = +numOne;
    numTwo = +numTwo;
    let max = 0;
    for (let index = 1; index <= numOne; index++) {
        if (numOne % index == 0 && numTwo % index == 0) {
            max = index;
        }
    }

    console.log(max);
}

solve(2154, 458);