<?php
session_start();
// require './auth.php';
// require 'views/subscription.php';
require __DIR__ . '/auth.php';
// require __DIR__ . '/../src/auth.php';
require __DIR__ . '/../views/subscription.php';

// Авторизуємо користувача, якщо в запиті є логін і пароль
if (isset($_POST['login']) && isset($_POST['password'])) {
    login($_POST['login'], $_POST['password']);
   }
?>

<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 <meta name="description" content="">
    <title>Log In</title>
    <!-- <link rel="stylesheet" href="assets/css/style-registration.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body class="vh-100">
    <?php if (isAuthorized()) : ?>
        <?php require __DIR__ . '/../views/admin.php'; ?>
    <?php else : ?>
        <?php require __DIR__ . '/../views/login.php'; ?>
    <?php endif; ?>
    
</body>

</html>