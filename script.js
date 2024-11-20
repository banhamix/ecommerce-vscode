let cart = [];

// Atualiza o carrinho e a exibição do número de itens
function updateCart() {
    const cartButton = document.getElementById("cartButton");
    const cartDetails = document.getElementById("cartDetails");
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartButton.textContent = `Carrinho (${cart.length})`;

    // Limpa os itens do carrinho
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - R$ ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
    cartDetails.style.display = cart.length > 0 ? 'block' : 'none';
}

// Função para adicionar produtos ao carrinho
function addToCart(event) {
    const product = event.target.getAttribute('data-product');
    const price = parseFloat(event.target.getAttribute('data-price'));

    cart.push({ product, price });
    updateCart();
}

// Função de simulação de pagamento
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    // Aqui você integraria uma API de pagamento real, tipo Stripe, PayPal ou Mercado Pago
    setTimeout(() => {
        alert('Pagamento realizado com sucesso! Obrigado pela compra!');
        cart = [];  // Limpa o carrinho após a compra
        updateCart();
    }, 1000);
}

// Adicionando eventos aos botões de "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Evento para finalizar a compra
document.getElementById('checkoutButton').addEventListener('click', checkout);
