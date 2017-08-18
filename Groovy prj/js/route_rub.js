app.config(function($routeProvider){
    $routeProvider

        .when('/search2', {
        template: 
        '<p class="Result_Search">Раздел: <b>{{Search2}}</b></p>' + 
         '<p class="BackToMain" ng-click="countNullRub()">' +
           'Вернуться на главную'+
         '</p><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Search2 | limitTo: 9 : 0" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' + 
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
              '<div class="bc_block"></div>' +
              '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
          '</a>' + 
         '</div>'  
    })

        .when('/search2/page2', {
        template: 
        '<p class="Result_Search">Раздел: <b>{{Search2}}</b></p>' + 
         '<p class="BackToMain" ng-click="countNullRub()">' +
           'Вернуться на главную'+
         '</p><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Search2 | limitTo: 9 : 9" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
              '<div class="bc_block"></div>' +
          '</a>' + 
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })

        .when('/search2/page3', {
        template: 
        '<p class="Result_Search">Раздел: <b>{{Search2}}</b></p>' + 
         '<p class="BackToMain" ng-click="countNullRub()">' +
           'Вернуться на главную'+
         '</p><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Search2 | limitTo: 9 : 18" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
              '<div class="bc_block"></div>' +
          '</a>' + 
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })

        .when('/search2/page4', {
        template: 
        '<p class="Result_Search">Раздел: <b>{{Search2}}</b></p>' + 
         '<p class="BackToMain" ng-click="countNullRub()">' +
           'Вернуться на главную'+
         '</p><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Search2 | limitTo: 9 : 27" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
              '<div class="bc_block"></div>' +
          '</a>' + 
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })

        .when('/search2/page5', {
        template: 
        '<p class="Result_Search">Раздел: <b>{{Search2}}</b></p>' + 
         '<p class="BackToMain" ng-click="countNullRub()">' +
           'Вернуться на главную'+
         '</p><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Search2 | limitTo: 9 : 36" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
              '<div class="bc_block"></div>' +
          '</a>' + 
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })

        .when('/search2/page6', {
        template: 
        '<p class="Result_Search">Раздел: <b>{{Search2}}</b></p>' + 
         '<p class="BackToMain" ng-click="countNullRub()">' +
           'Вернуться на главную'+
         '</p><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Search2 | limitTo: 9 : 45" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
              '<div class="bc_block"></div>' +
          '</a>' + 
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })

    });