(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{BJdS:function(e,i,t){"use strict";t.d(i,"a",function(){return k});var o=t("NXyV"),r=t("cp0P"),s=t("bOdf"),n=t("wO+i"),a=t("UXun"),l=t("lJxs"),c=t("SxV6"),d=t("mrSG");function u(e){return Object(d.a)(this,void 0,void 0,function*(){const i=yield crypto.subtle.digest("SHA-256",yield e.arrayBuffer());return[...new Uint8Array(i)].map(e=>e.toString(16).padStart(2,"0")).join("")})}function b(){return Object(d.a)(this,void 0,void 0,function*(){try{return yield function(){return Object(d.a)(this,void 0,void 0,function*(){return new Promise((e,i)=>{navigator.geolocation.getCurrentPosition(i=>e(i),e=>i(e),{enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4})})})}()}catch(e){return}})}var m=t("r0o6"),h=t("K4CH"),w=t.n(h),p=t("KJy6"),f=t("fI17"),g=t.n(f);const v={version:0,type:"object",properties:{id:{type:"string",primary:!0},timestamp:{type:"number"},geolocationPosition:{type:"object",properties:{latitude:{type:"number"},longitude:{type:"number"}},required:["latitude","longitude"]},userAgent:{type:"string"}},indexes:["timestamp"],required:["timestamp","userAgent"],attachments:{encrypted:!1}};let y=(()=>{class e{constructor(i){this.document=i,this.id=this.document.id,this.mimeType$=Object(o.a)(()=>Object(d.a)(this,void 0,void 0,function*(){return this.getAttachment("original")})).pipe(Object(p.c)(),Object(n.a)("type")),this.timestamp=this.document.timestamp,this.geolocationPosition=this.document.geolocationPosition,this.photo$=Object(o.a)(()=>{var e;return null===(e=this.getAttachment("original"))||void 0===e?void 0:e.getData()}).pipe(Object(p.c)()),this.photoUrl$=this.photo$.pipe(Object(l.a)(e=>URL.createObjectURL(e)),Object(a.a)({bufferSize:1,refCount:!0})),this.thumbnailUrl$=Object(o.a)(()=>Object(d.a)(this,void 0,void 0,function*(){return this.getAttachment("thumbnail")})).pipe(Object(s.a)(i=>Object(m.a)(()=>!!i,Object(o.a)(()=>null==i?void 0:i.getData()),Object(o.a)(()=>Object(d.a)(this,void 0,void 0,function*(){const i=this.getAttachment("original");if(!i)return;const t=yield function({image:e,width:i}){return Object(d.a)(this,void 0,void 0,function*(){return new Promise((t,o)=>{new g.a(e,{quality:.6,width:i,success(e){t(e)},error(e){o(e)}})})})}({image:yield i.getData(),width:300});return yield this.document.putAttachment({id:e.THUMBNAIL_ATTACHMENT_ID,data:t,type:i.type}),t})))),Object(p.c)(),Object(l.a)(e=>URL.createObjectURL(e)),Object(a.a)({bufferSize:1,refCount:!0})),this.userAgent=new w.a(this.document.userAgent).getResult(),this.metaJson=JSON.stringify(this.document.toJSON())}getAttachment(e){return this.document.getAttachment(e)}}return e.PHOTO_ATTACHMENT_ID="original",e.THUMBNAIL_ATTACHMENT_ID="thumbnail",e})();var x=t("fXoL"),O=t("aNgo");let k=(()=>{class e{constructor(e){this.database=e,this.collection$=this.database.main$.pipe(Object(s.a)(e=>e.addCollections({[j]:{schema:v}})),Object(n.a)(j),Object(a.a)({bufferSize:1,refCount:!0})),this.all$=this.collection$.pipe(Object(s.a)(e=>e.find().sort({timestamp:"desc"}).$),Object(l.a)(e=>e.map(e=>new y(e))))}add$(e){return Object(o.a)(()=>Object(r.a)([this.collection$.pipe(Object(c.a)()),u(e),b()])).pipe(Object(s.a)(([e,i,t])=>e.atomicUpsert({id:i,timestamp:Date.now(),geolocationPosition:t?{latitude:t.coords.latitude,longitude:t.coords.longitude}:void 0,userAgent:navigator.userAgent})),Object(s.a)(i=>i.putAttachment({id:y.PHOTO_ATTACHMENT_ID,data:e,type:e.type},!0)),Object(l.a)(e=>e.doc))}remove$(e){return this.collection$.pipe(Object(s.a)(i=>i.bulkRemove([e])))}}return e.\u0275fac=function(i){return new(i||e)(x.Zb(O.a))},e.\u0275prov=x.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const j="moments"},K4CH:function(e,i,t){var o;!function(r,s){"use strict";var n="model",a="name",l="type",c="vendor",d="version",u="mobile",b="tablet",m="smarttv",h={extend:function(e,i){var t={};for(var o in e)t[o]=i[o]&&i[o].length%2==0?i[o].concat(e[o]):e[o];return t},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e,i){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),void 0===i?e:e.substring(0,255)}},w={rgx:function(e,i){for(var t,o,r,s,n,a,l=0;l<i.length&&!n;){var c=i[l],d=i[l+1];for(t=o=0;t<c.length&&!n;)if(n=c[t++].exec(e))for(r=0;r<d.length;r++)a=n[++o],"object"==typeof(s=d[r])&&s.length>0?2==s.length?this[s[0]]="function"==typeof s[1]?s[1].call(this,a):s[1]:3==s.length?this[s[0]]="function"!=typeof s[1]||s[1].exec&&s[1].test?a?a.replace(s[1],s[2]):void 0:a?s[1].call(this,a,s[2]):void 0:4==s.length&&(this[s[0]]=a?s[3].call(this,a.replace(s[1],s[2])):void 0):this[s]=a||void 0;l+=2}},str:function(e,i){for(var t in i)if("object"==typeof i[t]&&i[t].length>0){for(var o=0;o<i[t].length;o++)if(h.has(i[t][o],e))return"?"===t?void 0:t}else if(h.has(i[t],e))return"?"===t?void 0:t;return e}},p={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},f={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[d,[a,"Chrome"]],[/(?:edgios|edga|edg)\/([\w\.]+)/i],[d,[a,"Edge"]],[/edge\/([\w\.]+)/i],[[d,w.str,p.browser.oldEdge.version],[a,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[a,d],[/opios[\/\s]+([\w\.]+)/i],[d,[a,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[d,[a,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|instagram)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[a,d],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[d,[a,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[d,[a,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[d,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[d,[a,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[d,[a,"IE"]],[/yabrowser\/([\w\.]+)/i],[d,[a,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure Browser"],d],[/focus\/([\w\.]+)/i],[d,[a,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[d,[a,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[d,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[d,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[d,[a,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[a,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[d,[a,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1 Browser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],d],[/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[a,d],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[a],[/;fbav\/([\w\.]+);/i],[d,[a,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[a,"Facebook"]],[/\s(electron)\/([\w\.]+)\ssafari/i,/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i],[a,d],[/\bgsa\/([\w\.]+)\s.*safari\//i],[d,[a,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[d,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,"Chrome WebView"],d],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[d,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,d],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[d,[a,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[d,a],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[d,w.str,p.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],d],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[d,[a,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",h.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[["architecture","arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[["architecture","armhf"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",h.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[["architecture",h.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[n,[c,"Samsung"],[l,b]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[n,[c,"Samsung"],[l,u]],[/\((ip(?:hone|od)[\s\w]*);/i],[n,[c,"Apple"],[l,u]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[n,[c,"Apple"],[l,b]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[n,[c,"Huawei"],[l,b]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[n,[c,"Huawei"],[l,u]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[n,/_/g," "],[c,"Xiaomi"],[l,u]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[n,/_/g," "],[c,"Xiaomi"],[l,b]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[n,[c,"OPPO"],[l,u]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[n,[c,"Vivo"],[l,u]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[n,[c,"Realme"],[l,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[n,[c,"Motorola"],[l,u]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[n,[c,"Motorola"],[l,b]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[n,[c,"LG"],[l,b]],[/(nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[n,[c,"LG"],[l,u]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[n,[c,"Lenovo"],[l,b]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[n,[c,"Nokia"],[l,u]],[/droid.+;\s(pixel\sc)[\s)]/i],[n,[c,"Google"],[l,b]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[n,[c,"Google"],[l,u]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[n,[c,"Sony"],[l,u]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[n,"Xperia Tablet"],[c,"Sony"],[l,b]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[n,[c,"OnePlus"],[l,u]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[n,[c,"Amazon"],[l,b]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[n,"Fire Phone"],[c,"Amazon"],[l,u]],[/\((playbook);[\w\s\),;-]+(rim)/i],[n,c,[l,b]],[/\(bb10;\s(\w+)/i],[n,[c,"BlackBerry"],[l,u]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[n,[c,"ASUS"],[l,b]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[n,[c,"ASUS"],[l,u]],[/(nexus\s9)/i],[n,[c,"HTC"],[l,b]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[n,/_/g," "],[l,u]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[n,[c,"Acer"],[l,b]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[n,[c,"Meizu"],[l,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,n,[l,u]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[c,n,[l,b]],[/\s(surface\sduo)\s/i],[n,[c,"Microsoft"],[l,b]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[n,[c,"Fairphone"],[l,u]],[/\s(u304aa)\sbuild/i],[n,[c,"AT&T"],[l,u]],[/sie-(\w*)/i],[n,[c,"Siemens"],[l,u]],[/[;\/]\s?(rct\w+)\sbuild/i],[n,[c,"RCA"],[l,b]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[n,[c,"Dell"],[l,b]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[n,[c,"Verizon"],[l,b]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[n,[c,"Barnes & Noble"],[l,b]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[n,[c,"NuVision"],[l,b]],[/;\s(k88)\sbuild/i],[n,[c,"ZTE"],[l,b]],[/;\s(nx\d{3}j)\sbuild/i],[n,[c,"ZTE"],[l,u]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[n,[c,"Swiss"],[l,u]],[/[;\/]\s?(zur\d{3})\sbuild/i],[n,[c,"Swiss"],[l,b]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[n,[c,"Zeki"],[l,b]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[c,"Dragon Touch"],n,[l,b]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[n,[c,"Insignia"],[l,b]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[n,[c,"NextBook"],[l,b]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[c,"Voice"],n,[l,u]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[c,"LvTel"],n,[l,u]],[/;\s(ph-1)\s/i],[n,[c,"Essential"],[l,u]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[n,[c,"Envizen"],[l,b]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[n,[c,"MachSpeed"],[l,b]],[/[;\/]\s?tu_(1491)\sbuild/i],[n,[c,"Rotor"],[l,b]],[/(shield[\w\s]+)\sbuild/i],[n,[c,"Nvidia"],[l,b]],[/(sprint)\s(\w+)/i],[c,n,[l,u]],[/(kin\.[onetw]{3})/i],[[n,/\./g," "],[c,"Microsoft"],[l,u]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[n,[c,"Zebra"],[l,b]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[n,[c,"Zebra"],[l,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[c,n,[l,"console"]],[/droid.+;\s(shield)\sbuild/i],[n,[c,"Nvidia"],[l,"console"]],[/(playstation\s[345portablevi]+)/i],[n,[c,"Sony"],[l,"console"]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[n,[c,"Microsoft"],[l,"console"]],[/smart-tv.+(samsung)/i],[c,[l,m]],[/hbbtv.+maple;(\d+)/i],[[n,/^/,"SmartTV"],[c,"Samsung"],[l,m]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[c,"LG"],[l,m]],[/(apple)\s?tv/i],[c,[n,"Apple TV"],[l,m]],[/crkey/i],[[n,"Chromecast"],[c,"Google"],[l,m]],[/droid.+aft([\w])(\sbuild\/|\))/i],[n,[c,"Amazon"],[l,m]],[/\(dtv[\);].+(aquos)/i],[n,[c,"Sharp"],[l,m]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,h.trim],[n,h.trim],[l,m]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[l,m]],[/((pebble))app\/[\d\.]+\s/i],[c,n,[l,"wearable"]],[/droid.+;\s(glass)\s\d/i],[n,[c,"Google"],[l,"wearable"]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[n,[c,"Zebra"],[l,"wearable"]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[n,[l,u]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[n,[l,b]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,h.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[n,[c,"Generic"]],[/(phone)/i],[[l,u]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,d],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[d,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[a,[d,w.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[d,w.str,p.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[d,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[a,"Mac OS"],[d,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[a,d],[/\(bb(10);/i],[d,[a,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[d,[a,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"]],[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[d,[a,"webOS"]],[/crkey\/([\d\.]+)/i],[d,[a,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],d],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[a,d],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],d],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,d]]},g=function(e,i){if("object"==typeof e&&(i=e,e=void 0),!(this instanceof g))return new g(e,i).getResult();var t=e||(void 0!==r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=i?h.extend(f,i):f;return this.getBrowser=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,t,o.browser),e.major=h.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return w.rgx.call(e,t,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return w.rgx.call(e,t,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,t,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,t,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t="string"==typeof e&&e.length>255?h.trim(e,255):e,this},this.setUA(t),this};g.VERSION="0.7.27",g.BROWSER={NAME:a,MAJOR:"major",VERSION:d},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:n,VENDOR:c,TYPE:l,CONSOLE:"console",MOBILE:u,SMARTTV:m,TABLET:b,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:a,VERSION:d},g.OS={NAME:a,VERSION:d},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=g),i.UAParser=g):void 0===(o=(function(){return g}).call(i,t,i,e))||(e.exports=o);var v=void 0!==r&&(r.jQuery||r.Zepto);if(v&&!v.ua){var y=new g;v.ua=y.getResult(),v.ua.get=function(){return y.getUA()},v.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var t in i)v.ua[t]=i[t]}}}("object"==typeof window?window:this)},fI17:function(e,i,t){e.exports=function(){"use strict";function e(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function t(){return(t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,o)}return t}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}var s=function(e,i,t){return function(e){"undefined"!=typeof window&&function(i){var t=i.HTMLCanvasElement&&i.HTMLCanvasElement.prototype,o=i.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),r=o&&i.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),s=i.BlobBuilder||i.WebKitBlobBuilder||i.MozBlobBuilder||i.MSBlobBuilder,n=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,a=(o||s)&&i.atob&&i.ArrayBuffer&&i.Uint8Array&&function(e){var i,t,a,l,c,d,u,b,m;if(!(i=e.match(n)))throw new Error("invalid data URI");for(t=i[2]?i[1]:"text/plain"+(i[3]||";charset=US-ASCII"),a=!!i[4],l=e.slice(i[0].length),c=a?atob(l):decodeURIComponent(l),d=new ArrayBuffer(c.length),u=new Uint8Array(d),b=0;b<c.length;b+=1)u[b]=c.charCodeAt(b);return o?new Blob([r?u:d],{type:t}):((m=new s).append(d),m.getBlob(t))};i.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(e,i,o){var r=this;setTimeout(function(){e(o&&t.toDataURL&&a?a(r.toDataURL(i,o)):r.mozGetAsFile("blob",i))})}:t.toDataURL&&a&&(t.toBlob=t.msToBlob?function(e,i,o){var r=this;setTimeout(function(){e((i&&"image/png"!==i||o)&&t.toDataURL&&a?a(r.toDataURL(i,o)):r.msToBlob(i))})}:function(e,i,t){var o=this;setTimeout(function(){e(a(o.toDataURL(i,t)))})})),e.exports?e.exports=a:i.dataURLtoBlob=a}(window)}(t={path:void 0,exports:{},require:function(e,i){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),t.exports}(),n={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,quality:.8,mimeType:"auto",convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},a="undefined"!=typeof window&&void 0!==window.document?window:{},l=Array.prototype.slice,c=/^image\/.+$/;function d(e){return c.test(e)}var u=String.fromCharCode,b=a.btoa;var m=/\.\d*(?:0|9){12}\d*$/;function h(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return m.test(e)?Math.round(e*i)/i:e}var w=a.ArrayBuffer,p=a.FileReader,f=a.URL||a.webkitURL,g=/\.\w+$/,v=a.Compressor;return function(){function i(e,t){(function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")})(this,i),this.file=e,this.image=new Image,this.options=r(r({},n),t),this.aborted=!1,this.result=null,this.init()}return o=i,m=[{key:"noConflict",value:function(){return window.Compressor=v,i}},{key:"setDefaults",value:function(e){t(n,e)}}],(c=[{key:"init",value:function(){var e,i=this,o=this.file,r=this.options;if(e=o,"undefined"!=typeof Blob&&(e instanceof Blob||"[object Blob]"===Object.prototype.toString.call(e))){var s=o.type;if(d(s))if(f&&p)if(w||(r.checkOrientation=!1),f&&!r.checkOrientation)this.load({url:f.createObjectURL(o)});else{var n=new p,a=r.checkOrientation&&"image/jpeg"===s;this.reader=n,n.onload=function(e){var r=e.target.result,n={};if(a){var c=function(e){var i,t=new DataView(e);try{var o,r,s;if(255===t.getUint8(0)&&216===t.getUint8(1))for(var n=t.byteLength,a=2;a+1<n;){if(255===t.getUint8(a)&&225===t.getUint8(a+1)){r=a;break}a+=1}if(r){var l=r+10;if("Exif"===function(e,i,t){var o,r="";for(t+=i,o=i;o<t;o+=1)r+=u(e.getUint8(o));return r}(t,r+4,4)){var c=t.getUint16(l);if(((o=18761===c)||19789===c)&&42===t.getUint16(l+2,o)){var d=t.getUint32(l+4,o);d>=8&&(s=l+d)}}}if(s){var b,m,h=t.getUint16(s,o);for(m=0;m<h;m+=1)if(274===t.getUint16(b=s+12*m+2,o)){i=t.getUint16(b+=8,o),t.setUint16(b,1,o);break}}}catch(w){i=1}return i}(r);c>1||!f?(n.url=function(e,i){for(var t=[],o=new Uint8Array(e);o.length>0;)t.push(u.apply(null,(r=o.subarray(0,8192),Array.from?Array.from(r):l.call(r)))),o=o.subarray(8192);var r;return"data:".concat(i,";base64,").concat(b(t.join("")))}(r,s),c>1&&t(n,function(e){var i=0,t=1,o=1;switch(e){case 2:t=-1;break;case 3:i=-180;break;case 4:o=-1;break;case 5:i=90,o=-1;break;case 6:i=90;break;case 7:i=90,t=-1;break;case 8:i=-90}return{rotate:i,scaleX:t,scaleY:o}}(c))):n.url=f.createObjectURL(o)}else n.url=r;i.load(n)},n.onabort=function(){i.fail(new Error("Aborted to read the image with FileReader."))},n.onerror=function(){i.fail(new Error("Failed to read the image with FileReader."))},n.onloadend=function(){i.reader=null},a?n.readAsArrayBuffer(o):n.readAsDataURL(o)}else this.fail(new Error("The current browser does not support image compression."));else this.fail(new Error("The first argument must be an image File or Blob object."))}else this.fail(new Error("The first argument must be a File or Blob object."))}},{key:"load",value:function(e){var i=this,t=this.file,o=this.image;o.onload=function(){i.draw(r(r({},e),{},{naturalWidth:o.naturalWidth,naturalHeight:o.naturalHeight}))},o.onabort=function(){i.fail(new Error("Aborted to load the image."))},o.onerror=function(){i.fail(new Error("Failed to load the image."))},a.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(a.navigator.userAgent)&&(o.crossOrigin="anonymous"),o.alt=t.name,o.src=e.url}},{key:"draw",value:function(e){var i=this,t=e.naturalWidth,o=e.naturalHeight,r=e.rotate,n=void 0===r?0:r,a=e.scaleX,l=void 0===a?1:a,c=e.scaleY,u=void 0===c?1:c,b=this.file,m=this.image,w=this.options,p=document.createElement("canvas"),f=p.getContext("2d"),g=t/o,v=Math.abs(n)%180==90,y=Math.max(w.maxWidth,0)||1/0,x=Math.max(w.maxHeight,0)||1/0,O=Math.max(w.minWidth,0)||0,k=Math.max(w.minHeight,0)||0,j=Math.max(w.width,0)||t,A=Math.max(w.height,0)||o;if(v){var T=[x,y];y=T[0],x=T[1];var S=[k,O];O=S[0],k=S[1];var U=[A,j];j=U[0],A=U[1]}y<1/0&&x<1/0?x*g>y?x=y/g:y=x*g:y<1/0?x=y/g:x<1/0&&(y=x*g),O>0&&k>0?k*g>O?k=O/g:O=k*g:O>0?k=O/g:k>0&&(O=k*g),A*g>j?A=j/g:j=A*g;var E=-(j=Math.floor(h(Math.min(Math.max(j,O),y))))/2,B=-(A=Math.floor(h(Math.min(Math.max(A,k),x))))/2,M=j,C=A;if(v){var R=[A,j];j=R[0],A=R[1]}p.width=j,p.height=A,d(w.mimeType)||(w.mimeType=b.type);var P="transparent";if(b.size>w.convertSize&&"image/png"===w.mimeType&&(P="#fff",w.mimeType="image/jpeg"),f.fillStyle=P,f.fillRect(0,0,j,A),w.beforeDraw&&w.beforeDraw.call(this,f,p),!this.aborted&&(f.save(),f.translate(j/2,A/2),f.rotate(n*Math.PI/180),f.scale(l,u),f.drawImage(m,E,B,M,C),f.restore(),w.drew&&w.drew.call(this,f,p),!this.aborted)){var _=function(e){i.aborted||i.done({naturalWidth:t,naturalHeight:o,result:e})};p.toBlob?p.toBlob(_,w.mimeType,w.quality):_(s(p.toDataURL(w.mimeType,w.quality)))}}},{key:"done",value:function(e){var i,t,o=e.naturalWidth,r=e.naturalHeight,s=e.result,n=this.file,a=this.options;if(f&&!a.checkOrientation&&f.revokeObjectURL(this.image.src),s)if(a.strict&&s.size>n.size&&a.mimeType===n.type&&!(a.width>o||a.height>r||a.minWidth>o||a.minHeight>r))s=n;else{var l=new Date;s.lastModified=l.getTime(),s.lastModifiedDate=l,s.name=n.name,s.name&&s.type!==n.type&&(s.name=s.name.replace(g,("jpeg"===(t=d(i=s.type)?i.substr(6):"")&&(t="jpg"),".".concat(t))))}else s=n;this.result=s,a.success&&a.success.call(this,s)}},{key:"fail",value:function(e){var i=this.options;if(!i.error)throw e;i.error.call(this,e)}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}])&&e(o.prototype,c),m&&e(o,m),i;var o,c,m}()}()},fOOd:function(e,i,t){"use strict";t.r(i),t.d(i,"HomePageModule",function(){return _});var o=t("PCNd"),r=t("tyNb"),s=t("mrSG"),n=t("VfN6"),a=t("XNiG"),l=t("r0o6"),c=t("/uUt"),d=t("eIep"),u=t("q7zd"),b=t("fXoL"),m=t("BJdS"),h=t("sneX"),w=t("8/ti");let p=(()=>{class e extends h.a{constructor(e){super(e,"OnboardingService"),this.hasOnboarded$=this.getBoolean$("hasOnboarded",!1),this.onboard$=this.setBoolean$("hasOnboarded",!0)}}return e.\u0275fac=function(i){return new(i||e)(b.Zb(w.a))},e.\u0275prov=b.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=t("QPBi"),g=t("mHUz"),v=t("TEn/"),y=t("ofXK"),x=t("2Vo4"),O=t("KJy6"),k=t("9A8T"),j=t("/T4s");const A=function(e){return{id:e}};function T(e,i){if(1&e&&(b.Vb(0,"app-image",2),b.Rb(1,"ion-ripple-effect"),b.Ub()),2&e){const e=i.ngrxLet,t=b.fc().ngrxLet;b.lc("queryParams",b.nc(2,A,t.id))("src",e)}}function S(e,i){if(1&e&&(b.Tb(0),b.xc(1,T,2,4,"app-image",1),b.Sb()),2&e){const e=i.ngrxLet;b.Fb(1),b.lc("ngrxLet",e.thumbnailUrl$)}}let U=(()=>{class e{constructor(){this._moment$=new x.a(void 0),this.moment$=this._moment$.pipe(Object(O.c)(),Object(c.a)((e,i)=>e.id===i.id))}set moment(e){this._moment$.next(e)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=b.Kb({type:e,selectors:[["app-moment-thumbnail"]],inputs:{moment:"moment"},decls:1,vars:1,consts:[[4,"ngrxLet"],["routerLink","photo","class","ion-activatable",3,"queryParams","src",4,"ngrxLet"],["routerLink","photo",1,"ion-activatable",3,"queryParams","src"]],template:function(e,i){1&e&&b.xc(0,S,2,1,"ng-container",0),2&e&&b.lc("ngrxLet",i.moment$)},directives:[k.a,j.a,v.H,r.i,v.v],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}app-image[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}"]}),e})();function E(e,i){if(1&e&&(b.Vb(0,"ion-col",9,10),b.Rb(2,"app-moment-thumbnail",11),b.Ub()),2&e){const e=i.$implicit;b.Fb(2),b.lc("moment",e)}}function B(e,i){if(1&e&&(b.Vb(0,"h3"),b.zc(1),b.Ub()),2&e){const e=i.$implicit;b.Fb(1),b.Ac(e("nothingInAlbum"))}}function M(e,i){if(1&e&&(b.Vb(0,"p"),b.zc(1),b.Ub()),2&e){const e=i.$implicit;b.Fb(1),b.Bc(" ",e("message.emptyAlbum")+"\n"+e("message.storedLocally")," ")}}function C(e,i){1&e&&(b.Vb(0,"div",12),b.Rb(1,"ion-img",13),b.xc(2,B,2,1,"h3",14),b.xc(3,M,2,1,"p",14),b.Ub())}const R=[{path:"",component:(()=>{let e=class{constructor(e,i,t,o){this.momentRepository=e,this.onboardingService=i,this.translocoService=t,this.errorReportService=o,this.moments$=this.momentRepository.all$,this._scrollEvent$=new a.a,this.scrollEvent$=this._scrollEvent$.pipe(Object(c.a)()),this.noFooterBorder$=this.scrollEvent$.pipe(Object(d.a)(e=>Object(s.a)(this,void 0,void 0,function*(){const i=e.target,t=yield i.getScrollElement();return t.scrollTop===t.scrollHeight-t.clientHeight}))),this.onboardIfNecessary$=this.onboardingService.hasOnboarded$.pipe(Object(d.a)(e=>Object(l.a)(()=>!e,this.translocoService.selectTranslateObject([]).pipe(Object(u.a)(this.errorReportService.showUserAgreeDialog$)))),Object(u.a)(this.onboardingService.onboard$))}ngAfterViewInit(){this.onboardIfNecessary$.pipe(Object(n.b)(this)).subscribe()}onScroll(e){this._scrollEvent$.next(e)}trackMoment(e,i){return i.id}};return e.\u0275fac=function(i){return new(i||e)(b.Qb(m.a),b.Qb(p),b.Qb(f.e),b.Qb(g.a))},e.\u0275cmp=b.Kb({type:e,selectors:[["app-home"]],decls:16,vars:11,consts:[["scrollEvents","",3,"ionScroll"],["size","6","size-sm","4","size-md","3","size-lg","2",4,"ngFor","ngForOf","ngForTrackBy"],["class","empty-illustration",4,"ngIf"],["vertical","bottom","horizontal","center","slot","fixed","edge",""],["routerLink","camera"],["name","camera-outline"],["slot","primary"],["routerLink","settings","slot","primary"],["slot","icon-only","name","settings-outline"],["size","6","size-sm","4","size-md","3","size-lg","2"],["col",""],[3,"moment"],[1,"empty-illustration"],["src","./assets/icons/undraw-blank-canvas.svg"],[4,"transloco"]],template:function(e,i){if(1&e&&(b.Vb(0,"ion-content",0),b.dc("ionScroll",function(e){return i.onScroll(e)}),b.Vb(1,"ion-grid"),b.Vb(2,"ion-row"),b.xc(3,E,3,1,"ion-col",1),b.gc(4,"ngrxPush"),b.Ub(),b.Ub(),b.xc(5,C,4,0,"div",2),b.gc(6,"ngrxPush"),b.Vb(7,"ion-fab",3),b.Vb(8,"ion-fab-button",4),b.Rb(9,"ion-icon",5),b.Ub(),b.Ub(),b.Ub(),b.Vb(10,"ion-footer"),b.gc(11,"ngrxPush"),b.Vb(12,"ion-toolbar"),b.Vb(13,"ion-buttons",6),b.Vb(14,"ion-button",7),b.Rb(15,"ion-icon",8),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e){let e=null;b.Fb(3),b.lc("ngForOf",b.hc(4,5,i.moments$))("ngForTrackBy",i.trackMoment),b.Fb(2),b.lc("ngIf",0===(null==(e=b.hc(6,7,i.moments$))?null:e.length)),b.Fb(5),b.Ib("ion-no-border",b.hc(11,9,i.noFooterBorder$))}},directives:[v.h,v.l,v.x,y.k,y.l,v.i,v.j,v.H,r.i,v.n,v.k,v.C,v.e,v.d,v.g,U,v.o,f.c],pipes:[k.b],styles:["app-moment-thumbnail[_ngcontent-%COMP%]{height:150px;border-radius:4px;box-shadow:0 2px 8px 0 rgba(99,99,99,.2)}.empty-illustration[_ngcontent-%COMP%]{width:70%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.empty-illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin:auto;max-width:400px}.empty-illustration[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line}"]}),e=Object(s.b)([Object(n.a)()],e),e})()},{path:"photo",loadChildren:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"MTLF")).then(e=>e.PhotoPageModule)},{path:"settings",loadChildren:()=>t.e(13).then(t.bind(null,"VJEY")).then(e=>e.SettingsPageModule)},{path:"camera",loadChildren:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"QDOj")).then(e=>e.CameraPageModule)}];let P=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({imports:[[r.j.forChild(R)],r.j]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({imports:[[o.a,P]]}),e})()}}]);