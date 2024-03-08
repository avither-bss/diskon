function applyDiscount() {
    var discount = Math.floor(Math.random() * 51); // Random discount between 0% and 50%
    document.getElementById('discountDisplay').textContent = discount + '%';
    document.getElementById('discountButton').disabled = true; // Disable the button after clicking
}
