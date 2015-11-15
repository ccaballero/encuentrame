angular.module('starter.directives',[])
.directive('map',function(){
    return {
        restrict:'E'
      , scope:{
            onCreate:'&'
        }
      , link:function($scope,$element,$attr){
            function initialize(){
                var styles=[{
                        stylers:[{
                            hue:'#00ffe6'
                        },{
                            saturation:-20
                        }]
                    },{
                        featureType:'road',
                        elementType:'geometry',
                        stylers:[{
                            lightness:100
                        },{
                            visibility:'simplified'
                        }]
                    },{
                        featureType:'road',
                        elementType:'labels',
                        stylers:[{
                            visibility:'on'
                        }]
                    },{
                        featureType:"poi.business",
                        elementType: "labels",
                        stylers: [{
                            visibility: "off"
                        }]
                    }]
                  , styledMap=new google.maps.StyledMapType(styles,{name:'Styled Map'})
                  , mapOptions={
                        zoom: 18,
                        center:new google.maps.LatLng(-17.398606,-66.1527474),
                        disableDefaultUI:true,
                        zoomControl:true,
                        scaleControl:true,
                        mapTypeControlOptions:{
                            mapTypeIds:[google.maps.MapTypeId.ROADMAP,'map_style']
                        }
                    }
                  , map=new google.maps.Map($element[0],mapOptions)

                map.mapTypes.set('map_style',styledMap);
                map.setMapTypeId('map_style');

                $scope.onCreate({
                    map:map
                });

                google.maps.event.addDomListener($element[0],'mousedown',
                function(e){
                    e.preventDefault();
                    return false;
                });
            }

            if(document.readyState==='complete'){
                initialize();
            }else{
                google.maps.event.addDomListener(window,'load',initialize);
            }
        }
    }
});

