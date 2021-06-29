//jQuery ------------------------------
// flie name : jq_018_gallery
//-------------------------------------
(function($){
    var a = $('a');
    var aLen = a.length;

    console.log(aLen);


    var aData = $('a').data('text');

    console.log(aData);

    var main_img = $('.main_img');
    var li = $('li');

    // a 를 클릭시
    li.on('click',function(){
        var a = $(this).find('a').attr('data-text');

        main_img.text(a);
    });

})(jQuery);