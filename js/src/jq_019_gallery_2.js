//jQuery ------------------------------
// flie name : jq_019_gallery_2
//-------------------------------------
// 

// 상품생성 이미지, 이름 , 가격 , 설명 
// ul/li 생성
// 마우스이벤트 클릭, 포커스
// 큰이미지 클릭시 팝업창 띄우기 (끄기)
// 다음버튼 클릭시 ul 안에 li 이동
// 160줄 하다가 멈춤
(function ($) {

  var undrawImgList = [{
      "ckImg": "ck1.png",
      "ckname": "골드킹",
      "ckprice": "1000000",
      "ckInfo": "단짠단짠 맛있는 골드킹",
      "ckPopupLink": "http://naver.com"
    },
    {
      "ckImg": "ck2.png",
      "ckname": "뿌링맵소킹",
      "ckprice": "2000000",
      "ckInfo": "맛나게 매운 뿌링 맵소킹",
      "ckPopupLink": "http://google.com"
    },
    {
      "ckImg": "ck3.png",
      "ckname": "하바네로 포테킹",
      "ckprice": "3000000",
      "ckInfo": "난 포테킹은 느끼하더라",
      "ckPopupLink": "http://daum.net"
    },
    {
      "ckImg": "ck4.png",
      "ckname": "포테킹 콤보",
      "ckprice": "4000000",
      "ckInfo": "포테킹은 내취향아님",
      "ckPopupLink": "#"
    },
    {
      "ckImg": "ck5.png",
      "ckname": "뿌링클",
      "ckprice": "4500000",
      "ckInfo": "뿌링뿌링 뿌리링클",
      "ckPopupLink": "#"
    },
    {
      "ckImg": "ck6.png",
      "ckname": "붐바스틱",
      "ckprice": "4000000",
      "ckInfo": "붐바스틱 붐바스틱 예에~",
      "ckPopupLink": "#"
    },
    {
      "ckImg": "ck7.png",
      "ckname": "맛초킹 콤보",
      "ckprice": "4000000",
      "ckInfo": "매콤짭짤! 밥과 함께 먹기에 딱 좋은 완벽조합",
      "ckPopupLink": "#"
    },
    {
      "ckImg": "ck8.png",
      "ckname": "양념 맵소킹",
      "ckprice": "2000000",
      "ckInfo": "맵긴함 ",
      "ckPopupLink": "#"
    },
    {
      "ckImg": "ck9.png",
      "ckname": "핫 후라이드",
      "ckprice": "4000000",
      "ckInfo": "먹고 배아플수있음",
      "ckPopupLink": "#"
    },
    {
      "ckImg": "ck10.png",
      "ckname": "펌치킨",
      "ckprice": "4000000",
      "ckInfo": "펌핀펌핀",
      "ckPopupLink": "#"
    },
    {
      "ckImg": "ck11.png",
      "ckname": "맵스터 순살",
      "ckprice": "7000000",
      "ckInfo": "맵~~맵~",
      "ckPopupLink": "#"
    }
  ]
  // 상품 개수
  var wantLiNum = undrawImgList.length;

  var part = $('.part');
  // 큰이미지
  var main_img = part.find('.main_img');
  // 상품명 구역
  var mainP = main_img.find('.product');
  // 상품 가격 구역
  var mainPrice = main_img.find('.pirce');
  // 상품정보 구역
  var mainInfo = main_img.find('.info');
  // 상품 링크 구역
  var minImg = main_img.find('.img').find('a');
  var sub_img = part.find('.sub_img');
  sub_img.append('<ul></ul>');
  var i;
  var alink;
  var subUl = sub_img.find('ul');;
  var subLi;

  // 객체에들어있는 치킨정보
  var ckCon = part.find('.ck_con');
  var ckClose = ckCon.find('.ck_close');
  var ckImg = ckCon.find('.ck_img');
  var ckBg = part.find('.ck_bg');

  //이미지 링크
  var undrawImgLink = '../../../res/renewal_bhc/chicken/';


  //객체길이만큼 li 생성----------------------------------
  var set_li = function (count) {

    for (var n = 0; n < count; n++) {
      var setli = '<li><a href=""><span></span></a></li>';
      subUl.append(setli);
      subLi = subUl.find('li');
      subLi.eq(n).find('span').text(undrawImgList[n].ckname);
      subLi.eq(n).find('a').css({
        'backgroundImage': 'url("' + undrawImgLink + undrawImgList[n].ckImg + '")'
      });
    }
    // 마지막 li 요소를 첫번째 li 이전에 삽입
    var lastLI = subLi.clone().last();
    subLi.eq(0).before(lastLI);
  }//----------------------------------------------------

  // 원하는 li 갯수대로 만들기
  set_li(wantLiNum);

  alink = subUl.find('li').children('a');

  function clikcenvet(i) {
    mainP.text(undrawImgList[i].ckname);
    mainPrice.text(undrawImgList[i].ckprice);
    mainInfo.text(undrawImgList[i].ckInfo);
    minImg.attr('href', undrawImgList[i].ckPopupLink);
    minImg.css({
      'backgroundImage': 'url("' + undrawImgLink + undrawImgList[i].ckImg + '")'
    });
  }//--------------------------------------------------


  // innerWidth() > padding  값 포함
  // outerWidth() > border 값 포함
  // outerWidth(true) > margin 값 포함
  var getliWidth = subUl.find('li').eq(0).outerWidth(true);
  
  // ul +1 길이 설정
  subUl.css({'width' : (getliWidth+(getliWidth*undrawImgList.length))+'px'},
            {'marginLeft': -(getliWidth) +'px'} );

  var slideBtn = $('.btn_box');
  var prior_btn = slideBtn.find('.prior_btn');
  var later_btn = slideBtn.find('.later_btn');
  var mv = 0;

  later_btn.on('click',function(e) {
    e.preventDefault();
    mv -= 1;
    subUl.animate({'marginLeft': (getliWidth * mv) + 'px'}, 200 , 'linear');
    
  })
  //기초 첫페이지 작성
  prior_btn.on('click',function (e) {
    e.preventDefault();
    mv += 1;
    subUl.animate({'marginLeft': (getliWidth * mv) + 'px'}, 200 , 'linear');
  })
  clikcenvet(0);


  // 마우스 클릭시 이벤트
  alink.on('click', function (e) {
    e.preventDefault();
    i = $(this).parent().index();
    clikcenvet(i);
  });


  // 마우스 올렸을때 이벤트
  alink.on('mouseenter', function (e) {
    // a 또는 버튼의 이벤트기능을 상쇄시키기 위해 사용
    e.preventDefault();
    i = $(this).parent().index();
    // subLi.eq(i).siblings('li').find('a').removeClass('menter'); 을추가시키고 remove 를 지워도됨 
    subLi.eq(i).find('a').addClass('menter');
  });


  // 마우스 내렸을때 이벤트
  alink.on('mouseleave', function (e) {
    e.preventDefault();
    i = $(this).parent().index();
    subLi.eq(i).find('a').removeClass('menter');
  });


  // 포커스 했을때 이벤트
  alink.on('focus', function (e) {
    e.preventDefault();
    i = $(this).parent().index();

    subLi.eq(i).find('a').addClass('act');
  });


  // 포커스 나갔을때 이벤트
  alink.on('focusout', function (e) {
    e.preventDefault();
    i = $(this).parent().index();

    subLi.eq(i).find('a').removeClass('act');
  });




  // display 상태 확인 함수
  function ckStatus() {
    var statusCon = Boolean(ckCon.css('display') === 'none');
    var statusBg = Boolean(ckCon.css('display') === 'none');

    if (statusCon && statusBg) {
      ckCon.css('display', 'block');
      ckBg.css('display', 'block');
    } else {
      ckCon.css('display', 'none');
      ckBg.css('display', 'none');
    }
  }


  // 위 함수를 삼항연사자로 바꿨을때
  // var ckFn = function(bool){
  //   var ck = !!bool;
  //   if(ck){
  //     ckCon.css('display', 'block');
  //     ckBg.css('display', 'block');
  //   }else{
  //     ckCon.css('display', 'none');
  //     ckBg.css('display', 'none');
  //   }
  // };
  //  (statusCon && statusBg ) ?  ckFn(1) : ckFn(0) ;



  minImg.on('click', function (e) {
    e.preventDefault();
    ckImg.attr('style', minImg.attr('style'));
    ckClose.focus();
    ckStatus();
  });


  ckClose.on('click', function (e) {
    e.preventDefault();
    ckStatus();
  });

  ckBg.on('click', function (e) {
    e.preventDefault();
    ckStatus();
  });

  // ======================================================== slider
  // var scrollX = subUl.scrollLeft();
  // var btn_box = sub_img.find('.btn_box');
  // var left_btn = btn_box.find('.l_btn');
  // var right_btn = btn_box.find('.r_btn');

  // var moveScrollLeft = function() {
  //   return function () {
  //     subUl.scrollLeft() = scrollX += 100;
  //     // subUl.scrollLeft(scrollX + 100);
  //   }
  // }

  // var moveScrollRight = function () {
  //   return function () {
  //     subUl.scrollLeft() -= 100;
  //   }
  // }

  // left_btn.on('click',moveScrollLeft());
  // right_btn.on('click',moveScrollRight());

})(jQuery);