
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function(e) {
    // console.log(this.pathname);
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      // console.log(this.hash);
      // console.log(target);
      // console.log(target.offset().top);

      // target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      // if (target.length) {
      //   $('html, body').animate(
      //     {
      //       scrollTop: target.offset().top
      //     },
      //     {
      //       duration: 1500,
      //       easing: "easeOutQuart"
      //     }
      //   );
      //   return false;
      // }

    }
  });
});
