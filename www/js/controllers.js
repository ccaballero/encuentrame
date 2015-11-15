angular.module('starter.controllers',[])
.controller('AppCtrl',function($scope,$ionicModal,$timeout){
    $ionicModal.fromTemplateUrl('templates/signin.html',{
        scope:$scope
    }).then(function(modal){
        $scope.signin=modal;
    });
    $ionicModal.fromTemplateUrl('templates/signup.html',{
        scope:$scope
    }).then(function(modal){
        $scope.signup=modal;
    });

    $scope.closeSignin=function(){
        $scope.signin.hide();
    };
    $scope.closeSignup=function(){
        $scope.signup.hide();
    };

    $scope.showSignin=function(){
        $scope.signin.show();
    };
    $scope.showSignup=function(){
        $scope.signup.show();
    };

    $scope.processSignin=function(){
        $timeout(function(){
            $scope.closeSignin();
        }, 1000);
    };
    $scope.processSignup=function(){
        $timeout(function(){
            $scope.closeSignup();
        }, 1000);
    };
})
.controller('SearchCtrl',function($scope,$stateParams){
    $scope.shops=[
        { title: 'Venta de Naranjas', description: 'Naranjas Frescas a 15 Bs./25 unidades' },
        { title: 'Venta de Naranjas', description: 'Naranjas Frescas a 15 Bs./25 unidades' },
        { title: 'Venta de Naranjas', description: 'Naranjas Frescas a 15 Bs./25 unidades' },
        { title: 'Venta de Naranjas', description: 'Naranjas Frescas a 15 Bs./25 unidades' },
        { title: 'Venta de Naranjas', description: 'Naranjas Frescas a 15 Bs./25 unidades' },
        { title: 'Venta de Naranjas', description: 'Naranjas Frescas a 15 Bs./25 unidades' }
    ];
})
.controller('ShopsCtrl',function($scope,$stateParams){
})
.controller('MarketsCtrl',function($scope,$stateParams){
    scope.markets=[
        { title: '25 de Mayo', address: '25 de Mayo esq. Jordán' },
        { title: '27 de Mayo', address: '25 de Mayo esq. Jordán' },
        { title: 'Alejo Calatayud', address: 'Aroma esq. Lanza' },
        { title: 'La Pampa', address: 'Punata entre Avenida Barrientos y Republica' },
        { title: 'Campesino', address: 'Juan de Mendoza esq. Huanchaca' },
    ];
})
.controller('ArticlesCtrl',function($scope,$stateParams){
})
.controller('DealsCtrl',function($scope,$stateParams){
    $scope.deals=[
        { title: 'Remate de Naranjas', shop: 1 },
    ];
})
.controller('MapCtrl',function($scope,$ionicLoading){
    $scope.mapCreated=function(map){
/*        $scope.map=map;

        map.data.loadGeoJson('maps/alejo-calatayud.json');
        map.data.setStyle({
            fillColor:'#ffffff',
            fillOpacity:1.0,
            strokeColor:'#ffffff',
            strokeOpacity:1.0,
            strokeWeight:1,
            clickable:true
        });

        map.data.addListener('mouseover',function(event){
            console.log('click');
        });*/
    };

    $scope.centerOnMe=function(){
/*        console.log("Centering");
        if(!$scope.map){
            return;
        }

        $scope.loading=$ionicLoading.show({
            content:'Getting current location...',
            showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos){
            console.log('Got pos',pos);
            $scope.map.setCenter(
                new google.maps.LatLng(
                    pos.coords.latitude,pos.coords.longitude));
            $scope.loading.hide();
        },function(error){
            alert('Unable to get location: ' + error.message);
        });*/
    };
});

