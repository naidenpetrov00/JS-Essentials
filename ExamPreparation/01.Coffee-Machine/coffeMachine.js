function coffeMachine(input) {
    const addPrice = 0.10;
    let totalMoney = 0;

    for (const item of input) {
        const [coins, drink, type, milk, sugar] = item.split(', ');

        let price = 0.80;

        if (item.includes('decaf')) {
            price += addPrice;
        }
        if (item.includes('milk')) {
            price += addPrice;
        }
        if (Number(item.split(', ').pop()) > 0) {
            price += addPrice;
        }

        const difference = Math.abs(price - Number(coins));

        if (Number(coins) >= price) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${difference.toFixed(2)}$`);
            totalMoney += price;
        }
        else {
            console.log(`Not enough money for ${drink}. Need ${difference.toFixed(2)}$ more.`);
        }

    }

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}

coffeMachine(
    ['1.00, coffee, caffeine, milk, 4'
        , '0.40, tea, milk, 2',
        '1.00, coffee, decaf, 0']
);