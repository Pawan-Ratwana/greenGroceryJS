const searchForm = document.querySelector('.search-form');
const shoppinCart = document.querySelector('.shopping-cart');
const cartLogin = document.querySelector('.cart-login');
// to toggle the  search form bix
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

document.querySelector('#cart-btn').onclick = () => {
    console.log("Shopping cart click")
    shoppinCart.classList.toggle('active')
}
document.querySelector('#login-btn').onclick = () => {
    cartLogin.classList.toggle('active')
}

// document.addEventListener('click', () => {
//     searchForm.classList.remove('active');
//     shoppinCart.classList.remove('active');
//     console.log("local click")
// })
document.addEventListener('scroll', () => {
    searchForm.classList.remove('active');
    shoppinCart.classList.remove('active');
})