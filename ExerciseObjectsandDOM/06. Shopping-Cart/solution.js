function solve() {
   function onClick() {
      console.log(this.parentNode);
   }

   const addButtonElements = document.getElementsByClassName("add-product");

   for (const button of addButtonElements) {
      button.addEventListener("click", onClick);
   }

}