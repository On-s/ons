//jQuery ------------------------------
// flie name : jq_20_banner_01
//-------------------------------------
// li 개수를 7개라고 지정했음
// 다음버튼을 클릭하면 리스트이동
// ul을 한칸 쉬프트
// 임의의 변수에 값을저장 증감시키면서 한칸씩 쉬프트
// 


(function ($) {
    // ===================================================== banner_01
    var banner_01 = $('.banner_01');
    var btn = banner_01.find('.btn');
    var btn_next = btn.children('button');

    var b01p = banner_01.children('.product');
    var b01Ul = b01p.find('ul');
    var b01Li = b01Ul.find('li');
    var b01LiLen = b01Li.length;

    // 가로값 가져오기
    var b01pWidth = b01p.width();
    var b01UlWidth = b01Ul.width();


    console.log(b01UlWidth);
    var count = 0;
    var countnext = 1;
    var max = b01Li.length;

    // 마지막요소를 복사

    b01Ul.css({
        width: ((b01LiLen + 1) * 100) + '%'
    });
    b01Li.css({
        width: 100 / (b01LiLen + 1) + '%'
    });

    var copyLast = b01Li.clone().last();

    // width 길이변경
    // li맨앞에 맨마지막요소를 추가
    b01Li.first().before(copyLast);
    // 최초의 한칸 넘기기

    //기존값을 한칸넘긴 값으로 수정
    count = countnext;
    b01Ul.css({
        marginLeft: -(b01pWidth) + 'px'
    });

    // 클릭 이벤트
    btn_next.on('click', function (e) {
        e.preventDefault();
        if (count >= max) {
            count = 0;
            b01Ul.css({
                marginLeft: -(b01pWidth * count) + 'px'
            });
        }
        count += 1;
        console.log(count);
        b01Ul.stop().animate({
            marginLeft: -(b01pWidth * count) + 'px'
        });
    });
    // ================================================= banner_02

    // 1과동일
    // 이전버튼 추가
    // 현재 페이지 / 총 페이지수 
    // 왼쪽끝에있을때 왼쪽가상페이지 애니메이션 > css 오른쪽 끝으로이동
    // 오른쪽끝에있을때 왼쪽가상페이지 css > 다음한칸쉬프트 애니메이션
    var banner_02 = $('.banner_02');
    var btn2 = banner_02.find('.btn');
    var btn2_next = btn2.find('.next');
    var btn2_pre = btn2.find('.previous');
    var now = btn2.find('.now');
    var total = btn2.find('.total');

    var b02p = banner_02.children('.product');
    var b02Ul = b02p.find('ul');
    var b02Li = b02Ul.find('li');

    var b02LiLen = b02Li.length;
    var count2 = 0;
    max = b02LiLen;

    var b02pWidth = b02p.width();

    var permission = true;


    // 길이를+1 늘림
    b02Ul.css({
        width: ((b02LiLen + 1) * 100) + '%'
    });
    b02Li.css({
        width: 100 / (b02LiLen + 1) + '%'
    });

    var copyLast2 = b01Li.clone().last(); // 마지막요소 복사

    b02Li.first().before(copyLast2); //복사한요소 맨앞에 붙이기

    // 맨처음요소 한칸 쉬프트
    count2 = countnext;
    b02Ul.css({
        marginLeft: -(b02pWidth * count2) + 'px'
    });
    // 위 포지션으로도 사용가능
    // b02Ul.css({'position' : 'relative', 'left' : -100 + "%"})


    // 현재 페이지 / 토탈 페이지 텍스트
    now.text(count2);
    total.text(max);
    console.log(count2);


    // 다음 이벤트처리

    btn2_next.on('click', function (e) {
        e.preventDefault();
        if (permission) {
            permission = false;
            if (count2 >= max) {
                count2 = 0;
                b02Ul.stop().css({
                    marginLeft: -(b02pWidth * count2) + 'px'
                });
            }
            count2++;
            b02Ul.stop().animate({
                marginLeft: -(b02pWidth * count2) + 'px'
            }, function () {
                permission = true;
            });
            now.text(count2);
        }
    });

    // 이전 이벤트처리
    btn2_pre.on('click', function (e) {
        e.preventDefault();
        if (permission) {
            permission = false;

            count2--;
            b02Ul.stop().animate({
                marginLeft: -(b02pWidth * count2) + 'px'
            }, function () {
                if (count2 <= 0) {
                    b02Ul.stop().css({
                        marginLeft: -(b02pWidth * max) + 'px'
                    });
                    count2 = max;
    
                }
                permission = true;
            });
            now.text(count2);
        }
    });

})(jQuery);
