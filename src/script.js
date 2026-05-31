// navigasi
const itemNav = document.querySelector('#item-nav');
const hamburgerBtn = document.querySelector('#hamburger');

hamburgerBtn.addEventListener('click', function(e) {
    itemNav.classList.toggle('active');
    e.preventDefault();
});

// search
const searchButton = document.querySelector('#search-btn');
const searchForm = document.querySelector('#search-form');
const searchBox = document.querySelector('#search-box');

searchButton.addEventListener('click', function(e) {
    searchForm.classList.toggle('search-active');
    searchBox.focus();
    e.preventDefault();
});

// shopping cart
const shoppingBtn = document.querySelector('#shopping-btn');
const shoppingCart = document.querySelector('#shopping-cart');

shoppingBtn.addEventListener('click', function(e) {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
});

document.addEventListener('click', function(e) {
    if(!hamburgerBtn.contains(e.target) && !itemNav.contains(e.target)) {
        itemNav.classList.remove('active');
    }

    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('search-active');
    }

    if(!shoppingBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


