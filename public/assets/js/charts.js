

chart = {
    recoveryChart: function() {
      // Create a simple bar chart
      let a, b
      let today = new Date().getTime();
      let today_r = [];
      let today_1_r = [];
      let today_2_r = [];
      let today_3_r = [];
      let today_4_r = [];
      let today_5_r = [];
      let today_6_r = [];
      let today_7_r = [];


      db.collection("trace_record").orderBy('time_added').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(data => {
                  
          if(data.doc.data().type == "Recovery"){
            const convertfireBaseTime = new Date(
              data.doc.data().time_added.seconds * 1000 + data.doc.data().time_added.nanoseconds / 1000000,
            );
            if(timeConverter(today) == timeConverter(convertfireBaseTime)){
              // today_r = [];
              //console.log("0 " + timeConverter(convertfireBaseTime))
              today_r.push(data.doc.data())

            }else if(timeConverter(today, 1) == timeConverter(convertfireBaseTime)){
              //console.log("1 " + timeConverter(convertfireBaseTime))
              today_1_r.push(data.doc.data())



            }else if(timeConverter(today, 2) == timeConverter(convertfireBaseTime)){
              //console.log("2 " + timeConverter(convertfireBaseTime))
              today_2_r.push(data.doc.data())


            }else if(timeConverter(today, 3) == timeConverter(convertfireBaseTime)){
              //console.log("3 " + timeConverter(convertfireBaseTime))
              today_3_r.push(data.doc.data())


            }else if(timeConverter(today, 4) == timeConverter(convertfireBaseTime)){
              //console.log("4 " + timeConverter(convertfireBaseTime))
              today_4_r.push(data.doc.data())


            }else if(timeConverter(today, 5) == timeConverter(convertfireBaseTime)){
              //console.log("5 " + timeConverter(convertfireBaseTime))
              today_5_r.push(data.doc.data())

              
            }else if(timeConverter(today, 6) == timeConverter(convertfireBaseTime)){
              //console.log("6 " + timeConverter(convertfireBaseTime))
              today_6_r.push(data.doc.data())

            }else if(timeConverter(today, 7) == timeConverter(convertfireBaseTime)){
              //console.log("7 " + timeConverter(convertfireBaseTime))
              today_7_r.push(data.doc.data())

            }
          }else{
    
          }
          //console.log(today_r.length, today_1_r.length, today_2_r.length, today_3_r.length, today_4_r.length, today_5_r.length, today_6_r.length, today_7_r.length,)
        
        });
        function timeConverter(convertfireBaseTime, day){
          let interval = day || 0
          let a = new Date(convertfireBaseTime);
          let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          let dayName = days[a.getDay()];
          let abbrmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          let fullmonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          let year = a.getFullYear();
          let month = abbrmonths[a.getMonth()];
          let date = a.getDate() - interval;
          let hour = a.getHours();
          let min = a.getMinutes();
          let sec = a.getSeconds();      
          let finalformat = a.getMonth() + '/' + date + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
          let finaldateformat = a.getMonth() + '/' + date + '/' + year 
          
          return finaldateformat;
        }


          function formatDate(date){
            var dd = date.getDate();
            var mm = date.getMonth()+1;
            var yyyy = date.getFullYear();
            
            var day = date.getDay();
            let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
            let dayNow= days[day];
            if(dd<10) {dd='0'+dd}
            if(mm<10) {mm='0'+mm}
            
            date = mm+'/'+dd+'/'+yyyy;
            return dayNow
        }
      
        function Last7Days (today) {
            var result = [];
            for (var i=0; i<7; i++) {
                var d = new Date(today);
                d.setDate(d.getDate() - i);
                result.push( formatDate(d) )
            }        
            return(result);
        }
      
        let recoverydata = {
          labels: [Last7Days(today)[0], Last7Days(today)[1], Last7Days(today)[2], Last7Days(today)[3], Last7Days(today)[4], Last7Days(today)[5], Last7Days(today)[6]],
          series: [
            
            [today_r.length, today_1_r.length, today_2_r.length, today_3_r.length, today_4_r.length, today_5_r.length, today_6_r.length]
          ]
        };

        recoveryOptionChart = {
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

        // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
        new Chartist.Line('#recoveryChartdiv', recoverydata, recoveryOptionChart);

      });
    
      
    },



    infectedChart: function() {
      // Create a simple bar chart
      let a, b
      let today = new Date().getTime();
      let today_r = [];
      let today_1_r = [];
      let today_2_r = [];
      let today_3_r = [];
      let today_4_r = [];
      let today_5_r = [];
      let today_6_r = [];
      let today_7_r = [];


      db.collection("trace_record").orderBy('time_added').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(data => {
                  
          if(data.doc.data().type == "Infected"){
            const convertfireBaseTime = new Date(
              data.doc.data().time_added.seconds * 1000 + data.doc.data().time_added.nanoseconds / 1000000,
            );
            if(timeConverter(today) == timeConverter(convertfireBaseTime)){
              // today_r = [];
              //console.log("0 " + timeConverter(convertfireBaseTime))
              today_r.push(data.doc.data())

            }else if(timeConverter(today, 1) == timeConverter(convertfireBaseTime)){
              //console.log("1 " + timeConverter(convertfireBaseTime))
              today_1_r.push(data.doc.data())



            }else if(timeConverter(today, 2) == timeConverter(convertfireBaseTime)){
              //console.log("2 " + timeConverter(convertfireBaseTime))
              today_2_r.push(data.doc.data())


            }else if(timeConverter(today, 3) == timeConverter(convertfireBaseTime)){
              //console.log("3 " + timeConverter(convertfireBaseTime))
              today_3_r.push(data.doc.data())


            }else if(timeConverter(today, 4) == timeConverter(convertfireBaseTime)){
              //console.log("4 " + timeConverter(convertfireBaseTime))
              today_4_r.push(data.doc.data())


            }else if(timeConverter(today, 5) == timeConverter(convertfireBaseTime)){
              //console.log("5 " + timeConverter(convertfireBaseTime))
              today_5_r.push(data.doc.data())

              
            }else if(timeConverter(today, 6) == timeConverter(convertfireBaseTime)){
              //console.log("6 " + timeConverter(convertfireBaseTime))
              today_6_r.push(data.doc.data())

            }else if(timeConverter(today, 7) == timeConverter(convertfireBaseTime)){
              //console.log("7 " + timeConverter(convertfireBaseTime))
              today_7_r.push(data.doc.data())

            }
          }else{
    
          }
          //console.log(today_r.length, today_1_r.length, today_2_r.length, today_3_r.length, today_4_r.length, today_5_r.length, today_6_r.length, today_7_r.length,)
        
        });
        function timeConverter(convertfireBaseTime, day){
          let interval = day || 0
          let a = new Date(convertfireBaseTime);
          let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          let dayName = days[a.getDay()];
          let abbrmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          let fullmonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          let year = a.getFullYear();
          let month = abbrmonths[a.getMonth()];
          let date = a.getDate() - interval;
          let hour = a.getHours();
          let min = a.getMinutes();
          let sec = a.getSeconds();      
          let finalformat = a.getMonth() + '/' + date + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
          let finaldateformat = a.getMonth() + '/' + date + '/' + year 
          
          return finaldateformat;
        }


          function formatDate(date){
            var dd = date.getDate();
            var mm = date.getMonth()+1;
            var yyyy = date.getFullYear();
            
            var day = date.getDay();
            let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
            let dayNow= days[day];
            if(dd<10) {dd='0'+dd}
            if(mm<10) {mm='0'+mm}
            
            date = mm+'/'+dd+'/'+yyyy;
            return dayNow
        }
      
        function Last7Days (today) {
            var result = [];
            for (var i=0; i<7; i++) {
                var d = new Date(today);
                d.setDate(d.getDate() - i);
                result.push( formatDate(d) )
            }        
            return(result);
        }
      
        let infecteddata = {
          labels: [Last7Days(today)[0], Last7Days(today)[1], Last7Days(today)[2], Last7Days(today)[3], Last7Days(today)[4], Last7Days(today)[5], Last7Days(today)[6]],
          series: [
            
            [today_r.length, today_1_r.length, today_2_r.length, today_3_r.length, today_4_r.length, today_5_r.length, today_6_r.length]
          ]
        };

        infectedOptionChart = {
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

        // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
        new Chartist.Line('#infectedChartdiv', infecteddata, infectedOptionChart);

      });
    
      
    },


    deathChart: function() {
      // Create a simple bar chart
      let a, b
      let today = new Date().getTime();
      let today_r = [];
      let today_1_r = [];
      let today_2_r = [];
      let today_3_r = [];
      let today_4_r = [];
      let today_5_r = [];
      let today_6_r = [];
      let today_7_r = [];


      db.collection("trace_record").orderBy('time_added').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(data => {
                  
          if(data.doc.data().type == "Death"){
            const convertfireBaseTime = new Date(
              data.doc.data().time_added.seconds * 1000 + data.doc.data().time_added.nanoseconds / 1000000,
            );
            if(timeConverter(today) == timeConverter(convertfireBaseTime)){
              // today_r = [];
              //console.log("0 " + timeConverter(convertfireBaseTime))
              today_r.push(data.doc.data())

            }else if(timeConverter(today, 1) == timeConverter(convertfireBaseTime)){
              //console.log("1 " + timeConverter(convertfireBaseTime))
              today_1_r.push(data.doc.data())



            }else if(timeConverter(today, 2) == timeConverter(convertfireBaseTime)){
              //console.log("2 " + timeConverter(convertfireBaseTime))
              today_2_r.push(data.doc.data())


            }else if(timeConverter(today, 3) == timeConverter(convertfireBaseTime)){
              //console.log("3 " + timeConverter(convertfireBaseTime))
              today_3_r.push(data.doc.data())


            }else if(timeConverter(today, 4) == timeConverter(convertfireBaseTime)){
              //console.log("4 " + timeConverter(convertfireBaseTime))
              today_4_r.push(data.doc.data())


            }else if(timeConverter(today, 5) == timeConverter(convertfireBaseTime)){
              //console.log("5 " + timeConverter(convertfireBaseTime))
              today_5_r.push(data.doc.data())

              
            }else if(timeConverter(today, 6) == timeConverter(convertfireBaseTime)){
              //console.log("6 " + timeConverter(convertfireBaseTime))
              today_6_r.push(data.doc.data())

            }else if(timeConverter(today, 7) == timeConverter(convertfireBaseTime)){
              //console.log("7 " + timeConverter(convertfireBaseTime))
              today_7_r.push(data.doc.data())

            }
          }else{
    
          }
          //console.log(today_r.length, today_1_r.length, today_2_r.length, today_3_r.length, today_4_r.length, today_5_r.length, today_6_r.length, today_7_r.length,)
        
        });
        function timeConverter(convertfireBaseTime, day){
          let interval = day || 0
          let a = new Date(convertfireBaseTime);
          let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          let dayName = days[a.getDay()];
          let abbrmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          let fullmonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          let year = a.getFullYear();
          let month = abbrmonths[a.getMonth()];
          let date = a.getDate() - interval;
          let hour = a.getHours();
          let min = a.getMinutes();
          let sec = a.getSeconds();      
          let finalformat = a.getMonth() + '/' + date + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
          let finaldateformat = a.getMonth() + '/' + date + '/' + year 
          
          return finaldateformat;
        }


          function formatDate(date){
            var dd = date.getDate();
            var mm = date.getMonth()+1;
            var yyyy = date.getFullYear();
            
            var day = date.getDay();
            let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
            let dayNow= days[day];
            if(dd<10) {dd='0'+dd}
            if(mm<10) {mm='0'+mm}
            
            date = mm+'/'+dd+'/'+yyyy;
            return dayNow
        }
      
        function Last7Days (today) {
            var result = [];
            for (var i=0; i<7; i++) {
                var d = new Date(today);
                d.setDate(d.getDate() - i);
                result.push( formatDate(d) )
            }        
            return(result);
        }
      
        let deathdata = {
          labels: [Last7Days(today)[0], Last7Days(today)[1], Last7Days(today)[2], Last7Days(today)[3], Last7Days(today)[4], Last7Days(today)[5], Last7Days(today)[6]],
          series: [
            
            [today_r.length, today_1_r.length, today_2_r.length, today_3_r.length, today_4_r.length, today_5_r.length, today_6_r.length]
          ]
        };

        deathOptionChart = {
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

        // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
        new Chartist.Line('#deathChartdiv', deathdata, deathOptionChart);

      });
    
      
    }
}