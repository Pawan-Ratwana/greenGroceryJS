const searchForm = document.querySelector('.search-form');
const shoppinCart = document.querySelector('.shopping-cart');
const cartLogin = document.querySelector('.cart-login');
const navbar = document.querySelector('.navbar');
// to toggle the  search form bix
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppinCart.classList.remove('active');
    cartLogin.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    shoppinCart.classList.toggle('active');
    cartLogin.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
document.querySelector('#login-btn').onclick = () => {
    cartLogin.classList.toggle('active')
    navbar.classList.remove('active')
    shoppinCart.classList.remove('active')
    searchForm.classList.remove('active')
}


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartLogin.classList.remove('active');
    shoppinCart.classList.remove('active');
    searchForm.classList.remove('active');

}

// document.addEventListener('click', () => {
//     searchForm.classList.remove('active');
//     shoppinCart.classList.remove('active');
//     console.log("local click")
// })
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppinCart.classList.remove('active');
    cartLogin.classList.remove('active');
    navbar.classList.remove('active');
}