function menutoggler(){
  menutogglerbtn.addEventListener('click');
}

main = {
  // initDocumentationCharts: function() {
  //   if ($('#dailySalesChart').length != 0 && $('#websiteViewsChart').length != 0) {
  //     /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

  //     dataDailySalesChart = {
  //       labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  //       series: [
  //         [12, 17, 7, 17, 23, 18, 38]
  //       ]
  //     };

  //     optionsDailySalesChart = {
  //       lineSmooth: Chartist.Interpolation.cardinal({
  //         tension: 0
  //       }),
  //       low: 0,
  //       high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
  //       chartPadding: {
  //         top: 0,
  //         right: 0,
  //         bottom: 0,
  //         left: 0
  //       },
  //     }

  //     var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  //     var animationHeaderChart = new Chartist.Line('#websiteViewsChart', dataDailySalesChart, optionsDailySalesChart);
  //   }
  // },

  initDashboardPageCharts: function() {

    if ($('#dailySalesChart').length != 0 || $('#completedTasksChart').length != 0 || $('#websiteViewsChart').length != 0) {
      /* ----------==========     Daily Sales Chart initialization    ==========---------- */

      dataDailySalesChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [20, 17, 7, 17, 23, 18, 38]
        ]
      };

      optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      md.startAnimationForLineChart(dailySalesChart);



      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      dataCompletedTasksChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [12, 17, 7, 17, 23, 18, 38]
        ]
      };

      optionsCompletedTasksChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      md.startAnimationForLineChart(completedTasksChart);


      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataWebsiteViewsChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [12, 17, 7, 17, 23, 18, 38]
        ]
      };
      var optionsWebsiteViewsChart = {
        axisX: {
          showGrid: false
        },
        low: 0,
        high: 1000,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
        }
      };
      var responsiveOptions = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      md.startAnimationForBarChart(websiteViewsChart);
    }
  },
  
  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(15.32585, 119.9800576);
    // var myLatlng2 = new google.maps.LatLng(15.326461,119.9807014);
    // var myLatlng3 = new google.maps.LatLng(15.3320527,119.976404);
    // var myLatlng4 = new google.maps.LatLng(15.3305897,119.9796104);
    // var myLatlng5 = new google.maps.LatLng(15.3265138,119.9724989);
    // var myLatlng6 = new google.maps.LatLng(15.3219876,119.9747828);

    var mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        "featureType": "water",
        "stylers": [{
          "saturation": 43
        }, {
          "lightness": -11
        }, {
          "hue": "#0088ff"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "hue": "#ff0000"
        }, {
          "saturation": -100
        }, {
          "lightness": 99
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#808080"
        }, {
          "lightness": 54
        }]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ece2d9"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ccdca1"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#767676"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "poi",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#b8cb93"
        }]
      }, {
        "featureType": "poi.park",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.sports_complex",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.medical",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "simplified"
        }]
      }]

    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Coordinates 1"
    });

    // var marker2 = new google.maps.Marker({
    //   position: myLatlng2,
    //   title: "Coordinates 2"
    // });

    // var marker3 = new google.maps.Marker({
    //   position: myLatlng3,
    //   title: "Coordinates 3"
    // });
    
    // var marker4 = new google.maps.Marker({
    //   position: myLatlng4,
    //   title: "Coordinates 4"
    // });

    // var marker5 = new google.maps.Marker({
    //   position: myLatlng5,
    //   title: "Coordinates 5"
    // });

    // var marker6 = new google.maps.Marker({
    //   position: myLatlng6,
    //   title: "Coordinates 6"
    // });


    // To add the marker to the map, call setMap();
    marker.setMap(map);
    // marker2.setMap(map);
    // marker3.setMap(map);
    // marker4.setMap(map);
    // marker5.setMap(map);
    // marker6.setMap(map);
  }

}

//session storage