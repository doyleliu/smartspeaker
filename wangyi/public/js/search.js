        
        
        function search() {
            var timer = null 
            clearTimeout(timer);
            // timer = setTimeout(ReadFile, 5000);
            function ReadFile(data) {
                console.log(data) ;
                if(data.indexOf("天气") >= 0){
                    data = data.substring(0,data.indexOf("天气")-1);
                    var box = document.getElementById("song");
                    box.innerHTML = data;
                    var url = 'https://free-api.heweather.com/s6/weather/now?location='+data+'&key=5abbef3873654bdf90836ef5c304ce87';
                    $.get(url, function (res) { 
                      var temperature = res["HeWeather6"][0]["now"]["tmp"];
                      var box = document.getElementById("temperature");
                      box.innerHTML = data + ": " + temperature + "摄氏度";
                      console.log(res["HeWeather6"][0]["now"]["tmp"]); }, 'json'); 
                  }
                  
                else{
                    var box = document.getElementById("song");
                    box.innerHTML = data;
                }
                
                

            }        
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {            
                ReadFile(xhr.responseText);
            };
            try {
                xhr.open("get", "test.txt", true);
                xhr.send();
            }
            catch (ex) {
                ReadFile(ex.message);
            } 
        }