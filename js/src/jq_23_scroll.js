//jQuery ------------------------------
// flie name : jq_23_scroll
//-------------------------------------
(function($){

    var wrap = $('.wrap');
    var part = wrap.find('.part');
    var po_01 = part.find('.po_01');
    var po_02 = part.find('.po_02');
    var po_03 = part.find('.po_03');


    var scrollP = function() {
        var st = $(window).scrollTop();
        po_01.text(st);
    }
    scrollP();


    var offcheck = function () {
        var offTop = part.offset().top;
        po_02.text(offTop);
    }
    offcheck();

    var wrapTop = function () {
        var offTop = wrap.offset().top;
        po_03.text(offTop);
    }
    wrapTop();

    $(window).on('scroll', function () {
        var st = $(window).scrollTop();
        scrollP();
        offcheck();
        wrapTop();
    })
})(jQuery);