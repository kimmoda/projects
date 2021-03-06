//jquery.bxslider.min
(function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(s)}),this;var o={},r=this;t.el=this;var a=e(window).width(),l=e(window).height(),d=function(){o.settings=e.extend({},n,s),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return o.cssPrefix=t[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),c()},c=function(){if(r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=e('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?215*o.children.length+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),v(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:u()}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.width(p()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=e('<div class="bx-controls" />'),o.settings.captions&&E(),o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var t="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,t).clone().addClass("bx-clone"),n=o.children.slice(-t).clone().addClass("bx-clone");r.append(i).prepend(n)}o.active.last=o.settings.startSlide==f()-1,o.settings.video&&r.fitVids();var s=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(s=r.children()),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&w(),o.settings.controls&&T(),o.settings.auto&&o.settings.autoControls&&C(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),s.imagesLoaded(g)},g=function(){o.loader.remove(),m(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(h()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,e(window).bind("resize",Y),o.settings.auto&&o.settings.autoStart&&L(),o.settings.ticker&&W(),o.settings.pager&&M(o.settings.startSlide),o.settings.controls&&D(),o.settings.touchEnabled&&!o.settings.ticker&&O()},h=function(){var t=0,n=e();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*x();for(n=o.children.eq(s),i=1;o.settings.maxSlides-1>=i;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),o.settings.slideMargin>0&&(t+=o.settings.slideMargin*(o.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),t},u=function(){var e="100%";return o.settings.slideWidth>0&&(e="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),e},p=function(){var e=o.settings.slideWidth,t=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>t&&!o.carousel||"vertical"==o.settings.mode?e=t:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(t>o.maxThreshold||o.minThreshold>t&&(e=(t-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),e},v=function(){var e=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)e=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)e=o.settings.maxSlides;else{var t=o.children.first().width();e=Math.floor(o.viewport.width()/t)}else"vertical"==o.settings.mode&&(e=o.settings.minSlides);return e},f=function(){var e=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)e=o.children.length/x();else for(var t=0,i=0;o.children.length>t;)++e,t=i+v(),i+=o.settings.moveSlides<=v()?o.settings.moveSlides:v();else e=Math.ceil(o.children.length/v());return e},x=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=v()?o.settings.moveSlides:v()},m=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var e=o.children.last(),t=e.position();S(-(t.left-(o.viewport.width()-e.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,t=o.children.eq(i).position();S(-t.top,"reset",0)}}else{var t=o.children.eq(o.active.index*x()).position();o.active.index==f()-1&&(o.active.last=!0),void 0!=t&&("horizontal"==o.settings.mode?S(-t.left,"reset",0):"vertical"==o.settings.mode&&S(-t.top,"reset",0))}},S=function(e,t,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==t?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I()})):"reset"==t?r.css(o.animProp,s):"ticker"==t&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),H()}))}else{var a={};a[o.animProp]=e,"slide"==t?r.animate(a,i,o.settings.easing,function(){I()}):"reset"==t?r.css(o.animProp,e):"ticker"==t&&r.animate(a,speed,"linear",function(){S(n.resetValue,"reset",0),H()})}},b=function(){for(var t="",i=f(),n=0;i>n;n++){var s="";o.settings.buildPager&&e.isFunction(o.settings.buildPager)?(s=o.settings.buildPager(n),o.pagerEl.addClass("bx-custom-pager")):(s=n+1,o.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+s+"</a></div>"}o.pagerEl.html(t)},w=function(){o.settings.pagerCustom?o.pagerEl=e(o.settings.pagerCustom):(o.pagerEl=e('<div class="bx-pager" />'),o.settings.pagerSelector?e(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),b()),o.pagerEl.delegate("a","click",z)},T=function(){o.controls.next=e('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=e('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",A),o.controls.prev.bind("click",P),o.settings.nextSelector&&e(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&e(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=e('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},C=function(){o.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=e('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",y),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?e(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),q(o.settings.autoStart?"stop":"start")},E=function(){o.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!=t&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},A=function(e){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),e.preventDefault()},P=function(e){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),e.preventDefault()},k=function(e){r.startAuto(),e.preventDefault()},y=function(e){r.stopAuto(),e.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto();var i=e(t.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),t.preventDefault()},M=function(t){return"short"==o.settings.pagerType?(o.pagerEl.html(t+1+o.settings.pagerShortSeparator+o.children.length),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")}),void 0)},I=function(){if(o.settings.infiniteLoop){var e="";0==o.active.index?e=o.children.eq(0).position():o.active.index==f()-1&&o.carousel?e=o.children.eq((f()-1)*x()).position():o.active.index==o.children.length-1&&(e=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?S(-e.left,"reset",0):"vertical"==o.settings.mode&&S(-e.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},q=function(e){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[e]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},D=function(){1==f()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==f()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},L=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},W=function(){var t=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();t="horizontal"==o.settings.mode?-i.left:-i.top}S(t,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var t=0;o.children.each(function(){t+="horizontal"==o.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=o.settings.speed/t,n="horizontal"==o.settings.mode?"left":"top",s=i*(t-Math.abs(parseInt(r.css(n))));H(s)}),H()},H=function(e){speed=e?e:o.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?t=r.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-t.left:-t.top,s="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:s};S(n,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",N)},N=function(e){if(o.working)e.preventDefault();else{o.touch.originalPos=r.position();var t=e.originalEvent;o.touch.start.x=t.changedTouches[0].pageX,o.touch.start.y=t.changedTouches[0].pageY,o.viewport.bind("touchmove",B),o.viewport.bind("touchend",X)}},B=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-o.touch.start.x),n=Math.abs(t.changedTouches[0].pageY-o.touch.start.y);if(3*i>n&&o.settings.preventDefaultSwipeX?e.preventDefault():3*n>i&&o.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var s=0;if("horizontal"==o.settings.mode){var r=t.changedTouches[0].pageX-o.touch.start.x;s=o.touch.originalPos.left+r}else{var r=t.changedTouches[0].pageY-o.touch.start.y;s=o.touch.originalPos.top+r}S(s,"reset",0)}},X=function(e){o.viewport.unbind("touchmove",B);var t=e.originalEvent,i=0;if(o.touch.end.x=t.changedTouches[0].pageX,o.touch.end.y=t.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?S(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):S(i,"reset",200)}o.viewport.unbind("touchend",X)},Y=function(){var t=e(window).width(),i=e(window).height();(a!=t||l!=i)&&(a=t,l=i,r.redrawSlider())};return r.goToSlide=function(t,i){if(!o.working&&o.active.index!=t)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>t?f()-1:t>=f()?0:t,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=f()-1,o.settings.pager&&M(o.active.index),o.settings.controls&&D(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){e(this).css("zIndex",50),I()});else{o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.width()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-x():(f()-1)*x()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);s=a.position()}else if("next"==i&&0==o.active.index)s=r.find(".bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(t>=0){var c=t*x();s=o.children.eq(c).position()}if(s!==void 0){var g="horizontal"==o.settings.mode?-(s.left-n):-s.top;S(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var e=parseInt(o.active.index)+1;r.goToSlide(e,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var e=parseInt(o.active.index)-1;r.goToSlide(e,"prev")}},r.startAuto=function(e){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=e&&q("stop"))},r.stopAuto=function(e){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=e&&q("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).width(p()),o.viewport.css("height",h()),o.settings.ticker||m(),o.active.last&&(o.active.index=f()-1),o.active.index>=f()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(b(),M(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,e(".bx-clone",this).remove(),o.children.removeAttr("style"),this.removeAttr("style").unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),e(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),e(window).unbind("resize",Y))},r.reloadSlider=function(e){void 0!=e&&(s=e),r.destroySlider(),d()},d(),this}})(jQuery),function(e,t){var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(n){function s(){var t=e(g),i=e(h);a&&(h.length?a.reject(d,t,i):a.resolve(d)),e.isFunction(n)&&n.call(r,d,t,i)}function o(t,n){t.src===i||-1!==e.inArray(t,c)||(c.push(t),n?h.push(t):g.push(t),e.data(t,"imagesLoaded",{isBroken:n,src:t.src}),l&&a.notifyWith(e(t),[n,d,e(g),e(h)]),d.length===c.length&&(setTimeout(s),d.unbind(".imagesLoaded")))}var r=this,a=e.isFunction(e.Deferred)?e.Deferred():0,l=e.isFunction(a.notify),d=r.find("img").add(r.filter("img")),c=[],g=[],h=[];return e.isPlainObject(n)&&e.each(n,function(e,t){"callback"===e?n=t:a&&a[e](t)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(e){o(e.target,"error"===e.type)}).each(function(n,s){var r=s.src,a=e.data(s,"imagesLoaded");a&&a.src===r?o(s,a.isBroken):s.complete&&s.naturalWidth!==t?o(s,0===s.naturalWidth||0===s.naturalHeight):(s.readyState||s.complete)&&(s.src=i,s.src=r)}):s(),a?a.promise(r):r}}(jQuery);
//jquery.bxslider.min End
//bootstrap.min
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
//bootstrap.min End


  
  // simple LightBox js
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){var j=[],k=b(document),l=b.browser.msie&&6===parseInt(b.browser.version)&&"object"!==typeof window.XMLHttpRequest,n=b.browser.msie&&7===parseInt(b.browser.version),m=null,h=b(window),i=[];b.modal=function(a,d){return b.modal.impl.init(a,d)};b.modal.close=function(){b.modal.impl.close()};b.modal.focus=function(a){b.modal.impl.focus(a)};b.modal.setContainerDimensions=function(){b.modal.impl.setContainerDimensions()};
b.modal.setPosition=function(){b.modal.impl.setPosition()};b.modal.update=function(a,d){b.modal.impl.update(a,d)};b.fn.modal=function(a){return b.modal.impl.init(this,a)};b.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',
closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.modal.impl={d:{},init:function(a,d){if(this.d.data)return!1;m=b.browser.msie&&!b.boxModel;this.o=b.extend({},b.modal.defaults,d);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof jQuery?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"})),
this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&l)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:i[0],width:i[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(l||m)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});k.bind("keydown.simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});h.bind("resize.simplemodal orientationchange.simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();l||m?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:i[0],width:i[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.simplemodal");k.unbind("keydown.simplemodal");h.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,f){if(f){var g=f[0].style;g.position="absolute";if(2>b)g.removeExpression("height"),g.removeExpression("width"),g.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),g.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,e;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):f.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(e="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),e=-1===e.indexOf("%")?e+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(e.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
e='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');g.removeExpression("top");g.removeExpression("left");g.setExpression("top",c);g.setExpression("left",e)}}})},focus:function(a){var d=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",f=b(":input:enabled:visible:"+a,d.d.wrap);setTimeout(function(){0<f.length?f.focus():d.d.wrap.focus()},
10)},getDimensions:function(){var a=b.browser.opera&&"9.5"<b.browser.version&&"1.3">b.fn.jquery||b.browser.opera&&"9.5">b.browser.version&&"1.2.6"<b.fn.jquery?h[0].innerHeight:h.height();j=[k.height(),k.width()];i=[a,h.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?i[0]:i[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,
"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=l||n,d=this.d.origHeight?this.d.origHeight:b.browser.opera?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:b.browser.opera?this.d.container.width():
this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),f=this.d.data.outerHeight(!0),g=this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||d;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,e=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<i[0]?c:i[0],e=e&&e<i[1]?e:i[1],h=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",d=d?this.o.autoResize&&d>c?c:d<h?h:d:f?f>c?c:this.o.minHeight&&
"auto"!==h&&f<h?h:f:h,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>e?e:a<c?c:a:g?g>e?e:this.o.minWidth&&"auto"!==c&&g<c?c:g:c;this.d.container.css({height:d,width:a});this.d.wrap.css({overflow:f>d||g>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=i[0]/2-this.d.container.outerHeight(!0)/2;b=i[1]/2-this.d.container.outerWidth(!0)/2;var f="fixed"!==this.d.container.css("position")?h.scrollTop():0;this.o.position&&"[object Array]"===
Object.prototype.toString.call(this.o.position)?(a=f+(this.o.position[0]||a),b=this.o.position[1]||b):a=f+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),
this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",
this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}});
// light box js end


