//jQuery ------------------------------
// flie name : jq_23_scroll_move
//-------------------------------------
(function($){
    var headBox = $('#headBox');
    var topMove = $('.top_move');
    var navLink = $('#navBox').find('a');

    var headHeight = headBox.outerHeight();
    

    

    function moveScroll(it) {
        var linkTarget = it.attr('href');
        var target = $(linkTarget);
        var targetOffset = target.offset().top;
        var moveScroll;
        var wrapOffset = $('#wrap').offset().top;
        (targetOffset === wrapOffset) ? moveScroll = targetOffset : moveScroll = targetOffset -headHeight;
        $('html,body').animate({scrollTop : moveScroll + 'px'},500,'swing');
    }

    topMove.find('a').on('click',function (e) {
        e.preventDefault();
        var _this = $(this);
        moveScroll(_this);
    });

    navLink.on('click',function(e) {
        e.preventDefault();
        var _this = $(this);
        moveScroll(_this);
    })
})(jQuery);