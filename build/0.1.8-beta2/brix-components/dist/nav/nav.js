define(["jquery","underscore","brix/loader","brix/base"],function(e,o,i,n){function t(i,n,t){o.each(n,function(o,n){var s=e(o).text();e("".anchor(s)).insertBefore(o);var a=!window.location.hash&&0===n||window.location.hash.slice(1)===s?"active":"",r=e(s.link("#"+s));r.addClass("list-group-item").addClass(a).appendTo(i).on("click",function(){e(this).addClass("active").siblings().removeClass("active")}),t.push(r[0])})}function s(i,n){var t,s,a=e(window),r=a.scrollTop()+a.height()/2;o.each(i,function(o,i){o=e(o);var n,a=o.offset().top,c=a+o.outerHeight();r>=a&&c>=r?n=0:(a>r&&(n=a-r),r>c&&(n=r-c)),(0===i||t>n)&&(t=n,s=i)}),n.eq(s).addClass("active").siblings().removeClass("active")}return n.extend({options:{selector:""},render:function(){var n=this,a=e(this.element);i.boot(function(){var i=e(n.options.selector),r=e();t(a,i,r),e(window).on("scroll",o.throttle(function(){s(i,r)},10))})}})});