!function(a){var b,c,d,e,f,g,h,i,j={getSliderValuesAtPositionPx:function(a,b){var c,d,e=this,f=e.data("pixel_to_value_mapping");if("undefined"!=typeof f)c=f(a),d=f(b);else{var g=j.getSliderWidthPx.call(e)-e.data("left_grip_width");c=j.inverse_rangemap_0_to_n.call(e,a,g),d=j.inverse_rangemap_0_to_n.call(e,b,g)}return[c,d]},validateAndMoveGripsToPx:function(a,b){var c=this,d=j.getSliderWidthPx.call(c)-c.data("left_grip_width");if(d>=b&&a>=0&&d>=a&&(!c.data("has_right_grip")||b>=a)){var e=c.data("cur_min"),f=c.data("cur_max");j.set_position_from_px.call(c,a,b),j.refresh_grips_style.call(c),j.notify_changed_implicit.call(c,"drag_move",e,f)}return c},updateAriaAttributes:function(){var a=this,b=a.data("settings"),c=a.find(b.left_grip_selector);if(a.data("has_right_grip")){var d=a.find(b.right_grip_selector);c.attr("aria-valuemin",a.data("range_min")).attr("aria-valuenow",k.get_current_min_value.call(a)).attr("aria-valuemax",k.get_current_max_value.call(a)),d.attr("aria-valuemin",k.get_current_min_value.call(a)).attr("aria-valuenow",k.get_current_max_value.call(a)).attr("aria-valuemax",a.data("range_max"))}else c.attr("aria-valuemin",a.data("range_min")).attr("aria-valuenow",k.get_current_min_value.call(a)).attr("aria-valuemax",a.data("range_max"));return a},getSliderWidthPx:function(){var a=this;return Math.round(a.width())},getGripPositionPx:function(a){return parseInt(a.css("left").replace("px",""),10)},getLeftGripPositionPx:function(){var a=this,b=a.data("settings"),c=a.find(b.left_grip_selector);return j.getGripPositionPx.call(a,c)},getRightGripPositionPx:function(){var a=this,b=a.data("settings");if(a.data("has_right_grip"))return j.getGripPositionPx.call(a,a.find(b.right_grip_selector));var c=j.getSliderWidthPx.call(a)-a.data("left_grip_width");return j.rangemap_0_to_n.call(a,a.data("cur_max"),c)},getLeftGripWidth:function(){var a=this,b=a.data("settings"),c=a.find(b.left_grip_selector);return Math.round(c.width())},getRightGripWidth:function(){var a=this,b=a.data("settings"),c=a.find(b.right_grip_selector);return Math.round(c.width())},binarySearch:function(a,b,c,d){for(var e,f,g=0,h=a.length-1;h>=g;){e=(g+h)/2|0,f=c(a,e);var i=d(b,a,e);if(i>0)g=e+1;else{if(!(0>i))return e;h=e-1}}return-1},haveLimits:function(){var a=this,b=a.data("lower-limit"),c=a.data("upper-limit"),d=!1;return"undefined"!=typeof b&&"undefined"!=typeof c&&(d=!0),d},refresh_grips_style:function(){var a=this,b=a.data("settings");if("undefined"!=typeof b.highlight){var c=a.data("highlightedRangeMin");if("undefined"!=typeof c){var d=a.find(b.left_grip_selector),e=a.find(b.right_grip_selector),f=a.data("highlightedRangeMax"),g=a.data("cur_min"),h=a.data("cur_max"),i=b.highlight.grip_class;c>g||g>f?d.removeClass(i):d.addClass(i),c>h||h>f?e.removeClass(i):e.addClass(i)}}},set_position_from_val:function(a,b){var c=this,d=c.data("range_min"),e=c.data("range_max");d>a&&(a=d),a>e&&(a=e),c.data("has_right_grip")?(b>e&&(b=e),d>b&&(b=d)):b=c.data("cur_max");var f=k.value_to_px.call(c,a),g=k.value_to_px.call(c,b);return j.set_handles_at_px.call(c,f,g),c.data("cur_min",a),c.data("has_right_grip")&&c.data("cur_max",b),c},set_position_from_px:function(a,b){var c=this;j.set_handles_at_px.call(c,a,b);var d=j.getSliderValuesAtPositionPx.call(c,a,b),e=d[0],f=d[1];return c.data("cur_min",e),c.data("has_right_grip")&&c.data("cur_max",f),c},set_handles_at_px:function(a,b){var c=this,d=c.data("settings"),e=d.left_grip_selector,f=d.right_grip_selector,g=d.value_bar_selector,h=c.data("left_grip_width"),i=h/2;return c.data("has_right_grip")?(c.find(g).css("left",a+i+"px").css("width",b-a+i+"px"),c.find(e).css("left",a+"px")):(b>a?c.find(g).css("left",a+i+"px").css("width",b-a+i+"px"):c.find(g).css("left",b+i+"px").css("width",a-b+i+"px"),c.find(e).css("left",a+"px")),c.find(f).css("left",b+"px"),c},drag_start_func_touch:function(a,b,c,e,f){var g=this,h=a.originalEvent,i=h.touches[0],k=i.pageY,l=i.pageX,m=Math.abs(g.offset().top-k),n=g.offset().left,o=n-l,p=l-(n+g.width());m>b.touch_tolerance_value_bar_y||o>b.touch_tolerance_value_bar_x||p>b.touch_tolerance_value_bar_x||(h.preventDefault(),d=i.pageX,j.drag_start_func.call(g,i,b,c,e,f))},drag_start_func:function(d,f,g,h,i){var l=this;if(l.find(f.left_grip_selector+","+f.value_bar_selector+","+f.right_grip_selector).removeClass(f.animating_css_class),k.is_enabled.call(l)){var m=a(d.target),n=!1;if("object"==typeof f.highlight&&(n=m.is(f.highlight.panel_selector)),i!==!1||m.is(f.left_grip_selector)||m.is(f.right_grip_selector)||m.is(f.value_bar_selector)||n||m.is(l)){b=l;var o,p,q,r,s,t,u=j.getGripPositionPx.call(l,g),v=j.getSliderWidthPx.call(l)-l.data("left_grip_width"),w=g.offset().left,x=j.getRightGripPositionPx.call(l);p=d.pageX-l.data("left_grip_width")/2,q=Math.abs(w-p),s=p-w,l.data("has_right_grip")?(o=h.offset().left,r=Math.abs(o-p),t=p-o):(r=2*q,t=2*s),f.user_drag_start_callback.call(l,d),q===r?w>p?(u+=s,e=!0):(x+=t,e=!1):r>q?(u+=s,e=!0):(x+=t,e=!1),l.data("has_right_grip")?x>v&&(x=v):u>v&&(u=v),0>u&&(u=0),c=!0;var y=l.data("cur_min"),z=l.data("cur_max");j.set_position_from_px.call(l,u,x),j.refresh_grips_style.call(l),j.notify_changed_implicit.call(l,"drag_start",y,z),d.preventDefault()}}},drag_move_func_touch:function(a){if(c===!0){var b=a.originalEvent;b.preventDefault();var d=b.touches[0];j.drag_move_func(d)}},drag_move_func:function(a){if(c){var f=b,g=j.getSliderWidthPx.call(f)-f.data("left_grip_width"),h=j.getLeftGripPositionPx.call(f),i=j.getRightGripPositionPx.call(f),k=a.pageX,l=k-d,m=f.offset().left+f.data("left_grip_width"),n=m+g,o=0,p=0;m>k&&(o=1,p=0),k>n&&(p=1,o=0),f.data("has_right_grip")&&(e?g>=i&&h+l>i&&(e=!1,h=i):h>=0&&h>i+l&&(e=!0,i=h));var q=h,r=i;(l>0&&!o||0>l&&!p)&&(e?q+=l:r+=l),j.validateAndMoveGripsToPx.call(f,q,r),d=k,a.preventDefault()}},drag_end_func_touch:function(a){var b=a.originalEvent;b.preventDefault();var c=b.touches[0];j.drag_end_func(c)},drag_end_func:function(){var a=b;if("undefined"!=typeof a){c=!1,d=void 0,j.notify_mouse_up_implicit.call(a,e),b=void 0;var f=a.data("settings");a.find(f.left_grip_selector+","+f.value_bar_selector+","+f.right_grip_selector).addClass(f.animating_css_class)}},get_rounding_for_value:function(a){var b=this,c=b.data("rounding"),d=b.data("rounding_ranges");if("object"==typeof d){var e=j.binarySearch.call(b,d,a,function(a,b){return a[b].range},function(a,b,c){return a<b[c].range?c>0?a>=b[c-1].range?0:-1:0:1});if(c=1,e>-1)c=parseInt(d[e].value,10);else{var f=d.length-1;a>=d[f].range&&(c=d[f].value)}}return c},notify_mouse_up_implicit:function(a){var b=this,c=k.get_current_min_value.call(b),d=k.get_current_max_value.call(b),e=!1;(b.data("beforestart_min")!==c||b.data("beforestart_max")!==d)&&(e=!0,b.data("beforestart_min",c),b.data("beforestart_max",d));var f=b.data("settings");return f.user_mouseup_callback.call(b,k.get_current_min_value.call(b),k.get_current_max_value.call(b),a,e),b},notify_changed_implicit:function(a,b,c){var d=this,e=!1;("init"===a||"refresh"===a)&&(e=!0);var f=k.get_current_min_value.call(d),g=k.get_current_max_value.call(d);return e||(b=k.round_value_according_to_rounding.call(d,b),c=k.round_value_according_to_rounding.call(d,c)),(e||f!==b||g!==c)&&(j.notify_changed_explicit.call(d,a,b,c,f,g),e=1),e},notify_changed_explicit:function(a,b,c,d,e){var f=this,g=f.data("settings");return f.data("aria_enabled")&&j.updateAriaAttributes.call(f),g.value_changed_callback.call(f,a,d,e,b,c),f},validate_params:function(b){var c=this,d=c.data("range_min"),e=c.data("range_max"),f=c.data("cur_min"),g=c.data("lower-limit"),h=c.data("upper-limit"),i=j.haveLimits.call(c);"undefined"==typeof d&&a.error("the data-range_min attribute was not defined"),"undefined"==typeof e&&a.error("the data-range_max attribute was not defined"),"undefined"==typeof f&&a.error("the data-cur_min attribute must be defined"),d>e&&a.error("Invalid input parameter. must be min < max"),i&&g>h&&a.error("Invalid data-lower-limit or data-upper-limit"),0===c.find(b.left_grip_selector).length&&a.error("Cannot find element pointed by left_grip_selector: "+b.left_grip_selector),"undefined"!=typeof b.right_grip_selector&&0===c.find(b.right_grip_selector).length&&a.error("Cannot find element pointed by right_grip_selector: "+b.right_grip_selector),"undefined"!=typeof b.value_bar_selector&&0===c.find(b.value_bar_selector).length&&a.error("Cannot find element pointed by value_bar_selector"+b.value_bar_selector)},rangemap_0_to_n:function(a,b){var c=this,d=c.data("range_min"),e=c.data("range_max");return d>=a?0:a>=e?b:Math.floor((b*a-b*d)/(e-d))},inverse_rangemap_0_to_n:function(a,b){var c=this,d=c.data("range_min"),e=c.data("range_max");if(0>=a)return d;if(a>=b)return e;var f=(e-d)*a/b;return f+d}},k={teardown:function(){var b=this;return b.removeData(),a(document).unbind("mousemove.nstSlider").unbind("mouseup.nstSlider"),b.parent().unbind("mousedown.nstSlider").unbind("touchstart.nstSlider").unbind("touchmove.nstSlider").unbind("touchend.nstSlider"),b.unbind("keydown.nstSlider").unbind("keyup.nstSlider"),b},init:function(b){var c=a.extend({animating_css_class:"nst-animating",touch_tolerance_value_bar_y:30,touch_tolerance_value_bar_x:15,left_grip_selector:".nst-slider-grip-left",right_grip_selector:void 0,highlight:void 0,rounding:void 0,value_bar_selector:void 0,value_changed_callback:function(){},user_mouseup_callback:function(){},user_drag_start_callback:function(){}},b),d=a(document);return d.unbind("mouseup.nstSlider"),d.unbind("mousemove.nstSlider"),d.bind("mousemove.nstSlider",j.drag_move_func),d.bind("mouseup.nstSlider",j.drag_end_func),this.each(function(){var b=a(this),d=b.parent();b.data("enabled",!0);var l=b.data("range_min"),m=b.data("range_max"),n=b.data("cur_min"),o=b.data("cur_max");"undefined"==typeof o&&(o=n),""===l&&(l=0),""===m&&(m=0),""===n&&(n=0),""===o&&(o=0),b.data("range_min",l),b.data("range_max",m),b.data("cur_min",n),b.data("cur_max",o),j.validate_params.call(b,c),b.data("settings",c),"undefined"!=typeof c.rounding?k.set_rounding.call(b,c.rounding):"undefined"!=typeof b.data("rounding")?k.set_rounding.call(b,b.data("rounding")):k.set_rounding.call(b,1);var p=b.find(c.left_grip_selector)[0],q=a(p),r=a(b.find(c.right_grip_selector)[0]);"undefined"==typeof q.attr("tabindex")&&q.attr("tabindex",0);var s=!1;b.find(c.right_grip_selector).length>0&&(s=!0,"undefined"==typeof r.attr("tabindex")&&r.attr("tabindex",0)),b.data("has_right_grip",s),b.data("aria_enabled")===!0&&(q.attr("role","slider").attr("aria-disabled","false"),s&&r.attr("role","slider").attr("aria-disabled","false")),b.bind("keyup.nstSlider",function(a){if(b.data("enabled")){switch(a.which){case 37:case 38:case 39:case 40:if(f===h){var c,d,l,m=j.getSliderWidthPx.call(b);if(0>g-i){for(d=i;m>=d;d++)if(c=k.round_value_according_to_rounding.call(b,j.getSliderValuesAtPositionPx.call(b,d,d)[1]),c!==h){l=d;break}}else for(d=i;d>=0;d--)if(c=k.round_value_according_to_rounding.call(b,j.getSliderValuesAtPositionPx.call(b,d,d)[1]),c!==h){l=d;break}e?j.validateAndMoveGripsToPx.call(b,l,j.getRightGripPositionPx.call(b)):j.validateAndMoveGripsToPx.call(b,j.getLeftGripPositionPx.call(b),l),j.notify_mouse_up_implicit.call(b,e)}}f=void 0,g=void 0,h=void 0,i=void 0}}),b.bind("keydown.nstSlider",function(a){if(b.data("enabled")){var c=function(a,c){var d=j.getLeftGripPositionPx.call(b),l=j.getRightGripPositionPx.call(b);switch("undefined"==typeof f&&(g=e?d:l,f=e?k.get_current_min_value.call(b):k.get_current_max_value.call(b)),c.which){case 37:case 40:e?d--:l--,c.preventDefault();break;case 38:case 39:e?d++:l++,c.preventDefault()}i=e?d:l,j.validateAndMoveGripsToPx.call(b,d,l),h=e?k.get_current_min_value.call(b):k.get_current_max_value.call(b)};s&&b.find(":focus").is(r)?(e=!1,c.call(b,r,a)):(e=!0,c.call(b,q,a))}});var t=j.getLeftGripWidth.call(b),u=s?j.getRightGripWidth.call(b):t;b.data("left_grip_width",t),b.data("right_grip_width",u),b.data("value_bar_selector",c.value_bar_selector),l===m||n===o?k.set_range.call(b,l,m):j.set_position_from_val.call(b,b.data("cur_min"),b.data("cur_max")),j.notify_changed_implicit.call(b,"init"),b.data("beforestart_min",k.get_current_min_value.call(b)),b.data("beforestart_max",k.get_current_max_value.call(b)),b.bind("mousedown.nstSlider",function(a){j.drag_start_func.call(b,a,c,q,r,!1)}),d.bind("touchstart.nstSlider",function(a){j.drag_start_func_touch.call(b,a,c,q,r,!0)}),d.bind("touchend.nstSlider",function(a){j.drag_end_func_touch.call(b,a)}),d.bind("touchmove.nstSlider",function(a){j.drag_move_func_touch.call(b,a)});var v=b.data("histogram");"undefined"!=typeof v&&k.set_step_histogram.call(b,v)})},get_range_min:function(){var a=this;return a.data("range_min")},get_range_max:function(){var a=this;return a.data("range_max")},get_current_min_value:function(){var b,c=a(this),d=k.get_range_min.call(c),e=k.get_range_max.call(c),f=c.data("cur_min");if(b=d>=f?d:k.round_value_according_to_rounding.call(c,f),j.haveLimits.call(c)){if(d>=b)return c.data("lower-limit");if(b>=e)return c.data("upper-limit")}else{if(d>=b)return d;if(b>=e)return e}return b},get_current_max_value:function(){var b,c=a(this),d=k.get_range_min.call(c),e=k.get_range_max.call(c),f=c.data("cur_max");if(b=f>=e?e:k.round_value_according_to_rounding.call(c,f),j.haveLimits.call(c)){if(b>=e)return c.data("upper-limit");if(d>=b)return c.data("lower-limit")}else{if(b>=e)return e;if(d>=b)return d}return b},is_handle_to_left_extreme:function(){var a=this;return j.haveLimits.call(a)?a.data("lower-limit")===k.get_current_min_value.call(a):k.get_range_min.call(a)===k.get_current_min_value.call(a)},is_handle_to_right_extreme:function(){var a=this;return j.haveLimits.call(a)?a.data("upper-limit")===k.get_current_max_value.call(a):k.get_range_max.call(a)===k.get_current_max_value.call(a)},refresh:function(){var a=this,b=a.data("last_step_histogram");"undefined"!=typeof b&&k.set_step_histogram.call(a,b),j.set_position_from_val.call(a,k.get_current_min_value.call(a),k.get_current_max_value.call(a));var c=a.data("highlightedRangeMin");if("number"==typeof c){var d=a.data("highlightedRangeMax");k.highlight_range.call(a,c,d)}return j.notify_changed_implicit.call(a,"refresh"),a},disable:function(){var a=this,b=a.data("settings");return a.data("enabled",!1).find(b.left_grip_selector).attr("aria-disabled","true").end().find(b.right_grip_selector).attr("aria-disabled","true"),a},enable:function(){var a=this,b=a.data("settings");return a.data("enabled",!0).find(b.left_grip_selector).attr("aria-disabled","false").end().find(b.right_grip_selector).attr("aria-disabled","false"),a},is_enabled:function(){var a=this;return a.data("enabled")},set_position:function(a,b){var c=this,d=c.data("cur_min"),e=c.data("cur_max");a>b?j.set_position_from_val.call(c,b,a):j.set_position_from_val.call(c,a,b),j.refresh_grips_style.call(c),j.notify_changed_implicit.call(c,"set_position",d,e),c.data("beforestart_min",a),c.data("beforestart_max",b)},set_step_histogram:function(b){var c=this;c.data("last_step_histogram",b),"undefined"==typeof b&&(a.error("got an undefined histogram in set_step_histogram"),j.unset_step_histogram.call(c));var d=j.getSliderWidthPx.call(c)-c.data("left_grip_width"),e=b.length;if(!(0>=d)){var f,g=0;for(f=0;e>f;f++)g+=b[f];if(0===g)return k.unset_step_histogram.call(c),c;var h=parseFloat(g)/d;for(f=0;e>f;f++)b[f]=b[f]/h;var i=[b[0]];for(f=1;e>f;f++){var l=i[f-1]+b[f];i.push(l)}i.push(d);for(var m=[c.data("range_min")],n=0,o=m[0],p=0;d>=n;){var q=parseInt(i.shift(),10),r=j.inverse_rangemap_0_to_n.call(c,p+1,e+1);p++;var s=q-n,t=r-o;for(f=n;q>f;f++){var u=o+t*(f-n+1)/s;m.push(u),n++,o=u}if(n===d)break}m[m.length-1]=c.data("range_max");var v=function(a){return m[parseInt(a,10)]},w=function(b){var d=j.binarySearch.call(c,m,b,function(a,b){return a[b]},function(b,c,d){return b===c[d]?0:b<c[d]&&0===d?0:c[d-1]<=b&&b<c[d]?0:b>c[d]?1:b<=c[d-1]?-1:void a.error("cannot compare s: "+b+" with a["+d+"]. a is: "+c.join(","))});return d};return c.data("pixel_to_value_mapping",v),c.data("value_to_pixel_mapping",w),c}},unset_step_histogram:function(){var a=this;return a.removeData("pixel_to_value_mapping"),a.removeData("value_to_pixel_mapping"),a.removeData("last_step_histogram"),a},set_range:function(a,b){var c=this,d=k.get_current_min_value.call(c),e=k.get_current_max_value.call(c);return c.data("range_min",a),c.data("range_max",b),j.set_position_from_val.call(c,d,e),j.notify_changed_implicit.call(c,"set_range",d,e),c},highlight_range:function(b,c){var d=this,e=d.data("settings");"undefined"==typeof e.highlight&&a.error('you cannot call highlight_range if you haven\' specified the "highlight" parameter in construction!'),b||(b=0),c||(c=0);var f=k.value_to_px.call(d,b),g=k.value_to_px.call(d,c),h=g-f+d.data("left_grip_width"),i=d.find(e.highlight.panel_selector);return i.css("left",f+"px"),i.css("width",h+"px"),d.data("highlightedRangeMin",b),d.data("highlightedRangeMax",c),j.refresh_grips_style.call(d),d},set_rounding:function(b){var c=this;"string"==typeof b&&b.indexOf("{")>-1&&(b=a.parseJSON(b)),c.data("rounding",b);var d=[];if("object"==typeof b){var e;for(e in b)if(b.hasOwnProperty(e)){var f=b[e];d.push({range:f,value:e})}d.sort(function(a,b){return a.range-b.range}),c.data("rounding_ranges",d)}else c.removeData("rounding_ranges");return c},get_rounding:function(){var a=this;return a.data("rounding")},round_value_according_to_rounding:function(b){var c=this,d=j.get_rounding_for_value.call(c,b);if(d>0){var e=b/d,f=parseInt(e,10),g=e-f;g>.5&&f++;var h=f*d;return h}return a.error("rounding must be > 0, got "+d+" instead"),b},value_to_px:function(a){var b=this,c=b.data("value_to_pixel_mapping");if("undefined"!=typeof c)return c(a);var d=j.getSliderWidthPx.call(b)-b.data("left_grip_width");return j.rangemap_0_to_n.call(b,a,d)}},l="nstSlider";a.fn[l]=function(b){if(k[b]){if(this.data("initialized")===!0)return k[b].apply(this,Array.prototype.slice.call(arguments,1));throw new Error("method "+b+" called on an uninitialized instance of "+l)}return"object"!=typeof b&&b?void a.error("Cannot call method "+b):(this.data("initialized",!0),k.init.apply(this,arguments))}}(jQuery);


