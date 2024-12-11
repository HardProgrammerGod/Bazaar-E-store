// Cart array to store items
let cart = [];

// Function to toggle the theme between dark and light
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Function to handle tab switching
function openClothe(evt, clothName) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(clothName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsList = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Function to show the cart
function viewCart() {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
}
