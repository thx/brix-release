!function(_,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jquery"),require("underscore"),require("brix/base"),require("chartx/index")):"function"==typeof define&&define.amd?define(["jquery","underscore","brix/base","chartx/index"],e):"object"==typeof exports?exports["components/chartxwrapper"]=e(require("jquery"),require("underscore"),require("brix/base"),require("chartx/index")):_["components/chartxwrapper"]=e(_.jquery,_.underscore,_["brix/base"],_["chartx/index"])}(this,function(__WEBPACK_EXTERNAL_MODULE_2__,__WEBPACK_EXTERNAL_MODULE_3__,__WEBPACK_EXTERNAL_MODULE_4__,__WEBPACK_EXTERNAL_MODULE_5__){return function(_){function e(t){if(r[t])return r[t].exports;var o=r[t]={exports:{},id:t,loaded:!1};return _[t].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=_,e.c=r,e.p="",e(0)}([function(_,e,r){_.exports=r(1)},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(2),__webpack_require__(3),__webpack_require__(4),__webpack_require__(5)],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,Brix,Chartx){function ChartxWrapper(){}return ChartxWrapper.Chartx=Chartx,_.extend(ChartxWrapper.prototype,Brix.prototype,{options:{},init:function(){if(!this.options.data){var text=$.trim(this.element.innerText);this.options.data=eval("(function(){ return Array.prototype.slice.call(arguments)[0] })("+text+")"),this.element.innerText=""}},render:function(){var _=this;window.require(["chartx/chart/"+this.options.type+"/index"],function(e){var r=new e(_.element,_.options.data,_.options.options);r.draw(),_.chart=r})}}),ChartxWrapper}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},function(_,e){_.exports=__WEBPACK_EXTERNAL_MODULE_2__},function(_,e){_.exports=__WEBPACK_EXTERNAL_MODULE_3__},function(_,e){_.exports=__WEBPACK_EXTERNAL_MODULE_4__},function(_,e){_.exports=__WEBPACK_EXTERNAL_MODULE_5__}])});
//# sourceMappingURL=chartxwrapper.js.map