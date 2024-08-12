const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

const main_menu = document.querySelector('.menu');



main_menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link') || (e.target.classList.contains('button_main'))) {
        burger.classList.toggle('active'); //при нажатии убирает или добавляет 
        menu.classList.toggle('active');
        body.classList.toggle('lock')
    }

});





burger.addEventListener('click', () => {
    burger.classList.toggle('active'); //при нажатии убирает или добавляет 
    menu.classList.toggle('active');
    body.classList.toggle('lock')

});


// подчеркивание активной ссылки в навигации
document.querySelector('.menu__list').addEventListener('click', function(e) {
    if (e.target.classList.contains('menu__link')) {
        e.preventDefault(); // Предотвращаем стандартное действие (перезагрузку страницы)
        document.querySelectorAll('.menu__link').forEach(link => link.classList.remove('active_link'));
        e.target.classList.add('active_link');
    }
});
