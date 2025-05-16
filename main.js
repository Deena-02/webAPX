const products = [
  { id: 1, name: "Shoes", price: 49.99 },
  { id: 2, name: "Hat", price: 19.99 },
];

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "<h2>Products</h2>";
  products.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${product.name} - $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

let cart = [];

function addToCart(productId) {
  const item = products.find(p => p.id === productId);
  cart.push(item);
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById("cart-items");
  cartEl.innerHTML = cart.map(item => <p>${item.name} - $${item.price}</p>).join("");
}

renderProducts();