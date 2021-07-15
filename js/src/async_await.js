
for (name of ["nkgokul", "BrendanEich", "gaearon"]) {
    userDetails = await fetch("https://api.github.com/users/" + name);
    userDetailsJSON = await userDetails.json();
    console.log("userDetailsJSON", userDetailsJSON);
  }


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();

// =============================================================================
  function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
      }, 2000)
    })
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
      }, 1000)
    })
  }
  
  async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
  
    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow) // 2. this runs 2 seconds after 1.
  
    const fast = await resolveAfter1Second()
    console.log(fast) // 3. this runs 3 seconds after 1.
  } // 여기선 await 을 변수 선언시 걸어서 slow가 생성이된다음 log 를걸고 앞에 await 이 끝날때까지 기다렸다가 두번째 fast 를 생성 순차적으로 실행된다.
  





  async function concurrentStart() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds() // starts timer immediately
    const fast = resolveAfter1Second() // starts timer immediately
  
    // 1. Execution gets here almost instantly
    console.log(await slow) // 2. this runs 2 seconds after 1.
    console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
  } // 여기선 slow를 실행 fast 를 실행시킨다 . 같이시작 1초먼저 startfast가 먼저끝남 그다음 슬로우가 끝남 로그 실행전 리턴값은 먼저 실행
  
  function concurrentPromise() {
    console.log('==CONCURRENT START with Promise.all==')
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]) // slow
      console.log(messages[1]) // fast
    })
  }





  
  async function parallel() {
    console.log('==PARALLEL with await Promise.all==')
  
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async()=>console.log(await resolveAfter2Seconds()))(),
        (async()=>console.log(await resolveAfter1Second()))()
    ])
  }
  
  sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
  // wait above to finish
  setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"
  
  // wait again
  setTimeout(concurrentPromise, 7000) // same as concurrentStart
  
  // wait again
  setTimeout(parallel, 10000) // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"


// //   

function checkfstReturn() {
    
}