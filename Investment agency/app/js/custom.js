 $(document).ready(function() {
	$("#main-slider").owlCarousel({
	  items: 1,
	  nav : true,
	  dots:false,
	  animateOut: 'fadeOut',
	  navText : [ " ", " "],
	  navSpeed: 700,
	  loop: true,
	  responsiveClass:true,
	  dots: false,
   });
   	$("#bottom-slider").owlCarousel({
	  items: 1,
	  nav : true,
	  navText : [ " ", " "],
	  navSpeed: 800,
	  loop: true,
	  responsiveClass:true,
   });
	$("#logo-slider").owlCarousel({
	  nav : false,
	  responsive:{
        0:{
            items:1,
		    dots: true,
        },
		600:{
            items:2,
		    dots: true,
        },
        800:{
            items:4,
		    dots: true,
        },
        1000:{
            items:5,
			dots: false,
        }
		}
   });
   	$( "#select-lang" ).change(function() {
		var selectVal = $("#select-lang option:selected").val();
		if(selectVal=="BY"){window.location.href = "/be/";}
		if(selectVal=="EN"){window.location.href = "/en/";}
		if(selectVal=="RU"){window.location.href = "/";}
	});
 });
$(window).load(function() {
	$( "#bottom-slider .item" ).each(function() {
	  $( this ).find(".slider-text .display-table").height( $( this ).height() );
	});
	$( window ).resize(function() {
		$( "#bottom-slider .item" ).each(function() {
		  $( this ).find(".slider-text .display-table").height( $( this ).height() );
		});
	});
});
