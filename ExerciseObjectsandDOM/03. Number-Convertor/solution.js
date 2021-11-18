function solve() {
    const parseOptionsElement = document.getElementById("selectMenuTo");
    const binaryOpitionElement = parseOptionsElement.getElementsByTagName("option")[0];
    const hexadecimalOpitionElement = document.createElement("option");
    parseOptionsElement.appendChild(hexadecimalOpitionElement);

    binaryOpitionElement.value = "binary"
    binaryOpitionElement.textContent = "Binary";
    hexadecimalOpitionElement.value = "hexadecimal";
    hexadecimalOpitionElement.textContent = "Hexadecimal";

    console.log(binaryOpitionElement);
}