const products = [
  {id:1,name:"Ayam",price:25000,img:"assets/img/ayam.jpg"},
  {id:2,name:"Sapi",price:15000000,img:"assets/img/sapi.jpg"},
  {id:3,name:"Kambing",price:3000000,img:"assets/img/kambing.jpg"},
  {id:4,name:"Bebek",price:40000,img:"assets/img/bebek.jpg"},
  {id:5,name:"Burung",price:50000,img:"assets/img/burung.jpg"},
  {id:6,name:"Domba",price:2800000,img:"assets/img/domba.jpg"},
  {id:7,name:"Ikan",price:20000,img:"assets/img/ikan.jpg"},
  {id:8,name:"Kelinci",price:75000,img:"assets/img/kelinci.jpg"},
  {id:9,name:"Lele",price:18000,img:"assets/img/lele.jpg"}
];

let cart = [];

const list = document.getElementById("product-list");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>Rp ${p.price.toLocaleString()}</p>
    <button onclick="addCart(${p.id})">Tambah</button>
  `;
  list.appendChild(div);
});

function addCart(id){
  cart.push(products.find(p=>p.id===id));
  renderCart();
}

function renderCart(){
  const ul = document.getElementById("keranjang");
  ul.innerHTML = "";
  let total = 0;
  cart.forEach(p=>{
    total+=p.price;
    ul.innerHTML += `<li>${p.name} - Rp ${p.price.toLocaleString()}</li>`;
  });
  document.getElementById("totalHarga").innerText = total.toLocaleString();
}

function checkoutWA(){
  if(cart.length===0){ alert("Keranjang kosong"); return;}
  let text="Saya ingin membeli:%0A";
  cart.forEach(p=> text+=`- ${p.name}%0A`);
  window.open("https://wa.me/081553394632?text="+text);
}