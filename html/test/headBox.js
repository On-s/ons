
//jQuery ------------------------------
// flie name : headBox
//-------------------------------------
(function($){


    var asyncaa = async function() {
        // var test = $('.test');
        var test = await Promise.resolve('123');
        return test;
    }
    // var inserttest = asyncaa().PromiseResult;
    var inserttest = asyncaa().Promise;

    console.log(asyncaa());
    console.log(inserttest);

    // function testawait() {
    //     test.text(555);
    // }

    // // var test1 = await testawait();

    // function awaitt() {
    //     var test1 = testawait();
    //     console.log(test1);
    // }

    // testawait();
    // awaitt();

})(jQuery);

// let tGo = async function(){
//     // return 'test';
//     return Promise.resolve('test');
// }
// tGo().then((i) => console.log(i))
// let ttt = tGo().then(function(i){
//    return Promise.resolve(i);
// });

// console.log( tGo );

// let aGo = await tGo();
// console.log( aGo );

// let tGo = async () => {
//     this.greeting = await Promise.resolve("Hello");
//     return greeting
//   };
 
//   tGo().(thenconsole.log);


// const p = new Promise((res, rej) => {    res(1);  });

// async function asyncReturn() {    return p;  }
// function basicReturn() {    return Promise.resolve(p);  }
  
//   console.log(basicReturn()); // true
//   console.log(asyncReturn()); // false