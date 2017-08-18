var app = angular.module("AppSite", ['ngSanitize', 'ngRoute']);


$(document).ready(function(){

//Окно - это все новости, мы собираем инфу

  $('.pageLink').click(function(){
  var punkt = $(this).html();

  if(punkt >= 3) {
    $('.stop').css('display', 'block');
    return false;
  }

});

  $('.back_to_first').click(function(){
    $('.stop').css('display','none');
    $('.pageLink').css({'background':'none', 'border' : 'solid black 1px', 'color' : 'black'});
    $('.pageLink:eq(0)').css({'background' : '#4e4e4e', 'border' : 'none', 'color' : 'white'});
  });

  $('.close').click(function(){
    $('.stop').css('display', 'none');
  });


//Смена цвета номеров страниц на главной

    $('.pageLink').click(function(){
      $('.pageLink').css({'background':'none', 'border' : 'solid black 1px', 'color' : 'black'});
      $(this).css({'background' : '#4e4e4e', 'border' : 'none', 'color' : 'white'});
    })

//По кнопки Enter переход из поисковика на страницу поиска
    
    $('.StartPageInput').keydown(function(event){

      var x = $('.StartPageInput').val();

      if (event.keyCode == 13 && x != '') {
          location = '#/search';
          $('.StartPageInput').css('display', 'none');
          $('.Rubriki').css('display', 'none');

          function Hide() {
             var NewNumbers  = $('.div_Article').length;
             
             if (NewNumbers < 9) {
              $('.SearchNext').css('display', 'none');
             }
          
             else {
              $('.SearchNext').css('display', 'block');
             }
          }

          Hide();
      
      }

             else if (event.keyCode == 13 && x == '') {
             //код не введённого текста
             }
    });


//Первый новостной блок эффекты
    $('.Link_news_block:eq(0)').mouseenter(function(){
      $('.Article_name:eq(0)').css('marginLeft', '50px');
      $('.Article_lid:eq(0)').css('marginLeft', '50px');
      $('.Razdel:eq(0)').css('marginLeft', '60px');
    });

    $('.Link_news_block:eq(0)').mouseleave(function(){
      $('.Article_name:eq(0)').css('marginLeft', '30px');
      $('.Article_lid:eq(0)').css('marginLeft', '30px');
      $('.Razdel:eq(0)').css('marginLeft', '38px');
    });

})



//События по смене URL по #. Смена представления страниц на Главной-Поиск


