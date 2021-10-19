function solve(n, m) {
    let numOne = Number(n);
    let numTwo = Number(m);

    let result = 0;

    for (let index = numOne; index <= numTwo; index++) {
        result += index;
    }
    
    return result;
}

solve('-8', '20');