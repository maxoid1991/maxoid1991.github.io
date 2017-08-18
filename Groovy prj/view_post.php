<?php

//Подключение на Hostinger

//$db = mysql_connect("localhost", "u961509047_maxim", "MaximK1991");
//mysql_select_db("u961509047_groov", $db);

$db = mysql_connect("localhost", "maxim", "123");
mysql_select_db("groovy", $db);

//Кодировка Кириллицей

mysql_query("SET NAMES utf8");

//Глобальную переменную делаем локальной, если нет айди то присваиваем ей номер 1.
if(isset($_GET['id'])) {$id = $_GET['id']; }
if (!isset($id)) {$id = 1; }

$result = mysql_query("SELECT * FROM articles WHERE id = '$id'", $db);
$myrow = mysql_fetch_array($result);

//Берем значение view, прибавляем 1.
$myview = $myrow['view'] + 1;


//Обновляем значение view в таблице.
$update = mysql_query("UPDATE articles SET view='$myview' WHERE id='$id'", $db);


?>


<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title><? echo $myrow['title']; ?></title> 

    <!--Styles-->
    <link rel="stylesheet" href="styles_post.css">

    <!--Google font-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,800,300italic&subset=latin,cyrillic' rel='stylesheet' type='text/css'> 

    <link href="https://fonts.googleapis.com/css?family=Didact+Gothic" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src='js/validate.js'></script>
    <script src='js/view_js.js'></script>

    <!--Device width-->
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, user-scalable=no, maximum-scale=1.0">
    
</head>
<body>
    <div class="close_button"><img src='post_images/close.png' class='krestik'></div>
	<div class='page'>
<?php

//Узнаем кол-во комментов по id новости:


$result7 = mysql_query("SELECT post FROM comments WHERE post='$id'", $db);
$myrow7 = mysql_fetch_array($result7);


printf("

	  <div class='news_block'>
	    <img src='%s' class='main_photo'>
	    <div class='title_bg'>
	       <p class='title'><b>%s</b></p>
	    </div>
	      <div class='block_info'>
	        <div class='icon icon1'><div class='img'></div><p class='txt_inf'><b>%s</b></p></div>
	        <div class='icon icon2'><div class='img img2'></div><p class='txt_inf'><b>%s</b></p></div>
	        <div class='icon icon3'><div class='img img3'></div><p class='txt_inf'><b>%s</b></p></div>
	        <div class='icon'><div class='img img4'></div><p class='txt_inf'><b>%s</b></p></div>
	      </div>

	      <div class=text>
	         <p class='article'> %s<br><br></p>
	      </div>
	  </div>
	  ", $myrow['img_folder'], $myrow['title'], $myrow['view'], mysql_num_rows($result7), $myrow['date'], $myrow['author'], $myrow['text']
	 );


//Выводим сумму с картинки

$result2 = mysql_query("SELECT link FROM comment_set", $db);
$myrow2 = mysql_fetch_array($result2);

?>



<!--Выводим блок новостей с похожей тематикой-->

<div class='Sim_N'><br>
<p class='Sim_title'><b>Похожие новости:</b></p>

<?
// Выводим список похожих новостей и сортируем по дате и количеству: 5.

$postIndex = $myrow['postIndex'];

$result5 = mysql_query("SELECT title, id, date FROM articles WHERE postIndex = '$postIndex' ORDER BY date DESC , id DESC LIMIT 5", $db);

$myrow6 = mysql_fetch_array($result5);

do {
	printf("<a href='view_post.php?id=%s'><p class='similar_news_block'>%s</p></a>",$myrow6['id'], $myrow6['title']);
}

while ($myrow6 = mysql_fetch_array($result5));

?>
<div class='div_free_space'></div>
</div>


<div class='back_form'>
<div class='com_white'></div>
<!--Форма отправки комментариев-->

<div class='block_form'>
<div class='form'>
<form action='comment.php' method='post' name='form_com' onsubmit='return validateFrom()' id='forma'>
<p><label class='input_title'><b>Написать комментарий:</b></label><br><input name='author' type='text' size='30' placeholder='Ваше имя' maxlength='40' class='form_name'></p>
<p><label class='input_title'><b>Текст:</b><br><textarea name='text' cols='40' rows='6' placeholder='Текст комментария...' class='form_name f_text'></textarea></label></p>
<p class='input_title Vved'><b>Введите сумму с картинки:</b></p>
<img src="" alt="numbers" class='num_f'>
<input name='pr' type='text' size='5' maxlength='5' class='sum'>
<p class='false_sum s2' id='smena'>Сменить картинку</p>
<p class='false_sum s3'>Введите корректный результат вычисления.</p>
<input name='id' type='hidden' value='<? echo $id; ?>'>
<p><button name='sub_com' value='Комментировать' type='submit' class='send'>Отправить</button></p>
<input name='numbb' class='valid_numb'>
</form>
</div>

<h4 class='comment_title'>Комментариев (<span class='numb_com'></span>):</h4>
<script>

$(document).ready(function(){
   var l = $('.comments_block').length;
   $('.numb_com').text(l);
});

</script>
	       
<?

$result3 = mysql_query("SELECT * FROM comments WHERE post='$id'", $db);


if (mysql_num_rows($result3) > 0) {
	$myrow3 = mysql_fetch_array($result3);


	do {
		printf("<div class='comments_block'>
	       <div class='comment'>
	          <p class='com_1'><span class='info'><b>%s</b></span></p>
	          <p class='com_1 com_1_1'><span class='info'>%s</span></p>
	          <p class='text_commentt'>  %s</p>
	       </div>
	    </div>", $myrow3['author'],$myrow3['date'], $myrow3['text']
	);

	}

	while ($myrow3 = mysql_fetch_array($result3));
    }

?>



</div>

</div>
</div>


<!--JQuery Validate-->

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.js'></script>

<script>

$('#forma').validate({
        rules: {
            author: {
                required: true,
                minlength: 3,
            },
            
            text: {
                required: true,
                minlength: 5
            }
        },
            
        messages: {
            author: {
                required: '<p class="false_form f1">Введите имя или псевдоним.</p>',
                minlength: '<p class="false_form">Bведите, как минимум 3 символа.</p>',
            },
            
            text: {
                required: '<p class="false_form">Напишите ваш комментарий.</p>',
                minlength: '<p class="false_form">Bведите как минимум 5 символов.</p>'
            }
        }
    });
	

</script>

   
</body>
</html>