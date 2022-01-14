function solve(plasma, giantSize) {
    const winner = "winner";
    const loser = "loser";
    const firstWinner = "First";
    const secondWinner = "Second";

    const middleIndex = Math.ceil(plasma.length / 2);
    const firstHalfPlasma = plasma.slice(0, middleIndex);
    const secondHalfPlasma = plasma.slice(-middleIndex);

    const firstHalfPlasmaPieces = plasmaSplitter(firstHalfPlasma);
    const secondHalfPlasmaPieces = plasmaSplitter(secondHalfPlasma);

    let firstHalfPlasmaPower = plasmaPowerCalculator(firstHalfPlasmaPieces);
    let secondHalfPlasmaPower = plasmaPowerCalculator(secondHalfPlasmaPieces);

    const damagePerHit = plasma.shift();
    const minHP = Math.max(...plasma);

    let rounds = 0;

    while (true) {
        rounds++;

        if (firstHalfPlasmaPower <= minHP || secondHalfPlasmaPower <= minHP) {
            break;
        }

        firstHalfPlasmaPower -= damagePerHit;
        secondHalfPlasmaPower -= damagePerHit;
    }

    if (firstHalfPlasmaPower == secondHalfPlasmaPower) {
        console.log(`Its a draw ${firstHalfPlasmaPower} - ${secondHalfPlasmaPower}`);
    }
    else {
        const stats = winnerChecker(firstHalfPlasmaPower, secondHalfPlasmaPower)

        console.log(`${stats[winner][0]} Giant defeated ${stats[loser][0]} Giant with result ${stats[winner][1]} - ${stats[loser][1]} in ${rounds} rounds`);
    }

    function winnerChecker(firsGiant, secondGiant) {
        let stats = {};

        if (firsGiant > secondGiant) {
            stats[winner] = [firstWinner, firstHalfPlasmaPower];
            stats[loser] = [secondWinner, secondHalfPlasmaPower];
        }
        else {
            stats[winner] = [secondWinner, secondHalfPlasmaPower];
            stats[loser] = [firstWinner, firstHalfPlasmaPower];
        }

        return stats
    }

    function plasmaPowerCalculator(plasma) {
        let totalPower = 0;

        plasma.forEach(element => {
            let lastResult = 0;

            element.reduce((a, b, currIndex) => {
                currResult = a * b;
                lastResult = currResult;
                return currResult;
            })

            totalPower += lastResult;
        })

        return totalPower;
    }

    function plasmaSplitter(plasma) {
        const pieces = [];

        plasma.map((element, index) => {
            if (index % giantSize === 0) {
                const plasmaClone = [...plasma];

                const currPiece = plasmaClone.splice(index, giantSize);
                pieces.push(currPiece)
            }
        })

        return pieces;
    }
}

solve(
    [3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2
);
solve(
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2
);
solve(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3
);