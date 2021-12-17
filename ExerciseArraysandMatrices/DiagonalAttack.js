function solve(input) {
    let matrix = input.map((element) => {
        return element.split(" ");
    });

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].map(Number);
    }

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += matrix[i][i];
        sumSecondDiagonal += matrix[i][matrix.length - i - 1];
    }

    if (sumFirstDiagonal === sumSecondDiagonal) {
        for (let i = 0; i < matrix.length; i++) {

            for (let k = 0; k < matrix[i].length; k++) {

                if (i !== k && i !== matrix.length - 1 - k) {
                    matrix[i][k] = sumSecondDiagonal;
                }
            }
        }

        matrix.forEach(e => console.log(e.join(" ")));
    }
    else {
        matrix.forEach(e => console.log(e.join(" ")));
    }
}

solve(
    ['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']

);