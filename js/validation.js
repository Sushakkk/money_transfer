// Подключаем необходимые библиотеки, если вы используете модульную систему
// import Inputmask from "inputmask";
// import JustValidate from "just-validate";

// Применяем маску ввода для номера телефона
let telInput = document.querySelector("#tel");
let inputMask = new Inputmask("+7(999) 999-99-99");
inputMask.mask(telInput);

// Инициализируем JustValidate
let validator = new JustValidate("#form");

// Определяем правила валидации для каждого поля
validator.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введите ваше имя!",
  },
  {
    rule: "minLength",
    value: 2, // Исправлено на 2 символа
    errorMessage: "Имя должно содержать минимум 2 символа!",
  },
]);

validator.addField("#email", [
  {
    rule: "required",
    errorMessage: "Введите ваш Email!",
  },
  {
    rule: "email",
    errorMessage: "Введите корректный Email!",
  },
]);

validator.addField("#tel", [
  {
    validator: (value) => {
      const phone = telInput.inputmask.unmaskedvalue();
      return /^\d{10}$/.test(phone);
    },
    errorMessage: "Введите номер телефона полностью!",
  },
]);

validator.addField("#message", [
  {
    rule: "required",
    errorMessage: "Введите сообщение!",
  },
  {
    rule: "minLength",
    value: 8,
    errorMessage: "Сообщение должно содержать минимум 8 символов!",
  },
]);

// Обрабатываем отправку формы
validator.onSuccess(async function (event) {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  let data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    // tel: telInput.inputmask.unmaskedvalue(), // Используем unmaskedvalue
    tel: document.getElementById("tel").value,// Используем unmaskedvalue
    message: document.getElementById("message").value,
  };

  let resultElement = document.getElementById("result"); // Перемещаем сюда объявление переменной

  try {
    let response = await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    let result = await response.text();

    // Проверяем статус ответа сервера
    if (response.ok) {
      // Обработка успешного ответа
      resultElement.innerText = result;
      resultElement.classList.add("success");
      resultElement.classList.remove("error");
      
      // Очистка формы
      document.getElementById("form").reset();

      // Удаляем маску
      inputMask.remove();

      // Скрываем сообщение через 3 секунды
      setTimeout(() => {
        resultElement.innerText = "";
        resultElement.classList.remove("success");
      }, 3000);
    } else {
      // Обработка ошибки, если статус ответа не успешен
      throw new Error("Ошибка сети");
    }
  } catch (error) {
    // Обработка ошибки
    resultElement.innerText = "Произошла ошибка при отправке данных.";
    resultElement.classList.add("error");
    resultElement.classList.remove("success");
    console.error("Произошла ошибка при выполнении запроса:", error);
  }
});
