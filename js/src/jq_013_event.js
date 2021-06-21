(function($){


    let box = $('.box');
    let ul =$('ul');
    let li = ul.children('li');
    //addEventlisner


    li.eq(0).on('click',function(e){
        e.preventDefault();

        box.css({'display':'block'});
    });

    
    li.eq(1).on('click',function(e){
        e.preventDefault();

        box.css({'display':'none'});
    });

    li.eq(2).on('click',function(e){
        e.preventDefault();

        box.stop().show();
    });

    li.eq(3).on('click',function(e){
        e.preventDefault();

        box.stop().hide();
    });

    li.eq(4).on('click',function(e){
        e.preventDefault();

        box.stop().fadeIn(1000)
    });

    li.eq(5).on('click',function(e){
        e.preventDefault();

        box.stop().fadeOut(1000);
    });

    li.eq(6).on('click',function(e){
        e.preventDefault();

        box.stop().slideDown();
    });

    li.eq(7).on('click',function(e){
        e.preventDefault();

        box.stop().slideUp();
    });

    li.eq(8).on('click',function(e){
        e.preventDefault();

        box.addClass('act')
    });

    li.eq(9).on('click',function(e){
        e.preventDefault();

        box.removeClass('act')
    });

    li.eq(10).on('click',function(e){
        e.preventDefault();

        box.removeClass('act')
    });
    li.eq(11).on('click',function(e){
        e.preventDefault();

        box.removeClass('act')
    });
    li.eq(12).on('click',function(e){
        e.preventDefault();

        box.removeClass('act')
    });
    li.eq(13).on('click',function(e){
        e.preventDefault();

        box.removeClass('act')
    });
    li.eq(14).on('click',function(e){
        e.preventDefault();

        box.removeClass('act')
    });




})(jQuery);

// show / fade / slide   = 애니메이션 기능이있슴
// stop 을 넣으면 중간에 멈춤