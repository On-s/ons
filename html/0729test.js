
//jQuery ------------------------------
// flie name : 0729test
//-------------------------------------
(function($){

  var miniProduct = $('#miniProduct');
  var indicator = miniProduct.find('.indicator');
  var product = miniProduct.find('.product');

  var pUl = product.find('ul');
  var indiLink = indicator.find('a');

  indiLink.on('click', function (e) {
    e.preventDefault();
    n = $(this).parent().index();
    slide(n);
  });

  var slide = function (n) {
    pUl.stop().animate({
      marginLeft: (-100 * n) + '%'
    });   
  };

})(jQuery);