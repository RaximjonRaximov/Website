 // Initialize an empty cart
    let cart = [];

    // Function to add item to cart
    function addToCart(item) {
        // Check if the item already exists in the cart
        const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
        if (existingItemIndex > -1) {
            // If it exists, increase the quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // If it doesn't exist, add it to the cart
            cart.push({ ...item, quantity: 1 });
        }
        updateCartDisplay();
    }

    // Function to update the cart display
    function updateCartDisplay() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

        // Update the cart count in the navbar
        document.querySelector('.fa-shopping-bag + span').innerText = cartCount;

        // If you have a cart page, you can update the cart details here
        console.log('Cart:', cart); // For debugging
        console.log('Total:', cartTotal); // For debugging
    }

    // Attach event listeners to all "Add to cart" buttons
    document.querySelectorAll('.fruite-item .btn').forEach(button => {
        button.addEventListener('click', function() {
            // Get the fruit item details
            const fruitItem = this.closest('.fruite-item');
            const fruitName = fruitItem.querySelector('h4').innerText;
            const fruitPrice = parseFloat(fruitItem.querySelector('.fs-5').innerText.replace('$', '').trim());

            // Create an item object
            const item = {
                name: fruitName,
                price: fruitPrice
            };

            // Call the addToCart function
            addToCart(item);
        });
    });