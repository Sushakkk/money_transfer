const form = document.getElementById("form");
const result = document.getElementById("result");

// Маска для номера телефона
Inputmask({ mask: "+7 (999) 999-99-99" }).mask(document.getElementById("tel"));


form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Очистка предыдущих сообщений об ошибках
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";

  // Валидация полей
  const fio = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("tel").value.trim();

  const fioRegex = /^[A-Za-zА-Яа-я\s]+$/;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  let hasError = false;

  if (!fio || !fioRegex.test(fio) || fio.length < 10) {
    document.getElementById("nameError").textContent = "Введите корректное ФИО.";
    hasError = true;
  }

  if (!email || !emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Введите корректный email.";
    hasError = true;
  }

  if (!phone || !phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Введите корректный телефон.";
    hasError = true;
  }

  if (hasError) return;

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Пожалуйста, подождите...";
  result.classList.add("result-message");

  // Первый запрос
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...object,
      access_key: "57586578-4ef8-4215-86d2-44e2823a8b07", // Замените на первый ключ
    }),
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status === 200) {
        result.innerHTML = "Сообщение отправлено успешно!";
        result.classList.add("success");
        result.classList.remove("error");
      } else {
        result.innerHTML = json.message;
        result.classList.add("error");
        result.classList.remove("success");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Что-то пошло не так!";
      result.classList.add("error");
      result.classList.remove("success");
    })
    .then(() => {
      // Второй запрос
      return fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...object,
          access_key: "6b3fb78f-1b41-4656-abe8-65c5c43acfc2", // Замените на второй ключ
        }),
      });
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status === 200) {
        result.innerHTML = "Сообщение отправлено на второй email успешно!";
        result.classList.add("success");
        result.classList.remove("error");
      } else {
        result.innerHTML = json.message;
        result.classList.add("error");
        result.classList.remove("success");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Что-то пошло не так с отправкой на второй email!";
      result.classList.add("error");
      result.classList.remove("success");
    })
    .finally(() => {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
