const btn = document.querySelectorAll("button");

btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    const btnItem = event.target;
    const product = btnItem.parentElement;
    const productImg = product.querySelector("img").src;
    const productName = product.querySelector(".product-name").innerText;
    const productPrice = product.querySelector(".product-price").innerText;
    addCart(productPrice, productImg, productName);
  });
});

function addCart(productPrice, productImg, productName) {
  const addtr = document.createElement("tr");
  const cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    const productT = document.querySelectorAll(".title");
    if (productT[i].innerHTML == productName) {
      alert("item is already added to cart");
      return;
    }
  }
  const trcontent =
    '<tr><td><img src="' +
    productImg +
    '"/><p><span class="title">' +
    productName +
    "</span></p></td><td><p class='tbody-price'>" +
    productPrice +
    '</p></td><td><input type="number" value="1" min="0" /></td><td><span class="delete-btn">Delete<span></td></tr>';
  addtr.innerHTML = trcontent;
  const cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  cartTotal();
  deleteCard();
}

///total//////////////////////////////////////////////////////////

function cartTotal() {
  const cartItem = document.querySelectorAll("tbody tr");
  let total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    const inputValue = cartItem[i].querySelector("input").value;

    const tbodyPrice = cartItem[i].querySelector(".tbody-price").innerHTML;

    cal = parseInt(inputValue * tbodyPrice);
    total += cal;
  }
  document.querySelector(".price-total-display").textContent =
    "Total: " + total + "$";
  inputChange();
}

// delete//////////////////////////////////////////////////////////
function deleteCard() {
  const cartItem = document.querySelectorAll("tbody tr");

  for (let i = 0; i < cartItem.length; i++) {
    const dele = document.querySelectorAll(".delete-btn");
    dele[i].addEventListener("click", function (e) {
      const cartDelete = e.target;
      const cartItemD = cartDelete.parentElement.parentElement;
      cartItemD.remove();
      cartTotal();
    });
  }
}

function inputChange() {
  const cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    const inputValue = cartItem[i].querySelector("input");
    inputValue.addEventListener("change", function () {
      cartTotal();
    });
  }
}
