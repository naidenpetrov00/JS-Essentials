function growingWord() {
  let growingWordElement = document.querySelector("#exercise p")
  let currGrowingElement = growingWordElement.style.fontSize.slice(0, -2) * 2 || 2;

  let blueDivElement = document.getElementById("blueDiv");
  let greenDivElement = document.getElementById("greenDiv");
  let redDivElement = document.getElementById("redDiv");

  let isBLue = blueDivElement.getAttribute("active") === "true";
  let isGreen = greenDivElement.getAttribute("active") === "true";
  let isRed = redDivElement.getAttribute("active") === "true";

  if (currGrowingElement === 2 || isBLue) {
    growingWordElement.style.color = "blue";
    blueDivElement.setAttribute("active", false);
    greenDivElement.setAttribute("active", true);
  }
  else if (isGreen) {
    growingWordElement.style.color = "green";
    greenDivElement.setAttribute("active", false);
    redDivElement.setAttribute("active", true);
  }
  else if (isRed) {
    growingWordElement.style.color = "red";
    redDivElement.setAttribute("active", false);
    blueDivElement.setAttribute("active", true);
  }

  growingWordElement.style.fontSize = `${currGrowingElement}px`;
}