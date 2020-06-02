jQuery(document).ready(function() {
  /*---[ Widget Slider ]---*/
  jQuery(".widgetslider").owlCarousel({
      loop: true,
      autoPlay: true,
      autoHeight: true,
      items:1,
      smartSpeed : 300,
	  nav: true,
	  navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	  dots: false,
      onInitialize : function(){
        jQuery('.widgetslider').removeClass('loading');
      },
  });

  /*---[ Featured Carousel 1 ]---*/
  jQuery(".featuredposts").owlCarousel({
	autoplay: true,
    autoplayTimeout: 2500,
	autoplayHoverPause:true,
	autoHeight: true,
	loop: true,
	items:3,
	nav: false,
	dots: true,
	responsiveClass:true,
	responsive:{
	    0:{
	        items:1,
	    },
	    479:{
	        items:2,
	    },
	    1065:{
	        items:4,
	    }
	},
	onInitialize : function(){
	  jQuery('.featuredposts').removeClass('loading');
	},
  });

  /*---[ Featured Posts ]---*/
  jQuery(".featured-posts ul").owlCarousel({
	autoplay: true,
    autoplayTimeout: 2500,
	autoplayHoverPause:true,
	autoHeight: false,
	loop: true,
	margin: 20,
	items:4,
	nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	dots: false,
	responsiveClass:true,
	responsive:{
	    0:{
	        items:1,
	    },
	    479:{
	        items:2,
	    },
	    1065:{
	        items:4,
	    }
	},
	onInitialize : function(){
	  jQuery('.featured-posts').removeClass('loading');
	},
  });

  /*---[ Featured Carousel 2 ]---*/
  jQuery(".carousel-2").owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause:true,
      autoHeight: false,
      loop: true,
      items:2,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      dots: false,
	  responsiveClass:true,
	  responsive:{
	      0:{
	          items:1,
	      },
	      550:{
	          items:2,
	      },
	      1065:{
	          items:3,
	      }
	  },
      onInitialize : function(){
          jQuery('.carousel').removeClass('loading');
      },
  });

  /*---[ Featured Slider ]---*/
  if ( jQuery('.featuredslider').length ) {
      jQuery(".featuredslider").owlCarousel({
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause:true,
          autoHeight: true,
          loop: true,
          items: 1,
          nav: true,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          dots: false,
          responsiveClass:true,
          onInitialize : function(){
              jQuery('.featuredslider').removeClass('loading');
          },
      });
  }

  /*---[ Gallery Post Format Slider ]---*/
  if ( jQuery('.galleryslider').length ) {
    jQuery(".galleryslider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        autoHeight: true,
        loop: true,
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        onInitialize : function(){
          jQuery('.galleryslider').removeClass('loading');
        },
    });
  }
});