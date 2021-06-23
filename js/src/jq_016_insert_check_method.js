(function(){

    let conBox = $('#contentBox');


    // text() : 내부에 글씨를 변경하거나 확인가능 내부에들어있는 html 을 확인하거나 삽입가능
    // append(),appendTo(),prepend(),prependTo()
    // html() :
    // before()/after() 이전/다음 에 요소 삽입 가능
    // wrap() : 감싸는 요소를 삽입하는것도 가능하다.
    // contents() : 내용을 추가 처리도 가능하다
    // attr('속성명','값') : 속성 처리 명만 적으면 > 데이터읽기 둘다적으면 > 삽입
    let testText = '가나다라마바사12345';
    let textHtml = '<div class="a">Test</div>'
    // conBox.text(testText);

    conBox.html(textHtml);
    let conDiv = $('.a');
    conDiv.text(testText);


    conDiv.append('<span>text Insert</span>');


    conDiv.before('<h2>Check</h2>');
    conDiv.after('<div>뒤에 생성</div>');

    conDiv.append('<a></a>');

// escape \ 
    conBox.wrap('<div class="conBox_wrap">Test</div>');


    //HTML 은 문자로 확인하는 용도 
    let con = conBox.contents();
    console.log(con);

    let a = conDiv.find('a');
    a.attr({
        'title' : "NAVER",
        'href' : 'http://naver.com',
    });
    a.before('<br/>');
    a.text('네이버');

    // conBox.appendTo('<div class="d">11</div>');

    // conDiv.



    

})(jQuery);