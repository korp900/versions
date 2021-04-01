<?php
  $mysqli = new mysqli('localhost','korp9000_1','ee0U&9*k','korp9000_1');
  $name = $_POST['name'];
  $email= $_POST['email'];
  $text = $_POST['text'];
  mail('korp900@mail.ru','Тема письма', "\nИмя: $name\nE-mail: $email\n$text");
  echo 'success';
?>