// window positions
var x_pos=($(window).width() - $('#loadingimg').width()) / 2;
var y_pos=($(window).height() - $('#loadingimg').height()) / 2;


// gadgets js file 
$(document).ready(function(){  
	
	/*$('.btnwrvwSubmit').click(function (e) {
		console.log('closing')
		$('.wreviewbox .simplemodal-close').trigger("click");
		$('.loginbox').modal();
		return false;
	});*/
  
	$('.btn-vw-write').click(function (e) {
		$('.wreviewbox').modal();		
		return false;
	});

	$('.btn-wreview').click(function (e) {
		$('.wreviewbox').modal();		
		return false;
	});

	  // mouseover rateing starts
  	$('.avg_user_stars .btnrate a').mouseover(function(){
		var cur = $(this);
		cidx = cur.index() + 1;
		tmpwd = cidx * 20;
		$('.frmwreview .txtrate').val(cidx);
		cur.parent().siblings('.rating').width(tmpwd+"%");
		switch (tmpwd) { 
			case 20: 
				cur.parent().parent().next('.rate-ttl').html("(Poor)");
				break;
			case 40: 
				cur.parent().parent().next('.rate-ttl').html("(Fair)");
				break;
			case 60: 
				cur.parent().parent().next('.rate-ttl').html("(Average)");
				break;		
			case 80: 
				cur.parent().parent().next('.rate-ttl').html("(Good)");
				break;
			case 100: 
				cur.parent().parent().next('.rate-ttl').html("(Excellent)");
				break;	
			default:
				cur.parent().parent().next('.rate-ttl').html("(Average)");
		}
	});
  // mouseover rateing ends
  // light box slider/
  
  // light box slider/

	if($('.headerwrap').length > 0){
      var eTop = $('.headerwrap').offset().top;
      $(window).scroll(function() {
            mycurpos1 = eTop - $(window).scrollTop(); // current postion
            mynewpos = 0;
            if(mycurpos1 <= mynewpos){
                $('.headerwrap').addClass('header-outer').css("top", mynewpos+"px");
            }
            else{
                $('.headerwrap').removeClass('header-outer').removeAttr("style");
            }
     });
   }
	  slider1 = $('.searchpage').bxSlider({
	   slideMargin:16,
	   slideWidth: 5000,
		minSlides: 3,
		maxSlides: 3,
		moveSlides:1,
  });

  	  slider2 = $('.topcaompare').bxSlider({
	   slideMargin:16,
	   slideWidth: 5000,
		minSlides: 3,
		maxSlides: 3,
		moveSlides:1,
  });



 $('.cmp-ftr-ttlbx').click(function(){
 	$(this).next(".cmp-ftr-ddl").slideToggle().siblings('.mr-brand').slideToggle();
 	$(this).find('.coll').toggleClass("expa");
 });
  
 /*$('.cmp-ftr-ttlbx').click(function(){
		$(this).siblings(".cmp-ftr-ddl").slideToggle().siblings('.mr-brand').slideToggle();
		$(this).find('.coll').toggleClass("expa");
	});
 */ 
  
              /*$('.nstSlider').nstSlider({
                "left_grip_selector": ".leftGrip",
                "right_grip_selector": ".rightGrip",
                "value_bar_selector": ".bar",
             
                "value_changed_callback": function(cause, leftValue, rightValue) {
                    $('.leftLabel').text(leftValue);
                    $('.rightLabel').text(rightValue);
                    $('.leftLabel').val(leftValue);
					$('.rightLabel').val(rightValue);
					
					var price = leftValue+'-'+rightValue;
  					urlArr['price'] = price;
  					submitUrl(urlArr);
					
                },
            });*/
			$('.nstSlider').nstSlider({
			        "left_grip_selector": ".leftGrip",
			        "right_grip_selector": ".rightGrip",
			        "value_bar_selector": ".bar",
			        "value_changed_callback": function(cause, leftValue, rightValue) {
			            //$('.leftLabel').text(leftValue);
			            //$('.rightLabel').text(rightValue);
			            $('.leftLabel').val(leftValue);
			            $('.rightLabel').val(rightValue);
			            //$( "#findcars" ).submit();
			             var price = leftValue+'-'+rightValue;
			             slider_price_range = leftValue+'-'+rightValue;
			             console.log(leftValue+'-'+rightValue)
	  					urlArr['price'] = price;
			        },
			        'user_mouseup_callback': function(cause, leftValue, rightValue) {
			           
	  					submitUrl(urlArr);	
				          $( "#findcars" ).submit();
				    },
			    })

              //$('#findcars').submit();
    		  $( "#button-top" ).click(function() {
			var mbnt=$( this );
			$( ".innerTop" ).slideToggle(function() {
				mbnt.find("i").toggleClass("bntm");
			});
		  });
  
  $( ".mr-brand" ).click(function() {
		var btnmr=$(this);
		btnmr.siblings('.cmp-ftr-ddl').find('.cmp-mor').slideToggle();
	});
  
});
//document ready end  
  function showHideDiv(sDivId)
{
	var divstyle = new String();
	divstyle = document.getElementById(sDivId).style.display;
	if(divstyle.toLowerCase()=="block")
	{
		document.getElementById(sDivId).style.display = "none";

	}
	else
	{
		document.getElementById(sDivId).style.display = "block";
	}
}
 
