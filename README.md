# Marketplace Produk (Tugas CI/CD)

Project sederhana: halaman HTML statis untuk marketplace produk + konfigurasi CI (GitHub Actions).

## Cara pakai (lokal)
1. Clone repo
2. Jalankan npm install
3. Buka index.html di browser (atau gunakan Live Server)
4. Untuk cek manual:
   - npm run lint:html  -- htmlhint
   - npm run validate:html -- html-validator-cli
   - npm run accessibility -- pa11y-ci

## CI/CD
Terdapat workflow GitHub Actions di .github/workflows/ci.yml. Workflow berjalan pada event push dan pull_request ke main dan menjalankan lint, validator, dan accessibility check.

## Catatan
- Tools dev menggunakan Node.js (hanya untuk linting/validasi). Konten tetap statis HTML/CSS/JS.
- Anda dapat tambahkan test tambahan (contoh: link-checker, Lighthouse, integrasi unit test JS) sesuai kebutuhan tugas.