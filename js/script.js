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

    //Works Slider

    let dots = document.querySelectorAll('.works__dot');
    let worksItems = document.querySelectorAll('.works__item')

    dots.forEach(function (elem, index) {
        elem.addEventListener('click', function() {
            if (!elem.classList.contains('works__dot_active')) {
                dots.forEach(elem => elem.classList.remove('works__dot_active'));
                elem.classList.add('works__dot_active');
                worksItems.forEach(e => e.classList.remove('works__item_active'));
                let count = index * 4;
                for (let i = count; i < count + 4; i++) {
                    worksItems[i].classList.add('works__item_active');
                }
            }
        })
    })
})