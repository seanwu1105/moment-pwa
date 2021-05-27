!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,i,o=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(u){a=!0,i=u}finally{try{c||null==n.return||n.return()}finally{if(a)throw i}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var c=o(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QDOj:function(t,i,o){"use strict";o.r(i),o.d(i,"CameraPageModule",function(){return ne});var a,s=o("PCNd"),f=o("tyNb"),l=o("mrSG"),b=o("VfN6"),p=o("jtHE"),d=o("r0o6"),v=o("bOdf"),h=o("JIr8"),m=o("KJy6"),g=o("fXoL"),O=o("O/LV"),j=o("BJdS"),y=o("LRne"),w=o("z6cu"),$=o("NXyV"),x=o("lJxs"),k=o("UXun"),C=o("/uUt"),P=o("vkgz"),S=o("CqXF"),_=o("SxV6"),E=o("eIep"),I=o("q7zd"),M=o("JX91"),R=o("7o/Q"),U=function(){function e(){c(this,e)}return u(e,[{key:"call",value:function(e,t){return t.subscribe(new V(e))}}]),e}(),V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(i,e);var t=r(i);function i(e){var n;return c(this,i),(n=t.call(this,e)).hasPrev=!1,n}return u(i,[{key:"_next",value:function(e){var t;this.hasPrev?t=[this.prev,e]:this.hasPrev=!0,this.prev=e,t&&this.destination.next(t)}}]),i}(R.a),D=((a=function(){function t(){c(this,t),this.videoStreamSelector=new z,this.videoDevices$=this.videoStreamSelector.devices$,this.mediaStream$=this.videoStreamSelector.stream$,this.imageCapture$=this.mediaStream$.pipe(Object(x.a)(function(e){return e.getVideoTracks()[0]}),Object(m.d)(),Object(x.a)(function(e){return new ImageCapture(e)}),Object(k.a)({bufferSize:1,refCount:!0})),this._capturedImageUrl$=new p.a(1),this.capturedImageUrl$=this._capturedImageUrl$.pipe(Object(C.a)(),function(t){return t.pipe(Object(M.a)(void 0),function(e){return e.lift(new U)},Object(P.a)(function(t){var n=e(t,1)[0];n&&URL.revokeObjectURL(n)}),Object(I.a)(t))})}return u(t,[{key:"connectPreview$",value:function(e){return this.mediaStream$.pipe(Object(P.a)(function(t){return e.srcObject=t}),Object(S.a)(e))}},{key:"capture$",value:function(){var e=this;return this.imageCapture$.pipe(Object(_.a)(),Object(E.a)(function(e){return e.takePhoto()}),Object(P.a)(function(t){e._capturedImageUrl$.next(URL.createObjectURL(t))}),Object(h.a)(function(e){return e instanceof DOMException&&("InvalidStateError"===e.name||"UnknownError"===e.name||"OperationError"===e.name)?Object(y.a)(void 0):Object(w.a)(e)}),Object(m.d)())}},{key:"nextCamera$",value:function(e){var t=this;return this.videoDevices$.pipe(Object(_.a)(),Object(v.a)(function(n){return Object(d.a)(function(){return n.length>1},Object($.a)(function(){return Object(l.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.srcObject=null);case 1:case"end":return t.stop()}},t)}))}).pipe(Object(I.a)(t.videoStreamSelector.next$())))}))}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=g.Mb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),z=function(){function e(){var t=this;c(this,e),this.devices$=Object($.a)(function(){return navigator.mediaDevices.enumerateDevices()}).pipe(Object(x.a)(function(e){return e.filter(function(e){return"videoinput"===e.kind})}),Object(k.a)({bufferSize:1,refCount:!0})),this.currentVideoDeviceIndex=0,this._stream$=new p.a(1),this.stream$=this.devices$.pipe(Object(_.a)(),Object(v.a)(function(e){return t.getCurrentVideoMedia(e)}),Object(P.a)(function(e){return t._stream$.next(e)}),Object(I.a)(this._stream$),Object(k.a)({bufferSize:1,refCount:!0}),Object(m.d)(),Object(m.c)(function(e){return function(e){return e.getVideoTracks().forEach(function(e){return e.stop()}),e}(e)}),Object(k.a)({bufferSize:1,refCount:!0}))}return u(e,[{key:"next$",value:function(){var e=this;return this.stream$.pipe(Object(_.a)(),Object(P.a)(function(e){return e.getVideoTracks().forEach(function(e){return e.stop()})}),Object(I.a)(this.devices$),Object(P.a)(function(){return e.currentVideoDeviceIndex++}),Object(v.a)(function(t){return e.getCurrentVideoMedia(t)}),Object(P.a)(function(t){return e._stream$.next(t)}))}},{key:"getCurrentVideoMedia",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",navigator.mediaDevices.getUserMedia({video:{deviceId:e[this.currentVideoDeviceIndex%e.length].deviceId}}));case 1:case"end":return t.stop()}},t,this)}))}}]),e}(),L=o("zXXW"),A=o("ofXK"),F=o("TEn/"),T=o("9A8T"),X=o("/T4s"),J=o("QPBi"),N=["video"];function Q(e,t){if(1&e){var n=g.Wb();g.Vb(0,"ion-button",9),g.dc("click",function(){return g.rc(n),g.fc(2).reverseCamera()}),g.Rb(1,"ion-icon",10),g.Ub()}}var B=function(e){return["/image-viewer",e]};function K(e,t){if(1&e&&(g.Vb(0,"div",11),g.Rb(1,"app-image",12),g.Ub()),2&e){var n=t.ngrxLet;g.Fb(1),g.lc("routerLink",g.nc(2,B,n))("src",n)}}function q(e,t){if(1&e){var n=g.Wb();g.Tb(0),g.Vb(1,"ion-button",3),g.dc("click",function(){return g.rc(n),g.fc().capture()}),g.Rb(2,"ion-icon",4),g.Ub(),g.yc(3,Q,2,0,"ion-button",5),g.gc(4,"ngrxPush"),g.yc(5,K,2,4,"div",6),g.Rb(6,"video",7,8),g.Sb()}if(2&e){var r,i=g.fc();g.Fb(3),g.lc("ngIf",(null==(r=g.hc(4,2,i.videoDevices$))?null:r.length)>1),g.Fb(2),g.lc("ngrxLet",i.capturedImageUrl$)}}function W(e,t){if(1&e&&(g.Vb(0,"div",15),g.Rb(1,"ion-img",16),g.Vb(2,"h3"),g.Ac(3),g.Ub(),g.Vb(4,"p"),g.Ac(5),g.Ub(),g.Ub()),2&e){var n=t.$implicit;g.Fb(3),g.Bc(n("noCameraFound")),g.Fb(2),g.Bc(n("message.noCameraFound"))}}function H(e,t){1&e&&(g.Vb(0,"div",13),g.yc(1,W,6,2,"div",14),g.Ub())}var G,Y,Z,ee=[{path:"",component:(G=function(){function e(t,n,r){c(this,e),this.dialogsService=t,this.momentRepository=n,this.cameraService=r,this.videoDevices$=this.cameraService.videoDevices$,this.videoElement$=new p.a(1),this.capturedImageUrl$=this.cameraService.capturedImageUrl$,this.startPreview()}return u(e,[{key:"videoElement",set:function(e){e&&this.videoElement$.next(e.nativeElement)}},{key:"startPreview",value:function(){var e=this;return this.videoElement$.pipe(Object(v.a)(function(t){return e.cameraService.connectPreview$(t)}),Object(h.a)(function(t){return e.presentError$(t)}),Object(b.b)(this)).subscribe()}},{key:"capture",value:function(){var e=this;return this.cameraService.capture$().pipe(Object(m.b)(function(t){return e.momentRepository.add$(t)}),Object(h.a)(function(t){return e.presentError$(t)}),Object(b.b)(this)).subscribe()}},{key:"reverseCamera",value:function(){var e=this;return this.videoElement$.pipe(Object(v.a)(function(t){return e.cameraService.nextCamera$(t)}),Object(h.a)(function(t){return e.presentError$(t)}),Object(b.b)(this)).subscribe()}},{key:"presentError$",value:function(e){return Object(d.a)(function(){return e instanceof DOMException&&"NotAllowedError"===e.name},this.dialogsService.presentAlert$({headerKey:"error.".concat(e.name),messageKey:"message.cameraPermissionDenied"}),this.dialogsService.presentError$(e))}}]),e}(),G.\u0275fac=function(e){return new(e||G)(g.Qb(O.a),g.Qb(j.a),g.Qb(D))},G.\u0275cmp=g.Kb({type:G,selectors:[["app-camera"]],viewQuery:function(e,t){var n;1&e&&g.Fc(N,1),2&e&&g.pc(n=g.ec())&&(t.videoElement=n.first)},decls:5,vars:5,consts:[["color","light","fill","clear",1,"dismiss",3,"standalone"],[4,"ngIf","ngIfElse"],["noCamera",""],["fill","clear",1,"capture",3,"click"],["slot","icon-only","name","radio-button-on-outline","color","light"],["class","capture","class","reverse-camera","fill","clear",3,"click",4,"ngIf"],["class","captured ion-margin",4,"ngrxLet"],["playsinline","","autoplay","","muted",""],["video",""],["fill","clear",1,"reverse-camera",3,"click"],["slot","icon-only","name","camera-reverse-outline","color","light"],[1,"captured","ion-margin"],[3,"routerLink","src"],[1,"no-camera"],["class","no-camera-illustration",4,"transloco"],[1,"no-camera-illustration"],["src","./assets/icons/undraw-void.svg"]],template:function(e,t){if(1&e&&(g.Rb(0,"app-back-button",0),g.yc(1,q,8,4,"ng-container",1),g.gc(2,"ngrxPush"),g.yc(3,H,2,0,"ng-template",null,2,g.zc)),2&e){var n,r=g.qc(4);g.lc("standalone",!0),g.Fb(1),g.lc("ngIf",0!==(null==(n=g.hc(2,3,t.videoDevices$))?null:n.length))("ngIfElse",r)}},directives:[L.a,A.l,F.d,F.n,T.a,X.a,F.H,f.i,J.c,F.o],pipes:[T.b],styles:["[_nghost-%COMP%]{background:var(--ion-color-dark)}video[_ngcontent-%COMP%]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}.dismiss[_ngcontent-%COMP%]{left:0;position:absolute;z-index:1}ion-button.capture[_ngcontent-%COMP%]{--border-radius:50%;--padding-end:0;--padding-start:0;--background:rgba(0,0,0,0.4);bottom:0;height:72px;left:50%;margin:0 0 var(--ion-margin,16px);position:absolute;transform:translate(-50%);width:72px;z-index:1}ion-button.capture[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:64px}ion-button.reverse-camera[_ngcontent-%COMP%]{--border-radius:50%;--padding-end:0;--padding-start:0;--background:rgba(0,0,0,0.4);bottom:16px;height:48px;left:16px;position:absolute;width:48px;z-index:1}.captured[_ngcontent-%COMP%]{border:1px solid var(--ion-color-light-shade);border-radius:4px;bottom:16px;overflow:hidden;position:absolute;right:16px}.captured[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]{height:60px;width:60px;z-index:1}.no-camera[_ngcontent-%COMP%]{background:var(--ion-color-light-shade);height:100%;width:100%}.no-camera-illustration[_ngcontent-%COMP%]{left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);width:70%}.no-camera-illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin:auto;max-width:400px}.no-camera-illustration[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line}"]}),G=Object(l.b)([Object(b.a)()],G))}],te=((Z=function e(){c(this,e)}).\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=g.Ob({type:Z}),Z.\u0275inj=g.Nb({imports:[[f.j.forChild(ee)],f.j]}),Z),ne=((Y=function e(){c(this,e)}).\u0275fac=function(e){return new(e||Y)},Y.\u0275mod=g.Ob({type:Y}),Y.\u0275inj=g.Nb({imports:[[s.a,te]]}),Y)}}])}();