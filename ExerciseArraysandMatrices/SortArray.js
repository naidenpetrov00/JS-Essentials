function solve(input) {
    input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).forEach(i => console.log(i));
}

solve(
    ['alpha',
        'beta',
        'gamma']
);