function solve(input) {
    let biggestNumbers = [];
    let biggestNumber = input[0];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggestNumber) {
            biggestNumber = input[i];
            biggestNumbers.push(biggestNumber)
        }
    }

    biggestNumbers.map((a) => {
        console.log(a);
    });
}

solve(
    [1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24]
);