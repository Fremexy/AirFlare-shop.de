const cart = [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity}`;
    const priceSpan = document.createElement('span');
    priceSpan.textContent = `${item.price * item.quantity} €`;
    li.appendChild(priceSpan);
    cartItems.appendChild(li);
  });

  totalEl.textContent = total;
}

