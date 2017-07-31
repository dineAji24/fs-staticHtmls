/*
 *  File: main.js 
 *  created: 20-07-2017 
 *  Purpose: main js for fs promotion page
 *  plugins : jquery, slickcarousel, bootstrap
 */

(function(window,$){
var isLoaded = false;
var carouselElem = ".carousel-content"
var promoPage = {

	initEvent : function(elem,cb){
		$(elem).on('click',function(evt){
			evt.preventDefault();
			if(typeof cb=="function"){
				cb(this);
			}
		})
	},
	initCarousels: function(el){
		var self=this,
           	$sliderElem = $(el);
        
        _.each($sliderElem,function(item){
            if(!$(item).hasClass('slider-active') && JSON.parse($(item).attr('data-onload'))){
            	self.applyCarousel($(item));
            	$(item).addClass('slider-active')
            }
        })
	},
	applyCarousel: function(curElem){
		if(!curElem || typeof $.fn.slick!="function") return false;

		var elemIndex = $(curElem).data('maxSlide') || 1;
		var centerModeBool = $(curElem).data('centerMode') || false;
		var autoPlayBool = $(curElem).data('autoPlay') || false;
		$(curElem).removeClass('loading');
			if($(curElem).find('li').length <= elemIndex) return;
		$(curElem).slick({
		  infinite: false,
		  autoplay: autoPlayBool,
		  slidesToShow: elemIndex,
		  slidesToScroll: elemIndex,
		   responsive: [
		    {
		      breakpoint: 980,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        // centerMode: centerModeBool
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: centerModeBool
		      }
		    }
		  ]
		})
	},
	eventBindings : function(){
		var self= this;
		$('#wtw-modal').on('shown.bs.modal', function (e) {
			$('#wtw-modal .carousel-content').attr('data-onload',true);
			self.initCarousels(carouselElem);
		})
		self.initEvent('.promo-watch-list>a',function(curElem){
			// Do something
		})
	},
	init: function(){
		if(typeof _!="function" || typeof $!="function" || isLoaded) return;
		var self = this;
		self.initCarousels(carouselElem);
		self.eventBindings();
		isLoaded = true;
	}
}

promoPage.init();

$(function(){
	promoPage.init();
})


})(this,jQuery)


