app.config(function($routeProvider){
    $routeProvider
    
//Переключатели на главной странице
    
 ////////СТАРТОВАЯ СТРАНИЦА. Страница 1

    .when('/', {
        template: 
        '<div class="PageNumbers">' + 
         '<div ng-repeat="Article in Spisok | limitTo: 10 : 0" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' + 
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' +
         '</div>' + 
        '</div>'  
    })
    
    //Страница 2
    .when('/page2', {
        template: 
        '<div class="PageNumbers">' + 
         '<div ng-repeat="Article in Spisok | limitTo: 9 : 10" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' +
          '<div class="bc_block"></div>' + 
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>' + 
        '</div>'  
    })
    
    //Страница 3
     .when('/page3', {
        template: 
        '<div class="PageNumbers">' + 
         '<div ng-repeat="Article in Spisok | limitTo: 9 : 19" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' +
          '<div class="bc_block"></div>' + 
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>' + 
        '</div>'  
    })

     //Страница 4
     .when('/page4', {
        template: 
        '<div class="PageNumbers">' + 
         '<div ng-repeat="Article in Spisok | limitTo: 9 : 28" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>' + 
        '</div>'  
    })

     //Страница 5
     .when('/page5', {
        template: 
        '<div class="PageNumbers">' + 
         '<div ng-repeat="Article in Spisok | limitTo: 9 : 37" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>' + 
        '</div>'  
    })

     //Страница 6
     .when('/page6', {
        template: 
        '<div class="PageNumbers">' + 
         '<div ng-repeat="Article in Spisok | limitTo: 9 : 46" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>' + 
        '</div>'  
    })

   //Страница 7
     .when('/page7', {
        template: 
        '<div class="PageNumbers">' + 
         '<div ng-repeat="Article in Spisok | limitTo: 9 : 55" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>' + 
        '</div>'  
    })

    //Страница 8
     .when('/page8', {
        template: 
        '<div class="PageNumbers">' + 
         '<div ng-repeat="Article in Spisok | limitTo: 9 : 64" class="div_Article">' + 
          '<a href="{{Article.link}}" target="_blank">' + '<div class="Link_news_block">' +
           '<img src="{{Article.pic}}" class="Img_back">' +
            '<p class="Article_name">{{Article.article}}</p>' +
             '<br><p class="Article_lid">{{Article.lid}}</p>' + 
              '</div>' +
          '</a>' + 
          '<div class="bc_block"></div>' +
          '<p class="Razdel" ng-click="rub($event)">{{Article.razdel}}</p>' + 
         '</div>' + 
        '</div>'  
    })

    
});
