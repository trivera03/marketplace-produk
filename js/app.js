// =====================
// PRODUK
// =====================
let products = JSON.parse(localStorage.getItem("products"));

if (!products) {
  products = [
    {
      name: "Pakan Ayam Petelur",
      description: "Pakan bernutrisi tinggi untuk ayam petelur",
      price: 250000,
      image: "img/ayam.jpg"
    },
    {
      name: "Pakan Sapi Potong",
      description: "Meningkatkan bobot sapi secara optimal",
      price: 500000,
      image: "img/sapi.jpg"
    },
    {
      name: "Pakan Kambing",
      description: "Mendukung pertumbuhan dan kesehatan kambing",
      price: 300000,
      image: "img/kambing.jpg"
    }
  ];

  localStorage.setItem("products", JSON.stringify(products));
}

const productList = document.getElementById("product-list");

if (productList) {
  products.forEach(p => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <span>Rp ${p.price.toLocaleString("id-ID")}</span>
      </div>
    `;
  });
}

// =====================
// LOGIN
// =====================
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  if (user === "admin" && pass === "123") {
    localStorage.setItem("loginUser", user);
    window.location.href = "index.html";
  } else {
    msg.innerText = "Username atau password salah!";
    msg.style.color = "red";
  }
}

function checkLogin() {
  const user = localStorage.getItem("loginUser");
  const loginMenu = document.getElementById("loginMenu");

  if (!loginMenu) return;

  if (user) {
    loginMenu.innerText = user + " (Logout)";
    loginMenu.href = "#";
    loginMenu.onclick = logout;
  } else {
    loginMenu.innerText = "Login";
    loginMenu.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loginUser");
  location.reload();
}

// Jalankan saat halaman dibuka
checkLogin();
