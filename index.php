<?php
// Data produk pakan ternak
$produk = [
    ["nama" => "Pakan Ayam Petelur", "harga" => "Rp 250.000", "deskripsi" => "Pakan bernutrisi tinggi untuk ayam petelur"],
    ["nama" => "Pakan Sapi Potong", "harga" => "Rp 500.000", "deskripsi" => "Meningkatkan bobot sapi secara optimal"],
    ["nama" => "Pakan Kambing", "harga" => "Rp 300.000", "deskripsi" => "Mendukung pertumbuhan dan kesehatan kambing"]
];
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Website Pakan Ternak</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f4f6f8;
        }

        header {
            background-color: #2e7d32;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .search-bar {
            margin: 20px;
            text-align: center;
        }

        .search-bar input {
            width: 60%;
            padding: 10px;
            font-size: 16px;
        }

        .container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
        }

        .card {
            background-color: white;
            width: 250px;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .card h3 {
            margin-top: 0;
            color: #2e7d32;
        }

        .card p {
            font-size: 14px;
        }

        .card .harga {
            font-weight: bold;
            margin-top: 10px;
        }

        footer {
            background-color: #2e7d32;
            color: white;
            text-align: center;
            padding: 10px;
            margin-top: 20px;
        }
    </style>
</head>

<body>

<header>
    <h1><?php echo "Website Pakan Ternak"; ?></h1>
    <p><?php echo "Solusi pakan berkualitas untuk peternak Indonesia"; ?></p>
</header>

<div class="search-bar">
    <input type="text" placeholder="Cari pakan ternak...">
</div>

<div class="container">
    <?php
    foreach ($produk as $p) {
        echo "
        <div class='card'>
            <h3>{$p['nama']}</h3>
            <p>{$p['deskripsi']}</p>
            <p class='harga'>{$p['harga']}</p>
        </div>
        ";
    }
    ?>
</div>

<footer>
    <?php echo "© 2025 Website Pakan Ternak"; ?>
</footer>

</body>
</html>
