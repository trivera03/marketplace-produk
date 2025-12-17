if(localStorage.getItem("login")!=="true"){
  location.href="admin.html";
}

const data = JSON.parse(localStorage.getItem("produk")) || [];

const ul = document.getElementById("adminList");

data.forEach((p,i)=>{
  ul.innerHTML+=`<li>${p.name} <button onclick="hapus(${i})">Hapus</button></li>`;
});

function hapus(i){
  data.splice(i,1);
  localStorage.setItem("produk",JSON.stringify(data));
  location.reload();
}

function logout(){
  localStorage.removeItem("login");
  location.href="admin.html";
}