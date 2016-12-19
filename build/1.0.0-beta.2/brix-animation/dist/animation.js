define("brix/animation/compatEventName",["jquery","underscore"],function(n,t){var e="transitionend",a="animationend",i="transition",o="animation";try{var s=s}catch(m){s=null}return"ontransitionend"in window||("onwebkittransitionend"in window?(e+=" webkitTransitionEnd",i="webkitTransition"):(s&&s.tNode&&"onotransitionend"in s.tNode||"Opera"===navigator.appName)&&(e+=" oTransitionEnd",i="oTransition")),"onanimationend"in window||("onwebkitanimationend"in window?(a+=" webkitAnimationEnd",o="webkitAnimation"):s&&s.tNode&&"onoanimationend"in s.tNode&&(a+=" oAnimationEnd",o="oAnimation")),{transitionEnd:e,animationEnd:a,transitionProperty:i,animationProperty:o}}),define("brix/animation/constant",[],function(){return{BX_ANIMATION_HOOK:"bx-animation",BX_ANIMATION_NAMESPACE:"."+(Math.random()+"").replace(/\D/g,"")}}),define("brix/animation/extendCommand",["jquery","underscore","./compatEventName","./constant"],function($,_,compatEventName,Constant){function extendBuiltinCommand(Animation){var addedClass=[],waitItv;Animation.extend("on",function(n){var t=n.param,e=n.node,a=n.done,i=n.index,o=$(document.body),s=t+n.instance._eventNamespace;o.on(s,"["+Constant.BX_ANIMATION_HOOK+"]",function(n){e[0]===n.currentTarget&&(clearTimeout(waitItv),console.log(addedClass),_.each(addedClass,function(n){e.removeClass(n)}),addedClass=[],a(n,i))}),-1===_.indexOf(n.instance._delegateEvents,s)&&n.instance._delegateEvents.push(s)}),Animation.extend("execute",function(step,event){var param=$.trim(step.param),node=step.node,done=step.done,owner=step.instance.options.owner,parseExecuteReg=/([^\(\)]+)(\(.+\))?/,execute=parseExecuteReg.exec(param),func=execute[1],params=[];if(execute[2]&&(params=$.trim(/\((.+)\)/.exec(execute[2])[1]).split(/\s*\,\s*/)),_.each(params,function(item,i){try{params[i]=eval(item)}catch(err){throw"execute传参格式错误: "+err.message}}),event=event||{},event.node=node,params.unshift(event),parseExecuteReg){if(!owner[func])throw"方法："+func+"不存在";var isStop=owner[func].apply(owner,params);_.isObject(isStop)&&isStop.then&&isStop.fail&&isStop.done?isStop.then(function(n){n!==!1&&done(event)}):isStop!==!1&&done(event)}else done(event)}),Animation.extend("call",function(n,t){var e=n.param,a=(n.node,n.done),i=_.map(e.split(","),function(n){return $.trim(n)});_.each(i,function(t){_.each(n.instance._customEmits[t],function(n){n.done()})}),a(t)}),Animation.extend("class",function(n,t){function e(n){s||(s=!0,"2"!==r&&(i.removeClass(m),addedClass.splice(addedClass.indexOf(m),1)),o(t))}var a=n.param,i=n.node,o=n.done,s=!1,m=a.split(",")[0],r=a.split(",")[1]||"1";i.addClass(m),addedClass.push(m),i.off(compatEventName.animationEnd+Constant.BX_ANIMATION_NAMESPACE),i.off(compatEventName.transitionEnd+Constant.BX_ANIMATION_NAMESPACE),"3"===r?o(t):(i.on(compatEventName.animationEnd+Constant.BX_ANIMATION_NAMESPACE,e),i.on(compatEventName.transitionEnd+Constant.BX_ANIMATION_NAMESPACE,e))}),Animation.extend("wait",function(n,t){var e=(n.node,n.param),a=n.done;waitItv=setTimeout(function(){a(t)},e)}),Animation.extend("style",function(n,t){function e(n){r||(r=!0,"2"!==m&&_.each(s,function(n,t){a.css(n.name,"")}),i(t))}var a=n.node,i=n.done,o=n.param.split(","),s=[],m="1",r=!1;/\s+/.test($.trim(o[o.length-1]))||(m=$.trim(o.pop())),_.each(o,function(n,t){n=$.trim(n);var e=n.split(/\s+/);s.push({name:e.shift(),value:e.join(" ")})}),_.each(s,function(n,t){a.css(n.name,n.value)}),a.off(compatEventName.animationEnd+Constant.BX_ANIMATION_NAMESPACE),a.off(compatEventName.transitionEnd+Constant.BX_ANIMATION_NAMESPACE),"3"===m?i(t):(a.on(compatEventName.transitionEnd+Constant.BX_ANIMATION_NAMESPACE,e),a.on(compatEventName.animationEnd+Constant.BX_ANIMATION_NAMESPACE,e))})}return extendBuiltinCommand}),define("brix/animation/initAnimation",["./constant"],function(n){function t(t,e){function a(n,e){var a=$.trim(n),s=$.trim(a.split(":")[0]),m=$.trim(a.split(":")[1]),r={instance:o,command:s,node:t,index:e,param:m,done:function(n,t){var a=t||e;i(++a,n)}};return r}function i(n,t){if(n>s.length-1)return void(n=0);var i=a(s[n],n),o=e._builtinCommands[i.command],m=["when"],r=$.inArray(i.command,m)>-1;if(!o&&!r)throw i.command+" 该命令未定义";r||setTimeout(function(){o(i,t)},0)}var o=this,s=t.attr(n.BX_ANIMATION_HOOK).split(";");""===$.trim(s[s.length-1])&&s.pop(),_.each(s,function(n,t){var e=a(n,t);"when"===e.command&&(e.instance._customEmits[e.param]?e.instance._customEmits[e.param].push(e):e.instance._customEmits[e.param]=[e])}),i(0)}return t}),define("brix/animation",["jquery","underscore","./animation/compatEventName","./animation/extendCommand","./animation/initAnimation","./animation/constant"],function(n,t,e,a,i,o){function s(e){var m=this;this.options=n.extend(!0,{el:n("body"),owner:{}},e),this._customEmits={},this._delegateEvents=[],this._eventNamespace="."+(Math.random()+"").replace(/\D/g,""),a(s);var r=n(m.options.el).find("["+o.BX_ANIMATION_HOOK+"]");t.each(r,function(t,e){i.call(m,n(t),s)})}return s._builtinCommands={},s.extend=function(n,t){s._builtinCommands[n]=t},s.prototype={destroy:function(){t.each(this._delegateEvents,function(t){n(document.body).off(t)})}},s});