function locationHashChanged() {

  //В рубриках показ стрелок переключения страниц

    if (location.hash === "#/search2") {

      $('.tru').css({
          'height' : '1000px',
          'width':'1245px',
          'margin' : '0 auto',
        });

        $('.BackToMain').mousedown(function(){
            $(this).css({
              'background' : '#ffd95c',
              'color' : 'white',
              'border' : 'solid #ffd95c 1px'
            });
        });

        $('.BackToMain').mouseup(function(){
              $(this).css('background', 'white');
        });
        
        var Divs_rub = $(".div_Article").length;

        $('#Rub_Next').click(function(){
           $('#Rub_Prev').css('display', 'block');
        });

        $('#Rub_Prev').css('display', 'none');

           if(Divs_rub < 9) {
              $('#Rub_Next').css('display', 'none');
           }

           else {
              $('#Rub_Next').css('display', 'block');
           }
     }


    if (location.hash === "#/search") {

        $('.PageChange').css('display', 'none');
        $('.SearchPageNumb').css('display', 'block');
        $('.SearchPrev').css('display', 'none');
        $('.ButtonPlayer').css('display', 'block');
        $('.ButtonPlayer:eq(1)').css('display', 'none');
       
      if ($('.div_Article').length <= 8) {
        $('.SearchNext').css('display', 'none')
      }

      else {
        $('.SearchNext').css('display', 'block')
      }

    }

    if (location.hash === "#/") {
        $('.stop').css('display', 'none');
        $('.pageLink').css({'background':'none', 'border' : 'solid black 1px', 'color' : 'black'});
        $('.pageLink:eq(0)').css({'background' : '#4e4e4e', 'border' : 'none', 'color' : 'white'});
        $('.SearchPageNumb2').css('display', 'none');
        $('.StartPageInput').css('display', 'block');
        $('.PageChange').css('display', 'block');
        $('.SearchPageNumb').css('display', 'none');
        $('.Widget').css({'visibility' :'visible'});
        $('.div_Article:nth-child(1)').css({
          'width':'890',
          'float':'none',
          'height':'400px',
          'margin': '20px 0'});
        $('.Rubriki').css('display', 'block');
        $('.StartPageInput').val('');
        $('.ButtonPlayer').css('display', 'none');
        $('.bc_block:eq(0)').css({'width':'65%', 'height' : '100%', 'top' : '-400px'});
        $('.Razdel:eq(0)').css({'margin' : '-355px 0 0 38px'});
        $('.view_numb:eq(0)').css({'margin' : '-21px 0 0 166px'});

//Первый новостной блок эффекты
       $('.Link_news_block:eq(0)').mouseenter(function(){
          $('.Article_name:eq(0)').css('marginLeft', '50px');
          $('.Article_lid:eq(0)').css('marginLeft', '50px');
          $('.Razdel:eq(0)').css({'marginLeft' : '60px', 'color' : 'white'});
       });

      $('.Link_news_block:eq(0)').mouseleave(function(){
         $('.Article_name:eq(0)').css('marginLeft', '30px');
         $('.Article_lid:eq(0)').css('marginLeft', '30px');
         $('.Razdel:eq(0)').css('marginLeft', '38px');
      });


        //При переходе на стартовую стр. Виджет возвр. на своё место.

      $('.Widget').removeClass('Show_Widget')

  // Первый новостной див - не слетали настройки

        $('.Img_back:eq(0)').css({
          'width' : '890px',
          'position' : 'relative',
          'top' : '0px',
          'left' : '0px',
           'zIndex' : '-1'
        })
      
        $('.Article_name:eq(0)').css({
          'width' : '350px',
          'margin' : '-340px 0 -13px 30px',
          'fontWeight' : '700',
          'color' : '#20d886',
          'padding' : '0 10px'
        })


        $('.Article_lid:eq(0)').css({
          'width' : '350px',
          'height' : '190px',
          'margin' : '5px 0 0 30px',
          'fontSize' : '.85em',
          'padding' : '10px',
          'color' : '#e1e1e1;'
        });

        $('.Razdel:eq(0)').css({
          'margin' : '-455px 0 0 40px',
          'color' : 'white',
          'border' : 'solid 1px #02bb69'
        })

    }

     else if (location.hash === "#/search") {
        $('.tru').css({
          'height' : '1000px',
          'width':'1245px',
          'margin' : '0 auto',
        });
        $('.Widget').css('visibility', 'hidden');


        $('.BackToMain').mousedown(function(){
              $(this).css({'background' : '#ffd95c', 'color' : 'white', 'border' : 'solid #ffd95c 1px'});
        });

        $('.BackToMain').mouseup(function(){
              $(this).css('background', 'white');
        });    


// Если результатов поиска вообще нет, то переадресация на стр. нет результатов.
    if ($('.div_Article').length == 0) {
      $('.tru').html('<p class="Result_Search">Увы, по данному запросу нет результатов.<br><br><b>Попробуйте другой.</b></p><br>'+
        '<a href="index.html#/"><p id="bToM">Вернуться назад</p></a>' +
        '<a href="index.html#/"><div class="pick"></div></a>');

      //Меняем цвет кнопки назад

        $('#bToM').mousedown(function(){
          $(this).css({
              'background' : '#fdc307',
              'border' : 'solid 1px #fdc307',
              'color' : 'white'
          });
        });

        $('#bToM').mouseup(function(){
          $(this).css({
              'background' : 'none',
              'border' : 'solid 1px black',
              'color' : 'black'
          });
        });
        
        }
    }

    else {

      $('.tru').css({
          'height' : '1000px',
          'width':'1245px',
          'margin' : '0 auto',
        });

//Появляется кнопка плеера не на главной страницах
      $('.ButtonPlayer').css('display', 'block');
      $('.ButtonPlayer:eq(1)').css('display', 'none');

//Проигрыватель всегда исчезает, если он не на главной

      $('.Widget').css('visibility', 'hidden');
      $('.tru').css('height', '1000px');
    }


    if (location.hash === "#/search/page2") {
       var Divs = $(".div_Article").length;
       if (Divs < 9) {
          $('.SearchNext').css('display', 'none');
       }
    
       else {
          $('.SearchNext').css('display', 'block');
       } 
    }

    else {
     var Divs = $(".div_Article").length;
        if (Divs < 9) {
           $('.SearchNext').css('display', 'none');
    }
    
       else {
          $('.SearchNext').css('display', 'block');
       } 
    }

}

