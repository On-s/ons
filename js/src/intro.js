

const clock = function(){
  const timer = document.getElementById('timer');
  let date = new Date();
  let year = date.getFullYear();
  let mouth = date.getMonth();
  let nowdate = date.getDate();
  // let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // let setday;
  let week = ['일', '월', '화', '수', '목', '금', '토'];
  let day = week[new Date().getDay()];

  // switch(day){
  //   case 0 :
  //     setday = "월"; break;
  //   case 1 :
  //     setday = "화"; break;
  //   case 2 :
  //     setday = "수"; break;
  //   case 3 :
  //     setday = "목"; break;
  //   case 4 : 
  //     setday = "금"; break;
  //   case 5 : 
  //     setday = "토"; break;
  //   case 6 :
  //     setday = "일"; break;
  //   default :
  //     setday = "Error";
  // }


  let sethours = function(){
    let time_hours;
    if(hours > 12) {
      time_hours = 'PM';
      hours = hours-12;
    }
    else {
      time_hours = 'AM';
    }
    return time_hours;
  }
  

  let myTimed =  year + '년 ' +(mouth+1)+ '월 '+nowdate+'일 '+day+'요일 '+sethours()+ hours+'시 ' + minutes+'분 '+seconds+'초';
  timer.innerText = myTimed;
}


const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
let cav_width = canvas.width;
let cav_height = canvas.height;
let radius = canvas.height/2;
context.translate(radius,radius);

//시계그리기
const drowArc = function(context , radius){
  //밖에 큰원
  context.beginPath();
  context.arc(0,0 , radius-5,0, Math.PI*2);
  context.lineWidth = 8;
  context.strokeStyle ='#333';
  context.stroke();
  context.fillStyle = '#fff';
  context.fill();

  //가운데원
  context.beginPath();
  context.arc(0,0 ,20,0, Math.PI*2);
  context.fillStyle = '#333';
  context.fill();
  context.restore();
  context.closePath();
}


//시계 위치 그리기
const drowClock = function(){
  context.beginPath();
  context.lineWidth = 3;
  for(let i=0; i<12; i++){
    context.rotate(i*Math.PI / 6);
    context.moveTo(220,0);;
    context.lineTo(250,0);
    context.stroke();
    context.rotate(-(i*Math.PI / 6));
  }
  context.closePath();
}

//시간 그리기 
const drowTime = function(context){

  let date = new Date(); 
  let hour = date.getHours(); 
  let minutes = date.getMinutes(); 
  let seconds = date.getSeconds(); 
  // 시침
  hour = hour % 12; 
  hour = ( hour * Math.PI / 6 ) + ( minutes * Math.PI / 360 ) + ( seconds * Math.PI / 21600 ); 
  // 분침 
  minutes = ( minutes * Math.PI / 30 ) + ( seconds * Math.PI / 1800 ); 

  // 초침 
  seconds = ( seconds * Math.PI ) / 30; 

  // 각 바늘의 길이와 두께만 변경함 (context, position , 라인길이 , 라인두께)
  drawHand( context, hour, 100, 20 ); //시침
  drawHand( context, minutes, 150, 10 ); //분침
  drawHand( context, seconds, 200, 3 ); //초침
}

  // 시계 바늘그리기
let drawHand = function( context, position, length, width ){ 
  
  context.beginPath();
  context.lineWidth = width; 
  context.moveTo( 0, 0 ); 
  context.rotate( position ); 
  context.lineTo( 0, -length ); 
  context.stroke(); 
  context.rotate( -position ); 
  context.restore();
  context.closePath();
} 


let clearCanvas = function(){
  context.clearRect(0,0,canvas.width,canvas.height);
}



setInterval(() => {
  clock(); // 시계(숫자)
  clearCanvas();
  drowArc( context, radius );
  drowTime(context); //시계바늘
  drowClock(context);
}, 1000);




