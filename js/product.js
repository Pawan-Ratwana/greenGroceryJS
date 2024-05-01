// Define the constructor function for products
function ProductItemContructor(id, name, price, image, rating,) {
    // Define properties for each product
    this.id = id;           // Unique identifier for the product
    this.name = name;       // Name of the product
    this.price = price;     // Price of the product
    this.image = image;     // URL of the product image
    this.rating = rating;   // Rating of the product
}

// Define array containing fruit products
let fruitProductList = [
    new ProductItemContructor(1, "Apple", 50, "/img/fruits/Apple.jpg", 1.5),
    new ProductItemContructor(2, "Banana", 40, "/img/fruits/Banana.jpg", 5),
    new ProductItemContructor(3, "Orange", 30, "/img/fruits/Orange.jpg", 4),
    new ProductItemContructor(4, "Mango", 90, "/img/fruits/Mango.jpg", 4.5),
    new ProductItemContructor(5, "Grape", 100, "/img/fruits/Grape.jpg", 3.5),
    new ProductItemContructor(6, "Pineapple", 180, "/img/fruits/Pineapple.jpg", 2.5),
    new ProductItemContructor(7, "Watermelon", 20, "/img/fruits/Watermelon.jpg", 1),
    new ProductItemContructor(8, "Strawberry", 150, "/img/fruits/Strawberry.jpg", 2.5),
    new ProductItemContructor(9, "Kiwi", 35, "/img/fruits/Kiwi.jpg", 2),
    new ProductItemContructor(10, "Peach", 190, "/img/fruits/Peach.jpg", 4.5),
]

// Define array containing vegetable products
let vegetableProductList = [
    new ProductItemContructor(1, "Tomato", 15, "/img/vegetable/Tomato.jpg", 3.5),
    new ProductItemContructor(2, "Potato", 15, "/img/vegetable/Potato.jpg", 3.5),
    new ProductItemContructor(3, "Carrot", 15, "/img/vegetable/Carrot.jpg", 3.5),
    new ProductItemContructor(4, "Onion", 15, "/img/vegetable/Onion.jpg", 3.5),
    new ProductItemContructor(5, "Cucumber", 15, "/img/vegetable/Cucumber.jpg", 3.5),
    new ProductItemContructor(6, "Spinach", 15, "/img/vegetable/Spinach.jpg", 3.5),
    new ProductItemContructor(7, "Green Bell Pepper", 15, "/img/vegetable/Green Bell Pepper.jpg", 3.5),
    new ProductItemContructor(8, "Broccoli", 15, "/img/vegetable/Broccoli.jpg", 3.5),
    new ProductItemContructor(9, "Cauliflower", 15, "/img/vegetable/Cauliflower.jpg", 3.5),
    new ProductItemContructor(10, "Lettuce", 15, "/img/vegetable/Lettuce.jpg", 3.5),
    new ProductItemContructor(11, "Garlic", 15, "/img/vegetable/Garlic.jpg", 3.5),
    new ProductItemContructor(12, "Eggplant", 15, "/img/vegetable/Eggplant.jpg", 3.5),
    new ProductItemContructor(13, "Green beans", 15, "/img/vegetable/Green beans.jpg", 3.5),
    new ProductItemContructor(14, "Zucchini", 15, "/img/vegetable/Zucchini.jpg", 3.5),
    new ProductItemContructor(15, "Radish", 15, "/img/vegetable/Radish.jpg", 3.5),
    new ProductItemContructor(16, "Pumpkin", 15, "/img/vegetable/Pumpkin.jpg", 3.5),
    new ProductItemContructor(17, "Sweet potato", 15, "/img/vegetable/Sweet potato.jpg", 3.5),
    new ProductItemContructor(18, "Peas", 15, "/img/vegetable/Peas.jpg", 3.5),
    new ProductItemContructor(19, "Mushroom", 15, "/img/vegetable/Mushroom.jpg", 3.5),
    new ProductItemContructor(20, "Corn", 15, "/img/vegetable/Corn.jpg", 3.5),
]

