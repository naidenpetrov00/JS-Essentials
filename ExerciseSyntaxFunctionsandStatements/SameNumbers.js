function solve(number) {
    let num = number.toString();
    let equals = true;
    let sum = 0;

    for (let index = 0; index < num.length; index++) {
        if (num[0] != num[index]) {
            equals = false;
        }
        sum += Number(num[index]);

    }

    console.log(equals);
    console.log(sum);
}

solve(1234);