function ATMMachine(input) {
    let totalCashInATM = [];

    input.forEach(elementArray => {
        if (elementArray.length > 2) {
            insert(elementArray);
        }
        else if (elementArray.length === 2) {
            const [balance, moneyToWithdraw] = elementArray;

            if (balance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`);
            }
            else {
                withdraw(balance, moneyToWithdraw);
            }
        }
        else if (elementArray.length === 1) {
            report(elementArray[0]);
        }
    });

    function insert(banknotes) {
        totalCashInATM.push(...banknotes);

        console.log(`Service Report: ${getSum(banknotes)}$ inserted. Current balance: ${getSum(totalCashInATM)}$.`);
    }

    function withdraw(balance, moneyToWithdraw) {
        if (moneyToWithdraw > getSum(totalCashInATM)) {
            console.log("ATM machine is out of order!");
        }
        else {
            let sum = 0;
            totalCashInATM = totalCashInATM.sort((a, b) => b - a);

            for (let i = 0; i < totalCashInATM.length; i++) {
                if (sum === moneyToWithdraw) {
                    break;
                }
                if (sum + totalCashInATM[i] <= moneyToWithdraw) {
                    sum += Number(totalCashInATM.splice(i, 1));
                    i--;
                }
            }

            console.log(`You get ${sum}$. Account balance: ${balance - sum}$. Thank you!`);
        }
    }

    function report(banknotes) {
        let count = totalCashInATM.filter(b => b === banknotes).length;

        console.log(`Service Report: Banknotes from ${banknotes}$: ${count}.`);
    }

    function getSum(banknotes) {
        // currIndex
        return banknotes.reduce((a, b) => a + b, 0);
    }
}

ATMMachine(
    [
        [20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);