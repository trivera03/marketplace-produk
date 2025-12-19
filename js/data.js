const products = [
  {
    id: 1,
    name: "Pakan Ayam",
    price: 500000,
    description: "Pakan terbaik",
    image: "img/Pakan ayam.jpeg"
  },
  {
    id: 2,
    name: "Pakan Anjing",
    price: 100000,
    description: "Pakan Terbaik",
    image: "img/Pakan-Anjing.jpg"
  },
  {
    id: 3,
    name: "Pakan Burung",
    price: 300000,
    description: "Pakan Terbaik",
    image: "img/Pakan-Burung.jpg"
  },
  {
    id: 4,
    name: "Pakan Kucing",
    price: 500000,
    description: "Pakan Terbaik",
    image: "img/Pakan-Kucing.jpg"
  }
];

localStorage.setItem("products", JSON.stringify(products));
