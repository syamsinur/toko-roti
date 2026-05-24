const itemNav = document.querySelector('#item-nav');
const hamburgerBtn = document.querySelector('#hamburger');

hamburgerBtn.addEventListener('click', function() {
    itemNav.classList.toggle('active');
    hamburgerBtn.preventDefault();
});

document.addEventListener('click', function(e) {
    if(!hamburgerBtn.contains(e.target) && !itemNav.contains(e.target)) {
        itemNav.classList.remove('active');
    }
});