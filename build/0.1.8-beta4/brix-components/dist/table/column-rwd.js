define(["jquery","underscore","../pagination/state.js"],function(t,e,r){function a(e,r,a,o){var l=r[a.COLUMN.RWD.RANGE]||[0,-1],s=r[a.COLUMN.RWD.CURSOR]||1,c=r[a.COLUMN.RWD.LIMIT]||5,d=r[a.COLUMN.RWD.FADE]||!1,u=t(e.element),g=f(a,u,l,s,c),w=n(u,'<span class="brixfont chevron-left">&#xe62f;</span>'),A=n(u,'<span class="brixfont chevron-right">&#xe630;</span>'),$={Constant:a,$table:u,range:l,cursor:s,limit:c,fade:d,state:g,$leftArrow:w,$rightArrow:A,callback:o};return i($),setTimeout(function(){h($)},100),{state:g,flush:function(t){return f(a,u,l,t||s,c,g),h($),this},beautify:function(){return h($),this}}}function n(r,a){var n=r.find("> thead"),o=e.template(s)({text:a,height:n.height()}),i=t(o).insertAfter(r).offset({top:n.offset().top});return i}function o(t,e){f(e.Constant,e.$table,e.range,e.state.cursor,e.state.limit,e.state),h(e),t.preventDefault(),t.stopPropagation()}function i(e){e.$leftArrow.on("click"+l,function(t){e.state.moveToPrev(),o(t,e),e.callback&&e.callback(t,e.state,t.currentTarget)}),e.$rightArrow.on("click"+l,function(t){e.state.moveToNext(),o(t,e),e.callback&&e.callback(t,e.state,t.currentTarget)}),e.fade?e.$table.hover(function(){e.$leftArrow.fadeIn("fast"),e.$rightArrow.fadeIn("fast"),h(e)},function(r){r.relatedTarget===e.$leftArrow.get(0)||t.contains(e.$leftArrow.get(0),r.relatedTarget)||r.relatedTarget===e.$rightArrow.get(0)||t.contains(e.$rightArrow.get(0),r.relatedTarget)||(e.$leftArrow.fadeOut("fast"),e.$rightArrow.fadeOut("fast"))}):(e.$leftArrow.show(),e.$rightArrow.show(),h(e))}function f(a,n,o,i,f,h){var l=n.find("> thead"),s=n.find("> tbody"),c=l.find("> tr > th");o[0]=(+o[0]+c.length)%c.length,o[1]=(+o[1]+c.length)%c.length,e.each(c,function(e,r){if(e=t(e),r>=o[0]&&r<o[1]){if(void 0!==e.data(a.COLUMN.ID))return;e.attr("data-"+a.COLUMN.ID,a.UUID++)}}),c=e.filter(c,function(t,e){return e>=o[0]&&(0===o[1]||e<o[1])});var u=t(c[0]).prev();c.sort(function(e,r){var n=t(e),o=t(r);return e=+n.attr("data-"+a.COLUMN.PRIORITY.INDEX),r=+o.attr("data-"+a.COLUMN.PRIORITY.INDEX),isNaN(e)&&(e=n.index()),isNaN(r)&&(r=o.index()),e-r}),e.each(c,function(r,a){var n=t(r).index();0===a?u.after(r):t(c[a-1]).after(r);var o=t(r).index(),i=s.find("> tr > td:nth-child("+(n+1)+")");e.each(i,function(e,r){t(e).siblings(":nth-child("+o+")").after(e)})}),c=e.filter(c,function(e){var r=t(e),n=r.data(a.COLUMN.ID),o=r.attr("data-"+a.COLUMN.PRIORITY.STATE);return void 0!==n&&"hide"!==o}),c=t(c),h?(h.setTotal(c.length),h.setCursor(i)):h=new r(c.length,i,f);for(var g,w,A=0;A<h.total;A++)g=A>=h.start&&A<h.end?"show":"hide",w=c.eq(A)[g]().index(),n.find(e.template(d)({nth:w+1}))[g]();return h}function h(t){t.fade||(t.$leftArrow.show(),t.$rightArrow.show());var r=t.$table.find("> thead"),a=r.height(),n=r.offset().top,o=t.$table.find(e.template(c)({nth:t.range[1]+1}));t.$leftArrow.css({height:a,"line-height":a+"px"}).offset({top:n,left:o.offset().left-t.$rightArrow.width()-(t.state.hasNext?t.$leftArrow.width():0)}),t.$rightArrow.css({height:a,"line-height":a+"px"}).offset({top:n,left:o.offset().left-t.$rightArrow.width()}),t.state.total&&t.state.hasPrev||t.$leftArrow.hide(),t.state.total&&t.state.hasNext||t.$rightArrow.hide()}var l=".table_column_rwd",s='<div class="column-scroll-arrow"><%= text %></div>',c="> thead > tr > th:nth-child(<%= nth %>)",d="> tbody > tr > td:nth-child(<%= nth %>)";return a.NAMESPACE=l,a});