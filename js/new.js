window.onload = function () {
    const navbar = document.querySelector('.navbar');
    const nav_btn = document.querySelector('.nav-btn');
    const mob_nav = document.querySelector('.mob-nav');

    nav_btn.addEventListener('click',function(){

        navbar.classList.toggle('is-active');
        nav_btn.classList.toggle('is-active');
        mob_nav.classList.toggle('is-active');

    });
}