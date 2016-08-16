!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery"),require("underscore"),require("moment"),require("components/base"),require("brix/event")):"function"==typeof define&&define.amd?define(["jquery","underscore","moment","components/base","brix/event"],t):"object"==typeof exports?exports["components/datepicker/ancient"]=t(require("jquery"),require("underscore"),require("moment"),require("components/base"),require("brix/event")):e["components/datepicker/ancient"]=t(e.jquery,e.underscore,e.moment,e["components/base"],e["brix/event"])}(this,function(e,t,a,n,i){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){e.exports=a(1)},function(e,t,a){var n,i;n=[a(2),a(3),a(4),a(5),a(6),a(7)],i=function(e,t,a,n,i,r){function s(e){return a(e,t.isString(e)&&m.DATE_TIME)}function d(e,n){if(n=n||"day",t.isArray(e))return t.map(e,function(e){return d(e,n)});var i,r=t.isString(e);return e?r&&(i=_.exec(e))?a().add((i[1]+1)*i[2],n):a(e,r&&m.DATE_TIME):a()}function o(e){return e.day&&"day"||e.month&&"month"||e.year&&"year"||"day"}function c(){}var l=".datepicker",u="date year month day time hour minute second";u=t.object(t.map(u.split(/\s+/),function(e){return[e.toUpperCase(),e]}));var p="single multiple range";p=t.object(t.map(p.split(/\s+/),function(e){return[e.toUpperCase(),e]}));var h="year quarter month day hour minute second millisecond";h=t.object(t.map(h.split(/\s+/),function(e){return[e.toUpperCase(),e]}));var m={YYYY:"YYYY",YYYY_MM:"YYYY-MM",YYYY_MM_DD:"YYYY-MM-DD",DATE:"YYYY-MM-DD",TIME:"HH:mm:ss",DATE_TIME:"YYYY-MM-DD HH:mm:ss"},f=t.template('_active("<%= value %>", "<%= unit %>", "<%= pattern %>")'),y=20,_=/^([+-])=(\d+)(.*)/,v=t.map(t.range(1,13),function(e){return(e<10?"0":"")+e});return c.NAMESPACE=l,c.TYPES=u,c.MODES=p,c.UNITS=h,c.PATTERNS=m,c.parseTypeAsMap=function(e){t.indexOf(["all","",void 0],e)!==-1&&(e=t.values(u).join(" "));var a=t.object(t.map(e.split(/\s+/),function(e){return[e,!0]}));return a.year=a.date||a.year||a.month||a.day,a.month=a.date||a.month||a.day,a.day=a.date||a.day,a.time=a.time||a.hour||a.minute||a.second,a},t.extend(c.prototype,n.prototype,{options:{date:void 0,type:"date",range:[],excluded:[],unlimit:!1,pages:1,mode:"single",disabled:!1},init:function(){var e=this.options;e.range=t.flatten(e.range),e.excluded=t.flatten(e.excluded),e.unlimit&&(e.unlimit=s(e.unlimit));var n=this.data=this.data||{};n.options=e,n.moment=a,e.unlimit&&e.unlimit.isSame(n.date)&&(this.__unlimit=e.unlimit),n.modeMap={},n.modeMap[e.mode]=!0,n.typeMap=c.parseTypeAsMap(e.type);var i=n.modeMap,r=n.typeMap;r.time&&(e.mode="single",i.single=!0,i.multiple=i.range=!1),(i.multiple||i.range)&&(r.time=r.second=r.minute=r.hour=!1),r.day||(e.pages=1),this.data.date=this.__initDate(this.options.date,this.options.mode)},__initDate:function(e,n){return e?{single:s(e),multiple:t.isArray(e)?t.map(e,function(e){return s(e)}):[s(e)],range:t.isArray(e)?t.map(e,function(e){return s(e)}):[s(e),s(e)]}[n]:{single:a(),multiple:[a()],range:[a(),a()]}[n]},render:function(){this.$element=e(this.element).append(t.template(r)(this.data));var a=this.$manager=new i("bx-");a.delegate(this.$element,this),this.__renderYearPicker().__renderMonthPicker().__renderDayPicker().__renderTimePicker(),this.beautify()},beautify:function(){var a=this.$element.find(".year-month-day-container"),n=t.reduce(a.find(".year-month-day"),function(t,a){return t+(e(a).outerWidth()||258)},0);n>a.width()&&a.width(n)},val:function(n){var i=this.data.date;if(!n)return this.__unlimit?a(this.__unlimit):t.isArray(i)?t.map(i,function(e){return a(e)}):a(i);var r=this.data.modeMap;(r.multiple||r.range)&&(t.isArray(n)||(n=[].slice.call(arguments,0))),this.__unlimit=!1;var s=this.__mode_hooks[this.options.mode],o=d(n),c=s.same(i,o),u=e.Event((c?"unchange":"change")+l);return this.trigger(u,[s.clone(o)]),u.isDefaultPrevented()?this:(c||(this.data.date=o,this.__renderYearPicker().__renderMonthPicker().__renderDayPicker().__renderTimePicker()),this)},range:function(e){return e?(this.options.range=t.flatten(e),this.__renderDayPicker(),this):this.options.range},excluded:function(e){return e?(this.options.excluded=t.flatten(e),this.__renderDayPicker(),this):this.options.excluded},_slide:function(t,a,n){if(t.target){var i=e(t.target).parents(".year-month-day"),r=i.siblings();r.find(".year").slideUp("fast"),r.find(".month").slideUp("fast"),r.find(".day").slideDown("fast")}var s=t.target?e(t.target).parents(".year-month-day"):this.$element.find(".year-month-day");t.target||(n=a,a=t),s.find(a).slideUp("fast"),s.find(n).slideDown("fast")},_moveYearPicker:function(t,n){var i=e(t.currentTarget).parents("[data-page]").data("page"),r=e(t.currentTarget).parents(".year-header").data("date");r=a(r,m.YYYY).add(n*y,"years"),this.__renderYearPicker(r,i)},_moveMonthPicker:function(t,n){var i=e(t.currentTarget).parents("[data-page]").data("page"),r=e(t.currentTarget).parents(".month-header").data("date");r=a(r,m.YYYY_MM).add(n,"years"),this.__renderMonthPicker(r,i)},_moveDayPicker:function(t,n){var i=e(t.target).parents(".year-month-day"),r=i.siblings();r.find(".year").slideUp("fast"),r.find(".month").slideUp("fast"),r.find(".day").slideDown("fast");var s=e(t.currentTarget).parents("[data-page]").data("page"),d=e(t.currentTarget).parents(".day-header").data("date");d=a(d,m.YYYY_MM).add(n,"months"),this.__renderDayPicker(d,s)},_active:function(n,i,r,s){n.preventDefault(),this.__cursor=e(n.currentTarget).parents("[data-page]").data("page"),this.__unlimit=!1;var d=this.__mode_hooks[this.options.mode],o=a(i,s),c=this.__isUnlimitMode()?a().startOf("day"):this.data.date,u=t.isArray(c)?t.map(c,function(e){return a(e)}):a(c),p=d.update(c,o,r),h=!t.isArray(p)&&p.isSame(u),m=e.Event((h?"unchange":"change")+l),f=!1,y=this.data.typeMap;switch(r){case"year":y.month||(f=!0);break;case"month":y.day||(f=!0);break;case"date":case"day":f=!0}if(!f||this.data.modeMap.range&&1===p.length||(this.trigger(m,[d.clone(p),r]),!m.isDefaultPrevented())){switch(f&&(this.data.date=p),r){case"month":this.data.typeMap.day&&this._slide(n,".month",".day");break;case"year":this.data.typeMap.month&&this._slide(n,".year",".month")}this.__renderDayPicker(o).__renderMonthPicker(o).__renderYearPicker(o)}},__mode_hooks:{single:{update:function(e,t,a){switch(e=this.clone(e),a){case"date":e.date(t.date());case"month":e.month(t.month());case"year":e.year(t.year())}return e},same:function(e,t){return t.isSame(e)},val:function(){},clone:function(e){return a(e)}},multiple:{update:function(e,t,n){e=this.clone(e),"date"===n&&(n="day");for(var i,r=0;r<e.length;r++)a(e[r]).isSame(t,n)&&(i=!0,e.splice(r--,1));return i?e:(e.push(t),e)},same:function(e,t){if(t.length!==e.length)return!1;for(var a=0;a<t.length;a++)if(!t[a].isSame(e[a]))return!1;return!0},clone:function(e){return t.map(e,function(e){return a(e)}).sort(function(e,t){return e.diff(t)})}},range:{update:function(e,t,a){switch(e=this.clone(e),e.length){case 0:case 1:e.push(t);break;case 2:e=[t.startOf(a)]}return e},same:function(e,t){if(t.length!==e.length)return!1;for(var a=0;a<t.length;a++)if(!t[a].isSame(e[a]))return!1;return!0},clone:function(e){return t.map(e,function(e){return a(e)}).sort(function(e,t){return e.diff(t)})}}},__isUnlimitMode:function(){return this.options.unlimit&&(this.__unlimit||this.options.unlimit.isSame(this.data.date))&&!0||!1},__renderYearPicker:function(n,i){n=void 0!==n?n:{single:this.data.date,multiple:this.data.date[this.data.date.length-1],range:this.data.date[this.data.date.length-1]}[this.options.mode]||a(),i=void 0!==i?i:this.__cursor||0;var r=this,s=this.__isUnlimitMode();s&&(n=a().startOf("day"));var d=this.$element.find(".year");return t.each(d,function(s,d){var o=a(t.isArray(n)?n[0]:n),c=e(s),l=c.data();switch(l.start=o.year()-o.year()%y,r.options.type){case"year":l.start=l.start+(d-i)*y;break;case"month":break;case"day":}l.end=l.start+y-1,c.attr("data-cache-start",l.start),c.attr("data-cache-end",l.end),r.__renderYearPickerTitle(c,o),r.__renderYearPickerContent(c,o)}),this},__renderYearPickerTitle:function(e,t){var a=e.data();e.find(".year-header").data("date",t.format(m.YYYY)).find(".year-header-title").text(a.start+" - "+a.end)},__renderYearPickerContent:function(t,n){for(var i=t.find(".year-body .year-body-content").empty(),r=t.data(),s="year",d=r.start;d<=r.end;d++)n.year(d),e("<span>").text(d).attr("data-value",d).addClass(n.isSame(a(),s)?"hover":"").addClass(this.__disabled(n,s)?"disabled":"").addClass(this.__actived(n,s)?"active":"").attr("bx-click",f({unit:s,value:n.format(m.YYYY),pattern:m.YYYY})).appendTo(i)},__renderMonthPicker:function(n,i){n=void 0!==n?n:{single:this.data.date,multiple:this.data.date[this.data.date.length-1],range:this.data.date[this.data.date.length-1]}[this.options.mode]||a(),i=void 0!==i?i:this.__cursor||0;var r=this,s=this.__isUnlimitMode();s&&(n=a().startOf("day"));var d=this.$element.find(".month");return t.each(d,function(s,d){var o=e(s),c=a(t.isArray(n)?n[0]:n).add(d-i,"months");r.__renderMonthPickerTitle(o,c),r.__renderMonthPickerContent(o,c)}),this},__renderMonthPickerTitle:function(e,t){e.find(".month-header").data("date",t.format(m.YYYY)).find(".month-header-title").text(t.format(m.YYYY))},__renderMonthPickerContent:function(t,n){for(var i="month",r=t.find(".month-body .month-body-content").empty(),s=0;s<v.length;s++)n.month(s),e("<span>").text(v[s]).attr("data-value",n.format(m.YYYY_MM)).addClass(n.isSame(a(),i)?"hover":"").addClass(this.__disabled(n,i)?"disabled":"").addClass(this.__actived(n,i)?"active":"").attr("bx-click",f({unit:i,value:n.format(m.YYYY_MM),pattern:m.YYYY_MM})).appendTo(r)},__renderDayPicker:function(n,i){n=void 0!==n?n:{single:this.data.date,multiple:this.data.date[this.data.date.length-1],range:this.data.date[this.data.date.length-1]}[this.options.mode]||a(),i=void 0!==i?i:this.__cursor||0;var r=this;this.__isUnlimitMode()&&(n=a().startOf("day"));var s=this.$element.find(".day");return t.each(s,function(s,d){var o=e(s),c=a(t.isArray(n)?n[0]:n).add(d-i,"months");r.__renderDayPickerTitle(o,c),r.__renderDayPickerContent(o,c)}),this},__renderDayPickerTitle:function(e,t){e.find(".day-header").data("date",t.format(m.YYYY_MM)).find(".day-header-title").text(t.format("YYYY - MM"))},__renderDayPickerContent:function(t,n){for(var i=a(n).date(1).day(),r=n.daysInMonth(),s="day",d=t.find(".day-body .day-body-content").empty(),o=0;o<i;o++)d.append('<span class="inactive">');for(var c=1;c<=r;c++)n.date(c),e("<span>").text(c).addClass(n.isSame(a(),s)?"hover":"").addClass(this.__disabled(n,s)?"disabled":"").addClass(this.__actived(n,s)?"active":"").attr("bx-click",f({unit:"date",value:n.format(m.YYYY_MM_DD),pattern:m.YYYY_MM_DD})).appendTo(d)},__renderTimePicker:function(){var e=a(this.data.date),t=this.$element.find(".hour-minute-second input");return t.eq(0).val(e.format("HH")),t.eq(1).val(e.format("mm")),t.eq(2).val(e.format("ss")),this},_changeTime:function(t,n,i,r){var s={38:1,40:-1};this.__unlimit=!1;var d=this.data.date;if(void 0===n&&void 0===i&&void 0===r){var o=e.Event("change"+l);return void this.trigger(o,[a(d),"time"])}var c=d.toDate().getTime();if("keydown"===t.type){if(!s[t.which])return;n=s[t.which]||0}"blur"!==t.type&&"focusout"!==t.type||(this.data.date.set(i,t.target.value),n=0),d.add(n,r),t.preventDefault(),t.stopPropagation();var u=d.toDate().getTime()===c,p=e.Event((u?"unchange":"change")+l);if(this.trigger(p,[a(d),i]),!p.isDefaultPrevented()&&!u){this.__renderTimePicker();var h=this;clearTimeout(this.__timer),this.__timer=setTimeout(function(){h.__renderYearPicker().__renderMonthPicker().__renderDayPicker()},100)}},__disabled:function(e,t){var a=this.options.range,n=this.options.excluded;return!this.__inRange(e,a,t)||this.__inExcluded(e,n,t)},__inRange:function(e,t,a){return this.__in(e,t,a,!0)},__inExcluded:function(e,t,a){return this.__in(e,t,a,!1)},__in:function(e,n,i,r){if(!n.length)return r;for(var d,c,l,u=o(this.data.typeMap),p=0;p<n.length;p+=2){if(d=n[p]&&(t.isString(n[p])&&(l=_.exec(n[p]))?a().add((l[1]+1)*l[2],u):s(n[p])),c=n[p+1]&&(t.isString(n[p+1])&&(l=_.exec(n[p+1]))?a().add((l[1]+1)*l[2],u):s(n[p+1])),d&&c){var h=[a.min(d,c),a.max(d,c)];d=h[0],c=h[1]}if((!d||e.isSame(d,i)||e.isAfter(d,i))&&(!c||e.isSame(c,i)||e.isBefore(c,i)))return!0}return!1},__actived:function(e,n){if(this.__isUnlimitMode())return!1;var i=this.data.date;switch(this.options.mode){case"single":return e.isSame(i,n);case"multiple":return t.find(i,function(t){return e.isSame(a(t),n)});case"range":return 1===i.length&&e.isSame(i[0],n)||2===i.length&&(e.isSame(a.min(i[0],i[1]),n)||e.isAfter(a.min(i[0],i[1]),n))&&(e.isSame(a.max(i[0],i[1]),n)||e.isBefore(a.max(i[0],i[1]),n))}return!1},_unlimit:function(){var t=this.options.unlimit,a=!!this.__unlimit;this.__unlimit=t,a=a?a:t.isSame(this.data.date);var n=e.Event((a?"unchange":"change")+l);this.trigger(n,[t,"date"]),n.isDefaultPrevented()||this.__renderYearPicker().__renderMonthPicker().__renderDayPicker()},destroy:function(){this.$manager.undelegate(this.$element,this)}}),c}.apply(t,n),!(void 0!==i&&(e.exports=i))},function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t){e.exports=n},function(e,t){e.exports=i},function(e,t,a){var n;n=function(){return'<div class="datepicker-ancient-container">\n    <!-- 年月日 -->\n    <div class="year-month-day-container clearfix">\n        <% for( var page = 0, first, last; page < options.pages; page++ ) { %>\n        <%     first = page === 0 %>\n        <%     last = page === options.pages - 1 %>\n        <!-- 年月日 <%= page %>/<%= options.pages %> -->\n        <div class="year-month-day <%= first ? \'first\' : \'\' %> <%= last ? \'last\' : \'\' %>" data-page="<%= page %>">\n            <!-- 年 YYYY -->\n            <% var yearDisplay = typeMap.year && !typeMap.month && !typeMap.day ? \'\' : \'display: none;\' %>\n            <div class="year" style="<%= yearDisplay %>">\n                <div class="year-header">\n                    <a class="year-header-prev" href="javascript:;" bx-click="_moveYearPicker(-1)"><span class="brixfont">&#xe601;</span></a>\n                    <span class="year-header-title">? - ?</span>\n                    <a class="year-header-next" href="javascript:;" bx-click="_moveYearPicker(1)"><span class="brixfont">&#xe600;</span></a>\n                </div>\n                <div class="year-body">\n                    <div class="year-body-content clearfix">\n                        <!-- <span bx-click="_active(value, unit, pattern)" data-value="2014" class="active">2014</span> -->\n                        <!-- <span bx-click="_active(value, unit, pattern)" data-value="2014">2014</span> -->\n                    </div>\n                </div>\n            </div>\n            <!-- 月 MM -->\n            <% var monthDisplay = typeMap.month && !typeMap.day ? \'\' : \'display: none;\' %>\n            <div class="month" style="<%= monthDisplay %>">\n                <div class="month-header">\n                    <a class="month-header-prev" href="javascript:;" bx-click="_moveMonthPicker(-1)"><span class="brixfont">&#xe601;</span></a>\n                    <span class="month-header-title" bx-click="_slide(\'.month\', \'.year\')">?</span>\n                    <a class="month-header-next" href="javascript:;" bx-click="_moveMonthPicker(1)"><span class="brixfont">&#xe600;</span></a>\n                </div>\n                <div class="month-body">\n                    <div class="month-body-content clearfix">\n                        <!-- <span bx-click="_active(value, unit, pattern)" data-value="1" class="active">Jan</span -->\n                        <!-- <span bx-click="_active(value, unit, pattern)" data-value="1">Jan</span -->\n                    </div>\n                </div>\n            </div>\n            <!-- 日 DD -->\n            <% var dayDisplay = typeMap.day ? \'\' : \'display: none;\' %>\n            <div class="day" style="<%= dayDisplay %>">\n                <div class="day-header">\n                    <a href="javascript:;" class="day-header-prev" bx-click="_moveDayPicker(-1)"><span class="brixfont">&#xe601;</span></a>\n                    <span bx-click="_slide(\'.day\', \'.month\')" class="day-header-title">?</span>\n                    <a href="javascript:;" class="day-header-next" bx-click="_moveDayPicker(1)"><span class="brixfont">&#xe600;</span></a>\n                </div>\n                <div class="day-body">\n                    <div class="day-body-desc clearfix">\n                        <span class="disabled">日</span><span class="disabled">一</span><span class="disabled">二</span><span class="disabled">三</span><span class="disabled">四</span><span class="disabled">五</span><span class="disabled">六</span>\n                    </div>\n                    <div class="day-body-content clearfix">\n                        <!-- <span class="inactive"></span> -->\n                        <!-- <span bx-click="_active(value, unit, pattern)" data-value="1" class="active">01</span> -->\n                        <!-- <span bx-click="_active(value, unit, pattern)" data-value="1">01</span> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <% } %>\n    </div>\n    <!-- 时分秒 -->\n    <% var timeDisplay = typeMap.time || typeMap.second || typeMap.minute || typeMap.hour  ? \'\': \'display: none;\' %>\n    <div class="hour-minute-second-container clearfix" style="<%= timeDisplay %>">\n        <div class="hour-minute-second clearfix">\n            <div class="hour-minute-second-body clearfix">\n                <!-- 时 HH -->\n                <div class="hour clearfix">\n                    <input class="form-control" type="text" tabindex="<%=options.clientId%>" bx-keydown="_changeTime(undefined, \'hour\', \'hours\')" bx-focusout="_changeTime(undefined, \'hour\', \'hours\')">\n                    <button type="button" class="btn btn-default hour-minus" bx-click="_changeTime(-1, \'hour\', \'hours\')"><span class="glyphicon glyphicon-minus"></span></button>\n                    <button type="button" class="btn btn-default hour-plus" bx-click="_changeTime(1, \'hour\', \'hours\')"><span class="glyphicon glyphicon-plus"></span></button>\n                </div>\n                <span class="spliter">:</span>\n                <!-- 分 mm -->\n                <div class="minute clearfix">\n                    <% var minuteDisabled = typeMap.hour && !typeMap.minute  ? \'disabled\': \'\' %>\n                    <input class="form-control" type="text" tabindex="<%=options.clientId%>" bx-keydown="_changeTime(undefined, \'minute\', \'minutes\')" bx-focusout="_changeTime(undefined, \'minute\', \'minutes\')" <%= minuteDisabled %>>\n                    <button type="button" class="btn btn-default minute-minus" bx-click="_changeTime(-1, \'minute\', \'minutes\')" <%= minuteDisabled %>><span class="glyphicon glyphicon-minus"></span></button>\n                    <button type="button" class="btn btn-default minute-plus" bx-click="_changeTime(1, \'minute\', \'minutes\')" <%= minuteDisabled %>><span class="glyphicon glyphicon-plus"></span></button>\n                </div>\n                <span class="spliter">:</span>\n                <!-- 秒 ss -->\n                <div class="second clearfix">\n                    <% var secondDisabled = (typeMap.hour || typeMap.minute) && !typeMap.second  ? \'disabled\': \'\' %>\n                    <input class="form-control" type="text" tabindex="<%=options.clientId%>" bx-keydown="_changeTime(undefined, \'second\', \'seconds\')" bx-focusout="_changeTime(undefined, \'second\', \'seconds\')" <%= secondDisabled %>>\n                    <button type="button" class="btn btn-default second-minus" bx-click="_changeTime(-1, \'second\', \'seconds\')" <%= secondDisabled %>><span class="glyphicon glyphicon-minus"></span></button>\n                    <button type="button" class="btn btn-default second-plus" bx-click="_changeTime(1, \'second\', \'seconds\')" <%= secondDisabled %>><span class="glyphicon glyphicon-plus"></span></button>\n                </div>\n            </div>\n            <div class="hour-minute-second-footer">\n                <button class="btn btn-default submit" bx-click="_changeTime()">确认</button>\n                <a href="javascript: void(0);" class="btn btn-default cancel ml5">取消</a>\n            </div>\n        </div>\n    </div>\n    <!-- 不限 -->\n    <div class="unlimit-container clearfix" style="<%= options.unlimit ? \'\' : \'display: none;\' %>">\n        <a href="javascript:;" bx-click="_unlimit()">不限</a>\n    </div>\n</div>'}.call(t,a,t,e),!(void 0!==n&&(e.exports=n))}])});
//# sourceMappingURL=ancient.js.map