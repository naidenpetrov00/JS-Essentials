function solve() {
  const textValueElement = document.querySelector("#text").value;
  const parts = textValueElement.split(' ');

  let words = '';
  let numbers = '';

  parts.forEach(part => {

    if (isNaN(part)) {
      words += part
        .split('')
        .map(e => e.charCodeAt(0))
        .join(' ');
      words += '\n';
    }
    else {
      numbers += String.fromCharCode(Number(part))
    }
  })

  console.log(words);
  console.log(numbers);
}