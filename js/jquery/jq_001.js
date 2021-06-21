// jq_001
// 틀을 만들어야 충돌되는 현상을 막을 수 있음, 바깥 공간에서도 사용 할 수 있다.
(function(){

    let h1 = $('h1');
    let h1link = h1.child('a');

    h1link.css({
        'fontSize': '16px', 
        'color' : '#07f'
    });

    let p = $('p');

    let btn = $('button');
    btn.on('cilck',function(){
        let a = $('p')
        p.show();
    });

    h1Link.css ({
        'color' : '#171717' , 'fontWeight' : '100' , 'padding' : '1rem' ,
        'backgroundColor' : '#afc'
    });

    let box = $('#box');
    let boxUl = box.find('ul');
    let boxLi = boxUl.find('li');

    // boxLi.css({

    // });
    

    box.parent().css({
        border:'1px solid #333', backgroundColor:'#dfdfdf'
    });


    let boxLing = box.child('ul').child('li').child('a'); // 메소드 체인

    // 가급적 모든요소를 변수로 처리하여 필요시 사용할 수 있도록 처리하는 것이 좋다.



    // let liset_001 = boxLi.eq(0);
    // let liset_002 = boxLi.eq(1);
    // let liset_003 = boxLi.eq(2);
    // let liset_004 = boxLi.eq(3);


    let liset = $('li:nth-child(2)')
    let liset = $('li').eq(2);
    
    console.log(liset);


    let dt = $('dt');
    dt.css({
        padding:'0.5rem' , backgroundColor:'#ddd', width:'300px'
    });

    dtNext.css({fontSize : '3rem'})

    // 변수로 만들어 링크걸고 그후 변수값을 지정해주는 습관을 기르는것이 좋다.


})(jQuery);


// 선택자

//  #box -> $('#box')
//  .box -> $('.box')
// h1 -> $('h1')
// h1>a -> $(h1>a)  -> $('h1').children('a')
// h2 span -> $('h1 span') -> $('h1').find('span')
// li:nth-child(2) -> $('li:nth-child(2)') -> $('li:nth(1)') -> $('li').eq(2)
// dt+dd -> $('dt+dd') -> $('dt').next('dd')
// dt~dd -> $('dt~dd') -> $('dt').nextAll('dd')
// dd 이전 d -> $('dd').prev('dt')
// 를제외한 형제요소 모두 -> $('li').eq(1).siblings('a')
// li:nth-chlid(6) 이전 모든 -> $('li').ep(5).prevAll()
// dd 의부모 -> $(dd).parent();
// $('dd').parents(); dd의 상위 엘리먼트 모두중 #box 면 #box 가 보이면 스탑그사이 모두포함



// ?.style = '';
// ?.css({ 'property' : 'value'});

//jquery cheat sheet




