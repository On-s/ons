// 선택자 및 기본 변수
var yInput = document.getElementById('x_location');
var xInput = document.getElementById('y_location');
var btn = document.getElementsByTagName('button')[0];
var x = 0;
var y = 0;


// 값입력 (???)
// var move_btn=true;


// 버튼클릭시 값을 확인
// 조건1 => 해당값이 숫자인가?
// 조건2 => 해당값이 양수 및 정수인가?


xInput.addEventListener('keyup', function(e){
    
    x = e.target.value;
})
yInput.addEventListener('keyup', function(e){
    y = e.target.value;
})

btn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(x, y);
});



/*
// if(move_btn){
//     loactionMove();
// }

    x = document.getElementById('x_location').value;
    y = document.getElementById('y_location').value;
    console.log(x);
    console.log(y);
    */

// 값확인 

// 좌표체크 

//출력
