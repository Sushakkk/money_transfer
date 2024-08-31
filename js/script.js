const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const main_menu = document.querySelector('.menu');
const body = document.querySelector('body'); // Добавьте эту строку, чтобы определить body

main_menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link') || e.target.classList.contains('button_main')) {
        burger.classList.toggle('active'); //при нажатии убирает или добавляет 
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    }
});

burger.addEventListener('click', () => {
    burger.classList.toggle('active'); //при нажатии убирает или добавляет 
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});

// подчеркивание активной ссылки в навигации
document.querySelector('.menu__list').addEventListener('click', function(e) {
    if (e.target.classList.contains('menu__link')) {
        document.querySelectorAll('.menu__link').forEach(link => link.classList.remove('active_link'));
        e.target.classList.add('active_link');
    }
});



// ex---------------------------------------ССылки--------------------------------------------------



// function Links(button_id, to_id, url_name){
//     document.getElementById(button_id).addEventListener('click', function(event) {
//         event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    
//         const targetElement = document.getElementById(to_id);
        
//         // Плавная прокрутка до элемента
//         targetElement.scrollIntoView({ behavior: 'smooth' });
    
//         // Изменение URL без якоря
//         const newUrl = `/${url_name}`; // Новый URL без якоря
//         history.replaceState(null, '', newUrl); // Обновляем текущую запись в истории
//     });
    

// }
// Links('ApplicationLink', 'form_container', 'form')
// Links('ApplicationLink_Main', 'form_container', 'form')
// Links('MainLink', 'main', 'home')
// Links('AboutLink', 'about', 'about')
// Links('AboutLink_Main', 'about', 'about')
// Links('ContactsLink', 'contacts', 'contacts')
// Links('ServicesLink', 'services', 'services')


