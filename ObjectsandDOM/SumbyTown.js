function solve(input) {
    let towns = {};

    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {
            if (input[i] in towns) {
                towns[input[i]] += Number(input[i + 1]);
            }
            else {
                towns[input[i]] = Number(input[i + 1]);
            }
        }
    }

    let result = JSON.stringify(towns);
    console.log(result);
}

solve(
    ["Sofia",
        "20",
        "Varna",
        "3",
        "Sofia",
        "5",
        "Varna",
        "4"]
);