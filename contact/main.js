// Додавання події на відправку форми
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Отримання даних з форми
    var lastName = document.getElementById("last-name").value;
    var firstName = document.getElementById("first-name").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var dateTime = document.getElementById("date-time").value;

    // Створення об'єкта для відправки даних на сервер
    var formData = new FormData();
    formData.append("last-name", lastName);
    formData.append("first-name", firstName);
    formData.append("phone-number", phoneNumber);
    formData.append("date-time", dateTime);

    // Відправка даних на сервер
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_data.php", true);
    xhr.send(formData);
});