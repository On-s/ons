let title = [
    "#javascript","#project","#study","#test"
]

    for(let i =0; i<title.length; i++){
        $(title[i]).click(function(){
            $("p").slideToggle();
          }); 
    }
// ======================================================================
// http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=4bc6ce4f17f7d999b9815f6271e985f7&units=metric

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

//ajax 를 사용하여 api 불러오기
var dataUrl = 'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=bb720f1fa40b4ddd6446c2fbd0e9f2c9&units=metric';
// ajax 에 데이터를 넣음
$.ajax({
    dataType:'JSON',
    url:dataUrl,
    context: document.body
}).done(function(data){
        let name      = '도시이름 :' + data.name;
        let temp      = '온도 :'   + data.main.temp;
        let feelsLike = '체감온도 :' + data.main.feels_like;
        let humidity  = '습도 :'   + data.main.humidity; 
        let windSpeed = '풍속'     + data.wind.speed;

        $("#name").text('도시이름 :' + name);       
    }
)


