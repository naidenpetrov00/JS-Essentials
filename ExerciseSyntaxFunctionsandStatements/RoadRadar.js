function solve(speedAndArea) {
    let speed = +speedAndArea[0];
    let area = speedAndArea[1];

    let speeding = false;
    let overSpeed = 0;

    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    switch (area) {
        case Object.keys(limits)[0]:
            if (speed > limits.motorway) {
                speeding = true;
                overSpeed = speed - limits.motorway;
            }
            break;
        case Object.keys(limits)[1]:
            if (speed > limits.interstate) {
                speeding = true;
                overSpeed = speed - limits.interstate;
            }
            break;
        case Object.keys(limits)[2]:
            if (speed > limits.city) {
                speeding = true;
                overSpeed = speed - limits.city;
            }
            break;
        case Object.keys(limits)[3]:
            if (speed > limits.residential) {
                speeding = true;
                overSpeed = speed - limits.residential;
            }
            break;
    }

    if (speeding) {
        if (overSpeed <= 20) {
            console.log("speeding");
        }
        else if (overSpeed <= 40) {
            console.log("excessive speeding");
        }
        else if (overSpeed > 40) {
            console.log("reckless driving");
        }
    }
}

solve([200, 'motorway']);