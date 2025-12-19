const cartList = document.getElementById("cart-list");
const totalText = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartList.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>Rp ${item.price.toLocaleString("id-ID")}</p>
          <button class="remove-btn" onclick="removeItem(${index})">Hapus</button>
        </div>
      </div>
    `;
  });

  totalText.innerText = "Total: Rp " + total.toLocaleString("id-ID");
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  if (confirm("Kosongkan semua isi keranjang?")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

renderCart();
