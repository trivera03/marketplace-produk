// Ganti foto utama
function changePhoto(src) {
    document.getElementById("mainPhoto").src = src;
}

// Validasi Form
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    // Ambil nilai input
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let jumlah = document.getElementById("jumlah").value;
    let bayar = document.getElementById("pembayaran").value;

    // Validasi
    if (nama === "") {
        document.getElementById("errNama").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errNama").style.display = "none";
    }

    if (alamat === "") {
        document.getElementById("errAlamat").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errAlamat").style.display = "none";
    }

    if (jumlah <= 0 || jumlah === "") {
        document.getElementById("errJumlah").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errJumlah").style.display = "none";
    }

    if (bayar === "") {
        document.getElementById("errBayar").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errBayar").style.display = "none";
    }

    // Jika valid
    if (valid) {
        alert("Pesanan berhasil dikirim!");
        document.getElementById("orderForm").reset();
    }
});