//variant page slider
   $('.mPic-thumb ul li').show();
   variantslide = $('.mPic-thumb ul').bxSlider({
                slideMargin: 10,
                slideWidth: 5000,
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                //preloadImages: "all",
                responsive: true,
                pager : false,
        });

        $('.mPic-thumb li a').click(function(){
                var bpic = $(this).attr('data-url');
                $('.mPic-big img').attr('src',bpic);
        });

$('.hpslider .hpitem').show();
	hpslider = $('.hpslider').bxSlider({
	        slideMargin:16,
        	slideWidth: 5000,
	        minSlides: 1,
	        maxSlides: 1,
	        moveSlides:1,
	        startSlide: 0,
	        auto : true,
	        pause : 7000,
	});
 
 ///////////////////////////////////sachin ////////////////////////////////// 
  function addBrandChecked(newElement,brand_id){

	if(newElement){
		brandArr.push(newElement);
		var brandStr = brandArr.join('_');
		urlArr['brand'] = brandStr;
	}	
	return false;
}
function removeBrandChecked(searchElement,brand_id,submiturl){
	var len = brandArr.length;
	var brandStr;
	for(i=0;i<len;i++){
		if(brandArr[i] == searchElement){
			brandArr.splice(i,1);
		}
	}
	if(brandArr.length > 0){
		brandStr = brandArr.join('_');
		urlArr['brand'] = brandStr;
	}else{
		delete urlArr['brand'];
	}	
	if(submiturl){
		var queryStr = submitUrl(urlArr);
		setTimeout(function(){location.href = queryStr;},0);
	}
	return true;
}
function removeAllBrands(){
	 delete urlArr['brand'];
}

