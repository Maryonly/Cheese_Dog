<?php
// Перевірка, чи була відправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримання даних з форми
    $last_name = $_POST["last-name"];
    $first_name = $_POST["first-name"];
    $phone_number = $_POST["phone-number"];
    $date_time = $_POST["date-time"];

    // Перевірка, чи дата та час не раніше ніж за годину від теперішнього часу
    $current_time = strtotime(date("Y-m-d H:i"));
    $selected_time = strtotime($date_time);
    if ($selected_time < $current_time + 3600) {
        echo "Виберіть дату та час не раніше ніж за годину від теперішнього часу";
        exit;
    }

    // Запис даних у файл
    $file = "orders.txt";
    $data = "$last_name $first_name $phone_number $date_time\n";
    file_put_contents($file, $data, FILE_APPEND);

    // Відповідаємо користувачеві
    echo "<script>alert('Дякуємо за замовлення! Очікуйте на дзвінок від менеджера');</script>";
    exit;
}
?>