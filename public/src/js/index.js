

  // smooth scroll to an id from href
  $(document).ready(function() {
    // on clicking any href which has a hash
    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 500);
    });
});

 // header changes colour when scrolled below navbars height
$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $('.carousel-control-next').click(function(){ $('.carousel').carousel('next')});
  $('.carousel-control-prev').click(function(){ $('.carousel').carousel('prev')});