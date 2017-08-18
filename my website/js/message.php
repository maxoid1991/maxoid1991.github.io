<?php

$serverMail = "shameless.cansol@gmail.com";
$email = $_POST['email'];
$message = $_POST['message'];
$header = "Content-type: text/plain";

mail( $serverMail, $email, $message, $header );

echo 'Сообщение успешно отправлено.'
?>