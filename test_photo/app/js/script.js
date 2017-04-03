$(document).ready(function(){

$('.prods__block_2:eq(3)').click(function(){
	if(window.innerWidth < 1140) {
		$('.popup').css({'display': 'block', 'top' : $(window).scrollTop() + 30 + 'px'});
	} else {
		$('.popup').css({'display': 'block', 'top': '117px'});
	}
});

$('.popup__close').click(function(){
	$('.popup').css({'display': 'none'});
});

//drop filter_menu

$('.mob_filt').click(function(){
	$('.drop__mobile_menu').css({'right': '0'})
});

$('.drop_close').click(function(){
	$('.drop__mobile_menu').css({'right': '-300px'})
});

var state = false;

$('.mob_main_menu').click(function(){

	if(state == false) {
	  $('.header').css({'height':'auto'});
	  state = true;
	 }
	 else {
	  $('.header').css({'height':'0'});
	  state = false;
	 }

});

$('.list_2').click(function(){
	$(this).children().toggleClass('active');
});





});