// Define array containing Dairy products
const dairyProductList = [
    new ProductItemContructor(1, "Milk", 65, "/img/Dairy/milk.jpg", 4.5),
    new ProductItemContructor(2, "Cheese", 65, "/img/Dairy/Cheese.jpg", 4.5),
    new ProductItemContructor(3, "Yogurt", 65, "/img/Dairy/Yogurt.jpg", 4.5),
    new ProductItemContructor(4, "Butter", 65, "/img/Dairy/Butter.jpg", 4.5),
    new ProductItemContructor(5, "Cream", 65, "/img/Dairy/Cream.jpg", 4.5),
    new ProductItemContructor(6, "Sour cream", 65, "/img/Dairy/Sour cream.jpg", 4.5),
    new ProductItemContructor(7, "Cottage cheese", 65, "/img/Dairy/Cottage cheese.jpg", 4.5),
    new ProductItemContructor(8, "Ice cream", 65, "/img/Dairy/Ice cream.jpg", 4.5),
    new ProductItemContructor(9, "Whipped cream", 65, "/img/Dairy/Whipped cream.jpg", 4.5),
    new ProductItemContructor(10, "Cream cheese", 65, "/img/Dairy/Cream cheese.jpg", 4.5),
    new ProductItemContructor(11, "Evaporated milk", 65, "/img/Dairy/Evaporated milk.jpg", 4.5),
    new ProductItemContructor(12, "Buttermilk", 65, "/img/Dairy/Buttermilk.jpg", 4.5),
    new ProductItemContructor(13, "Ghee", 65, "/img/Dairy/Ghee.jpg", 4.5),
    new ProductItemContructor(14, "Ricotta cheese", 65, "/img/Dairy/Ricotta cheese.jpg", 4.5),
    new ProductItemContructor(15, "Mascarpone cheese", 65, "/img/Dairy/Mascarpone cheese.jpg", 4.5),
    new ProductItemContructor(16, "Feta cheese", 65, "/img/Dairy/Feta cheese.jpg", 4.5),
    new ProductItemContructor(17, "Parmesan cheese", 65, "/img/Dairy/Parmesan cheese.jpg", 4.5),
    new ProductItemContructor(18, "Condensed milk", 65, "/img/Dairy/Condensed milk.jpg", 4.5),
    new ProductItemContructor(19, "Mozzarella cheese", 65, "/img/Dairy/Mozzarella cheese.jpg", 4.5),
    new ProductItemContructor(20, "Cheddar cheese", 65, "/img/Dairy/Cheddar cheese.jpg", 4.5),
]

/* ============ functionality for Display data on page=================== */
// Get references to the wrapper elements in the HTML
const fruitWrapper = document.getElementById("fruitWrapper");
const vegetableWrapper = document.getElementById("vegetableWrapper");
const dairyWrapper = document.getElementById("dairyWrapper");

// Function to generate HTML for a product element
function generateProductHtml(element, ClassName, idName) {
    // Generate HTML structure for each product item
    return `<div class="wrapper ${ClassName}" id="${idName}">
                <div class="box" data-id="${element.id}">
                    <div class="box-img">
                        <img src="${element.image}" alt="${element.image} image">
                    </div>
                    <div class="box-content">
                        <h3 class="box-content-heading">${element.name}</h3>
                        <p>Price: &#x20b9; ${element.price} </p>
                        <div class="star">${generateStarRatingHtml(element.rating)}</div>
                        <div class="btn">Add to cart</div>
                    </div>
                </div>
            </div>`
}

// Function to display fruit products on the page   
function displayFruitProduct() {
    // Clear previous content from the fruit wrapper
    fruitWrapper.innerHTML = '';
    // Iterate over each fruit product and generate HTML for display
    fruitProductList.forEach((fruit) => {
        const fruitProductHtml = generateProductHtml(fruit, fruitWrapper, fruitWrapper);
        fruitWrapper.innerHTML += fruitProductHtml;
    })
}

// Function to display vegetable products on the page
function displayVegetableProduct() {
    // Clear previous content from the vegetable wrapper
    vegetableWrapper.innerHTML = "";

    // Iterate over each vegetable product and generate HTML for display
    vegetableProductList.forEach((vegetable) => {
        const vegetableProductHtml = generateProductHtml(vegetable, vegetableWrapper, vegetableWrapper);
        vegetableWrapper.innerHTML += vegetableProductHtml;
    });
}

// Function to display Dairy products on the page
function displayDairyProduct() {
    // Clear previous content from the Dairy wrapper
    dairyWrapper.innerHTML = '';
    // Iterate over each Dairy product and generate HTML for display
    dairyProductList.forEach((dairy) => {
        const dairyProductHtml = generateProductHtml(dairy, dairyWrapper, dairyWrapper);
        dairyWrapper.innerHTML += dairyProductHtml;
    })
}

