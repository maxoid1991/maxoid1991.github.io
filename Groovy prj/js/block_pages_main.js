//Массив из Новостей

app.controller("FourCtrl", function($scope){

$scope.count = 0; 



//Функция страницы ВПЕРЕД - Главная страница;  
    
$scope.next = function() {
    $scope.count++;
    $scope.pages();
};

//Функция страницы НАЗАД - Главная страница; 

$scope.prev = function(){
    $scope.count--;
    $scope.pages();
};



$scope.color = function() {
    $('.pageLink').click(function(){
      $('.pageLink').css({'background':'none', 'border' : 'solid black 1px', 'color' : 'black'});
      $(this).css({'background' : '#4e4e4e', 'border' : 'none', 'color' : 'white'});
    })
}

  // Стоп новости. Переключение страниц заканчивается, когда заканчиваются новости.

 $scope.news_stop = function(){

  $('.pageLink').click(function(){
  var punkt = $(this).html();

  if(punkt >= 3) {
    $('.stop').css('display', 'block');
    return false;
  }

});


 } 


 //Функция смены страниц - Главная страница; 


$scope.pages = function(){


      if($scope.count == 4) {
        $('.pageNumbers').html(
          '<a href="#/page41" class="pageLink">41</a>' +
          '<a href="#/page42" class="pageLink">42</a>' +
          '<a href="#/page43" class="pageLink">43</a>' +
          '<a href="#/page44" class="pageLink">44</a>' + 
          '<a href="#/page45" class="pageLink">45</a>' + 
          '<a href="#/page46" class="pageLink">46</a>' + 
          '<a href="#/page47" class="pageLink">47</a>' + 
          '<a href="#/page48" class="pageLink">48</a>' +
          '<a href="#/page49" class="pageLink">49</a>' + 
          '<a href="#/page50" class="pageLink">50</a>'
          );

        $('.Prev').css('visibility', 'visible');
        $scope.color();
        $scope.news_stop();
        yellow_box();
    }
    

     if($scope.count == 3) {
        $('.pageNumbers').html(
          '<a href="#/page31" class="pageLink">31</a>' +
          '<a href="#/page32" class="pageLink">32</a>' +
          '<a href="#/page33" class="pageLink">33</a>' +
          '<a href="#/page34" class="pageLink">34</a>' + 
          '<a href="#/page35" class="pageLink">35</a>' + 
          '<a href="#/page36" class="pageLink">36</a>' + 
          '<a href="#/page37" class="pageLink">37</a>' + 
          '<a href="#/page38" class="pageLink">38</a>' +
          '<a href="#/page39" class="pageLink">39</a>' + 
          '<a href="#/page40" class="pageLink">40</a>'
          );

        $('.Prev').css('visibility', 'visible');
        $scope.color();
        $scope.news_stop();
        yellow_box();
    }

      if($scope.count == 2) {
        $('.pageNumbers').html(
          '<a href="#/page21" class="pageLink">21</a>' +
          '<a href="#/page22" class="pageLink">22</a>' +
          '<a href="#/page23" class="pageLink">23</a>' +
          '<a href="#/page24" class="pageLink">24</a>' + 
          '<a href="#/page25" class="pageLink">25</a>' + 
          '<a href="#/page26" class="pageLink">26</a>' + 
          '<a href="#/page27" class="pageLink">27</a>' + 
          '<a href="#/page28" class="pageLink">28</a>' +
          '<a href="#/page29" class="pageLink">29</a>' + 
          '<a href="#/page30" class="pageLink">30</a>'
          );

        $('.Prev').css('visibility', 'visible');
        $scope.color();
        $scope.news_stop();
        yellow_box();
    }
    
    if($scope.count == 1) {
        $('.pageNumbers').html(
          '<a href="#/page11" class="pageLink">11</a>' +
          '<a href="#/page12" class="pageLink">12</a>' +
          '<a href="#/page13" class="pageLink">13</a>' +
          '<a href="#/page14" class="pageLink">14</a>' + 
          '<a href="#/page15" class="pageLink">15</a>' + 
          '<a href="#/page16" class="pageLink">16</a>' + 
          '<a href="#/page17" class="pageLink">17</a>' + 
          '<a href="#/page18" class="pageLink">18</a>' +
          '<a href="#/page19" class="pageLink">19</a>' + 
          '<a href="#/page20" class="pageLink">20</a>'
          );

        $('.Prev').css('visibility', 'visible');
        $scope.color();
        $scope.news_stop();
        yellow_box();
    }

    if($scope.count == 0) {
        $('.pageNumbers').html(
          '<a href="#/" class="pageLink">1</a>' + 
          '<a href="#/page2" class="pageLink">2</a>' + 
          '<a href="#/page3" class="pageLink">3</a>' + 
          '<a href="#/page4" class="pageLink">4</a>' + 
          '<a href="#/page5" class="pageLink">5</a>' + 
          '<a href="#/page6" class="pageLink">6</a>' + 
          '<a href="#/page7" class="pageLink">7</a>' + 
          '<a href="#/page8" class="pageLink">8</a>' + 
          '<a href="#/page9" class="pageLink">9</a>' + 
          '<a href="#/page10" class="pageLink">10</a>'
          );
        
        $('.Prev').css('visibility', 'hidden');
        $scope.color();
        $scope.news_stop();
        yellow_box();
    }

    else {
      $scope.count--;
    }
};


//ПЕРЕКЛЮЧАТЕЛЬ ПОИСКОВОЙ СТРАНИЦЫ

//Переключение номеров страниц SearchPage


$scope.count2 = 0;

$scope.countNull = function() {
    $scope.count2 = 0;
    location='index.html#/';
}

//Стрелка Предыдущее

$scope.SearchPrev = function() {
     $scope.count2--;
     $scope.pages2();
}

//Стрелка Следующее

$scope.SearchNext = function() {
  $scope.count2++;
  $scope.pages2();
}


//Функция смены страниц - поиск


$scope.pages2 = function(){

  $('.SearchNext').css('display', 'block');
    
  if($scope.count2 == 0) {
    location="index.html#/search"
  }
    
  else if($scope.count2 == 1) {
    location="index.html#/search/page2"
    $('.SearchPrev').css('display', 'block');
  }

  else if($scope.count2 == 2) {
    location="index.html#/search/page3"
  }

  else if($scope.count2 == 3) {
    location="index.html#/search/page4"
  }

  else if($scope.count2 == 4) {
    location="index.html#/search/page5"
  }

  else if($scope.count2 == 5) {
    location="index.html#/search/page6"
  }

  else {
      if($('.div_Article').length <= 8) {
       $('.SearchPageNumb').css('display', 'none')
      };
  }

};

});



