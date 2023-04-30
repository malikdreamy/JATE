/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var n={402:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const c=i},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var d=e(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var u=r(n,o),s=0;s<a.length;s++){var l=e(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},61:(n,t,e)=>{var r=e(698).default;function o(){"use strict";n.exports=o=function(){return t},n.exports.__esModule=!0,n.exports.default=n.exports;var t={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(n,t,e){n[t]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{f({},"")}catch(n){f=function(n,t,e){return n[t]=e}}function d(n,t,e,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),c=new O(r||[]);return i(a,"_invoke",{value:S(n,e,c)}),a}function p(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=d;var h={};function v(){}function b(){}function y(){}var g={};f(g,u,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(T([])));x&&x!==e&&a.call(x,u)&&(g=x);var w=y.prototype=v.prototype=Object.create(g);function _(n){["next","throw","return"].forEach((function(t){f(n,t,(function(n){return this._invoke(t,n)}))}))}function k(n,t){function e(o,i,c,u){var s=p(n[o],n,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(n){e("next",n,c,u)}),(function(n){e("throw",n,c,u)})):t.resolve(f).then((function(n){l.value=n,c(l)}),(function(n){return e("throw",n,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(n,r){function a(){return new t((function(t,o){e(n,r,t,o)}))}return o=o?o.then(a,a):a()}})}function S(n,t,e){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=j(i,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=p(n,t,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function j(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,j(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=p(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[n.resultName]=a.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function E(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function O(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(L,this),this.reset(!0)}function T(n){if(n){var t=n[u];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,r=function t(){for(;++e<n.length;)if(a.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return b.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:b,configurable:!0}),b.displayName=f(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,f(n,l,"GeneratorFunction")),n.prototype=Object.create(w),n},t.awrap=function(n){return{__await:n}},_(k.prototype),f(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new k(d(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},_(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!n)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function e(e,r){return i.type="throw",i.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=n,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),h},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),E(e),h}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:T(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},698:n=>{function t(e){return n.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.__esModule=!0,n.exports.default=n.exports,t(e)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports},687:(n,t,e)=>{var r=e(61)();n.exports=r;try{regeneratorRuntime=r}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(a=o.key,i=void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a),"symbol"===n(i)?i:String(i)),o)}var a,i}function r(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function o(n,t,e,r,o,a,i){try{var c=n[a](i),u=c.value}catch(n){return void e(n)}c.done?t(u):Promise.resolve(u).then(r,o)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function c(n){o(i,r,a,c,u,"next",n)}function u(n){o(i,r,a,c,u,"throw",n)}c(void 0)}))}}var i=e(687),c=e.n(i),u=function(){return new Promise((function(n,t){var e=window.indexedDB.open("jate",1);e.onerror=function(n){console.error("Failed to open database",n),t(n)},e.onsuccess=function(t){console.log("Database opened successfully"),n(t.target.result)},e.onupgradeneeded=function(n){var t=n.target.result;t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}))},s=function(){var n=a(c().mark((function n(t){var e,r,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u();case 2:return e=n.sent,r=e.transaction("jate","readwrite"),o=r.objectStore("jate"),n.next=7,o.add({content:t});case 7:return n.next=9,r.complete;case 9:console.log("Data added to jate database:",t);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=a(c().mark((function n(){var t,e,r,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u();case 2:return t=n.sent,e=t.transaction("jate","readonly"),r=e.objectStore("jate"),n.next=7,r.getAll();case 7:return o=n.sent,n.next=10,e.complete;case 10:return console.log("Data retrieved from jate database:",o),n.abrupt("return",o);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();u();var f=r((function n(){var t=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),console.log(e),l().then((function(n){null!=e?t.editor.setValue(e):t.editor.setValue("\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",t.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),s(localStorage.getItem("content"))}))})),d=e(379),p=e.n(d),h=e(795),v=e.n(h),b=e(569),y=e.n(b),g=e(565),m=e.n(g),x=e(216),w=e.n(x),_=e(589),k=e.n(_),S=e(402),j={};j.styleTagTransform=k(),j.setAttributes=m(),j.insert=y().bind(null,"head"),j.domAPI=v(),j.insertStyleElement=w(),p()(S.Z,j),S.Z&&S.Z.locals&&S.Z.locals;var L,E=document.querySelector("#main");E.innerHTML="",void 0===new f&&((L=document.createElement("div")).classList.add("spinner"),L.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',E.appendChild(L)),"serviceWorker"in navigator?(console.log("service worker supported"),window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(n){return console.log("Service Worker: Registered")})).catch((function(n){return console.log("Service Worker: Error ".concat(n))}))}))):console.error("Service workers are not supported in this browser.")})()})();