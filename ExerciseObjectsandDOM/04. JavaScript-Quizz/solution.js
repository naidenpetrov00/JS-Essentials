function solve() {
  function onClick() {
    if (this.textContent === trueAnswers[sectionCounter]) {
    }

    sectoinElements[sectionCounter].style.display = "none";
    sectoinElements[sectionCounter + 1].style.display = "block";
    sectionCounter++;
  }

  const sectoinElements = document.getElementsByTagName("section");
  let sectionCounter = 0;

  const trueAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];

  const answerElements = document.getElementsByTagName("p");

  for (let answerElement of answerElements) {
    answerElement.addEventListener("click", onClick)
  }
}

