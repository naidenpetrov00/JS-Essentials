function solve(foods) {
    let menu = {};

    for (let i = 0; i < foods.length; i++) {

        if (i % 2 === 0) {
            menu[foods[i]] = +foods[i + 1];
        }
    }

    console.log(menu);
}

solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42])