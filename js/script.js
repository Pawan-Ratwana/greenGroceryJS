const searchForm = document.querySelector('.search-form');
const shoppinCart = document.querySelector('.shopping-cart');
const cartLogin = document.querySelector('.cart-login');
const navbar = document.querySelector('.navbar');


/* ============ style for header section=================== */

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


const boxs = document.querySelectorAll('.box');
const moreContent = document.querySelector('.moreContent');

// show the readmore function
function showReadMore(btnId, btnClass) {
    btnId.onclick = () => {
        btnClass.classList.toggle('active');
        boxs.forEach((box) => {
            box.classList.add('hide')
        });
    }
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppinCart.classList.remove('active');
    cartLogin.classList.remove('active');
    navbar.classList.remove('active');
}

/* ============ style for readmore and readless=================== */

// show the quality feature
const qualityFeatureBtn = document.querySelector('#qualityFeatureBtn');
const qualityFeature = document.querySelector('#qualityFeature');
showReadMore(qualityFeatureBtn, qualityFeature)

// show the free delivery feature
const freeDeliveryBtn = document.querySelector('#freeDeliveryBtn');
const freeDelivery = document.querySelector('#freeDelivery');
showReadMore(freeDeliveryBtn, freeDelivery)

// show the easy payement feature
const ePaymentBtn = document.querySelector('#ePaymentBtn');
const ePayment = document.querySelector('#ePayment');
showReadMore(ePaymentBtn, ePayment);

// function for readLess
const readLess = document.querySelectorAll('.readLess')
readLess.forEach((read) => {
    read.onclick = () => {
        moreContent.classList.remove('active');
        freeDelivery.classList.remove('active');
        ePayment.classList.remove('active');
        boxs.forEach((box) => {
            box.classList.remove('hide')
        })
    }
})

