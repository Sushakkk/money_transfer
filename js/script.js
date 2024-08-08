const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');






burger.addEventListener('click', () => {
    burger.classList.toggle('active'); //при нажатии убирает или добавляет 
    menu.classList.toggle('active');
    body.classList.toggle('lock')

});


// подчеркивание активной ссылки в навигации
document.querySelector('.menu__list').addEventListener('click', function(e) {
    if (e.target.classList.contains('menu__link')) {
        e.preventDefault(); // Предотвращаем стандартное действие (перезагрузку страницы)
        document.querySelectorAll('.menu__link').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    }
});
