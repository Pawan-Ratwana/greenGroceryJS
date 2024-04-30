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
                <div class="box">
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