function removeAllChecked(submiturl){
	 delete urlArr['brand'];
	 delete  urlArr['phone-type'];
	 delete  urlArr['availability'];
	 delete  urlArr['form-factor'];
	 delete  urlArr['input-mechanism'];
	 delete  urlArr['RAM'];
	 delete  urlArr['features'];
	 delete  urlArr['network-type'];
	 delete  urlArr['sim'];
	 delete  urlArr['networks'];
	 delete  urlArr['camera'];
	 delete  urlArr['os'];
	 delete  urlArr['processor'];
	 delete  urlArr['screen-size'];
	 delete  urlArr['announced'];
	 if(submiturl){
		var queryStr = submitUrl(urlArr);
		$('#findcars').submit();
		setTimeout(function(){location.href = queryStr;},0);

	}
}

function addPhoneTypeFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		phoneTypeArr.push(feature_name);	
		var phoneTypeStr = phoneTypeArr.join('_');
		urlArr['phone-type'] = phoneTypeStr;
	}
	return false;
}
function removePhoneTypeFeature(searchElement){
	var len = phoneTypeArr.length;
	var phoneTypeStr;
	for(i=0;i<len;i++){
		if(phoneTypeArr[i] == searchElement){
			phoneTypeArr.splice(i,1);
		}
	}	
	if(phoneTypeArr.length > 0){
		phoneTypeStr = phoneTypeArr.join('_');
		urlArr['phone-type'] = phoneTypeStr;
	}else{
		delete urlArr['phone-type'];
	}
	return false;
}

function addOperatingSystemFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		OperatingSystemArr.push(feature_name);	
		var OperatingSystemStr = OperatingSystemArr.join('_');
		urlArr['os'] = OperatingSystemStr;
	}
	return false;
}
function removeOperatingSystemFeature(searchElement){
	var len = OperatingSystemArr.length;
	var fOperatingSystemStr;
	for(i=0;i<len;i++){
		if(OperatingSystemArr[i] == searchElement){
			OperatingSystemArr.splice(i,1);
		}
	}	
	if(OperatingSystemArr.length > 0){
		OperatingSystemStr = OperatingSystemArr.join('_');
		urlArr['os'] = OperatingSystemStr;
	}else{
		delete urlArr['os'];
	}
	return false;
}

function addAvailabilityFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		AvailabilityArr.push(feature_name);	
		var AvailabilityStr = AvailabilityArr.join('_');
		urlArr['availability'] = AvailabilityStr;
	}
	return false;
}
function removeAvailabilityFeature(searchElement){
	var len = AvailabilityArr.length;
	var AvailabilityStr;
	for(i=0;i<len;i++){
		if(AvailabilityArr[i] == searchElement){
			AvailabilityArr.splice(i,1);
		}
	}	
	if(AvailabilityArr.length > 0){
		AvailabilityStr = AvailabilityArr.join('_');
		urlArr['availability'] = AvailabilityStr;
	}else{
		delete urlArr['availability'];
	}
	return false;
}

function addFormFactorFeature(feature_name){
	
	if(feature_name){
		FormFactorArr.push(feature_name);	
		var FormFactorStr = FormFactorArr.join('_');
		urlArr['form-factor'] = FormFactorStr;
	}
	return false;
}
function removeFormFactorFeature(searchElement){
	var len = FormFactorArr.length;
	var FormFactorStr;
	for(i=0;i<len;i++){
		if(FormFactorArr[i] == searchElement){
			FormFactorArr.splice(i,1);
		}
	}	
	if(FormFactorArr.length > 0){
		FormFactorStr = FormFactorArr.join('_');
		urlArr['form-factor'] = FormFactorStr;
	}else{
		delete urlArr['form-factor'];
	}
	return false;
}

function addInputMechanismFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		InputMechanismArr.push(feature_name);	
		var InputMechanismStr = InputMechanismArr.join('_');
		urlArr['input-mechanism'] = InputMechanismStr;
	}
	return false;
}
function removeInputMechanismFeature(searchElement){
	var len = InputMechanismArr.length;
	var InputMechanismStr;
	for(i=0;i<len;i++){
		if(InputMechanismArr[i] == searchElement){
			InputMechanismArr.splice(i,1);
		}
	}	
	if(InputMechanismArr.length > 0){
		InputMechanismStr = InputMechanismArr.join('_');
		urlArr['input-mechanism'] = InputMechanismStr;
	}else{
		delete urlArr['input-mechanism'];
	}
	return false;
}

function addRAMFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		RAMArr.push(feature_name);	
		var RAMStr = RAMArr.join('_');
		urlArr['ram'] = RAMStr;
	}
	return false;
}
function removeRAMFeature(searchElement){
	var len = RAMArr.length;
	var RAMStr;
	for(i=0;i<len;i++){
		if(RAMArr[i] == searchElement){
			RAMArr.splice(i,1);
		}
	}	
	if(RAMArr.length > 0){
		RAMStr = RAMArr.join('_');
		urlArr['ram'] = RAMStr;
	}else{
		delete urlArr['ram'];
	}
	return false;
}

function addFeaturesFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		FeaturesArr.push(feature_name);	
		var FeaturesStr = FeaturesArr.join('_');
		urlArr['features'] = FeaturesStr;
	}
	return false;
}
function removeFeaturesFeature(searchElement){
	var len = FeaturesArr.length;
	var FeaturesStr;
	for(i=0;i<len;i++){
		if(FeaturesArr[i] == searchElement){
			FeaturesArr.splice(i,1);
		}
	}	
	if(FeaturesArr.length > 0){
		FeaturesStr = FeaturesArr.join('_');
		urlArr['features'] = FeaturesStr;
	}else{
		delete urlArr['features'];
	}
	return false;
}

function addNetworkTypeFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		NetworkTypeArr.push(feature_name);	
		var NetworkTypeStr = NetworkTypeArr.join('_');
		urlArr['network-type'] = NetworkTypeStr;
	}
	return false;
}
function removeNetworkTypeFeature(searchElement){
	var len = NetworkTypeArr.length;
	var NetworkTypeStr;
	for(i=0;i<len;i++){
		if(NetworkTypeArr[i] == searchElement){
			NetworkTypeArr.splice(i,1);
		}
	}	
	if(NetworkTypeArr.length > 0){
		NetworkTypeStr = NetworkTypeArr.join('_');
		urlArr['network-type'] = NetworkTypeStr;
	}else{
		delete urlArr['network-type'];
	}
	return false;
}

function addNoofSimFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		NoSimArr.push(feature_name);	
		var NoSimStr = NoSimArr.join('_');
		urlArr['sim'] = NoSimStr;
	}
	return false;
}
function removeNoofSimFeature(searchElement){
	var len = NoSimArr.length;
	var NoSimStr;
	for(i=0;i<len;i++){
		if(NoSimArr[i] == searchElement){
			NoSimArr.splice(i,1);
		}
	}	
	if(NoSimArr.length > 0){
		NoSimStr = NoSimArr.join('_');
		urlArr['sim'] = NoSimStr;
	}else{
		delete urlArr['sim'];
	}
	return false;
}

function addNetworkFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		NetworkArr.push(feature_name);	
		var NetworkStr = NetworkArr.join('_');
		urlArr['networks'] = NetworkStr;
	}
	return false;
}
function removeNetworkFeature(searchElement){
	var len = NetworkArr.length;
	var NetworkStr;
	for(i=0;i<len;i++){
		if(NetworkArr[i] == searchElement){
			NetworkArr.splice(i,1);
		}
	}	
	if(NetworkArr.length > 0){
		NetworkStr = NetworkArr.join('_');
		urlArr['networks'] = NetworkStr;
	}else{
		delete urlArr['networks'];
	}
	return false;
}

function addPrimaryCameraFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		PrimaryCameraArr.push(feature_name);	
		var PrimaryCameraStr = PrimaryCameraArr.join('_');
		urlArr['camera'] = PrimaryCameraStr;
	}
	return false;
}
function removePrimaryCameraFeature(searchElement){
	var len = PrimaryCameraArr.length;
	var PrimaryCameraStr;
	for(i=0;i<len;i++){
		if(PrimaryCameraArr[i] == searchElement){
			PrimaryCameraArr.splice(i,1);
		}
	}	
	if(PrimaryCameraArr.length > 0){
		PrimaryCameraStr = PrimaryCameraArr.join('_');
		urlArr['camera'] = PrimaryCameraStr;
	}else{
		delete urlArr['camera'];
	}
	return false;
}

function addProcessorFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		ProcessorArr.push(feature_name);	
		var ProcessorStr = ProcessorArr.join('_');
		urlArr['processor'] = ProcessorStr;
	}
	return false;
}
function removeProcessorFeature(searchElement){
	var len = ProcessorArr.length;
	var ProcessorStr;
	for(i=0;i<len;i++){
		if(ProcessorArr[i] == searchElement){
			ProcessorArr.splice(i,1);
		}
	}	
	if(ProcessorArr.length > 0){
		ProcessorStr = ProcessorArr.join('_');
		urlArr['processor'] = ProcessorStr;
	}else{
		delete urlArr['processor'];
	}
	return false;
}

function addScreenSizeFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		ScreenSizeArr.push(feature_name);	
		var ScreenSizeStr = ScreenSizeArr.join('_');
		urlArr['screen-size'] = ScreenSizeStr;
	}
	return false;
}
function removeScreenSizeFeature(searchElement){
	var len = ScreenSizeArr.length;
	var ScreenSizeStr;
	for(i=0;i<len;i++){
		if(ScreenSizeArr[i] == searchElement){
			ScreenSizeArr.splice(i,1);
		}
	}	
	if(ScreenSizeArr.length > 0){
		ScreenSizeStr = ScreenSizeArr.join('_');
		urlArr['screen-size'] = ScreenSizeStr;
	}else{
		delete urlArr['screen-size'];
	}
	return false;
}

function addAnnouncedFeature(feature_name){
	//alert(feature_name);
	if(feature_name){
		AnnouncedArr.push(feature_name);	
		var AnnouncedStr = AnnouncedArr.join('_');
		urlArr['announced'] = AnnouncedStr;
	}
	return false;
}
function removeAnnouncedFeature(searchElement){
	var len = AnnouncedArr.length;
	var AnnouncedStr;
	for(i=0;i<len;i++){
		if(AnnouncedArr[i] == searchElement){
			AnnouncedArr.splice(i,1);
		}
	}	
	if(AnnouncedArr.length > 0){
		AnnouncedStr = AnnouncedArr.join('_');
		urlArr['announced'] = AnnouncedStr;
	}else{
		delete urlArr['announced'];
	}
	return false;
}

function addFeatureChecked(feature_name,feature_group_name){
	
	if(feature_group_name =='Phone Type'){
		addPhoneTypeFeature(feature_name);
	}else if(feature_group_name == 'Availability'){
		addAvailabilityFeature(feature_name);
	}else if(feature_group_name == 'Form Factor'){
		addFormFactorFeature(feature_name);
	}else if(feature_group_name == 'Input Mechanism'){
		addInputMechanismFeature(feature_name);
	}else if(feature_group_name == 'RAM'){
		addRAMFeature(feature_name);
	}else if(feature_group_name == 'Features'){
        addFeaturesFeature(feature_name);
    }
    else if(feature_group_name == 'Network Type'){
        addNetworkTypeFeature(feature_name);
	}
	else if(feature_group_name == 'No.of SIM'){
	        addNoofSimFeature(feature_name);
	}
	else if(feature_group_name == 'Network'){
	        addNetworkFeature(feature_name);
	}
	else if(feature_group_name == 'Primary Camera(MP)'){
	        addPrimaryCameraFeature(feature_name);
	}
	else if(feature_group_name == 'Operating System'){
	        addOperatingSystemFeature(feature_name);
	}
	else if(feature_group_name == 'Processor/No.of cores'){
	        addProcessorFeature(feature_name);
	}
	else if(feature_group_name == 'Screen Size(Inches)'){
	        addScreenSizeFeature(feature_name);
	}
	else if(feature_group_name == 'Announced'){
	        addAnnouncedFeature(feature_name);
	}
}
function removeFeatureChecked(feature_name,feature_group_name,submiturl){

	if(feature_group_name == 'Phone Type'){
		removePhoneTypeFeature(feature_name);
	}else if(feature_group_name == 'Availability'){
		removeAvailabilityFeature(feature_name);
	}else if(feature_group_name == 'Form Factor'){
		removeFormFactorFeature(feature_name);
	}else if(feature_group_name == 'Input Mechanism'){
		removeInputMechanismFeature(feature_name);
	}else if(feature_group_name == 'RAM'){
		removeRAMFeature(feature_name);
	}else if(feature_group_name == 'Features'){
                removeFeaturesFeature(feature_name);
    }
    else if(feature_group_name == 'Network Type'){
            removeNetworkTypeFeature(feature_name);
    }
    else if(feature_group_name == 'No.of SIM'){
            removeNoofSimFeature(feature_name);
    }
    else if(feature_group_name == 'Network'){
            removeNetworkFeature(feature_name);
    }
    else if(feature_group_name == 'Primary Camera(MP)'){
            removePrimaryCameraFeature(feature_name);
    }
    else if(feature_group_name == 'Operating System'){
            removeOperatingSystemFeature(feature_name);
    }
    else if(feature_group_name == 'Processor/No.of cores'){
            removeProcessorFeature(feature_name);
    }
    else if(feature_group_name == 'Screen Size(Inches)'){
            removeScreenSizeFeature(feature_name);
    }
    else if(feature_group_name == 'Announced'){
            removeAnnouncedFeature(feature_name);
    }
	//alert(feature_name+"========"+submiturl+"------"+feature_group_name)
	if(submiturl){
		var queryStr = submitUrl(urlArr);
		$('#findcars').submit();
		setTimeout(function(){location.href = queryStr;},0);

	}
	//setTimeout(function(){location.href = queryStr;},0);
}
function submitUrl(urlArr){
	
	//if(urlArr.length <=0){
	//	getPriceArr();
	//}
	var newurlArr = Array();
	for(var key in urlArr) {
		newurlArr.push(key+'-'+urlArr[key]);
	}
	//alert(newurlArr);
	var queryStr = web_url+cat_seo_path+'/'+seo_car_finder+'/'+newurlArr.join('/');
	document.findcars.action = queryStr;
	return queryStr;
}
function handleSearchLoadingBox(){
	$("#findcars input:checkbox").click(function(){
		submitUrl(urlArr);
		loadBox();
		$('#findcars').submit();
	});	
}
// loading box
function loadBox(){
	y_pos = y_pos + $(window).scrollTop();
	$('#loadingimg').show();
	$('#loadingimg').css('position', 'absolute');
	$('#loadingimg').css('margin-left', x_pos);
	$('#loadingimg').css('margin-top', y_pos);
	$('#loadingimg').css('z-index', 999);
}

function hideloadBox(){
	$('#loadingimg').hide();
}

$('document').ready(function(){ // DOM ready
        handleSearchLoadingBox(); // function is used to handle search criteria and loading box.
	var arr_compare_item = [];
	var arr_new_compare = [];
	var j = 0;
	$('.cr-srchbx input:checked').each(function(i){
		var parentaid = $(this).attr('parentaid');
	        var fn = $(this).attr('onclick');
                if(typeof fn == "function"){
                        setTimeout(function(){ fn.apply(); });
                }	
		
		$("#compare_active").removeClass("cr-btncompare dn").addClass("cr-btncompare");
		$("#compare_inactive").removeClass("cr-btncompare bgff").addClass("cr-btncompare bgff dn");
		if($.inArray( parentaid, arr_compare_item )){
			arr_compare_item[j] = parentaid;
			var cr_matching = $(this).parent().parent().parent().parent().find('.cr-matching');
			cr_matching.toggleClass('cr-active');
	        	cr_matching.parent().parent().find('.cr-dtls').slideToggle();
			j++;
		}
	});
});
  
  function getSortByResultList(sortby){
  	document.getElementById("sortproduct").value = sortby;
  	$('#findcars').submit();
  }
  var idsprds = 0 ; var cokpidslen= 0; var totids= 0; var prdids= 0;
  function AddToCompareWidget(product_id,product_name,imagename,comparename,category_id){
  		var cpids = decodeURIComponent(getCookie('cmpids'));
		if(cpids!=''){
			cokpidslen = cpids.split("|").length;
		}

  		if(product_id!=''){
  			idsprds = product_id+",";
			var pidsprds = idsprds.substring(0, idsprds.length - 1);
			prdids = pidsprds.split(",").length;
			
			//alert(totids +"="+ prdids+" + "+ cokpidslen);
			if(totids > 4){
				alert("cannot add more then 4 mobiles in compare");
				return false;
			}
		}else{
			product_id = "";
		}
		//alert(parseInt(prdids)+" + "+parseInt(cokpidslen));
		totids = parseInt(prdids) + parseInt(cokpidslen);
		//alert(decodeURIComponent(getCookie('cmpids'))+"=========================="+parseInt(totids));
		if(totids >0 ){
	  	    var url = web_url+'ajax/add_to_compare.php';
		    $.ajax({
		         url: url,
		         data: 'category_id='+category_id+'&product_id='+product_id,
		         success: function(data){
		                 
		                 document.getElementById('addtocompare').innerHTML = data;
		                 document.getElementById('addtocompare').style.display="block";
		                 //document.getElementById(ajaxloaderid).style.display = "none";
				 },
		         async:false
	        });
		}
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
} 

