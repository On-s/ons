//jQuery ------------------------------
// flie name : jq_23_scroll
//-------------------------------------
(function ($) {

  var wrap = $('#wrap');
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var sideBox = $('#sideBox');



  var offHeadBox = headBox.offset().top;
  console.log();

  var offviewBox = viewBox.offset().top;
  var heightView = viewBox.innerHeight();
  var checkviewBox = offviewBox + heightView;

  sideBox.css({
    top: checkviewBox + 'px'
  });


  class scrollFix {
    constructor() {
      var st = $(window).scrollTop();

      if (offHeadBox <= st) {
        headBox.css({
          'position': 'fixed'
        });
      } else {
        headBox.removeAttr('style')
      }
    }
  };

  class HeadBoxSet {
    constructor() {
      var headBoxH = headBox.outerHeight();
      this.myHeadBoxoff = headBoxH + 50;
    }
  };

  
  class scrollFixside {
    constructor() {
      var st = $(window).scrollTop();
      var headBoxset = new HeadBoxSet();
      var myScrollTop = st + headBoxset.myHeadBoxoff;

      if (checkviewBox < myScrollTop) {
        sideBox.css({
          position: 'fixed',
          top : headBoxset.myHeadBoxoff
        });
      } else {
        sideBox.css({position : 'absolute' , top : checkviewBox + 'px'})
      }
      $(this).stop().animate({'top':headBoxset.myHeadBoxoff},200);
    }
  };

  $(window).on('scroll', function () {
    var scrollfix = new scrollFix();
    var scrollfixside = new scrollFixside();
  });





})(jQuery);