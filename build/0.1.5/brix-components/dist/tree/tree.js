define(["jquery","underscore","components/base","brix/event","../areapicker/area.js","./tree.tpl.js","./tree.node.tpl.js"],function($,_,Brix,EventManager,Area,template,nodeTemplate){function Tree(){}function fix(e,t,n){e.contentFn=function(e){return e.content||_.template(n)(e)},e.childrenFn=function(){return this.children&&this.children.length?_.template(t)(this):""},_.each(e.children,function(e){fix(e,t,n)})}var NAMESPACE=".tree",STATE={PENDING:"pending",ACTIVE:"active",INACTIVE:"inactive"};return _.extend(Tree.prototype,Brix.prototype,{options:{data:void 0,nodeTemplate:void 0,state:"expand"},init:function(){var that=this,defer=$.Deferred(),deps=[],customNodeTemplate=this.options.nodeTemplate||this.options["node-template"];if(customNodeTemplate&&deps.push(customNodeTemplate),require(deps,function(){customNodeTemplate&&(that.options.customNodeTemplate=arguments[0]),defer.resolve()}),!this.options.data){$(this.element).find("script").remove();var text=$.trim(this.element.innerHTML);this.options.data=eval("(function(){ return Array.prototype.slice.call(arguments)[0] })("+text+")"),this.element.innerHTML=""}var mapped={};return _.each(this.options.data,function(e){e&&e.id&&(null!=e.pid&&null==e.parentId&&(e.parentId=e.pid),null==e.pid&&null!=e.parentId&&(e.pid=e.parentId),mapped[e.id]=e)}),this.options.mapped=mapped,this.options.data={id:"root",name:"root",children:Area.tree(this.options.data)},deps.length?defer.promise():void 0},render:function(){var e=this,t=new EventManager;this.$element=$(this.element),fix(this.options.data,template,this.options.customNodeTemplate||nodeTemplate),this.$element.append(_.template(template)(this.options.data)),t.delegate(this.$element,this),"collapse"===this.options.state&&this.collapse(),"expand"===this.options.state&&this.expand();var n="click"+NAMESPACE+"_"+this.clientId;this._state=STATE.INACTIVE,$(document.body).off(n).on(n,function(t){if(t.target===e.element||$.contains(e.element,t.target)||!t.target.parentNode){if(e._state===STATE.ACTIVE)return;return e.trigger($.Event("active"+NAMESPACE,{target:t.target})),void(e._state=STATE.ACTIVE)}e._state!==STATE.INACTIVE&&(e.trigger($.Event("inactive"+NAMESPACE,{target:t.target})),e._state=STATE.INACTIVE)})},toggle:function(e,t){e.stopPropagation();var n;n=void 0===e?"li[data-node-id]":e.type?'li[data-node-id="'+t+'"]':'li[data-node-id="'+e+'"]',$(n,this.$element).find("> .tree-node-control .brixfont").toggle().end().find("> ul.tree").slideToggle("fast")},expand:function(e){var t;t=void 0===e?"li[data-node-id]":'li[data-node-id="'+e+'"]';var n=this.options.mapped;void 0!==e&&n[e]&&n[e].parentId&&this.expand(n[e].parentId);var i=$(t,this.$element).show().find("> .tree-node-control .brixfont.plus-sign").hide().end().find("> .tree-node-control .brixfont.minus-sign").show().end();void 0===e?i.find("> ul.tree").show():i.find("> ul.tree").slideDown("fast")},collapse:function(e){var t;t=void 0===e?"li[data-node-id]":'li[data-node-id="'+e+'"]';var n=$(t,this.$element).show().find("> .tree-node-control .brixfont.plus-sign").show().end().find("> .tree-node-control .brixfont.minus-sign").hide().end();void 0===e?n.find("> ul.tree").hide():n.find("> ul.tree").slideUp("fast")},search:function(e){function t(e,n){_.each(e.children,function(e){n.push(e),t(e,n)})}function n(e,t){var n=new RegExp(t,"ig");_.each($(".tree-node-content-name",e),function(e){var t=$(e);t.html(t.text().replace(n,function(e){return'<span class="highlight">'+e+"</span>"}))})}if(void 0!==e){var i=this;$("li[data-node-id]",this.$element).hide();var a=[];_.each(this.options.mapped,function(n){-1!==n.name.toLowerCase().indexOf(e.toLowerCase())&&(a.push(n),t(n,a))}),_.each(_.uniq(a),function(e){i.expand(e.id)}),n(this.$element,e)}},current:function(e){if(e){var t,n=this.options.mapped,i={},a=e.jquery?e.attr("data-node-id"):e.nodeType?$(e).attr("data-node-id"):e;if(a&&n[a])return t='li[data-node-id="'+a+'"]',i.data=n[a],i.element=$(t,this.$element).find("> .tree-node-control > .tree-node-content")[0],i}},parent:function(e){if(e){var t,n,i=this.options.mapped,a={},o=e.jquery?e.attr("data-node-id"):e.nodeType?$(e).attr("data-node-id"):e;if(o&&i[o]&&i[o].parentId&&i[i[o].parentId])return t=i[o].parentId,n='li[data-node-id="'+t+'"]',a.data=i[t],a.element=$(n,this.$element).find("> .tree-node-control > .tree-node-content")[0],a}},children:function(e){if(e){var t,n=this,i=this.options.mapped,a=[],o=e.jquery?e.attr("data-node-id"):e.nodeType?$(e).attr("data-node-id"):e;return o&&i[o]&&i[o].children&&i[o].children.length?(_.each(i[o].children,function(e){t='li[data-node-id="'+e.id+'"]',a.push({data:i[e.id],element:$(t,n.$element).find("> .tree-node-control > .tree-node-content")[0]})}),a):a}},siblings:function(e){if(e){var t=this,n=this.options.mapped,i=e.jquery?e.attr("data-node-id"):e.nodeType?$(e).attr("data-node-id"):e,a=this.parent(e),o=[];if(a)o=this.children(a.element);else{if(!i||!n[i])return[];var d,r=n[i].parentId;_.each(n,function(e){e.parentId===r&&(d='li[data-node-id="'+e.id+'"]',o.push({data:e,element:$(d,t.$element).find("> .tree-node-control > .tree-node-content")[0]}))})}var s=[];return _.each(o,function(e){e.data.id!==i&&s.push(e)}),s}},all:function(){var e,t=this,n=this.options.mapped,i=[];return _.each(n,function(a){e='li[data-node-id="'+a.id+'"]',i.push({data:n[a.id],element:$(e,t.$element).find("> .tree-node-control > .tree-node-content")[0]})}),i},forward:function(e,t){e.stopPropagation();var n=$.Event(e.type+NAMESPACE,{target:e.target,currentTarget:e.currentTarget});this.trigger(n,[this.options.mapped[t],e.currentTarget])}}),Tree});