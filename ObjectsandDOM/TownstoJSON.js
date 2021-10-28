function solve(towns) {
    let spliter = function (input) {
        let result = input.split("|");
        result.shift();
        result.pop();

        for (let i = 0; i < result.length; i++) {
            let curr = result[i];

            if (!curr[0].match(/\d/)) {
                curr = curr.substring(1, curr.length);
            }
            if (!curr[0].match(/\d/)) {
                curr = curr.substring(0, curr.length - 1);
            }

            result[i] = curr;
        }
        return result;
    }

    let columns = spliter(towns.shift());

    let result = [];
    let currTown = "";

    for (let i = 0; i < towns.length; i++) {
        currTown = spliter(towns[i]);

        let town = {};
        town[columns[0]] = currTown[0];
        town[columns[1]] = Number(currTown[1]);
        town[columns[2]] = Number(currTown[2]);

        result.push(town);
    }

    let output = JSON.stringify(result);
    console.log(output);
}

solve(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.69| 23.32 |',
        '| Beijing | 39.91 | 116.36 |']
)