(function($){

    let h2 = $('h2');
    let p = $('p');


    h2.text('h2');

    let pi = '으아아';
    h2.text(pi);

    let set = $('.set');

    set.children('a').attr({'href':'http://naver.com', 'target' : '_blank'});

    p.eq(0).remove();

    set.children('button').remove();

    set.append('<a href="http://google.com">구글</a>');
    
})(jQuery);

// jQuery ${TM_FILENAME_BASE}
(function($){

})(jQuery);