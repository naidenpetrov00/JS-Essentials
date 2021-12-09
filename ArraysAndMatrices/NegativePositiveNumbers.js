function solve(input) {
    const myArray = [];
    
    input.map((element) => {
        if (element < 0) {
            myArray.unshift(element);
        }
        else {
            myArray.push(element);
        }
    })

    console.log(myArray);
}

solve(
    [3, -2, 0, -1]
);