function searchKeyPress(e)
    {
        // look for window.event in case event isn't passed in
        //if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13)
        {
            //console.log('submit me!');
            var minprice = document.getElementById("minprice").value;
            var maxprice = document.getElementById("maxprice").value;
            var price = minprice+'-'+maxprice;
			//console.log(minprice+'-'+maxprice)
			urlArr['price'] = price;
			submitUrl(urlArr);	
			$( "#findcars" ).submit();
            //$( "#findcars" ).submit();
        }
    }
    
    function updatefilter(){
		//console.log('submit me!');
		var minprice = document.getElementById("minprice").value;
		var maxprice = document.getElementById("maxprice").value;
		var price = minprice+'-'+maxprice;
		//console.log(minprice+'-'+maxprice)
		urlArr['price'] = price;
		submitUrl(urlArr);	
		$( "#findcars" ).submit();
    }

    function getCompareModelByBrand(divId,surl,divname,param){
	var iBrndId=document.getElementById('Brand_'+divId).value;
	var str="action=model&brand_id="+iBrndId;
	var data = $.ajax({url: siteURL+surl,data: str,async: false}).responseText;		
	$('#Model_'+divId).html(data);	
	$('#ModelVariant_'+divId).empty().append('<option value="">--Select Variant--</option>');
	return true;
}

var newCompareStr = "";
var isFirst = false;
var newCompareArr = Array();
var comparePNameArr = Array();
function QueryStr(newCompareStr,catid,currenttab){

	var queryArr = Array();
	var queryStr='';
	if(newCompareStr!=''){
		queryArr.push(newCompareStr);                                
	}
	if(queryArr.length > 0){
		queryStr = queryArr.join(',');
	}
	return queryStr;
}

function addNewCompareProduct(id){
        var brandid = $('#Brand_'+id).val();
        var brandname = constructURL($('#Brand_'+id+' option:selected').text());
        if(!brandid){
                alert("Please select Brand");
                return false;
        }
        var productid = $('#Model_'+id).val();
        var modelname = constructURL($('#Model_'+id+' option:selected').text());
        if(!productid){
                alert("Please select Model");
                return false;
        }
        /*var productid = $('#ModelVariant_'+id).val();
        var productname = constructURL($('#ModelVariant_'+id+' option:selected').text());
        if(!productid){
                alert("Please select Variant");
                return false;
        }*/
	var pname = brandname+'-'+modelname;
	//alert(productid+' & '+pname+' & '+comparedIds);return false;
	/*
	var seoArr = Array();
	if(comparedIds != ''){	
		var cnt = id - 1;
		var nameArr = comparename.split('|');
		for(i=0;i<cnt;i++){
			var product = constructURL($('#prodid_'+(i+1)+' option:selected').text());
                	var seo_str = Array(nameArr[i],product);
                	seo_str = seo_str.join('-');
                	seoArr.push(seo_str);
		}

	}
	seoArr.push(pname);
	var seoStr = seoArr.join('-Vs-');
	*/
        if(id == 1){isFirst = true;}
        if(productid){
		 newCompareArr = addCompareProduct(comparedIds,pname);
                 newCompareStr = newCompareArr.join(',');
                 compare();
                 return true;
        }
        return false;
}

function constructURL(data){
	var cleanStr = removespecialchars(data);
        cleanStr = cleanStr.replace(/[^a-zA-Z0-9\s]/g,"-");
        cleanStr = cleanStr.toLowerCase();
        cleanStr = cleanStr.split(' ');
        cleanStr = cleanStr.join('-');
        return cleanStr;
}

function removespecialchars(data){
	var pos = data.search("-");
    if (pos != -1) {
        data = data.replace(" -","-");
        data = data.replace("- ","-");
    }
	data = data.replace("."," ");
	data = data.replace("   "," ");
	data = data.replace("  "," ");
	data = data.replace(" ","-");
	//var iChars = "!@#$%^&()+=-[]\\\';,./{}|\":<>?~_";
	var iChars = "!'_";
	data = data.replace(' (',"-");
	data = data.replace('(',"");
	data = data.replace(')',"");
	for (var i = 0; i < iChars.length; i++) {
		var chr = iChars.charAt(i);
		var pos = data.search(chr);
		if (pos != -1) {
			data = data.replace(chr,"");	
		}
	}
    var new_data = data.replace("----",'-');
    var new_data = data.replace("---",'-');
    var new_data = data.replace("--",'-');
    return new_data;
}

function addCompareProduct(searchArr,newElement){                           
	if(searchArr != ''){                                                       
		var isarray = isArray(searchArr);
		if(isarray == false){                                
			var searchArr = searchArr.split(",");
		}
	}else{
		var searchArr = Array();
	}
	if(isFirst){
		var appendStartArr = Array(newElement);
		searchArr = appendStartArr.concat(searchArr);
	}else{
		searchArr.push(newElement);
	}
	return searchArr;
}

function isArray(obj) {
	if (obj.constructor.toString().indexOf("Array") == -1){
		return false;
	}else{
	return true;
	}
}

