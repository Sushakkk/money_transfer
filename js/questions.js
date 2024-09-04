 // Массив с вопросами и ответами
 const faqData = [
    {
        question: "Какие сроки проведения международных переводов?",
        answer: "Мы отправляем валютную заявку в срок не более 3-х рабочих дней. На текущий момент деньги зачисляются контрагенту обычно в течение 2-3 дней, но иногда бывают задержки в зачислении до 7 рабочих дней."
    },
    {
        question: "Какой сервис вы оказываете?",
        answer: "Мы оказываем сервис платежного агента и осуществляем платежи за абсолютно любую продукцию в любую точку мира."
    },
    {
        question: "Как ваш сервис справляется с ограничениями и санкциями?",
        answer: "Мы используем для платежей банки иностранного государства не подпадающие под санкции и ограничения."
    },
    {
        question: "Не противоречит ли такой перевод законодательству?",
        answer: "Мы действуем полностью в рамках действующего законодательства РФ."
    },
    {
        question: "Каковы условия оплаты и коммиссии за ваши услуги?",
        answer: "За свои услуги мы списываем комиссию 3,5% с суммы перевода и 150 долларов за платеж. Валюта покупается по курсу банка."
    }
    // Добавьте больше объектов по аналогии
];

// Функция для генерации HTML для вопросов и ответов
function loadFaq() {
const faqContainer = document.getElementById('faq-container');

faqData.forEach(item => {
const faqItem = document.createElement('div');
faqItem.classList.add('faq-item');

const questionButton = document.createElement('button');
questionButton.classList.add('faq-question');
questionButton.textContent = item.question;  // Вопрос без символа



const answerDiv = document.createElement('div');
answerDiv.classList.add('faq-answer');

const pElement = document.createElement('p');
pElement.textContent = item.answer;
pElement.classList.add('faq-answer__item'); // Убедитесь, что класс добавлен

answerDiv.appendChild(pElement);


answerDiv.appendChild(pElement);

questionButton.addEventListener('click', function() {
    this.classList.toggle('active');
    if (answerDiv.style.maxHeight) {
        answerDiv.style.maxHeight = null;
    } else {
        answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
    }
});

faqItem.appendChild(questionButton);
faqItem.appendChild(answerDiv);
faqContainer.appendChild(faqItem);
});
}
// Загружаем FAQ при загрузке страницы
document.addEventListener("DOMContentLoaded", loadFaq);