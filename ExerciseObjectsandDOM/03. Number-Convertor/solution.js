function solve() {
    const parseOptionsElement = document.getElementById("selectMenuTo");
    const binaryOpitionElement = parseOptionsElement.getElementsByTagName("option")[0];
    const hexadecimalOpitionElement = document.createElement("option");
    parseOptionsElement.appendChild(hexadecimalOpitionElement);
    binaryOpitionElement.value = "binary"
    binaryOpitionElement.textContent = "Binary";
    hexadecimalOpitionElement.value = "hexadecimal";
    hexadecimalOpitionElement.textContent = "Hexadecimal";

    const buttonElement = document.getElementsByTagName("button")[0];
    buttonElement.addEventListener("click", () => {
        const inputElement = Number(document.getElementById("input").value);

        if (parseOptionsElement.value === binaryOpitionElement.value) {

        }
        else if (parseOptionsElement.value === hexadecimalOpitionElement.value) {
            
        }
    });



}