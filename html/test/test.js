

// (function ($) {
//     var headBox = $('.headBox');
//     // var headBox = document.querySelector(".headBox");
//     headBox.load('./headBox.html');
// })(jQuery);



// resolve 결과 값 , reject 거부된값 (이유?) 에러시 사용 - 호출되지 않음
// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code.
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(function(){
//       resolve("Success!"); // Yay! Everything went well!
//     }, 250);
//   });
  
//   myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage);
//   });


function countdown(seconds) {
    return new Promise((resolve, reject) => {
      for (let i = seconds; i >= 0; i--) {
        setTimeout(() => {
          if (i > 0) console.log(i + '...');
          else resolve(console.log("GO!"));
        }, (seconds - i) * 1000);
      }
    });
  } 