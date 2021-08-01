function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 1000);
  }
  $('[data-scroll]').on('click', scrollToSection);

// SCROLLING
$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 350) {
	    $(".navbar").css({"background-color": "#55ACEE", "transition": ".9s"});
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })

// App Image
$('.carousel').carousel({
  interval: 40
});

// paralax
/* parallaxie js */
$('.parallaxie').parallaxie();
