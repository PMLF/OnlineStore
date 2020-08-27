function hideHeader() {
    document.querySelector("header").classList.add("hide");
}

function showHeader() {
    document.querySelector("header").classList.remove("hide");
}

/**
 * The code below was taken from Stack Overflow and adapted for this use case.
 * https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
 */
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)){
       hideHeader();
   } else {
       showHeader();
   }
   lastScrollTop = st;
});