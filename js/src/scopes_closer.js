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
  outerFunction()() // I see the outer variable!

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



// append 쓸때마다 뒤에다 채워넣는 기능 (요소를 삽임) 1. 요소를 생성하고 넣어줘야한다. 2. 요소된 태그에 내용을 넣어야한다.
// var e = '<div></div>';
// e.append(e);

