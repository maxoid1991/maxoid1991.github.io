app.config(function($routeProvider){
    $routeProvider
    
    
///////ПОИСКОВОЙ РОУТИНГ SearchPage

    .when('/search', {
        template: 
        '<p class="Result_Search">Результат поиска по запросу: <b>{{Filt}}</b></p>' + 
         '<p class="BackToMain" ng-click="countNull()">' +
           'Вернуться на главную'+
         '</p><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Filt | limitTo: 9 : 0" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })
    
     .when('/search/page2', {
        template: 
        '<p class="Result_Search">Результат поиска по запросу: <b>{{Filt}}</b></p>' + 
         '<a href="#/" class="BackToMain" ng-click="countNull()">' +
           'Вернуться на главную'+
         '</a><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Filt | limitTo: 9 : 9" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })
    
    .when('/search/page3', {
        template: 
        '<p class="Result_Search">Результат поиска по запросу: <b>{{Filt}}</b></p>' + 
         '<a href="#/" class="BackToMain" ng-click="countNull()">' +
           'Вернуться на главную'+
         '</a><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Filt | limitTo: 9 : 18" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })

    .when('/search/page4', {
        template: 
        '<p class="Result_Search">Результат поиска по запросу: <b>{{Filt}}</b></p>' + 
         '<a href="#/" class="BackToMain" ng-click="countNull()">' +
           'Вернуться на главную'+
         '</a><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Filt | limitTo: 9 : 27" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })

    .when('/search/page5', {
        template: 
        '<p class="Result_Search">Результат поиска по запросу: <b>{{Filt}}</b></p>' + 
         '<a href="#/" class="BackToMain" ng-click="countNull()">' +
           'Вернуться на главную'+
         '</a><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Filt | limitTo: 9 : 36" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })

    .when('/search/page6', {
        template: 
        '<p class="Result_Search">Результат поиска по запросу: <b>{{Filt}}</b></p>' + 
         '<a href="#/" class="BackToMain" ng-click="countNull()">' +
           'Вернуться на главную'+
         '</a><br><br><br>' + 
         '<div ng-repeat="Article in Spisok | filter: Filt | limitTo: 9 : 45" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>'  
    })   
});
