//jQuery ------------------------------
// flie name : jq_20_banner_01
//-------------------------------------
// 1.li 개수를 7개라고 지정했음
// 2.다음버튼을 클릭하면 리스트이동
// 3.ul을 한칸 쉬프트
// 4.임의의 변수에 값을저장 증감시키면서 한칸씩 쉬프트
// 5.중복실행 제어


(function ($) {
    // ===================================================== banner_01
    // 1-1변수지정

    var banner_01 = $('.banner_01');
    var btn = banner_01.find('.btn');
    var btn_next = btn.children('button');

    var b01p = banner_01.children('.product');
    var b01Ul = b01p.find('ul');
    var b01Li = b01Ul.find('li');
    var b01LiLen = b01Li.length;

    // 1-2가로값 가져오기
    var b01pWidth = b01p.width();
    var b01UlWidth = b01Ul.width();


    console.log(b01UlWidth);
    var count = 0;
    var countnext = 1;
    var max = b01Li.length;

    // permission 값을 줘서 중복실행을 제어함
    var permission = true;

    //1-3  ul 과 li 의 길이를 가상요소만큼 추가 / 마지막요소를 가상요소로 사용하기 위해 추가
    b01Ul.css({ width: ((b01LiLen + 1) * 100) + '%' });

    b01Li.css({ width: 100 / (b01LiLen + 1) + '%' });

    var copyLast = b01Li.clone().last();

    // 2 li맨앞에 맨마지막요소를 추가
    b01Li.first().before(copyLast);
    // 3.최초의 한칸 쉬프트

    // 4.기존값을 한칸쉬프트 한 값으로 수정
    count = countnext;
    // 4-1 수정한 값으로 이동
    b01Ul.css({
        marginLeft: -(b01pWidth) + 'px'
    });

    // 5.클릭 이벤트
    btn_next.on('click', function (e) {
        e.preventDefault();
        // 5-1 중복실행제어 
        if (permission) {
            permission = false;
            // 5-2 카운트가 최대값이 되었을때
            if (count >= max) {
                // 5-3 0으로 초기화
                count = 0;
                // 5-4 맨처음 복사해놓았던 가상요소위치로 이동
                b01Ul.css({
                    marginLeft: -(b01pWidth * count) + 'px'
                });
            }
            // 5-5 카운트증가
            count += 1;

            // 5-6 증가한만큼 이동
            b01Ul.stop().animate({
                marginLeft: -(b01pWidth * count) + 'px'
            }, function () {
                // 5-7 실행끝
                permission = true;
            });
        }
    });

})(jQuery);
