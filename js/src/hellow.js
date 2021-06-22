/*// 
// var let const 의 차이점 
//   var = 함수레벨스코프 let,const 는 블럭레벨스코프이다.
//   var = 전역변수 let,const 는 지역변수로 생각하면 된다.
//   var변수는 선언전 사용가능 let const 불가능
//   var 중복선언가능 let const 중복선언 불가능
//   var let 은 초기값을 주지않아도됨 const 는 초기값을 반드시 할당해야함
//   var let 은 값을 재할당가능 const는 값을 재할당할수 없음

//   var 은 버그발생 및 메모리누수 가능 위험있기 때문에 let , const 를 사용하는것이 좋다.
//  

// // https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d
// // var는 function-scope이기 때문에 for문이 끝난다음에 i를 호출하면 값이 출력이 잘 된다.
// // 이건 var가 hoisting이 되었기 때문이다.
// for(var j=0; j<10; j++) {
//   console.log('j', j)
// }
// console.log('after loop j is ', j); // after loop j is 10


// // 아래의 경우에는 에러가 발생한다.
// function counter () {
//   for(var i=0; i<10; i++) {
//     console.log('i', i)
//   }
// }
// counter()
// console.log('after loop i is', i); // ReferenceError: i is not defined



// // IIFE를 사용하면
// // i is not defined가 뜬다.
// (function() {
//   // var 변수는 여기까지 hoisting이 된다.
//   for(var i=0; i<10; i++) {
//     console.log('i', i)
//   }
// })()
// console.log('after loop i is', i); // ReferenceError: i is not defined

// // 이 코드를 실행하면 에러없이 after loop i is 10이 호출된다.
// (function() {
//   for(i=0; i<10; i++) {
//     console.log('i', i)
//   }
// })()
// console.log('after loop i is', i); // after loop i is 10



// // javascipt에는 그동안 var만 존재했기 때문에 아래와 같은 문제가 있었다.

// // 이미 만들어진 변수이름으로 재선언했는데 아무런 문제가 발생하지 않는다.
// var a = 'test';
// var a = 'test2';

// // hoisting으로 인해 ReferenceError에러가 안난다.
// c = 'test';
// var c;

// // let
// let a = 'test';
// let a = 'test2'; // Uncaught SyntaxError: Identifier 'a' has already been declared
// a = 'test3';  // 가능

// // const
// const b = 'test'
// const b = 'test2' // Uncaught SyntaxError: Identifier 'a' has already been declared
// b = 'test3'    // Uncaught TypeError:Assignment to constant variable.


// // let, const가 hoisting이 발생하지 않는건 아니다.

// // var가 function-scoped로 hoisting이 되었다면

// // let, const는 block-scoped단위로 hoisting이 일어난다

// c = 'test' // ReferenceError: c is not defined
// let c

// // 반대로는 가능하다 

// let c
// c = 'test' //선언후 값을 할당하면된다.
*/


var b = 0; 
type = typeof(b);
console.log(b,type);


// https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19

// 자바스크립트 스코프와 클로저(JavaScript Scope and Closures)
// Scope를 우리말로 번역하면 ‘범위’라는 뜻을 가지고 있습니다. 즉, 스코프(Scope)란 ‘변수에 접근할 수 있는 범위

const globalVariable = 'some value'

function sayHello () {
    console.log(hello)
  }
  console.log(hello) // 'Hello CSS-Tricks Reader!'
  sayHello() // 'Hello CSS-Tricks Reader!'





  // Jquery for문 안쓰는 이유
  // 내장되어있는 기능
  // var on = function( a, sel, event ){
//     var aLen = a.length;
//     for(i=0; i<aLen; i++){
//         sel.addEvnentListener(event, function(){
//             if(i){
                
//             }
//         })
//     }   
// }
