define(["jquery","underscore"],function(e,n){function t(n,c){var f="["+i+"],["+u+"]";e(n).on("click",f,function(i){a(e(i.currentTarget),e(i.delegateTarget)),r(e(i.currentTarget),e(i.delegateTarget)),c&&c(i,t.val(n),i.currentTarget)})}function a(e,t){var r=e.attr(u),c=t.find(n.template(f)({name:r}));if(c.length){var i=t.find(n.template(o)({name:r}));i.length&&(c.prop("checked",i.length===i.filter(":checked").length),a(c,t))}}function r(t,a){var c=t.attr(i),u=t.prop("checked"),f=a.find(n.template(o)({name:c}));f.length&&(f.prop("checked",u),n.each(f,function(n){r(e(n),a)}))}var c="data-linkage-",i=c+"name",u=c+"parent-name",f="["+i+'="<%= name %>"]',o="["+u+'="<%= name %>"]';return t.val=function(c,i){if(i){var u=e(c).find("input:checkbox").prop("checked",!1);return n.each(i,function(t){var i=u.filter('[value="'+t+'"]').prop("checked",!0);n.each(i,function(n){a(e(n),e(c)),r(e(n),e(c))})}),t}i=[];var f=e(c).find("input:checkbox:checked");return n.each(f,function(n){var t=e(n).attr("value");void 0!==t&&""!==t&&i.push(t)}),i},t});