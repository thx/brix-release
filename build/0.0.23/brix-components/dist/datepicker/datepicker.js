define(["jquery","underscore","moment","components/base","brix/event","./datepicker.tpl.js","css!./datepicker.css"],function(t,e,i,a,r,n){function s(){}var d=".datepicker",o="second minute hour time date month year",h="YYYY-MM-DD",c="HH:mm:ss",m=h+" "+c;return s.NAMESPACE=d,s.TYPES=o,s.DATE_PATTERN=h,s.TIME_PATTERN=c,s.DATE_TIME_PATTERN=m,s.typeMap=function(t){-1!==e.indexOf(["all","",void 0],t)&&(t=o);var i={};return e.each(t.split(" "),function(t){i[t]=!0}),i.time=i.time||i.hour||i.minute||i.second,i},e.extend(s.prototype,a.prototype,{options:{date:i(),type:"all",range:[],unlimit:!1},init:function(){this.options.range=e.flatten(this.options.range),this.options.unlimit&&(this.options.unlimit=i(this.options.unlimit,e.isString(this.options.unlimit)&&m)),this.data=this.data||{},this.data.options=this.options,this.data.moment=i,this.data.date=i(this.options.date,e.isString(this.options.date)&&m),this.options.unlimit&&this.options.unlimit.toDate().getTime()===this.data.date.toDate().getTime()&&(this.__unlimit=this.options.unlimit),this.data.typeMap=s.typeMap(this.options.type)},render:function(){var i=new r;this.$element=t(this.element).append(e.template(n)(this.data)),i.delegate(this.$element,this),this._renderYearPicker()._renderMonthPicker()._renderDatePicker()._renderTimePicker()},val:function(t){var a=this.data.date.toDate().getTime();if(t){this.__unlimit=!1,this.data.date=i(t,e.isString(t)&&m);var r=this.data.date.toDate().getTime()===a;return this.trigger((r?"unchange":"change")+d,i(this.data.date)),r||this._renderYearPicker()._renderMonthPicker()._renderDatePicker()._renderTimePicker(),this}return i(this.__unlimit||this.data.date)},range:function(t){return t?(this.options.range=e.flatten(t),this._renderDatePicker(),this):this.options.range},_slide:function(t,e,i){2==arguments.length&&(i=e,e=t),this.$element.find(e).slideUp("fast"),this.$element.find(i).slideDown("fast")},_move:function(t,e,a){var r=this.__isUnlimitMode();r&&(this.data.date=i().startOf("day")),this.__unlimit=!1;var n=this.data.date,s=n.toDate().getTime();if("period"===e)return void this._renderYearPicker(a)._renderDatePicker();n.add(a,e);var o=n.toDate().getTime()===s;this.trigger((o?"unchange":"change")+d,[i(n),e]),o||this._renderYearPicker()._renderMonthPicker()._renderDatePicker()},_active:function(e,a){var r=this.__isUnlimitMode();r&&(this.data.date=i().startOf("day")),this.__unlimit=!1;var n=this.data.date,s=n.toDate().getTime(),o=t(e.target);n.set(a,+o.attr("data-value"));var h=n.toDate().getTime()===s;switch(this.trigger((h?"unchange":"change")+d,[i(n),a]),h||this._renderYearPicker()._renderMonthPicker()._renderDatePicker(),a){case"year":if(this.data.typeMap.year)break;this._slide(".yearpicker",".monthpicker");break;case"month":if(this.data.typeMap.month)break;this._slide(".monthpicker",".datepicker")}},_hooks:{38:1,40:-1},_changeTime:function(t,e,a,r){this.__unlimit=!1;var n=this.data.date;if(void 0===e&&void 0===a&&void 0===r)return void this.trigger("change"+d,[i(n),"time"]);var s=n.toDate().getTime();if("keydown"===t.type){if(!this._hooks[t.which])return;e=this._hooks[t.which]||0}("blur"===t.type||"focusout"===t.type)&&(this.data.date.set(a,t.target.value),e=0),n.add(e,r),t.preventDefault(),t.stopPropagation();var o=n.toDate().getTime()===s;this.trigger((o?"unchange":"change")+d,[i(n),a]),o||this._renderTimePicker()._renderYearPicker()._renderMonthPicker()._renderDatePicker()},_changeHour:function(t,e){this._changeTime(t,e,"hour","hours")},_changeMinute:function(t,e){this._changeTime(t,e,"minute","minutes")},_changeSecond:function(t,e){this._changeTime(t,e,"second","seconds")},__isUnlimitMode:function(){return this.options.unlimit&&(this.__unlimit||this.options.unlimit.toDate().getTime()===this.data.date.toDate().getTime())&&!0||!1},_renderYearPicker:function(e){e=e||0;var a=this.data.date,r=this.__isUnlimitMode();r&&(a=i().startOf("day"));var n=this.$element.find(".yearpicker .picker-header h4"),s=this.$element.find(".yearpicker .picker-body"),d=20,o=s.data(),h=a.get("year");o.start=(o.start||h-h%d)+e*d,o.end=o.start+d-1,n.text(o.start+" - "+o.end),s.empty();for(var c=o.start;c<=o.end;c++)t("<span>").text(c).attr("data-value",c).attr("bx-click",'_active("year")').addClass(r||h!==c?"":"active").appendTo(s);return this},_renderMonthPicker:function(){var a=this.data.date,r=this.__isUnlimitMode();r&&(a=i().startOf("day"));var n=this.$element.find(".monthpicker .picker-header h4"),s=this.$element.find(".monthpicker .picker-body");n.text(a.get("year")),s.empty();var d=function(){for(var t=[],e=1;12>=e;e++)t.push(10>e?"0"+e:e);return t}();return e.each(d,function(e,i){t("<span>").text(e).attr("data-value",i).addClass(r||a.get("month")!==i?"":"active").attr("bx-click",'_active("month")').appendTo(s)}),this},_renderDatePicker:function(){function a(t){if(!o.length)return!1;for(var a,n,s=i(r).startOf("day").set("date",t),d=0;d<o.length;d+=2){if(a=o[d]&&i(o[d],e.isString(o[d])&&m).startOf("day"),n=o[d+1]&&i(o[d+1],e.isString(o[d+1])&&m).startOf("day"),a&&n){var h=i.min(a,n),c=i.max(a,n);a=h,n=c}if(a&&n&&s.diff(a,"days")>=0&&s.diff(n,"days")<=0)return!1;if(a&&!n&&s.diff(a,"days")>=0)return!1;if(!a&&n&&s.diff(n,"days")<=0)return!1;if(!a&&!n)return!1}return!0}var r=this.data.date,n=this.__isUnlimitMode();n&&(r=i().startOf("day"));var s=r.daysInMonth(),d=i(r).date(1).day(),o=this.options.range,h=this.$element.find(".datepicker .picker-header h4"),c=this.$element.find(".datepicker .picker-body .datepicker-body-value");h.text(r.format("YYYY - MM")),c.empty();for(var u=0;d>u;u++)t('<span class="inactive">').appendTo(c);for(var p=1;s>=p;p++)t("<span>").text(p).attr("data-value",p).addClass(n||r.date()!==p?"":"active").addClass(a(p)?"disabled":"").attr("bx-click",'_active("date")').appendTo(c);return this},_renderTimePicker:function(){var t=i(this.data.date),e=this.$element.find(".timepicker div.timepicker-group input");return e.eq(0).val(t.format("HH")),e.eq(1).val(t.format("mm")),e.eq(2).val(t.format("ss")),this},_unlimit:function(){var t=this.options.unlimit;this.__unlimit=t;var e=t.isSame(this.data.date);this.trigger((e?"unchange":"change")+d,[t,"date"]),this._renderYearPicker()._renderMonthPicker()._renderDatePicker()}}),s});