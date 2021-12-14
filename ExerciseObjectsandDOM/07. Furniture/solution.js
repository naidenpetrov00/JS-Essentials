function solve() {
    function onClick() {
        console.log("op");
    }

    const buttonElements = document.getElementsByTagName("button");

    for (const button of buttonElements) {
        button.addEventListener("click", onClick);
    }
}