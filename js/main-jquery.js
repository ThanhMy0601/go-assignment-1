// SLIDESHOW Home
$(document).ready(function(){
  // MENU
  // SCROLL MENU
  $(window).scroll(function() {
    //set distance user needs to scroll before we strart fadeIn
    var div = $('.navscroll');
    if($(this).scrollTop() > 100) {
      div.css(
        {
          'background-color':'#212529',
          'height': '70px',
        }
      )
    }
    else {
      div.css(
        {
          'background-color':'rgba(173, 173, 175, 0)',
          'height': '100px',
        }
      )
    }
  });

  //ACTIVE MENU ITEM CLICK
  $('.navbar ul li.nav-item a').click(function(){
    $('li.nav-item a').removeClass("active");
    $(this).addClass("active");
  });

  // ACTIVE MENU ITEM ON SCROLL PAGE
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
        if (($(this).offset().top - ($(window).height()-550)) <= scrollDistance) {
          $('.navbar ul li.nav-item a').removeClass('active');
          $('.navbar ul li.nav-item a').eq(i).addClass('active');
        }
    });
  }).scroll();

  //HOME
  $('#homeslider').lightSlider({
    auto: true,
    pause: 4500,
    item: 1,
    loop: true,
    slideMargin: 0,
    speed: 2000,
    pager: false,
  });

  //PEOJECTS
  // Projects - Slideshow - Owl carousel
  $('#pro-slide').owlCarousel({
      loop:false, // tạo vòng lặp, nếu false thì chạy hết số lượng phần tử nó sẽ quay ngược lại vị trí phần tử ban đầu
      margin:10, // khoảng cách giữa các phần tử
      nav:true, // tạo 2 nút previous và next (trước và sau)
      autoplay:false, // tự động chạy
      responsive:{ // căn chỉnh số lượng phần tử tùy theo kích thước màn hình tùy chọn
        0:{ // từ 0px đến 600px sẽ hiển thị 1 phần tử duy nhất
            items:1
        },
        600:{ // từ 600px đến 1000px sẽ hiển thị 3 phần tử
            items:2
        },
        1000:{ // tương tự từ 1000px trở đi sẽ hiển thị 5 phần tử
            items:4
        }
      }
  });

  //project child slide
  $('#pro-slide-child').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    responsive:{
      0:{
        items:1
      }
    }
  });

  //CLIENTS
  // Client - Slideshow - Owl carousel
  $('#clients-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:7
      }
    }
  });

  //Client - Slideshow - section 3
  $('#clients-sec3-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:false,
    responsive:{
      0:{
        items:1,
      },
      600:{
          items:1
      },
    }
  });

  //SCROLL TO TOP
  $(window).scroll(function() {
    //set distance user needs to scroll before we strart fadeIn
    var div = $('.scroll-to-top');
    if($(this).scrollTop() > 100) {
      div.css(
        {
          'background-color':'#404040b3',
          'color':'#ffffff94'
        }
      )
    }
    else {
      div.css(
        {
          'background-color':'#40404000',
          'color':'#ffffff00'
        }
      )
    }
  });

});
