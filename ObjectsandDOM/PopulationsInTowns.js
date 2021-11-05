function solve(cityInfo) {

    let currInfo = "";
    let currCity = "";
    let currPopulation = 0

    let towns = {};

    for (const iterator of cityInfo) {

        currInfo = iterator.split("<->");
        currCity = currInfo[0].trim();
        currPopulation = Number(currInfo[1]);

        if (towns.hasOwnProperty(currCity)) {
            towns[currCity] += currPopulation;
        }
        else {
            towns[currCity] = currPopulation;
        }
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}

solve(
    ["Sofia <-> 1200000",
        "Montana <-> 20000",
        "New York <-> 10000000",
        "Washington <-> 2345000",
        "Las Vegas <-> 1000000"]

)