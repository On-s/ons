//jQuery ------------------------------
// flie name : jq_018_gallery
//-------------------------------------
// (function($){
//     var a = $('a');
//     var main_img = $('.main_img');
//     var li = $('li');
//     var aList = new Array;

//     for (let i = 0; i < a.length; i++) {
//         var aData = $('a').eq(i).data('text');
//         aList[i] = aData;
//         console.log(aList);
//     }



//     li.on('click',function(){

//         var a = $(this).find('a').attr('data-text');
//         main_img.text(a);
//         console.log(a);

//     });

// })(jQuery);


// 경로는 최대한 불러와서 순서대로 지정해주는것을 권장!

//  (function($){

//     var gallery_01 = $('.gallery_01');
//     var galUl = gallery_01.children('ul');
//     var galLi = galUl.children('li');

//     var gallery_00 = $('.gallery_00');
//     var galP = gallery_00.children('p');


//      galLi.on('click',function(){
//         event.preventDefault();

//         var thisLink = $(this).children('a');
//         var thisData = thisLink.attr('data-text');
        

//         galP.text(thisData);
//      });

//  })(jQuery);


 (function($){

   $.ajax({
       dataUrl:''
   }).done(function(data){

   })

    var gallery_01 = $('.gallery_01');
    var galUl = gallery_01.children('ul');
    var galLi = galUl.children('li');
    
    var gal_01_Box = $('.gallery_00');
    var galP = gal_01_Box.children('p');
    
    var liConvertText = function(){
      return function(event){
        event.preventDefault();
        
        var thisLink = $(this).children('a');
        var thisData = thisLink.attr('data-text');

        galP.text(thisData);
      }
    };
    
    galLi.on('click', liConvertText());
    


    var gallery_02 = $('.gallery_02');
    var gallery_02_box = gallery_02.find('.main_img');
    var gallery_02_list = gallery_02.find('li');
    var gallery_02_P = gallery_02_box.children('p');
    var gal_a = gallery_02_list.children('a');

    var galUrl = '../../../res/gallery/original/';
    var galUrl2 = '../../../res/gallery/thumnail/';

    var img;

    var gal_fst_data = gallery_02_list.eq(0).find('a').attr('data-text');
    gallery_02_P.text(gal_fst_data);
    

    for (let i = 0; i < gallery_02_list.length; i++) {
        img = gallery_02_list.eq(i).find('a').attr('data-img');

        gallery_02_list.eq(i).css({'backgroundImage': 'url('+ galUrl2 + img +'.jpg)'});
    }   

    gal_a.on('mouseenter',function(e){
        e.preventDefault();
        var i = $(this).parent().index();
        gallery_02_list.eq(i).css({'opacity': '0.8',
                                'transform': 'scale(1.5)',
                                'transition': 'all 300ms ease-in'});
    });

    gal_a.on('mouseleave',function(e){
        e.preventDefault();
        var i = $(this).parent().index();
        gallery_02_list.eq(i).css({'opacity': '1',
                                'transform': 'scale(1)',
                                'transition': 'all 300ms out'});
    });

    // opacity: 0.8;
    // transform: scale(1.5);
    // transition: all 300ms ease-in;

    gal_a.on('click',function(e){
            e.preventDefault();
            var select_img = $(this).attr('data-img');
            var select_text = $(this).attr('data-text');
            gallery_02_box.css({'backgroundImage': 'url('+ galUrl + select_img +'.jpg)'});

            gallery_02_P.text(select_text);
            });



     
    var gal_03 = $('.gallery_03');
    var gal_03_box = gal_03.find('.main_img');
    var gal_03_p = gal_03_box.find('p');
    var gal_03_ul = gal_03.find('ul');
    var gal_03_li = gal_03_ul.find('li');
    var imgUrl = '../../../res/gallery/thumnail/';
    var mainUrl = '../../../res/gallery/original/';
    var imgList = [
        {'thumnail' : 'image_001.jpg' , 'content' : '001_thum설명' , 'main' : 'image_001.jpg' , 'mainInfo' : '설명 0'},
        {'thumnail' : 'image_002.jpg' , 'content' : '002_thum설명' , 'main' : 'image_002.jpg' , 'mainInfo' : '설명 1'},
        {'thumnail' : 'image_003.jpg' , 'content' : '003_thum설명' , 'main' : 'image_003.jpg' , 'mainInfo' : '설명 2'},
        {'thumnail' : 'image_004.jpg' , 'content' : '004_thum설명' , 'main' : 'image_004.jpg' , 'mainInfo' : '설명 3'},
        {'thumnail' : 'image_005.jpg' , 'content' : '005_thum설명' , 'main' : 'image_005.jpg' , 'mainInfo' : '설명 4'},
        {'thumnail' : 'image_006.jpg' , 'content' : '006_thum설명' , 'main' : 'image_006.jpg' , 'mainInfo' : '설명 5'},
        {'thumnail' : 'image_007.jpg' , 'content' : '007_thum설명' , 'main' : 'image_007.jpg' , 'mainInfo' : '설명 6'},
    ]

    // 함수를 각각의 기능에 따라 분류하는것이 좋다. 로직을 알기 쉽게 하기위해서 함수 마다 나눠서 쓰면 관리면에서 더 좋다.

    var set_03_li = function(count) {
        for(var n = 0; n < count; n++){
            setli = '<li><a href="#"><span></span></a></li>';
            gal_03_ul.append(setli);

            gal_03_ul.children('li').eq(n).find('span').text(imgList[n].content);

            gal_03_ul.children('li').eq(n).children('a').css({
                'backgroundImage':'url("'+imgUrl+imgList[n].thumnail+'")',
                color : '#fff'
            });

        }
    }

    gal_03_li.children('a').on('click',function(e){
        e.preventDefault();
        var setI = $(this).parent().index();
        gal_03_box.css({'backgroundImage':'url("'+mainUrl+imgList[setI].main+'")', 'backgroundSize' : 'cover'});
        gal_03_p.text(imgList[setI].mainInfo);

        console.log(setI);
    });


    set_03_li(7);



    
    })(jQuery);