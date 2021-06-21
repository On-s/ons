let title = [
    "#javascript","#project","#study","#test"
]

    for(let i =0; i<title.length; i++){
        $(title[i]).click(function(){
            $("p").stop().slideToggle(300);
          }); 
    }
// ======================================================================
// http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=4bc6ce4f17f7d999b9815f6271e985f7&units=metric

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

//ajax 를 사용하여 api 불러오기
const dataUrl = 'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=bb720f1fa40b4ddd6446c2fbd0e9f2c9&units=metric';
// ajax 에 데이터를 넣음



$.ajax({
    dataType:'JSON',
    url:dataUrl,
    context: document.body
}).done(function(data){
        let icon  = $('#waether_icon'); 

        let name      = '도시이름 :' + data.name;
        let temp      = '온도 :'   + data.main.temp;
        let feelsLike = '체감온도 :' + data.main.feels_like;
        let humidity  = '습도 :'   + data.main.humidity; 
        let windSpeed = '풍속'     + data.wind.speed;
        let weatherId = data.weather[0].id;
        let weatherStatus = data.weather[0].main;
        let weatherIcon = data.weather[0].icon;
        let iconUrl = 'url("http://openweathermap.org/img/wn/'
        let iconlink = iconUrl + weatherIcon+ '.png")';

        $("#name").text(name);       
        $("#temp").text(temp);       
        $("#feelsLike").text(feelsLike);       
        $("#humidity").text(humidity);       
        $("#windSpeed").text(windSpeed);   
        $("#waether_icon").text(weatherStatus);

        icon.css({
            'backgroundImage' : iconlink
        });
         
    }
)



// (function($){
//     //즉시실행함수 $을 안에사용하고 
//     // 단점 : 아래서만 동작하는 코딩이다. ready 부분이없음.
//     //내부함수로 raedy 를사용하면 위에단점을 커버칠 수 있음.
// })(jQuery);

