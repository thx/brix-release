!function(n,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("jquery"),require("underscore"),require("brix/base")):"function"==typeof define&&define.amd?define(["jquery","underscore","brix/base"],i):"object"==typeof exports?exports["components/spin"]=i(require("jquery"),require("underscore"),require("brix/base")):n["components/spin"]=i(n.jquery,n.underscore,n["brix/base"])}(this,function(n,i,e){return function(n){function i(s){if(e[s])return e[s].exports;var c=e[s]={exports:{},id:s,loaded:!1};return n[s].call(c.exports,c,c.exports,i),c.loaded=!0,c.exports}var e={};return i.m=n,i.c=e,i.p="",i(0)}([function(n,i,e){n.exports=e(1)},function(n,i,e){var s,c;s=[e(2),e(3),e(4),e(5)],c=function(n,i,e,s){function c(){}return i.extend(c.prototype,e.prototype,{options:{type:"three-bounce"},render:function(){this.data=this.data||i.extend({},this.options);var e=i.template(s)(this.data);n(this.element).addClass("spin").append(e)}}),c}.apply(i,s),!(void 0!==c&&(n.exports=c))},function(i,e){i.exports=n},function(n,e){n.exports=i},function(n,i){n.exports=e},function(n,i,e){var s;s=function(){return'<div class="spinner">\n    <% if( type === \'rotating-plane\' ) { %>\n        <div class="rotating-plane"></div>\n    <% } %>\n    <% if( type === \'double-bounce\' ) { %>\n        <div class="double-bounce">\n            <div class="double-bounce1"></div>\n            <div class="double-bounce2"></div>    \n        </div>\n    <% } %>\n    <% if( type === \'rectangle-bounce\' ) { %>\n        <div class="rectangle-bounce">\n            <div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div>\n        </div>\n    <% } %>\n    <% if( type === \'wandering-cubes\' ) { %>\n        <div class="wandering-cubes">\n            <div class="cube1"></div><div class="cube2"></div>\n        </div>\n    <% } %>\n    <% if( type === \'pulse\' ) { %>\n        <div class="pulse"></div>\n    <% } %>\n    <% if( type === \'chasing-dots\' ) { %>\n        <div class="chasing-dots">\n            <div class="dot1"></div>\n            <div class="dot2"></div>\n        </div>\n    <% } %>\n    <% if( type === \'three-bounce\' ) { %>\n        <div class="three-bounce">\n            <div class="one"></div><div class="two"></div><div class="three"></div>\n        </div>\n    <% } %>\n    <% if( type === \'circle-spinner\' ) { %>\n        <div class="circle-spinner">\n            <div class="spinner-container container1">\n                <div class="circle1"></div>\n                <div class="circle2"></div>\n                <div class="circle3"></div>\n                <div class="circle4"></div>\n            </div>\n            <div class="spinner-container container2">\n                <div class="circle1"></div>\n                <div class="circle2"></div>\n                <div class="circle3"></div>\n                <div class="circle4"></div>\n            </div>\n            <div class="spinner-container container3">\n                <div class="circle1"></div>\n                <div class="circle2"></div>\n                <div class="circle3"></div>\n                <div class="circle4"></div>\n            </div>\n        </div>\n    <% } %>\n</div>\n'}.call(i,e,i,n),!(void 0!==s&&(n.exports=s))}])});
//# sourceMappingURL=spin.js.map