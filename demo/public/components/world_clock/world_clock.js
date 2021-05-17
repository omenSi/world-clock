/*! WorldClock v1.0 | (c) https://github.com/omenSi | https://github.com/omenSi/world-clock/blob/main/LICENSE */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WorldClock",[],t):"object"==typeof exports?exports.WorldClock=t():e.WorldClock=t()}(self,(function(){return(()=>{var e={757:(e,t,n)=>{e.exports=n(666)},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),c=new C(r||[]);return i._invoke=function(e,t,n){var r=d;return function(o,i){if(r===m)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=E(c,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var l=u(e,t,n);if("normal"===l.type){if(r=n.done?f:h,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=f,n.method="throw",n.arg=l.arg)}}}(e,n,c),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",h="suspendedYield",m="executing",f="completed",p={};function v(){}function y(){}function g(){}var w={};w[i]=function(){return this};var k=Object.getPrototypeOf,_=k&&k(k(x([])));_&&_!==n&&r.call(_,i)&&(w=_);var b=g.prototype=v.prototype=Object.create(w);function T(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,i,c,a){var l=u(e[o],e,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,a)}),(function(e){n("throw",e,c,a)})):t.resolve(d).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,a)}))}a(l.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function x(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return c.next=c}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,y.displayName=l(g,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,a,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},T(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var c=new S(s(t,n,r,o),i);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},T(b),l(b,a,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var l=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n,r,o,i,c){try{var a=e[i](c),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,o)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(r,{default:()=>P});var l=n(757),s=n.n(l);function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function h(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function p(e,t,n){return(p=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function v(e){var t="function"==typeof Map?new Map:void 0;return(v=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return p(e,arguments,m(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}const y=function(e){d(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m(t);if(n){var o=m(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return h(this,e)});function i(e){return o(this,i),r.call(this,e)}return i}(v(Error));var g=function e(){o(this,e)};a(g,"BOOLEAN","boolean"),a(g,"STRING","string");var w,k=function(){function e(){o(this,e)}return c(e,null,[{key:"convertRemToPixels",value:function(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}}]),e}(),_=function e(){o(this,e)};a(_,"SettingsDark","<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 426.667 426.667' style='enable-background:new 0 0 426.667 426.667;' xml:space='preserve'><g><path d='M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307 c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44 c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96 l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573 c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44 c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16 c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96 l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92 C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667 s74.667,33.387,74.667,74.667S254.56,288,213.28,288z'/></g></svg>"),a(_,"SettingsLight","<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 426.667 426.667' style='enable-background:new 0 0 426.667 426.667;' xml:space='preserve'><g><path fill='%23EEE' d='M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307 c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44 c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96 l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573 c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44 c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16 c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96 l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92 C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667 s74.667,33.387,74.667,74.667S254.56,288,213.28,288z'/></g></svg>");var b=function e(){o(this,e)};a(b,"MenuOpenBtnId","_worldClockMenuOpen"),a(b,"MenuCloseBtnId","_worldClockMenuClose"),a(b,"MenuElmId","_worldClockMenu"),a(b,"MenuSearchElmId","_worldClockTimezoneSearch"),a(b,"TimezoneListElmId","_worldClockTimezoneList"),a(b,"TimezoneListObjectTypes",{Group:"group",Region:"region",City:"city"}),a(b,"TimeElmId","_worldClockCurrentTime"),a(b,"DateElmId","_worldClockCurrentDate"),a(b,"TimezoneElmId","_worldClockCurrentTimezone"),a(b,"StorageKey","_worldClockTZ"),a(b,"MomentPath","https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"),a(b,"MomentTimezonePath","https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.33/moment-timezone-with-data-10-year-range.min.js"),a(b,"CSSFilePath","style.css"),a(b,"CSS",{Hidden:"_world-clock-hidden",Selectable:"_world-clock-selectable",WidgetWrapper:"_world-clock-wrapper",TimezonePlaceholder:"_world-clock-current-timezone",TimeDateWrapper:"_world-clock-time-date",TimePlaceholder:"_world-clock-current-time",DatePlaceholder:"_world-clock-date",MenuOpenButton:"_world-clock-menu-toggle",MenuCloseButton:"_world-clock-menu-close",MenuOpenButtonImage:"_world-clock-menu-image",MenuWrapper:"_world-clock-menu",SearchWrapper:"_world-clock-menu-search-wrapper",SearchInput:"_world-clock-menu-search-input",TimezoneListWrapper:"_world-clock-menu-timezone-list-wrapper",TimezoneList:"_world-clock-menu-timezone-list",TimezoneListGroup:"_world-clock-menu-group",TimezoneListRegion:"_world-clock-menu-region",TimezoneListCity:"_world-clock-menu-city",LightTheme:"_world-clock-theme-light",DarkTheme:"_world-clock-theme-dark"}),a(b,"WidgetStyleElmId","_world-clock-style"),a(b,"DefaultTimeFormat","HH:mm:ss"),a(b,"NoSecondsTimeFormat","HH:mm"),a(b,"DefaultDateFormat","YYYY-MM-DD"),a(b,"Themes",{Dark:"dark",Light:"light"}),a(b,"ThemeToCSS",(a(w={},b.Themes.Dark,b.CSS.DarkTheme),a(w,b.Themes.Light,b.CSS.LightTheme),w));const T=b,S=function(){function e(t){if(o(this,e),this._menu=t,this._searchElm=document.getElementById(T.MenuSearchElmId),!this._searchElm)throw new y("Search element does not exist.");this._searchElm.onkeyup=this._handleUserInput.bind(this)}return c(e,[{key:"menu",get:function(){return this._menu}},{key:"_handleUserInput",value:function(e){var t=e.target.value;this.menu.timezoneList.filterTimezonesByUserInput(t)}},{key:"clearSearch",value:function(){this._searchElm.value="",this._searchElm.dispatchEvent(new KeyboardEvent("keyup",{key:"Backspace"}))}}]),e}(),E=function(){function e(){o(this,e)}return c(e,null,[{key:"buildTimezoneListGroup",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("li");return n.innerText=e,n.classList.add(T.CSS.TimezoneListGroup),t&&n.classList.add(T.CSS.Selectable),n.dataset.obj=T.TimezoneListObjectTypes.Group,n.dataset.timezonePartName=e,n}},{key:"buildTimezoneListRegion",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("li");return n.innerText=e,n.classList.add(T.CSS.TimezoneListRegion),t&&n.classList.add(T.CSS.Selectable),n.dataset.obj=T.TimezoneListObjectTypes.Region,n.dataset.timezonePartName=e,n}},{key:"buildTimezoneListCity",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("li");return n.innerText=e,n.classList.add(T.CSS.TimezoneListCity),t&&n.classList.add(T.CSS.Selectable),n.dataset.obj=T.TimezoneListObjectTypes.City,n.dataset.timezonePartName=e,n}},{key:"buildWidgetWrapper",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T.Themes.Light,t=document.createElement("div");return t.classList.add(T.CSS.WidgetWrapper),[T.Themes.Light,T.Themes.Dark].includes(e)&&t.classList.add(T.ThemeToCSS[e]),t}},{key:"buildTimezoneTimeDatePlaceholders",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");return o.id=T.TimezoneElmId,i.id=T.TimeElmId,c.id=T.DateElmId,n.classList.add(T.CSS.TimeDateWrapper),o.classList.add(T.CSS.TimezonePlaceholder),i.classList.add(T.CSS.TimePlaceholder),c.classList.add(T.CSS.DatePlaceholder),r.appendChild(o),r.appendChild(e.buildMenuOpenButton()),n.appendChild(r),n.appendChild(i),n.appendChild(c),t||c.classList.add(T.CSS.Hidden),n}},{key:"buildMenuOpenButton",value:function(){var e=document.createElement("div"),t=document.createElement("div");return e.id=T.MenuOpenBtnId,e.classList.add(T.CSS.MenuOpenButton),t.classList.add(T.CSS.MenuOpenButtonImage),e.appendChild(t),e}},{key:"buildWidgetFace",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e.buildTimezoneTimeDatePlaceholders(t)}},{key:"buildMenu",value:function(){var t=document.createElement("div");return t.id=T.MenuElmId,t.classList.add(T.CSS.MenuWrapper,T.CSS.Hidden),t.appendChild(e.buildMenuSearch()),t.appendChild(e.buildMenuTimezoneList()),t}},{key:"buildMenuSearch",value:function(){var t=document.createElement("div"),n=document.createElement("input");return t.classList.add(T.CSS.SearchWrapper),n.classList.add(T.CSS.SearchInput),n.type="text",n.placeholder="Search for timezone...",n.id=T.MenuSearchElmId,t.appendChild(n),t.appendChild(e.buildMenuCloseButton()),t}},{key:"buildMenuCloseButton",value:function(){var e=document.createElement("span");return e.id=T.MenuCloseBtnId,e.classList.add(T.CSS.MenuCloseButton),e.innerHTML="&times;",e}},{key:"buildMenuTimezoneList",value:function(){var e=document.createElement("div"),t=document.createElement("ul");return e.classList.add(T.CSS.TimezoneListWrapper),t.classList.add(T.CSS.TimezoneList),t.id=T.TimezoneListElmId,e.appendChild(t),e}}]),e}(),z=function(){function t(e){if(o(this,t),this._menu=e,this._listElm=document.getElementById(T.TimezoneListElmId),!this._listElm)throw new y("Timezone list element does not exist.");this._populateList(),this._listElm.addEventListener("click",this._on_click.bind(this))}return c(t,[{key:"menu",get:function(){return this._menu}},{key:"_on_click",value:function(e){if(e.target.dataset.obj&&e.target.classList.contains(T.CSS.Selectable)){var t=null;switch(e.target.dataset.obj){case T.TimezoneListObjectTypes.Group:t=this.menu.clock.findTimezonePart(T.TimezoneListObjectTypes.Group,e.target.dataset.timezonePartName);break;case T.TimezoneListObjectTypes.Region:t=this.menu.clock.findTimezonePart(T.TimezoneListObjectTypes.Region,e.target.dataset.timezonePartName);break;case T.TimezoneListObjectTypes.City:t=this.menu.clock.findTimezonePart(T.TimezoneListObjectTypes.City,e.target.dataset.timezonePartName)}t&&(this._scrollToTop(),this.menu.clock.selectCurrentTimezone(t),this.menu.timezoneSearch.clearSearch(),this.menu.close())}}},{key:"_scrollToTop",value:function(){this._listElm.scroll(0,0)}},{key:"_populateList",value:function(){var e=this,t=this.menu.clock.timezoneGroups;Object.values(t).forEach((function(t){var n=E.buildTimezoneListGroup(t.name,t.selectable);e._listElm.appendChild(n),Object.values(t.regions).forEach((function(t){var n=E.buildTimezoneListRegion(t.name,t.selectable);e._listElm.appendChild(n),Object.values(t.cities).forEach((function(t){var n=E.buildTimezoneListCity(t.name,t.selectable);e._listElm.appendChild(n)}))}))}))}},{key:"_findListElementOfTypeBeforeThisElement",value:function(t,n){if(!Object.values(T.TimezoneListObjectTypes).includes(n))throw new y("Unrecongnized timezone part type - ".concat(e(n),"."));for(var r=t,o=!1;r&&!o;)(r=r.previousSibling).dataset.obj===n&&(o=!0);return r}},{key:"filterTimezonesByUserInput",value:function(t){var n=this;if(e(t)!==g.STRING)throw new y("Cannot filter list by provided value - ".concat(t,". Please provide a String."));var r=t.trim().toLowerCase(),o=null,i=null,c=[];Array.from(this._listElm.children).forEach((function(e){if(e.innerText.toLowerCase().indexOf(r)>-1)switch(e.dataset.obj){case T.TimezoneListObjectTypes.Group:c.push(e);break;case T.TimezoneListObjectTypes.Region:(o=n._findListElementOfTypeBeforeThisElement(e,T.TimezoneListObjectTypes.Group))&&c.push(o),c.push(e);break;case T.TimezoneListObjectTypes.City:o=n._findListElementOfTypeBeforeThisElement(e,T.TimezoneListObjectTypes.Group),i=n._findListElementOfTypeBeforeThisElement(e,T.TimezoneListObjectTypes.Region),o&&c.push(o),i&&c.push(i),c.push(e)}})),Array.from(this._listElm.children).forEach((function(e){c.includes(e)?e.classList.remove(T.CSS.Hidden):e.classList.add(T.CSS.Hidden)}))}}]),t}(),L=function(){function e(t){if(o(this,e),this._clock=t,this._menuOpenBtn=document.getElementById(T.MenuOpenBtnId),this._menuCloseBtn=document.getElementById(T.MenuCloseBtnId),this._menuElm=document.getElementById(T.MenuElmId),this._isOpen=!1,!this._menuOpenBtn)throw new y("Menu open button does not exist.");if(!this._menuCloseBtn)throw new y("Menu close button does not exist.");if(!this._menuElm)throw new y("Menu does not exist.");this._menuOpenBtn.onclick=this.open.bind(this),this._menuCloseBtn.onclick=this.close.bind(this),this._timezoneSearch=new S(this),this._timezoneList=new z(this),this.close()}return c(e,[{key:"clock",get:function(){return this._clock}},{key:"timezoneList",get:function(){return this._timezoneList}},{key:"timezoneSearch",get:function(){return this._timezoneSearch}},{key:"open",value:function(){this._isOpen=!0,this._menuElm.classList.remove(T.CSS.Hidden)}},{key:"close",value:function(){this._isOpen=!1,this._menuElm.classList.add(T.CSS.Hidden)}}]),e}(),C=function(){function t(e){var n=this;if(o(this,t),this._clock=e,this._clockElm=document.getElementById(T.TimeElmId),this._dateElm=document.getElementById(T.DateElmId),this._timezoneElm=document.getElementById(T.TimezoneElmId),!this._clockElm)throw new y("Clock element does not exist.");if(!this._dateElm)throw new y("Date element does not exist.");if(!this._timezoneElm)throw new y("Timezone element does not exist.");window.addEventListener("resize",(function(e){return n._updateFontSizes()})),window.addEventListener("orientationchange",(function(e){return n._updateFontSizes()})),this._updateFontSizes()}return c(t,[{key:"clock",get:function(){return this._clock}},{key:"setTime",value:function(t){if(e(t)!==g.STRING)throw new y("Incorrect type for a time text.");this._clockElm.innerText=t}},{key:"setDate",value:function(t){if(e(t)!==g.STRING)throw new y("Incorrect type for a date text.");this._dateElm.innerText=t}},{key:"setTimezone",value:function(t){if(e(t)!==g.STRING)throw new y("Incorrect type for a timezone text.");this._timezoneElm.innerText=t}},{key:"_updateFontSizes",value:function(){var e=Math.max(Math.min(this._timezoneElm.parentElement.clientWidth/20,parseFloat(25)),parseFloat(15)),t=Math.max(Math.min(this._dateElm.clientWidth/20,parseFloat(25)),parseFloat(15)),n=Math.max(Math.min(this._clockElm.clientWidth/8,parseFloat(100)),parseFloat(30));e+t+n+k.convertRemToPixels(2)<=this._clock.container.clientHeight&&(this._timezoneElm.style.fontSize="".concat(e,"px"),this._dateElm.style.fontSize="".concat(t,"px"),this._clockElm.style.fontSize="".concat(n,"px"))}}]),t}(),x=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];o(this,t),this.parent=n,this.name=e,this._selectable=r}return c(t,[{key:"selectable",get:function(){return this._selectable},set:function(t){if(e(t)!==g.BOOLEAN)throw new y("Cannot set TimezoneObject selectable flag, because input is not a Boolean.");this._selectable=t}},{key:"timezoneName",get:function(){for(var e=this.parent,t="".concat(this.name);e;)t="".concat(e.name,", ").concat(t),e=e.parent;return t}},{key:"timezone",get:function(){for(var e=this.parent,t="".concat(this.name);e;)t="".concat(e.name,"/").concat(t),e=e.parent;return t}}]),t}();const O=function(e){d(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m(t);if(n){var o=m(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return h(this,e)});function i(e,t,n){return o(this,i),r.call(this,e,t,n)}return i}(x);const j=function(e){d(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m(t);if(n){var o=m(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return h(this,e)});function i(e,t,n){var c;return o(this,i),(c=r.call(this,e,t,n)).cities={},c}return c(i,[{key:"addCity",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.cities[e]||(this.cities[e]=new O(e,this,t))}}]),i}(x);const I=function(e){d(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m(t);if(n){var o=m(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return h(this,e)});function i(e){var t;return o(this,i),(t=r.call(this,e,null)).regions={},t}return c(i,[{key:"addRegion",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.regions[e])return this.regions[e]=new j(e,this,t),this.regions[e]}},{key:"addRegionCity",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.regions[e])this.regions[e].addCity(t,r);else{var o=this.addRegion(e,n);o.addCity(t,r)}}}]),i}(x),M=function(){function t(e){o(this,t),this._clock=e,this.storage=window.localStorage,this._key=T.StorageKey}return c(t,[{key:"_setItem",value:function(e,t){this.storage.setItem(e,t)}},{key:"_getItem",value:function(e){return this.storage.getItem(e)}},{key:"saveTimezone",value:function(t){if(!(t instanceof x))throw new y("Unrecongnized timezone part type - ".concat("undefined"==typeof part?"undefined":e(part),"."));this._setItem(T.StorageKey,t.timezone)}},{key:"getTimezone",value:function(){var e=null,t=this._getItem(T.StorageKey);if(t){var n=t.split("/"),r=n[0],o=n[1],i=n[2];if(!r||o||i||(e=new I(r)),r&&o&&!i){var c=new I(r);c.addRegion(o),e=c.regions[o]}if(r&&o&&i){var a=new I(r);a.addRegion(o);var l=a.regions[o];l.addCity(i),e=l.cities[i]}}return e}}]),t}();var R='\n._world-clock-wrapper {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n._world-clock-wrapper._world-clock-theme-light {\n    background: rgb(240, 240, 240);\n    color: #191818;\n}\n\n._world-clock-wrapper._world-clock-theme-dark {\n    background: #191818;\n    color: #EEE;\n}\n\n._world-clock-wrapper._world-clock-theme-light ._world-clock-menu-image {\n    background-image: url("data:image/svg+xml;utf8,'.concat(_.SettingsDark,'");\n}\n\n._world-clock-wrapper._world-clock-theme-dark ._world-clock-menu-image {\n    background-image: url("data:image/svg+xml;utf8,').concat(_.SettingsLight,'");\n}\n\n._world-clock-wrapper._world-clock-theme-dark ._world-clock-menu {\n    background: #191818;\n    color: #EEE;\n}\n\n._world-clock-wrapper._world-clock-theme-light ._world-clock-menu {\n    background: rgb(240, 240, 240);\n    color: #191818;\n}\n\n._world-clock-wrapper._world-clock-theme-dark ._world-clock-menu-search-input {\n    background: #191818;\n    color: #EEE;\n}\n\n._world-clock-wrapper._world-clock-theme-light ._world-clock-menu-search-input {\n    background: rgb(240, 240, 240);\n    color: #191818;\n}\n\n._world-clock-time-date {\n    width: calc(100% - 2rem);\n    height: calc(100% - 2rem);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow: hidden;\n    padding: 1rem;\n}\n\n._world-clock-current-timezone {\n    white-space: nowrap;\n    display: inline-block;\n}\n\n._world-clock-current-time {\n    white-space: nowrap;\n}\n\n._world-clock-date {\n    white-space: nowrap;\n}\n\n._world-clock-menu-toggle {\n    margin-left: .2rem;\n    width: .8rem;\n    height: .8rem;\n    cursor: pointer;\n    display: inline-block;\n    white-space: nowrap;\n}\n\n._world-clock-menu-image {\n    background-image: url("data:image/svg+xml;utf8,').concat(_.SettingsLight,"\");\n    background-size: contain;\n    background-repeat: no-repeat;\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n._world-clock-menu-image:hover,\n._world-clock-menu-image:focus {\n    animation: _world-clock-menu-rotation 5s infinite linear;\n}\n\n._world-clock-hidden {\n    display: none;\n    visibility: hidden;\n}\n\n._world-clock-menu {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #eee;\n    overflow: hidden;\n}\n\n._world-clock-menu-search-wrapper {\n    height: 2rem;\n    width: 100%;\n}\n\n._world-clock-menu-close {\n    float: right;\n    cursor: pointer;\n    font-size: 1.5rem;\n    margin: 0 .5rem;\n    width: 1rem;\n    line-height: 1.4;\n    height: 100%;\n}\n\n._world-clock-menu-close:hover,\n._world-clock-menu-close:focus {\n    color: red;\n}\n\n._world-clock-menu-search-input {\n    border: none;\n    background: #eee;\n    padding: .5rem;\n    outline: none;\n    width: calc(100% - 3rem);\n}\n\n._world-clock-menu-search-wrapper:focus-within::after {\n    transform: scaleX(1);\n}\n\n._world-clock-menu-search-wrapper:after {\n    display:block;\n    content: '';\n    border-bottom: 2px solid rgb(255, 0, 128);\n    transform: scaleX(0);  \n    transition: transform 250ms ease-in-out;\n  }\n\n._world-clock-menu-timezone-list-wrapper {\n    width: 100%;\n    height: calc(100% - 2rem);\n}\n\n._world-clock-menu-timezone-list {\n    list-style: none;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow-y: auto;\n    margin-top: 2px;\n}\n\n._world-clock-menu-group {\n    font-weight: bold;\n    margin: 0.5rem;\n}\n\n._world-clock-menu-region {\n    margin: 0.25rem 1.5rem;\n}\n\n._world-clock-menu-city {\n    margin: 0.25rem 2.5rem;\n}\n\n._world-clock-selectable {\n    cursor: pointer;\n}\n\n._world-clock-selectable:hover {\n    text-decoration: underline;\n}\n\n\n@keyframes _world-clock-menu-rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n"),B=function(){function n(e){o(this,n),this._params=e,this._frameId=null,this._startTimestamp=null,this._parseParams(e),this._setContainer(e),this._init()}var r,i;return c(n,[{key:"timezoneGroups",get:function(){return this._timezoneGroups}},{key:"_init",value:(r=s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._checkMomentDependancies()){e.next=3;break}return e.next=3,this._importMomentDependancies();case 3:e.prev=3,this._importOtherDependancies(),this._timezoneGroups=this.getAllAvailableTimezones(),this._localStorage=new M,(t=this._findReconstructedTimezoneObject(this._localStorage.getTimezone()))&&this.selectCurrentTimezone(t),this._createWidget(),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(3),console.error(e.t0),new y("Failed to setup clock as of error - ".concat(e.t0,"."));case 16:case"end":return e.stop()}}),e,this,[[3,12]])})),i=function(){var e=this,n=arguments;return new Promise((function(o,i){var c=r.apply(e,n);function a(e){t(c,o,i,a,l,"next",e)}function l(e){t(c,o,i,a,l,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"_parseParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setTimeSecondsShow(e.showSeconds),this.setDateShow(e.showDate),this.setTheme(e.theme)}},{key:"_checkMomentDependancies",value:function(){return window.moment&&window.moment.tz}},{key:"_importOtherDependancies",value:function(){if(!document.getElementById(T.WidgetStyleElmId)){var e=document.createElement("style");e.innerHTML=R,e.id=T.WidgetStyleElmId,document.head.appendChild(e)}}},{key:"_importMomentDependancies",value:function(){return new Promise((function(e,t){try{var n=document.createElement("script"),r=document.createElement("script");n.src=T.MomentPath,r.src=T.MomentTimezonePath,n.async=!1,r.async=!1,document.body.appendChild(n),n.addEventListener("load",(function(e){return document.body.appendChild(r)})),r.addEventListener("load",(function(t){return e()}))}catch(e){t(e)}}))}},{key:"_createWidget",value:function(){this.wrapper=E.buildWidgetWrapper(this.theme),this.container.appendChild(this.wrapper),this.wrapper.appendChild(E.buildWidgetFace(this.showDate)),this.wrapper.appendChild(E.buildMenu()),this._widgetFace=new C(this),this._menu=new L(this),this._showWidget()}},{key:"_showWidget",value:function(){this._updateClock()}},{key:"_setContainer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!t.container)throw new y("'container' parameter was not specified.");if(e(t.container)!==g.STRING)throw new y("Please, define 'container' parameter properly.");var n=document.getElementById(t.container);if(!n)throw new y("Element with specified - ".concat(t.container," element ID, does not exist."));this.container=n}},{key:"findTimezonePart",value:function(e,t){if(!Object.values(T.TimezoneListObjectTypes).includes(e))throw new y("Undefined timezone list element type - ".concat(e,"."));var n=null;switch(e){case T.TimezoneListObjectTypes.Group:n=this.findGroup(t);break;case T.TimezoneListObjectTypes.Region:n=this.findRegion(t);break;case T.TimezoneListObjectTypes.City:n=this.findCity(t)}return n}},{key:"findGroup",value:function(e){var t=Object.values(this.timezoneGroups).find((function(t){return t.name===e}));return void 0===t?null:t}},{key:"findRegion",value:function(e){for(var t=null,n=Object.values(this.timezoneGroups),r=0;r<n.length;r++){var o=n[r];if((t=Object.values(o.regions).find((function(t){return t.name===e})))instanceof j)return t}return void 0===t?null:t}},{key:"findCity",value:function(e){for(var t=null,n=Object.values(this.timezoneGroups),r=0;r<n.length;r++)for(var o=n[r],i=Object.values(o.regions),c=0;c<i.length;c++){var a=i[c];if((t=Object.values(a.cities).find((function(t){return t.name===e})))instanceof O)return t}return void 0===t?null:t}},{key:"selectCurrentTimezone",value:function(e){if(!(e instanceof x))throw new y("Undefined timezone element type - ".concat(e,"."));if(!this._findReconstructedTimezoneObject(e))throw new y("Undefined timezone element - ".concat(e,"."));this._selectedTimezone=e,this._localStorage.saveTimezone(e)}},{key:"getTimezoneGroups",value:function(){var e=new Set;return moment.tz.names().forEach((function(t){e.add(t.split("/")[0])})),e}},{key:"getAllAvailableTimezones",value:function(){var e=moment.tz.names(),t=this.getTimezoneGroups(),n={};return t.forEach((function(e){n[e]=new I(e)})),e.forEach((function(e){var t=e.split("/"),r=t[0],o=t[1],i=t[2];!r||o||i||(n[r].selectable=!0),r&&o&&!i&&n[r].addRegion(o,!0),r&&o&&i&&n[r].addRegionCity(o,i,!1,!0)})),n}},{key:"_render",value:function(e){this._startTimestamp||(this._startTimestamp=e),e-this._startTimestamp>=1e3?(this._startTimestamp=e,this._updateClock()):this._frameId=requestAnimationFrame(this._render.bind(this))}},{key:"_updateClock",value:function(){if(this._frameId=requestAnimationFrame(this._render.bind(this)),this._selectedTimezone){var e=moment.tz(this._selectedTimezone.timezone);this._updateWidgetDateTime(e),this._widgetFace.setTimezone(this._selectedTimezone.timezoneName)}else{var t=moment();this._updateWidgetDateTime(t),this._widgetFace.setTimezone("Local")}}},{key:"_updateWidgetDateTime",value:function(e){var t=this.showSeconds?e.format(T.DefaultTimeFormat):e.format(T.NoSecondsTimeFormat),n=e.format(T.DefaultDateFormat);this._widgetFace.setTime(t),this._widgetFace.setDate(n)}},{key:"_findReconstructedTimezoneObject",value:function(e){var t=this.timezoneGroups;if(e instanceof x)if(e instanceof I){if(void 0!==t[e.name])return t[e.name]}else if(e instanceof j)for(var n=0,r=Object.values(t);n<r.length;n++)for(var o=r[n],i=0,c=Object.values(o.regions);i<c.length;i++){var a=c[i];if(a.name===e.name)return a}else for(var l=0,s=Object.values(t);l<s.length;l++)for(var u=s[l],d=0,h=Object.values(u.regions);d<h.length;d++)for(var m=h[d],f=0,p=Object.values(m.cities);f<p.length;f++){var v=p[f];if(v.name===e.name)return v}return null}},{key:"setTheme",value:function(t){void 0!==t&&e(t)===g.STRING&&[T.Themes.Dark,T.Themes.Light].includes(t)?(this.theme=t,this.container&&(this.wrapper.classList.remove(T.ThemeToCSS[T.Themes.Dark],T.ThemeToCSS[T.Themes.Light]),this.wrapper.classList.add(T.ThemeToCSS[t]))):this.theme=T.Themes.Light}},{key:"setDateShow",value:function(t){if(void 0!==t&&e(t)===g.BOOLEAN){if(this.showDate=t,this.container){var n=document.getElementById(T.DateElmId);t?n.classList.remove(T.CSS.Hidden):n.classList.add(T.CSS.Hidden)}}else this.showDate=!0}},{key:"setTimeSecondsShow",value:function(t){void 0!==t&&e(t)===g.BOOLEAN?this.showSeconds=t:this.showSeconds=!0}}]),n}();a(B,"Theme",{Dark:T.Themes.Dark,Light:T.Themes.Light});const P=B})(),r.default})()}));