// Function to generate HTML for star ratings
function generateStarRatingHtml(rating) {
    // Calculate the number of full stars
    const fullStar = Math.floor(rating);
    // Check if there's a half star
    const halfStar = rating % 1 !== 0;
    // Generate HTML for full stars and, if applicable, a half star
    const starsHTML = '<i class="fa fa-star"></i>'.repeat(fullStar) + (halfStar ? '<i class="fa fa-star-half"></i>' : '');
    // Return the HTML for the star rating
    return starsHTML;
}

// Display fruit and vegetable products when the page loads
displayFruitProduct();
displayVegetableProduct();
displayDairyProduct();



/* ============ functionality for more product show and hide=================== */

// Get references to the "View All Product" buttons
const vegetablesMoreProductBtn = document.getElementById("vegetablesMoreProductBtn");
const fruitsMoreProductBtn = document.getElementById("fruitsMoreProductBtn");
const dairyMoreProductBtn = document.getElementById("dairyMoreProductBtn");

// Event listener for the "View All Product" button for fruits
function showFruitMoreProduct() {
    fruitsMoreProductBtn.addEventListener('click', () => {
        fruitWrapper.classList.toggle('active')
        showToggleWrapper(fruitWrapper, fruitsMoreProductBtn);


        vegetableWrapper.classList.remove('active');
        dairyWrapper.classList.remove('active');
        showToggleWrapper(vegetableWrapper, vegetablesMoreProductBtn);
        showToggleWrapper(dairyWrapper, dairyMoreProductBtn);

    })
}
showFruitMoreProduct()

// Event listener for the "View All Product" button for vegetables
vegetablesMoreProductBtn.addEventListener('click', () => {
    vegetableWrapper.classList.toggle('active');
    showToggleWrapper(vegetableWrapper, vegetablesMoreProductBtn);


    fruitWrapper.classList.remove('active');
    dairyWrapper.classList.remove('active');
    showToggleWrapper(fruitWrapper, fruitsMoreProductBtn);
    showToggleWrapper(dairyWrapper, dairyMoreProductBtn);
})

// Event listener for the "View All Product" button for Dairy Product
dairyMoreProductBtn.addEventListener('click', () => {
    dairyWrapper.classList.toggle('active');
    showToggleWrapper(dairyWrapper, dairyMoreProductBtn);

    fruitWrapper.classList.remove('active');
    vegetableWrapper.classList.remove('active');
    showToggleWrapper(fruitWrapper, fruitsMoreProductBtn);
    showToggleWrapper(vegetableWrapper, vegetablesMoreProductBtn);
});

// Function to toggle the text content of the "View All Product" buttons based on the active state of the wrapper
function showToggleWrapper(wrapper, button) {
    if (wrapper.classList.contains('active')) {
        button.textContent = "Show less";
    } else {
        button.textContent = "View All Product";
    }

}

/* ============ functionality to add item in cart=================== */

// Selecting necessary HTML elements
const listCartElement = document.querySelector('.listCart'); // Selecting the element that will display the cart items
const cartTotalElement = document.querySelector('.cart-total'); // Selecting the element that will display the total price

// Initializing arrays and combining product lists
let carts = []; // Array to store the items in the cart
let productList = fruitProductList.concat(vegetableProductList, dairyProductList); // Combining all product lists into one

// Function to handle click events on "Add to Cart" buttons
function addToCartEventListener(element) {
    element.addEventListener('click', (event) => { // Adding a click event listener to the specified element
        let positionClick = event.target; // Getting the clicked element
        if (positionClick.classList.contains('addToCartBtn')) { // Checking if the clicked element has the class 'addToCartBtn'
            let itemElement = positionClick.closest('.box'); // Finding the closest parent element with the class 'box'
            if (itemElement) { // Checking if a valid item element is found
                let product_id = itemElement.dataset.id; // Getting the product ID from the dataset of the item element
                addToCart(product_id); // Calling the addToCart function with the product ID
            }
        }
    });
}

// Attaching click event listeners to product wrappers
addToCartEventListener(fruitWrapper); // Attaching click event listener to fruit wrapper
addToCartEventListener(vegetableWrapper); // Attaching click event listener to vegetable wrapper
addToCartEventListener(dairyWrapper); // Attaching click event listener to dairy wrapper

// Function to add an item to the cart
const addToCart = (productId) => {
    let checkProductInCart = carts.findIndex((value) => value.product_id == productId); // Checking if the product is already in the cart

    // Adding the product to the cart based on whether it's already present or not
    if (carts.length <= 0) { // If the cart is empty
        carts = [{
            product_id: productId,
            quantity: 1
        }];
    } else if (checkProductInCart < 0) { // If the product is not in the cart
        carts.push({
            product_id: productId,
            quantity: 1
        });
    } else { // If the product is already in the cart
        carts[checkProductInCart].quantity = carts[checkProductInCart].quantity + 1; // Incrementing the quantity of the product in the cart
    }

    console.log(carts); // Logging the updated cart to the console
    addCartToHTML(); // Updating the cart view in HTML
    addToMemory(); // Storing the updated cart in local storage
}

