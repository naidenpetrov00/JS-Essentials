function solve(fruit, weight, pricePerKilo) {
    let weightInKilos = weight / 1000;
    let buyPrice = weightInKilos * pricePerKilo;

console.log(`I need $${buyPrice.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`);
}

solve('apple', 1563, 2.35);