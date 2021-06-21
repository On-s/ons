//   함수 내부에 함수를 작성할 때마다, 여러분은 클로저를 생성한 것입니다. 내부에 작성된 함수가 바로 클로저

function outerFunction () {
    const outer = 'I see the outer variable!'
    function innerFunction() {
      console.log(outer)
    }
    return innerFunction
  }
  outerFunction()() // I see the outer variable!  == > 
  //위와 같은 코드 함수가 선언되자마자 반환되도록 선언한다.
  function outerFunction () {
    const outer = 'I see the outer variable!'
    
    return function innerFunction() {
      console.log(outer)
    }
  }
  outerFunction() // I see the outer variable!

// 클로저는 외부 함수의 변수에 접근할 수 있기 때문에, 일반적으로 두 가지 목적을 위해 사용합니다.
// 사이드 이펙트(side effects) 제어하기
// private 변수 생성하기

// 예제

// function makemoney(howmuch) {
//     // 3초마다 money 를 생성
//     setTimeout(_ => console.log("make a "+ howmuch + " money"),3000);
// }
// => 은 function(_:any):void 란뜻이다.
// setTimeout 이라는 사이드이펙트가 존재
// 3초 이후가아닌 얼마인지 알고나서 호출하고 싶을때에 클로저를 활용한다
function latermoney (howmuch) {
return function money() {
  setTimeout(_ => console.log("make a "+ howmuch + " money"),3000);
  }
}
const makemoney = latermoney(500);
makemoney();

//함수호출시 바로 실행되는 경우가 있는데,
//클로저를 사용하게되면 외부에서 바로 접근할 수 가 없다.
//보안이나 코드가 꼬일가능성이 적어진다.


// 함수 사용시 클로저 기능을 사용하는 습관을 들이는것이 좋다.


// 외부에 노출은 줄이고, 함수를 수행동작 처리시 변수에 단순히 선언 및 정리했을때
// 바로 수행되는 형식을 방지하기 위해 처리하는 기능


function outerFn(){
  let a = 10;
  const innerFn = function(){console.log(a);}
  return innerFn;
}

let myInner = outerFn();
myInner();





// append 쓸때마다 뒤에다 채워넣는 기능 (요소를 삽임) 1. 요소를 생성하고 넣어줘야한다. 2. 요소된 태그에 내용을 넣어야한다.
// var e = '<div></div>';
// e.append(e);

// 1. 해당요소를 생성 - document.creatElemnet()
// 2. 생성요소에 내용을 넣고 - append() 
// 3. 담긴 요소/내용을 선택자 내부 앞/뒤에 채워넣기 - (뒤) appendChild()

//ID 값 받아오기
// var a = document.getElementById('a');

// //변수 e = 옵션이라는 요소 생성
// var e = document.createElement('option');
// //속성지정 value라는 속성에 velue test 값을 넣는다.
// e.setAttribute('value', 'velue test');
// //e 의 값을 test 로 바꾼다.
// e.append('test');

// //a 자식요소로 e를 설정
// a.appendChild(e);

// 함수로 처리
// var b = function(e){
//   var c = document.createElement('option');
//   c.setAttribute ('value', e);
//   c.append(e , '년');
//   a.appendChlid(e);
// }

// b(55);
// for (var y=0; y<99; y ++){
//   b(y);
// }


// var date = new Date();
// var year = date.getFullYear();


// var yearset = year;
// var year = document.getElementById ()



// var i=1;

// for (; i < 10; i ++){
//   var j=1
//   for (; j < 10; j ++){
//     console.log(i + "*" + j + "=" + i*j);
//   }
// }


//DOM - (document object model) - 선택자 
// id : document.getElementById("id");
// class : document.getElementsByClassName('class')[0];
// tag : document.getElementsByTagName("tagname")[0];
// Attribute : document.getAttribute('속성','속성이름');
// allInOne : document.querySelector()
// MultiallInOne : document.querySelectorAll()[];


// makeElement : document.createElement();
// makeAttribute : document.setAttribute(속,값);
// insert text(내부요소 삭제 후 삽입) : 선택자.innerText = '내용'; 
// insert text(내부요소의 뒤에 추가) : 선택자.append(내용);
// insert html(내부요소 삭제 후 삽입) : 선택자.innerHTML = '코드';
// insert html(내부요소의 뒤에 추가) : 선택자.appendChild('코드');






