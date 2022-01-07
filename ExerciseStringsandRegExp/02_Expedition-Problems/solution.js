function solve() {
    const keyWordElementValue = document.getElementById("string").value;
    const textElementValue = document.getElementById("text").value
    let spanResultElement = document.getElementById("result");

    const messageRegexString = `${keyWordElementValue}(.*)${keyWordElementValue}`;
    const messageRegex = new RegExp(messageRegexString, "g");

    const messageMatch = messageRegex.exec(textElementValue);

    const message = messageMatch[1];

    const locationRegex = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;

    let eastMatch;
    let northMatch;

    const match = locationRegex.exec(textElementValue);

    while (match !== null) {
        if (match[1].toUpperCase() === "NORTH") {
            northMatch = match;
        }
        else {
            eastMatch = match;
        }
        match = locationRegex.exec(textElementValue);
    }


    const p1 = document.createElement("p");
    p1.innerHTML = `${northMatch[2]}.${northMatch[3]} N`;
    const p2 = document.createElement("p");
    p2.innerHTML = `${eastMatch[2]}.${eastMatch[3]} E`;

    const p3 = document.createElement("p");
    p3.innerHTML = `Message: ${message}`;

    spanResultElement.appendChild(p1);
    spanResultElement.appendChild(p2);
    spanResultElement.appendChild(p3);

}