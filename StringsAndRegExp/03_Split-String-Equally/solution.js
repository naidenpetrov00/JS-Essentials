function solve() {
    let text = document.getElementById('text').value;
    const groupSize = Number(document.getElementById('number').value);

    if (text.length % groupSize > 0) {
        const remainder = text.length % groupSize;
        const charsToFIll = groupSize - remainder;
        text = text + text.substr(0, charsToFIll);
    }

    const result = [];
    for (let i = 0; i < text.length; i += groupSize) {
        result.push(text.substr(i, groupSize));
    }

    console.log(result.join(' '));
}