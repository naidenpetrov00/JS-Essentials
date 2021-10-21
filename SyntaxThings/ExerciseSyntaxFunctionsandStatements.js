function demo(params) {
    let car = {
        model: "325",
        make: "bmw"
    }
    let bus = ["bus", "red"];

    console.log(car.hasOwnProperty("model"));

    //iteration for object
    for (element in car) {
        console.log(`key - ${element} | value - ${car[element]}`);
    }
    // for array
    for (element of bus) {
        console.log(element);
    }

}

demo();