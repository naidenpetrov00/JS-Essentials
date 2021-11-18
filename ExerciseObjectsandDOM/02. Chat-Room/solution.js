function solve() {
   let targetDiv = document.getElementsByClassName("my-message")[0];
   let textArea = document.getElementById("chat_input");
   let chatMessageArea = document.getElementById("chat_messages");

   let sendButonElement = document.getElementById("send");

   sendButonElement.addEventListener("click", function (params) {
      let targetDivClone = targetDiv.cloneNode(true);
      let textAreaContent = textArea.value;
      targetDivClone.textContent = textAreaContent;

      chatMessageArea.appendChild(targetDivClone);

      textArea.value = "";
   });
}