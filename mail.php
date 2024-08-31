<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получение данных
$json = file_get_contents('php://input'); // Получение json строки
$data = json_decode($json, true); // Преобразование json

// Данные
$name = $data['name'];
$email = $data['email'];
$tel = $data['tel'];
$message = $data['message'];


// Контент письма
$title = 'Заявка с сайта PHP'; // Название письма
$body = '
<style>
  .title-letter {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px; /* Отступ снизу после заголовка */
  }
  .info {
    margin-top: 20px; /* Отступ сверху перед информацией */
  }
  .info p {
    margin: 5px 0; /* Отступы между строками информации */
  }
  .info strong {
    font-weight: bold;
  }
</style>
<p class="title-letter">Новая заявка с сайта!</p>
<div class="info">
  <p>ФИО: <strong>'.$name.'</strong></p>
  <p>Email: <strong>'.$email.'</strong></p>
  <p>Телефон: <strong>'.$tel.'</strong></p>
  <p>Сообщение: '.$message.'</p>
</div>';
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

  // Настройки почты отправителя
  $mail->Host       = 'smtp.yandex.com'; // SMTP сервера вашей почты
  $mail->Username   = 'zheskarkarpov@yandex.ru'; // Логин на почте
  $mail->Password   = 'glbeqlppualzsfca'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('zheskarkarpov@yandex.ru', 'Заявка с сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('ksenia.karpova.4@mail.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send('d');

  // Сообщение об успешной отправке
  echo ('Сообщение отправлено успешно!');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено! Причина ошибки: {$mail->ErrorInfo}');
}
