function solve(input) {
    let sortedArray = input.sort((a, b) => {
        return a - b;
    })

    sortedArray = sortedArray.slice(0, 2)
    console.log(sortedArray.join(" "));
}

solve(
    [30, 15, 50, 5]
)