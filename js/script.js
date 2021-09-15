document.addEventListener('DOMContentLoaded', function() {
    //Burger
    document.querySelector('.burger__icon').addEventListener('click', function() {
        document.querySelector('.burger__icon').classList.toggle('burger__icon_active');
        document.querySelector('.burger__menu').classList.toggle('burger__menu_active');
    })

    document.querySelectorAll('.burger__menu-link').forEach(function(selectLink) {
        selectLink.addEventListener('click', function() {
            document.querySelector('.burger__icon').classList.toggle('burger__icon_active');
            document.querySelector('.burger__menu').classList.toggle('burger__menu_active');
        })
    })

    //Scroll
    let links = document.querySelectorAll('a[href*="#"]')

    links.forEach(function(elem) {
        elem.addEventListener('click', function(e) {
            e.preventDefault();

            let selectedLink = elem.getAttribute('href').substr(1);

            document.getElementById(selectedLink).scrollIntoView({
                behavior: "smooth",
                block: 'start'
            })
        })
    })
})