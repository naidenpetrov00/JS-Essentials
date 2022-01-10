function solve() {
    //merging arrays
    const arr = [1, 2, 3, 4];
    const arr1 = [5, 6, 7, 8];

    arr.push(...arr1);

    console.log(arr);
    //;

    //multiple variables on single line
    const [first, second, third] = [1, 2, 3];

    console.log(first);
    console.log(second);
    console.log(third);
    //;
}

solve();