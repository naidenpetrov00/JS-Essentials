function solve(input) {
    let mainDiagonalCounter = 0;
    let secondaryDiagonalCounter = input.length - 1;
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let row = 0; row < input.length; row++) {

        for (let col = 0; col < input[row].length; col++) {
            if (col === mainDiagonalCounter) {
                mainDiagonal += input[row][col];
            }
            if (col === secondaryDiagonalCounter) {
                secondaryDiagonal += input[row][col];
            }
        }
        secondaryDiagonalCounter--;
        mainDiagonalCounter++;
    }

    console.log(`${mainDiagonal} ${secondaryDiagonal}`)
}

solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);