function solve() {
  function onClick() {
    if (this.textContent === correctAnswers[sectionCounter]) {
      correctAnswersCounter++;
    }

    if (sectionCounter === sectoinElements.length - 1) {
      sectoinElements[sectionCounter].style.display = "none";
      resultElement.style.display = "block";
      sectionCounter++;

      if (correctAnswersCounter === correctAnswers.length) {
        resultValueElement.textContent = "You are recognized as top JavaScript fan!";
      }
      else if(correctAnswersCounter < correctAnswers.length){
        resultValueElement.textContent = `You have ${correctAnswersCounter} right answers`;
      }
    }
    else if (sectionCounter < sectoinElements.length - 1) {
      sectoinElements[sectionCounter].style.display = "none";
      sectoinElements[sectionCounter + 1].style.display = "block";
      sectionCounter++;
    }
  }

  const resultElement = document.getElementById("results");
  const resultValueElement = resultElement.getElementsByClassName("results-inner")[0];
  const answerElements = document.getElementsByTagName("p");
  const sectoinElements = document.getElementsByTagName("section");

  let sectionCounter = 0;
  let correctAnswersCounter = 0;

  const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];


  for (let answerElement of answerElements) {
    answerElement.addEventListener("click", onClick)
  }
}