function compare(){
     var queryStr = QueryStr(newCompareStr,catid,currenttab);
     var seoArr = queryStr.split(',');
     var seo_str = seoArr.join('-Vs-');
     var redirectUrl1 = web_url+catpath+'/'+'compare/'+seo_str;
     setTimeout(function(){
	location.href = redirectUrl1;
     },0);
    //window.location.href = redirectUrl;
    //return true;
}


	

	var ck_title = /^[ \!#\$%&\'\(\)\*\+,-\.\/0-9\:\?@\:A-Z\[\\\]a-z]{5,100}$/;
	var ck_title1 = /^[ [\r\n\t\]!#\$%&\'\~\`\(\)\*\+,-\.\/0-9\:\?@\:A-Z\[\\\]a-z]{10,3500}$/;
	 function trim(sValue) {
      if(!sValue){ return false; }
      return sValue.replace(/^\s+|\s+$/g,"");
    }


var ratedvalue="";
var commentvalue="";
var titlevalue="";
var que_id_1="";
var total_ans_ques_1="";
var ans_1_1="";
var user_review_1_1="";
var add_review="";
var uid="";
var revemail = "";
var revtotalquestion=1;
var username = "";
var fname = "";
var lname = "";
var brand_id=""; var product_info_id=""; var product_id="";
function submitLoginUserReview(catid,brand_id,product_info_id,product_id){
	username = document.getElementById('wusername').value;
	revemail = document.getElementById('wemail').value;
	var txtrate = document.getElementById('txtrate').value;
	var comment_7 = document.getElementById('comment_7').value;
	var title =  document.getElementById('title').value;
	titlevalue = title;
	commentvalue = comment_7;
	que_id_1 = document.getElementById('que_id_1').value;
	que_id_7 = document.getElementById('que_id_7').value;
	total_ans_ques_1 = document.getElementById('total_ans_ques_1').value;
	algo_1_1 = document.getElementById('algo_1_1').value;
	ques_1_1 = document.getElementById('ques_1_1').value;
	ans_1_1 = document.getElementById('ans_1_1').value;
	user_review_1_1 = document.getElementById('user_review_1_1').value;
	ans_review_1_1 = document.getElementById('ans_review_1_1').value;
	ansstr_1_1 = document.getElementById('ansstr_1_1').value;

	//alert("sasasa");
	if ( trim(txtrate).length > 0 && trim(comment_7).length > 10 && trim(title).length > 5){
		var url = web_url+'ajax/add_user_review.php';
		var dataform = 'catid='+catid+'&brand_id='+brand_id+'&product_info_id='+product_info_id+'&product_id='+product_id+'&txtrate='+ratedvalue+'&comment_7='+encodeURIComponent(commentvalue)+'&title='+encodeURIComponent(titlevalue)+'&que_id_1='+que_id_1+'&total_ans_ques_1='+total_ans_ques_1+'&ans_1_1='+ans_1_1+'&user_review_1_1='+user_review_1_1+'&add_review='+add_review+'&uid='+uid+'&totalquestion='+revtotalquestion+'&username='+username+'&fname='+fname+'&lname='+lname+'&email='+revemail+'&que_id_7='+que_id_7;
		//alert("DATA--"+dataform);
		$.ajax({
		 url: url,
			 data:dataform,
			 type: "POST",
			 success: function(data){
			 		///alert(data);
			         document.getElementById('writereviewmsg').innerHTML = data;
			         document.getElementById('sample-report-modal').style.display ="block";
			         document.getElementById('writereview').style.display="none";
			 },
			 async:false
		});
	}

}
function submitUserReview(catid,brand_id,product_info_id,product_id){

/*	username =document.getElementById('username').value;
	email = document.getElementById('email').value
	alert(username+"======="+email);
	if(email=="" && username ==""){
			//$('.wreviewbox .simplemodal-close').trigger("click");
			//alert(document.getElementById('sample-report-modal').style.display);
			//document.getElementById('sample-report-modal').style.display ='none';
			$('.loginbox').modal();
	}else{*/
//////////alert(username+"====YYYYYYYYYYYYYYYY==="+email);

		if(trim(document.getElementById('title').value) == ''){
			//alert("Please enter a Review Title");
			document.getElementById('errormsgdisplay_title').innerHTML = "please enter a Review Title";
			document.getElementById('errormsgdisplay_title').style.display ='block';
			document.getElementById('title').focus();
			//Err++;
			return false;
		}else if(trim(document.getElementById('title').value)!=''){
			if (!ck_title.test(trim(document.getElementById('title').value))) {
				document.getElementById('errormsgdisplay_title').innerHTML = "please enter valid a Review Title";
				document.getElementById('title').focus();
				document.getElementById('errormsgdisplay_title').style.display ='block';
				//alert("Please enter a Review Title2");
				//Err++;
				return false;
			}else if (trim(document.getElementById('title').value).length < 5) {
				//alert("Please enter a Review Title3");
				document.getElementById('errormsgdisplay_title').innerHTML = "please enter atleast 5 characters";
				//document.getElementById('inputfild_title').className = "inputfild errorhere";
				document.getElementById('title').focus();
				document.getElementById('errormsgdisplay_title').style.display ='block';
				//Err++;
				return false;
			}else{
				//alert("Please enter a Review Title4");
				document.getElementById('errormsgdisplay_title').innerHTML = "&#160;";
				//document.getElementById('inputfild_title').className = "inputfild";
			}
		}
		if(trim(document.getElementById('comment_7').value) == ''){
			document.getElementById('errormsgdisplay_review').innerHTML = "please enter your review";
			document.getElementById('comment_7').focus();
			document.getElementById('errormsgdisplay_review').style.display ='block';
			//Err++;
			return false;
		}else if(trim(document.getElementById('comment_7').value)!=''){
			if (!ck_title1.test(trim(document.getElementById('comment_7').value))) {
				document.getElementById('errormsgdisplay_review').innerHTML = "please enter a valid review";
				document.getElementById('comment_7').focus();
				document.getElementById('errormsgdisplay_review').style.display ='block';
				//Err++;
				return false;
			}else if (trim(document.getElementById('comment_7').value).length < 10) {
				document.getElementById('errormsgdisplay_review').innerHTML = "please enter atleast 10 characters";
				document.getElementById('comment_7').focus();
				//Err++;
				return false;
			}else{
				document.getElementById('errormsgdisplay_review').innerHTML = "&#160;";
			}
			
		}
		/*if(trim(document.getElementById('txtrate').value) == ''){
			document.getElementById('errormsgdisplay_rate').innerHTML = "please rate a review";
			document.getElementById('errormsgdisplay_rate').style.display ='block';
		}else{
			document.getElementById('errormsgdisplay_rate').innerHTML = "&#160;";
		}*/

		//username = document.getElementById('username').value;
		//revemail = document.getElementById('email').value;
		//fname = document.getElementById('fname').value;
		//lname = document.getElementById('lname').value;

		 ratedvalue = document.getElementById('txtrate').value;
		 commentvalue = document.getElementById('comment_7').value;
		 que_id_7 = document.getElementById('que_id_7').value;
		 titlevalue = document.getElementById('title').value;
		 que_id_1 = document.getElementById('que_id_1').value;
		 total_ans_ques_1 = document.getElementById('total_ans_ques_1').value;
		 ans_1_1 = document.getElementById('ans_1_1').value;
		 document.getElementById('user_review_1_1').value = document.getElementById('txtrate').value;
		 add_review = document.getElementById('add_review').value;
		 user_review_1_1= document.getElementById('user_review_1_1').value;

		if(validateRating() == false){
			return false;
		}else{
			if(checkLoginStatus()){

				addUserDetailsToReview("","");
			} else {
				$('.wreviewbox .simplemodal-close').trigger("click");
				$('.loginbox').modal();
			 	document.getElementById('txtrate').value = ratedvalue;
			 	document.getElementById('comment_7').value = commentvalue;
			 	document.getElementById('title').value = titlevalue ;
			 document.getElementById('que_id_1').value = que_id_1;
			 document.getElementById('que_id_7').value = que_id_7;
			 document.getElementById('total_ans_ques_1').value = total_ans_ques_1;
			 document.getElementById('ans_1_1').value = ans_1_1;
			 document.getElementById('user_review_1_1').value = user_review_1_1;
			 document.getElementById('add_review').value = add_review; 
			 document.getElementById('user_review_1_1').value = user_review_1_1;
			}
		}


/*		 if ( trim(document.getElementById('txtrate').value).length > 0 && trim(document.getElementById('comment_7').value).length > 10 && trim(document.getElementById('title').value).length > 5){
			var url = web_url+'ajax/add_user_review.php';
			var dataform = 'catid='+catid+'&brand_id='+brand_id+'&product_info_id='+product_info_id+'&product_id='+product_id+'&txtrate='+ratedvalue+'&comment_7='+encodeURIComponent(commentvalue)+'&title='+encodeURIComponent(titlevalue)+'&que_id_1='+que_id_1+'&total_ans_ques_1='+total_ans_ques_1+'&ans_1_1='+ans_1_1+'&user_review_1_1='+user_review_1_1+'&add_review='+add_review+'&uid='+uid+'&totalquestion='+revtotalquestion+'&username='+username+'&fname='+fname+'&lname='+lname+'&email='+revemail;
			alert("DATA--"+dataform);
			$.ajax({
		         url: url,
		      	 data:dataform,
		         type: "POST",
    	         success: function(data){
    	         		///alert(data);
		                 document.getElementById('writereviewmsg').innerHTML = data;
		                 document.getElementById('sample-report-modal').style.display ="block";
		                 document.getElementById('writereview').style.display="none";
		         },
		         async:false
	        });
		}*/
	
}

function validateRating(){
	  var totalquestion = document.getElementById('totalquestion').value;
	  //for(i=1;i<=1;i++){
		var que_id = document.getElementById('que_id_1').value;
		var totalanscnt = document.getElementById('total_ans_ques_1').value;
		//for(ans=1;ans<=1;ans++){
			//alert('ans_'+que_id+'_'+ans);
		  var ans_id = document.getElementById('ans_1_1').value;
		  var is_reviewed = document.getElementById('user_review_1_1').value;
		  document.getElementById('errormsgdisplay_que_id_1').innerHTML = "";
		  document.getElementById('errormsgdisplay_que_id_1').style.display = 'none';
		  //alert(is_reviewed+"DDDDDDDDDDDDDDdd");
		  if(is_reviewed == 0){
			//var ansTitle = document.getElementById('ans_review_1_1').value;
			//alert("please rate "+ansTitle);
			document.getElementById('errormsgdisplay_que_id_1').innerHTML = "please rate a review";
			document.getElementById('errormsgdisplay_que_id_1').style.display = 'block';
			return false;
		  }
		  /*else{
			alert("dasdasdasdas");
			alert('errormsgdisplay_que_id_'+i);
			document.getElementById('errormsgdisplay_que_id_'+i).style.display = 'none';
			return false;
		  }*/
		//}                
	  //}
	  return true;
	}
/*function validateRating(){
	  var totalquestion = document.getElementById('totalquestion').value;
	  for(i=1;i<=1;i++){
		var que_id = document.getElementById('que_id_'+i).value;
		var totalanscnt = document.getElementById('total_ans_ques_'+que_id).value;
		for(ans=1;ans<=1;ans++){
			alert('ans_'+que_id+'_'+ans);
		  var ans_id = document.getElementById('ans_'+que_id+'_'+ans).value;
		  var is_reviewed = document.getElementById('user_review_'+que_id+'_'+ans_id).value;
		  document.getElementById('errormsgdisplay_que_id_'+i).innerHTML = "";
		  document.getElementById('errormsgdisplay_que_id_'+i).style.display = 'none';
		  if(is_reviewed == 0){
			var ansTitle = document.getElementById('ans_review_'+que_id+'_'+ans_id).value;
			//alert("please rate "+ansTitle);
			document.getElementById('errormsgdisplay_que_id_'+i).innerHTML = "please rate "+ansTitle;
			document.getElementById('errormsgdisplay_que_id_'+i).style.display = 'block';
			return false;
		  }
		  
		}                
	  }
	  return true;
	}*/

//////////////////////// abhijeet //////////////////////////

/* search box */

$('.hpfindmob').click(function(){

	var searchUrl = web_url + cat_path + '/search';
	if($('#sb_bid').val()!=''){
		searchUrl += ('/brand '+$('#sb_bid').val()).replace(/\s+/g, '-').toLowerCase();
	}
	if($('#sb_ptid').val()!=''){
		searchUrl += ('/phone type '+$('#sb_ptid').val()).replace(/\s+/g, '-').toLowerCase();
	}
	if(slider_price_range!=''){
		searchUrl += ('/price '+slider_price_range).replace(/\s+/g, '-').toLowerCase();
	}
	setTimeout(function(){location.href = searchUrl;},0);	
});

/* search box */

function DoHelpFul(review_id,flag,divname,category_id){
	//_gaq.push(['_trackEvent', 'Userfullreviews', 'click', 'Voteforuserreview']);
	var surl="ajax/do_rate_review.php?";
	var str="action=optionrate&review_id="+review_id+"&flag="+flag+"&category_id="+category_id;
	//alert(siteURL+surl+"?"+str);
	$.ajax({
			url: siteURL+surl,
			data: str,
			success: function(data){
				data = $.trim(data);
				if(data=='done'){
				  	alert('Already Rated!');
				}else{
					$('.helpful-vote').html(data);
					$('#yesnodiv').hide();
				}
            },
            async:false
        });
}

function searchUpcomingCars(){
        var iBrandId = document.getElementById('Brand').value;
	var iFeatureId = document.getElementById('Feature').value;
	
	var brand_name = "";
	var feature_name = "";
	if(iBrandId != ""){
                var url = siteURL+"ajax/get_city_brand_name.php";
                $.ajax({
                        url: url,
                        data: 'action=get_brand_name&brand_id='+iBrandId,
                        success: function(data){
                                //alert(data);
                                brand_name = data;
                        },
                        async:false
                });
        }
        if(iFeatureId != ""){
                var url = siteURL+"ajax/get_featurename.php";
                $.ajax({
                        url: url,
                        data: 'feature_id='+iFeatureId,
                        success: function(data){
                                feature_name = data;
                        },
                        async:false
                });
        }

        var qstr = "";
        var url = "";
        if((iBrandId != "") && (iFeatureId != "")){
                qstr = "mobile-phones/upcoming-mobiles/"+brand_name+"/"+feature_name;
        }else if((iBrandId != "") && (iFeatureId == "")){
                qstr = "mobile-phones/upcoming-mobiles/"+brand_name;
        }else if((iBrandId == "") && (iFeatureId != "")){
                qstr = "mobile-phones/upcoming-mobiles/"+feature_name;
        }else if((iBrandId == "") && (iFeatureId == "")){
                qstr = "mobile-phones/upcoming-mobiles";
        }
        url = siteURL+qstr;
        //alert(url)
        document.car_search.action = url;
        document.car_search.submit();
}


$(function(){
	
    $('#word').keyup(function(e){
    	
        var input = $(this).val();
        var url = siteURL+"ajax/autocomplete.php";
        $.ajax({
            type: "get",
            url: url,
            data: {word: input},
            async: true,
            success: function(data){
            	//alert(data)
                var outWords = $.parseJSON(data);
                $('#auto').html('');

                for(x = 0; x < outWords.length; x++){
                    //alert(outWords[x]['title']);
                    $('#auto').prepend('<div><a href="'+outWords[x]['link']+'">'+outWords[x]['title']+'</a></div>'); //Fills the #auto div with the options
                }
            }
        })
    })
});
