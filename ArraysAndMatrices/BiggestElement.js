function solve(input) {
    const biggestNumber = [];

    for (let row = 0; row < input.length; row++) {
        input[row].sort((a, b) => {
            return a - b;
        })
    }

    input.map((element) => {
        biggestNumber.push(element[element.length - 1]);
    })

    biggestNumber.sort((a, b) => {
        return b - a;
    })

    console.log(biggestNumber[0]);
}

solve(
    [[3, 5, 7, 12],
 [-1, 4, 33, 2],
 [8, 3, 0, 4]]
);