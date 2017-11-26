<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$street = $_POST['user_street'];
$home = $_POST['user_home'];
$block = $_POST['user_block'];
$room = $_POST['user_room'];
$floor = $_POST['user_floor'];
$message = $_POST['user_message'];
$pay = $_POST['pay_option'];

$disturb = $_POST['dont_disturb']; // disturb_no или null
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li style="background: #FFD700">Способ оплаты: ' . $pay . '</li>
                <li style="background: #D2B48C">Нужно ли перезванивать: ' . $disturb . '</li>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $home . '</li>
                <li>Корпус: ' . $block . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Квартира: ' . $room . '</li>
                <li>Сообщение: ' . $message . '</li>
            </ul>
        </body>
    </html>    
    ';

$headers = "From: Сайта <burger@burger.ru>\r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('shadow-blood@yandex.ru', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
} else {
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);