// js/src/layout_011_jq_accordion_menu_result.js

(function($){
    // jQuery
  
    // dt를 클릭시 dd를 나타나거나 사라지게 만들기
  
    // dt를 클릭 - dt바로 뒤에 있는 dd나타나게하기
    // 다른 dt클릭 - 바로뒤 dd나타나게, 다른 dd는 사라지게
    // dt를 클릭시 이미 dd가 나타나 있다면 -> 사라지게
  
    // 변수 지정
    let accordion = $('.accordion');
    let accDl = accordion.find('dl');
    let accDt = accDl.children('dt');
    let accDd = accDl.children('dd');
    let accBtn = accDt.children('button');

    accBtn.on('click',function(e){
        e.preventDefault();
        let thisI = $(this).parent();
        let viewDd = thisI.next(accDd);
        let vidwDdCheck = viewDd.css('display') === ('none');

        viewDd.siblings('dd').stop().slideUp(); 
        thisI.siblings('dt').removeClass('act');
        // viewDd.slideToggle();
        
        if(vidwDdCheck){
            viewDd.slideDown();
            thisI.addClass('act');
        } else {
            viewDd.slideUp();
            thisI.removeClass('act');
        }
    });
  
  })(jQuery);