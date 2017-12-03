
function search()
{
    // $.getJSON("http://tj.nineton.cn/Heart/index/all?city=CHSH000000&language=&unit=&aqi=&alarm=&key=", function(json){
    //     alert("JSON Data: " + json.success);
    //   });

      
    function ReadFile(data) {
      // var box = document.getElementById("song");
      // box.innerHTML = data;
      var len = data.length -1;
      data = data.substring(0,len);
      console.log("city: " + data);
      var url = 'https://free-api.heweather.com/s6/weather/now?location='+data+'&key=5abbef3873654bdf90836ef5c304ce87';
      $.get(url, function (res) { 
        var temperature = res["HeWeather6"][0]["now"]["tmp"];
        var box = document.getElementById("temperature");
        box.innerHTML = temperature + "摄氏度";
        console.log(res["HeWeather6"][0]["now"]["tmp"]); }, 'json'); 
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

