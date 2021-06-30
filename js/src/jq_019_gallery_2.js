//jQuery ------------------------------
// flie name : jq_019_gallery_2
//-------------------------------------
(function ($) {

  var wantLiNum = 4;


  var undrawImgList = [{
      'ckImg'         : 'ck1.png',
      'ckname'        : '골드킹',
      'ckprice'       : '1000000',
      'ckInfo'        : '단짠단짠 맛있는 골드킹',
      'ckPopupLink'   : 'http://naver.com'
    },
    {
      'ckImg'         : 'ck2.png',
      'ckname'        : '뿌링맵소킹',
      'ckprice'       : '2000000',
      'ckInfo'        : '맛나게 매운 뿌링 맵소킹',
      'ckPopupLink'   : 'http://google.com'
    },
    {
      'ckImg'         : 'ck3.png',
      'ckname'        : '하바네로 포테킹',
      'ckprice'       : '3000000',
      'ckInfo'        : '난 포테킹은 느끼하더라',
      'ckPopupLink'   : 'http://daum.net'
    },
    {
      'ckImg'         : 'ck4.png',
      'ckname'        : '포테킹 콤보',
      'ckprice'       : '4000000',
      'ckInfo'        : '포테킹은 내취향아님',
      'ckPopupLink'   : '#'
    }
  ]

  var part = $('.part');
  var main_img = part.find('.main_img');
  var mainP = main_img.find('.product');
  var mainPrice = main_img.find('.pirce');
  var mainInfo = main_img.find('.info');
  var minImg = main_img.find('.img').find('a');
  var sub_img = part.find('.sub_img');
  sub_img.append('<ul></ul>');
  var i;
  var alink;
  var subUl = sub_img.find('ul');;
  var subLi;

  var ckCon = part.find('.ck_con');
  var ckClose = ckCon.find('.ck_close');
  var ckImg = ckCon.find('.ck_img');
  var ckBg = part.find('.ck_bg');

  var undrawImgLink = '../../../res/renewal_bhc/chicken/';



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
  }

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
  }

  //기초 첫페이지 작성
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






  function modelStatus() {
    var statusCon = Boolean(ckCon.css('display') === 'none');
    var statusBg = Boolean(ckCon.css('display') === 'none');

    if (statusCon === true && statusBg === true) {
      ckCon.css('display', 'block');
      ckBg.css('display', 'block');
    } else if (statusCon === false && statusBg === false) {
      ckCon.css('display', 'none');
      ckBg.css('display', 'none');
    } else {
      console.log(error);
    }
  }


  minImg.on('click', function (e) {
    e.preventDefault();
    ckImg.attr('style', minImg.attr('style'));
    modelStatus();
  });


  ckClose.on('click', function (e) {
    e.preventDefault();
    modelStatus();
  });

  ckBg.on('click', function (e) {
    e.preventDefault();
    modelStatus();
  });


})(jQuery);
