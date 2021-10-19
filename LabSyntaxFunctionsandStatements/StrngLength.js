function solve(firstValue, secondValue, thirdValue) {
    let sumLength;
    let avvLength;

    sumLength = firstValue.length + secondValue.length + thirdValue.length;
    avvLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avvLength);
}

solve('pasta', '5', '22.3');