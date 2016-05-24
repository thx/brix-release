define(["jquery","underscore","components/base","./linkage.js","./column-rwd.js","./column-priority.js"],function(t,n,i,e,o,r){function c(){}var s=".table",l={UUID:0,COLUMN:{ID:"column-id",FIELD:"column-field",NAME:"column-name",RWD:{RANGE:"column-rwd-range",LIMIT:"column-rwd-limit",FADE:"column-rwd-fade",CURSOR:"column-rwd-cursor"},PRIORITY:{FIELDS:"column-priority-fields",TRIGGER:"column-priority-trigger",STATE:"column-priority-state",INDEX:"column-priority-index",PLACEMENT:"column-priority-placement",ALIGN:"column-priority-align"}}};return n.extend(c.prototype,i.prototype,{options:{},init:function(){this.$element=t(this.element)},render:function(){var i=this;e(this.element,function(t,n,e){i.trigger("toggle"+s,[n,e]),i.contextual()});var c,u;if(this.options[l.COLUMN.RWD.RANGE]){c=o(this,this.options,l,function(t,n){i.trigger("change"+o.NAMESPACE,[n])});var a="resize.table_"+this.clientId;t(window).on(a,n.throttle(function(){c.beautify()},50))}this.options[l.COLUMN.PRIORITY.TRIGGER]&&(u=r(this,this.options,l,function(t,n){i.trigger("change"+r.NAMESPACE,[n]),c.flush()}),this.options[l.COLUMN.PRIORITY.FIELDS]&&u.fields(this.options[l.COLUMN.PRIORITY.FIELDS])),this.columnRWDHandler=c,this.columnPriorityHandler=u},contextual:function(){n.each(this.$element.find("input:checkbox"),function(n){var i=t(n).prop("checked");t(n).closest("tr")[i?"addClass":"removeClass"]("active")})},destroy:function(){var n="resize.table_"+this.clientId;t(window).off(n)}}),c.extend=i.extend,c});