"use strict";$(function(){function t(){n.each(function(){var t=$(this),o=$('#dot-nav a[href="#'+t.attr("id")+'"]').data("number")-1;t.offset().top-$(window).height()/2<$(window).scrollTop()&&t.offset().top+t.height()-$(window).height()/2>$(window).scrollTop()?e.eq(o).addClass("is-selected"):e.eq(o).removeClass("is-selected")})}function o(t){$("body,html").animate({scrollTop:t.offset().top+50},600)}var n=$(".section"),e=$("#dot-nav a"),i=$("#overlay a");t(),$(window).on("scroll",function(){t()}),e.on("click",function(t){t.preventDefault(),o($(this.hash))}),i.on("click",function(t){t.preventDefault(),o($(this.hash)),$("#toggle").click()}),$(".scroll-down").on("click",function(t){t.preventDefault(),o($(this.hash))}),$(".touch #dot-nav a").on("click",function(){$(".touch #dot-nav").removeClass("open")}),$(document).scroll(function(){var t=$(window).width(),o=$(this).scrollTop(),n=$("#dot-nav");t>768&&o>500?n.fadeIn():n.fadeOut()}),$("#toggle").click(function(t){$(this).toggleClass("active"),$("#overlay").toggleClass("open"),$("body").toggleClass("noScroll")}),$(window).on("resize",function(t){var o=$(window).width(),n=$("#overlay").hasClass("open");o>768?($("#dot-nav").show(),n&&($("#toggle").removeClass("active"),$("#overlay").removeClass("open"))):768>o&&$("#dot-nav").hide()});var a=$(".contact-input");a.focus(function(){$(this).parent().addClass("is-active is-completed")}),a.focusout(function(){""===$(this).val()&&$(this).parent().removeClass("is-completed"),$(this).parent().removeClass("is-active")}),$(document).one("focus.textarea",".autoExpand",function(){var t=this.value;this.value="",this.baseScrollHeight=this.scrollHeight,this.value=t}).on("input.textarea",".autoExpand",function(){var t=0|this.getAttribute("data-min-rows");this.rows=t;var o=Math.ceil((this.scrollHeight-this.baseScrollHeight)/17);this.rows=t+o});var s={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return s.Android()||s.BlackBerry()||s.iOS()||s.Opera()||s.Windows()}};s.any()||skrollr.init({render:function(t){},smoothScrolling:!1,forceHeight:!1})});