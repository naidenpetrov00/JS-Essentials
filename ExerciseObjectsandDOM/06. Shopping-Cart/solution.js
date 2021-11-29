function solve() {
   function onClickAdd() {
      const parentElement = this.parentElement.parentElement;
      const productName = parentElement.getElementsByClassName("product-title")[0].textContent;
      const productPrice = parentElement.getElementsByClassName("product-line-price")[0].textContent;

      const productDetails = `Added ${productName} for ${productPrice} to the cart.\n`;

      textAreaValueElement.value = textAreaValueElement.value.concat(productDetails);

      if (!productsNameContainer.includes(productName)) {
         productsNameContainer.push(productName);
      }
      productsPriceContainer.push(productPrice);
   }

   function onClickCheckout() {
      let totalPrice = 0;

      for (const item of productsPriceContainer) {
         totalPrice += Number(item);
      }

      const checkoutDetails = `You bought ${productsNameContainer.join(", ")} for ${totalPrice}.`;
      textAreaValueElement.value = textAreaValueElement.value.concat(checkoutDetails);

      for (const button of addButtonElements) {
         button.removeEventListener("click", onClickAdd);
      }
      checkoutButtonElement.removeEventListener("click", onClickCheckout)
   }

   const addButtonElements = document.getElementsByClassName("add-product");
   const textAreaValueElement = document.getElementsByTagName("textarea")[0];
   const checkoutButtonElement = document.getElementsByClassName("checkout")[0];
   const productsNameContainer = [];
   const productsPriceContainer = [];

   for (const button of addButtonElements) {
      button.addEventListener("click", onClickAdd);
   }
   checkoutButtonElement.addEventListener("click", onClickCheckout)
}