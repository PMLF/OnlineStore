$(document).ready(function(){
  $('.carousel-images').slick({
    slidesToShow:9,
    autoplay:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 8
        }
      },
      {
        breakpoint: 1410,
        settings: {
          slidesToShow: 7
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 270,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$(".carousel div .left").click(function() {
  $('.carousel-images').slick('slickPrev');

});

$(".carousel div .right").click(function() {
  $('.carousel-images').slick('slickNext');
});