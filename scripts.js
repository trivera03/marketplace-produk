let keranjang = [];
let total = 0;

function tambahKeKeranjang(nama, harga) {
  keranjang.push({ nama, harga });
  updateKeranjang();
  tampilToast();
}

function updateKeranjang() {
  const list = document.getElementById("keranjang");
  list.innerHTML = "";
  total = 0;

  keranjang.forEach((item, index) => {
    total += item.harga;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nama} - Rp ${item.harga.toLocaleString()}
      <button onclick="hapusItem(${index})">❌</button>
    `;
    list.appendChild(li);
  });

  updateTotal();
}

function hapusItem(index) {
  keranjang.splice(index, 1);
  updateKeranjang();
}

function updateTotal() {
  const jumlah = document.getElementById("jumlah").value;
  const totalAkhir = total * jumlah;
  document.getElementById("totalHarga").textContent = totalAkhir.toLocaleString();
  document.getElementById("totalCheckout").textContent = totalAkhir.toLocaleString();
}

function bukaModal() {
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  document.getElementById("modal").style.display = "flex";
}

function tutupModal() {
  document.getElementById("modal").style.display = "none";
}

function prosesCheckout() {
  alert("Pesanan berhasil (simulasi)");
  keranjang = [];
  updateKeranjang();
  tutupModal();
}

function tampilToast() {
  const toast = document.getElementById("toast");
  toast.style.display = "block";
  setTimeout(() => toast.style.display = "none", 2000);
}
     
