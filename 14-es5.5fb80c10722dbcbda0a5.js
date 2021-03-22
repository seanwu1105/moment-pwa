!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(u){i=!0,o=u}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=o(e);if(t){var c=o(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return i(this,r)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QDOj:function(t,i,o){"use strict";o.r(i),o.d(i,"CameraPageModule",function(){return ne});var a,s,f=o("6g0+"),l=o("PCNd"),p=o("tyNb"),b=o("mrSG"),d=o("VfN6"),v=o("2Vo4"),h=o("/uUt"),m=o("bOdf"),g=o("JIr8"),O=o("KJy6"),j=o("fXoL"),y=o("TEn/"),w=o("QPBi"),x=((a=function(){function e(t,r){c(this,e),this.alertController=t,this.translocoService=r}return u(e,[{key:"presentAlert",value:function(e){var t=e.headerKey,r=e.messageKey;return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.translocoService.translate(t),i=this.translocoService.translate(r),console.log(n,i),e.next=4,this.alertController.create({header:n,message:i,buttons:[{text:"ok"}]});case 4:return o=e.sent,e.next=7,o.present();case 7:case"end":return e.stop()}},e,this)}))}},{key:"presentError",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.error(e),t.next=3,this.alertController.create({header:this.translocoService.translate("error.".concat(e instanceof Error?e.name:"UnknownError")),message:e instanceof Error?e.message:JSON.stringify(e),buttons:[{text:"ok"}]});case 3:return r=t.sent,t.next=6,r.present();case 6:case"end":return t.stop()}},t,this)}))}}]),e}()).\u0275fac=function(e){return new(e||a)(j.Wb(y.a),j.Wb(w.e))},a.\u0275prov=j.Jb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),k=o("BJdS"),C=o("r0o6"),S=o("NXyV"),$=o("jtHE"),P=o("lJxs"),R=o("UXun"),_=o("vkgz"),E=o("CqXF"),I=o("SxV6"),M=o("eIep"),U=o("q7zd"),D=o("JX91"),V=o("7o/Q"),z=function(){function e(){c(this,e)}return u(e,[{key:"call",value:function(e,t){return t.subscribe(new L(e))}}]),e}(),L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(i,e);var t=n(i);function i(e){var r;return c(this,i),(r=t.call(this,e)).hasPrev=!1,r}return u(i,[{key:"_next",value:function(e){var t;this.hasPrev?t=[this.prev,e]:this.hasPrev=!0,this.prev=e,t&&this.destination.next(t)}}]),i}(V.a),T=((s=function(){function t(){c(this,t),this.videoStreamSelector=new A,this.videoDevices$=this.videoStreamSelector.devices$,this.mediaStream$=this.videoStreamSelector.stream$,this.imageCapture$=this.mediaStream$.pipe(Object(P.a)(function(e){return e.getVideoTracks()[0]}),Object(O.c)(),Object(P.a)(function(e){return new ImageCapture(e)}),Object(R.a)({bufferSize:1,refCount:!0})),this._capturedImageUrl$=new v.a(void 0),this.capturedImageUrl$=this._capturedImageUrl$.pipe(Object(O.c)(),Object(h.a)(),function(t){return t.pipe(Object(D.a)(void 0),function(e){return e.lift(new z)},Object(_.a)(function(t){var r=e(t,1)[0];r&&URL.revokeObjectURL(r)}),Object(U.a)(t))})}return u(t,[{key:"connectPreview$",value:function(e){return this.mediaStream$.pipe(Object(_.a)(function(t){return e.srcObject=t}),Object(E.a)(e))}},{key:"capture$",value:function(){var e=this;return this.imageCapture$.pipe(Object(I.a)(),Object(M.a)(function(e){return e.takePhoto()}),Object(_.a)(function(t){e._capturedImageUrl$.next(URL.createObjectURL(t))}),Object(g.a)(function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof DOMException&&("InvalidStateError"===t.name||"UnknownError"===t.name||"OperationError"===t.name)){e.next=2;break}throw t;case 2:case"end":return e.stop()}},e)}))}),Object(O.c)())}},{key:"nextCamera$",value:function(e){var t=this;return this.videoDevices$.pipe(Object(I.a)(),Object(m.a)(function(r){return Object(C.a)(function(){return r.length>1},Object(S.a)(function(){return Object(b.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.srcObject=null);case 1:case"end":return t.stop()}},t)}))}).pipe(Object(U.a)(t.videoStreamSelector.next$())))}))}}]),t}()).\u0275fac=function(e){return new(e||s)},s.\u0275prov=j.Jb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),A=function(){function e(){var t=this;c(this,e),this.devices$=Object(S.a)(function(){return navigator.mediaDevices.enumerateDevices()}).pipe(Object(P.a)(function(e){return e.filter(function(e){return"videoinput"===e.kind})}),Object(R.a)({bufferSize:1,refCount:!0})),this.currentVideoDeviceIndex=0,this._stream$=new $.a(1),this.stream$=this.devices$.pipe(Object(I.a)(),Object(m.a)(function(e){return t.getCurrentVideoMedia(e)}),Object(_.a)(function(e){return t._stream$.next(e)}),Object(U.a)(this._stream$),Object(R.a)({bufferSize:1,refCount:!0}),Object(O.c)(),Object(O.b)(function(e){return function(e){return e.getVideoTracks().forEach(function(e){return e.stop()}),e}(e)}),Object(R.a)({bufferSize:1,refCount:!0}))}return u(e,[{key:"next$",value:function(){var e=this;return this.stream$.pipe(Object(I.a)(),Object(_.a)(function(e){return e.getVideoTracks().forEach(function(e){return e.stop()})}),Object(U.a)(this.devices$),Object(_.a)(function(){return e.currentVideoDeviceIndex++}),Object(m.a)(function(t){return e.getCurrentVideoMedia(t)}),Object(_.a)(function(t){return e._stream$.next(t)}))}},{key:"getCurrentVideoMedia",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",navigator.mediaDevices.getUserMedia({video:{deviceId:e[this.currentVideoDeviceIndex%e.length].deviceId}}));case 1:case"end":return t.stop()}},t,this)}))}}]),e}(),J=o("zXXW"),N=o("ofXK"),K=o("9A8T"),X=o("/T4s"),B=["video"];function Q(e,t){if(1&e){var r=j.Tb();j.Sb(0,"ion-button",9),j.ac("click",function(){return j.nc(r),j.cc(2).reverseCamera()}),j.Ob(1,"ion-icon",10),j.Rb()}}var F=function(e){return["/image-viewer",e]};function W(e,t){if(1&e&&(j.Sb(0,"div",11),j.Ob(1,"app-image",12),j.Rb()),2&e){var r=t.ngrxLet;j.Cb(1),j.ic("routerLink",j.kc(2,F,r))("src",r)}}function q(e,t){if(1&e){var r=j.Tb();j.Qb(0),j.Sb(1,"ion-button",3),j.ac("click",function(){return j.nc(r),j.cc().capture()}),j.Ob(2,"ion-icon",4),j.Rb(),j.uc(3,Q,2,0,"ion-button",5),j.dc(4,"ngrxPush"),j.uc(5,W,2,4,"div",6),j.Ob(6,"video",7,8),j.Pb()}if(2&e){var n,i=j.cc();j.Cb(3),j.ic("ngIf",(null==(n=j.ec(4,2,i.videoDevices$))?null:n.length)>1),j.Cb(2),j.ic("ngrxLet",i.capturedImageUrl$)}}function H(e,t){if(1&e&&(j.Sb(0,"div",15),j.Ob(1,"ion-img",16),j.Sb(2,"h3"),j.wc(3),j.Rb(),j.Sb(4,"p"),j.wc(5),j.Rb(),j.Rb()),2&e){var r=t.$implicit;j.Cb(3),j.xc(r("noCameraFound")),j.Cb(2),j.xc(r("message.noCameraFound"))}}function G(e,t){1&e&&(j.Sb(0,"div",13),j.uc(1,H,6,2,"div",14),j.Rb())}var Y,Z,ee,te=[{path:"",component:(Y=function(){function e(t,r,n){c(this,e),this.dialogsService=t,this.momentRepository=r,this.cameraService=n,this.videoDevices$=this.cameraService.videoDevices$,this._videoElement$=new v.a(void 0),this.videoElement$=this._videoElement$.pipe(Object(O.c)(),Object(h.a)()),this.capturedImageUrl$=this.cameraService.capturedImageUrl$,this.startPreview()}return u(e,[{key:"videoElement",set:function(e){e&&this._videoElement$.next(e.nativeElement)}},{key:"startPreview",value:function(){var e=this;return this.videoElement$.pipe(Object(m.a)(function(t){return e.cameraService.connectPreview$(t)}),Object(g.a)(function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.presentError(t));case 1:case"end":return e.stop()}},e,this)}))}),Object(d.b)(this)).subscribe()}},{key:"capture",value:function(){var e=this;this.cameraService.capture$().pipe(Object(O.a)(function(t){return e.momentRepository.add$(t)}),Object(g.a)(function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.presentError(t));case 1:case"end":return e.stop()}},e,this)}))}),Object(d.b)(this)).subscribe()}},{key:"reverseCamera",value:function(){var e=this;return this.videoElement$.pipe(Object(m.a)(function(t){return e.cameraService.nextCamera$(t)}),Object(g.a)(function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.presentError(t));case 1:case"end":return e.stop()}},e,this)}))}),Object(d.b)(this)).subscribe()}},{key:"presentError",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e instanceof DOMException&&"NotAllowedError"===e.name?this.dialogsService.presentAlert({headerKey:"error.".concat(e.name),messageKey:"message.cameraPermissionDenied"}):this.dialogsService.presentError(e));case 1:case"end":return t.stop()}},t,this)}))}}]),e}(),Y.\u0275fac=function(e){return new(e||Y)(j.Nb(x),j.Nb(k.a),j.Nb(T))},Y.\u0275cmp=j.Hb({type:Y,selectors:[["app-camera"]],viewQuery:function(e,t){var r;1&e&&j.Bc(B,1),2&e&&j.lc(r=j.bc())&&(t.videoElement=r.first)},decls:5,vars:5,consts:[["color","light","fill","clear",1,"dismiss",3,"standalone"],[4,"ngIf","ngIfElse"],["noCamera",""],["fill","clear",1,"capture",3,"click"],["slot","icon-only","name","radio-button-on-outline","color","light"],["class","capture","class","reverse-camera","fill","clear",3,"click",4,"ngIf"],["class","captured ion-margin",4,"ngrxLet"],["playsinline","","autoplay",""],["video",""],["fill","clear",1,"reverse-camera",3,"click"],["slot","icon-only","name","camera-reverse-outline","color","light"],[1,"captured","ion-margin"],[3,"routerLink","src"],[1,"no-camera"],["class","no-camera-illustration",4,"transloco"],[1,"no-camera-illustration"],["src","./assets/icons/undraw-void.svg"]],template:function(e,t){if(1&e&&(j.Ob(0,"app-back-button",0),j.uc(1,q,8,4,"ng-container",1),j.dc(2,"ngrxPush"),j.uc(3,G,2,0,"ng-template",null,2,j.vc)),2&e){var r,n=j.mc(4);j.ic("standalone",!0),j.Cb(1),j.ic("ngIf",0!==(null==(r=j.ec(2,3,t.videoDevices$))?null:r.length))("ngIfElse",n)}},directives:[J.a,N.l,y.c,y.m,K.a,X.a,y.I,p.h,w.c,y.n],pipes:[K.b],styles:["[_nghost-%COMP%]{background:var(--ion-color-dark)}video[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.dismiss[_ngcontent-%COMP%]{position:absolute;left:0;z-index:1}ion-button.capture[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%);z-index:1;height:72px;width:72px;margin:0 0 var(--ion-margin,16px);--border-radius:50%;--padding-end:0;--padding-start:0;--background:rgba(0,0,0,0.4)}ion-button.capture[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:64px}ion-button.reverse-camera[_ngcontent-%COMP%]{position:absolute;bottom:16px;left:16px;z-index:1;height:48px;width:48px;--border-radius:50%;--padding-end:0;--padding-start:0;--background:rgba(0,0,0,0.4)}.captured[_ngcontent-%COMP%]{position:absolute;bottom:16px;right:16px;overflow:hidden;border-radius:4px;border:1px solid var(--ion-color-light-shade)}.captured[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]{z-index:1;width:60px;height:60px}.no-camera[_ngcontent-%COMP%]{width:100%;height:100%;background:var(--ion-color-light-shade)}.no-camera-illustration[_ngcontent-%COMP%]{width:70%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.no-camera-illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin:auto;max-width:400px}.no-camera-illustration[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line}"]}),Y=Object(b.b)([Object(d.a)()],Y))}],re=((ee=function e(){c(this,e)}).\u0275fac=function(e){return new(e||ee)},ee.\u0275mod=j.Lb({type:ee}),ee.\u0275inj=j.Kb({imports:[[p.i.forChild(te)],p.i]}),ee),ne=((Z=function e(){c(this,e)}).\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=j.Lb({type:Z}),Z.\u0275inj=j.Kb({imports:[[l.a,re,f.a]]}),Z)}}])}();