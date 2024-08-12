// let flag=false;

// document.addEventListener("DOMContentLoaded", function () {

//     // Маска для ввода номера телефона
//     const phoneInput = document.getElementById("phone");
//     const im = new Inputmask("+7 (999) 999-99-99");
//     im.mask(phoneInput);
  
//     // Валидация формы
//     const validation = new JustValidate("#form", {
//       errorFieldCssClass: "is-invalid",
//     });
  
//     validation
//       .addField("#name", [
//         {
//           rule: "required",
//           errorMessage: "Введите ваше ФИО",
//         },
//         {
//           rule: "minLength",
//           value: 3,
//           errorMessage: "ФИО должно содержать минимум 3 символа",
//         },
//         {
//           rule: "maxLength",
//           value: 100,
//           errorMessage: "ФИО должно содержать не более 100 символов",
//         },
//       ])
//       .addField("#email", [
//         {
//           rule: "required",
//           errorMessage: "Введите ваш Email",
//         },
//         {
//           rule: "email",
//           errorMessage: "Некорректный формат Email",
//         },
//       ])
//       .addField("#phone", [
//         {
//           rule: "required",
//           errorMessage: "Введите ваш телефон",
//         },
//         {
//           rule: "function",
//           validator: function (name, value) {
//             const phone = phoneInput.inputmask.unmaskedvalue();
//             return phone.length === 10;
//           },
//           errorMessage: "Некорректный номер телефона",
//         },
//       ])
//       .onSuccess(async () => {
//         submit()
        
// });

// });





// function submit(){
//     const form = document.getElementById('form');
//         const result = document.getElementById('result');

//     const formData = new FormData(form);
//   const object = Object.fromEntries(formData);
//   const json = JSON.stringify(object);
//   result.innerHTML = "Please wait..."

//     fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         })
//         .then(async (response) => {
//             let json = await response.json();
//             if (response.status == 200) {
//                 result.innerHTML = json.message;
//             } else {
//                 console.log(response);
//                 result.innerHTML = json.message;
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             result.innerHTML = "Something went wrong!";
//         })
//         .then(function() {
//             form.reset();
//             setTimeout(() => {
//                 result.style.display = "none";
//             }, 3000);
//         });
// }



  
 
        // // Маска для номера телефона
        // Inputmask({ mask: '+7 (999) 999-99-99' }).mask(document.getElementById('phone'));

        // const form = document.getElementById('form');
        // const result = document.getElementById('result');

        // form.addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     // Валидация полей
        //     const fio = document.getElementById('name').value.trim();
        //     const email = document.getElementById('email').value.trim();
        //     const phone = document.getElementById('phone').value.trim();

        //     const fioRegex = /^[A-Za-zА-Яа-я\s]+$/;
        //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

        //     if (!fio || !fioRegex.test(fio)) {
        //         result.innerHTML = "Введите корректное ФИО.";
        //         return;
        //     }

        //     if (!email || !emailRegex.test(email)) {
        //         result.innerHTML = "Введите корректный email.";
        //         return;
        //     }

        //     if (!phone || !phoneRegex.test(phone)) {
        //         result.innerHTML = "Введите корректный телефон.";
        //         return;
        //     }

        //     const formData = new FormData(form);
        //     const object = Object.fromEntries(formData);
        //     const json = JSON.stringify(object);
        //     result.innerHTML = "Please wait..."

        //     fetch('https://api.web3forms.com/submit', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         },
        //         body: json
        //     })
        //     .then(async (response) => {
        //         let json = await response.json();
        //         if (response.status == 200) {
        //             result.innerHTML = json.message;
        //         } else {
        //             console.log(response);
        //             result.innerHTML = json.message;
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         result.innerHTML = "Something went wrong!";
        //     })
        //     .then(function() {
        //         form.reset();
        //         setTimeout(() => {
        //             result.style.display = "none";
        //         }, 3000);
        //     });
        // });




    
    

