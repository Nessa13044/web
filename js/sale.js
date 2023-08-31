function handleCheckboxChange(index) {
    const product = document.querySelectorAll(".product")[index];
    const checkbox = product.querySelector("input[type='checkbox']");
    const quantityInput = product.querySelector(".quantity");
  
    if (checkbox.checked) {
      quantityInput.disabled = false;
      quantityInput.value = 1;
      calculateProductTotal(index);
    } else {
      quantityInput.disabled = true;
      quantityInput.value = "";
      product.querySelector(".total-price").textContent = "";
      calculateTotal();
    }
  }
  
  function calculateProductTotal(index) {
    const product = document.querySelectorAll(".product")[index];
    const price = parseInt(product.querySelectorAll("td")[2].textContent.replace("$", ""));
    const quantity = parseInt(product.querySelector(".quantity").value);
    const totalPrice = price * quantity;
    product.querySelector(".total-price").textContent = "$" + totalPrice;
  
    calculateTotal();
  }
  
  function calculateTotal() {
    const products = document.querySelectorAll(".product");
    let total = 0;
  
    products.forEach((product) => {
      const checkbox = product.querySelector("input[type='checkbox']");
      const quantity = parseInt(product.querySelector(".quantity").value);
  
      if (checkbox.checked) {
        const price = parseInt(product.querySelectorAll("td")[2].textContent.replace("$", ""));
        total += quantity * price;
      }
    });
  
    document.getElementById("total-price").textContent = "$" + total;
  }
  function filterProducts() {
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const minPrice = parseInt(minPriceInput.value);
    const maxPrice = parseInt(maxPriceInput.value);
  
    const products = document.querySelectorAll(".product");
  
    products.forEach((product, index) => {
      const price = parseInt(product.querySelectorAll("td")[2].textContent.replace("$", ""));
      const shouldShow = isNaN(minPrice) || isNaN(maxPrice) || (price >= minPrice && price <= maxPrice);
      product.style.display = shouldShow ? "table-row" : "none";
  
      // If the product is hidden due to filtering, uncheck and reset quantity
      if (!shouldShow) {
        const checkbox = product.querySelector("input[type='checkbox']");
        const quantityInput = product.querySelector(".quantity");
        checkbox.checked = false;
        quantityInput.value = "";
        quantityInput.disabled = true;
        product.querySelector(".total-price").textContent = "";
      }
    });
  
    calculateTotal();
  }
  
  // Initially calculate the total for the selected products
  calculateTotal();
  

