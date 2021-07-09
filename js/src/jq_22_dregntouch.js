//jQuery ------------------------------
// flie name : jq_22_dregntouch
//-------------------------------------
(function ($) {

    var wrap = $('#wrap');
    var xdiv = $('.x');
    var ydiv = $('.y');
    var distanceX = $('.distanceX');
    var distanceY = $('.distanceY');
    var moused = $('.mousedown');
    var mouseu = $('.mouseup');

    var x, y;
    var countX = 0,
        countY = 0;
    var i = 0;


    var checkTypeFn = function(e){    
        var eType = e.type;
        var evt = e.originalEvent;
    
        var x = 0;
        var y = 0;   
        chType.text(eType);
    
        if(e.type === 'touchmove'){
          x = evt.changedTouches[0].offsetX ;
          y = evt.changedTouches[0].offsetY ;
          console.log( evt.changedTouches[0] );
        }else if(e.type === 'mousemove'){
          x = evt.offsetX;
          y = evt.offsetY;
        }
        
        xdiv.text(x);
        ydiv.text(y);
      };
    


    var rn = function(n){
        var myn = parseInt(('00' +  (n % 16)).slice(-2)).toString(16);        

        console.log( myn );
        return myn+myn+myn;
    }

    wrap.on('mousemove', function (e) {

        x = e.offsetX;
        y = e.offsetY;

        var rnx = rn(parseInt(e.offsetX));
        var rny = rn(parseInt(e.offsetY));

        xdiv.text('x = ' + x);
        ydiv.text('y = ' + y);

        var absoluteX = Math.abs(x);
        var absoluteY = Math.abs(y);
        var num = (parseInt(absoluteX / 100) + parseInt(absoluteY / 100));
        var bgc = String(num.toString(16))+String(num.toString(16))+String(num.toString(16));

        wrap.css({backgroundColor : '#'+bgc});
        console.log( bgc );
    });

    wrap.on('mousedown', function (e) {
        x = e.offsetX;
        y = e.offsetY;

        countX = x;
        countY = y;

        moused.text('mousedown = x : ' + countX + ' y : ' + countY);
    });

    wrap.on('mouseup', function (e) {
        x = e.offsetX;
        y = e.offsetY;

        countX = countX - x;
        countY = countY - y;


        mouseu.text('mouseup = x : ' + x + " y :" + y);
        console.log('distance = ' + countX + " " + countY);
        distanceXY();
    });


    function distanceXY() {
        if (countX < -100) {
            distanceX.text('move right');
        } else if (countX > 100) {
            distanceX.text('move left');
        } else {
            distanceX.text('do not move X');
        }

        if (countY < -100) {
            distanceY.text('move down');
        } else if (countY > 100) {
            distanceY.text('move up');
        } else {
            distanceY.text('do not move Y');
        }
    }


    

})(jQuery);