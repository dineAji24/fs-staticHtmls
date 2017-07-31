/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});;
var relyjs, define, require;
(function (e) {
    var q = function () { }; q.prototype = function (h) {
        var n = {}, r = {}, k = {}, l = [], p = [], t = function (a) { return "[object Function]" === Object.prototype.toString.call(a) }, v = function (a, c, b) { void 0 === b && (b = 0); if ("indexOf" in Array.prototype) return a.indexOf(c, b); 0 > b && (b += a.length); 0 > b && (b = 0); for (var d = a.length; b < d; b++) if (b in a && a[b] === c) return b; return -1 }, w = function (a, c) {
            if (a && 0 < a.length && "." === a[0]) {
                var b = a.split("/"), d = c.split("/"), f = c.lastIndexOf("/") === c.length - 1, f = d.length - (f ? 1 : 2), m = [], e = "", g; for (g = 0; g <
                b.length; g++) ".." === b[g] ? f-- : "." !== b[g] && m.push(b[g]); if (0 > f) throw Error("Invalid Relative Path: " + a + " from " + c); for (g = 0; g <= f; g++) e += d[g] + "/"; return e += m.join("/")
            } return a
        }, u = function (a, c) { var b = !1, d = document.createElement("script"); d.src = a; d.onload = d.onreadystatechange = function () { if (d.readyState && "complete" !== d.readyState && "loaded" !== d.readyState || b) return !1; d.onload = d.onreadystatechange = null; b = !0; c && c() }; void 0 !== document.body && null !== document.body ? document.body.appendChild(d) : document.head.appendChild(d) };
        return {
            constructor: q, configure: function (a) { for (var c in a.externals) k[c] = a.externals[c] }, autoResolve: function (a) { p = a }, map: function (a, c) { n[a] = c }, require: function (a) {
                "undefined" !== typeof n[a] && (a = n[a]); a = w(a, l[l.length - 1]); if (0 <= v(l, a)) throw Error("Circular Dependency: " + l.join(" -> ") + " -> " + a); if ("undefined" === typeof k[a]) {
                    var c = r[a], b = {}, d = { exports: b }; if ("undefined" === typeof c || !t(c)) {
                        var f = !0; if (0 < l.length) for (var m = 0; m < p.length; m++) if (c = r[a + "." + p[m]], "undefined" !== typeof c && t(c)) {
                            a += "." + p[m]; f =
                            !1; break
                        } if (f) throw Error("Undefined Dependency: " + a);
                    } l.push(a); var h = !1, g; (function () { var f = define; define = function (a, b) { g = b; h = !0 }; k[a] = c(e.require, b, d); define = f })(); h ? (f = g(e.require, b, d), k[a] = f) : void 0 === k[a] && (k[a] = d.exports ? d.exports : b); l.pop()
                } return k[a]
            }, define: function (a, c) { r[a] = c }, load: function (a, c) {
                if ("[object Array]" === Object.prototype.toString.call(a)) for (var b = a.length, d = setTimeout(function () { if (0 < b) throw Error("RelyJS Timeout: " + a); }, 15E3), f = function () { b--; 1 > b && (clearTimeout(d), c && c()) },
                e = 0; e < a.length; e++) u(a[e], f); else u(a, c)
            }
        }
    }(); e.relyjs || (e.relyjs = new q, e.require = function (h) { return e.relyjs.require(h) }, e.define = function (h, n) { e.relyjs.define(h, n) })
})(this);
;
/*
string.js - Copyright (C) 2012-2013, JP Richardson <jprichardson@gmail.com>
*/

