function solve() {
   function onClick() {
      let counter = selectedElements.length - 1;

      for (let i = counter; i >= 0; i--) {
         selectedElements[i].removeAttribute("class");
      }

      const searchValue = inputElement.value;

      const allNames = document.querySelectorAll("tbody > tr > td");

      for (const name in allNames) {

         if (allNames.hasOwnProperty(name)) {
            const element = allNames[name].textContent;

            if (element.toLowerCase().includes(searchValue.toLowerCase())) {
               allNames[name].classList.add("select");
            }
         }
      }

      inputElement.value = "";
   }

   const selectedElements = document.getElementsByClassName("select");
   const inputElement = document.getElementById("searchField");
   const buttonElement = document.getElementById("searchBtn");
   buttonElement.addEventListener("click", onClick);
}