window.onhashchange = locationHashChanged;





//При перезагрузки поисковой страницы, чтобы не слетали пункты Next и Previous

window.onload = function(){

  //Preloader

function preloader() {
  $('.Ctrl_Opacity').css({'opacity' : '1', 'transitionDuration' : '2s'});
  $('.Preload_d, .pre_block').css('display', 'none');
};

setTimeout(preloader, 3000);

  $('.pageLink:eq(0)').css({'background' : '#4e4e4e', 'border' : 'none', 'color' : 'white'});


  //Меняются цвета страницы search кнопок далее-предыдущее.

  $('.Button_Search, .Arr').mousedown(function(){
    $(this).css({
      'background' : '#fdc307',
      'border' : 'solid 1px #fdc307',
      'color' : 'white'
    });
  });

  $('.Button_Search, .Arr').mouseup(function(){
    $(this).css({
      'background' : 'none',
      'border' : '1px solid black',
      'color' : 'black'
    });
  });



  $('.SearchPageNumb2').css('display', 'none');


  $('.Article_name:eq(0)').css({
     'width' : '350px',
     'margin' : '-340px 0 -13px 30px',
     'fontWeight' : '700',
     'color' : '#20d886',
     'padding' : '0 10px'

  })

  $('.bc_block:eq(0)').css({'width':'55%', 'height' : '100%', 'top' : '-400px'});

  $('.Razdel:eq(0)').css({
     'margin' : '-455px 0 0 38px',
     'color' : 'white',
     'border' : 'solid 1px #02bb69'
  })


  $('.Article_lid:eq(0)').css({
     'width' : '350px',
     'height' : '190px',
     'margin' : '5px 0 0 30px',
     'fontSize' : '.85em',
     'padding' : '10px',
     'color' : '#e1e1e1;'
  })

  $('.view_numb:eq(0)').css({'margin' : '-21px 0 0 166px'});

  $('.Img_back:eq(0)').css({
     'width' : '890px',
     'position' : 'relative',
     'top' : '0px',
     'left' : '0px',
     'zIndex' : '-1'
  })
  
  if(location="index.html#/") {
    $('.PageChange').css('display', 'block');
    $('.SearchPageNumb').css('display', 'none');
    $('.Widget').css('visibility', 'visible');
    
    $('.div_Article:nth-child(1)').css({
      'width':'890',
      'float':'none',
      'height':'400px',
      'margin': '20px 0'
        });
  }

  else {
     $('.Widget').css('visibility', 'hidden');
  }



//Появление и исчезнование плеера
    
$('.ButtonPlayer').click(function(){
  $('.Widget').toggleClass('Show_Widget');
})

// Кнопка скрыть показать плеер меняется
$( ".ButtonPlayer" ).click(function() {
  $( ".ButtonPlayer" ).toggle();
});


//Переключатели радиостанций и плейлистов

$('.Genre_M, .Rub_name').mouseenter(function(){
  $(this).css('cursor', 'pointer')
})

$('.Genre_M').css({'background' : '#4e4e4e', 'color' : 'white'});
$('.Genre_M:eq(0)').css({'background' : 'none', 'color' : 'black'});
$('.Genre_M:eq(1)').css({'background' : '#fdc307', 'color' : 'white', 'fontStyle' : 'normal'});

//Смена цвета пунктов Радио

$('.Genre_M').click(function(){
  $('.Genre_M').css({'background' : '#4e4e4e', 'color' : 'white', 'fontStyle' : 'italic'})
  $('.Genre_M:eq(0)').css({'background' : 'none', 'color' : 'black'})
  $(this).css({'background' : '#fdc307', 'color' : 'white', 'fontStyle' : 'normal'})
})


//Меняем направления музыки в плеере

$('.Genre_M:eq(1)').click(function(){
  $('.Radio').html('<iframe scrolling="no"frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=948710155&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(2)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=1203008231&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(3)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=760160361&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(4)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=1283464975&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(5)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=1057779131&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(6)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=1291586495&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(7)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=1377701465&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(8)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=1290316405&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(9)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=1258663961&app_id=1" width="325" height="260"></iframe>')
})

$('.Genre_M:eq(10)').click(function(){
  $('.Radio').html('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=325&height=260&color=007FEB&layout=dark&size=medium&type=playlist&id=1118430371&app_id=1" width="325" height="260"></iframe>')
});
}



