
// Random pic - validation form

$(document).ready(
function Random(){
var random = Math.floor(Math.random() * 10);  
console.log(random);

if (random == 0) {
  $('.num_f').attr('src', 'post_images/numbs/0.jpg');
}

if (random == 1) {
  $('.num_f').attr('src', 'post_images/numbs/1.jpg');
} 

if (random == 2) {
  $('.num_f').attr('src', 'post_images/numbs/2.jpg');
} 

if (random == 3) {
  $('.num_f').attr('src', 'post_images/numbs/3.jpg');
} 

if (random == 4) {
  $('.num_f').attr('src', 'post_images/numbs/4.jpg');
} 

if (random == 5) {
  $('.num_f').attr('src', 'post_images/numbs/5.jpg');
} 

if (random == 6) {
  $('.num_f').attr('src', 'post_images/numbs/6.jpg');
} 

if (random == 7) {
  $('.num_f').attr('src', 'post_images/numbs/7.jpg');
} 

if (random == 8) {
  $('.num_f').attr('src', 'post_images/numbs/8.jpg');
} 

if (random == 9) {
  $('.num_f').attr('src', 'post_images/numbs/9.jpg');
} 

if (random == 10) {
  $('.num_f').attr('src', 'post_images/numbs/10.jpg');
}

$('#smena').click(function(){
  Random();
})

// Change "change validatin pic" color
$('#smena').mousedown(function(){
     $(this).css('color', 'green');
});

$('#smena').mouseup(function(){
     $(this).css('color', 'lightgrey');
});

//Write random number in p.valid_numb
$('.valid_numb').val(random);

}
);

// From Validate

function validateFrom() {

var sum = $('.sum').val();
var sum2 = $('.valid_numb').val();

if (sum == sum2) {

}

else {

  $('.false_sum').css('display', 'block');
  $('.sum').css('border', 'solid red 2px');

  $('.send').mousedown(function(){
     $('.s3').css({'background' : 'red', 'color' : 'white', 'width' : '283px', 'border-radius' : '2px'});
     $('.false_form').css({'background' : 'red', 'color' : 'white', 'width' : '223px', 'border-radius' : '2px'});
  });

  $('.send').mouseup(function(){
     $('.s3').css({'background' : 'none', 'color': 'red'});
     $('.false_form').css({'background' : 'none', 'color': 'red'});
});

  return false;
}

}





