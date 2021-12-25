function solve() {
    const word = document.getElementById('word').value;
    const text = document.getElementById('text').value;
    let parts = JSON.parse(text);

    const wordToReplace = parts[0].split(' ')[2];
    const patern = new ReqExp(wordToReplace, 'gi')
    parts = parts.map(part => part.replace(patern, word))
}