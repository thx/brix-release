define(["jquery","underscore","brix/loader","brix/base","brix/event"],function(e,t,r,n,i){function o(){}return t.extend(o.prototype,n.prototype,{query:function(e){return r.query(e,this)},boot:function(e,t){return r.boot(this.element,e,t),this},_bak_trigger:n.prototype.trigger,trigger:function(t,r){var n=t.namespace?t.namespace.split("."):[],o=t.type||t;o.indexOf(".")>=0&&(n=o.split("."),o=n.shift()),this._bak_trigger(t,r);var s=e.Event(o+i.NAMESPACE);return s.originalNamespace=n.join("."),s.component=this,e(this.element).trigger(s,r),this}}),o.extend=n.extend,o});