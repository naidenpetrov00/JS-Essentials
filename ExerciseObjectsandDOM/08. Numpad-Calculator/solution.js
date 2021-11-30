function solve() {
    function onClickClear() {

    }

    function onClickPad() {
        expressionOutputElements.textContent = expressionOutputElements.textContent.concat(this.value);
    }

    function onClickCalculate() {
        console.log(expressionOutputElements.textContent);
        for (let element of expressionOutputElements.textContent) {
            if (!isNaN(element)) {
                element = Number(element);
            }
        }
    }

    const buttonElements = document.getElementsByTagName("button");
    const expressionOutputElements = document.getElementById("expressionOutput");

    for (const button of buttonElements) {
        if (button.value === "Clear") {
            button.addEventListener("click", onClickClear);
        }
        else if (button.value === "=") {
            button.addEventListener("click", onClickCalculate);
        }
        else {
            button.addEventListener("click", onClickPad);
        }

    }
}