<?php

$db = mysql_connect("localhost", "maxim", "123");
mysql_select_db("groovy", $db);

//Кодировка Кириллицей
mysql_query("SET NAMES utf8");

//Если сервер не поддерживем глобальные переменны в GET и POST;

if (isset($_POST['author'])) {$author = $_POST['author']; }
if (isset($_POST['text'])) {$text = $_POST['text']; }
if (isset($_POST['pr'])) {$pr = $_POST['pr']; }
if (isset($_POST['sub_com'])) {$sub_com = $_POST['sub_com']; }
if (isset($_POST['id'])) {$id = $_POST['id']; }

//Проверяем ли заполнены все поля

//1. Проверяем нажата ли кнопка submit в форме - $sub_com

if(isset($sub_com)) {

	if (isset($author)) {
        //обрезаем пробелы в строке через функцию trim
		trim($author);
	}

	else {
		//Если переменной нет, то создаем ее с нулевым значением.
        $author = '';
	}
    
    //Тоже самое для переменной Text
	if (isset($text)) {
        //обрезаем пробелы в строке через функцию trim
		trim($text);
	}

	else {
		//Если переменной нет, то создаем ее с нулевым значением.
        $text = '';
	}

//Если поля текст и автор пустые, то выдавать ошибку и просить заполнить поля.
	if(empty($author) or empty($text)) {
		exit('<p>Вы ввели не всю информацию, вернитесь назад и заполните все поля.</p><br><input name="back" type="button" value="Вернуться назад" onclick="javascript:history.back();">');
	}

// Удаляет экранирующие бэкслэши. (\' преобразуется в ', и т.д.). 
	$author = stripcslashes($author);
	$text = stripcslashes($text);

//Удаляем все лишние символы из ячейки $author функцией stripcslashes

	$author = htmlspecialchars($author);
	$text = htmlspecialchars($text);

//Проверяем сумму с картинки
	$result = mysql_query("SELECT sum FROM comment_set", $db);
	$myrow = mysql_fetch_array($result);


	if ($pr) {

		$date = date("Y-m-d");

		// Вставляем инфу в таблицу - в таблицу comments в ячейки post и тд значения - id и т.д.
		$result2 = mysql_query("INSERT INTO comments (post, author, text, date) VALUES ('$id', '$author', '$text', '$date')", $db);

//Перезагружаем страницу после отправки комментария из формы.
		echo "<html><head><meta http-equiv='Refresh' content='0; URL=view_post.php?id=$id'></head></html>";
		exit();

	}

	else {
		exit('<p>Вы ввели неверную сумму цифр с картинки на предыдущей странице.</p><br><input name="back" type="button" value="Вернуться назад" onclick="javascript:history.back();">');
	}

}

?>