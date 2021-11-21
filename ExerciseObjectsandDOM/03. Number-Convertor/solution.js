function solve() {
    const buttonElement = document.getElementsByTagName("button")[0];
    buttonElement.addEventListener("click", calculate);

    const parseOptionsElement = document.getElementById("selectMenuTo");
    const binaryOpitionElement = parseOptionsElement.getElementsByTagName("option")[0];
    const hexadecimalOpitionElement = document.createElement("option");
    parseOptionsElement.appendChild(hexadecimalOpitionElement);

    binaryOpitionElement.value = "binary"
    binaryOpitionElement.textContent = "Binary";
    hexadecimalOpitionElement.value = "hexadecimal";
    hexadecimalOpitionElement.textContent = "Hexadecimal";

}

function calculate() {
    const inputElement = Number(document.getElementById("input").value);
    console.log(inputElement);
}