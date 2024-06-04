<?php

logout();
header('Location: index.html');

session_start();
// require 'src/login.php';
// require __DIR__ . './login.php';
require __DIR__ . '/../views/login.php';


// function logout() {
//     // Завершуємо сесію
//     session_unset(); // видаляє всі змінні сесії
//     session_destroy(); // завершення сесії
// }


// exit;
?>