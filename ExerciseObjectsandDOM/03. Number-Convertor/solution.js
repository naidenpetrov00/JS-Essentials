function solve() {
    const parseOptionsElement = document.getElementById("selectMenuTo");
    const binaryOpitionElement = parseOptionsElement.getElementsByTagName("option")[0];
    const hexadecimalOpitionElement = document.createElement("option");
    let resultElement = document.getElementById("result");

    parseOptionsElement.appendChild(hexadecimalOpitionElement);

    binaryOpitionElement.value = "binary"
    binaryOpitionElement.textContent = "Binary";
    hexadecimalOpitionElement.value = "hexadecimal";
    hexadecimalOpitionElement.textContent = "Hexadecimal";

    const buttonElement = document.getElementsByTagName("button")[0];
    buttonElement.addEventListener("click", () => {
        const inputElement = Number(document.getElementById("input").value);

        if (parseOptionsElement.value === binaryOpitionElement.value) {
            resultElement.value = inputElement.toString(2);
        }
        else if (parseOptionsElement.value === hexadecimalOpitionElement.value) {
            resultElement.value = inputElement.toString(16);
        }


    });
}