function solve(input) {
    const rotations = input.pop();

    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop())
    }

    console.log(input.join(" "));
}

solve(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple',
        '15']
)