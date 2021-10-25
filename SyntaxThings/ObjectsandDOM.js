function solve() {
   // { dynamic property set
    let car ={
        model: "BMW330",
        year: "2003",
    }

    let property = "color";
    
    car[property] = "red";

    console.log(car);
    // }
}

solve();