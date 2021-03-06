angular.module('starter',['ionic','starter.controllers','starter.directives'])
.run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
        if(window.cordova && window.cordova.plugins.Keyboard){
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar){
            StatusBar.styleDefault();
        }
    });
})
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('app',{
        url:'/app',
        abstract:true,
        templateUrl:'templates/menu.html',
        controller:'AppCtrl'
    }).state('app.map',{
        url:'/map',
        views:{
            'menuContent':{
                templateUrl:'templates/map.html',
                controller:'MapCtrl'
            }
        }
    }).state('app.search',{
        url:'/search',
        views:{
            'menuContent':{
                templateUrl:'templates/search.html',
                controller:'SearchCtrl'
            }
        }
    }).state('app.shops',{
        url:'/shops/:shop',
        views:{
            'menuContent':{
                templateUrl:'templates/shop.html',
                controller:'ShopsCtrl'
            }
        }
    }).state('app.markets',{
        url:'/markets',
        views:{
            'menuContent':{
                templateUrl:'templates/markets.html',
                controller:'MarketsCtrl'
            }
        }
    }).state('app.articles',{
        url:'/articles/:article',
        views:{
            'menuContent':{
                templateUrl:'templates/article.html',
                controller:'ArticlesCtrl'
            }
        }
    }).state('app.deals',{
        url:'/deals',
        views:{
            'menuContent':{
                templateUrl:'templates/deals.html',
                controller:'DealsCtrl'
            }
        }
    }).state('app.signin',{
        url:'/signin',
        views:{
            'menuContent':{
                templateUrl:'templates/signin.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/app/map');
});

