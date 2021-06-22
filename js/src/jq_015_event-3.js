
(function($){

    let tabList = $('.tab_list');
    let li = tabList.children('li');
    let tabContent = $('.tab_content');
    let contentList = tabContent.children('div');
    let block = ({display:'block'})


    contentList.eq(0).css(block);
    
    li.on('click',function(e){
        e.preventDefault();
        let i = $(this).index();
        
        contentList.siblings('div').hide();
        contentList.eq(i).stop().fadeIn(1000);


        // let divList = contentList.eq(i);
        // let check = divList.css('display') === ('none');

        // contentList.siblings('div').stop().fadeOut();
        // let delayContent = setTimeout(function(){
        //     if(check){
        //         contentList.eq(i).fadeIn();
        //      } else {
        //         contentList.eq(i).fadeOut();
        //     }
        // },500);
    });
})(jQuery); 



// js 로짜기

