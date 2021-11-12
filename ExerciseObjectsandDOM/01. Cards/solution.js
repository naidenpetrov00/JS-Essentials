function solve() {
}

function clickEvent(element) {

   const firstSpanElement = document.querySelectorAll("div span")[0];
   const secondSpanElement = document.querySelectorAll("div span")[2];

   const playerOneElement = document.querySelector("#player1Div");
   const playerTwoElement = document.querySelector("#player2Div");

   if (firstSpanElement.textContent && playerOneElement.contains(element)) {
      return;
   }
   else if (secondSpanElement.textContent && playerTwoElement.contains(element)) {
      return;
   }

   element.src = "./images/whiteCard.jpg";

   if (playerOneElement.contains(element)) {
      firstSpanElement.append(element.name);
   }
   else if (playerTwoElement.contains(element)) {
      secondSpanElement.append(element.name);
   }

   if (firstSpanElement.textContent && secondSpanElement.textContent) {
      const firstCardElement = playerOneElement.querySelector(`[name="${firstSpanElement.textContent}"]`);
      const secondCardElement = playerTwoElement.querySelector(`[name="${secondSpanElement.textContent}"]`);

      const firstPlayerResult = Number(firstSpanElement.textContent);
      const secondPlayerResult = Number(secondSpanElement.textContent);

      if (firstPlayerResult > secondPlayerResult) {
         firstCardElement.style.border = "2px solid green";
         secondCardElement.style.border = "2px solid red";
      }
      else if (secondPlayerResult > firstPlayerResult) {
         secondCardElement.style.border = "2px solid green";
         firstCardElement.style.border = "2px solid red";
      }

      const historyElement = document.querySelector("#history");
      historyElement.textContent = `[${firstSpanElement.textContent} vs ${secondSpanElement.textContent}]`;

      firstSpanElement.remove();
      secondSpanElement.remove();
   }
}