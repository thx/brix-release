!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jquery"),require("underscore"),require("handlebars"),require("components/base")):"function"==typeof define&&define.amd?define(["jquery","underscore","handlebars","components/base"],e):"object"==typeof exports?exports["components/errortips"]=e(require("jquery"),require("underscore"),require("handlebars"),require("components/base")):t["components/errortips"]=e(t.jquery,t.underscore,t.handlebars,t["components/base"])}(this,function(t,e,i,o){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){var o,n;o=[i(2),i(3),i(4),i(5),i(6)],n=function(t,e,i,o,n){function r(){arguments.length&&(this.element=t(arguments[0]),this.options=e.extend(this.options,arguments[1]))}var s={EVENTS:{".errortips-icon":{click:function(t,e){e._tips.fadeOut({duration:250,easing:"swing",complete:function(){e._tips.remove(),e.trigger("complete.errortips")}})}}}};return e.extend(r.prototype,o.prototype,{options:{width:180,msg:"操作<span>不正确</span>，请重新操作",duration:null,shake:!0},render:function(){},destroy:function(){this._tips&&this._tips.remove()},showTips:function(e){var i=t(this.element);i.hasClass("btn-error")||(t(".btn-error-tips[data-btn-error]").length&&(clearTimeout(this.itv),t(".btn-error-tips[data-btn-error]").remove()),this.options.shake&&this._shake(),this._showTips(e),this._bindUI())},_bindUI:function(){var e=this._tips,i=this;t.each(s,function(o,n){switch(o){case"EVENTS":t.each(n,function(o,n){t.each(n,function(t,n){e.delegate(o,t,function(t){n(t,i)})})});break;case"DOCEVENTS":t.each(n,function(e,o){t.each(o,function(o,n){t(document).delegate(e,o,function(t){n(t,i)})})});break;case"WINEVENTS":t.each(n,function(e,o){t(window).on(e,function(t){o(t,i)})})}})},_showTips:function(e){var o=this,r=t(this.element),s=this.options.width,a=this.options.duration,p=30;e=e||this.options.msg,o.fadeOut&&o.fadeOut.stop(),a&&(this.itv=setTimeout(function(){o.fadeOut=o._tips.fadeOut({duration:250,easing:"swing",complete:function(){o._tips.remove(),o.trigger("complete.errortips",o)}})},a));var c=r.offset(),u=n,d=r.outerWidth()/2-10,h=i.compile(u)({width:s,msg:e,left:d+p,duration:a});this._tips=t(h),t("body").append(this._tips);var f=this._tips.outerWidth(),l=this._tips.outerHeight(),m=c.left-p,w=c.top-l-20,b=0,_=t(window).width(),v=t(window).height(),x=m+f-_;if(x>0&&(m-=x,this._tips.find(".arrow").css({left:d+p+x})),m<0&&(this._tips.find(".arrow").css({left:d+p+m}),m=0),w<0?(this._tips.find(".arrow").addClass("arrow-up"),w=c.top+r.outerHeight()+20,b=w-25):b=w+25,r.is(":hidden")){this._tips.find(".arrow").hide();var g=(_-f)/2,y=(v-l)/2;return this._tips.css({left:g,top:y,opacity:0}),void this._tips.animate({left:g,top:y,opacity:1},250,"swing")}this._tips.css({left:m,top:b,opacity:0}),this._tips.animate({left:m,top:w,opacity:1},250,"swing")},_shake:function(){var e=t(this.element),i=e.width(),o=e.html();e.addClass("btn-error"),e.width(i),e.html('<i class="errortips-icon">&#xe600;</i>'),setTimeout(function(){e.html(o),e.removeClass("btn-error")},1e3)}}),r}.apply(e,o),!(void 0!==n&&(t.exports=n))},function(e,i){e.exports=t},function(t,i){t.exports=e},function(t,e){t.exports=i},function(t,e){t.exports=o},function(t,e,i){var o;o=function(){return' <div class="btn-error-tips" data-btn-error="true" style="width: {{width}}px">\n  {{{msg}}}\n  <i class="arrow" style="left: {{left}}px;"></i>\n  {{^duration}}\n  <i class="errortips-icon">&#xe601;</i>\n  {{/duration}}\n</div>'}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))}])});
//# sourceMappingURL=errortips.js.map