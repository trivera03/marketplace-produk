document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('order-form');
  const result = document.getElementById('order-result');

  // Fitur Form Pemesanan Produk
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form['buyer-name'].value.trim();
      const qty = Number(form['qty'].value);

      if (!name) {
        result.textContent = 'Nama pembeli wajib diisi.';
        result.style.color = 'crimson';
        return;
      }

      if (!Number.isInteger(qty) || qty < 1) {
        result.textContent = 'Jumlah harus angka minimal 1.';
        result.style.color = 'crimson';
        return;
      }

      result.style.color = 'green';
      result.textContent = 'Terima kasih ${name}, pesanan ${qty} produk telah diterima (simulasi).';
      form.reset();
    });
  }

  // Fitur Search Produk
  const search = document.getElementById('search-input');

  if (search) {
    search.addEventListener('input', function () {
      const q = search.value.toLowerCase();
      const products = document.querySelectorAll('.product');

      products.forEach((card) => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        card.style.display = title.includes(q) ? '' : 'none';
      });
    });
  }
});