app.controller("ThirdCtrl", function($scope){

//Поисковые функции для РУБРИК

$scope.Search2 ="";


 //Рубрики
 
 $scope.rub = function($event) {

     $('.Rubriki').css('display', 'none');
     $('.StartPageInput').css('display', 'none');

     var name_rubr = $($event.target).html();

     if(name_rubr == 'Фотография') {
      location='#/search2';
      $scope.Search2 ="Фотография";
     }

      else if(name_rubr == 'Видео') {
      location='#/search2';
      $scope.Search2 ="Видео";
     }

      else if(name_rubr == 'Юмор') {
      location='#/search2';
      $scope.Search2 ="Юмор";
     }

      else if(name_rubr == 'Девушки') {
      location='#/search2';
      $scope.Search2 ="Девушки";
     }

     else if(name_rubr == 'Цитаты') {
      location='#/search2';
      $scope.Search2 ="Цитаты";
     }

      else if(name_rubr == 'Автомобили') {
      location='#/search2';
      $scope.Search2 ="Автомобили";
     }

      else if(name_rubr == 'Еда, Напитки') {
      location='#/search2';
      $scope.Search2 ="Еда, напитки";
     }

      else if(name_rubr == 'Музыка') {
      location='#/search2';
      $scope.Search2 ="Музыка";
     }

      else if(name_rubr == 'Места') {
      location='#/search2';
      $scope.Search2 ="Места";
     }

     else {
      return false;
     }

     $('.PageChange').css('display', 'none');
     $('.SearchPageNumb2').css('display', 'block');

 }


$scope.SearchNextRub = function() {
  $scope.count2++;

  if($scope.count2 == 0) {
    location="index.html#/search2";
  }

  if($scope.count2 == 1) {
    location="index.html#/search2/page2";
  }

  if($scope.count2 == 2) {
    location="index.html#/search2/page3";
  }

  if($scope.count2 == 3) {
    location="index.html#/search2/page4";
  }

}

$scope.SearchPrevRub = function() {
  $scope.count2--;

   if($scope.count2 == 0) {
    location="index.html#/search2";
  }

  if($scope.count2 == 1) {
    location="index.html#/search2/page2";
  }

  if($scope.count2 == 2) {
    location="index.html#/search2/page3";
  }

  if($scope.count2 == 3) {
    location="index.html#/search2/page4";
  }

}

$scope.countNullRub = function(){
  $scope.count2 = 0;
  location="index.html#/";
}


});