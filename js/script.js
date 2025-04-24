let cart = [];

// Funktion zum Hinzufügen von Produkten zum Warenkorb
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: parseFloat(productPrice) });
    updateCartCount(); // Warenkorb-Anzeige aktualisieren
}

// Warenkorb-Anzeige aktualisieren
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // Anzahl der Artikel im Warenkorb
}

// Füge Ereignislistener zu allen "In den Warenkorb"-Buttons hinzu
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});
