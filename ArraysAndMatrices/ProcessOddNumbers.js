function solve(input) {
    const oddArray = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            oddArray.unshift(input[i] * 2);
        }
    }

    console.log(oddArray.join(" "));
}

solve(
    [30, 15, 50, 5]
);