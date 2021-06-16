
const clock = function(){
  const timer = document.getElementById('timer');
  let date = new Date();

  let year = date.getFullYear();
  let mouth = date.getMonth();
  let nowdate = date.getDate();
  let day = date.getDay();
  let hours = date.getHours();
  let miutes = date.getMinutes();
  let seconds = date.getSeconds();

  let setday;
  switch(day){
    case 1 :
      setday = "월"; break;
    case 2 :
      setday = "화"; break;
    case 3 :
      setday = "수"; break;
    case 4 :
      setday = "목"; break;
    case 5 : 
      setday = "금"; break;
    case 6 : 
      setday = "토"; break;
    case 7 :
      setday = "일"; break;
    default :
      setday = "Error";
  }


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
  

  let myTimed =  year + '년 ' +mouth+ '월 '+nowdate+'일 '+setday+'요일 '+sethours()+ hours+'시 ' + miutes+'분 '+seconds+'초';
  timer.innerText = myTimed;
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
let radius = canvas.height/2;


const drow_arc = function(){
  context.arc(radius,radius , radius,0, Math.PI*2);
  context.lineWidth = 8;
  context.strokeStyle ='#000';
  context.stroke();
  context.fillStyle = '#fff';
  context.fill();

  // 시계 -시간
  context.translate(radius,radius);
  for(let i=0; i<12; i++){
    context.beginPath();
    context.rotate(Math.PI/6);
    context.moveTo(500, 0);
    context.lineTo(450,0);
    context.stroke();
  }
  context.restore();

  // 시계
}
drow_arc();
// radians = (Math.PI/180)*degrees
// let drowing_arc = function(){
//   context.save();
//   context.arc(150, 150, 100, 0, Math.PI*2, false);
//   context.translate(75,75);
//   context.fillStyle = '#ffffff';
//   context.strokeStyle = "#000000"
//   context.stroke();
//   context.fill();


//   //시계판 - 시간
//   context.save();
//   for (let i=0;i<12;i++){
//     context.beginPath();
//     context.translate(0,0);
//     context.rotate(Math.PI/6);
//     context.moveTo(0,0);
//     context.lineTo(0,0);
//     context.stroke();
//   }
//   context.restore();

//   context.save();




// }
  
// const animate = function(){

//   requestAnimationFrame(animate);
// }
 


// drowing_arc();

setInterval(() => {
  clock();
}, 1000);

// $("p.title").on('click',function(){
//   $(this).next(".con").slideToggle(100);
// });




