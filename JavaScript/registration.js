console.log(jQuery().jquery);
// Submit subscription form using Ajax
$('#registration_form').on('submit', function (e) {
 e.preventDefault();
 var $form = $(this);
 $.ajax({
 type: 'POST',
 url: 'subscription_ajax.php',
 data: $form.serialize()
 }).done(function () {
 $form[0].reset()
 alert('Реєстрація пройшла успішно!')
 }).fail(function () {
 alert('Щось пішло не так!')
 });
});
