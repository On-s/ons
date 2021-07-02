//jQuery ------------------------------
// flie name : jq_20_banner_01
//-------------------------------------
// 1.li 개수를 7개라고 지정했음
// 2.다음버튼을 클릭하면 리스트이동
// 3.ul을 한칸 쉬프트
// 4.임의의 변수에 값을저장 증감시키면서 한칸씩 쉬프트
// 5.중복실행 제어
// -------------------------------banner_01에 이어서

(function ($) {
    // ================================================= banner_02

    // 1.1과동일
    // 2.이전버튼 추가
    // 3.현재 페이지 / 총 페이지수 
    // 4.왼쪽끝에있을때 왼쪽가상페이지 애니메이션 > css 오른쪽 끝으로이동
    // 5.오른쪽끝에있을때 왼쪽가상페이지 css > 다음한칸쉬프트 애니메이션
    // 6.permission = true 를 사용하여 여러번실행되는것을 제어함 
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
    var countnext = 1;
    max = b02LiLen;

    var b02pWidth = b02p.width();
    // permission 값을 줘서 중복실행을 제어함
    var permission = true;


    // 길이를+1 늘림
    b02Ul.css({
        width: ((b02LiLen + 1) * 100) + '%'
    });
    b02Li.css({
        width: 100 / (b02LiLen + 1) + '%'
    });

    var copyLast2 = b02Li.clone().last(); // 마지막요소 복사

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


    // 다음 이벤트
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
