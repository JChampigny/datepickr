!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Datepickr=t()}}(function(){return function t(e,i,n){function a(r,s){if(!i[r]){if(!e[r]){var h="function"==typeof require&&require;if(!s&&h)return h(r,!0);if(o)return o(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var f=i[r]={exports:{}};e[r][0].call(f.exports,function(t){var i=e[r][1][t];return a(i||t)},f,f.exports,t,e,i,n)}return i[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)a(n[r]);return a}({1:[function(t,e,i){!function(t){Date.prototype.getPickrDate=function(t){return t&&t.utc?this.getUTCDate():this.getDate()},Date.prototype.getPickrFullYear=function(t){return t&&t.utc?this.getUTCFullYear():this.getFullYear()},Date.prototype.getPickrMonth=function(t){return t&&t.utc?this.getUTCMonth():this.getMonth()},Date.prototype.getPickrDay=function(t){return t&&t.utc?this.getUTCDay():this.getDay()};var i=function(){var t=new Date,e=[31,28,31,30,31,30,31,31,30,31,30,31],i=[],n={current:{year:function(e){return t.getPickrFullYear(e)},month:function(e){return t.getPickrMonth(e)},day:function(e){return t.getPickrDate(e)}},month:{string:function(t,e){return e[t]},numDays:function(t,i){return 1!==t||3&i||!(i%100)&&i%400?e[t]:29}}};function a(t){var e,i,n,a,o,r=new Date(this.year,this.month).getTime();switch(t.target.getAttribute("data-target")){case"month-prev":if(this.config.minDate&&r<=this.config.minDate)return;this.month--,this.month<0&&(this.year--,this.month=11),f.call(this);break;case"month-next":if(this.config.maxDate&&r>=this.config.maxDate)return;this.month++,this.month>11&&(this.year++,this.month=0),f.call(this);break;case"day":var s=(e=new Date(this.year,this.month,t.target.textContent),i=new Date(e),n=""+(i.getMonth()+1),a=""+i.getDate(),o=i.getFullYear(),n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[o,n,a].join("-")),h=t.target.classList;if(this.config.halfDay)h.contains("halfday")?(h.remove("halfday"),this.config.activeDays=this.config.activeDays.map(function(t){return t[0]===s&&(t[1]="F"),t})):h.contains("active")?(h.remove("active","halfday"),this.config.activeDays=this.config.activeDays.filter(function(t){return t[0]!==s})):(h.add("active","halfday"),this.config.activeDays.push([s,"H"]));else if(h.contains("active"))h.remove("active","halfday"),this.config.activeDays=this.config.activeDays.filter(function(t){return t[0]!==s});else{if(this.config.singleSelection){for(var c=this.element.querySelectorAll("a"),l=0;l<c.length;l++)c[l].classList.remove("active","halfday");this.config.activeDays=[[s,"F"]]}else this.config.activeDays.push([s,"F"]);h.add("active")}this.config.activeDays.sort(function(t,e){return t[0]-e[0]}),this.callback(this.config.activeDays)}}function o(t,e,n){t in i||(i[t]=document.createElement(t));var a=i[t].cloneNode(!1);if(e)for(var o in e)a.setAttribute(o,e[o]);return n&&("object"==typeof n?a.appendChild(n):a.textContent=n),a}function r(t){return new Date(t.getPickrFullYear(this.config),t.getPickrMonth(this.config),t.getPickrDate(this.config))}function s(t,e,i){return i===n.current.day(this.config)&&e===n.current.month(this.config)&&t===n.current.year(this.config)}function h(t,e,i){var n=new Date(t,e,i).getPickrDay(this.config);return 0===n||6===n}function c(t,e,i){var n,a=new Date(t,e,i).getTime();return this.config.omitDays.length&&this.config.omitDays.forEach(function(t){t===a&&(n=!0)}),n}function f(){for(;this.calendarBody.hasChildNodes();)this.calendarBody.removeChild(this.calendarBody.lastChild);var t=new Date(this.year,this.month,1).getPickrDay(this.config),e=n.month.numDays(this.month,this.year);this.currentMonth.textContent=n.month.string(this.month,this.config.months)+" "+this.year,this.calendarBody.appendChild(l.call(this,t,e,this.month,this.year))}function l(t,e,i,n){var a,f,l,u=document.createDocumentFragment(),g=o("tr"),d=0;for(l=1;l<=t;l++)g.appendChild(o("td")),d++;for(l=1;l<=e;l++){f=!1,7===d&&(u.appendChild(g),g=o("tr"),d=0),s.call(this,n,i,l)?this.config.omitWeekends&&h.call(this,n,i,l)||this.config.omitDays&&this.config.omitDays.length&&c.call(this,n,i,l)?(a="today quiet",f=!0):a="today":this.config.omitPast&&new Date(n,i,l).getTime()<(new Date).getTime()||this.config.omitFuture&&new Date(n,i,l).getTime()>(new Date).getTime()||this.config.omitWeekends&&h.call(this,n,i,l)||this.config.omitDays&&this.config.omitDays.length&&c.call(this,n,i,l)?(a="fill-light quiet",f=!0):a="fill-light";var y=this;this.config.activeDays.length&&this.config.activeDays.forEach(function(t){r.call(y,new Date(t[0])).getTime()===new Date(n,i,l).getTime()&&(a+="F"===t[1]?" active":" halfday active")}),g.appendChild(o("td",{},o("a",{class:a,"data-target":!f&&"day",href:"#"},l))),d++}for(l=1;l<=7-d;l++)g.appendChild(o("td"));return u.appendChild(g),u}function u(){var t,e,i,r=new Date(this.config.startYear,this.config.startMonth,1).getPickrDay(this.config),s=n.month.numDays(this.month,this.year),h=o("div",{class:"date-pickr"});this.currentMonth=(this.config,t=this.month,e=this.year,i=this.config.months,o("strong",{class:"small"},n.month.string(t,i)+" "+e));var c,f,u,g=(this.config,this.month,this.year,c=o("div",{class:"months"}),f=o("a",{class:"icon next button short quiet","data-target":"month-next",href:"#"}),u=o("a",{class:"icon prev button short quiet","data-target":"month-prev",href:"#"}),c.appendChild(f),c.appendChild(u),c);g.appendChild(this.currentMonth);var d,y,m=o("table",{class:"small"},o("thead",{},o("tr",{class:"weekdays"},(d=this.config.weekdays,y=document.createDocumentFragment(),d.forEach(function(t){y.appendChild(o("th",{},t))}),y))));return this.calendarBody=o("tbody"),this.calendarBody.appendChild(l.call(this,r,s,this.month,this.year)),m.appendChild(this.calendarBody),h.appendChild(g),h.appendChild(m),this.element.appendChild(h),h.addEventListener("click",function(t){t.preventDefault(),a.call(this,t)}.bind(this)),h}return function(t,e,i){var a={};if(this.element=t,this.callback=e,this.config={utc:!1,weekdays:["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],minDate:null,maxDate:null,halfDay:!1,omitPast:!1,omitFuture:!1,omitWeekends:!1,omitDays:[],activeDays:[],singleSelection:!1},this.config.startYear=n.current.year(this.config),this.config.startMonth=n.current.month(this.config),i)for(var o in i)this.config.hasOwnProperty(o)&&(this.config[o]=i[o]);var s=this;return this.config.activeDays.length&&(this.config.activeDays=this.config.activeDays.map(function(t){return[r.call(s,new Date(t[0])).getTime(),t[1]]})),this.config.omitDays.length&&(this.config.omitDays=this.config.omitDays.map(function(t){return r.call(s,new Date(t)).getTime()})),a.options=function(t){if(t)for(var e in t)this.config.hasOwnProperty(e)&&(this.config[e]=t[e])}.bind(this),this.year=this.config.startYear,this.month=this.config.startMonth,u.call(this),a}}();t.Datepickr=i,void 0!==e&&e.exports&&(e.exports=i)}(this)},{}]},{},[1])(1)});