!(function() {
  "use strict";

  var VERSION = '1.7.0';

  var ENTITIES = {};

//******************************************************************************
// Added an initialize function which is essentially the code from the S
// constructor.  Now, the S constructor calls this and a new method named
// setValue calls it as well.  The setValue function allows constructors for
// modules that extend string.js to set the initial value of an object without
// knowing the internal workings of string.js.
//
// Also, all methods which return a new S object now call:
//
//      return new this.constructor(s);
//
// instead of:
//
//      return new S(s);
//
// This allows extended objects to keep their proper instanceOf and constructor.
//******************************************************************************

  function initialize (object, s) {
    if (s !== null && s !== undefined) {
      if (typeof s === 'string')
        object.s = s;
      else
        object.s = s.toString();
    } else {
      object.s = s; //null or undefined
    }

    object.orig = s; //original object, currently only used by toCSV() and toBoolean()

    if (s !== null && s !== undefined) {
      if (object.__defineGetter__) {
        object.__defineGetter__('length', function() {
          return object.s.length;
        })
      } else {
        object.length = s.length;
      }
    } else {
      object.length = -1;
    }
  }

  function S(s) {
  	initialize(this, s);
  }

  var __nsp = String.prototype;
  var __sp = S.prototype = {

    between: function(left, right) {
      var s = this.s;
      var startPos = s.indexOf(left);
      var endPos = s.indexOf(right);
      var start = startPos + left.length;
      return new this.constructor(endPos > startPos ?  s.slice(start, endPos) : "");
    },

    //# modified slightly from https://github.com/epeli/underscore.string
    camelize: function() {
      var s = this.trim().s.replace(/(\-|_|\s)+(.)?/g, function(mathc, sep, c) {
        return (c ? c.toUpperCase() : '');
      });
      return new this.constructor(s);
    },

    capitalize: function() {
      return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase());
    },

    charAt: function(index) {
      return this.s.charAt(index);
    },

    chompLeft: function(prefix) {
      var s = this.s;
      if (s.indexOf(prefix) === 0) {
         s = s.slice(prefix.length);
         return new this.constructor(s);
      } else {
        return this;
      }
    },

    chompRight: function(suffix) {
      if (this.endsWith(suffix)) {
        var s = this.s;
        s = s.slice(0, s.length - suffix.length);
        return new this.constructor(s);
      } else {
        return this;
      }
    },

    //#thanks Google
    collapseWhitespace: function() {
      var s = this.s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
      return new this.constructor(s);
    },

    contains: function(ss) {
      return this.s.indexOf(ss) >= 0;
    },

    count: function(ss) {
      var count = 0
        , pos = this.s.indexOf(ss)

      while (pos >= 0) {
        count += 1
        pos = this.s.indexOf(ss, pos + 1)
      }

      return count
    },

    //#modified from https://github.com/epeli/underscore.string
    dasherize: function() {
      var s = this.trim().s.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
      return new this.constructor(s);
    },

    decodeHtmlEntities: function() { //https://github.com/substack/node-ent/blob/master/index.js
      var s = this.s;
      s = s.replace(/&#(\d+);?/g, function (_, code) {
        return String.fromCharCode(code);
      })
      .replace(/&#[xX]([A-Fa-f0-9]+);?/g, function (_, hex) {
        return String.fromCharCode(parseInt(hex, 16));
      })
      .replace(/&([^;\W]+;?)/g, function (m, e) {
        var ee = e.replace(/;$/, '');
        var target = ENTITIES[e] || (e.match(/;$/) && ENTITIES[ee]);
            
        if (typeof target === 'number') {
          return String.fromCharCode(target);
        }
        else if (typeof target === 'string') {
          return target;
        }
        else {
          return m;
        }
      })

      return new this.constructor(s);
    },

    endsWith: function(suffix) {
      var l  = this.s.length - suffix.length;
      return l >= 0 && this.s.indexOf(suffix, l) === l;
    },

    escapeHTML: function() { //from underscore.string
      return new this.constructor(this.s.replace(/[&<>"']/g, function(m){ return '&' + reversedEscapeChars[m] + ';'; }));
    },

    ensureLeft: function(prefix) {
      var s = this.s;
      if (s.indexOf(prefix) === 0) {
        return this;
      } else {
        return new this.constructor(prefix + s);
      }
    },

    ensureRight: function(suffix) {
      var s = this.s;
      if (this.endsWith(suffix))  {
        return this;
      } else {
        return new this.constructor(s + suffix);
      }
    },

    humanize: function() { //modified from underscore.string
      if (this.s === null || this.s === undefined)
        return new this.constructor('')
      var s = this.underscore().replace(/_id$/,'').replace(/_/g, ' ').trim().capitalize()
      return new this.constructor(s)
    },

    isAlpha: function() {
      return !/[^a-z\xC0-\xFF]/.test(this.s.toLowerCase());
    },

    isAlphaNumeric: function() {
      return !/[^0-9a-z\xC0-\xFF]/.test(this.s.toLowerCase());
    },

    isEmpty: function() {
      return this.s === null || this.s === undefined ? true : /^[\s\xa0]*$/.test(this.s);
    },

    isLower: function() {
      return this.isAlpha() && this.s.toLowerCase() === this.s;
    },

    isNumeric: function() {
      return !/[^0-9]/.test(this.s);
    },

    isUpper: function() {
      return this.isAlpha() && this.s.toUpperCase() === this.s;
    },

    left: function(N) {
      if (N >= 0) {
        var s = this.s.substr(0, N);
        return new this.constructor(s);
      } else {
        return this.right(-N);
      }
    },
    
    lines: function() { //convert windows newlines to unix newlines then convert to an Array of lines
      return this.replaceAll('\r\n', '\n').s.split('\n');
    },

    pad: function(len, ch) { //https://github.com/component/pad
      if (ch == null) ch = ' ';
      if (this.s.length >= len) return new this.constructor(this.s);
      len = len - this.s.length;
      var left = Array(Math.ceil(len / 2) + 1).join(ch);
      var right = Array(Math.floor(len / 2) + 1).join(ch);
      return new this.constructor(left + this.s + right);
    },

    padLeft: function(len, ch) { //https://github.com/component/pad
      if (ch == null) ch = ' ';
      if (this.s.length >= len) return new this.constructor(this.s);
      return new this.constructor(Array(len - this.s.length + 1).join(ch) + this.s);
    },

    padRight: function(len, ch) { //https://github.com/component/pad
      if (ch == null) ch = ' ';
      if (this.s.length >= len) return new this.constructor(this.s);
      return new this.constructor(this.s + Array(len - this.s.length + 1).join(ch));
    },

    parseCSV: function(delimiter, qualifier, escape, lineDelimiter) { //try to parse no matter what
      delimiter = delimiter || ',';
      escape = escape || '\\'
      if (typeof qualifier == 'undefined')
        qualifier = '"';

      var i = 0, fieldBuffer = [], fields = [], len = this.s.length, inField = false, self = this;
      var ca = function(i){return self.s.charAt(i)};
      if (typeof lineDelimiter !== 'undefined') var rows = [];

      if (!qualifier)
        inField = true;

      while (i < len) {
        var current = ca(i);
        switch (current) {
          case escape:
          //fix for issues #32 and #35
          if (inField && ((escape !== qualifier) || ca(i+1) === qualifier)) {
              i += 1;
              fieldBuffer.push(ca(i));
              break;
          }
          if (escape !== qualifier) break;
          case qualifier:
            inField = !inField;
            break;
          case delimiter:
            if (inField && qualifier)
              fieldBuffer.push(current);
            else {
              fields.push(fieldBuffer.join(''))
              fieldBuffer.length = 0;
            }
            break;
          case lineDelimiter:
            if (inField) {
                fieldBuffer.push(current);
            } else {
                if (rows) {
                    fields.push(fieldBuffer.join(''))
                    rows.push(fields);
                    fields = [];
                    fieldBuffer.length = 0;
                }
            }
            break;
          default:
            if (inField)
              fieldBuffer.push(current);
            break;
        }
        i += 1;
      }

      fields.push(fieldBuffer.join(''));
      if (rows) {
        rows.push(fields);
        return rows;
      }
      return fields;
    },

    replaceAll: function(ss, r) {
      //var s = this.s.replace(new RegExp(ss, 'g'), r);
      var s = this.s.split(ss).join(r)
      return new this.constructor(s);
    },

    right: function(N) {
      if (N >= 0) {
        var s = this.s.substr(this.s.length - N, N);
        return new this.constructor(s);
      } else {
        return this.left(-N);
      }
    },

    setValue: function (s) {
	  initialize(this, s);
	  return this;
    },

    slugify: function() {
      var sl = (new S(this.s.replace(/[^\w\s-]/g, '').toLowerCase())).dasherize().s;
      if (sl.charAt(0) === '-')
        sl = sl.substr(1);
      return new this.constructor(sl);
    },

    startsWith: function(prefix) {
      return this.s.lastIndexOf(prefix, 0) === 0;
    },

    stripPunctuation: function() {
      //return new this.constructor(this.s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""));
      return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
    },

    stripTags: function() { //from sugar.js
      var s = this.s, args = arguments.length > 0 ? arguments : [''];
      multiArgs(args, function(tag) {
        s = s.replace(RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '');
      });
      return new this.constructor(s);
    },

    template: function(values, opening, closing) {
      var s = this.s
      var opening = opening || Export.TMPL_OPEN
      var closing = closing || Export.TMPL_CLOSE

      var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$')
      var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$')
      var r = new RegExp(open + '(.+?)' + close, 'g')
        //, r = /\{\{(.+?)\}\}/g
      var matches = s.match(r) || [];

      matches.forEach(function(match) {
        var key = match.substring(opening.length, match.length - closing.length);//chop {{ and }}
        if (typeof values[key] != 'undefined')
          s = s.replace(match, values[key]);
      });
      return new this.constructor(s);
    },

    times: function(n) {
      return new this.constructor(new Array(n + 1).join(this.s));
    },

    toBoolean: function() {
      if (typeof this.orig === 'string') {
        var s = this.s.toLowerCase();
        return s === 'true' || s === 'yes' || s === 'on';
      } else
        return this.orig === true || this.orig === 1;
    },

    toFloat: function(precision) {
      var num = parseFloat(this.s)
      if (precision)
        return parseFloat(num.toFixed(precision))
      else
        return num
    },

    toInt: function() { //thanks Google
      // If the string starts with '0x' or '-0x', parse as hex.
      return /^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10)
    },

    trim: function() {
      var s;
      if (typeof __nsp.trim === 'undefined') 
        s = this.s.replace(/(^\s*|\s*$)/g, '')
      else 
        s = this.s.trim()
      return new this.constructor(s);
    },

    trimLeft: function() {
      var s;
      if (__nsp.trimLeft)
        s = this.s.trimLeft();
      else
        s = this.s.replace(/(^\s*)/g, '');
      return new this.constructor(s);
    },

    trimRight: function() {
      var s;
      if (__nsp.trimRight)
        s = this.s.trimRight();
      else
        s = this.s.replace(/\s+$/, '');
      return new this.constructor(s);
    },

    truncate: function(length, pruneStr) { //from underscore.string, author: github.com/rwz
      var str = this.s;

      length = ~~length;
      pruneStr = pruneStr || '...';

      if (str.length <= length) return new this.constructor(str);

      var tmpl = function(c){ return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' '; },
        template = str.slice(0, length+1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

      if (template.slice(template.length-2).match(/\w\w/))
        template = template.replace(/\s*\S+$/, '');
      else
        template = new S(template.slice(0, template.length-1)).trimRight().s;

      return (template+pruneStr).length > str.length ? new S(str) : new S(str.slice(0, template.length)+pruneStr);
    },

    toCSV: function() {
      var delim = ',', qualifier = '"', escape = '\\', encloseNumbers = true, keys = false;
      var dataArray = [];

      function hasVal(it) {
        return it !== null && it !== '';
      }

      if (typeof arguments[0] === 'object') {
        delim = arguments[0].delimiter || delim;
        delim = arguments[0].separator || delim;
        qualifier = arguments[0].qualifier || qualifier;
        encloseNumbers = !!arguments[0].encloseNumbers;
        escape = arguments[0].escape || escape;
        keys = !!arguments[0].keys;
      } else if (typeof arguments[0] === 'string') {
        delim = arguments[0];
      }

      if (typeof arguments[1] === 'string')
        qualifier = arguments[1];

      if (arguments[1] === null)
        qualifier = null;

       if (this.orig instanceof Array)
        dataArray  = this.orig;
      else { //object
        for (var key in this.orig)
          if (this.orig.hasOwnProperty(key))
            if (keys)
              dataArray.push(key);
            else
              dataArray.push(this.orig[key]);
      }

      var rep = escape + qualifier;
      var buildString = [];
      for (var i = 0; i < dataArray.length; ++i) {
        var shouldQualify = hasVal(qualifier)
        if (typeof dataArray[i] == 'number')
          shouldQualify &= encloseNumbers;
        
        if (shouldQualify)
          buildString.push(qualifier);
        
        if (dataArray[i] !== null && dataArray[i] !== undefined) {
          var d = new S(dataArray[i]).replaceAll(qualifier, rep).s;
          buildString.push(d);
        } else 
          buildString.push('')

        if (shouldQualify)
          buildString.push(qualifier);
        
        if (delim)
          buildString.push(delim);
      }

      //chop last delim
      //console.log(buildString.length)
      buildString.length = buildString.length - 1;
      return new this.constructor(buildString.join(''));
    },

    toString: function() {
      return this.s;
    },

    //#modified from https://github.com/epeli/underscore.string
    underscore: function() {
      var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
      if ((new S(this.s.charAt(0))).isUpper()) {
        s = '_' + s;
      }
      return new this.constructor(s);
    },

    unescapeHTML: function() { //from underscore.string
      return new this.constructor(this.s.replace(/\&([^;]+);/g, function(entity, entityCode){
        var match;

        if (entityCode in escapeChars) {
          return escapeChars[entityCode];
        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
          return String.fromCharCode(parseInt(match[1], 16));
        } else if (match = entityCode.match(/^#(\d+)$/)) {
          return String.fromCharCode(~~match[1]);
        } else {
          return entity;
        }
      }));
    },

    valueOf: function() {
      return this.s.valueOf();
    }

  }

  var methodsAdded = [];
  function extendPrototype() {
    for (var name in __sp) {
      (function(name){
        var func = __sp[name];
        if (!__nsp.hasOwnProperty(name)) {
          methodsAdded.push(name);
          __nsp[name] = function() {
            String.prototype.s = this;
            return func.apply(this, arguments);
          }
        }
      })(name);
    }
  }

  function restorePrototype() {
    for (var i = 0; i < methodsAdded.length; ++i)
      delete String.prototype[methodsAdded[i]];
    methodsAdded.length = 0;
  }


/*************************************
/* Attach Native JavaScript String Properties
/*************************************/

  var nativeProperties = getNativeStringProperties();
  for (var name in nativeProperties) {
    (function(name) {
      var stringProp = __nsp[name];
      if (typeof stringProp == 'function') {
        //console.log(stringProp)
        if (!__sp[name]) {
          if (nativeProperties[name] === 'string') {
            __sp[name] = function() {
              //console.log(name)
              return new this.constructor(stringProp.apply(this, arguments));
            }
          } else {
            __sp[name] = stringProp;
          }
        }
      }
    })(name);
  }


/*************************************
/* Function Aliases
/*************************************/

  __sp.repeat = __sp.times;
  __sp.include = __sp.contains;
  __sp.toInteger = __sp.toInt;
  __sp.toBool = __sp.toBoolean;
  __sp.decodeHTMLEntities = __sp.decodeHtmlEntities //ensure consistent casing scheme of 'HTML'


//******************************************************************************
// Set the constructor.  Without this, string.js objects are instances of
// Object instead of S.
//******************************************************************************

  __sp.constructor = S;


/*************************************
/* Private Functions
/*************************************/

  function getNativeStringProperties() {
    var names = getNativeStringPropertyNames();
    var retObj = {};

    for (var i = 0; i < names.length; ++i) {
      var name = names[i];
      var func = __nsp[name];
      try {
        var type = typeof func.apply('teststring', []);
        retObj[name] = type;
      } catch (e) {}
    }
    return retObj;
  }

  function getNativeStringPropertyNames() {
    var results = [];
    if (Object.getOwnPropertyNames) {
      results = Object.getOwnPropertyNames(__nsp);
      results.splice(results.indexOf('valueOf'), 1);
      results.splice(results.indexOf('toString'), 1);
      return results;
    } else { //meant for legacy cruft, this could probably be made more efficient
      var stringNames = {};
      var objectNames = [];
      for (var name in String.prototype)
        stringNames[name] = name;

      for (var name in Object.prototype)
        delete stringNames[name];

      //stringNames['toString'] = 'toString'; //this was deleted with the rest of the object names
      for (var name in stringNames) {
        results.push(name);
      }
      return results;
    }
  }

  function Export(str) {
    return new S(str);
  };

  //attach exports to StringJSWrapper
  Export.extendPrototype = extendPrototype;
  Export.restorePrototype = restorePrototype;
  Export.VERSION = VERSION;
  Export.TMPL_OPEN = '{{';
  Export.TMPL_CLOSE = '}}';
  Export.ENTITIES = ENTITIES;



/*************************************
/* Exports
/*************************************/

  if (typeof module !== 'undefined'  && typeof module.exports !== 'undefined') {
    module.exports = Export;

  } else {

    if(typeof define === "function" && define.amd) {
      define([], function() {
        return Export;
      });
    } else {
      window.S = Export;
    }
  }


/*************************************
/* 3rd Party Private Functions
/*************************************/

  //from sugar.js
  function multiArgs(args, fn) {
    var result = [], i;
    for(i = 0; i < args.length; i++) {
      result.push(args[i]);
      if(fn) fn.call(args, args[i], i);
    }
    return result;
  }

  //from underscore.string
  var escapeChars = {
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    amp: '&'
  };

  //from underscore.string
  var reversedEscapeChars = {};
  for(var key in escapeChars){ reversedEscapeChars[escapeChars[key]] = key; }

  ENTITIES = {
    "amp" : "&",
    "gt" : ">",
    "lt" : "<",
    "quot" : "\"",
    "apos" : "'",
    "AElig" : 198,
    "Aacute" : 193,
    "Acirc" : 194,
    "Agrave" : 192,
    "Aring" : 197,
    "Atilde" : 195,
    "Auml" : 196,
    "Ccedil" : 199,
    "ETH" : 208,
    "Eacute" : 201,
    "Ecirc" : 202,
    "Egrave" : 200,
    "Euml" : 203,
    "Iacute" : 205,
    "Icirc" : 206,
    "Igrave" : 204,
    "Iuml" : 207,
    "Ntilde" : 209,
    "Oacute" : 211,
    "Ocirc" : 212,
    "Ograve" : 210,
    "Oslash" : 216,
    "Otilde" : 213,
    "Ouml" : 214,
    "THORN" : 222,
    "Uacute" : 218,
    "Ucirc" : 219,
    "Ugrave" : 217,
    "Uuml" : 220,
    "Yacute" : 221,
    "aacute" : 225,
    "acirc" : 226,
    "aelig" : 230,
    "agrave" : 224,
    "aring" : 229,
    "atilde" : 227,
    "auml" : 228,
    "ccedil" : 231,
    "eacute" : 233,
    "ecirc" : 234,
    "egrave" : 232,
    "eth" : 240,
    "euml" : 235,
    "iacute" : 237,
    "icirc" : 238,
    "igrave" : 236,
    "iuml" : 239,
    "ntilde" : 241,
    "oacute" : 243,
    "ocirc" : 244,
    "ograve" : 242,
    "oslash" : 248,
    "otilde" : 245,
    "ouml" : 246,
    "szlig" : 223,
    "thorn" : 254,
    "uacute" : 250,
    "ucirc" : 251,
    "ugrave" : 249,
    "uuml" : 252,
    "yacute" : 253,
    "yuml" : 255,
    "copy" : 169,
    "reg" : 174,
    "nbsp" : 160,
    "iexcl" : 161,
    "cent" : 162,
    "pound" : 163,
    "curren" : 164,
    "yen" : 165,
    "brvbar" : 166,
    "sect" : 167,
    "uml" : 168,
    "ordf" : 170,
    "laquo" : 171,
    "not" : 172,
    "shy" : 173,
    "macr" : 175,
    "deg" : 176,
    "plusmn" : 177,
    "sup1" : 185,
    "sup2" : 178,
    "sup3" : 179,
    "acute" : 180,
    "micro" : 181,
    "para" : 182,
    "middot" : 183,
    "cedil" : 184,
    "ordm" : 186,
    "raquo" : 187,
    "frac14" : 188,
    "frac12" : 189,
    "frac34" : 190,
    "iquest" : 191,
    "times" : 215,
    "divide" : 247,
    "OElig;" : 338,
    "oelig;" : 339,
    "Scaron;" : 352,
    "scaron;" : 353,
    "Yuml;" : 376,
    "fnof;" : 402,
    "circ;" : 710,
    "tilde;" : 732,
    "Alpha;" : 913,
    "Beta;" : 914,
    "Gamma;" : 915,
    "Delta;" : 916,
    "Epsilon;" : 917,
    "Zeta;" : 918,
    "Eta;" : 919,
    "Theta;" : 920,
    "Iota;" : 921,
    "Kappa;" : 922,
    "Lambda;" : 923,
    "Mu;" : 924,
    "Nu;" : 925,
    "Xi;" : 926,
    "Omicron;" : 927,
    "Pi;" : 928,
    "Rho;" : 929,
    "Sigma;" : 931,
    "Tau;" : 932,
    "Upsilon;" : 933,
    "Phi;" : 934,
    "Chi;" : 935,
    "Psi;" : 936,
    "Omega;" : 937,
    "alpha;" : 945,
    "beta;" : 946,
    "gamma;" : 947,
    "delta;" : 948,
    "epsilon;" : 949,
    "zeta;" : 950,
    "eta;" : 951,
    "theta;" : 952,
    "iota;" : 953,
    "kappa;" : 954,
    "lambda;" : 955,
    "mu;" : 956,
    "nu;" : 957,
    "xi;" : 958,
    "omicron;" : 959,
    "pi;" : 960,
    "rho;" : 961,
    "sigmaf;" : 962,
    "sigma;" : 963,
    "tau;" : 964,
    "upsilon;" : 965,
    "phi;" : 966,
    "chi;" : 967,
    "psi;" : 968,
    "omega;" : 969,
    "thetasym;" : 977,
    "upsih;" : 978,
    "piv;" : 982,
    "ensp;" : 8194,
    "emsp;" : 8195,
    "thinsp;" : 8201,
    "zwnj;" : 8204,
    "zwj;" : 8205,
    "lrm;" : 8206,
    "rlm;" : 8207,
    "ndash;" : 8211,
    "mdash;" : 8212,
    "lsquo;" : 8216,
    "rsquo;" : 8217,
    "sbquo;" : 8218,
    "ldquo;" : 8220,
    "rdquo;" : 8221,
    "bdquo;" : 8222,
    "dagger;" : 8224,
    "Dagger;" : 8225,
    "bull;" : 8226,
    "hellip;" : 8230,
    "permil;" : 8240,
    "prime;" : 8242,
    "Prime;" : 8243,
    "lsaquo;" : 8249,
    "rsaquo;" : 8250,
    "oline;" : 8254,
    "frasl;" : 8260,
    "euro;" : 8364,
    "image;" : 8465,
    "weierp;" : 8472,
    "real;" : 8476,
    "trade;" : 8482,
    "alefsym;" : 8501,
    "larr;" : 8592,
    "uarr;" : 8593,
    "rarr;" : 8594,
    "darr;" : 8595,
    "harr;" : 8596,
    "crarr;" : 8629,
    "lArr;" : 8656,
    "uArr;" : 8657,
    "rArr;" : 8658,
    "dArr;" : 8659,
    "hArr;" : 8660,
    "forall;" : 8704,
    "part;" : 8706,
    "exist;" : 8707,
    "empty;" : 8709,
    "nabla;" : 8711,
    "isin;" : 8712,
    "notin;" : 8713,
    "ni;" : 8715,
    "prod;" : 8719,
    "sum;" : 8721,
    "minus;" : 8722,
    "lowast;" : 8727,
    "radic;" : 8730,
    "prop;" : 8733,
    "infin;" : 8734,
    "ang;" : 8736,
    "and;" : 8743,
    "or;" : 8744,
    "cap;" : 8745,
    "cup;" : 8746,
    "int;" : 8747,
    "there4;" : 8756,
    "sim;" : 8764,
    "cong;" : 8773,
    "asymp;" : 8776,
    "ne;" : 8800,
    "equiv;" : 8801,
    "le;" : 8804,
    "ge;" : 8805,
    "sub;" : 8834,
    "sup;" : 8835,
    "nsub;" : 8836,
    "sube;" : 8838,
    "supe;" : 8839,
    "oplus;" : 8853,
    "otimes;" : 8855,
    "perp;" : 8869,
    "sdot;" : 8901,
    "lceil;" : 8968,
    "rceil;" : 8969,
    "lfloor;" : 8970,
    "rfloor;" : 8971,
    "lang;" : 9001,
    "rang;" : 9002,
    "loz;" : 9674,
    "spades;" : 9824,
    "clubs;" : 9827,
    "hearts;" : 9829,
    "diams;" : 9830
  }


}).call(this);
;
/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-domprefixes-mq-prefixed-testallprops-testprop !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in S)if(S.hasOwnProperty(f)){if(e=[],n=S[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function i(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?x.className.baseVal=n:x.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(){var e=n.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var i,s,l,u,p="modernizr",c=a("div"),d=f();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:p+(r+1),c.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+p,(d.fake?d:c).appendChild(i),d.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),s=t(c,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=u,x.offsetHeight):c.parentNode.removeChild(c),!!s}function u(e,n){return!!~(""+e).indexOf(n)}function p(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?p(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(n[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function f(){p&&(delete T.style,delete T.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var p,c,d,v,h,y=["modernizr","tspan"];!T.style;)p=!0,T.modElem=a(y.shift()),T.style=T.modElem.style;for(d=e.length,c=0;d>c;c++)if(v=e[c],h=T.style[v],u(v,"-")&&(v=s(v)),T.style[v]!==t){if(i||r(o,"undefined"))return f(),"pfx"==n?v:!0;try{T.style[v]=o}catch(g){}if(T.style[v]!=h)return f(),"pfx"==n?v:!0}return f(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+w.join(s+" ")+s).split(" "),c(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C="Moz O ms Webkit",S=[],_={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var w=_._config.usePrefixes?C.toLowerCase().split(" "):[];_._domPrefixes=w;var x=n.documentElement,b="svg"===x.nodeName.toLowerCase(),E=_._config.usePrefixes?C.split(" "):[];_._cssomPrefixes=E;var P=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};_.atRule=P;var z=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();_.mq=z;var N={elem:a("modernizr")};Modernizr._q.push(function(){delete N.elem});var T={style:N.elem.style};Modernizr._q.unshift(function(){delete T.style});_.testProp=function(e,n,r){return v([e],t,n,r)};_.testAllProps=h;_.prefixed=function(e,n,t){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};_.testAllProps=y,Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),i(g),delete _.addTest,delete _.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);;

/*
 *  File Name: MattelVideoPlayer.js
 *  Purpose: ooyala Migration for Mattel Brands
 *  File Version: 5.1
 *  Plugin Included: MasterPlugin.js-Bundled (core.min.js,main_html5.min.js,html5-skin.min.js) , html5-skin.min.css
 *  Plugin Version : 4.3.3
 */

var MattelVideoPlayer = {};
MattelVideoPlayer.ooPlayerInstances = {};
MattelVideoPlayer.ooyalaApiLoaded = false;

(function() {
    MattelVideoPlayer.playerScenarios = {
        thumbnailNreload: false,
        thumbnailNonreload: false,
        singlePlayer: false,
        multiplayer: false
    };

    var screenWidth,
        haveVideoToLoad = false,
        videoContainers = [],
        generatedExtId = "",
        completedVideo=false,
        apiLoaded = false,
        dynamicElement,
        brandPlayerIds,
        pCodeVal,
        hostedDomain = "https://static.mattel.com/videoplayer/src/js/v4/",
        playListDomain = "https://player.ooyala.com/v3/",
        bodyElementTag,
        ooyalaVersion = '4.3.3',
        build = 002,
        headElementTag;


    // creating and binding ooyala plugins like css,js
    function renderOoyalaApi(callback) {
        videoContainers = document.getElementsByClassName("ooyala-video-player"),
        brandPlayerIds = document.getElementById("oo-player-id") != null ? document.getElementById("oo-player-id").children[0].value : [],
        pCodeVal = document.getElementById("oo-player-pcode") != null ? document.getElementById("oo-player-pcode").value : [],
        playListPlayerId = document.getElementById("oo-playlist-id") != null ? document.getElementById("oo-playlist-id").value : [],
        bodyElementTag = document.getElementsByTagName('body')[0],
        headElementTag = document.getElementsByTagName("head")[0],
	MattelVideoPlayer.ooPlayerInstances.players = [];
	bodyElementTag.appendChild(fileBinding('js',hostedDomain+"ooyala-master-plugin.js",callback));
    if($(".ooyala-video-player[data-customPlayer]").length > 0){
        bodyElementTag.appendChild(fileBinding('js',playListDomain+playListPlayerId+'?platform=html5-priority',callback));
    }
    headElementTag.appendChild(fileBinding('css',"https://player.ooyala.com/static/v4/stable/"+ooyalaVersion+"/skin-plugin/html5-skin.min.css"));
    headElementTag.appendChild(fileBinding('css',hostedDomain+"ooyala-overridden.css?bld="+build));
    }

    // Rendering script / css file based on the dynamic url
    function fileBinding(fileName,fileUrl,callBack){
        if(fileName=="js"){
                dynamicElement = document.createElement('script'),
                dynamicElement.src = fileUrl ;
                if(typeof callBack == "function") dynamicElement.onload = callBack;
        }
        else if(fileName=="css"){
			dynamicElement = document.createElement("link");
			dynamicElement.setAttribute("rel", "stylesheet")
			dynamicElement.setAttribute("type", "text/css")
			dynamicElement.setAttribute("href", fileUrl)
        }
        return dynamicElement;
    }

    /**
     For each player in the page, setting the scenario based on the following player Tag Element ID
     @divId: (passed as parameter)player Tag Element ID
     @Functionality: Detects and sets the player scenario for further player playback.
    **/
    function scenarioDetector(divId, indx) {
        MattelVideoPlayer.playerScenarios = {
            thumbnailNreload: (jQuery("#" + divId).attr('data-contains-thumbnailNreload') != null) ? jQuery("#" + divId).attr('data-contains-thumbnailNreload') : undefined,
            thumbnailNonreload: (jQuery("#" + divId).attr('data-contains-thumbnailNonreload') != null) ? jQuery("#" + divId).attr('data-contains-thumbnailNonreload') : undefined,
            singlePlayer: (jQuery("#" + divId).attr('data-singlePlayer') != null) ? jQuery("#" + divId).attr('data-singlePlayer') : undefined,
            multiplayer: (jQuery("#" + divId).attr('data-multiplePlayer') != null) ? jQuery("#" + divId).attr('data-multiplePlayer') : undefined,
            customPlayer: (jQuery("#" + divId).attr('data-customPlayer') != null) ? jQuery("#" + divId).attr('data-customPlayer') : undefined,
            slidingPlayerOnPage: (jQuery('[data-slidertype ="flexSlider"]').length) ? jQuery('[data-slidertype ="flexSlider"]') : ((jQuery('[data-slidertype ="bxSlider"]').length) ? jQuery('[data-slidertype ="bxSlider"]') : undefined)

        }
        scenarioBasedConfig(divId, indx);
        eventBinders();
    }

    // Based on the detected scenario, do some config on detected scenarios
    function scenarioBasedConfig(divId, indx) {
        if (MattelVideoPlayer.playerScenarios.thumbnailNonreload) {
            /**
            This block prevents the default behavior of anchor tag, as the scenario set as THUMBNAIL-NON-RELOAD
            (i.e., loads the video without reloading the page, A fallback to prevent default behavior)
            **/
            MattelVideoPlayer.ooPlayerInstances.players[indx] = startOoyalaPlayer(divId, jQuery("#" + divId).data('videoId'));
            var listEl = jQuery('.thumbnail-video-list .video-list-item a');
            if (listEl != null) {
                // binding click event based on the jquery version
                if (typeof jQuery.fn.live == "function") {
                    listEl.live('click', function(e) { /** ---for jquery < 1.7 --**/
                        e.preventDefault();
                    })
                } else if (typeof jQuery.fn.on == "function") { /** ---for jquery >= 1.7 --**/
                    listEl.on('click', function(e) {
                        e.preventDefault();
                    })
                }
            }
        } else if (MattelVideoPlayer.playerScenarios.thumbnailNreload) {
            MattelVideoPlayer.ooPlayerInstances.players[indx] = startOoyalaPlayer(divId, jQuery("#" + divId).data('videoId'));
        } else if (MattelVideoPlayer.playerScenarios.customPlayer) {
            MattelVideoPlayer.ooPlayerInstances.players[indx] = startOoyalaPlayer(divId, jQuery("#" + divId).data('playlistId'), true);
        } else {
            MattelVideoPlayer.ooPlayerInstances.players[indx] = (haveVideoToLoad) ? startOoyalaPlayer(divId, generatedExtId) : startOoyalaPlayer(divId, jQuery("#" + divId).data('videoId'));
        }
    }

    // slider Overlay for navigations
    MattelVideoPlayer.playerNavigationControl = function(currentSlider) {
        jQuery(MattelVideoPlayer.ooPlayerInstances.players).each(function(index, item) {
            item.mb.publish(OO.EVENTS.PAUSE, true)
        });
        if (typeof(currentSlider) == "undefined") return false;
        MattelVideoPlayer.ooPlayerInstances.players[currentSlider].play();
    }

    // Pre-configures and generates the unique ooyala player ID for each player in the page
    function ooVideoSetters() {
        if(typeof OO ==="undefined") return;
        OO.ready(function() {
            if (!jQuery('div[ooyala-Overlay]').length) playerLoading();
        });
        if (jQuery('[ooyala-video-slider]').length > 0) {
            MattelVideoPlayer.ooPlayerInstances = {};
            MattelVideoPlayer.ooPlayerInstances.players = []
            playerLoading();
        } else if (jQuery('[ooyala-Overlay]').hasClass('activeOverlay')) {
            playerLoading();
        }

    }

    // Generates and sets the unique id attribute for player containers
    function playerLoading() {

        for (var i = 0; i < videoContainers.length; i++) {
            videoContainers[i].setAttribute('id', 'video-container-' + (i + 1));
            if (!haveVideoToLoad) {
                scenarioDetector(videoContainers[i].getAttribute('id'), i);
            } else {
                scenarioDetector(videoContainers[i].getAttribute('id'), i);
                break;
            }

        }
        if($('#main-player-enchantimals') && $('#main-player-enchantimals').length){
          $('#main-player-enchantimals').trigger('dividchanged');
          //console.log('triggered dividchanged event');
        }

    }

    // Binds the events for the thumbnails if available in the page
    function eventBinders() {

            /** This block helps in handling events for "thumbnailNonreload" scenarios
                (i.e., clicking on thumbnail, loads appropriate video in the player)
            **/
            if (typeof $.fn.live == "function") {
                 if (MattelVideoPlayer.playerScenarios.thumbnailNonreload) {
                    $('.thumbnail-video-list .video-list-item').live('click', function(ev) {
                        playerBinding(this);
                        $('.video-list-item').removeClass('oo-thumbnail-active');
                        $(ev.currentTarget).addClass('oo-thumbnail-active');
                    })
                 }
                $('.replay[op-control-replay]').live('click',function(ev){
                    MattelVideoPlayer.ooPlayerInstances.players[0].play();
                });
            } else if (typeof $.fn.on == "function") { /** ---for jquery >= 1.7 --**/
                if (MattelVideoPlayer.playerScenarios.thumbnailNonreload) {
                    $('.thumbnail-video-list').on('click', '.video-list-item', function(ev) {
                        playerBinding(this);
                        $('.video-list-item').removeClass('oo-thumbnail-active');
                        $(ev.currentTarget).addClass('oo-thumbnail-active');
                    })
                }
                $(document).on('click','.replay[op-control-replay]',function(ev){
                    MattelVideoPlayer.ooPlayerInstances.players[0].play();
                });
            }
        //}
    }

    // Binds the thumbnail events for the thumbnails non-relaoding page
    function playerBinding(curEle) {
        var externalId = $(curEle).data('videoId'),
            contentId = (externalId.length >= 32 || externalId.indexOf('extId:') != -1) ? externalId : "extId:" + externalId,
            playerClass = document.getElementsByClassName("ooyala-video-player");

        if(MattelVideoPlayer.ooPlayerInstances.players.length==1){
            playerEmbedCode(MattelVideoPlayer.ooPlayerInstances.players[0],contentId);
            $('[data-contains-thumbnailnonreload=true]').data("videoId",contentId);
            return false;
        }

        for (var j = 0; j < playerClass.length; j++) {
            for (var i = 0; i < curEle.parentElement.children.length; i++) {
                if (playerClass[j].getAttribute('data-video-id') == curEle.parentElement.children[i].getAttribute('data-video-id')) {
                    var splittedVal = playerClass[j].getAttribute('id').split("-");
                    playerIndex = (playerClass[j].getAttribute('id').split("-")[splittedVal.length - 1]) - 1;
                    playerEmbedCode(MattelVideoPlayer.ooPlayerInstances.players[playerIndex],contentId);
                    break;
                }
            }
        }
    }
    function playerEmbedCode(_player,_contentid){
        _player.setEmbedCode(_contentid);
        _player.play();
    }

    //Telium Events tracker for OOYALA PLAYER
    function OOEventTracking(action, curTitle) {
        utag.link({
            event_id: action,
            event_category_id: "Videos",
            eve_lab: curTitle
        });
    }

    // Instantiates ooyala Player
    function startOoyalaPlayer(divId, externalId, isCustomPlayer) {
        var playingVideo = false,
            previousEvent = '',
            player, contentId,playerParam;

        contentId = (externalId.length >= 32 || externalId.indexOf('extId:') != -1) ? externalId : "extId:" + externalId;
        if (typeof isCustomPlayer != 'undefined' && isCustomPlayer) {
            //custom player (playlists)
            var arr = [];
            arr.push(contentId);
             player = OO.Player.create(divId,'',{
                'pcode':pCodeVal,
                "playerBrandingId" : brandPlayerIds,
                'autoplay': $('#' + divId).data('autoplay'),
                'playlistsPlugin': {
                    'data': arr,
                    'orientation' : 'horizontal',
                    'position': 'bottom',
                    'thumbnailsSize' : '300px',
                    'wrapperFontSize' : '18px'
                },
                'debug':true,
                'width': '100%',
                'height': '100%',
                'wmode': 'transparent',
                'useFirstVideoFromPlaylist': true,
                'loop': false
            });
        } else { // standard player
            player = OO.Player.create(divId, contentId,{
                'pcode':pCodeVal,
                "playerBrandingId" : brandPlayerIds,
                'autoplay': $('#' + divId).data('autoplay'),
                'width': '100%',
                'height': '100%',
                'wmode': 'transparent',
                "skin": {
                    // Config contains the configuration setting for player skin. Change to your local config when necessary.
                    "config": "https://player.ooyala.com/static/v4/stable/"+ooyalaVersion+"/skin-plugin/skin.json",
                    //Put your player customizations here to override settings in skin.json. The JSON object must match the structure of skin.json
                     "inline": {
                          "startScreen": {"showTitle": false, "playIconStyle": {"color": "white", "opacity" : 1}},
                          "pauseScreen": {"showTitle": false}

                        }
                  }
            });
        }

        /** tracking code for player ready/play **/
        player.mb.subscribe(OO.EVENTS.PLAYING, 'Playing', function(event) {
            if (previousEvent != event) {
                if (!playingVideo) {
                    playingVideo = true;
                    completedVideo=true;
                    // OOEventTracking('Launch',MattelVideoPlayer.ooPlayerInstances.players[0].getCurrentItemTitle());
                } else {
                    // OOEventTracking('Play',MattelVideoPlayer.ooPlayerInstances.players[0].getCurrentItemTitle());
                }
            }
            previousEvent = event;
        });

        /** tracking code for player paused **/
        player.mb.subscribe(OO.EVENTS.PAUSED, 'Paused', function(event) {
            if (playingVideo && previousEvent != event && previousEvent != 'played') {
                // OOEventTracking('Pause',MattelVideoPlayer.ooPlayerInstances.players[0].getCurrentItemTitle());
                previousEvent = event;
            }

        });

        /** tracking code for player end/completed **/
        player.mb.subscribe(OO.EVENTS.PLAYED, 'completed', function(event) {
            // OOEventTracking('Completed',MattelVideoPlayer.ooPlayerInstances.players[0].getCurrentItemTitle());
            if (MattelVideoPlayer.playerScenarios.thumbnailNonreload && previousEvent!=event && completedVideo) {
                completedVideo=false;
                MattelVideoPlayer.ooPlayerInstances.players[0].mb.publish(OO.EVENTS.PAUSE, false)
                /** --- calling the function for autoplaying next video --- **/
                var curId=$('[data-contains-thumbnailnonreload=true]').data('video-id')
                var curEle=$('.thumbnail-video-list .video-list-item[data-video-id="' +((curId.indexOf('extId') != -1) ? curId.split(':')[1] : curId)+ '"]');
                if(($(curEle).next()&& $(curEle).length)>0){
                   $(curEle).next().click();
                }else{
                   $('.thumbnail-video-list .video-list-item:first-child').click();
                }
            }
            playingVideo = false;
            previousEvent = event;
        });

        /** tracking code for player destroy **/
        player.mb.subscribe(OO.EVENTS.DESTROY, 'destroy', function(event) {
            console.log("Destroy")
        });

        return player;
    }

    // Destroy the ooyala player
    MattelVideoPlayer.destroyVideos = function() {
        $(MattelVideoPlayer.ooPlayerInstances.players).each(function(index, item) {
            item.mb.publish(OO.EVENTS.DESTROY, true)
        })
    }

    /*** Slider Actions Begins***/
    MattelVideoPlayer.sliderActions = {};
    MattelVideoPlayer.sliderActions = {
            'findVideoPos': function(self, sliderType) {
                if (sliderType != "bxslider") { //flexslider
                    this.nthVideo = -1; // Detects the slide where the video resides.
                    this.elementId = "";
                    var that = this;
                    $(self.selector).each(function(key, item) {
                        if (!$(item).hasClass('clone')) {
                            if ($(item).find('.player-wrapper').length) {
                                that.nthVideo++;
                                that.elementId = $(item).find('.ooyala-video-player').attr('id');
                            }
                            if ($(item).hasClass('flex-active-slide')) {
                                return false;
                            }
                        }
                    })
                } else if (sliderType == "bxslider") { //bxslider
                    //not required as of now
                }
            },
            'beforeAction': function(slider, self, previousSlide, currentSlide, sliderType) {
                if (sliderType != "bxslider") { //flexslider
                    // chk whether the current slide contains video or not.
                    var slideHasVideo = ($('.flex-active-slide').find('.player-wrapper').length) ? true : false;
                    MattelVideoPlayer.sliderActions.findVideoPos(self, sliderType);
                    console.log(this.nthVideo);
                    if (slideHasVideo) { // if video found in current slide, pause it.
                        var x = this.elementId;
                var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.getElementId())})
                if(y.length>0){
                    y[0].pause();
                }
                        //MattelVideoPlayer.ooPlayerInstances.players[this.nthVideo].pause();
                        slider.play();
                    }
                } else if (sliderType == "bxslider") { //bxslider
                    //not required as of now
                }
            },
            'afterAction': function(slider, self, previousSlide, currentSlide, sliderType) {
                if (sliderType != "bxslider") { //flexslider
                    // chk whether the current slide contains video or not.
                    var slideHasVideo = ($('.flex-active-slide').find('.player-wrapper').length) ? true : false;
                    MattelVideoPlayer.sliderActions.findVideoPos(self, sliderType);
                    if (slideHasVideo) { // if video found in current slide, play video and pause slider.
                        //MattelVideoPlayer.ooPlayerInstances.players[this.nthVideo].play();
                        var x = this.elementId;
						var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.getElementId())})
						if(y.length>0 && !y[0].isPlaying()){
							y[0].play();
							slider.pause();
							//slider.play();
								//setTimeout(function(){
								//slider.pause();
								 //$('[data-slidertype ="flexSlider"]').flexslider('pause')
							//},1000);
						}



                    } else { // if video is not in current slider play slider
                        slider.play();
                    }
                } else if (sliderType == "bxslider") { //bxslider
                    $('.bx-active-slide').removeClass('bx-active-slide');
                    self.parent().find('> li').eq(currentSlide).addClass('bx-active-slide')
                    if (self.parent().find('li').eq(currentSlide).find('.player-wrapper').length) {
                        MattelVideoPlayer.ooPlayerInstances.players.forEach(function(player, indx) {
                            if (self.find('.ooyala-video-player').attr('id') == player.elementId) {
                                player.play();
                            } else {
                                player.pause();
                            }
                            player.mb.subscribe(OO.EVENTS.PLAYED, '', function(event) {
                                $(self).parentsUntil('[data-slidertype="bxSlider"]').find('.bx-next').trigger('click');
                            });
                        })
                    }
                }
            },
            'startAction': function(slider, self, previousSlide, currentSlide, sliderType) {
                if (sliderType != "bxslider") { //flexslider
                    // 1. Initially pause the slider
                    slider.pause();
                    // Go through all the player instances
                    MattelVideoPlayer.ooPlayerInstances.players.forEach(function(player, indx) {
                        MattelVideoPlayer.ooPlayerInstances.players[0].play();
                        // Handle Video Pause Event
                        player.mb.subscribe(OO.EVENTS.PAUSED, '', function(event) {
                            slider.play();
                            $('[data-slidertype ="flexSlider"]').play();
                        });
                        // Handle Video Completed Playing Event
                        player.mb.subscribe(OO.EVENTS.PLAYED, '', function(event) {
                            $('[data-slidertype ="flexSlider"]').flexslider(((slider.currentSlide + 1) < slider.pagingCount) ? slider.currentSlide + 1 : 0);
							slider.play();
                        });
                        player.mb.subscribe(OO.EVENTS.PLAYING, '', function(event) {
                           // slider.pause();
                        });
                    });
                } else if (sliderType == "bxslider") { //bxslider
                    $(self).parent().find('li').eq(1).addClass('bx-active-slide')
                    $(self).parent().find('> li').addClass('slide')
                    $(self).parent().find('.bx-clone').removeClass('slide')
                        // Go through all the player instances
                    MattelVideoPlayer.ooPlayerInstances.players.forEach(function(player, indx) {
                        MattelVideoPlayer.ooPlayerInstances.players[0].play();
                        // Handle Video Pause Event
                        player.mb.subscribe(OO.EVENTS.PAUSED, '', function(event) {
                            slider.startAuto();
                        });
                        // Handle Video Completed Playing Event
                        player.mb.subscribe(OO.EVENTS.PLAYED, '', function(event) {
                            //slider.goToNextSlide();
                        });
                        // Handle the player ready to play Event
                        player.mb.subscribe(OO.EVENTS.PLAYBACK_READY, '', function(event) {
                            slider.stopAuto();
                        });
                        player.mb.subscribe(OO.EVENTS.PLAYING, '', function(event) {
                            slider.stopAuto();
                        });
                    });
                }
            }
        }
        /*** Slider Actions Ends***/

    // initiate the functionality to be triggered on page load
    windowOnLoad = function() {
        if (MattelVideoPlayer.ooyalaApiLoaded) {
            var getHiddenVideoId = document.getElementById('charComponentUri');
            if (getHiddenVideoId != null) {
                var videoListItem = document.getElementsByClassName('video-list-item');
                if (getHiddenVideoId.value == "") {
                    generatedExtId = videoListItem[0].getAttribute('data-video-id');
                } else {
                    for (var i = 0; i < videoListItem.length; i++) {
                        if (videoListItem[i].getAttribute('videoTcmId') == getHiddenVideoId.value) {
                            generatedExtId = videoListItem[i].getAttribute('data-video-id');
                            break;
                        }
                    }
                }
                /**
                    Flagging this variable for thumbnail reload
                    (i.e, clicking thumbnail, reloads the page and play the clicked video on load)
                **/
                haveVideoToLoad = true;
            }
            ooVideoSetters();
        }
    }
    // ooyala API initialization
    MattelVideoPlayer.init = function() {
        MattelVideoPlayer.ooyalaApiLoaded = apiLoaded = (typeof OO!="undefined") ? true : false;
        if (MattelVideoPlayer.ooyalaApiLoaded && apiLoaded) windowOnLoad();

    }

    setTimeout(function() {
	    renderOoyalaApi(MattelVideoPlayer.init);
    }, 1000);

}());

jQuery(function() {
    if(!MattelVideoPlayer.ooyalaApiLoaded){
        MattelVideoPlayer.ooyalaApiLoaded = true;
        MattelVideoPlayer.init();
    }
})
;
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.1.14',
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttp://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i == 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI, normalizedBaseParts,
                baseParts = (baseName && baseName.split('/')),
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }

                trimDots(name);
                name = name.join('/');
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);

                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                                         normalize(name, parentName, applyMap) :
                                         name;
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                //Array splice in the values since the context code has a
                //local var ref to defQueue, so cannot just reassign the one
                //on context.
                apsp.apply(defQueue,
                           [defQueue.length, 0].concat(globalDefQueue));
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return  getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    this.fetch();
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                req.onResourceLoad(context, this.map, this.depMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' + args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? { name: pkgObj } : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if(args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs ? url +
                                        ((url.indexOf('?') === -1 ? '?' : '&') +
                                         config.urlArgs) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    return onError(makeError('scripterror', 'Script error for: ' + data.id, evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/jrburke/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/jrburke/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation that a build has been done so that
                //only one script needs to be loaded anyway. This may need to be
                //reevaluated if other use cases become common.
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one.
                if (!cfg.baseUrl) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                 //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, '')
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        (context ? context.defQueue : globalDefQueue).push([name, deps, callback]);
    };

    define.amd = {
        jQuery: true
    };


    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this));
