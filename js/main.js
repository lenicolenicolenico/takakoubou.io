'use strict';





/*ハンバーガーメニュー*/
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.sp-only').addClass('active');
        } else {
            $('.sp-only').removeClass('active');
        }
    });
});


// スライドショー
$('#vegas-slide').vegas({

  transition: 'fade2', //エフェクトの種類を指定

  transitionDuration: 1000, //スライドの遷移アニメーションの時間

  delay: 6000, //スライド切り替え時の遅延時間

 timer: false, //timerの表示・非表示

  loop: true, //スライドをループするかループするかしないか

  slides: [

      { src: 'img/bg_pic_01.jpeg' }, //１枚目の画像の指定

      { src: 'img/bg_pic_02.jpeg' }, //2枚目の画像の指定

      { src: 'img/bg_pic_03.jpeg' }, //3枚目の画像の指定

      { src: 'img/bg_pic_04.jpeg' }, //4枚目の画像の指定

      { src: 'img/bg_pic_05.jpeg' }, //5枚目の画像の指定

      { src: 'img/bg_pic_06.JPG'}, //5枚目の画像の指定

      ]

});