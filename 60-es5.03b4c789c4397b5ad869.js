!function(){function e(t,n,r){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(t,n,r||t)}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var s=i(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{fOOd:function(n,o,u){"use strict";u.r(o),u.d(o,"HomePageModule",function(){return ht});var c=u("ofXK"),l=u("fXoL"),f=u("LRne"),p=u("HDdC"),v=u("bOdf"),b=u("pLZG"),y=u("lJxs"),m=function e(){d(this,e)},g=function e(){d(this,e)},w=function(){function e(t){var n=this;d(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){n.headers=new Map,t.split("\n").forEach(function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),o=r.toLowerCase(),i=e.slice(t+1).trim();n.maybeSetNormalizedName(r,o),n.headers.has(o)?n.headers.get(o).push(i):n.headers.set(o,[i])}})}:function(){n.headers=new Map,Object.keys(t).forEach(function(e){var r=t[e],o=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(n.headers.set(o,r),n.maybeSetNormalizedName(e,o))})}:this.headers=new Map}return h(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))})}},{key:"clone",value:function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,a(n)),this.headers.set(t,r);break;case"d":var o=e.value;if(o){var i=this.headers.get(t);if(!i)return;0===(i=i.filter(function(e){return-1===o.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(n){return e(t.normalizedNames.get(n),t.headers.get(n))})}}]),e}(),k=function(){function e(){d(this,e)}return h(e,[{key:"encodeKey",value:function(e){return O(e)}},{key:"encodeValue",value:function(e){return O(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function O(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var E=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(d(this,e),this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new k,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){var n=new Map;return e.length>0&&e.split("&").forEach(function(e){var r=e.indexOf("="),o=s(-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],2),i=o[0],a=o[1],u=n.get(i)||[];u.push(a),n.set(i,u)}),n}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(function(e){var r=n.fromObject[e];t.map.set(e,Array.isArray(r)?r:[r])})):this.map=null}return h(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map(function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return n+"="+e.encoder.encodeValue(t)}).join("&")}).filter(function(e){return""!==e}).join("&")}},{key:"clone",value:function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],o=r.indexOf(t.value);-1!==o&&r.splice(o,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}}),this.cloneFrom=this.updates=null)}}]),e}();function x(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function T(e){return"undefined"!=typeof Blob&&e instanceof Blob}function j(e){return"undefined"!=typeof FormData&&e instanceof FormData}var C=function(){function e(t,n,r,o){var i;if(d(this,e),this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.params&&(this.params=i.params)),this.headers||(this.headers=new w),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{var a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new E,this.urlWithParams=n}return h(e,[{key:"serializeBody",value:function(){return null===this.body?null:x(this.body)||T(this.body)||j(this.body)||"string"==typeof this.body?this.body:this.body instanceof E?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body||j(this.body)?null:T(this.body)?this.body.type||null:x(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof E?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,s=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,c=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce(function(e,n){return e.set(n,t.setHeaders[n])},u)),t.setParams&&(c=Object.keys(t.setParams).reduce(function(e,n){return e.set(n,t.setParams[n])},c)),new e(n,r,i,{params:c,headers:u,reportProgress:a,responseType:o,withCredentials:s})}}]),e}(),N=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({}),S=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";d(this,e),this.headers=t.headers||new w,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300},I=function(e){t(o,e);var n=r(o);function o(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d(this,o),(e=n.call(this,t)).type=N.ResponseHeader,e}return h(o,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new o({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),o}(S),A=function(e){t(o,e);var n=r(o);function o(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d(this,o),(e=n.call(this,t)).type=N.Response,e.body=void 0!==t.body?t.body:null,e}return h(o,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new o({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),o}(S),_=function(e){t(o,e);var n=r(o);function o(e){var t;return d(this,o),(t=n.call(this,e,0,"Unknown Error")).name="HttpErrorResponse",t.ok=!1,t.message=t.status>=200&&t.status<300?"Http failure during parsing for ".concat(e.url||"(unknown url)"):"Http failure response for ".concat(e.url||"(unknown url)",": ").concat(e.status," ").concat(e.statusText),t.error=e.error||null,t}return o}(S);function R(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var P,M,z,L,H,D,F,U,$,B,V=((P=function(){function e(t){d(this,e),this.handler=t}return h(e,[{key:"request",value:function(e,t){var n,r,o,i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e instanceof C?n=e:(r=s.headers instanceof w?s.headers:new w(s.headers),s.params&&(o=s.params instanceof E?s.params:new E({fromObject:s.params})),n=new C(e,t,void 0!==s.body?s.body:null,{headers:r,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials}));var a=Object(f.a)(n).pipe(Object(v.a)(function(e){return i.handler.handle(e)}));if(e instanceof C||"events"===s.observe)return a;var u=a.pipe(Object(b.a)(function(e){return e instanceof A}));switch(s.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return u.pipe(Object(y.a)(function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return u.pipe(Object(y.a)(function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return u.pipe(Object(y.a)(function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return u.pipe(Object(y.a)(function(e){return e.body}))}case"response":return u;default:throw new Error("Unreachable: unhandled observe type ".concat(s.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new E).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,R(n,t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,R(n,t))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,R(n,t))}}]),e}()).\u0275fac=function(e){return new(e||P)(l.Rb(m))},P.\u0275prov=l.Gb({token:P,factory:P.\u0275fac}),P),q=function(){function e(t,n){d(this,e),this.next=t,this.interceptor=n}return h(e,[{key:"handle",value:function(e){return this.interceptor.intercept(e,this.next)}}]),e}(),K=new l.s("HTTP_INTERCEPTORS"),X=((M=function(){function e(){d(this,e)}return h(e,[{key:"intercept",value:function(e,t){return t.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||M)},M.\u0275prov=l.Gb({token:M,factory:M.\u0275fac}),M),G=/^\)\]\}',?\n/,W=function e(){d(this,e)},J=((L=function(){function e(){d(this,e)}return h(e,[{key:"build",value:function(){return new XMLHttpRequest}}]),e}()).\u0275fac=function(e){return new(e||L)},L.\u0275prov=l.Gb({token:L,factory:L.\u0275fac}),L),Y=((z=function(){function e(t){d(this,e),this.xhrFactory=t}return h(e,[{key:"handle",value:function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new p.a(function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach(function(e,t){return r.setRequestHeader(e,t.join(","))}),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&r.setRequestHeader("Content-Type",o)}if(e.responseType){var i=e.responseType.toLowerCase();r.responseType="json"!==i?i:"text"}var s=e.serializeBody(),a=null,u=function(){if(null!==a)return a;var t=1223===r.status?204:r.status,n=r.statusText||"OK",o=new w(r.getAllResponseHeaders()),i=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return a=new I({headers:o,status:t,statusText:n,url:i})},c=function(){var t=u(),o=t.headers,i=t.status,s=t.statusText,a=t.url,c=null;204!==i&&(c=void 0===r.response?r.responseText:r.response),0===i&&(i=c?200:0);var l=i>=200&&i<300;if("json"===e.responseType&&"string"==typeof c){var h=c;c=c.replace(G,"");try{c=""!==c?JSON.parse(c):null}catch(d){c=h,l&&(l=!1,c={error:d,text:c})}}l?(n.next(new A({body:c,headers:o,status:i,statusText:s,url:a||void 0})),n.complete()):n.error(new _({error:c,headers:o,status:i,statusText:s,url:a||void 0}))},l=function(e){var t=u().url,o=new _({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error",url:t||void 0});n.error(o)},h=!1,d=function(t){h||(n.next(u()),h=!0);var o={type:N.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&r.responseText&&(o.partialText=r.responseText),n.next(o)},f=function(e){var t={type:N.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",c),r.addEventListener("error",l),e.reportProgress&&(r.addEventListener("progress",d),null!==s&&r.upload&&r.upload.addEventListener("progress",f)),r.send(s),n.next({type:N.Sent}),function(){r.removeEventListener("error",l),r.removeEventListener("load",c),e.reportProgress&&(r.removeEventListener("progress",d),null!==s&&r.upload&&r.upload.removeEventListener("progress",f)),r.readyState!==r.DONE&&r.abort()}})}}]),e}()).\u0275fac=function(e){return new(e||z)(l.Rb(W))},z.\u0275prov=l.Gb({token:z,factory:z.\u0275fac}),z),Q=new l.s("XSRF_COOKIE_NAME"),Z=new l.s("XSRF_HEADER_NAME"),ee=function e(){d(this,e)},te=(($=function(){function e(t,n,r){d(this,e),this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return h(e,[{key:"getToken",value:function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(c.r)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}]),e}()).\u0275fac=function(e){return new(e||$)(l.Rb(c.d),l.Rb(l.D),l.Rb(Q))},$.\u0275prov=l.Gb({token:$,factory:$.\u0275fac}),$),ne=((U=function(){function e(t,n){d(this,e),this.tokenService=t,this.headerName=n}return h(e,[{key:"intercept",value:function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||U)(l.Rb(ee),l.Rb(Z))},U.\u0275prov=l.Gb({token:U,factory:U.\u0275fac}),U),re=((F=function(){function e(t,n){d(this,e),this.backend=t,this.injector=n,this.chain=null}return h(e,[{key:"handle",value:function(e){if(null===this.chain){var t=this.injector.get(K,[]);this.chain=t.reduceRight(function(e,t){return new q(e,t)},this.backend)}return this.chain.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||F)(l.Rb(g),l.Rb(l.t))},F.\u0275prov=l.Gb({token:F,factory:F.\u0275fac}),F),oe=((D=function(){function e(){d(this,e)}return h(e,null,[{key:"disable",value:function(){return{ngModule:e,providers:[{provide:ne,useClass:X}]}}},{key:"withOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[t.cookieName?{provide:Q,useValue:t.cookieName}:[],t.headerName?{provide:Z,useValue:t.headerName}:[]]}}}]),e}()).\u0275mod=l.Ib({type:D}),D.\u0275inj=l.Hb({factory:function(e){return new(e||D)},providers:[ne,{provide:K,useExisting:ne,multi:!0},{provide:ee,useClass:te},{provide:Q,useValue:"XSRF-TOKEN"},{provide:Z,useValue:"X-XSRF-TOKEN"}]}),D),ie=((H=function e(){d(this,e)}).\u0275mod=l.Ib({type:H}),H.\u0275inj=l.Hb({factory:function(e){return new(e||H)},providers:[V,{provide:m,useClass:re},Y,{provide:g,useExisting:Y},J,{provide:W,useExisting:J}],imports:[[oe.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),H),se=u("3Pt+"),ae=u("TEn/"),ue=((B=function e(){d(this,e)}).\u0275mod=l.Ib({type:B}),B.\u0275inj=l.Hb({factory:function(e){return new(e||B)},imports:[[c.c,se.a,se.d,ae.v,ie],c.c,se.a,se.d,ae.v]}),B),ce=u("tyNb"),le=u("mrSG"),he=u("2Vo4"),de=u("XNiG"),fe=u("itXk"),pe=u("/uUt"),ve=u("eIep"),be=(u("Cfvw"),u("7o/Q"));function ye(){return function(e){return e.pipe(Object(b.a)(function(e){return null!=e}))}}var me=u("zx2A"),ge=function(){function e(t){d(this,e),this.notifier=t}return h(e,[{key:"call",value:function(e,t){var n=new we(e),r=Object(me.c)(this.notifier,new me.a(n));return r&&!n.seenValue?(n.add(r),t.subscribe(n)):n}}]),e}(),we=function(e){t(o,e);var n=r(o);function o(e){var t;return d(this,o),(t=n.call(this,e)).seenValue=!1,t}return h(o,[{key:"notifyNext",value:function(){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),o}(me.b),ke=l.ab;function Oe(e){return"function"==typeof e}var Ee=Symbol("__destroy"),xe=Symbol("__decoratorApplied");function Te(e){return"string"==typeof e?Symbol("__destroy__".concat(e)):Ee}function je(e,t){e[t]||(e[t]=new de.a)}function Ce(e,t){e[t]&&(e[t].next(),e[t].complete(),e[t]=null)}function Ne(e){e&&Oe(e.unsubscribe)&&e.unsubscribe()}function Se(e,t){return function(){var n,r;if(e&&e.call(this),Ce(this,Te()),t.arrayName)return r=this[t.arrayName],void(Array.isArray(r)&&r.forEach(Ne));if(t.checkProperties)for(var o in this)(null===(n=t.blackList)||void 0===n?void 0:n.includes(o))||Ne(this[o])}}function Ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){t[ke]?function(e,t){var n=e.\u0275pipe;n.onDestroy=Se(n.onDestroy,t)}(t,e):function(e,t){e.prototype.ngOnDestroy=Se(e.prototype.ngOnDestroy,t)}(t,e),function(e){e.prototype[xe]=!0}(t)}}var Ae,_e,Re=u("NXyV"),Pe=u("JIr8"),Me=function(n){t(s,n);var o=r(s);function s(e,t){var n;return d(this,s),(n=o.call(this,e,t)).scheduler=e,n.work=t,n}return h(s,[{key:"schedule",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n>0?e(i(s.prototype),"schedule",this).call(this,t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)}},{key:"execute",value:function(t,n){return n>0||this.closed?e(i(s.prototype),"execute",this).call(this,t,n):this._execute(t,n)}},{key:"requestAsyncId",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==r&&r>0||null===r&&this.delay>0?e(i(s.prototype),"requestAsyncId",this).call(this,t,n,r):t.flush(this)}}]),s}(u("3N8a").a),ze=new(function(e){t(o,e);var n=r(o);function o(){return d(this,o),n.apply(this,arguments)}return o}(u("IjjT").a))(Me),Le=u("quSY"),He=u("WMd4"),De=function(e){t(o,e);var n=r(o);function o(e,t){var r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return d(this,o),(r=n.call(this,e)).scheduler=t,r.delay=i,r}return h(o,[{key:"scheduleMessage",value:function(e){this.destination.add(this.scheduler.schedule(o.dispatch,this.delay,new Fe(e,this.destination)))}},{key:"_next",value:function(e){this.scheduleMessage(He.a.createNext(e))}},{key:"_error",value:function(e){this.scheduleMessage(He.a.createError(e)),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleMessage(He.a.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(e){var t=e.notification,n=e.destination;t.observe(n),this.unsubscribe()}}]),o}(be.a),Fe=function e(t,n){d(this,e),this.notification=t,this.destination=n},Ue=u("9ppp"),$e=u("Ylt2"),Be=function(n){t(s,n);var o=r(s);function s(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,r=arguments.length>2?arguments[2]:void 0;return d(this,s),(e=o.call(this)).scheduler=r,e._events=[],e._infiniteTimeWindow=!1,e._bufferSize=t<1?1:t,e._windowTime=n<1?1:n,n===Number.POSITIVE_INFINITY?(e._infiniteTimeWindow=!0,e.next=e.nextInfiniteTimeWindow):e.next=e.nextTimeWindow,e}return h(s,[{key:"nextInfiniteTimeWindow",value:function(t){if(!this.isStopped){var n=this._events;n.push(t),n.length>this._bufferSize&&n.shift()}e(i(s.prototype),"next",this).call(this,t)}},{key:"nextTimeWindow",value:function(t){this.isStopped||(this._events.push(new Ve(this._getNow(),t)),this._trimBufferThenGetEvents()),e(i(s.prototype),"next",this).call(this,t)}},{key:"_subscribe",value:function(e){var t,n=this._infiniteTimeWindow,r=n?this._events:this._trimBufferThenGetEvents(),o=this.scheduler,i=r.length;if(this.closed)throw new Ue.a;if(this.isStopped||this.hasError?t=Le.a.EMPTY:(this.observers.push(e),t=new $e.a(this,e)),o&&e.add(e=new De(e,o)),n)for(var s=0;s<i&&!e.closed;s++)e.next(r[s]);else for(var a=0;a<i&&!e.closed;a++)e.next(r[a].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),t}},{key:"_getNow",value:function(){return(this.scheduler||ze).now()}},{key:"_trimBufferThenGetEvents",value:function(){for(var e=this._getNow(),t=this._bufferSize,n=this._windowTime,r=this._events,o=r.length,i=0;i<o&&!(e-r[i].time<n);)i++;return o>t&&(i=Math.max(i,o-t)),i>0&&r.splice(0,i),r}}]),s}(de.a),Ve=function e(t,n){d(this,e),this.time=t,this.value=n},qe=u("vkgz"),Ke=["video"],Xe=((Ae=function(){function e(t,n){var r,o,i,a,u=this;d(this,e),this.modalController=t,this.alertController=n,this._videoElement$=new he.a(void 0),this.videoElement$=this._videoElement$.pipe(ye(),Object(pe.a)()),this.mediaStream$=Object(Re.a)(function(){return navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})}).pipe(Object(Pe.a)(function(e){return Object(le.a)(u,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.presentErrorDialog(e);case 2:return t.next=4,this.dismiss();case 4:case"end":return t.stop()}},t,this)}))}),(a=(i={bufferSize:1,refCount:!0})&&"object"==typeof i?i:{bufferSize:i,windowTime:void 0,refCount:!1,scheduler:void 0},function(e){return e.lift(function(e){var t,n,r=e.bufferSize,o=void 0===r?Number.POSITIVE_INFINITY:r,i=e.windowTime,s=void 0===i?Number.POSITIVE_INFINITY:i,a=e.refCount,u=e.scheduler,c=0,l=!1,h=!1;return function(e){var r;c++,!t||l?(l=!1,t=new Be(o,s,u),r=t.subscribe(this),n=e.subscribe({next:function(e){t.next(e)},error:function(e){l=!0,t.error(e)},complete:function(){h=!0,n=void 0,t.complete()}})):r=t.subscribe(this),this.add(function(){c--,r.unsubscribe(),n&&!h&&a&&0===c&&(n.unsubscribe(),n=void 0,t=void 0)})}}(a))})),this.cameraPreview$=Object(fe.a)([this.videoElement$,this.mediaStream$.pipe(ye())]).pipe(Object(qe.a)(function(e){var t=s(e,2),n=t[0],r=t[1];n.srcObject=r})),this.cameraPreview$.pipe((r=this,function(e){var t,n=Te(o);return function(e){if(!(xe in e.constructor.prototype))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}(r),je(r,n),e.pipe((t=r[n],function(e){return e.lift(new ge(t))}))})).subscribe()}return h(e,[{key:"videoElement",set:function(e){this._videoElement$.next(e.nativeElement)}},{key:"dismiss",value:function(){return Object(le.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.modalController.dismiss());case 1:case"end":return e.stop()}},e,this)}))}},{key:"presentErrorDialog",value:function(e){return Object(le.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"Oops!",message:e instanceof Error?e.message:JSON.stringify(e),buttons:[{text:"ok"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"ngOnDestroy",value:function(){this.mediaStream$.pipe(Object(qe.a)(function(e){return null==e?void 0:e.getTracks().forEach(function(e){return e.stop()})})).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||Ae)(l.Kb(ae.x),l.Kb(ae.a))},Ae.\u0275cmp=l.Eb({type:Ae,selectors:[["app-camera"]],viewQuery:function(e,t){var n;1&e&&l.kc(Ke,1),2&e&&l.ec(n=l.Wb())&&(t.videoElement=n.first)},decls:6,vars:0,consts:[["fill","clear",1,"dismiss","ion-margin",3,"click"],["slot","icon-only","name","close-outline","color","light"],["fill","clear",1,"capture","ion-margin-bottom"],["slot","icon-only","name","radio-button-on-outline","color","light"],["playsinline","","autoplay",""],["video",""]],template:function(e,t){1&e&&(l.Nb(0,"ion-button",0),l.Vb("click",function(){return t.dismiss()}),l.Lb(1,"ion-icon",1),l.Mb(),l.Nb(2,"ion-button",2),l.Lb(3,"ion-icon",3),l.Mb(),l.Lb(4,"video",4,5))},directives:[ae.d,ae.l],styles:["[_nghost-%COMP%]{display:contents;position:relative}video[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}ion-button.dismiss[_ngcontent-%COMP%]{width:48px;height:48px}ion-button.capture[_ngcontent-%COMP%], ion-button.dismiss[_ngcontent-%COMP%]{position:absolute;z-index:1;--border-radius:50%;--padding-end:0;--padding-start:0;--background:rgba(0,0,0,0.4)}ion-button.capture[_ngcontent-%COMP%]{bottom:0;left:50%;transform:translate(-50%);height:72px;width:72px}ion-button.capture[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:64px}"]}),Ae=Object(le.b)([Ie()],Ae)),Ge=u("xgIS"),We=u("JX91"),Je=((_e=function(){function e(){d(this,e),this.prefersDark$=Object(Ge.a)(matchMedia("(prefers-color-scheme: dark)"),"change").pipe(Object(y.a)(function(e){return e.matches}),Object(We.a)(matchMedia("(prefers-color-scheme: dark)").matches))}return h(e,[{key:"onToggleDarkTheme",value:function(e){document.body.classList.toggle("dark",e.detail.checked)}}]),e}()).\u0275fac=function(e){return new(e||_e)},_e.\u0275cmp=l.Eb({type:_e,selectors:[["app-settings"]],decls:6,vars:3,consts:[["lines","none"],[3,"checked","ionChange"]],template:function(e,t){1&e&&(l.Nb(0,"ion-list",0),l.Nb(1,"ion-item"),l.Nb(2,"ion-label"),l.jc(3,"Dark Theme"),l.Mb(),l.Nb(4,"ion-toggle",1),l.Vb("ionChange",function(e){return t.onToggleDarkTheme(e)}),l.Yb(5,"async"),l.Mb(),l.Mb(),l.Mb()),2&e&&(l.Ab(4),l.cc("checked",l.Zb(5,1,t.prefersDark$)))},directives:[ae.p,ae.n,ae.o,ae.t,ae.b],pipes:[c.b],styles:[""]}),_e);function Ye(e,t){1&e&&l.Lb(0,"ion-icon",3)}function Qe(e,t){if(1&e){var n=l.Ob();l.Nb(0,"ion-img",4),l.Vb("ionError",function(){return l.fc(n),l.Xb().onImageError()}),l.Yb(1,"async"),l.Mb()}if(2&e){var r=l.Xb();l.Bb("src",l.Zb(1,1,r.src$))}}function Ze(e,t){1&e&&l.ac(0,0,["*ngIf","!isImageError"])}var et,tt=["*"],nt=((et=function(){function e(){var t=this;d(this,e),this._src$=new he.a(void 0),this.src$=this._src$.pipe(Object(We.a)(rt),ye(),Object(pe.a)(),Object(qe.a)(function(){return t.isImageError=!1})),this.isImageError=!1}return h(e,[{key:"src",set:function(e){this._src$.next(e)}},{key:"onImageError",value:function(){this.isImageError=!0}}]),e}()).\u0275fac=function(e){return new(e||et)},et.\u0275cmp=l.Eb({type:et,selectors:[["app-image"]],inputs:{src:"src"},ngContentSelectors:tt,decls:3,vars:3,consts:[["src","/assets/icons/broken-image.svg","color","danger","size","large",4,"ngIf"],[3,"ionError",4,"ngIf"],[4,"ngIf"],["src","/assets/icons/broken-image.svg","color","danger","size","large"],[3,"ionError"]],template:function(e,t){1&e&&(l.bc(),l.ic(0,Ye,1,0,"ion-icon",0),l.ic(1,Qe,2,3,"ion-img",1),l.ic(2,Ze,1,0,"ng-content",2)),2&e&&(l.cc("ngIf",t.isImageError),l.Ab(1),l.cc("ngIf",!t.isImageError),l.Ab(1),l.cc("ngIf",!t.isImageError))},directives:[c.j,ae.l,ae.m],pipes:[c.b],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;-o-object-fit:cover;object-fit:cover;position:relative}ion-img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit;-webkit-animation:loading 2.5s ease-in-out infinite alternate;animation:loading 2.5s ease-in-out infinite alternate}@-webkit-keyframes loading{0%{background-color:var(--ion-color-light-shade)}to{background-color:var(--ion-color-light)}}@keyframes loading{0%{background-color:var(--ion-color-light-shade)}to{background-color:var(--ion-color-light)}}@media (prefers-color-scheme:dark){@-webkit-keyframes loading{0%{background-color:var(--ion-color-step-150)}to{background-color:var(--ion-color-step-100)}}@keyframes loading{0%{background-color:var(--ion-color-step-150)}to{background-color:var(--ion-color-step-100)}}}ion-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%)}"]}),et),rt="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function ot(e,t){if(1&e&&(l.Nb(0,"ion-col",8,9),l.Nb(2,"app-image",10),l.Lb(3,"ion-ripple-effect"),l.Mb(),l.Mb()),2&e){var n=t.index;l.Ab(2),l.cc("src","https://picsum.photos/id/"+2*n+"/600/700")}}var it,st,at,ut=function(){return[]},ct=[{path:"",component:(it=function(){function e(t,n){var r=this;d(this,e),this.popoverController=t,this.modalController=n,this._ionContent$=new he.a(void 0),this.ionContent$=this._ionContent$.pipe(ye(),Object(pe.a)()),this._scrollEvent$=new de.a,this.scrollEvent$=this._scrollEvent$.pipe(Object(pe.a)()),this.noFooterBorder$=Object(fe.a)([this.ionContent$,this.scrollEvent$]).pipe(Object(ve.a)(function(e){var t=s(e,1)[0];return r.detectBottom(t)}))}return h(e,[{key:"ionContent",set:function(e){this._ionContent$.next(e)}},{key:"onScroll",value:function(e){this._scrollEvent$.next(e)}},{key:"detectBottom",value:function(e){return Object(le.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getScrollElement();case 2:return n=t.sent,t.abrupt("return",n.scrollTop===n.scrollHeight-n.clientHeight);case 4:case"end":return t.stop()}},t)}))}},{key:"presentSettings",value:function(e){return Object(le.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverController.create({component:Je,event:e});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}))}},{key:"presentCamera",value:function(){return Object(le.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:Xe});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}))}}]),e}(),it.\u0275fac=function(e){return new(e||it)(l.Kb(ae.z),l.Kb(ae.x))},it.\u0275cmp=l.Eb({type:it,selectors:[["app-home"]],viewQuery:function(e,t){var n;1&e&&l.kc(ae.g,1),2&e&&l.ec(n=l.Wb())&&(t.ionContent=n.first)},decls:13,vars:6,consts:[["scrollEvents","",3,"ionScroll"],["size","6","size-sm","4","size-md","3","size-lg","2",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","center","slot","fixed","edge",""],[3,"click"],["name","camera-outline"],["slot","primary"],["slot","secondary",3,"click"],["slot","icon-only","name","settings-outline"],["size","6","size-sm","4","size-md","3","size-lg","2"],["col",""],[1,"ion-activatable",3,"src"]],template:function(e,t){1&e&&(l.Nb(0,"ion-content",0),l.Vb("ionScroll",function(e){return t.onScroll(e)}),l.Nb(1,"ion-grid"),l.Nb(2,"ion-row"),l.ic(3,ot,4,1,"ion-col",1),l.Mb(),l.Mb(),l.Nb(4,"ion-fab",2),l.Nb(5,"ion-fab-button",3),l.Vb("click",function(){return t.presentCamera()}),l.Lb(6,"ion-icon",4),l.Mb(),l.Mb(),l.Mb(),l.Nb(7,"ion-footer"),l.Yb(8,"async"),l.Nb(9,"ion-toolbar"),l.Nb(10,"ion-buttons",5),l.Nb(11,"ion-button",6),l.Vb("click",function(e){return t.presentSettings(e)}),l.Lb(12,"ion-icon",7),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&e&&(l.Ab(3),l.cc("ngForOf",l.dc(5,ut).constructor(40)),l.Ab(4),l.Cb("ion-no-border",l.Zb(8,3,t.noFooterBorder$)))},directives:[ae.g,ae.k,ae.s,c.i,ae.h,ae.i,ae.l,ae.j,ae.u,ae.e,ae.d,ae.f,nt,ae.q],pipes:[c.b],styles:["app-image[_ngcontent-%COMP%]{position:relative;height:150px;border-radius:4px;box-shadow:0 2px 8px 0 rgba(99,99,99,.2)}"]}),it)}],lt=((at=function e(){d(this,e)}).\u0275mod=l.Ib({type:at}),at.\u0275inj=l.Hb({factory:function(e){return new(e||at)},imports:[[ce.i.forChild(ct)],ce.i]}),at),ht=((st=function e(){d(this,e)}).\u0275mod=l.Ib({type:st}),st.\u0275inj=l.Hb({factory:function(e){return new(e||st)},imports:[[ue,lt]]}),st)}}])}();