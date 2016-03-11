
$(document).ready(function() {
	var map = new GMaps({
		  div: '.map',
		  lat: 26.846766,
		  lng: 80.9111464,
		  zoom: 12
		});

		map.addMarker({
	  	lat: 26.846766,
        lng: 80.9111464,
	  	title: 'Pankh Foundation',
	});
	$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
	});
    $(window).scroll(function() {
        /* freeze menu once it hit 70px */
        var scrollx = $(window).scrollTop();
        $("section").each(function(){
            var sectionx = $(this).offset().top - scrollx;
            if(sectionx <=70){ // 70 for header
             $(this).find("nav").addClass("freeze");
            } else {
             $(this).find("nav").removeClass("freeze");  
            }
        });
    });
    $(window).scrollTop($(window).scrollTop() + 1);

    wow = new WOW({
            mobile: false
        });
        wow.init();

    $('.carousel').carousel({
        interval: 5000
    })
});
$(document).ready(function() {
    'use strict';
    $('.approach-slider').bxSlider({
        pagerCustom: '#bx-pager',
        pager: true,
        touchEnabled: true,
        controls: false
    }); 
});
$(document).ready(function() { 
    'use strict';
    $("html").niceScroll({
        cursorcolor: '#E74C3C',
        cursoropacitymin: '1',
        cursorborder: '0px',
        cursorborderradius: '0px',
        cursorwidth: '7px',
        cursorminheight: 60,
        horizrailenabled: false,
        zindex: 1090
    });
});
