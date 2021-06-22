

(function($){


    // let warp = $('.warp');
    // let ul = $('ul');
    let li = $('.qna');
    let answer = li.find('.answer');

    lilen = li.length; 

    // for 문을 사용하지 않아도 jquery 에서는 사용가능한다. 
    for (let i = 0; i < lilen; i++) {
        li.eq(i).on('click',function(e){
            e.preventDefault();
            answer.eq(i).stop().slideToggle();

            let view = $(this).find('answer').css('display');

            (view === 'none') ? view === 'none': view === 'block';
        })
        
    }

})(jQuery);



// dt를클릭시 dd 나타나거나 사라지게만들기
// dt를 클릭 - dt 바로 뒤에있는 dd 나타나게 하기
// dt 클릭시 dd가 나타나있으면 사라지게만들기



// siblings  버튼 태그를 넣어야 한다. 키보드 이벤트를 활성화 시키기 위해서
