function coffeeStorage() {
    const inputElement = JSON.parse(document.querySelector("textarea").value);
    const [report, inspection] = document.getElementsByTagName("p");

    let brands = {};

    for (const item of inputElement) {
        const [command, brand, subBrand, date, quantity] = item.split(", ");

        if (command === "IN") {
            if (!brands[brand]) {
                brands[brand] = {};
            }
            if (!brands[brand][subBrand]) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }
            if (brands[brand][subBrand].date === date) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }
            if (brands[brand][subBrand].date < date) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }
        }
        else if (command === "OUT") {
            if (brands[brand] &&
                brands[brand][subBrand] &&
                brands[brand][subBrand].date > date &&
                brands[brand][subBrand].quantity >= Number(quantity)) {

                brands[brand][subBrand].quantity -= Number(quantity);
            }
        }
        else if (command === "REPORT") {
            
        }
    }
}