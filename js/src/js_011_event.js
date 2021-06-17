// js_011_event

const evtUl = document.getElementsByClassName('event_list')[0];
let ev = evtUl.getElementsByTagName('li');

// a>b callback function(콜백 함수)
ev[0].addEventListener('click',function(){
    ev[0].style.backgroundColor = 'rgba(0,255,0,0.2)';
    ev[0].innerHTML = '마우스로클릭했음';

    let hasClassCk = evtUl.getElementsByTagName('act').length;
    if(hasClassCk >0 ){
        ev[0].classList.remove('act');
    }else {
        ev[0].classList.add('act');
    }
});


// mousevoer 와 mouseenter 는 중복성을가지느냐 아니냐의 차이가있다.
ev[1].addEventListener('mouseenter',function(){
    ev[1].style.backgroundColor = 'rgba(255,255,0,0.2)';
    ev[1].innerHTML = '마우스를 올렸음';
});
// removeAttribute 속성제거
ev[1].addEventListener('mouseleave',function(){
    ev[1].removeAttribute('style');
    ev[1].innerHTML = '마우스를 치움';
});
let liAnker = ev[2].getElementsByTagName('a')[0]

liAnker.addEventListener('focus',function(){
    liAnker.style.backgroundColor = 'rgba(255,255,0,0.2)';
});

liAnker.addEventListener('blur',function(){
    liAnker.style.backgroundColor = 'rgba(0,255,255,0.2)';
});

ev[3].addEventListener('mousemove',function(){
    ev[3].innerHTML = '마우스가 움직이고있음';
    ev[3].style.fontWeight = 300;

});

//KEY EVENT -===============================================

let box = document.getElementById('inputBox');
let kCode = document.getElementById('code');

box.addEventListener('keyup',function(code){
    kCode.innerHTML = 'KeyCode : '+code.keyCode;
    let val = box.value;
    let typeCheck = (parseInt(code.key) <= 9);
    console.log(val);

    if(!typeCheck){
        console.log('숫자를 입력하세요.');
      }else{
        console.log('check !');
      }

    if(code.keyCode > 47 && code.keyCode < 58){
        console.log(typeCheck);
    }else {
        console.log('Please enter a number');
    }

    (function (text){
        let tlen = text.length;
        let i=0;
        let parserNumber = parseInt(text[i]);
        let checkN = isNaN(parserNumber);
        for( ; i < tlen ; i+=1 ){
          if(checkN){
            console.error('숫자가 아닙니다.');
            break;
          }else{
            console.log('모두 숫자입니다.');
          }
        }
      })(val)
});


//MOUSE EVENT =====================================================

let wrap = document.getElementById('wrap');
let mlocation = document.getElementById('location');

wrap.addEventListener("mousemove",mouseLocation);

function mouseLocation(x){
    let xy = x.clientX + "*" + x.clientY;
    let positionX = x.clientX;
    let positionY = x.clientY;

    mlocation.innerHTML = xy;
    mlocation.style.left = positionX + "px";
    mlocation.style.top = positionX + "px";
}   

// offset / screen / client ...