// Function to store cart in local storage
const addToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts)); // Storing the cart array in local storage after converting it to a JSON string
}

// Function to update the cart view in HTML
const addCartToHTML = () => {
    // Clearing previous content from the cart and total price elements
    listCartElement.innerHTML = `<h3 class="center">No item</h3>`;
    cartTotalElement.innerHTML = '';
    let totalPrice = 0;

    // Iterating over each item in the cart and generating HTML for display
    if (carts.length > 0) {
        carts.forEach((cart) => {
            const newItem = document.createElement('div'); // Creating a new div element
            newItem.classList.add("row"); // Adding the 'row' class to the new div element
            newItem.dataset.id = cart.product_id; // Setting the dataset ID of the new div element to the product ID
            let productIndex = productList.findIndex((value) => value.id == cart.product_id); // Finding the index of the product in the product list
            let product = productList[productIndex]; // Getting the product details from the product list
            let itemPrice = product.price * cart.quantity; // Calculating the total price for the item
            totalPrice = totalPrice + itemPrice; // Updating the total price
            newItem.innerHTML = `<div class="shopping-cart-img">
            <img src="${product.image}" alt="">
        </div>
        <div class="shopping-cart-content">
            <h3>${product.name}</h3>
            <div class="cart-price-quantity">
                <span class="price">Rs.: &#x20b9; ${itemPrice}</span>
                <div class="cart-quantity">
                    <i class="fa-solid fa-minus minus"></i>
                    <span class="quantity">Qty : ${cart.quantity}</span>
                    <i class="fa-solid fa-plus plus"></i>
                </div>
            </div>
        </div>
        <div class="cart-delete-btn">
            <i class="fa fa-trash"></i>
        </div>`; // Generating HTML for the item and appending it to the new div element

            listCartElement.appendChild(newItem); // Appending the new div element to the cart element
        });
    }
    showTotalPrice(totalPrice); // Displaying the total price in the cart
}

// Function to display total price in the cart
function showTotalPrice(price) {
    cartTotalElement.innerHTML = `<h2>Total : &#x20b9;${price}/-</h2>`; // Displaying the total price in the cart total element
}

// Event listener for plus and minus buttons in the cart
listCartElement.addEventListener('click', (event) => {
    let positionClick = event.target; // Getting the clicked element
    if (positionClick.classList.contains('plus') || positionClick.classList.contains('minus')) { // Checking if the clicked element has the classes 'plus' or 'minus'
        let itemElement = positionClick.closest('.row'); // Finding the closest parent element with the class 'row'
        if (itemElement) { // Checking if a valid item element is found
            const product_id = itemElement.dataset.id; // Getting the product ID from the dataset of the item element
            let type = 'minus'; // Defaulting the type to 'minus'
            if (positionClick.classList.contains('plus')) { // Checking if the clicked element has the class 'plus'
                type = 'plus'; // Setting the type to 'plus'
            }
            changeQuantity(product_id, type); // Calling the changeQuantity function with the product ID and type
        }
    }
});

// Function to change quantity of items in the cart
const changeQuantity = (productId, type) => {
    let checkProductInCart = carts.findIndex((value) => value.product_id == productId); // Finding the index of the product in the cart
    if (checkProductInCart >= 0) { // Checking if the product is in the cart
        switch (type) {
            case 'plus': // If the type is 'plus'
                carts[checkProductInCart].quantity = carts[checkProductInCart].quantity + 1; // Incrementing the quantity of the product in the cart

                break;

            default: // If the type is not 'plus'
                let changeValue = carts[checkProductInCart].quantity - 1; // Calculating the new quantity value
                if (changeValue > 0) { // Checking if the new quantity is greater than 0
                    carts[checkProductInCart].quantity = changeValue; // Updating the quantity of the product in the cart
                } else { // If the new quantity is 0 or less
                    carts.splice(checkProductInCart, 1); // Removing the product from the cart
                }
                break;
        }
    }
    addCartToHTML(); // Updating the cart view in HTML
};

// Retrieving cart from local storage
if (localStorage.getItem('cart')) {
    carts = JSON.parse(localStorage.getItem('cart')); // Parsing the cart data from local storage
    addCartToHTML(); // Updating the cart view in HTML
}
