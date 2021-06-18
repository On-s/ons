// layout_card_list
const product_area = document.getElementById('product_area');
const product = document.getElementById('product');
const productLi = product.getElementsByTagName('li');



let imgUrl = '../../../res/image/';
let bgc = 'rgba(255,255,255,0)';


let productData = [
    {
        baseName : 'product name1',
        imgSrc: 'bg_whale.jpg',
        pType : '상품 종류0',
        pName : '상품명0'
    },
    {
        baseName : 'product name2',
        imgSrc: 'background_002.jpg',
        pType : '상품 종류1',
        pName : '상품명1'
    },
    {
        baseName : 'product name3',
        imgSrc: 'background_003.jpg',
        pType : '상품 종류2',
        pName : '상품명2'
    },
    {
        baseName : 'product name4',
        imgSrc: 'background_004.jpg',
        pType : '상품 종류3',
        pName : '상품명3'
    }
]
// let changeouted = [
//     changeouted0
//     ,changeouted1 
//     ,changeouted3 
//     ,changeouted4 
// ]

// 상품목록 만들기
const makeProduct = function(listdata){
    let makeLi = document.createElement('li');
    makeLi.setAttribute('tabindex','0');

    const insertCode = '<div class="base"><span class="blind"></span></div>\
    <div class="other none">\
    <div class="outed outed0"></div>\
    <div class="outed outed1"></div>\
    <div class="outed outed2"></div>\
    <div class="outed outed3"></div>\
    <dl>\
    <dt></dt>\
    <dd></dd>\
    <dd><button type="button"></button></dd>\
    <dd><a href="#"></a></dd>\
    </dl>\
    </div>\
    <div class="line_focus"></div>';

    makeLi.innerHTML = insertCode;
    let base = makeLi.getElementsByClassName('base')[0]; 
    let basetext = makeLi.getElementsByTagName('span')[0];
    let other = makeLi.getElementsByClassName('other')[0];
    let productType = other.getElementsByTagName('dt')[0];
    let productName = other.getElementsByTagName('dd')[0];

    //버튼 기능 추후
    let productzoom = other.getElementsByTagName('dd')[1];
    // productBtn = productzoom.getElementsByTagName('button')[0];

    //링크 기능 추후
    let productView = other.getElementsByTagName('dd')[2];
    // productLink = productView.getElementsByTagName('a')[0];


    //기본이름 
    base.style.backgroundImage = 'url(' + listdata.imgSrc  + ')';
    basetext.innerText = listdata.baseName;
    productType.innerText = listdata.pType;
    productName.innerText = listdata.pName;

    other.style.backgroundColor = "rgba(255,255,255,0)";

    product.appendChild(makeLi);
}   

// 상품 정의
class setProduct {
    constructor(url, data) {
        this.baseName = data.baseName;
        this.imgSrc = url + data.imgSrc;
        this.pType = data.pType;
        this.pName = data.pName;
    }
}



// class outed {
//     constructor(outer, select, index) {
//         this.outer = outer.getElementsByClassName(select)[index];
//         return outer;
//     }
// }

// class animationOut {
//     constructor(outname, select,index) {
//         this.outname = outname.getElementsByClassName(select)[index];
//         outname.style.top = 0; 
//         outname.style.left = 0;
//         outname.style.width =  '1rem'; 
//         outname.style.height =  0; 
//         outname.style.transition = "'all 500ms linear"+(index*500)+"'";
//     }
// }
// const a = new animationOut(a,1,2)
// console.log(a);


// class animationIn {
//     constructor(inname , location ,index) {
//         inname = this.inname; 
//         this.location = location;
//         inname.style.location = '100%';
//         inname.style.transition = "'all 500ms linear"+(index*500)+"'";
//     }
// }

// mouseenter
class enter {
    constructor(change,i) {
        this.change;
        change = document.getElementsByClassName('other')[i];

        let outed0 = document.getElementsByClassName('outed0')[i];
        let outed1 = document.getElementsByClassName('outed1')[i];
        let outed2 = document.getElementsByClassName('outed2')[i];
        let outed3 = document.getElementsByClassName('outed3')[i];


        change.addEventListener('mouseenter', function () {
            console.log('마우스올림');
            bgc = change.style.backgroundColor;
            change.style.transition = 'all 300ms ease-in';

            // animationOut1 = new animationOut(outed0,i);
            // animationOut2 = new animationOut(outed1,i);
            // animationOut3 = new animationOut(outed2,i);
            // animationOut4 = new animationOut(outed3,i);
            outed0.style.location = '100%';
            outed0.style.transition = 'all 500ms linear 500';
            
            setTimeout( ()=> {
                change.style.backgroundColor = 'rgba(255,0,0,0.4)';
            }, 100);
        });
    }
}

// mouseleave
class leave {
    constructor(change,i) {
        this.change
        change = document.getElementsByClassName('other')[i];

        let outed0 = document.getElementsByClassName('outed0')[i];

        change.addEventListener('mouseleave',function () {
            console.log('마우스내림');

            outed0.style.top = 0; 
            outed0.style.left = 0;
            outed0.style.width =  '1rem'; 
            outed0.style.height =  0; 
            outed0.style.transition = 'all 500ms linear 1500ms';

            change.style.transition = 'all 300ms out';
            change.style.backgroundColor = bgc;
            console.log(bgc);
        });
    }
}
// mousefocus
class focus {}

// mouseblur
class blur {}




let creatP;
let produtLength = productData.length;
let enterEvent;
let leaveEvent;
// 상품 갯수만큼 반복 [i]
let i = 0;
// 반복해서 생성
for(; i < produtLength; i++){
    creatP = new setProduct( imgUrl , productData[i]);
    makeProduct(creatP);
    enterEvent = new enter(productLi[i],i);
    leaveEvent = new leave(productLi[i],i);
}