;
(function($) {
  {
    define("src/core/scripts/main.js", function(t, e, i) {
        return function() {
            "use strict";
            var t = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                e = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                };
            define("main", function(i) {
                var o = i("browser/log")("main"),
                    n = i("browser/detection"),
                    s = i("./utils.js"),
                    a = function() {
                        function a() {
                            e(this, a), this.init("component"), this.init("module")
                        }
                        return t(a, {
                            init: {
                                value: function(t) {
                                    var e = this;
                                    this[t] = [];
                                    var a = $("[data-" + t + "]");
                                    a.length && a.each(function(n, s) {
                                        var a = $(s),
                                            r = a.attr("data-" + t),
                                            l = a.attr("data-config");
                                        l && l.length > 0 && (l = JSON.parse(l));
                                        var d = i(r);
                                        o("Main : Initializing " + t + " : " + r), e[t].push(new d(s, l))
                                    })/*, n.isAndroid ? $(".page-content").addClass("device-android") : n.isIOS && $(".page-content").addClass("device-ios"), window.self !== window.top ? $(".page-content").addClass("in-iframe") : "", self.$nav = $(".header-navigation nav"), $('a[href^="#"]').click(function(t) {
                                        var e = $(this),
                                            i = e.attr("href"),
                                            o = $(i);
                                        i.length > 1 && 1 === o.length && (t.preventDefault(), self.$nav.has(o) && self.$nav.removeClass("open"), s.scrollTo(o, self.$nav))
                                    })*/
                                }
                            }
                        }), a
                    }();
                return new a
            })
        }()
    }), define("src/modules/header-navigation/header-navigation.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:header-navigation"),
                s = function() {
                    function t(e, i) {
                        o(this, t), this.$el = $(e), this.$nav = this.$el.find("nav"), this.$mobileNavHam = this.$el.find(".mobile-hamburger"), this.$navLink = this.$el.find(".link-container a"), this.init(), n("HeaderNavigation : Initialized", i)
                    }
                    return e(t, {
                        init: {
                            value: function() {
                                var t = this;
                                t.$mobileNavHam.click(function(e) {
                                    e.preventDefault(), t.$nav.toggleClass("open")
                                })
                            }
                        }
                    }), t
                }();
            i.exports = s
        }()
    }), /*define("src/modules/iframe-container/iframe-container.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                o = t("browser/log")("module:iframe-container"),
                n = function s(t, i) {
                    e(this, s), this.$el = $(t), o("IframeContainer : Initialized", i)
                };
            i.exports = n
        }()
    }),*/ define("src/core/scripts/utils.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                i = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                o = t("./settings");
            define("utils", function() {
                var t = function() {
                    function t() {
                        i(this, t)
                    }
                    return e(t, {
                        updateVideoPlayerHeight: {
                            value: function(t, e) {
                                var i = 100 / e;
                                t.css({
                                    paddingBottom: i + "%"
                                })
                            }
                        },
                        onTransitionEnd: {
                            value: function(t, e) {
                                Modernizr.csstransitions ? ($.isFunction(e.complete) && t.one(o.transitionEndEventName, function() {
                                    e.complete()
                                }), $.isFunction(e.action) && setTimeout(function() {
                                    e.action()
                                }, 10)) : ($.isFunction(e.action) && e.action(), $.isFunction(e.complete) && e.complete())
                            }
                        },
                        showThenTransition: {
                            value: function(t, e, i, o) {
                                var n = this;
                                t.removeClass(e), setTimeout(function() {
                                    n.onTransitionEnd(t, {
                                        action: function() {
                                            t.addClass(i)
                                        },
                                        complete: o
                                    })
                                }, 10)
                            }
                        },
                        hideAfterTransition: {
                            value: function(t, e, i, o) {
                                this.onTransitionEnd(t, {
                                    action: function() {
                                        t.removeClass(e)
                                    },
                                    complete: function() {
                                        t.addClass(i), $.isFunction(o) && o()
                                    }
                                })
                            }
                        },
                        kill: {
                            value: function(t) {
                                t && (t.preventDefault && t.preventDefault(), t.stopImmediatePropagation && t.stopImmediatePropagation(), t.stopPropagation && t.stopPropagation())
                            }
                        },
                        updateCarouselNavVisibility: {
                            value: function(t, e) {
                                var i = t.data("owlCarousel"),
                                    o = i.num.oItems,
                                    n = i.num.active;
                                o > n ? e.removeClass("hide-nav") : e.addClass("hide-nav")
                            }
                        },
                        scrollTo: {
                            value: function(t, e) {
                                var i = 0;
                                e && (i = e.position().top + e.outerHeight(!0) + 15), $("html, body").animate({
                                    scrollTop: t.offset().top - i
                                }, 1e3)
                            }
                        },
                        onceYouTubeReady: {
                            value: function(t) {
                                window.isYouTubeReady ? t(window.YT) : window.youTubeListeners && window.youTubeListeners.push(function() {
                                    t(window.YT)
                                })
                            }
                        }
                    }), t
                }();
                return new t
            })
        }()
    }), define("node_modules/@14four/armory-scripts/lib/browser/detection.js", function(t, e, i) {
        return function() {
            "use strict";
            var t = navigator.userAgent,
                i = t.indexOf("MSIE "),
                o = null;
            e.isIOS = /iphone|ipod|ipad/gi.test(t), e.isIPhone = /iphone|ipod/gi.test(t), e.isIPad = /ipad/gi.test(t), e.isAndroid = /android/gi.test(t), e.isIE = function() {
                return i > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? (o = parseInt(t.substring(i + 5, t.indexOf(".", i))), !0) : !1
            }(), e.isIE11 = e.isIE && 11 === o, e.isIE10 = e.isIE && 10 === o, e.isIE9 = e.isIE && 9 === o, e.isIE8 = e.isIE && 8 === o, e.isLTIE11 = e.isIE && 11 > o, e.isLTIE10 = e.isIE && 10 > o, e.isLTIE9 = e.isIE && 9 > o, e.isLTIE8 = e.isIE && 8 > o
        }()
    }), define("node_modules/@14four/armory-scripts/lib/browser/log.js", function(t, e, i) {
        return function() {
            "use strict";

            function o() {
                return e.colors[v++ % e.colors.length]
            }

            function n(t) {
                function i() {}

                function n() {
                    var t = n,
                        i = +new Date,
                        s = i - (m || i);
                    t.diff = s, t.prev = m, t.curr = i, m = i, null == t.useColors && (t.useColors = e.useColors()), null == t.color && t.useColors && (t.color = o());
                    var a = Array.prototype.slice.call(arguments);
                    a[0] = e.coerce(a[0]), "string" != typeof a[0] && (a = ["%o"].concat(a));
                    var r = 0;
                    a[0] = a[0].replace(/%([a-z%])/g, function(i, o) {
                        if ("%%" === i) return i;
                        r++;
                        var n = e.formatters[o];
                        if ("function" == typeof n) {
                            var s = a[r];
                            i = n.call(t, s), a.splice(r, 1), r--
                        }
                        return i
                    }), "function" == typeof e.formatArgs && (a = e.formatArgs.apply(t, a));
                    var l = n.log || e.log || console.log.bind(console);
                    l.apply(t, a)
                }
                i.enabled = !1, n.enabled = !0;
                var s = e.enabled(t) ? n : i;
                return s.namespace = t, s
            }

            function s(t) {
                e.save(t);
                for (var i = (t || "").split(/[\s,]+/), o = i.length, n = 0; o > n; n++) i[n] && (t = i[n].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
            }

            function a() {
                e.enable("")
            }

            function r(t) {
                var i, o;
                for (i = 0, o = e.skips.length; o > i; i++)
                    if (e.skips[i].test(t)) return !1;
                for (i = 0, o = e.names.length; o > i; i++)
                    if (e.names[i].test(t)) return !0;
                return !1
            }

            function l(t) {
                return t instanceof Error ? t.stack || t.message : t
            }

            function d() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }

            function c() {
                var t = arguments,
                    i = this.useColors;
                if (t[0] = (i ? "%c" : "") + this.namespace + (i ? " %c" : " ") + t[0] + (i ? "%c " : " ") + "+" + e.humanize(this.diff), !i) return t;
                var o = "color: " + this.color;
                t = [t[0], o, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var n = 0,
                    s = 0;
                return t[0].replace(/%[a-z%]/g, function(t) {
                    "%%" !== t && (n++, "%c" === t && (s = n))
                }), t.splice(s, 0, o), t
            }

            function u() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function h(t) {
                try {
                    null == t ? g.removeItem("debug") : g.debug = t
                } catch (e) {}
            }

            function p() {
                var t;
                try {
                    t = g.debug
                } catch (e) {}
                return t
            }

            function f() {
                try {
                    return window.localStorage
                } catch (t) {}
            }
            e = i.exports = n, e.coerce = l, e.disable = a, e.enable = s, e.enabled = r, e.log = u, e.formatArgs = c, e.save = h, e.load = p, e.useColors = d, e.humanize = t("text/ms"), e.names = [], e.skips = [], e.formatters = {};
            var m, g, v = 0;
            g = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : f(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) {
                return JSON.stringify(t)
            }, e.enable(p())
        }()
    }), define("src/core/scripts/settings.js", function(t, e, i) {
        return function() {
            "use strict";
            var t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                },
                o = {};
            o.$html = $(document.documentElement), o.isLTIE8 = o.$html.hasClass(".lt-ie8"), o.isLTIE9 = o.$html.hasClass(".lt-ie9"), o.isLTIE10 = o.$html.hasClass(".lt-ie10"), o.transitionEndEventName = t[Modernizr.prefixed("transition")], i.exports = e = o
        }()
    }), define("node_modules/@14four/armory-scripts/lib/text/ms.js", function(t, e, i) {
        return function() {
            "use strict";

            function t(t) {
                if (t = "" + t, !(t.length > 1e4)) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                    if (e) {
                        var i = parseFloat(e[1]),
                            o = (e[2] || "ms").toLowerCase();
                        switch (o) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return i * d;
                            case "days":
                            case "day":
                            case "d":
                                return i * l;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return i * r;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return i * a;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return i * s;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return i
                        }
                    }
                }
            }

            function e(t) {
                return t >= l ? Math.round(t / l) + "d" : t >= r ? Math.round(t / r) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
            }

            function o(t) {
                return n(t, l, "day") || n(t, r, "hour") || n(t, a, "minute") || n(t, s, "second") || t + " ms"
            }

            function n(t, e, i) {
                return e > t ? void 0 : 1.5 * e > t ? Math.floor(t / e) + " " + i : Math.ceil(t / e) + " " + i + "s"
            }
            var s = 1e3,
                a = 60 * s,
                r = 60 * a,
                l = 24 * r,
                d = 365.25 * l;
            i.exports = function(i, n) {
                return n = n || {}, "string" == typeof i ? t(i) : n["long"] ? o(i) : e(i)
            }
        }()
    }), define("src/modules/featured-promo/featured-promo.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:featured-promo"),
                s = t("browser/detection"),
                a = t("../../core/scripts/utils.js");
            window.$ = $, t("ext/owl.carousel.min.js");
            var r = function() {
                function t(e, i) {
                    o(this, t), this.config = i, this.config.aspect = this.config.aspect || 1600 / 733, this.config.paddingAspect = 100 / this.config.aspect + "%", this.$el = $(e), this.$carousel = this.$el.find(".carousel"), this.$carouselSlides = this.$carousel.find(".carousel-slides"), this.$slideImgs = this.$carousel.find(".slide-img"), this.$firstSlide = this.$carouselSlides.find(".slide").first(), this.$videoHolder = this.$carousel.find(".video-holder"), this.$video = this.$videoHolder.find("div.video"), this.isAutoPlayInitialized = !1, this.hasCarouselLooped = !1, this.init(), this.activeVideo = null, n("FeaturedPromo : Initialized", i)
                }
                return e(t, {
                    init: {
                        value: function() {
                            var t = this;
                            //t.initCarousel(), t.setupBinds(), t.youtubeSetup(), t.ooyalaSetup()
                        }
                    },
                    setupBinds: {
                        value: function() {
                            var t = this;
                            this.$el.on("click", ".play", function(e) {
                                e.preventDefault(), t.playVideo($(this), function() {
                                    t.closeVideo(), t.$carouselSlides.trigger("autoplay.stop.owl")
                                })
                            }), this.$el.on("click", ".close", function(e) {
                                e.preventDefault(), t.closeVideo(), t.$carouselSlides.trigger("autoplay.play.owl")
                            })
                        }
                    },
                    /*initCarousel: {
                        value: function() {
                            var t = this,
                                e = parseInt(t.$el.attr("data-autoplay-timeout"), 10) || 3e3;
                            1 === t.$el.find(".slide").length && t.$el.addClass("one-item"), this.$slideImgs.css({
                                paddingBottom: this.config.paddingAspect
                            }), t.owl = t.$carouselSlides.owlCarousel({
                                loop: !0,
                                items: 1,
                                autoplay: !0,
                                responsiveRefreshRate: 100,
                                mouseDrag: !1,
                                autoplayTimeout: e,
                                autoplayHoverPause: !1,
                                onInitialized: function() {
                                    setTimeout(function() {
                                        a.updateCarouselNavVisibility(t.owl, t.$carousel)
                                    }, 0), t.$carousel.addClass("is-in"), t.autoplay()
                                },
                                onTranslated: function() {
                                    t.isAutoPlayInitialized && 1 === t.$carouselSlides.data().owlCarousel._current && (t.hasCarouselLooped = !0)
                                },
                                onResized: function() {
                                    a.updateCarouselNavVisibility(t.owl, t.$carousel)
                                }
                            }), t.$el.find(".next").click(function(e) {
                                e.preventDefault(), t.closeVideo(!1, !0), t.$carouselSlides.trigger("next.owl.carousel")
                            }), t.$el.find(".prev").click(function(e) {
                                e.preventDefault(), t.closeVideo(!1, !0), t.$carouselSlides.trigger("prev.owl.carousel")
                            }), t.$el.find(".owl-dot").on("click", function() {
                                t.closeVideo(!1, !0)
                            })
                        }
                    },
                    /*ooyalaSetup: {
                        value: function() {
                            var t = this;
                            MattelVideoPlayer.ooyalaApiLoaded ? t.$el.find(".ooyala-video-player").each(function() {
                                var e = MattelVideoPlayer.ooPlayerInstances.players[$(".ooyala-video-player").index($(this))];
                                e.mb.subscribe(OO.EVENTS.PLAYING, "Playing", function() {
                                    var e = t.$el.find(".owl-item.active").find(".play"),
                                        i = e.attr("data-video-name"),
                                        o = e.attr("data-ooyala-id"),
                                        n = e.attr("data-video-order"),
                                        s = e.attr("data-module-name");
                                    t.$el.find(".owl-item.active .slide").addClass("playing"), t.$carouselSlides.trigger("stop.owl.autoplay"), t.activeVideo || (t.activeVideo = o, window.MainAnalytics && window.MainAnalytics.trackVideo(i, window.MainAnalytics.VIDEO_EVENT_PLAY, n, s))
                                }), e.mb.subscribe(OO.EVENTS.PLAYED, "completed", function() {
                                    var e = t.$el.find(".owl-item.active").find(".play"),
                                        i = e.attr("data-video-name"),
                                        o = e.attr("data-video-order"),
                                        n = e.attr("data-module-name");
                                    t.$el.find(".owl-item.active .slide").removeClass("playing"), t.autoplay(), t.activeVideo = null, window.MainAnalytics && window.MainAnalytics.trackVideo(i, window.MainAnalytics.VIDEO_EVENT_COMPLETION, o, n)
                                })
                            }) : setTimeout(function() {
                                t.ooyalaSetup()
                            }, 300)
                        }
                    },*/
                    youtubeSetup: {
                        value: function() {
                            var t = this,
                                e = [],
                                i = 0;
                            navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/) && t.$el.find("[data-youtube-id]").each(function() {
                                e.push($(this)), a.onceYouTubeReady(function(o) {
                                    var n = e[i];
                                    i++;
                                    var s = n.attr("data-video-name"),
                                        a = n.attr("data-video-player"),
                                        r = n.attr("youtube" === a ? "data-youtube-id" : "data-ooyala-id"),
                                        l = n.attr("data-video-order"),
                                        d = n.attr("data-module-name"),
                                        c = $("<div></div>"),
                                        u = n.parents(".slide").find(".video-holder"),
                                        h = u.find(".video");
                                    t.activeVideo = null, h.append(c), t.ytplayer = new o.Player(c[0], {
                                        videoId: r,
                                        wmode: "transparent",
                                        playerVars: {
                                            autoplay: 0,
                                            showinfo: 0,
                                            wmode: "transparent",
                                            rel: 0
                                        },
                                        events: {
                                            onStateChange: function(e) {
                                                e.data === o.PlayerState.PLAYING ? (t.$carouselSlides.trigger("stop.owl.autoplay"), t.activeVideo || (t.activeVideo = r, t.$el.find(".owl-item.active .slide").addClass("playing"), window.MainAnalytics && window.MainAnalytics.trackVideo(s, window.MainAnalytics.VIDEO_EVENT_PLAY, l, d))) : e.data === o.PlayerState.ENDED && (t.activeVideo = null, t.$el.find(".owl-item.active .slide").removeClass("playing"), t.autoplay(), window.MainAnalytics && window.MainAnalytics.trackVideo(s, window.MainAnalytics.VIDEO_EVENT_COMPLETION, l, d))
                                            }
                                        }
                                    })
                                })
                            })
                        }
                    },
                    playVideo: {
                        value: function(t, e) {
                            var i = this,
                                o = t.attr("data-video-name"),
                                n = t.attr("data-video-player"),
                                s = t.attr("youtube" === n ? "data-youtube-id" : "data-ooyala-id"),
                                r = t.attr("data-video-order"),
                                l = t.attr("data-module-name"),
                                d = $("<div></div>");
                            i.$videoHolder = t.parents(".slide").find(".video-holder"), i.$video = i.$videoHolder.find(".video"), this.activeVideo = null, i.$carouselSlides.trigger("stop.owl.autoplay"), "youtube" === n ? a.onceYouTubeReady(function(t) {
                                i.$video.append(d), i.ytplayer = new t.Player(d[0], {
                                    videoId: s,
                                    playerVars: {
                                        autoplay: 1,
                                        showinfo: 0,
                                        rel: 0
                                    },
                                    events: {
                                        onStateChange: function(n) {
                                            n.data === t.PlayerState.PLAYING ? (i.$el.find(".owl-item.active .slide").addClass("playing"), i.activeVideo || (i.activeVideo = s, window.MainAnalytics && window.MainAnalytics.trackVideo(o, window.MainAnalytics.VIDEO_EVENT_PLAY, r, l))) : n.data === t.PlayerState.ENDED && (i.activeVideo = null, i.$el.find(".owl-item.active .slide").removeClass("playing"), window.MainAnalytics && window.MainAnalytics.trackVideo(o, window.MainAnalytics.VIDEO_EVENT_COMPLETION, r, l), $.isFunction(e) && e())
                                        }
                                    }
                                })
                            }) : "ooyala" === n && (MattelVideoPlayer.ooPlayerInstances.players[$(".ooyala-video-player").index(i.$videoHolder.find(".ooyala-video-player"))].play(), window.dispatchEvent(new Event("resize")))
                        }
                    },
                    closeVideo: {
                        value: function(t, e) {
                            var i = this;
                            i.activeVideo = null;
                            var o = i.$el.find(".slide.playing");
                            o.removeClass("playing");
                            var n = !1;
                            navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/) ? (n = o.find(".ooyala-video-player"), n.length ? (MattelVideoPlayer.ooPlayerInstances.players[$(".ooyala-video-player").index(n)].seek(0), MattelVideoPlayer.ooPlayerInstances.players[$(".ooyala-video-player").index(n)].pause()) : i.ytplayer.stopVideo(), e || i.autoplay(), $.isFunction(t) && t()) : (n = i.$videoHolder.find(".ooyala-video-player"), n.length ? (MattelVideoPlayer.ooPlayerInstances.players[$(".ooyala-video-player").index(i.$videoHolder.find(".ooyala-video-player"))].seek(0), MattelVideoPlayer.ooPlayerInstances.players[$(".ooyala-video-player").index(i.$videoHolder.find(".ooyala-video-player"))].pause()) : i.$video.find("iframe").remove(), e || i.autoplay(!0), $.isFunction(t) && t())
                        }
                    },
                    autoplay: {
                        value: function(t) {
                            var e = this;
                            t = t ? 0 : parseInt(e.$el.attr("data-autoplay-timeout"), 10) || 3e3;
                            var i;
                            e.isAutoPlayInitialized ? e.$carouselSlides.trigger("play.owl.autoplay", t) : (i = e.$firstSlide.find(".play"), i.length > 0 && !s.isIOS && !s.isAndroid ? e.playVideo(i, function() {
                                e.closeVideo(function() {
                                    n("Autoplay: First Slide Video Complete")
                                })
                            }) : n("Autoplay: Carousel Slides"), e.isAutoPlayInitialized = !0)
                        }
                    }
                }), t
            }();
            i.exports = r
        }()
    }), define("src/modules/retailer-logo-carousel/retailer-logo-carousel.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:retailer-logo-carousel"),
                s = t("../../core/scripts/utils.js");
            window.$ = $, t("ext/owl.carousel.min.js");
            var a = function() {
                function t(e, i) {
                    o(this, t), this.$el = $(e), this.$carousel = this.$el.find(".carousel"), this.initCarousel(), n("RetailerLogoCarousel : Initialized", i)
                }
                return e(t, {
                    initCarousel: {
                        value: function() {
                            var t = this;
                            t.owl = this.$carousel.owlCarousel({
                                loop: !0,
                                margin: 10,
                                mouseDrag: !1,
                                stagePadding: 75,
                                responsiveRefreshRate: 100,
                                onInitialized: function() {
                                    setTimeout(function() {
                                        s.updateCarouselNavVisibility(t.owl, t.$el), t.$el.addClass("visible")
                                    }, 0)
                                },
                                onResized: function() {
                                    s.updateCarouselNavVisibility(t.owl, t.$el)
                                },
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    375: {
                                        items: 2
                                    },
                                    481: {
                                        items: 3
                                    },
                                    767: {
                                        items: 4
                                    },
                                    941: {
                                        items: 5,
                                        stagePadding: 0
                                    }
                                }
                            }), t.$el.find(".next").click(function(e) {
                                e.preventDefault(), t.$carousel.trigger("next.owl.carousel")
                            }), t.$el.find(".prev").click(function(e) {
                                e.preventDefault(), t.$carousel.trigger("prev.owl.carousel")
                            })
                        }
                    }
                }), t
            }();
            i.exports = a
        }()
    }), define("src/modules/detailed/detailed.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:detailed"),
                s = t("../../core/scripts/utils.js");
            window.$ = $, t("ext/owl.carousel.min.js"), t("jquery-mousewheel")($), t("malihu-custom-scrollbar-plugin")($);
            var a = function() {
                function t(e, i) {
                    o(this, t), this.$el = $(e), this.$carouselMain = this.$el.find(".carousel-main"), this.$carouselMobile = this.$el.find(".carousel-mobile"), this.$carouselRoot = this.$el.find(".carousel-holder"), this.init(), this.initMainCarousel(), this.initMobileCarousel(), this.initCustomScroll(), n("Detailed : Initialized", i)
                }
                return e(t, {
                    init: {
                        value: function() {
                            var t = this,
                                e = t.$el.find(".selected-image"),
                                i = t.$el.find(".dynamic-content").data("index");
                            t.$el.find(".dynamic-content").hide(), t.$el.find('.dynamic-content[data-index="1"]').show(), t.$el.find(".carousel-main img").click(function() {
                                t.$el.find(".carousel-main img").removeClass("selected"), $(this).addClass("selected"), i = $(this).data("index"), t.$el.find(".dynamic-content").hide(), t.$el.find('.dynamic-content[data-index="' + i + '"]').show(), e.attr("src", $(this).data("imagesrc"))
                            })
                        }
                    },
                    initMainCarousel: {
                        value: function() {
                            var t = this;
                            t.owl = t.$carouselMain.owlCarousel({
                                loop: !0,
                                margin: 12,
                                mouseDrag: !1,
                                responsiveRefreshRate: 100,
                                stagePadding: 50,
                                onInitialized: function() {
                                    setTimeout(function() {
                                        s.updateCarouselNavVisibility(t.owl, t.$carouselRoot)
                                    }, 0), t.$el.addClass("visible")
                                },
                                onResized: function() {
                                    s.updateCarouselNavVisibility(t.owl, t.$carouselRoot)
                                },
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    481: {
                                        items: 3
                                    },
                                    767: {
                                        items: 5
                                    },
                                    941: {
                                        items: 4,
                                        stagePadding: 0
                                    },
                                    1050: {
                                        items: 5,
                                        stagePadding: 0
                                    },
                                    1300: {
                                        items: 6,
                                        stagePadding: 0
                                    }
                                }
                            }), t.$el.find(".next").click(function(e) {
                                e.preventDefault(), t.$carouselMain.trigger("next.owl.carousel")
                            }), t.$el.find(".prev").click(function(e) {
                                e.preventDefault(), t.$carouselMain.trigger("prev.owl.carousel")
                            })
                        }
                    },
                    initMobileCarousel: {
                        value: function() {
                            var t = this;
                            t.$carouselMobile.owlCarousel({
                                items: 1,
                                responsiveRefreshRate: 100,
                                dots: !0,
                                loop: !0,
                                mouseDrag: !1
                            }), t.$carouselMobile.on("changed.owl.carousel", function() {
                                var e = t.$el.find(".carousel-mobile .active img").data("index");
                                t.$el.find(".dynamic-content").hide(), t.$el.find('.dynamic-content[data-index="' + e + '"]').show()
                            })
                        }
                    },
                    initCustomScroll: {
                        value: function() {
                            var t = this;
                            t.$el.find(".copy-area").mCustomScrollbar({
                                theme: "main"
                            })
                        }
                    }
                }), t
            }();
            i.exports = a
        }()
    }), define("src/modules/videos/videos.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:videos"),
                s = t("../../core/scripts/utils.js"),
                a = t("./players/youtube_player.js"),
                r = t("./players/ooyala_player.js");
            window.$ = $, t("ext/owl.carousel.min.js");
            var l = function() {
                function t(e, i) {
                    o(this, t), this.$el = $(e), this.$carouselRoot = this.$el.find(".vid-carousel"), this.$vidCarouselSlides = this.$el.find(".vid-carousel-slides"), this.videoPlayers = {}, this.activeVideo = null, this.init(), this.setupBinds(), n("Videos : Initialized", i)
                }
                return e(t, {
                    init: {
                        value: function() {
                            var t = this;
                            1 === t.$el.find(".slide").length && t.$el.addClass("one-item"), t.owl = t.$vidCarouselSlides.owlCarousel({
                                items: 1,
                                loop: !1,
                                dots: !0,
                                center: !0,
                                responsiveRefreshRate: 100,
                                mouseDrag: !1,
                                autoPlay: !0,
                                autoPlayTimeout: 500,
                                onInitialized: function() {
                                    setTimeout(function() {
                                        s.updateCarouselNavVisibility(t.owl, t.$carouselRoot), t.$el.addClass("visible")
                                    }, 0)
                                },
                                onResized: function() {
                                    s.updateCarouselNavVisibility(t.owl, t.$carouselRoot)
                                }
                            }), t.owl.on("change.owl.carousel", function(e) {
                                "position" === e.property.name && t.closeVideo()
                            }), t.$el.find(".next").click(function(e) {
                                e.preventDefault(), t.closeVideo(), t.owl.trigger("next.owl.carousel")
                            }), t.$el.find(".prev").click(function(e) {
                                e.preventDefault(), t.closeVideo(), t.owl.trigger("prev.owl.carousel")
                            }), t.youtubeSetup(), t.ooyalaSetup(), $(window).resize(function() {
                                setTimeout(function() {
                                    $.each(t.videoPlayers, function(t, e) {
                                        e.resize()
                                    })
                                }, 500)
                            })
                        }
                    },
                    ooyalaSetup: {
                        value: function() {
                            var t = this;
                            MattelVideoPlayer.ooyalaApiLoaded ? t.$el.find(".ooyala-video-player").each(function() {
                                var e = new r($(this).parents(".vid-slide"), t.makePlayingCallback());
                                t.videoPlayers[e.getVideoKey()] = e
                            }) : setTimeout(function() {
                                t.ooyalaSetup()
                            }, 300)
                        }
                    },
                    youtubeSetup: {
                        value: function() {
                            var t = this;
                            t.$el.find("[data-youtube-id]").each(function() {
                                var e = new a($(this).parents(".vid-slide"), t.makePlayingCallback());
                                t.videoPlayers[e.getVideoKey()] = e
                            })
                        }
                    },
                    setupBinds: {
                        value: function() {
                            var t = this;
                            this.$el.on("click", ".play", function(e) {
                                e.preventDefault(), t.playVideo($(this), function() {
                                    t.closeVideo()
                                })
                            })
                        }
                    },
                    playVideo: {
                        value: function(t, e) {
                            var i = this,
                                o = t.attr("data-video-player"),
                                n = t.attr("data-slideindex"),
                                s = i.videoPlayers[o + "_" + n];
                            s ? s.play(e) : "youtube" === o ? (s = new a(t.parents(".vid-slide"), i.makePlayingCallback()), i.videoPlayers[s.getVideoKey()] = s, s.play(e)) : (s = new r(t.parents(".vid-slide"), i.makePlayingCallback()), i.videoPlayers[s.getVideoKey()] = s, s.play(e))
                        }
                    },
                    makePlayingCallback: {
                        value: function() {
                            var t = this;
                            return function(e) {
                                t.activeVideo = e
                            }
                        }
                    },
                    closeVideo: {
                        value: function() {
                            var t = this;
                            t.activeVideo && (t.activeVideo.close(), t.activeVideo = null)
                        }
                    }
                }), t
            }();
            i.exports = l
        }()
    }), define("src/modules/kids-carousel/kids-carousel.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:kids-carousel"),
                s = t("pubsub-js"),
                a = t("../../core/scripts/utils.js");
            window.$ = $, t("ext/owl.carousel.min.js");
            var r = function() {
                function t(e, i) {
                    o(this, t), this.$el = $(e), this.$carousel = this.$el.find(".carousel"), this.$carouselRoot = this.$el.find(".carousel-row-content"), this.$next = this.$el.find(".next"), this.$prev = this.$el.find(".prev"), this.initCarousel(), n("KidsCarousel : Initialized", i)
                }
                return e(t, {
                    calcArrowPos: {
                        value: function(t) {
                            var e = this,
                                i = e.$carousel.find(".owl-item.active img").eq(0);
                            t && $("<img/>").on("load", function() {
                                e.calcArrowPos()
                            }).on("error", function() {
                                n("error loading image")
                            }).attr("src", i.attr("src"));
                            var o = i.height(),
                                s = e.$next.height(),
                                a = (o - s) / 2;
                            e.$next.css({
                                top: a + "px"
                            }), e.$prev.css({
                                top: a + "px"
                            })
                        }
                    },
                    initCarousel: {
                        value: function() {
                            var t = this;
                            t.owl = t.$carousel.owlCarousel({
                                loop: !0,
                                margin: 20,
                                dots: !0,
                                mouseDrag: !1,
                                responsiveRefreshRate: 100,
                                onInitialized: function() {
                                    setTimeout(function() {
                                        t.calcArrowPos(!0), a.updateCarouselNavVisibility(t.owl, t.$carouselRoot), t.$el.addClass("visible")
                                    }, 0)
                                },
                                onResized: function() {
                                    t.calcArrowPos(), t.updateDotPosition(), a.updateCarouselNavVisibility(t.owl, t.$carouselRoot)
                                },
                                responsive: {
                                    300: {
                                        items: 1,
                                        stagePadding: 0
                                    },
                                    400: {
                                        items: 1,
                                        stagePadding: 50
                                    },
                                    500: {
                                        items: 1,
                                        stagePadding: 75
                                    },
                                    610: {
                                        items: 2,
                                        stagePadding: 25
                                    },
                                    650: {
                                        items: 2,
                                        stagePadding: 50
                                    },
                                    941: {
                                        items: 2,
                                        stagePadding: 0,
                                        dots: !1
                                    },
                                    1300: {
                                        items: 3,
                                        stagePadding: 0,
                                        dots: !1
                                    }
                                }
                            }), t.$el.find(".next").click(function(e) {
                                e.preventDefault(), t.$carousel.trigger("next.owl.carousel")
                            }), t.$el.find(".prev").click(function(e) {
                                e.preventDefault(), t.$carousel.trigger("prev.owl.carousel")
                            }), t.$carousel.on("click", "a", function(t) {
                                var e = $(this),
                                    i = null;
                                e.attr("data-languages") && (t.preventDefault(), i = JSON.parse($(this).attr("data-languages")), s.publish("language-modal.show", i))
                            }), setTimeout(function() {
                                t.updateDotPosition()
                            }, 100)
                        }
                    },
                    updateDotPosition: {
                        value: function() {
                            var t = this.$el.find(".owl-controls"),
                                e = this.$el.find(".name").first();
                            t.css({
                                top: e.position().top - 45 + "px"
                            })
                        }
                    }
                }), t
            }();
            i.exports = r
        }()
    }), define("src/modules/brand-intro/brand-intro.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:brand-intro"),
                s = t("../../core/scripts/utils.js"),
                a = function() {
                    function t(e, i) {
                        o(this, t), this.$el = $(e), this.$videoPlayer = this.$el.find(".video-player"), s.updateVideoPlayerHeight(this.$videoPlayer, i.aspect), this.init(), this.$el.addClass("visible"), n("BrandIntro : Initialized", i)
                    }
                    return e(t, {
                        init: {
                            value: function() {
                                var t = this,
                                    e = t.$videoPlayer.attr("data-video-overlay"),
                                    i = t.$videoPlayer.attr("data-video-name"),
                                    o = t.$videoPlayer.attr("data-video-order"),
                                    n = t.$videoPlayer.attr("data-module-name"),
                                    a = $("<div></div>");
                                t.activeVideo = null, t.$el.find(".video-player").length && (t.$videoPlayer.empty().append(a), s.onceYouTubeReady(function(s) {
                                    t.ytplayer = new s.Player(a[0], {
                                        videoId: e,
                                        playerVars: {
                                            autoplay: 0,
                                            showinfo: 0,
                                            controls: 1,
                                            rel: 0
                                        },
                                        events: {
                                            onStateChange: function(a) {
                                                a.data === s.PlayerState.PLAYING ? t.activeVideo || (t.activeVideo = e, window.MainAnalytics && window.MainAnalytics.trackVideo(i, window.MainAnalytics.VIDEO_EVENT_PLAY, o, n)) : a.data === s.PlayerState.ENDED && (t.activeVideo = null, window.MainAnalytics && window.MainAnalytics.trackVideo(i, window.MainAnalytics.VIDEO_EVENT_COMPLETION, o, n))
                                            }
                                        }
                                    })
                                }))
                            }
                        }
                    }), t
                }();
            i.exports = a
        }()
    }), define("src/modules/thumbnail-carousel/thumbnail-carousel.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:thumbnail-carousel"),
                s = t("../../core/scripts/utils.js");
            window.$ = $, t("ext/owl.carousel.min.js");
            var a = function() {
                function t(e, i) {
                    o(this, t), this.$el = $(e), this.$carouselRoot = this.$el.find(".carousel-row-content"), this.$carousel = this.$el.find(".carousel"), this.$imageContainers = this.$carousel.find(".image-container"), this.$next = this.$el.find(".carousel-row-content .next"), this.$prev = this.$el.find(".carousel-row-content .prev"), this.$modal = this.$el.find(".modal"), this.$dialog = this.$modal.find(".dialog"), this.$modalPrev = this.$modal.find(".prev"), this.$modalNext = this.$modal.find(".next"), this.$modalSlides = this.$modal.find(".slides"), this.dialogPadding = 35, this.initThumbClick(), this.initCarousel(), n("ThumbnailCarousel : Initialized", i)
                }
                return e(t, {
                    initThumbClick: {
                        value: function() {
                            var t = this;
                            t.$imageContainers.click(function(e) {
                                e.preventDefault(), t.showImg(parseInt($(this).attr("data-index"), 10))
                            }), t.$modal.find(".close-btn").click(function(e) {
                                e.preventDefault(), t.hide()
                            })
                        }
                    },
                    calcArrowPos: {
                        value: function(t) {
                            var e = this,
                                i = e.$carousel.find(".owl-item.active img").eq(0);
                            t && $("<img/>").on("load", function() {
                                e.calcArrowPos()
                            }).on("error", function() {
                                n("error loading image")
                            }).attr("src", i.attr("src"));
                            var o = i.height(),
                                s = e.$next.height(),
                                a = (o - s) / 2;
                            e.$next.css({
                                top: a + "px"
                            }), e.$prev.css({
                                top: a + "px"
                            })
                        }
                    },
                    updateModal: {
                        value: function() {
                            var t = this;
                            t.$dialog.css({
                                "margin-top": 0
                            });
                            var e = $(window).height(),
                                i = t.$dialog.outerHeight(),
                                o = (e - i) / 2;
                            t.$dialog.css({
                                "margin-top": o + "px"
                            });
                            var n = t.$modalNext.height(),
                                s = (i - n) / 2;
                            t.$modalNext.css({
                                top: s + "px"
                            }), t.$modalPrev.css({
                                top: s + "px"
                            });
                            var a = t.$modal.find(".image-container"),
                                r = a.find(".img"),
                                l = a.find("p");
                            l.css("height", "");
                            var d = l.first().height();
                            r.css("max-height", t.$dialog.height() - d - 20 + "px"), l.css("height", d + "px")
                        }
                    },
                    showImg: {
                        value: function(t) {
                            var e = this,
                                i = function() {
                                    e.$modalSlides.trigger("to.owl.carousel", [t, 1]).css("opacity", 0), e.$modal.show(), e.updateModal(), setTimeout(function() {
                                        e.$modal.css({
                                            opacity: 1
                                        })
                                    }, 100), setTimeout(function() {
                                        e.updateModal(), e.$modalSlides.animate({
                                            opacity: 1
                                        })
                                    }, 300)
                                };
                            e.initModal ? (e.initModal(i), e.initModal = null) : i()
                        }
                    },
                    hide: {
                        value: function() {
                            var t = this;
                            t.$modal.css({
                                opacity: 0
                            }).hide()
                        }
                    },
                    initCarousel: {
                        value: function() {
                            var t = this;
                            t.owl = t.$carousel.owlCarousel({
                                loop: !0,
                                margin: 30,
                                stagePadding: 75,
                                mouseDrag: !1,
                                responsiveRefreshRate: 100,
                                onInitialized: function() {
                                    setTimeout(function() {
                                        t.calcArrowPos(!0), s.updateCarouselNavVisibility(t.owl, t.$carouselRoot), t.$el.addClass("visible")
                                    }, 0)
                                },
                                onResized: function() {
                                    t.calcArrowPos(), s.updateCarouselNavVisibility(t.owl, t.$carouselRoot)
                                },
                                responsive: {
                                    0: {
                                        items: 1,
                                        stagePadding: 100
                                    },
                                    481: {
                                        items: 3,
                                        stagePadding: 100
                                    },
                                    767: {
                                        items: 4,
                                        stagePadding: 0
                                    },
                                    941: {
                                        items: 5,
                                        stagePadding: 0
                                    }
                                }
                            }), t.$next.click(function(e) {
                                e.preventDefault(), t.$carousel.trigger("next.owl.carousel")
                            }), t.$prev.click(function(e) {
                                e.preventDefault(), t.$carousel.trigger("prev.owl.carousel")
                            })
                        }
                    },
                    initModal: {
                        value: function(t) {
                            var e = this,
                                i = function(i, o, n) {
                                    e.$dialog.css({
                                        width: i + "px",
                                        height: o + n + "px"
                                    }), e.modalOwl = e.$modalSlides.owlCarousel({
                                        items: 1,
                                        loop: !0,
                                        mouseDrag: !1,
                                        responsiveRefreshRate: 100,
                                        onInitialized: function() {
                                            setTimeout(function() {
                                                s.updateCarouselNavVisibility(e.modalOwl, e.$dialog)
                                            }, 0)
                                        },
                                        onResized: function() {
                                            e.updateModal(), s.updateCarouselNavVisibility(e.modalOwl, e.$dialog)
                                        }
                                    }), e.$modalNext.click(function(t) {
                                        t.preventDefault(), e.$modalSlides.trigger("next.owl.carousel")
                                    }), e.$modalPrev.click(function(t) {
                                        t.preventDefault(), e.$modalSlides.trigger("prev.owl.carousel")
                                    }), e.updateModal(), e.$modal.hide(), t && t()
                                },
                                o = e.$imageContainers.filter("[data-fullsize-path]").first().attr("data-fullsize-path"),
                                n = parseInt(e.$dialog.css("padding-top"), 10);
                            e.$modal.show(), o ? $("<img/>").on("load", function() {
                                var t = $(window),
                                    o = e.$modal.find(".image-container p"),
                                    s = Math.max.apply(Math, o.map(function() {
                                        return $(this).height()
                                    })),
                                    a = Math.floor(.8 * t.width()) - 2 * n,
                                    r = Math.floor(.8 * t.height()) - 2 * n - (s - 20),
                                    l = this.width,
                                    d = this.height,
                                    c = this.width,
                                    u = this.height;
                                c > a && (c = a, u = c * d / l, u > r && (u = r, c = u * l / d)), u > r && (u = r, c = u * l / d, c > a && (c = a, u = c * d / l)), i(c, u, s)
                            }).on("error", function() {
                                i(800, 600, 20)
                            }).attr("src", o) : i(800, 600, 20);
                        }
                    }
                }), t
            }();
            i.exports = a
        }()
    }), define("src/modules/footer-navigation/footer-navigation.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                o = t("browser/log")("module:footer-navigation"),
                n = function s(t, i) {
                    e(this, s), this.$el = $(t), o("FooterNavigation : Initialized", i)
                };
            i.exports = n
        }()
    }), define("src/modules/language-modal/language-modal.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:language-modal"),
                s = t("pubsub-js"),
                a = function() {
                    function t(e, i) {
                        o(this, t), this.$el = $(e), this.$dialog = this.$el.find(".dialog"), this.$linksContainer = this.$el.find(".links-container"), this.$html = $("html"), this.init(), this.initPubSub(), n("LanguageModal : Initialized", i)
                    }
                    return e(t, {
                        init: {
                            value: function() {
                                var t = this;
                                t.$el.find(".close-btn,.close").click(function(e) {
                                    e.preventDefault(), t.hide()
                                })
                            }
                        },
                        initPubSub: {
                            value: function() {
                                var t = this;
                                s.subscribe("language-modal.show", function(e, i) {
                                    t.show(i)
                                })
                            }
                        },
                        center: {
                            value: function() {
                                var t = this,
                                    e = t.$dialog.height(),
                                    i = $(window).height(),
                                    o = (i - e) / 2.5,
                                    n = /iPad|iPhone|iPod/.test(navigator.platform),
                                    s = window.self !== window.top;
                                n && s && (o = $(parent.window).scrollTop() + e / 2.5), t.$dialog.css({
                                    marginTop: o + "px"
                                })
                            }
                        },
                        show: {
                            value: function(t) {
                                var e = this;
                                e.$linksContainer.empty();
                                for (var i in t) e.$linksContainer.append('<div class="link"><a href="' + t[i].href + '" target="_blank">' + t[i].caption + "</a></div>");
                                e.$el.css({
                                    display: "block",
                                    visibility: "hidden",
                                    opacity: 0
                                }), e.$html.addClass("no-scroll"), setTimeout(function() {
                                    e.center(), e.$el.css({
                                        visibility: "visible",
                                        opacity: 1
                                    })
                                }, 0)
                            }
                        },
                        hide: {
                            value: function() {
                                var t = this;
                                t.$html.removeClass("no-scroll"), t.$el.css({
                                    display: "none",
                                    visibility: "hidden",
                                    opacity: 0
                                })
                            }
                        }
                    }), t
                }();
            i.exports = a
        }()
    }), define("src/modules/country-dropdown/country-dropdown.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:country-dropdown");
            window.$ = $;
            var s = function() {
                function t(e) {
                    o(this, t), this.$el = $(e), this.$dropdownContainer = this.$el.find(".dropdown-container"), this.$label = this.$el.find("a.label"), this.$dropdown = this.$el.find("ul"), this.dropdownHover = !1, this.init(), n("CountryDropdown : Initialized")
                }
                return e(t, {
                    updateDropdownContainerMargin: {
                        value: function() {
                            var t = this;
                            setTimeout(function() {
                                var e = -Math.round(t.$dropdownContainer.outerWidth() / 2);
                                t.$dropdownContainer.css({
                                    "margin-left": e
                                })
                            }, 0)
                        }
                    },
                    init: {
                        value: function() {
                            var t = this;
                            t.$label.blur(function() {
                                t.dropdownHover || t.$el.removeClass("open")
                            }), t.$dropdown.hover(function() {
                                t.dropdownHover = !0
                            }, function() {
                                t.dropdownHover = !1
                            }), t.$label.click(function(e) {
                                e.preventDefault(), t.$el.toggleClass("open")
                            }), t.$dropdown.on("click", "a", function(e) {
                                var i = $(this);
                                t.$label.text(i.text()), t.$el.removeClass("open"), t.updateDropdownContainerMargin(), "#" === i.attr("href") && e.preventDefault()
                            }), t.updateDropdownContainerMargin()
                        }
                    }
                }), t
            }();
            i.exports = s
        }()
    }), define("src/modules/interstitial-modal/interstitial-modal.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:interstitial-modal"),
                s = function() {
                    function t(e, i) {
                        o(this, t), this.$el = $(e), this.$dialog = this.$el.find(".dialog"), this.$proceedBtn = this.$el.find(".proceed"), this.$html = $("html"), this.init(), n("InterstitialModal : Initialized", i)
                    }
                    return e(t, {
                        init: {
                            value: function() {
                                var t = this;
                                t.$el.find(".close-btn,.cancel").click(function(e) {
                                    e.preventDefault(), t.hide()
                                }), $("a").each(function(e, i) {
                                    var o = $(i);
                                    (o.is('[href^="http"]') && !o.hasClass("no-modal") || o.hasClass("has-modal")) && $(i).click(function(e) {
                                        e.preventDefault(), t.show($(this).attr("href"))
                                    })
                                })
                            }
                        },
                        center: {
                            value: function() {
                                var t = this,
                                    e = t.$dialog.height(),
                                    i = $(window).height(),
                                    o = (i - e) / 2.5,
                                    n = /iPad|iPhone|iPod/.test(navigator.platform),
                                    s = window.self !== window.top;
                                n && s && (o = $(parent.window).scrollTop() + e / 2.5), t.$dialog.css({
                                    marginTop: o + "px"
                                })
                            }
                        },
                        show: {
                            value: function(t) {
                                var e = this;
                                e.$proceedBtn.unbind("click").attr("href", t), e.$proceedBtn.click(function() {
                                    e.hide()
                                }), e.$el.css({
                                    display: "block",
                                    visibility: "hidden",
                                    opacity: 0
                                }), e.$html.addClass("no-scroll"), setTimeout(function() {
                                    e.center(), e.$el.css({
                                        visibility: "visible",
                                        opacity: 1
                                    })
                                }, 100)
                            }
                        },
                        hide: {
                            value: function() {
                                var t = this;
                                t.$html.removeClass("no-scroll"), t.$el.css({
                                    display: "none",
                                    visibility: "hidden",
                                    opacity: 0
                                })
                            }
                        }
                    }), t
                }();
            i.exports = s
        }()
    }), define("src/modules/video-overlay/video-overlay.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                o = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                n = t("browser/log")("module:video-overlay"),
                s = t("src/core/scripts/utils"),
                a = t("pubsub-js"),
                r = t("../../core/scripts/utils.js");
            window.$ = $, t("bower_components/jquery-throttle-debounce/jquery.ba-throttle-debounce.js"), t("bower_components/fitvids/jquery.fitvids.js");
            var l = function() {
                function t(e) {
                    o(this, t), this.$el = $(e), this.$videoModal = this.$el.find(".video-modal"), this.$videoHolder = this.$el.find(".video-holder"), this.$close = this.$el.find(".close"), this.$html = $("html"), this.init(), this.initPubSub(), this.activeVideo = null, n("VideoOverlay : Initialized")
                }
                return e(t, {
                    init: {
                        value: function() {
                            var t = this;
                            $(document).on("click", "[data-video-overlay]", function(e) {
                                var i = $(this),
                                    o = i.attr("data-video-overlay"),
                                    n = i.attr("data-video-player"),
                                    s = i.attr("data-video-name"),
                                    a = i.attr("data-video-order"),
                                    r = i.attr("data-module-name");
                                e.preventDefault(), t.showOverlay(o, n, s, a, r)
                            }), t.$close.on("click", function(e) {
                                t.hideOverlay(), e.preventDefault()
                            }), $(window).on("resize", $.debounce(500, $.proxy(t.handleResize, t))), t.handleResize()
                        }
                    },
                    initPubSub: {
                        value: function() {
                            var t = this;
                            a.subscribe("video-overlay.show", function(e, i) {
                                t.showOverlay(i.videoId, i.videoPlayer, i.videoName, i.moduleOrder, i.moduleName)
                            })
                        }
                    },
                    handleResize: {
                        value: function() {
                            var t = this;
                            t.centerVideo()
                        }
                    },
                    showOverlay: {
                        value: function(t, e, i, o, n) {
                            var s = this;
                            s.activeVideo = null;
                            var a = $("<div></div>");
                            "youtube" === e ? r.onceYouTubeReady(function(e) {
                                s.$videoHolder.empty().append(a), s.ytplayer = new e.Player(a[0], {
                                    videoId: t,
                                    playerVars: {
                                        autoplay: 1,
                                        showinfo: 0,
                                        controls: 1,
                                        rel: 0
                                    },
                                    events: {
                                        onStateChange: function(a) {
                                            a.data === e.PlayerState.PLAYING && (s.activeVideo || (s.activeVideo = t, window.MainAnalytics && window.MainAnalytics.trackVideo(i, window.MainAnalytics.VIDEO_EVENT_PLAY, o, n)), s.activeVideo = null, window.MainAnalytics && window.MainAnalytics.trackVideo(i, window.MainAnalytics.VIDEO_EVENT_COMPLETION, o, n))
                                        }
                                    }
                                }), s.$el.fitVids(), s.$el.show(), s.$html.addClass("no-scroll"), setTimeout(function() {
                                    s.$el.addClass("in"), s.centerVideo()
                                }, 0)
                            }) : "ooyala" === e && (a = $('<div class="fluid-width-video-wrapper fluid-ooyala"><div class="ooyala-video-player" data-multiplePlayer="true" id="player-container" data-video-id="' + t + '" data-autoplay="true"></div></div>'), s.$videoHolder.empty().append(a), $("[ooyala-overlay]").addClass("activeOverlay"), MattelVideoPlayer.init(), s.$el.show(), s.$html.addClass("no-scroll"), setTimeout(function() {
                                s.$el.addClass("in"), s.centerVideo()
                            }, 0))
                        }
                    },
                    hideOverlay: {
                        value: function() {
                            var t = this;
                            t.activeVideo = null, s.onTransitionEnd(t.$el, {
                                action: function() {
                                    t.$el.removeClass("in")
                                },
                                complete: function() {
                                    t.$videoHolder.find(".ooyala-video-player").length && MattelVideoPlayer.ooPlayerInstances.players[$(".ooyala-video-player").index(t.$videoHolder.find(".ooyala-video-player"))].mb.publish(OO.EVENTS.DESTROY, !0), t.$el.hide(), t.$videoHolder.html(""), t.$html.removeClass("no-scroll")
                                }
                            })
                        }
                    },
                    centerVideo: {
                        value: function() {
                            var t = this;
                            t.$videoModal.css("width", "");
                            var e = t.$videoHolder.find(".fluid-width-video-wrapper").first(),
                                i = e.width(),
                                o = parseInt(e.css("padding-top"), 10),
                                n = o / 2 + parseInt(t.$videoModal.css("padding-top"), 10),
                                s = i / 2 + parseInt(t.$videoModal.css("padding-left"), 10),
                                a = t.$close.height() + 20;
                            if (i && o)
                                if (t.$videoModal.height() + a > t.$el.height()) {
                                    var r = t.$el.height() - a - 100,
                                        l = 1.78 * r,
                                        d = l / t.$videoModal.width();
                                    t.$videoModal.css("width", 100 * d + "%"), i = e.width(), o = parseInt(e.css("padding-top"), 10), n = o / 2 + parseInt(t.$videoModal.css("padding-top"), 10), s = i / 2 + parseInt(t.$videoModal.css("padding-left"), 10), t.$videoModal.css("margin-left", -s + "px").css("top", "50%").css("margin-top", -n + "px").css("min-height", o + a + "px")
                                } else t.$videoModal.css("margin-left", -s + "px").css("top", "50%").css("margin-top", -n + "px").css("min-height", o + a + "px")
                        }
                    }
                }), t
            }();
            i.exports = l
        }()
    }), define("ext/owl.carousel.min.js", function(t, e, i) {
        return function() {
            ! function(t, e, i, o) {
                function n(e, i) {
                    e.owlCarousel = {
                        name: "Owl Carousel",
                        author: "Bartosz Wojciechowski",
                        version: "2.0.0-beta.2.1"
                    }, this.settings = null, this.options = t.extend({}, n.Defaults, i), this.itemData = t.extend({}, a), this.dom = t.extend({}, r), this.width = t.extend({}, l), this.num = t.extend({}, d), this.drag = t.extend({}, c), this.state = t.extend({}, u), this.e = t.extend({}, h), this.plugins = {}, this._supress = {}, this._coordinates = this._speed = this._current = null, this.dom.el = e, this.dom.$el = t(e);
                    for (var o in n.Plugins) this.plugins[o[0].toLowerCase() + o.slice(1)] = new n.Plugins[o](this);
                    this.init()
                }

                function s(t) {
                    var e, o, n = i.createElement("div");
                    for (e in t)
                        if (o = t[e], "undefined" != typeof n.style[o]) return [o, e];
                    return [!1]
                }
                var a, r, l, d, c, u, h;
                a = {
                    index: !1,
                    indexAbs: !1,
                    posLeft: !1,
                    clone: !1,
                    active: !1,
                    loaded: !1,
                    lazyLoad: !1,
                    current: !1,
                    width: !1,
                    center: !1,
                    page: !1,
                    hasVideo: !1,
                    playVideo: !1
                }, r = {
                    el: null,
                    $el: null,
                    stage: null,
                    $stage: null,
                    oStage: null,
                    $oStage: null,
                    $items: null,
                    $oItems: null,
                    $cItems: null,
                    $content: null
                }, l = {
                    el: 0,
                    stage: 0,
                    item: 0,
                    prevWindow: 0,
                    cloneLast: 0
                }, d = {
                    items: 0,
                    oItems: 0,
                    cItems: 0,
                    active: 0,
                    merged: []
                }, c = {
                    start: 0,
                    startX: 0,
                    startY: 0,
                    current: 0,
                    currentX: 0,
                    currentY: 0,
                    offsetX: 0,
                    offsetY: 0,
                    distance: null,
                    startTime: 0,
                    endTime: 0,
                    updatedX: 0,
                    targetEl: null
                }, u = {
                    isTouch: !1,
                    isScrolling: !1,
                    isSwiping: !1,
                    direction: !1,
                    inMotion: !1
                }, h = {
                    _onDragStart: null,
                    _onDragMove: null,
                    _onDragEnd: null,
                    _transitionEnd: null,
                    _resizer: null,
                    _responsiveCall: null,
                    _goToLoop: null,
                    _checkVisibile: null
                }, n.Defaults = {
                    items: 3,
                    loop: !1,
                    center: !1,
                    mouseDrag: !0,
                    touchDrag: !0,
                    pullDrag: !0,
                    freeDrag: !1,
                    margin: 0,
                    stagePadding: 0,
                    merge: !1,
                    mergeFit: !0,
                    autoWidth: !1,
                    startPosition: 0,
                    smartSpeed: 250,
                    fluidSpeed: !1,
                    dragEndSpeed: !1,
                    responsive: {},
                    responsiveRefreshRate: 200,
                    responsiveBaseElement: e,
                    responsiveClass: !1,
                    fallbackEasing: "swing",
                    info: !1,
                    nestedItemSelector: !1,
                    itemElement: "div",
                    stageElement: "div",
                    themeClass: "owl-theme",
                    baseClass: "owl-carousel",
                    itemClass: "owl-item",
                    centerClass: "center",
                    activeClass: "active"
                }, n.Plugins = {}, n.prototype.init = function() {
                    if (this.setResponsiveOptions(), this.trigger("initialize"), this.dom.$el.hasClass(this.settings.baseClass) || this.dom.$el.addClass(this.settings.baseClass), this.dom.$el.hasClass(this.settings.themeClass) || this.dom.$el.addClass(this.settings.themeClass), this.settings.rtl && this.dom.$el.addClass("owl-rtl"), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) {
                        var t, e;
                        if (t = this.dom.$el.find("img"), e = this.dom.$el.children(this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o).width(), t.length && 0 >= e) return this.preloadAutoWidthImages(t), !1
                    }
                    this.width.prevWindow = this.viewport(), this.createStage(), this.fetchContent(), this.eventsCall(), this.internalEvents(), this.dom.$el.addClass("owl-loading"), this.refresh(!0), this.dom.$el.removeClass("owl-loading").addClass("owl-loaded"), this.trigger("initialized"), this.addTriggerableEvents()
                }, n.prototype.setResponsiveOptions = function() {
                    if (this.options.responsive) {
                        var e = this.viewport(),
                            i = this.options.responsive,
                            o = -1;
                        t.each(i, function(t) {
                            e >= t && t > o && (o = Number(t))
                        }), this.settings = t.extend({}, this.options, i[o]), delete this.settings.responsive, this.settings.responsiveClass && this.dom.$el.attr("class", function(t, e) {
                            return e.replace(/\b owl-responsive-\S+/g, "")
                        }).addClass("owl-responsive-" + o)
                    } else this.settings = t.extend({}, this.options)
                }, n.prototype.optionsLogic = function() {
                    this.dom.$el.toggleClass("owl-center", this.settings.center), this.settings.loop && this.num.oItems <= this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
                }, n.prototype.createStage = function() {
                    var e = i.createElement("div"),
                        o = i.createElement(this.settings.stageElement);
                    e.className = "owl-stage-outer", o.className = "owl-stage", e.appendChild(o), this.dom.el.appendChild(e), this.dom.oStage = e, this.dom.$oStage = t(e), this.dom.stage = o, this.dom.$stage = t(o)
                }, n.prototype.createItemContainer = function() {
                    var e = i.createElement(this.settings.itemElement);
                    return e.className = this.settings.itemClass, t(e)
                }, n.prototype.fetchContent = function(e) {
                    this.dom.$content = e ? e instanceof jQuery ? e : t(e) : this.settings.nestedItemSelector ? this.dom.$el.find("." + this.settings.nestedItemSelector).not(".owl-stage-outer") : this.dom.$el.children().not(".owl-stage-outer"), this.num.oItems = this.dom.$content.length, 0 !== this.num.oItems && this.initStructure()
                }, n.prototype.initStructure = function() {
                    this.createNormalStructure()
                }, n.prototype.createNormalStructure = function() {
                    var t, e;
                    for (t = 0; t < this.num.oItems; t++) e = this.createItemContainer(), this.initializeItemContainer(e, this.dom.$content[t]), this.dom.$stage.append(e);
                    this.dom.$content = null
                }, n.prototype.createCustomStructure = function(t) {
                    var e, i;
                    for (e = 0; t > e; e++) i = this.createItemContainer(), this.createItemContainerData(i), this.dom.$stage.append(i)
                }, n.prototype.initializeItemContainer = function(t, e) {
                    this.trigger("change", {
                        property: {
                            name: "item",
                            value: t
                        }
                    }), this.createItemContainerData(t), t.append(e), this.trigger("changed", {
                        property: {
                            name: "item",
                            value: t
                        }
                    })
                }, n.prototype.createItemContainerData = function(e, i) {
                    var o = t.extend({}, this.itemData);
                    i && t.extend(o, i.data("owl-item")), e.data("owl-item", o)
                }, n.prototype.cloneItemContainer = function(t) {
                    return t = t.clone(!0, !0).addClass("cloned"), this.createItemContainerData(t, t), t.data("owl-item").clone = !0, t
                }, n.prototype.updateLocalContent = function() {
                    var e, i;
                    for (this.dom.$oItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function() {
                            return !1 === t(this).data("owl-item").clone
                        }), this.num.oItems = this.dom.$oItems.length, e = 0; e < this.num.oItems; e++) i = this.dom.$oItems.eq(e), i.data("owl-item").index = e
                }, n.prototype.loopClone = function() {
                    if (!this.settings.loop || this.num.oItems <= this.settings.items) return !1;
                    var e, i, o, n = this.settings.items,
                        s = this.num.oItems - 1;
                    for (this.settings.stagePadding && 1 === this.settings.items && (n += 1), this.num.cItems = 2 * n, o = 0; n > o; o++) e = this.cloneItemContainer(this.dom.$oItems.eq(o)), i = this.cloneItemContainer(this.dom.$oItems.eq(s - o)), this.dom.$stage.append(e), this.dom.$stage.prepend(i);
                    this.dom.$cItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function() {
                        return !0 === t(this).data("owl-item").clone
                    })
                }, n.prototype.reClone = function() {
                    null !== this.dom.$cItems && (this.dom.$cItems.remove(), this.dom.$cItems = null, this.num.cItems = 0), this.settings.loop && this.loopClone()
                }, n.prototype.calculate = function() {
                    var t, e, i, o, n;
                    for (o = e = 0, this.width.el = this.dom.$el.width() - 2 * this.settings.stagePadding, this.width.view = this.dom.$el.width(), t = this.width.el - this.settings.margin * (1 === this.settings.items ? 0 : this.settings.items - 1), this.width.el += this.settings.margin, this.width.item = (t / this.settings.items + this.settings.margin).toFixed(3), this.dom.$items = this.dom.$stage.find(".owl-item"), this.num.items = this.dom.$items.length, this.settings.autoWidth && this.dom.$items.css("width", ""), this._coordinates = [], this.num.merged = [], i = this.settings.rtl ? this.settings.center ? -(this.width.el / 2) : 0 : this.settings.center ? this.width.el / 2 : 0, t = this.width.mergeStage = 0; t < this.num.items; t++) this.settings.merge ? (n = this.dom.$items.eq(t).find("[data-merge]").attr("data-merge") || 1, this.settings.mergeFit && n > this.settings.items && (n = this.settings.items), this.num.merged.push(parseInt(n)), this.width.mergeStage += this.width.item * this.num.merged[t]) : this.num.merged.push(1), n = this.width.item * this.num.merged[t], this.settings.autoWidth && (n = this.dom.$items.eq(t).width() + this.settings.margin, this.settings.rtl ? this.dom.$items[t].style.marginLeft = this.settings.margin + "px" : this.dom.$items[t].style.marginRight = this.settings.margin + "px"), this._coordinates.push(i), this.dom.$items.eq(t).data("owl-item").posLeft = e, this.dom.$items.eq(t).data("owl-item").width = n, this.settings.rtl ? (i += n, e += n) : (i -= n, e -= n), o -= Math.abs(n), this.settings.center && (this._coordinates[t] = this.settings.rtl ? this._coordinates[t] + n / 2 : this._coordinates[t] - n / 2);
                    for (this.width.stage = Math.abs(this.settings.autoWidth ? this.settings.center ? o : i : o), o = this.num.oItems + this.num.cItems, e = 0; o > e; e++) this.dom.$items.eq(e).data("owl-item").indexAbs = e;
                    this.setSizes()
                }, n.prototype.setSizes = function() {
                    !1 !== this.settings.stagePadding && (this.dom.oStage.style.paddingLeft = this.settings.stagePadding + "px", this.dom.oStage.style.paddingRight = this.settings.stagePadding + "px"), this.settings.rtl ? e.setTimeout(t.proxy(function() {
                        this.dom.stage.style.width = this.width.stage + "px"
                    }, this), 0) : this.dom.stage.style.width = this.width.stage + "px";
                    for (var i = 0; i < this.num.items; i++) this.settings.autoWidth || (this.dom.$items[i].style.width = this.width.item - this.settings.margin + "px"), this.settings.rtl ? this.dom.$items[i].style.marginLeft = this.settings.margin + "px" : this.dom.$items[i].style.marginRight = this.settings.margin + "px", 1 === this.num.merged[i] || this.settings.autoWidth || (this.dom.$items[i].style.width = this.width.item * this.num.merged[i] - this.settings.margin + "px");
                    this.width.stagePrev = this.width.stage
                }, n.prototype.responsive = function() {
                    return this.num.oItems && this.isElWidthChanged() && !this.trigger("resize").isDefaultPrevented() ? (this.state.responsive = !0, this.refresh(), this.state.responsive = !1, void this.trigger("resized")) : !1
                }, n.prototype.refresh = function() {
                    var t = this.dom.$oItems && this.dom.$oItems.eq(this.normalize(this.current(), !0));
                    return this.trigger("refresh"), this.setResponsiveOptions(), this.updateLocalContent(), this.optionsLogic(), 0 === this.num.oItems ? !1 : (this.dom.$stage.addClass("owl-refresh"), this.reClone(), this.calculate(), this.dom.$stage.removeClass("owl-refresh"), t ? this.reset(t.data("owl-item").indexAbs) : (this.dom.oStage.scrollLeft = 0, this.reset(this.dom.$oItems.eq(0).data("owl-item").indexAbs)), this.state.orientation = e.orientation, this.watchVisibility(), void this.trigger("refreshed"))
                }, n.prototype.updateActiveItems = function() {
                    this.trigger("change", {
                        property: {
                            name: "items",
                            value: this.dom.$items
                        }
                    });
                    var t, e, i, o;
                    for (t = 0; t < this.num.items; t++) this.dom.$items.eq(t).data("owl-item").active = !1, this.dom.$items.eq(t).data("owl-item").current = !1, this.dom.$items.eq(t).removeClass(this.settings.activeClass).removeClass(this.settings.centerClass);
                    for (this.num.active = 0, padding = 2 * this.settings.stagePadding, stageX = this.coordinates(this.current()) + padding, view = this.settings.rtl ? this.width.view : -this.width.view, t = 0; t < this.num.items; t++) e = this.dom.$items.eq(t), i = e.data("owl-item").posLeft, o = e.data("owl-item").width, o = this.settings.rtl ? i - o - padding : i - o + padding, (this.op(i, "<=", stageX) && this.op(i, ">", stageX + view) || this.op(o, "<", stageX) && this.op(o, ">", stageX + view)) && (this.num.active++, e.data("owl-item").active = !0, e.data("owl-item").current = !0, e.addClass(this.settings.activeClass), this.settings.lazyLoad || (e.data("owl-item").loaded = !0), this.settings.loop && this.updateClonedItemsState(e.data("owl-item").index));
                    this.settings.center && (this.dom.$items.eq(this.current()).addClass(this.settings.centerClass).data("owl-item").center = !0), this.trigger("changed", {
                        property: {
                            name: "items",
                            value: this.dom.$items
                        }
                    })
                }, n.prototype.updateClonedItemsState = function(t) {
                    var e, i, o;
                    for (this.settings.center && (e = this.dom.$items.eq(this.current()).data("owl-item").index), o = 0; o < this.num.items; o++) i = this.dom.$items.eq(o), i.data("owl-item").index === t && (i.data("owl-item").current = !0, i.data("owl-item").index === e && i.addClass(this.settings.centerClass))
                }, n.prototype.eventsCall = function() {
                    this.e._onDragStart = t.proxy(function(t) {
                        this.onDragStart(t)
                    }, this), this.e._onDragMove = t.proxy(function(t) {
                        this.onDragMove(t)
                    }, this), this.e._onDragEnd = t.proxy(function(t) {
                        this.onDragEnd(t)
                    }, this), this.e._transitionEnd = t.proxy(function(t) {
                        this.transitionEnd(t)
                    }, this), this.e._resizer = t.proxy(function() {
                        this.responsiveTimer()
                    }, this), this.e._responsiveCall = t.proxy(function() {
                        this.responsive()
                    }, this), this.e._preventClick = t.proxy(function(t) {
                        this.preventClick(t)
                    }, this)
                }, n.prototype.responsiveTimer = function() {
                    return this.viewport() === this.width.prevWindow ? !1 : (e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._responsiveCall, this.settings.responsiveRefreshRate), void(this.width.prevWindow = this.viewport()))
                }, n.prototype.internalEvents = function() {
                    var t = "ontouchstart" in e || !!navigator.msMaxTouchPoints,
                        o = e.navigator.msPointerEnabled;
                    this.dragType = t && !o ? ["touchstart", "touchmove", "touchend", "touchcancel"] : t && o ? ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"] : ["mousedown", "mousemove", "mouseup"], (t || o) && this.settings.touchDrag ? this.on(i, this.dragType[3], this.e._onDragEnd) : (this.dom.$stage.on("dragstart", function() {
                        return !1
                    }), this.settings.mouseDrag ? this.dom.stage.onselectstart = function() {
                        return !1
                    } : this.dom.$el.addClass("owl-text-select-on")), this.transitionEndVendor && this.on(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", this.e._resizer, !1), this.dragEvents()
                }, n.prototype.dragEvents = function() {
                    !this.settings.touchDrag || "touchstart" !== this.dragType[0] && "MSPointerDown" !== this.dragType[0] ? this.settings.mouseDrag && "mousedown" === this.dragType[0] ? this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) : this.off(this.dom.stage, this.dragType[0], this.e._onDragStart) : this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1)
                }, n.prototype.onDragStart = function(t) {
                    var o, n, s;
                    if (o = t.originalEvent || t || e.event, 3 === o.which) return !1;
                    if ("mousedown" === this.dragType[0] && this.dom.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, s = (n = "touchstart" === o.type) ? t.targetTouches[0].pageX : o.pageX || o.clientX, t = n ? t.targetTouches[0].pageY : o.pageY || o.clientY, this.drag.offsetX = this.dom.$stage.position().left - this.settings.stagePadding, this.drag.offsetY = this.dom.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.dom.$stage.position().left + this.width.stage - this.width.el + this.settings.margin), this.state.inMotion && this.support3d) n = this.getTransformProperty(), this.drag.offsetX = n, this.animate(n), this.state.inMotion = !0;
                    else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1;
                    this.drag.startX = s - this.drag.offsetX, this.drag.startY = t - this.drag.offsetY, this.drag.start = s - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), this.on(i, this.dragType[1], this.e._onDragMove, !1), this.on(i, this.dragType[2], this.e._onDragEnd, !1)
                }, n.prototype.onDragMove = function(t) {
                    var i, n, s;
                    this.state.isTouch && !this.state.isScrolling && (t = t.originalEvent || t || e.event, n = (i = "touchmove" == t.type) ? t.targetTouches[0].pageX : t.pageX || t.clientX, i = i ? t.targetTouches[0].pageY : t.pageY || t.clientY, this.drag.currentX = n - this.drag.startX, this.drag.currentY = i - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, 0 > this.drag.distance ? this.state.direction = this.settings.rtl ? "right" : "left" : 0 < this.drag.distance && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems)) : (n = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), s = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, n + s), i + s)), (8 < this.drag.distance || -8 > this.drag.distance) && (t.preventDefault !== o ? t.preventDefault() : t.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (16 < this.drag.currentY || -16 > this.drag.currentY) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))
                }, n.prototype.onDragEnd = function() {
                    var t, e;
                    if (this.state.isTouch) {
                        if ("mousedown" === this.dragType[0] && this.dom.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1;
                        this.drag.endTime = (new Date).getTime(), t = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || t > 300) && this.removeClick(this.drag.targetEl), t = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(t), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(t) || this.transitionEnd(), this.drag.distance = 0, this.off(i, this.dragType[1], this.e._onDragMove), this.off(i, this.dragType[2], this.e._onDragEnd)
                    }
                }, n.prototype.removeClick = function(i) {
                    this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
                        t(i).off("click.preventClick")
                    }, 300)
                }, n.prototype.preventClick = function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
                }, n.prototype.getTransformProperty = function() {
                    var t;
                    return t = e.getComputedStyle(this.dom.stage, null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), 16 === t.length != 1 ? t[4] : t[12]
                }, n.prototype.closest = function(e) {
                    var i = 0;
                    return this.settings.freeDrag || t.each(this.coordinates(), t.proxy(function(t, o) {
                        e > o - 30 && o + 30 > e ? i = t : this.op(e, "<", o) && this.op(e, ">", this.coordinates(t + 1) || o - this.width.el) && (i = "left" === this.state.direction ? t + 1 : t)
                    }, this)), this.settings.loop || (this.op(e, ">", this.coordinates(this.minimum())) ? i = e = this.minimum() : this.op(e, "<", this.coordinates(this.maximum())) && (i = e = this.maximum())), i
                }, n.prototype.animate = function(e) {
                    this.trigger("translate"), this.state.inMotion = 0 < this.speed(), this.support3d ? this.dom.$stage.css({
                        transform: "translate3d(" + e + "px,0px, 0px)",
                        transition: this.speed() / 1e3 + "s"
                    }) : this.state.isTouch ? this.dom.$stage.css({
                        left: e + "px"
                    }) : this.dom.$stage.animate({
                        left: e
                    }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
                        this.state.inMotion && this.transitionEnd()
                    }, this))
                }, n.prototype.current = function(t) {
                    if (t === o) return this._current;
                    if (0 === this.num.oItems) return o;
                    if (t = this.normalize(t), this._current === t) this.animate(this.coordinates(this._current));
                    else {
                        var e = this.trigger("change", {
                            property: {
                                name: "position",
                                value: t
                            }
                        });
                        e.data !== o && (t = this.normalize(e.data)), this._current = t, this.animate(this.coordinates(this._current)), this.updateActiveItems(), this.trigger("changed", {
                            property: {
                                name: "position",
                                value: this._current
                            }
                        })
                    }
                    return this._current
                }, n.prototype.reset = function(t) {
                    this.suppress(["change", "changed"]), this.speed(0), this.current(t), this.release(["change", "changed"])
                }, n.prototype.normalize = function(t, e) {
                    if (t === o || !this.dom.$items) return o;
                    if (this.settings.loop) {
                        var i = this.dom.$items.length;
                        t = (t % i + i) % i
                    } else t = Math.max(this.minimum(), Math.min(this.maximum(), t));
                    return e ? this.dom.$items.eq(t).data("owl-item").index : t
                }, n.prototype.maximum = function() {
                    var e, i, o = this.settings;
                    if (!o.loop && o.center) e = this.num.oItems - 1;
                    else if (o.loop || o.center)
                        if (o.loop || o.center) e = this.num.oItems + o.items;
                        else {
                            if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                            revert = o.rtl ? 1 : -1, i = this.dom.$stage.width() - this.$el.width(), t.each(this.coordinates(), function(t, o) {
                                return o * revert >= i ? !1 : void(e = t + 1)
                            })
                        }
                    else e = this.num.oItems === o.items ? -1 : this.num.oItems - o.items;
                    return e
                }, n.prototype.minimum = function() {
                    return this.dom.$oItems.eq(0).data("owl-item").indexAbs
                }, n.prototype.speed = function(t) {
                    return t !== o && (this._speed = t), this._speed
                }, n.prototype.coordinates = function(t) {
                    return t !== o ? this._coordinates[t] : this._coordinates
                }, n.prototype.duration = function(t, e, i) {
                    return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
                }, n.prototype.to = function(i, o) {
                    if (this.settings.loop) {
                        var n = i - this.normalize(this.current(), !0),
                            s = this.current(),
                            a = this.current(),
                            r = this.current() + n,
                            l = 0 > a - r ? !0 : !1;
                        r < this.settings.items && !1 === l ? (s = this.num.items - (this.settings.items - a) - this.settings.items, this.reset(s)) : r >= this.num.items - this.settings.items && !0 === l && (s = a - this.num.oItems, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                            this.speed(this.duration(this.current(), s + n, o)), this.current(s + n)
                        }, this), 30)
                    } else this.speed(this.duration(this.current(), i, o)), this.current(i)
                }, n.prototype.next = function(t) {
                    t = t || !1, this.to(this.normalize(this.current(), !0) + 1, t)
                }, n.prototype.prev = function(t) {
                    t = t || !1, this.to(this.normalize(this.current(), !0) - 1, t)
                }, n.prototype.transitionEnd = function(t) {
                    return t !== o && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.dom.stage) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
                }, n.prototype.isElWidthChanged = function() {
                    return this.dom.$el.width() - this.settings.stagePadding !== this.width.el + this.settings.margin
                }, n.prototype.viewport = function() {
                    var o;
                    if (this.options.responsiveBaseElement !== e) o = t(this.options.responsiveBaseElement).width();
                    else if (e.innerWidth) o = e.innerWidth;
                    else {
                        if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                        o = i.documentElement.clientWidth
                    }
                    return o
                }, n.prototype.insertContent = function(t) {
                    this.dom.$stage.empty(), this.fetchContent(t), this.refresh()
                }, n.prototype.addItem = function(t, e) {
                    var i = this.createItemContainer();
                    e = e || 0, this.initializeItemContainer(i, t), 0 === this.dom.$oItems.length ? this.dom.$stage.append(i) : this.dom.$oItems.eq(e).before(i), this.refresh()
                }, n.prototype.removeItem = function(t) {
                    this.dom.$oItems.eq(t).remove(), this.refresh()
                }, n.prototype.addTriggerableEvents = function() {
                    var e = t.proxy(function(e, i) {
                        return t.proxy(function(t) {
                            t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
                        }, this)
                    }, this);
                    t.each({
                        next: this.next,
                        prev: this.prev,
                        to: this.to,
                        destroy: this.destroy,
                        refresh: this.refresh,
                        replace: this.insertContent,
                        add: this.addItem,
                        remove: this.removeItem
                    }, t.proxy(function(t, i) {
                        this.dom.$el.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
                    }, this))
                }, n.prototype.watchVisibility = function() {
                    function i(t) {
                        return 0 < t.offsetWidth && 0 < t.offsetHeight
                    }

                    function o() {
                        i(this.dom.el) && (this.dom.$el.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
                    }
                    i(this.dom.el) || (this.dom.$el.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(o, this), 500))
                }, n.prototype.preloadAutoWidthImages = function(e) {
                    var i, o, n, s;
                    i = 0, o = this, e.each(function(a, r) {
                        n = t(r), s = new Image, s.onload = function() {
                            i++, n.attr("src", s.src), n.css("opacity", 1), i >= e.length && (o.state.imagesLoaded = !0, o.init())
                        }, s.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
                    })
                }, n.prototype.destroy = function() {
                    this.dom.$el.hasClass(this.settings.themeClass) && this.dom.$el.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && this.off(e, "resize", this.e._resizer), this.transitionEndVendor && this.off(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd);
                    for (var t in this.plugins) this.plugins[t].destroy();
                    (this.settings.mouseDrag || this.settings.touchDrag) && (this.off(this.dom.stage, this.dragType[0], this.e._onDragStart), this.settings.mouseDrag && this.off(i, this.dragType[3], this.e._onDragStart), this.settings.mouseDrag && (this.dom.$stage.off("dragstart", function() {
                        return !1
                    }), this.dom.stage.onselectstart = function() {})), this.dom.$el.off(".owl"), null !== this.dom.$cItems && this.dom.$cItems.remove(), this.e = null, this.dom.$el.data("owlCarousel", null), delete this.dom.el.owlCarousel, this.dom.$stage.unwrap(), this.dom.$items.unwrap(), this.dom.$items.contents().unwrap(), this.dom = null
                }, n.prototype.op = function(t, e, i) {
                    var o = this.settings.rtl;
                    switch (e) {
                        case "<":
                            return o ? t > i : i > t;
                        case ">":
                            return o ? i > t : t > i;
                        case ">=":
                            return o ? i >= t : t >= i;
                        case "<=":
                            return o ? t >= i : i >= t
                    }
                }, n.prototype.on = function(t, e, i, o) {
                    t.addEventListener ? t.addEventListener(e, i, o) : t.attachEvent && t.attachEvent("on" + e, i)
                }, n.prototype.off = function(t, e, i, o) {
                    t.removeEventListener ? t.removeEventListener(e, i, o) : t.detachEvent && t.detachEvent("on" + e, i)
                }, n.prototype.trigger = function(e, i, o) {
                    var n = {
                            item: {
                                count: this.num.oItems,
                                index: this.current()
                            }
                        },
                        s = t.camelCase(t.grep(["on", e, o], function(t) {
                            return t
                        }).join("-").toLowerCase()),
                        a = t.Event([e, "owl", o || "carousel"].join(".").toLowerCase(), t.extend({
                            relatedTarget: this
                        }, n, i));
                    return this._supress[a.type] || (t.each(this.plugins, function(t, e) {
                        e.onTrigger && e.onTrigger(a)
                    }), this.dom.$el.trigger(a), "function" == typeof this.settings[s] && this.settings[s].apply(this, a)), a
                }, n.prototype.suppress = function(e) {
                    t.each(e, t.proxy(function(t, e) {
                        this._supress[e] = !0
                    }, this))
                }, n.prototype.release = function(e) {
                    t.each(e, t.proxy(function(t, e) {
                        delete this._supress[e]
                    }, this))
                }, n.prototype.browserSupport = function() {
                    (this.support3d = s(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]) && (this.transformVendor = s(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0], this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][s(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""), this.state.orientation = e.orientation
                }, t.fn.owlCarousel = function(e) {
                    return this.each(function() {
                        t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
                    })
                }, t.fn.owlCarousel.Constructor = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, o) {
                LazyLoad = function(e) {
                    this.owl = e, this.owl.options = t.extend({}, LazyLoad.Defaults, this.owl.options), this.handlers = {
                        "changed.owl.carousel": t.proxy(function(t) {
                            "items" == t.property.name && t.property.value && !t.property.value.is(":empty") && this.check()
                        }, this)
                    }, this.owl.dom.$el.on(this.handlers)
                }, LazyLoad.Defaults = {
                    lazyLoad: !1
                }, LazyLoad.prototype.check = function() {
                    var t, i, o, n, s = 1 < e.devicePixelRatio ? "data-src-retina" : "data-src";
                    for (o = 0; o < this.owl.num.items; o++) n = this.owl.dom.$items.eq(o), !0 === n.data("owl-item").current && !1 === n.data("owl-item").loaded && (i = n.find(".owl-lazy"), t = (t = i.attr(s)) || i.attr("data-src")) && (i.css("opacity", "0"), this.preload(i, n))
                }, LazyLoad.prototype.preload = function(i, o) {
                    var n, s, a;
                    i.each(t.proxy(function(i, r) {
                        this.owl.trigger("load", null, "lazy"), n = t(r), s = new Image, a = (a = n.attr(1 < e.devicePixelRatio ? "data-src-retina" : "data-src")) || n.attr("data-src"), s.onload = t.proxy(function() {
                            o.data("owl-item").loaded = !0, n.is("img") ? n.attr("src", s.src) : n.css("background-image", "url(" + s.src + ")"), n.css("opacity", 1), this.owl.trigger("loaded", null, "lazy")
                        }, this), s.src = a
                    }, this))
                }, LazyLoad.prototype.destroy = function() {
                    var t, e;
                    for (t in this.handlers) this.owl.dom.$el.off(t, this.handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.lazyLoad = LazyLoad
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, o) {
                AutoHeight = function(e) {
                    this.owl = e, this.owl.options = t.extend({}, AutoHeight.Defaults, this.owl.options), this.handlers = {
                        "changed.owl.carousel": t.proxy(function(t) {
                            "position" == t.property.name && this.owl.settings.autoHeight && this.setHeight()
                        }, this)
                    }, this.owl.dom.$el.on(this.handlers)
                }, AutoHeight.Defaults = {
                    autoHeight: !1,
                    autoHeightClass: "owl-height"
                }, AutoHeight.prototype.setHeight = function() {
                    var t, i = this.owl.dom.$items.eq(this.owl.current()),
                        o = this.owl.dom.$oStage,
                        n = 0;
                    this.owl.dom.$oStage.hasClass(this.owl.settings.autoHeightClass) || this.owl.dom.$oStage.addClass(this.owl.settings.autoHeightClass), t = e.setInterval(function() {
                        n += 1, i.data("owl-item").loaded ? (o.height(i.height() + "px"), clearInterval(t)) : 500 === n && clearInterval(t)
                    }, 100)
                }, AutoHeight.prototype.destroy = function() {
                    var t, e;
                    for (t in this.handlers) this.owl.dom.$el.off(t, this.handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.autoHeight = AutoHeight
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, o) {
                Video = function(e) {
                    this.owl = e, this.owl.options = t.extend({}, Video.Defaults, this.owl.options), this.handlers = {
                        "resize.owl.carousel": t.proxy(function(t) {
                            this.owl.settings.video && !this.isInFullScreen() && t.preventDefault()
                        }, this),
                        "refresh.owl.carousel changed.owl.carousel": t.proxy(function(t) {
                            this.owl.state.videoPlay && this.stopVideo()
                        }, this),
                        "refresh.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                            return this.owl.settings.video ? void(this.refreshing = "refresh" == t.type) : !1
                        }, this),
                        "changed.owl.carousel": t.proxy(function(t) {
                            this.refreshing && "items" == t.property.name && t.property.value && !t.property.value.is(":empty") && this.checkVideoLinks()
                        }, this)
                    }, this.owl.dom.$el.on(this.handlers), this.owl.dom.$el.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                        this.playVideo(t)
                    }, this))
                }, Video.Defaults = {
                    video: !1,
                    videoHeight: !1,
                    videoWidth: !1
                }, Video.prototype.checkVideoLinks = function() {
                    var t, e, i;
                    for (i = 0; i < this.owl.num.items; i++) e = this.owl.dom.$items.eq(i), e.data("owl-item").hasVideo || (t = e.find(".owl-video"), t.length && (this.owl.state.hasVideos = !0, this.owl.dom.$items.eq(i).data("owl-item").hasVideo = !0, t.css("display", "none"), this.getVideoInfo(t, e)))
                }, Video.prototype.getVideoInfo = function(t, e) {
                    var i, o;
                    o = t.data("vimeo-id");
                    var n = t.data("youtube-id"),
                        s = t.data("width") || this.owl.settings.videoWidth,
                        a = t.data("height") || this.owl.settings.videoHeight,
                        r = t.attr("href");
                    if (o) i = "vimeo";
                    else if (n) i = "youtube", o = n;
                    else {
                        if (!r) throw Error("Missing video link.");
                        o = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), -1 < o[3].indexOf("youtu") ? i = "youtube" : -1 < o[3].indexOf("vimeo") && (i = "vimeo"), o = o[6]
                    }
                    e.data("owl-item").videoType = i, e.data("owl-item").videoId = o, e.data("owl-item").videoWidth = s, e.data("owl-item").videoHeight = a, i = {
                        type: i,
                        id: o
                    }, t.wrap('<div class="owl-video-wrapper"' + (s && a ? 'style="width:' + s + "px;height:" + a + 'px;"' : "") + "></div>"), this.createVideoTn(t, i)
                }, Video.prototype.createVideoTn = function(e, i) {
                    function o(t) {
                        s = '<div class="owl-video-play-icon"></div>', n = c.settings.lazyLoad ? '<div class="owl-video-tn ' + d + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s)
                    }
                    var n, s, a, r = e.find("img"),
                        l = "src",
                        d = "",
                        c = this.owl;
                    return this.owl.settings.lazyLoad && (l = "data-src", d = "owl-lazy"), r.length ? (o(r.attr(l)), r.remove(), !1) : void("youtube" === i.type ? (a = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", o(a)) : "vimeo" === i.type && t.ajax({
                        type: "GET",
                        url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: function(t) {
                            a = t[0].thumbnail_large, o(a), c.settings.loop && c.updateActiveItems()
                        }
                    }))
                }, Video.prototype.stopVideo = function() {
                    this.owl.trigger("stop", null, "video");
                    var t = this.owl.dom.$items.eq(this.owl.state.videoPlayIndex);
                    t.find(".owl-video-frame").remove(), t.removeClass("owl-video-playing"), this.owl.state.videoPlay = !1
                }, Video.prototype.playVideo = function(e) {
                    this.owl.trigger("play", null, "video"), this.owl.state.videoPlay && this.stopVideo();
                    var i, o;
                    e = t(e.target || e.srcElement);
                    var n = e.closest("." + this.owl.settings.itemClass);
                    o = n.data("owl-item").videoType, id = n.data("owl-item").videoId, width = n.data("owl-item").videoWidth || Math.floor(n.data("owl-item").width - this.owl.settings.margin), height = n.data("owl-item").videoHeight || this.owl.dom.$stage.height(), "youtube" === o ? i = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + id + "?autoplay=1&v=" + id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o && (i = '<iframe src="http://player.vimeo.com/video/' + id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), n.addClass("owl-video-playing"), this.owl.state.videoPlay = !0, this.owl.state.videoPlayIndex = n.data("owl-item").indexAbs, i = t('<div style="height:' + height + "px; width:" + width + 'px" class="owl-video-frame">' + i + "</div>"), e.after(i)
                }, Video.prototype.isInFullScreen = function() {
                    var o = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
                    return o && t(o.parentNode).hasClass("owl-video-frame") && (this.owl.speed(0), this.owl.state.isFullScreen = !0), o && this.owl.state.isFullScreen && this.owl.state.videoPlay ? !1 : this.owl.state.isFullScreen ? this.owl.state.isFullScreen = !1 : this.owl.state.videoPlay && this.owl.state.orientation !== e.orientation ? (this.owl.state.orientation = e.orientation, !1) : !0
                }, Video.prototype.destroy = function() {
                    var t, e;
                    this.owl.dom.$el.off("click.owl.video");
                    for (t in this.handlers) this.owl.dom.$el.off(t, this.handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.video = Video
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, o) {
                Animate = function(e) {
                    this.core = e, this.core.options = t.extend({}, Animate.Defaults, this.core.options), this.swapping = !0, this.next = this.previous = o, this.handlers = {
                        "change.owl.carousel": t.proxy(function(t) {
                            "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                        }, this),
                        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                            this.swapping = "translated" == t.type
                        }, this),
                        "translate.owl.carousel": t.proxy(function(t) {
                            this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                        }, this)
                    }, this.core.dom.$el.on(this.handlers)
                }, Animate.Defaults = {
                    animateOut: !1,
                    animateIn: !1
                }, Animate.prototype.swap = function() {
                    if (1 === this.core.settings.items && this.core.support3d) {
                        this.core.speed(0);
                        var e, i = t.proxy(this.clear, this),
                            o = this.core.dom.$items.eq(this.previous),
                            n = this.core.dom.$items.eq(this.next),
                            s = this.core.settings.animateIn,
                            a = this.core.settings.animateOut;
                        this.core.current() !== this.previous && (a && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), o.css({
                            left: e + "px"
                        }).addClass("animated owl-animated-out").addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), s) && n.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)
                    }
                }, Animate.prototype.clear = function(e) {
                    t(e.target).css({
                        left: ""
                    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
                }, Animate.prototype.destroy = function() {
                    var t, e;
                    for (t in this.handlers) this.core.dom.$el.off(t, this.handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Animate = Animate
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, o) {
                Autoplay = function(e) {
                    this.core = e, this.core.options = t.extend({}, Autoplay.Defaults, this.core.options), this.handlers = {
                        "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                            this.autoplay()
                        }, this),
                        "play.owl.autoplay": t.proxy(function(t, e, i) {
                            this.play(e, i)
                        }, this),
                        "stop.owl.autoplay": t.proxy(function() {
                            this.stop()
                        }, this),
                        "mouseover.owl.autoplay": t.proxy(function() {
                            this.core.settings.autoplayHoverPause && this.pause()
                        }, this),
                        "mouseleave.owl.autoplay": t.proxy(function() {
                            this.core.settings.autoplayHoverPause && this.autoplay()
                        }, this)
                    }, this.core.dom.$el.on(this.handlers)
                }, Autoplay.Defaults = {
                    autoplay: !1,
                    autoplayTimeout: 5e3,
                    autoplayHoverPause: !1,
                    autoplaySpeed: !1
                }, Autoplay.prototype.autoplay = function() {
                    this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
                        this.play()
                    }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
                }, Autoplay.prototype.play = function(t, o) {
                    !0 !== i.hidden && (this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion || (!1 === this.core.settings.autoplay ? e.clearInterval(this.interval) : this.core.next(this.core.settings.autoplaySpeed)))
                }, Autoplay.prototype.stop = function() {
                    e.clearInterval(this.interval)
                }, Autoplay.prototype.pause = function() {
                    e.clearInterval(this.interval)
                }, Autoplay.prototype.destroy = function() {
                    var t, i;
                    e.clearInterval(this.interval);
                    for (t in this.handlers) this.core.dom.$el.off(t, this.handlers[t]);
                    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, o) {
                var n = function(e) {
                    this.core = e, this.initialized = !1, this.pages = [], this.controls = {}, this.template = null, this.$element = this.core.dom.$el, this.overrides = {
                        next: this.core.next,
                        prev: this.core.prev,
                        to: this.core.to
                    }, this.handlers = {
                        "changed.owl.carousel": t.proxy(function(e) {
                            "items" == e.property.name && (this.initialized || (this.initialize(), this.initialized = !0), this.update(), this.draw()), this.filling && (e.property.value.data("owl-item").dot = t(":first-child", e.property.value).find("[data-dot]").andSelf().data("dot"))
                        }, this),
                        "change.owl.carousel": t.proxy(function(t) {
                            if ("position" == t.property.name && !this.core.state.revert && !this.core.settings.loop && this.core.settings.navRewind) {
                                var e = this.core.current(),
                                    i = this.core.maximum(),
                                    o = this.core.minimum();
                                t.data = t.property.value > i ? e >= i ? o : i : t.property.value < o ? i : t.property.value
                            }
                            this.filling = this.core.settings.dotsData && "item" == t.property.name && t.property.value && t.property.value.is(":empty")
                        }, this),
                        "refreshed.owl.carousel": t.proxy(function() {
                            this.initialized && (this.update(), this.draw())
                        }, this)
                    }, this.core.options = t.extend({}, n.Defaults, this.core.options), this.$element.on(this.handlers)
                };
                n.Defaults = {
                    nav: !1,
                    navRewind: !0,
                    navText: ["prev", "next"],
                    navSpeed: !1,
                    navElement: "div",
                    navContainer: !1,
                    navContainerClass: "owl-nav",
                    navClass: ["owl-prev", "owl-next"],
                    slideBy: 1,
                    dotClass: "owl-dot",
                    dotsClass: "owl-dots",
                    dots: !0,
                    dotsEach: !1,
                    dotData: !1,
                    dotsSpeed: !1,
                    dotsContainer: !1,
                    controlsClass: "owl-controls"
                }, n.prototype.initialize = function() {
                    var e, i, o = this.core.settings;
                    o.dotsData || (this.template = t("<div>").addClass(o.dotClass).append(t("<span>")).prop("outerHTML")), o.navContainer && o.dotsContainer || (this.controls.$container = t("<div>").addClass(o.controlsClass).appendTo(this.$element)), this.controls.$indicators = o.dotsContainer ? t(o.dotsContainer) : t("<div>").hide().addClass(o.dotsClass).appendTo(this.controls.$container), this.controls.$indicators.on(this.core.dragType[2], "div", t.proxy(function(e) {
                        var i = t(e.target).parent().is(this.controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                        e.preventDefault(), this.to(i, o.dotsSpeed)
                    }, this)), e = o.navContainer ? t(o.navContainer) : t("<div>").addClass(o.navContainerClass).prependTo(this.controls.$container), this.controls.$next = t("<" + o.navElement + ">"), this.controls.$previous = this.controls.$next.clone(), this.controls.$previous.addClass(o.navClass[0]).html(o.navText[0]).hide().prependTo(e).on(this.core.dragType[2], t.proxy(function(t) {
                        this.prev()
                    }, this)), this.controls.$next.addClass(o.navClass[1]).html(o.navText[1]).hide().appendTo(e).on(this.core.dragType[2], t.proxy(function(t) {
                        this.next()
                    }, this));
                    for (i in this.overrides) this.core[i] = t.proxy(this[i], this)
                }, n.prototype.destroy = function() {
                    var t, e, i, o;
                    for (t in this.handlers) this.$element.off(t, this.handlers[t]);
                    for (e in this.controls) this.controls[e].remove();
                    for (o in this.overides) this.core[o] = this.overrides[o];
                    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                }, n.prototype.update = function() {
                    var t, e, i;
                    t = this.core.settings;
                    var o = this.core.num.cItems / 2,
                        n = this.core.num.items - o,
                        s = t.center || t.autoWidth || t.dotData ? 1 : t.dotsEach || t.items;
                    if ("page" !== t.slideBy && (t.slideBy = Math.min(t.slideBy, t.items)), t.dots)
                        for (this.pages = [], t = o, i = e = 0; n > t; t++)(e >= s || 0 === e) && (this.pages.push({
                            start: t - o,
                            end: t - o + s - 1
                        }), e = 0, ++i), e += this.core.num.merged[t]
                }, n.prototype.draw = function() {
                    var e, i, o = "",
                        n = this.core.settings,
                        s = this.core.dom.$oItems;
                    if (e = this.core.normalize(this.core.current(), !0), !n.nav || n.loop || n.navRewind || (this.controls.$previous.toggleClass("disabled", 0 >= e), this.controls.$next.toggleClass("disabled", e >= this.core.maximum())), this.controls.$previous.toggle(n.nav), this.controls.$next.toggle(n.nav), n.dots) {
                        if (e = this.pages.length - this.controls.$indicators.children().length, e > 0) {
                            for (i = 0; i < Math.abs(e); i++) o += n.dotData ? s.eq(i).data("owl-item").dot : this.template;
                            this.controls.$indicators.append(o)
                        } else 0 > e && this.controls.$indicators.children().slice(e).remove();
                        this.controls.$indicators.find(".active").removeClass("active"), this.controls.$indicators.children().eq(t.inArray(this.current(), this.pages)).addClass("active")
                    }
                    this.controls.$indicators.toggle(n.dots)
                }, n.prototype.onTrigger = function(e) {
                    var i = this.core.settings;
                    e.page = {
                        index: t.inArray(this.current(), this.pages),
                        count: this.pages.length,
                        size: i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items
                    }
                }, n.prototype.current = function() {
                    var e = this.core.normalize(this.core.current(), !0);
                    return t.grep(this.pages, function(t) {
                        return t.start <= e && t.end >= e
                    }).pop()
                }, n.prototype.getPosition = function(e) {
                    var i, o;
                    return o = this.core.settings, "page" == o.slideBy ? (i = t.inArray(this.current(), this.pages), o = this.pages.length, e ? ++i : --i, i = this.pages[(i % o + o) % o].start) : (i = this.core.normalize(this.core.current(), !0), e ? i += o.slideBy : i -= o.slideBy), i
                }, n.prototype.next = function(e) {
                    t.proxy(this.overrides.to, this.core)(this.getPosition(!0), e)
                }, n.prototype.prev = function(e) {
                    t.proxy(this.overrides.to, this.core)(this.getPosition(!1), e)
                }, n.prototype.to = function(e, i, o) {
                    o ? t.proxy(this.overrides.to, this.core)(e, i) : (o = this.pages.length, t.proxy(this.overrides.to, this.core)(this.pages[(e % o + o) % o].start, i))
                }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
            }(window.Zepto || window.jQuery, window, document),
            function(t, e, i, o) {
                var n = function(i) {
                    this.core = i, this.hashes = {}, this.$element = this.core.dom.$el, this.handlers = {
                        "initialized.owl.carousel": t.proxy(function() {
                            e.location.hash.substring(1) && t(e).trigger("hashchange.owl.navigation")
                        }, this),
                        "changed.owl.carousel": t.proxy(function(e) {
                            this.filling && (e.property.value.data("owl-item").hash = t(":first-child", e.property.value).find("[data-hash]").andSelf().data("hash"), this.hashes[e.property.value.data("owl-item").hash] = e.property.value)
                        }, this),
                        "change.owl.carousel": t.proxy(function(t) {
                            "position" == t.property.name && this.core.current() === o && "URLHash" == this.core.settings.startPosition && (t.data = this.hashes[e.location.hash.substring(1)]), this.filling = "item" == t.property.name && t.property.value && t.property.value.is(":empty")
                        }, this)
                    }, this.core.options = t.extend({}, n.Defaults, this.core.options), this.$element.on(this.handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
                        var t = e.location.hash.substring(1),
                            i = this.core.dom.$oItems,
                            i = this.hashes[t] && i.index(this.hashes[t]) || 0;
                        return t ? (this.core.dom.oStage.scrollLeft = 0, void this.core.to(i, !1, !0)) : !1
                    }, this))
                };
                n.Defaults = {
                    URLhashListener: !1
                }, n.prototype.destroy = function() {
                    var i, o;
                    t(e).off("hashchange.owl.navigation");
                    for (i in this.handlers) this.owl.dom.$el.off(i, this.handlers[i]);
                    for (o in Object.getOwnPropertyNames(this)) "function" != typeof this[o] && (this[o] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
            }(window.Zepto || window.jQuery, window, document)
        }()
    }), define("node_modules/jquery-mousewheel/jquery.mousewheel.js", function(t, e, i) {
        return function() {
            ! function(t) {
                "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof e ? i.exports = t : t(jQuery)
            }(function(t) {
                function e(e) {
                    var a = e || window.event,
                        r = l.call(arguments, 1),
                        d = 0,
                        u = 0,
                        h = 0,
                        p = 0,
                        f = 0,
                        m = 0;
                    if (e = t.event.fix(a), e.type = "mousewheel", "detail" in a && (h = -1 * a.detail), "wheelDelta" in a && (h = a.wheelDelta), "wheelDeltaY" in a && (h = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * h, h = 0), d = 0 === h ? u : h, "deltaY" in a && (h = -1 * a.deltaY, d = h), "deltaX" in a && (u = a.deltaX, 0 === h && (d = -1 * u)), 0 !== h || 0 !== u) {
                        if (1 === a.deltaMode) {
                            var g = t.data(this, "mousewheel-line-height");
                            d *= g, h *= g, u *= g
                        } else if (2 === a.deltaMode) {
                            var v = t.data(this, "mousewheel-page-height");
                            d *= v, h *= v, u *= v
                        }
                        if (p = Math.max(Math.abs(h), Math.abs(u)), (!s || s > p) && (s = p, o(a, p) && (s /= 40)), o(a, p) && (d /= 40, u /= 40, h /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), c.settings.normalizeOffset && this.getBoundingClientRect) {
                            var w = this.getBoundingClientRect();
                            f = e.clientX - w.left, m = e.clientY - w.top
                        }
                        return e.deltaX = u, e.deltaY = h, e.deltaFactor = s, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, r.unshift(e, d, u, h), n && clearTimeout(n), n = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
                    }
                }

                function i() {
                    s = null
                }

                function o(t, e) {
                    return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
                }
                var n, s, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                    r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                    l = Array.prototype.slice;
                if (t.event.fixHooks)
                    for (var d = a.length; d;) t.event.fixHooks[a[--d]] = t.event.mouseHooks;
                var c = t.event.special.mousewheel = {
                    version: "3.1.12",
                    setup: function() {
                        if (this.addEventListener)
                            for (var i = r.length; i;) this.addEventListener(r[--i], e, !1);
                        else this.onmousewheel = e;
                        t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
                    },
                    teardown: function() {
                        if (this.removeEventListener)
                            for (var i = r.length; i;) this.removeEventListener(r[--i], e, !1);
                        else this.onmousewheel = null;
                        t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                    },
                    getLineHeight: function(e) {
                        var i = t(e),
                            o = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                        return o.length || (o = t("body")), parseInt(o.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                    },
                    getPageHeight: function(e) {
                        return t(e).height()
                    },
                    settings: {
                        adjustOldDeltas: !0,
                        normalizeOffset: !0
                    }
                };
                t.fn.extend({
                    mousewheel: function(t) {
                        return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                    },
                    unmousewheel: function(t) {
                        return this.unbind("mousewheel", t)
                    }
                })
            })
        }()
    }), define("node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js", function(t, e, i) {
        return function() {
            ! function(t) {
                "undefined" != typeof i && i.exports ? i.exports = t : t(jQuery, window, document)
            }(function(e) {
                ! function(o) {
                    var n = "function" == typeof define && define.amd,
                        s = "undefined" != typeof i && i.exports,
                        a = "https:" == document.location.protocol ? "https:" : "http:",
                        r = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
                    n || (s ? t("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + a + "//" + r + "%3E%3C/script%3E"))), o()
                }(function() {
                    var t, i = "mCustomScrollbar",
                        o = "mCS",
                        n = ".mCustomScrollbar",
                        s = {
                            setTop: 0,
                            setLeft: 0,
                            axis: "y",
                            scrollbarPosition: "inside",
                            scrollInertia: 950,
                            autoDraggerLength: !0,
                            alwaysShowScrollbar: 0,
                            snapOffset: 0,
                            mouseWheel: {
                                enable: !0,
                                scrollAmount: "auto",
                                axis: "y",
                                deltaFactor: "auto",
                                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                            },
                            scrollButtons: {
                                scrollType: "stepless",
                                scrollAmount: "auto"
                            },
                            keyboard: {
                                enable: !0,
                                scrollType: "stepless",
                                scrollAmount: "auto"
                            },
                            contentTouchScroll: 25,
                            advanced: {
                                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                                updateOnContentResize: !0,
                                updateOnImageLoad: !0
                            },
                            theme: "light",
                            callbacks: {
                                onTotalScrollOffset: 0,
                                onTotalScrollBackOffset: 0,
                                alwaysTriggerOffsets: !0
                            }
                        },
                        a = 0,
                        r = {},
                        l = window.attachEvent && !window.addEventListener ? 1 : 0,
                        d = !1,
                        c = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                        u = {
                            init: function(t) {
                                var t = e.extend(!0, {}, s, t),
                                    i = h.call(this);
                                if (t.live) {
                                    var l = t.liveSelector || this.selector || n,
                                        d = e(l);
                                    if ("off" === t.live) return void f(l);
                                    r[l] = setTimeout(function() {
                                        d.mCustomScrollbar(t), "once" === t.live && d.length && f(l)
                                    }, 500)
                                } else f(l);
                                return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : m(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                                    enable: !0,
                                    scrollAmount: "auto",
                                    axis: "y",
                                    preventDefault: !1,
                                    deltaFactor: "auto",
                                    normalizeDelta: !1,
                                    invert: !1
                                }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), p(t), e(i).each(function() {
                                    var i = e(this);
                                    if (!i.data(o)) {
                                        i.data(o, {
                                            idx: ++a,
                                            opt: t,
                                            scrollRatio: {
                                                y: null,
                                                x: null
                                            },
                                            overflowed: null,
                                            contentReset: {
                                                y: null,
                                                x: null
                                            },
                                            bindEvents: !1,
                                            tweenRunning: !1,
                                            sequential: {},
                                            langDir: i.css("direction"),
                                            cbOffsets: null,
                                            trigger: null
                                        });
                                        var n = i.data(o),
                                            s = n.opt,
                                            r = i.data("mcs-axis"),
                                            l = i.data("mcs-scrollbar-position"),
                                            d = i.data("mcs-theme");
                                        r && (s.axis = r), l && (s.scrollbarPosition = l), d && (s.theme = d, p(s)), v.call(this), e("#mCSB_" + n.idx + "_container img:not(." + c[2] + ")").addClass(c[2]), u.update.call(null, i)
                                    }
                                })
                            },
                            update: function(t, i) {
                                var n = t || h.call(this);
                                return e(n).each(function() {
                                    var t = e(this);
                                    if (t.data(o)) {
                                        var n = t.data(o),
                                            s = n.opt,
                                            a = e("#mCSB_" + n.idx + "_container"),
                                            r = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                                        if (!a.length) return;
                                        n.tweenRunning && F(t), t.hasClass(c[3]) && t.removeClass(c[3]), t.hasClass(c[4]) && t.removeClass(c[4]), x.call(this), y.call(this), "y" === s.axis || s.advanced.autoExpandHorizontalScroll || a.css("width", w(a.children())), n.overflowed = _.call(this), E.call(this), s.autoDraggerLength && b.call(this), C.call(this), I.call(this);
                                        var l = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                                        "x" !== s.axis && (n.overflowed[0] ? r[0].height() > r[0].parent().height() ? T.call(this) : (U(t, l[0].toString(), {
                                            dir: "y",
                                            dur: 0,
                                            overwrite: "none"
                                        }), n.contentReset.y = null) : (T.call(this), "y" === s.axis ? P.call(this) : "yx" === s.axis && n.overflowed[1] && U(t, l[1].toString(), {
                                            dir: "x",
                                            dur: 0,
                                            overwrite: "none"
                                        }))), "y" !== s.axis && (n.overflowed[1] ? r[1].width() > r[1].parent().width() ? T.call(this) : (U(t, l[1].toString(), {
                                            dir: "x",
                                            dur: 0,
                                            overwrite: "none"
                                        }), n.contentReset.x = null) : (T.call(this), "x" === s.axis ? P.call(this) : "yx" === s.axis && n.overflowed[0] && U(t, l[0].toString(), {
                                            dir: "y",
                                            dur: 0,
                                            overwrite: "none"
                                        }))), i && n && (2 === i && s.callbacks.onImageLoad && "function" == typeof s.callbacks.onImageLoad ? s.callbacks.onImageLoad.call(this) : 3 === i && s.callbacks.onSelectorChange && "function" == typeof s.callbacks.onSelectorChange ? s.callbacks.onSelectorChange.call(this) : s.callbacks.onUpdate && "function" == typeof s.callbacks.onUpdate && s.callbacks.onUpdate.call(this)), q.call(this)
                                    }
                                })
                            },
                            scrollTo: function(t, i) {
                                if ("undefined" != typeof t && null != t) {
                                    var n = h.call(this);
                                    return e(n).each(function() {
                                        var n = e(this);
                                        if (n.data(o)) {
                                            var s = n.data(o),
                                                a = s.opt,
                                                r = {
                                                    trigger: "external",
                                                    scrollInertia: a.scrollInertia,
                                                    scrollEasing: "mcsEaseInOut",
                                                    moveDragger: !1,
                                                    timeout: 60,
                                                    callbacks: !0,
                                                    onStart: !0,
                                                    onUpdate: !0,
                                                    onComplete: !0
                                                },
                                                l = e.extend(!0, {}, r, i),
                                                d = H.call(this, t),
                                                c = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                            d[0] = Y.call(this, d[0], "y"), d[1] = Y.call(this, d[1], "x"), l.moveDragger && (d[0] *= s.scrollRatio.y, d[1] *= s.scrollRatio.x), l.dur = c, setTimeout(function() {
                                                null !== d[0] && "undefined" != typeof d[0] && "x" !== a.axis && s.overflowed[0] && (l.dir = "y", l.overwrite = "all", U(n, d[0].toString(), l)), null !== d[1] && "undefined" != typeof d[1] && "y" !== a.axis && s.overflowed[1] && (l.dir = "x", l.overwrite = "none", U(n, d[1].toString(), l))
                                            }, l.timeout)
                                        }
                                    })
                                }
                            },
                            stop: function() {
                                var t = h.call(this);
                                return e(t).each(function() {
                                    var t = e(this);
                                    t.data(o) && F(t)
                                })
                            },
                            disable: function(t) {
                                var i = h.call(this);
                                return e(i).each(function() {
                                    var i = e(this);
                                    i.data(o) && (i.data(o), q.call(this, "remove"), P.call(this), t && T.call(this), E.call(this, !0), i.addClass(c[3]))
                                })
                            },
                            destroy: function() {
                                var t = h.call(this);
                                return e(t).each(function() {
                                    var n = e(this);
                                    if (n.data(o)) {
                                        var s = n.data(o),
                                            a = s.opt,
                                            r = e("#mCSB_" + s.idx),
                                            l = e("#mCSB_" + s.idx + "_container"),
                                            d = e(".mCSB_" + s.idx + "_scrollbar");
                                        a.live && f(a.liveSelector || e(t).selector), q.call(this, "remove"), P.call(this), T.call(this), n.removeData(o), G(this, "mcs"), d.remove(), l.find("img." + c[2]).removeClass(c[2]), r.replaceWith(l.contents()), n.removeClass(i + " _" + o + "_" + s.idx + " " + c[6] + " " + c[7] + " " + c[5] + " " + c[3]).addClass(c[4])
                                    }
                                })
                            }
                        },
                        h = function() {
                            return "object" != typeof e(this) || e(this).length < 1 ? n : this
                        },
                        p = function(t) {
                            var i = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                                o = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                                n = ["minimal", "minimal-dark"],
                                s = ["minimal", "minimal-dark"],
                                a = ["minimal", "minimal-dark"];
                            t.autoDraggerLength = e.inArray(t.theme, i) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, o) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, s) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, a) > -1 ? "outside" : t.scrollbarPosition
                        },
                        f = function(t) {
                            r[t] && (clearTimeout(r[t]), G(r, t))
                        },
                        m = function(t) {
                            return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
                        },
                        g = function(t) {
                            return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
                        },
                        v = function() {
                            var t = e(this),
                                n = t.data(o),
                                s = n.opt,
                                a = s.autoExpandScrollbar ? " " + c[1] + "_expand" : "",
                                r = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + c[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + c[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                                l = "yx" === s.axis ? "mCSB_vertical_horizontal" : "x" === s.axis ? "mCSB_horizontal" : "mCSB_vertical",
                                d = "yx" === s.axis ? r[0] + r[1] : "x" === s.axis ? r[1] : r[0],
                                u = "yx" === s.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                                h = s.autoHideScrollbar ? " " + c[6] : "",
                                p = "x" !== s.axis && "rtl" === n.langDir ? " " + c[7] : "";
                            s.setWidth && t.css("width", s.setWidth), s.setHeight && t.css("height", s.setHeight), s.setLeft = "y" !== s.axis && "rtl" === n.langDir ? "989999px" : s.setLeft, t.addClass(i + " _" + o + "_" + n.idx + h + p).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + s.theme + " " + l + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + s.setTop + "; left:" + s.setLeft + ";' dir=" + n.langDir + " /></div>");
                            var f = e("#mCSB_" + n.idx),
                                m = e("#mCSB_" + n.idx + "_container");
                            "y" === s.axis || s.advanced.autoExpandHorizontalScroll || m.css("width", w(m.children())), "outside" === s.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), f.addClass("mCSB_outside").after(d)) : (f.addClass("mCSB_inside").append(d),
                                m.wrap(u)), $.call(this);
                            var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                            g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
                        },
                        w = function(t) {
                            return Math.max.apply(Math, t.map(function() {
                                return e(this).outerWidth(!0)
                            }).get())
                        },
                        y = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = i.opt,
                                s = e("#mCSB_" + i.idx + "_container");
                            n.advanced.autoExpandHorizontalScroll && "y" !== n.axis && s.css({
                                position: "absolute",
                                width: "auto"
                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                width: Math.ceil(s[0].getBoundingClientRect().right + .4) - Math.floor(s[0].getBoundingClientRect().left),
                                position: "relative"
                            }).unwrap()
                        },
                        $ = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = i.opt,
                                s = e(".mCSB_" + i.idx + "_scrollbar:first"),
                                a = et(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                                r = ["<a href='#' class='" + c[13] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[14] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[15] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[16] + "' oncontextmenu='return false;' " + a + " />"],
                                l = ["x" === n.axis ? r[2] : r[0], "x" === n.axis ? r[3] : r[1], r[2], r[3]];
                            n.scrollButtons.enable && s.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                        },
                        x = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = e("#mCSB_" + i.idx),
                                s = t.css("max-height") || "none",
                                a = -1 !== s.indexOf("%"),
                                r = t.css("box-sizing");
                            if ("none" !== s) {
                                var l = a ? t.parent().height() * parseInt(s) / 100 : parseInt(s);
                                "border-box" === r && (l -= t.innerHeight() - t.height() + (t.outerHeight() - t.innerHeight())), n.css("max-height", Math.round(l))
                            }
                        },
                        b = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                a = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")],
                                r = [n.height() / s.outerHeight(!1), n.width() / s.outerWidth(!1)],
                                d = [parseInt(a[0].css("min-height")), Math.round(r[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(r[1] * a[1].parent().width())],
                                c = l && d[1] < d[0] ? d[0] : d[1],
                                u = l && d[3] < d[2] ? d[2] : d[3];
                            a[0].css({
                                height: c,
                                "max-height": a[0].parent().height() - 10
                            }).find(".mCSB_dragger_bar").css({
                                "line-height": d[0] + "px"
                            }), a[1].css({
                                width: u,
                                "max-width": a[1].parent().width() - 10
                            })
                        },
                        C = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                a = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")],
                                r = [s.outerHeight(!1) - n.height(), s.outerWidth(!1) - n.width()],
                                l = [r[0] / (a[0].parent().height() - a[0].height()), r[1] / (a[1].parent().width() - a[1].width())];
                            i.scrollRatio = {
                                y: l[0],
                                x: l[1]
                            }
                        },
                        S = function(t, e, i) {
                            var o = i ? c[0] + "_expanded" : "",
                                n = t.closest(".mCSB_scrollTools");
                            "active" === e ? (t.toggleClass(c[0] + " " + o), n.toggleClass(c[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(c[0]), n.removeClass(c[1])) : (t.addClass(c[0]), n.addClass(c[1])))
                        },
                        _ = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                a = null == i.overflowed ? s.height() : s.outerHeight(!1),
                                r = null == i.overflowed ? s.width() : s.outerWidth(!1);
                            return [a > n.height(), r > n.width()]
                        },
                        T = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = i.opt,
                                s = e("#mCSB_" + i.idx),
                                a = e("#mCSB_" + i.idx + "_container"),
                                r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
                            if (F(t), ("x" !== n.axis && !i.overflowed[0] || "y" === n.axis && i.overflowed[0]) && (r[0].add(a).css("top", 0), U(t, "_resetY")), "y" !== n.axis && !i.overflowed[1] || "x" === n.axis && i.overflowed[1]) {
                                var l = dx = 0;
                                "rtl" === i.langDir && (l = s.width() - a.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), a.css("left", l), r[1].css("left", dx), U(t, "_resetX")
                            }
                        },
                        I = function() {
                            function t() {
                                a = setTimeout(function() {
                                    e.event.special.mousewheel ? (clearTimeout(a), O.call(i[0])) : t()
                                }, 100)
                            }
                            var i = e(this),
                                n = i.data(o),
                                s = n.opt;
                            if (!n.bindEvents) {
                                if (k.call(this), s.contentTouchScroll && V.call(this), D.call(this), s.mouseWheel.enable) {
                                    var a;
                                    t()
                                }
                                z.call(this), j.call(this), s.advanced.autoScrollOnFocus && L.call(this), s.scrollButtons.enable && R.call(this), s.keyboard.enable && N.call(this), n.bindEvents = !0
                            }
                        },
                        P = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = i.opt,
                                s = o + "_" + i.idx,
                                a = ".mCSB_" + i.idx + "_scrollbar",
                                r = e("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + a + " ." + c[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + a + ">a"),
                                l = e("#mCSB_" + i.idx + "_container");
                            n.advanced.releaseDraggableSelectors && r.add(e(n.advanced.releaseDraggableSelectors)), i.bindEvents && (e(document).unbind("." + s), r.each(function() {
                                e(this).unbind("." + s)
                            }), clearTimeout(t[0]._focusTimeout), G(t[0], "_focusTimeout"), clearTimeout(i.sequential.step), G(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), G(l[0], "onCompleteTimeout"), i.bindEvents = !1)
                        },
                        E = function(t) {
                            var i = e(this),
                                n = i.data(o),
                                s = n.opt,
                                a = e("#mCSB_" + n.idx + "_container_wrapper"),
                                r = a.length ? a : e("#mCSB_" + n.idx + "_container"),
                                l = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                                d = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                            "x" !== s.axis && (n.overflowed[0] && !t ? (l[0].add(d[0]).add(l[0].children("a")).css("display", "block"), r.removeClass(c[8] + " " + c[10])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && d[0].css("display", "none"), r.removeClass(c[10])) : (l[0].css("display", "none"), r.addClass(c[10])), r.addClass(c[8]))), "y" !== s.axis && (n.overflowed[1] && !t ? (l[1].add(d[1]).add(l[1].children("a")).css("display", "block"), r.removeClass(c[9] + " " + c[11])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && d[1].css("display", "none"), r.removeClass(c[11])) : (l[1].css("display", "none"), r.addClass(c[11])), r.addClass(c[9]))), n.overflowed[0] || n.overflowed[1] ? i.removeClass(c[5]) : i.addClass(c[5])
                        },
                        M = function(t) {
                            var e = t.type;
                            switch (e) {
                                case "pointerdown":
                                case "MSPointerDown":
                                case "pointermove":
                                case "MSPointerMove":
                                case "pointerup":
                                case "MSPointerUp":
                                    return t.target.ownerDocument !== document ? [t.originalEvent.screenY, t.originalEvent.screenX, !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                                case "touchstart":
                                case "touchmove":
                                case "touchend":
                                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                                        o = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                                    return t.target.ownerDocument !== document ? [i.screenY, i.screenX, o > 1] : [i.pageY, i.pageX, o > 1];
                                default:
                                    return [t.pageY, t.pageX, !1]
                            }
                        },
                        k = function() {
                            function t(t) {
                                var e = f.find("iframe");
                                if (e.length) {
                                    var i = t ? "auto" : "none";
                                    e.css("pointer-events", i)
                                }
                            }

                            function i(t, e, i, o) {
                                if (f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, n.attr("id") === p[1]) var s = "x",
                                    a = (n[0].offsetLeft - e + o) * c.scrollRatio.x;
                                else var s = "y",
                                    a = (n[0].offsetTop - t + i) * c.scrollRatio.y;
                                U(r, a.toString(), {
                                    dir: s,
                                    drag: !0
                                })
                            }
                            var n, s, a, r = e(this),
                                c = r.data(o),
                                u = c.opt,
                                h = o + "_" + c.idx,
                                p = ["mCSB_" + c.idx + "_dragger_vertical", "mCSB_" + c.idx + "_dragger_horizontal"],
                                f = e("#mCSB_" + c.idx + "_container"),
                                m = e("#" + p[0] + ",#" + p[1]),
                                g = u.advanced.releaseDraggableSelectors ? m.add(e(u.advanced.releaseDraggableSelectors)) : m;
                            m.bind("mousedown." + h + " touchstart." + h + " pointerdown." + h + " MSPointerDown." + h, function(i) {
                                if (i.stopImmediatePropagation(), i.preventDefault(), J(i)) {
                                    d = !0, l && (document.onselectstart = function() {
                                        return !1
                                    }), t(!1), F(r), n = e(this);
                                    var o = n.offset(),
                                        c = M(i)[0] - o.top,
                                        h = M(i)[1] - o.left,
                                        p = n.height() + o.top,
                                        f = n.width() + o.left;
                                    p > c && c > 0 && f > h && h > 0 && (s = c, a = h), S(n, "active", u.autoExpandScrollbar)
                                }
                            }).bind("touchmove." + h, function(t) {
                                t.stopImmediatePropagation(), t.preventDefault();
                                var e = n.offset(),
                                    o = M(t)[0] - e.top,
                                    r = M(t)[1] - e.left;
                                i(s, a, o, r)
                            }), e(document).bind("mousemove." + h + " pointermove." + h + " MSPointerMove." + h, function(t) {
                                if (n) {
                                    var e = n.offset(),
                                        o = M(t)[0] - e.top,
                                        r = M(t)[1] - e.left;
                                    if (s === o) return;
                                    i(s, a, o, r)
                                }
                            }).add(g).bind("mouseup." + h + " touchend." + h + " pointerup." + h + " MSPointerUp." + h, function(e) {
                                n && (S(n, "active", u.autoExpandScrollbar), n = null), d = !1, l && (document.onselectstart = null), t(!0)
                            })
                        },
                        V = function() {
                            function i(e) {
                                if (!tt(e) || d || M(e)[2]) return void(t = 0);
                                t = 1, x = 0, b = 0;
                                var i = P.offset();
                                c = M(e)[0] - i.top, u = M(e)[1] - i.left, B = [M(e)[0], M(e)[1]]
                            }

                            function n(t) {
                                if (tt(t) && !d && !M(t)[2] && (t.stopImmediatePropagation(), !b || x)) {
                                    m = K();
                                    var e = I.offset(),
                                        i = M(t)[0] - e.top,
                                        o = M(t)[1] - e.left,
                                        n = "mcsLinearOut";
                                    if (k.push(i), V.push(o), B[2] = Math.abs(M(t)[0] - B[0]), B[3] = Math.abs(M(t)[1] - B[1]), S.overflowed[0]) var s = E[0].parent().height() - E[0].height(),
                                        a = c - i > 0 && i - c > -(s * S.scrollRatio.y) && (2 * B[3] < B[2] || "yx" === _.axis);
                                    if (S.overflowed[1]) var r = E[1].parent().width() - E[1].width(),
                                        h = u - o > 0 && o - u > -(r * S.scrollRatio.x) && (2 * B[2] < B[3] || "yx" === _.axis);
                                    a || h ? (t.preventDefault(), x = 1) : b = 1, y = "yx" === _.axis ? [c - i, u - o] : "x" === _.axis ? [null, u - o] : [c - i, null], P[0].idleTimer = 250, S.overflowed[0] && l(y[0], D, n, "y", "all", !0), S.overflowed[1] && l(y[1], D, n, "x", O, !0)
                                }
                            }

                            function s(e) {
                                if (!tt(e) || d || M(e)[2]) return void(t = 0);
                                t = 1, e.stopImmediatePropagation(), F(C), f = K();
                                var i = I.offset();
                                h = M(e)[0] - i.top, p = M(e)[1] - i.left, k = [], V = []
                            }

                            function a(t) {
                                if (tt(t) && !d && !M(t)[2]) {
                                    t.stopImmediatePropagation(), x = 0, b = 0, g = K();
                                    var e = I.offset(),
                                        i = M(t)[0] - e.top,
                                        o = M(t)[1] - e.left;
                                    if (!(g - m > 30)) {
                                        w = 1e3 / (g - f);
                                        var n = "mcsEaseOut",
                                            s = 2.5 > w,
                                            a = s ? [k[k.length - 2], V[V.length - 2]] : [0, 0];
                                        v = s ? [i - a[0], o - a[1]] : [i - h, o - p];
                                        var c = [Math.abs(v[0]), Math.abs(v[1])];
                                        w = s ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [w, w];
                                        var u = [Math.abs(P[0].offsetTop) - v[0] * r(c[0] / w[0], w[0]), Math.abs(P[0].offsetLeft) - v[1] * r(c[1] / w[1], w[1])];
                                        y = "yx" === _.axis ? [u[0], u[1]] : "x" === _.axis ? [null, u[1]] : [u[0], null], $ = [4 * c[0] + _.scrollInertia, 4 * c[1] + _.scrollInertia];
                                        var C = parseInt(_.contentTouchScroll) || 0;
                                        y[0] = c[0] > C ? y[0] : 0, y[1] = c[1] > C ? y[1] : 0, S.overflowed[0] && l(y[0], $[0], n, "y", O, !1), S.overflowed[1] && l(y[1], $[1], n, "x", O, !1)
                                    }
                                }
                            }

                            function r(t, e) {
                                var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                                return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
                            }

                            function l(t, e, i, o, n, s) {
                                t && U(C, t.toString(), {
                                    dur: e,
                                    scrollEasing: i,
                                    dir: o,
                                    overwrite: n,
                                    drag: s
                                })
                            }
                            var c, u, h, p, f, m, g, v, w, y, $, x, b, C = e(this),
                                S = C.data(o),
                                _ = S.opt,
                                T = o + "_" + S.idx,
                                I = e("#mCSB_" + S.idx),
                                P = e("#mCSB_" + S.idx + "_container"),
                                E = [e("#mCSB_" + S.idx + "_dragger_vertical"), e("#mCSB_" + S.idx + "_dragger_horizontal")],
                                k = [],
                                V = [],
                                D = 0,
                                O = "yx" === _.axis ? "none" : "all",
                                B = [],
                                z = P.find("iframe"),
                                L = ["touchstart." + T + " pointerdown." + T + " MSPointerDown." + T, "touchmove." + T + " pointermove." + T + " MSPointerMove." + T, "touchend." + T + " pointerup." + T + " MSPointerUp." + T];
                            P.bind(L[0], function(t) {
                                i(t)
                            }).bind(L[1], function(t) {
                                n(t)
                            }), I.bind(L[0], function(t) {
                                s(t)
                            }).bind(L[2], function(t) {
                                a(t)
                            }), z.length && z.each(function() {
                                e(this).load(function() {
                                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(L[0], function(t) {
                                        i(t), s(t)
                                    }).bind(L[1], function(t) {
                                        n(t)
                                    }).bind(L[2], function(t) {
                                        a(t)
                                    })
                                })
                            })
                        },
                        D = function() {
                            function i() {
                                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                            }

                            function n(t, e, i) {
                                c.type = i && s ? "stepped" : "stepless", c.scrollAmount = 10, W(a, t, e, "mcsLinearOut", i ? 60 : null)
                            }
                            var s, a = e(this),
                                r = a.data(o),
                                l = r.opt,
                                c = r.sequential,
                                u = o + "_" + r.idx,
                                h = e("#mCSB_" + r.idx + "_container"),
                                p = h.parent();
                            h.bind("mousedown." + u, function(e) {
                                t || s || (s = 1, d = !0)
                            }).add(document).bind("mousemove." + u, function(e) {
                                if (!t && s && i()) {
                                    var o = h.offset(),
                                        a = M(e)[0] - o.top + h[0].offsetTop,
                                        d = M(e)[1] - o.left + h[0].offsetLeft;
                                    a > 0 && a < p.height() && d > 0 && d < p.width() ? c.step && n("off", null, "stepped") : ("x" !== l.axis && r.overflowed[0] && (0 > a ? n("on", 38) : a > p.height() && n("on", 40)), "y" !== l.axis && r.overflowed[1] && (0 > d ? n("on", 37) : d > p.width() && n("on", 39)))
                                }
                            }).bind("mouseup." + u, function(e) {
                                t || (s && (s = 0, n("off", null)), d = !1)
                            })
                        },
                        O = function() {
                            function t(t, o) {
                                if (F(i), !B(i, t.target)) {
                                    var a = "auto" !== s.mouseWheel.deltaFactor ? parseInt(s.mouseWheel.deltaFactor) : l && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
                                    if ("x" === s.axis || "x" === s.mouseWheel.axis) var c = "x",
                                        u = [Math.round(a * n.scrollRatio.x), parseInt(s.mouseWheel.scrollAmount)],
                                        h = "auto" !== s.mouseWheel.scrollAmount ? u[1] : u[0] >= r.width() ? .9 * r.width() : u[0],
                                        p = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                                        f = d[1][0].offsetLeft,
                                        m = d[1].parent().width() - d[1].width(),
                                        g = t.deltaX || t.deltaY || o;
                                    else var c = "y",
                                        u = [Math.round(a * n.scrollRatio.y), parseInt(s.mouseWheel.scrollAmount)],
                                        h = "auto" !== s.mouseWheel.scrollAmount ? u[1] : u[0] >= r.height() ? .9 * r.height() : u[0],
                                        p = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                                        f = d[0][0].offsetTop,
                                        m = d[0].parent().height() - d[0].height(),
                                        g = t.deltaY || o;
                                    "y" === c && !n.overflowed[0] || "x" === c && !n.overflowed[1] || (s.mouseWheel.invert && (g = -g), s.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== f || 0 > g && f !== m || s.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), U(i, (p - g * h).toString(), {
                                        dir: c
                                    }))
                                }
                            }
                            var i = e(this),
                                n = i.data(o),
                                s = n.opt,
                                a = o + "_" + n.idx,
                                r = e("#mCSB_" + n.idx),
                                d = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                                c = e("#mCSB_" + n.idx + "_container").find("iframe");
                            n && (c.length && c.each(function() {
                                e(this).load(function() {
                                    A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function(e, i) {
                                        t(e, i)
                                    })
                                })
                            }), r.bind("mousewheel." + a, function(e, i) {
                                t(e, i)
                            }))
                        },
                        A = function(t) {
                            var e = null;
                            try {
                                var i = t.contentDocument || t.contentWindow.document;
                                e = i.body.innerHTML
                            } catch (o) {}
                            return null !== e
                        },
                        B = function(t, i) {
                            var n = i.nodeName.toLowerCase(),
                                s = t.data(o).opt.mouseWheel.disableOver,
                                a = ["select", "textarea"];
                            return e.inArray(n, s) > -1 && !(e.inArray(n, a) > -1 && !e(i).is(":focus"))
                        },
                        z = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = o + "_" + i.idx,
                                s = e("#mCSB_" + i.idx + "_container"),
                                a = s.parent(),
                                r = e(".mCSB_" + i.idx + "_scrollbar ." + c[12]);
                            r.bind("touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function(t) {
                                d = !0
                            }).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function(t) {
                                d = !1
                            }).bind("click." + n, function(o) {
                                if (e(o.target).hasClass(c[12]) || e(o.target).hasClass("mCSB_draggerRail")) {
                                    F(t);
                                    var n = e(this),
                                        r = n.find(".mCSB_dragger");
                                    if (n.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                        if (!i.overflowed[1]) return;
                                        var l = "x",
                                            d = o.pageX > r.offset().left ? -1 : 1,
                                            u = Math.abs(s[0].offsetLeft) - .9 * d * a.width()
                                    } else {
                                        if (!i.overflowed[0]) return;
                                        var l = "y",
                                            d = o.pageY > r.offset().top ? -1 : 1,
                                            u = Math.abs(s[0].offsetTop) - .9 * d * a.height()
                                    }
                                    U(t, u.toString(), {
                                        dir: l,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            })
                        },
                        L = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = i.opt,
                                s = o + "_" + i.idx,
                                a = e("#mCSB_" + i.idx + "_container"),
                                r = a.parent();
                            a.bind("focusin." + s, function(i) {
                                var o = e(document.activeElement),
                                    s = a.find(".mCustomScrollBox").length,
                                    l = 0;
                                o.is(n.advanced.autoScrollOnFocus) && (F(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = s ? (l + 17) * s : 0, t[0]._focusTimeout = setTimeout(function() {
                                    var e = [it(o)[0], it(o)[1]],
                                        i = [a[0].offsetTop, a[0].offsetLeft],
                                        s = [i[0] + e[0] >= 0 && i[0] + e[0] < r.height() - o.outerHeight(!1), i[1] + e[1] >= 0 && i[0] + e[1] < r.width() - o.outerWidth(!1)],
                                        d = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                                    "x" === n.axis || s[0] || U(t, e[0].toString(), {
                                        dir: "y",
                                        scrollEasing: "mcsEaseInOut",
                                        overwrite: d,
                                        dur: l
                                    }), "y" === n.axis || s[1] || U(t, e[1].toString(), {
                                        dir: "x",
                                        scrollEasing: "mcsEaseInOut",
                                        overwrite: d,
                                        dur: l
                                    })
                                }, t[0]._focusTimer))
                            })
                        },
                        j = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = o + "_" + i.idx,
                                s = e("#mCSB_" + i.idx + "_container").parent();
                            s.bind("scroll." + n, function(t) {
                                (0 !== s.scrollTop() || 0 !== s.scrollLeft()) && e(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
                            })
                        },
                        R = function() {
                            var t = e(this),
                                i = t.data(o),
                                n = i.opt,
                                s = i.sequential,
                                a = o + "_" + i.idx,
                                r = ".mCSB_" + i.idx + "_scrollbar",
                                l = e(r + ">a");
                            l.bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function(o) {
                                function a(e, i) {
                                    s.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount, W(t, e, i)
                                }
                                if (o.preventDefault(), J(o)) {
                                    var r = e(this).attr("class");
                                    switch (s.type = n.scrollButtons.scrollType, o.type) {
                                        case "mousedown":
                                        case "touchstart":
                                        case "pointerdown":
                                        case "MSPointerDown":
                                            if ("stepped" === s.type) return;
                                            d = !0, i.tweenRunning = !1, a("on", r);
                                            break;
                                        case "mouseup":
                                        case "touchend":
                                        case "pointerup":
                                        case "MSPointerUp":
                                        case "mouseout":
                                        case "pointerout":
                                        case "MSPointerOut":
                                            if ("stepped" === s.type) return;
                                            d = !1, s.dir && a("off", r);
                                            break;
                                        case "click":
                                            if ("stepped" !== s.type || i.tweenRunning) return;
                                            a("on", r)
                                    }
                                }
                            })
                        },
                        N = function() {
                            function t(t) {
                                function o(t, e) {
                                    a.type = s.keyboard.scrollType, a.scrollAmount = s.snapAmount || s.keyboard.scrollAmount, "stepped" === a.type && n.tweenRunning || W(i, t, e)
                                }
                                switch (t.type) {
                                    case "blur":
                                        n.tweenRunning && a.dir && o("off", null);
                                        break;
                                    case "keydown":
                                    case "keyup":
                                        var r = t.keyCode ? t.keyCode : t.which,
                                            l = "on";
                                        if ("x" !== s.axis && (38 === r || 40 === r) || "y" !== s.axis && (37 === r || 39 === r)) {
                                            if ((38 === r || 40 === r) && !n.overflowed[0] || (37 === r || 39 === r) && !n.overflowed[1]) return;
                                            "keyup" === t.type && (l = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), o(l, r))
                                        } else if (33 === r || 34 === r) {
                                            if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                                F(i);
                                                var h = 34 === r ? -1 : 1;
                                                if ("x" === s.axis || "yx" === s.axis && n.overflowed[1] && !n.overflowed[0]) var p = "x",
                                                    f = Math.abs(d[0].offsetLeft) - .9 * h * c.width();
                                                else var p = "y",
                                                    f = Math.abs(d[0].offsetTop) - .9 * h * c.height();
                                                U(i, f.toString(), {
                                                    dir: p,
                                                    scrollEasing: "mcsEaseInOut"
                                                })
                                            }
                                        } else if ((35 === r || 36 === r) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                            if ("x" === s.axis || "yx" === s.axis && n.overflowed[1] && !n.overflowed[0]) var p = "x",
                                                f = 35 === r ? Math.abs(c.width() - d.outerWidth(!1)) : 0;
                                            else var p = "y",
                                                f = 35 === r ? Math.abs(c.height() - d.outerHeight(!1)) : 0;
                                            U(i, f.toString(), {
                                                dir: p,
                                                scrollEasing: "mcsEaseInOut"
                                            })
                                        }
                                }
                            }
                            var i = e(this),
                                n = i.data(o),
                                s = n.opt,
                                a = n.sequential,
                                r = o + "_" + n.idx,
                                l = e("#mCSB_" + n.idx),
                                d = e("#mCSB_" + n.idx + "_container"),
                                c = d.parent(),
                                u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                                h = d.find("iframe"),
                                p = ["blur." + r + " keydown." + r + " keyup." + r];
                            h.length && h.each(function() {
                                e(this).load(function() {
                                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(p[0], function(e) {
                                        t(e)
                                    })
                                })
                            }), l.attr("tabindex", "0").bind(p[0], function(e) {
                                t(e)
                            })
                        },
                        W = function(t, i, n, s, a) {
                            function r(e) {
                                var i = "stepped" !== h.type,
                                    o = a ? a : e ? i ? m / 1.5 : g : 1e3 / 60,
                                    n = e ? i ? 7.5 : 40 : 2.5,
                                    l = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
                                    c = [d.scrollRatio.y > 10 ? 10 : d.scrollRatio.y, d.scrollRatio.x > 10 ? 10 : d.scrollRatio.x],
                                    u = "x" === h.dir[0] ? l[1] + h.dir[1] * c[1] * n : l[0] + h.dir[1] * c[0] * n,
                                    f = "x" === h.dir[0] ? l[1] + h.dir[1] * parseInt(h.scrollAmount) : l[0] + h.dir[1] * parseInt(h.scrollAmount),
                                    v = "auto" !== h.scrollAmount ? f : u,
                                    w = s ? s : e ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                                    y = e ? !0 : !1;
                                return e && 17 > o && (v = "x" === h.dir[0] ? l[1] : l[0]), U(t, v.toString(), {
                                    dir: h.dir[0],
                                    scrollEasing: w,
                                    dur: o,
                                    onComplete: y
                                }), e ? void(h.dir = !1) : (clearTimeout(h.step), void(h.step = setTimeout(function() {
                                    r()
                                }, o)))
                            }

                            function l() {
                                clearTimeout(h.step), G(h, "step"), F(t)
                            }
                            var d = t.data(o),
                                u = d.opt,
                                h = d.sequential,
                                p = e("#mCSB_" + d.idx + "_container"),
                                f = "stepped" === h.type ? !0 : !1,
                                m = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                                g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                            switch (i) {
                                case "on":
                                    if (h.dir = [n === c[16] || n === c[15] || 39 === n || 37 === n ? "x" : "y", n === c[13] || n === c[15] || 38 === n || 37 === n ? -1 : 1], F(t), et(n) && "stepped" === h.type) return;
                                    r(f);
                                    break;
                                case "off":
                                    l(), (f || d.tweenRunning && h.dir) && r(!0)
                            }
                        },
                        H = function(t) {
                            var i = e(this).data(o).opt,
                                n = [];
                            return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === i.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === i.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === i.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
                        },
                        Y = function(t, i) {
                            if (null != t && "undefined" != typeof t) {
                                var n = e(this),
                                    s = n.data(o),
                                    a = s.opt,
                                    r = e("#mCSB_" + s.idx + "_container"),
                                    l = r.parent(),
                                    d = typeof t;
                                i || (i = "x" === a.axis ? "x" : "y");
                                var c = "x" === i ? r.outerWidth(!1) : r.outerHeight(!1),
                                    h = "x" === i ? r[0].offsetLeft : r[0].offsetTop,
                                    p = "x" === i ? "left" : "top";
                                switch (d) {
                                    case "function":
                                        return t();
                                    case "object":
                                        var f = t.jquery ? t : e(t);
                                        if (!f.length) return;
                                        return "x" === i ? it(f)[1] : it(f)[0];
                                    case "string":
                                    case "number":
                                        if (et(t)) return Math.abs(t);
                                        if (-1 !== t.indexOf("%")) return Math.abs(c * parseInt(t) / 100);
                                        if (-1 !== t.indexOf("-=")) return Math.abs(h - parseInt(t.split("-=")[1]));
                                        if (-1 !== t.indexOf("+=")) {
                                            var m = h + parseInt(t.split("+=")[1]);
                                            return m >= 0 ? 0 : Math.abs(m)
                                        }
                                        if (-1 !== t.indexOf("px") && et(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                                        if ("top" === t || "left" === t) return 0;
                                        if ("bottom" === t) return Math.abs(l.height() - r.outerHeight(!1));
                                        if ("right" === t) return Math.abs(l.width() - r.outerWidth(!1));
                                        if ("first" === t || "last" === t) {
                                            var f = r.find(":" + t);
                                            return "x" === i ? it(f)[1] : it(f)[0]
                                        }
                                        return e(t).length ? "x" === i ? it(e(t))[1] : it(e(t))[0] : (r.css(p, t), void u.update.call(null, n[0]))
                                }
                            }
                        },
                        q = function(t) {
                            function i() {
                                clearTimeout(p[0].autoUpdate), p[0].autoUpdate = setTimeout(function() {
                                    return h.advanced.updateOnSelectorChange && (f = a(), f !== $) ? (r(3), void($ = f)) : (h.advanced.updateOnContentResize && (m = [p.outerHeight(!1), p.outerWidth(!1), v.height(), v.width(), y()[0], y()[1]], (m[0] !== x[0] || m[1] !== x[1] || m[2] !== x[2] || m[3] !== x[3] || m[4] !== x[4] || m[5] !== x[5]) && (r(m[0] !== x[0] || m[1] !== x[1]), x = m)), h.advanced.updateOnImageLoad && (g = n(), g !== b && (p.find("img").each(function() {
                                        s(this)
                                    }), b = g)), void((h.advanced.updateOnSelectorChange || h.advanced.updateOnContentResize || h.advanced.updateOnImageLoad) && i()))
                                }, 60)
                            }

                            function n() {
                                var t = 0;
                                return h.advanced.updateOnImageLoad && (t = p.find("img").length), t
                            }

                            function s(t) {
                                function i(t, e) {
                                    return function() {
                                        return e.apply(t, arguments)
                                    }
                                }

                                function o() {
                                    this.onload = null, e(t).addClass(c[2]), r(2)
                                }
                                if (e(t).hasClass(c[2])) return void r();
                                var n = new Image;
                                n.onload = i(n, o), n.src = t.src
                            }

                            function a() {
                                h.advanced.updateOnSelectorChange === !0 && (h.advanced.updateOnSelectorChange = "*");
                                var t = 0,
                                    i = p.find(h.advanced.updateOnSelectorChange);
                                return h.advanced.updateOnSelectorChange && i.length > 0 && i.each(function() {
                                    t += e(this).height() + e(this).width()
                                }), t
                            }

                            function r(t) {
                                clearTimeout(p[0].autoUpdate), u.update.call(null, l[0], t)
                            }
                            var l = e(this),
                                d = l.data(o),
                                h = d.opt,
                                p = e("#mCSB_" + d.idx + "_container");
                            if (t) return clearTimeout(p[0].autoUpdate), void G(p[0], "autoUpdate");
                            var f, m, g, v = p.parent(),
                                w = [e("#mCSB_" + d.idx + "_scrollbar_vertical"), e("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                                y = function() {
                                    return [w[0].is(":visible") ? w[0].outerHeight(!0) : 0, w[1].is(":visible") ? w[1].outerWidth(!0) : 0]
                                },
                                $ = a(),
                                x = [p.outerHeight(!1), p.outerWidth(!1), v.height(), v.width(), y()[0], y()[1]],
                                b = n();
                            i()
                        },
                        X = function(t, e, i) {
                            return Math.round(t / e) * e - i
                        },
                        F = function(t) {
                            var i = t.data(o),
                                n = e("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
                            n.each(function() {
                                Z.call(this)
                            })
                        },
                        U = function(t, i, n) {
                            function s(t) {
                                return l && d.callbacks[t] && "function" == typeof d.callbacks[t]
                            }

                            function a() {
                                return [d.callbacks.alwaysTriggerOffsets || y >= $[0] + b, d.callbacks.alwaysTriggerOffsets || -C >= y]
                            }

                            function r() {
                                var e = [p[0].offsetTop, p[0].offsetLeft],
                                    i = [v[0].offsetTop, v[0].offsetLeft],
                                    o = [p.outerHeight(!1), p.outerWidth(!1)],
                                    s = [h.height(), h.width()];
                                t[0].mcs = {
                                    content: p,
                                    top: e[0],
                                    left: e[1],
                                    draggerTop: i[0],
                                    draggerLeft: i[1],
                                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(o[0]) - s[0])),
                                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(o[1]) - s[1])),
                                    direction: n.dir
                                }
                            }
                            var l = t.data(o),
                                d = l.opt,
                                c = {
                                    trigger: "internal",
                                    dir: "y",
                                    scrollEasing: "mcsEaseOut",
                                    drag: !1,
                                    dur: d.scrollInertia,
                                    overwrite: "all",
                                    callbacks: !0,
                                    onStart: !0,
                                    onUpdate: !0,
                                    onComplete: !0
                                },
                                n = e.extend(c, n),
                                u = [n.dur, n.drag ? 0 : n.dur],
                                h = e("#mCSB_" + l.idx),
                                p = e("#mCSB_" + l.idx + "_container"),
                                f = p.parent(),
                                m = d.callbacks.onTotalScrollOffset ? H.call(t, d.callbacks.onTotalScrollOffset) : [0, 0],
                                g = d.callbacks.onTotalScrollBackOffset ? H.call(t, d.callbacks.onTotalScrollBackOffset) : [0, 0];
                            if (l.trigger = n.trigger, (0 !== f.scrollTop() || 0 !== f.scrollLeft()) && (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== i || l.contentReset.y || (s("onOverflowYNone") && d.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== i || l.contentReset.x || (s("onOverflowXNone") && d.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                                switch (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (s("onOverflowY") && d.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (s("onOverflowX") && d.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), d.snapAmount && (i = X(i, d.snapAmount, d.snapOffset)), n.dir) {
                                    case "x":
                                        var v = e("#mCSB_" + l.idx + "_dragger_horizontal"),
                                            w = "left",
                                            y = p[0].offsetLeft,
                                            $ = [h.width() - p.outerWidth(!1), v.parent().width() - v.width()],
                                            x = [i, 0 === i ? 0 : i / l.scrollRatio.x],
                                            b = m[1],
                                            C = g[1],
                                            _ = b > 0 ? b / l.scrollRatio.x : 0,
                                            T = C > 0 ? C / l.scrollRatio.x : 0;
                                        break;
                                    case "y":
                                        var v = e("#mCSB_" + l.idx + "_dragger_vertical"),
                                            w = "top",
                                            y = p[0].offsetTop,
                                            $ = [h.height() - p.outerHeight(!1), v.parent().height() - v.height()],
                                            x = [i, 0 === i ? 0 : i / l.scrollRatio.y],
                                            b = m[0],
                                            C = g[0],
                                            _ = b > 0 ? b / l.scrollRatio.y : 0,
                                            T = C > 0 ? C / l.scrollRatio.y : 0
                                }
                                x[1] < 0 || 0 === x[0] && 0 === x[1] ? x = [0, 0] : x[1] >= $[1] ? x = [$[0], $[1]] : x[0] = -x[0], t[0].mcs || (r(), s("onInit") && d.callbacks.onInit.call(t[0])), clearTimeout(p[0].onCompleteTimeout), (l.tweenRunning || !(0 === y && x[0] >= 0 || y === $[0] && x[0] <= $[0])) && (Q(v[0], w, Math.round(x[1]), u[1], n.scrollEasing), Q(p[0], w, Math.round(x[0]), u[0], n.scrollEasing, n.overwrite, {
                                    onStart: function() {
                                        n.callbacks && n.onStart && !l.tweenRunning && (s("onScrollStart") && (r(), d.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, S(v), l.cbOffsets = a())
                                    },
                                    onUpdate: function() {
                                        n.callbacks && n.onUpdate && s("whileScrolling") && (r(), d.callbacks.whileScrolling.call(t[0]))
                                    },
                                    onComplete: function() {
                                        if (n.callbacks && n.onComplete) {
                                            "yx" === d.axis && clearTimeout(p[0].onCompleteTimeout);
                                            var e = p[0].idleTimer || 0;
                                            p[0].onCompleteTimeout = setTimeout(function() {
                                                s("onScroll") && (r(), d.callbacks.onScroll.call(t[0])), s("onTotalScroll") && x[1] >= $[1] - _ && l.cbOffsets[0] && (r(), d.callbacks.onTotalScroll.call(t[0])), s("onTotalScrollBack") && x[1] <= T && l.cbOffsets[1] && (r(), d.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, p[0].idleTimer = 0, S(v, "hide")
                                            }, e)
                                        }
                                    }
                                }))
                            }
                        },
                        Q = function(t, e, i, o, n, s, a) {
                            function r() {
                                x.stop || (w || f.call(), w = K() - v, l(), w >= x.time && (x.time = w > x.time ? w + h - (w - x.time) : w + h - 1, x.time < w + 1 && (x.time = w + 1)), x.time < o ? x.id = p(r) : g.call())
                            }

                            function l() {
                                o > 0 ? (x.currVal = u(x.time, y, b, o, n), $[e] = Math.round(x.currVal) + "px") : $[e] = i + "px", m.call()
                            }

                            function d() {
                                h = 1e3 / 60, x.time = w + h, p = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                                    return l(), setTimeout(t, .01)
                                }, x.id = p(r)
                            }

                            function c() {
                                null != x.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(x.id) : clearTimeout(x.id), x.id = null)
                            }

                            function u(t, e, i, o, n) {
                                switch (n) {
                                    case "linear":
                                    case "mcsLinear":
                                        return i * t / o + e;
                                    case "mcsLinearOut":
                                        return t /= o, t--, i * Math.sqrt(1 - t * t) + e;
                                    case "easeInOutSmooth":
                                        return t /= o / 2, 1 > t ? i / 2 * t * t + e : (t--, -i / 2 * (t * (t - 2) - 1) + e);
                                    case "easeInOutStrong":
                                        return t /= o / 2, 1 > t ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (-Math.pow(2, -10 * t) + 2) + e);
                                    case "easeInOut":
                                    case "mcsEaseInOut":
                                        return t /= o / 2, 1 > t ? i / 2 * t * t * t + e : (t -= 2, i / 2 * (t * t * t + 2) + e);
                                    case "easeOutSmooth":
                                        return t /= o, t--, -i * (t * t * t * t - 1) + e;
                                    case "easeOutStrong":
                                        return i * (-Math.pow(2, -10 * t / o) + 1) + e;
                                    case "easeOut":
                                    case "mcsEaseOut":
                                    default:
                                        var s = (t /= o) * t,
                                            a = s * t;
                                        return e + i * (.499999999999997 * a * s + -2.5 * s * s + 5.5 * a + -6.5 * s + 4 * t)
                                }
                            }
                            t._mTween || (t._mTween = {
                                top: {},
                                left: {}
                            });
                            var h, p, a = a || {},
                                f = a.onStart || function() {},
                                m = a.onUpdate || function() {},
                                g = a.onComplete || function() {},
                                v = K(),
                                w = 0,
                                y = t.offsetTop,
                                $ = t.style,
                                x = t._mTween[e];
                            "left" === e && (y = t.offsetLeft);
                            var b = i - y;
                            x.stop = 0, "none" !== s && c(), d()
                        },
                        K = function() {
                            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                        },
                        Z = function() {
                            var t = this;
                            t._mTween || (t._mTween = {
                                top: {},
                                left: {}
                            });
                            for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                                var o = e[i];
                                t._mTween[o].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[o].id) : clearTimeout(t._mTween[o].id), t._mTween[o].id = null, t._mTween[o].stop = 1)
                            }
                        },
                        G = function(t, e) {
                            try {
                                delete t[e]
                            } catch (i) {
                                t[e] = null
                            }
                        },
                        J = function(t) {
                            return !(t.which && 1 !== t.which)
                        },
                        tt = function(t) {
                            var e = t.originalEvent.pointerType;
                            return !(e && "touch" !== e && 2 !== e)
                        },
                        et = function(t) {
                            return !isNaN(parseFloat(t)) && isFinite(t)
                        },
                        it = function(t) {
                            var e = t.parents(".mCSB_container");
                            return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
                        };
                    e.fn[i] = function(t) {
                        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
                    }, e[i] = function(t) {
                        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
                    }, e[i].defaults = s, window[i] = !0, e(window).load(function() {
                        e(n)[i](), e.extend(e.expr[":"], {
                            mcsInView: e.expr[":"].mcsInView || function(t) {
                                var i, o, n = e(t),
                                    s = n.parents(".mCSB_container");
                                return s.length ? (i = s.parent(), o = [s[0].offsetTop, s[0].offsetLeft], o[0] + it(n)[0] >= 0 && o[0] + it(n)[0] < i.height() - n.outerHeight(!1) && o[1] + it(n)[1] >= 0 && o[1] + it(n)[1] < i.width() - n.outerWidth(!1)) : void 0
                            },
                            mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                                var i = e(t).data(o);
                                return i ? i.overflowed[0] || i.overflowed[1] : void 0
                            }
                        })
                    })
                })
            })
        }()
    }), define("src/modules/videos/players/youtube_player.js", function(t, e, i) {
        return function() {
            "use strict";
            var e = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                i = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                o = t("../../../core/scripts/utils.js");
            define("youtube_player", function() {
                var t = function() {
                    function t(e, o) {
                        i(this, t), this.$root = e, this.$play = null, this.$videoWrapper = null, this.videoKey = null, this.activeVideo = null, this.endedCallback = null, this.playingCallback = o, this.ytplayer = null, this.setup = !1, this.init()
                    }
                    return e(t, {
                        getVideoKey: {
                            value: function() {
                                var t = this;
                                return t.videoKey
                            }
                        },
                        setupYoutubePlayer: {
                            value: function(t) {
                                var e = this;
                                e.setup = !0, o.onceYouTubeReady(function(i) {
                                    var o = e.$play.attr("data-video-name"),
                                        n = e.$play.attr("data-youtube-id"),
                                        s = e.$play.attr("data-video-order"),
                                        a = e.$play.attr("data-module-name"),
                                        r = $("<div></div>"),
                                        l = e.$root.find(".video-holder"),
                                        d = l.find(".video");
                                    d.append(r), e.ytplayer = new i.Player(r[0], {
                                        videoId: n,
                                        wmode: "transparent",
                                        playerVars: {
                                            autoplay: 0,
                                            showinfo: 0,
                                            wmode: "transparent",
                                            rel: 0
                                        },
                                        events: {
                                            onReady: function() {
                                                $.isFunction(t) && t()
                                            },
                                            onStateChange: function(t) {
                                                t.data === i.PlayerState.PLAYING ? e.activeVideo || (e.activeVideo = n, e.$root.addClass("playing"), e.resizeVideoWrapper(e.$videoWrapper), window.MainAnalytics && window.MainAnalytics.trackVideo(o, window.MainAnalytics.VIDEO_EVENT_PLAY, s, a), $.isFunction(e.playingCallback) && e.playingCallback(e)) : t.data === i.PlayerState.ENDED && (e.activeVideo = null, window.MainAnalytics && window.MainAnalytics.trackVideo(o, window.MainAnalytics.VIDEO_EVENT_COMPLETION, s, a), e.animateFromVideoHeight(e.$videoWrapper), e.$root.removeClass("playing"), $.isFunction(e.endedCallback) && e.endedCallback())
                                            }
                                        }
                                    })
                                })
                            }
                        },
                        init: {
                            value: function() {
                                var t = this;
                                t.$play = t.$root.find(".play"), t.$videoWrapper = t.$root.find(".video-wrapper"), t.videoKey = "youtube_" + t.$play.attr("data-slideindex"), navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/) && t.setupYoutubePlayer()
                            }
                        },
                        play: {
                            value: function(t) {
                                var e = this;
                                e.endedCallback = t, e.setup ? e.ytplayer.playVideo() : e.setupYoutubePlayer(function() {
                                    e.ytplayer.playVideo()
                                })
                            }
                        },
                        close: {
                            value: function() {
                                var t = this;
                                if (t.animateFromVideoHeight(t.$videoWrapper), t.$root.removeClass("playing"), t.activeVideo = null, navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/)) {
                                    var e = t.$root.find("iframe");
                                    e.attr("src", e.attr("src"))
                                } else t.setup = !1, t.$root.find("iframe").remove()
                            }
                        },
                        animateToVideoHeight: {
                            value: function(t, e, i) {
                                var o = t.height();
                                t.data("original-height", o), i ? t.css({
                                    height: e + "px"
                                }) : t.animate({
                                    height: e + "px"
                                })
                            }
                        },
                        animateFromVideoHeight: {
                            value: function(t) {
                                var e = t.data("original-height");
                                t.animate({
                                    height: e + "px"
                                }, function() {
                                    t.css("height", "")
                                })
                            }
                        },
                        resize: {
                            value: function() {
                                this.resizeVideoWrapper(this.$videoWrapper, !0)
                            }
                        },
                        resizeVideoWrapper: {
                            value: function(t, e) {
                                var i = this,
                                    o = 9 / 16,
                                    n = t.width(),
                                    s = Math.round(n * o);
                                i.animateToVideoHeight(t, s, e)
                            }
                        }
                    }), t
                }();
                return t
            })
        }()
    }), define("src/modules/videos/players/ooyala_player.js", function(t, e, i) {
        return function() {
            "use strict";
            var t = function() {
                    function t(t, e) {
                        for (var i in e) {
                            var o = e[i];
                            o.configurable = !0, o.value && (o.writable = !0)
                        }
                        Object.defineProperties(t, e)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(),
                e = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                };
            define("ooyala_player", function() {
                var i = function() {
                    function i(t, o) {
                        e(this, i), this.$root = t, this.$play = null, this.$videoWrapper = null, this.videoKey = null, this.activeVideo = null, this.endedCallback = null, this.playingCallback = o, this.setup = !1, this.ooPlayer = null, this.init()
                    }
                    return t(i, {
                        getVideoKey: {
                            value: function() {
                                var t = this;
                                return t.videoKey
                            }
                        },
                        setupOoyalaPlayer: {
                            value: function() {
                                var t = this;
                                t.setup = !0, t.ooPlayer = MattelVideoPlayer.ooPlayerInstances.players[$(".ooyala-video-player").index(t.$root.find(".ooyala-video-player"))], t.ooPlayer.mb.subscribe(OO.EVENTS.PLAYING, "Playing", function() {
                                    var e = t.$play.attr("data-video-name"),
                                        i = t.$play.attr("data-ooyala-id"),
                                        o = t.$play.attr("data-video-order"),
                                        n = t.$play.attr("data-module-name");
                                    t.$root.addClass("playing"), t.activeVideo || (t.activeVideo = i, t.resizeVideoWrapper(t.$videoWrapper), window.MainAnalytics && window.MainAnalytics.trackVideo(e, window.MainAnalytics.VIDEO_EVENT_PLAY, o, n), $.isFunction(t.playingCallback) && t.playingCallback(t))
                                }), t.ooPlayer.mb.subscribe(OO.EVENTS.PLAYED, "completed", function() {
                                    var e = t.$play.attr("data-video-name"),
                                        i = t.$play.attr("data-video-order"),
                                        o = t.$play.attr("data-module-name");
                                    t.animateFromVideoHeight(t.$videoWrapper), t.$root.removeClass("playing"), t.activeVideo = null, window.MainAnalytics && window.MainAnalytics.trackVideo(e, window.MainAnalytics.VIDEO_EVENT_COMPLETION, i, o), $.isFunction(t.endedCallback) && t.endedCallback()
                                })
                            }
                        },
                        init: {
                            value: function() {
                                var t = this;
                                t.$play = t.$root.find(".play"), t.$videoWrapper = t.$root.find(".video-wrapper"), t.videoKey = "ooyala_" + t.$play.attr("data-slideindex"), t.setupOoyalaPlayer()
                            }
                        },
                        play: {
                            value: function(t) {
                                var e = this;
                                e.endedCallback = t, e.setup || e.setupOoyalaPlayer(), e.ooPlayer.play(), window.dispatchEvent(new Event("resize"))
                            }
                        },
                        close: {
                            value: function() {
                                var t = this;
                                t.animateFromVideoHeight(t.$videoWrapper), t.$root.removeClass("playing"), t.activeVideo = null, t.ooPlayer.seek(t.ooPlayer.getTotalTime() / 1e3), t.ooPlayer.pause()
                            }
                        },
                        animateToVideoHeight: {
                            value: function(t, e, i) {
                                var o = t.height();
                                t.data("original-height", o), i ? t.css({
                                    height: e + "px"
                                }) : t.animate({
                                    height: e + "px"
                                })
                            }
                        },
                        animateFromVideoHeight: {
                            value: function(t) {
                                var e = t.data("original-height");
                                t.animate({
                                    height: e + "px"
                                }, function() {
                                    t.css("height", "")
                                })
                            }
                        },
                        resize: {
                            value: function() {
                                this.resizeVideoWrapper(this.$videoWrapper, !0)
                            }
                        },
                        resizeVideoWrapper: {
                            value: function(t, e) {
                                var i = this,
                                    o = 9 / 16,
                                    n = t.width(),
                                    s = Math.round(n * o);
                                i.animateToVideoHeight(t, s, e)
                            }
                        }
                    }), i
                }();
                return i
            })
        }()
    }), define("node_modules/pubsub-js/src/pubsub.js", function(t, e, i) {
        return function() {
            ! function(t, i) {
                "use strict";
                if ("function" == typeof define && define.amd) define(["exports"], i);
                else if ("object" == typeof e) i(e);
                else {
                    var o = {};
                    t.PubSub = o, i(o)
                }
            }("object" == typeof window && window || this, function(t) {
                "use strict";

                function e(t) {
                    var e;
                    for (e in t)
                        if (t.hasOwnProperty(e)) return !0;
                    return !1
                }

                function i(t) {
                    return function() {
                        throw t
                    }
                }

                function o(t, e, o) {
                    try {
                        t(e, o)
                    } catch (n) {
                        setTimeout(i(n), 0)
                    }
                }

                function n(t, e, i) {
                    t(e, i)
                }

                function s(t, e, i, s) {
                    var a, r = d[e],
                        l = s ? n : o;
                    if (d.hasOwnProperty(e))
                        for (a in r) r.hasOwnProperty(a) && l(r[a], t, i)
                }

                function a(t, e, i) {
                    return function() {
                        var o = String(t),
                            n = o.lastIndexOf(".");
                        for (s(t, t, e, i); - 1 !== n;) o = o.substr(0, n), n = o.lastIndexOf("."), s(t, o, e, i)
                    }
                }

                function r(t) {
                    for (var i = String(t), o = Boolean(d.hasOwnProperty(i) && e(d[i])), n = i.lastIndexOf("."); !o && -1 !== n;) i = i.substr(0, n), n = i.lastIndexOf("."), o = Boolean(d.hasOwnProperty(i) && e(d[i]));
                    return o
                }

                function l(t, e, i, o) {
                    var n = a(t, e, o),
                        s = r(t);
                    return s ? (i === !0 ? n() : setTimeout(n, 0), !0) : !1
                }
                var d = {},
                    c = -1;
                t.publish = function(e, i) {
                    return l(e, i, !1, t.immediateExceptions)
                }, t.publishSync = function(e, i) {
                    return l(e, i, !0, t.immediateExceptions)
                }, t.subscribe = function(t, e) {
                    if ("function" != typeof e) return !1;
                    d.hasOwnProperty(t) || (d[t] = {});
                    var i = "uid_" + String(++c);
                    return d[t][i] = e, i
                }, t.clearAllSubscriptions = function() {
                    d = {}
                }, t.clearSubscriptions = function(t) {
                    var e;
                    for (e in d) d.hasOwnProperty(e) && 0 === e.indexOf(t) && delete d[e]
                }, t.unsubscribe = function(t) {
                    var e, i, o, n = "string" == typeof t && d.hasOwnProperty(t),
                        s = !n && "string" == typeof t,
                        a = "function" == typeof t,
                        r = !1;
                    if (n) return void delete d[t];
                    for (e in d)
                        if (d.hasOwnProperty(e)) {
                            if (i = d[e], s && i[t]) {
                                delete i[t], r = t;
                                break
                            }
                            if (a)
                                for (o in i) i.hasOwnProperty(o) && i[o] === t && (delete i[o], r = !0)
                        }
                    return r
                }
            })
        }()
    }), define("bower_components/jquery-throttle-debounce/jquery.ba-throttle-debounce.js", function(t, e, i) {
        return function() {
            ! function(t, e) {
                "$:nomunge";
                var i, o = t.jQuery || t.Cowboy || (t.Cowboy = {});
                o.throttle = i = function(t, i, n, s) {
                    function a() {
                        function o() {
                            l = +new Date, n.apply(d, u)
                        }

                        function a() {
                            r = e
                        }
                        var d = this,
                            c = +new Date - l,
                            u = arguments;
                        s && !r && o(), r && clearTimeout(r), s === e && c > t ? o() : i !== !0 && (r = setTimeout(s ? a : o, s === e ? t - c : t))
                    }
                    var r, l = 0;
                    return "boolean" != typeof i && (s = n, n = i, i = e), o.guid && (a.guid = n.guid = n.guid || o.guid++), a
                }, o.debounce = function(t, o, n) {
                    return n === e ? i(t, o, !1) : i(t, n, o !== !1)
                }
            }(this)
        }()
    }), define("bower_components/fitvids/jquery.fitvids.js", function(t, e, i) {
        return function() {
            ! function(t) {
                "use strict";
                t.fn.fitVids = function(e) {
                    var i = {
                        customSelector: null
                    };
                    if (!document.getElementById("fit-vids-style")) {
                        var o = document.createElement("div"),
                            n = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                            s = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
                        o.className = "fit-vids-style", o.id = "fit-vids-style", o.style.display = "none", o.innerHTML = s, n.parentNode.insertBefore(o, n)
                    }
                    return e && t.extend(i, e), this.each(function() {
                        var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                        i.customSelector && e.push(i.customSelector);
                        var o = t(this).find(e.join(","));
                        o = o.not("object object"), o.each(function() {
                            var e = t(this);
                            if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                                var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                                    o = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                                    n = i / o;
                                if (!e.attr("id")) {
                                    var s = "fitvid" + Math.floor(999999 * Math.random());
                                    e.attr("id", s)
                                }
                                e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * n + "%"), e.removeAttr("height").removeAttr("width")
                            }
                        })
                    })
                }
            }(window.jQuery || window.Zepto)
        }()
    })
};
})(jQuery);
;
relyjs.autoResolve(['js','coffee']);
//relyjs.map('polyfills', 'src/core/scripts/polyfills.js');
relyjs.map('main', 'src/core/scripts/main.js');
relyjs.map('utils', 'src/core/scripts/utils.js');
//relyjs.map('header-navigation', 'src/modules/header-navigation/header-navigation.js');
//relyjs.map('iframe-container', 'src/modules/iframe-container/iframe-container.js');
//relyjs.map('theme-barbie', 'src/modules/theme-barbie/theme-barbie.js');
relyjs.map('featured-promo', 'src/modules/featured-promo/featured-promo.js');
//relyjs.map('retailer-logo-carousel', 'src/modules/retailer-logo-carousel/retailer-logo-carousel.js');
//relyjs.map('detailed', 'src/modules/detailed/detailed.js');
relyjs.map('videos', 'src/modules/videos/videos.js');
//relyjs.map('kids-carousel', 'src/modules/kids-carousel/kids-carousel.js');
//relyjs.map('thumbnail-carousel', 'src/modules/thumbnail-carousel/thumbnail-carousel.js');
//relyjs.map('footer-navigation', 'src/modules/footer-navigation/footer-navigation.js');
//relyjs.map('language-modal', 'src/modules/language-modal/language-modal.js');
//relyjs.map('country-dropdown', 'src/modules/country-dropdown/country-dropdown.js');
//relyjs.map('interstitial-modal', 'src/modules/interstitial-modal/interstitial-modal.js');
relyjs.map('video-overlay', 'src/modules/video-overlay/video-overlay.js');
//relyjs.map('theme-ever-after-high', 'src/modules/theme-ever-after-high/theme-ever-after-high.js');
//relyjs.map('theme-hot-wheels', 'src/modules/theme-hot-wheels/theme-hot-wheels.js');
relyjs.map('youtube_player', 'src/modules/videos/players/youtube_player.js');
relyjs.map('ooyala_player', 'src/modules/videos/players/ooyala_player.js');
//relyjs.map('dev-page-listing', 'src/modules/dev-page-listing/dev-page-listing.js');
//relyjs.map('theme-monster-high', 'src/modules/theme-monster-high/theme-monster-high.js');
relyjs.map('style-guide', 'src/modules/style-guide/style-guide.js');
relyjs.map('jquery-mousewheel', 'node_modules/jquery-mousewheel/jquery.mousewheel.js');
relyjs.map('malihu-custom-scrollbar-plugin', 'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js');
relyjs.map('pubsub-js', 'node_modules/pubsub-js/src/pubsub.js');
relyjs.map('browser/detection', 'node_modules/@14four/armory-scripts/lib/browser/detection.js');
relyjs.map('browser/log', 'node_modules/@14four/armory-scripts/lib/browser/log.js');
relyjs.map('text/ms', 'node_modules/@14four/armory-scripts/lib/text/ms.js');

define("src/modules/theme-hot-wheels/theme-hot-wheels.js",function(e,t,s){return function(){"use strict"}()});
require('main');
;
(function($) {

  //console.log('language-selector');

  var foption = $('#mattel_language_selector option:first');
      var soptions = $('#mattel_language_selector option:not(:first)').sort(function(a, b) {
         return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
      });
      $('#mattel_language_selector').html(soptions).prepend(foption);



  $('#mattel_language_selector').change(function() {
    var lang = $('option:selected', this).attr('hreflang');
    var path = $('option:selected', this).data('drupal-link-system-path');
    var fullPath = '/' + lang + '/' + path;
    window.location.href=fullPath;

  });

})(jQuery);
;
