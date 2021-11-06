function solve() {
    const inputElementValue = document.getElementById("input").innerText;

    const sentences = inputElementValue
        .replaceAll(".", ".,,")
        .split(",,").filter(e => e != "")
        .map(e => e.trimStart());

    const formatedSentences = [];
    let currSentences = [];

    for (let i = 1; i <= sentences.length; i++) {
        currSentences.push(sentences[i - 1])

        if (i % 3 == 0) {
            formatedSentences.push(currSentences);
            currSentences = [];
        }
    }

    formatedSentences.push(currSentences);

    console.log(formatedSentences[2]);
}