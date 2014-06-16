(function(){var e,h=this,k=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},m=function(a){return"array"==k(a)},aa=function(a){var b=k(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){return"string"==typeof a},ba=function(a){return"boolean"==typeof a},p=function(a){return"number"==typeof a},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=
Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},ea=function(a,b,c){ea=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return ea.apply(null,arguments)},fa=function(a,b){function c(){}c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.R=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};var q=function(a,b){var c=parseFloat(a);return isNaN(c)||1<c||0>c?b:c},ga=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},ha=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ia=function(a,b){if(!a)return b;var c=a.match(ha);return c?c[0]:b};var ja=q("0.02",0),ka=q("1",0),la=q("0.0",0);var ma=q("0.005",0),na=q("0.01",0),oa=q("0.001",0),pa=ga("1500",1500),qa=q("0.01",0),ra=q("1.0",0),sa=q("0.1",0),ta=q("0.01",0),ua=ga("1500",1500),va=ga("1500",
1500),wa=q("",0.001),xa=ga("",200);var ya=/^true$/.test("false")?!0:!1;var za=function(a){return/^[\s\xa0]*$/.test(a)},Aa=function(a,b){return a<b?-1:a>b?1:0};var r=function(){return h.googletag||(h.googletag={})},s=function(a,b,c){var d=r();a in d&&!c||(d[a]=b)},Ba=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)};var t={};t[1]=ia("","pagead2.googlesyndication.com");t[2]=ia("","pubads.g.doubleclick.net");t[3]=ia("","securepubads.g.doubleclick.net");t[4]=ia("","partner.googleadservices.com");t[5]="http://pagead2.googlesyndication.com/pagead/show_ads.js";t[6]=ya;t[7]=ja;t[8]=ka;t[10]=na;t[11]=oa;t[12]=ma;t[13]=pa;t[16]=qa;t[17]=ra;t[18]=sa;t[19]=ta;t[20]=la;t[21]=ua;t[22]=va;t[23]=wa;t[24]=xa;s("_vars_",t);var u=function(a,b){this.b=a;this.a=b||[]};u.prototype.getMessageId=function(){return this.b};u.prototype.getMessageArgs=function(){return this.a};var Ca=function(a,b,c,d,g){this.b=new Date;this.g=d||null;this.f=c||null;this.c=a;this.d=b;this.a=g||null};e=Ca.prototype;e.getSlot=function(){return this.g};e.getService=function(){return this.f};e.getLevel=function(){return this.c};e.getTimestamp=function(){return this.b};e.getMessage=function(){return this.d};e.getReference=function(){return this.a};var Da=["Debug","Info","Warning","Error","Fatal"];
Ca.prototype.toString=function(){var a=this.b.toTimeString()+": "+Da[this.c]+": "+this.d;this.a&&(a+=" Duration: "+(this.b.getTime()-this.a.getTimestamp().getTime())+"ms.");return a};var v=function(){this.a=[]};v.prototype.getAllEvents=function(){return this.a};v.prototype.getEventsByService=function(a){return Ea(this,function(b){return b.getService()===a})};v.prototype.getEventsBySlot=function(a){return Ea(this,function(b){return b.getSlot()===a})};v.prototype.getEventsByLevel=function(a){return Ea(this,function(b){return b.getLevel()>=a})};var Ea=function(a,b){for(var c=[],d=0;d<a.a.length;++d)b(a.a[d])&&c.push(a.a[d]);return c};
v.prototype.log=function(a,b,c,d,g){a=new Ca(a,b,c,d,g);this.a.push(a);return a};var x=function(a,b,c,d,g){return a.log(1,b,c,d,g)},z=function(a,b,c,d){a.log(2,b,c,d,void 0)},A=function(a,b,c,d){a.log(3,b,c,d,void 0)},B=function(){var a=r();return a.debug_log||(a.debug_log=new v)};s("getEventLog",B);var C=function(a){return function(){return new u(a,[])}},D=function(a){return function(b){return new u(a,[b])}},G=function(a){return function(b,c){return new u(a,[b,c])}},H=function(a){return function(b,c,d){return new u(a,[b,c,d])}},Fa=C(1),Ga=D(2),Ha=D(3),Ia=D(4),Ja=D(5),Ka=D(6),La=C(8),Ma=H(9),Na=H(10),Oa=H(11),Pa=G(12),Qa=D(13),Ra=D(14),Sa=C(15),Ta=C(16),Ua=H(17),Va=H(18),Wa=C(19),Xa=D(20),Ya=D(21),Za=G(22),$a=G(23),ab=D(26),bb=D(27),cb=D(28),db=H(29),eb=D(30),fb=G(31),gb=D(32),hb=D(33),ib=C(34),
jb=D(35),kb=H(36),lb=H(37),mb=C(38),nb=D(39),ob=G(40),pb=C(42),qb=G(43),rb=C(44),sb=C(45),tb=D(46),ub=D(47),vb=D(48),wb=C(49),xb=C(50),yb=C(52),zb=G(53),Ab=G(54),Bb=D(55),Cb=D(56),Db=G(57),Eb=H(58),Fb=D(59),Gb=D(60),Hb=G(61),Ib=G(62),Jb=D(63),Kb=G(64),Lb=D(65),Mb=C(66),Nb=C(67),Ob=C(68),Pb=C(69),Qb=C(70),Rb=C(71),Sb=C(72),Tb=D(73),Ub=D(74),J=D(75),Vb=H(77),Wb=D(78),Xb=C(79),Yb=D(80),Zb=G(82),$b=G(83),ac=G(84),bc=D(85),cc=C(86),dc=C(87),ec=H(88),fc=H(89),gc=D(90),hc=C(91),ic=D(92),jc=D(93),kc=D(94),
lc=D(95);var mc=function(){this.b=this.a=0};mc.prototype.push=function(a){for(var b=B(),c=0;c<arguments.length;++c)try{"function"==k(arguments[c])&&(arguments[c](),this.a++)}catch(d){this.b++,A(b,eb(String(d.message)))}x(b,fb(String(this.a),String(this.b)));return this.a};(function(){function a(a){this.t={};this.tick=function(a,b,c){this.t[a]=[void 0!=c?c:(new Date).getTime(),b];if(void 0==c)try{window.console.timeStamp("CSI/"+a)}catch(d){}};this.tick("start",null,a)}var b;window.performance&&(b=window.performance.timing);var c=b?new a(b.responseStart):new a;window.GPT_jstiming={Timer:a,load:c};if(b){var d=b.navigationStart,g=b.responseStart;0<d&&g>=d&&(window.GPT_jstiming.srt=g-d)}if(b){var f=window.GPT_jstiming.load;0<d&&g>=d&&(f.tick("_wtsrt",void 0,d),f.tick("wtsrt_",
"_wtsrt",g),f.tick("tbsd_","wtsrt_"))}try{b=null,window.chrome&&window.chrome.csi&&(b=Math.floor(window.chrome.csi().pageT),f&&0<d&&(f.tick("_tbnd",void 0,window.chrome.csi().startE),f.tick("tbnd_","_tbnd",d))),null==b&&window.gtbExternal&&(b=window.gtbExternal.pageT()),null==b&&window.external&&(b=window.external.pageT,f&&0<d&&(f.tick("_tbnd",void 0,window.external.startE),f.tick("tbnd_","_tbnd",d))),b&&(window.GPT_jstiming.pt=b)}catch(l){}})();if(window.GPT_jstiming){window.GPT_jstiming.P={};window.GPT_jstiming.Q=1;var nc=function(a,b,c){var d=a.t[b],g=a.t.start;if(d&&(g||c))return d=a.t[b][0],void 0!=c?g=c:g=g[0],d-g},oc=function(a,b,c){var d="";window.GPT_jstiming.srt&&(d+="&srt="+window.GPT_jstiming.srt,delete window.GPT_jstiming.srt);window.GPT_jstiming.pt&&(d+="&tbsrt="+window.GPT_jstiming.pt,delete window.GPT_jstiming.pt);try{window.external&&window.external.tran?d+="&tran="+window.external.tran:window.gtbExternal&&window.gtbExternal.tran?
d+="&tran="+window.gtbExternal.tran():window.chrome&&window.chrome.csi&&(d+="&tran="+window.chrome.csi().tran)}catch(g){}var f=window.chrome;if(f&&(f=f.loadTimes)){f().wasFetchedViaSpdy&&(d+="&p=s");if(f().wasNpnNegotiated){var d=d+"&npn=1",l=f().npnNegotiatedProtocol;l&&(d+="&npnv="+(encodeURIComponent||escape)(l))}f().wasAlternateProtocolAvailable&&(d+="&apa=1")}var w=a.t,E=w.start,f=[],l=[],y;for(y in w)if("start"!=y&&0!=y.indexOf("_")){var F=w[y][1];F?w[F]&&l.push(y+"."+nc(a,y,w[F][0])):E&&f.push(y+
"."+nc(a,y))}delete w.start;if(b)for(var I in b)d+="&"+I+"="+b[I];(b=c)||(b="https:"==document.location.protocol?"https://csi.gstatic.com/csi":"http://csi.gstatic.com/csi");return[b,"?v=3","&s="+(window.GPT_jstiming.sn||"gpt")+"&action=",a.name,l.length?"&it="+l.join(","):"",d,"&rt=",f.join(",")].join("")},pc=function(a,b,c){a=oc(a,b,c);if(!a)return"";b=new Image;var d=window.GPT_jstiming.Q++;window.GPT_jstiming.P[d]=b;b.onload=b.onerror=function(){window.GPT_jstiming&&delete window.GPT_jstiming.P[d]};
b.src=a;b=null;return a};window.GPT_jstiming.report=function(a,b,c){if("prerender"==document.webkitVisibilityState){var d=!1,g=function(){if(!d){b?b.prerender="1":b={prerender:"1"};var f;"prerender"==document.webkitVisibilityState?f=!1:(pc(a,b,c),f=!0);f&&(d=!0,document.removeEventListener("webkitvisibilitychange",g,!1))}};document.addEventListener("webkitvisibilitychange",g,!1);return""}return pc(a,b,c)}};var K=Array.prototype,qc=K.indexOf?function(a,b,c){return K.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},rc=K.forEach?function(a,b,c){K.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=n(a)?a.split(""):a,f=0;f<d;f++)f in g&&b.call(c,g[f],f,a)},sc=K.map?function(a,b,c){return K.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=Array(d),f=n(a)?a.split(""):
a,l=0;l<d;l++)l in f&&(g[l]=b.call(c,f[l],l,a));return g},tc=K.every?function(a,b,c){return K.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=n(a)?a.split(""):a,f=0;f<d;f++)if(f in g&&!b.call(c,g[f],f,a))return!1;return!0},uc=function(a,b){var c;t:{c=a.length;for(var d=n(a)?a.split(""):a,g=0;g<c;g++)if(g in d&&b.call(void 0,d[g],g,a)){c=g;break t}c=-1}return 0>c?null:n(a)?a.charAt(c):a[c]},vc=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},xc=
function(a,b){a.sort(b||wc)},zc=function(a){for(var b=yc,c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||wc;xc(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value},wc=function(a,b){return a>b?1:a<b?-1:0};var Ac=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},Bc=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};var L=function(a,b){this.b=a;this.a=b};L.prototype.ceil=function(){this.b=Math.ceil(this.b);this.a=Math.ceil(this.a);return this};L.prototype.floor=function(){this.b=Math.floor(this.b);this.a=Math.floor(this.a);return this};L.prototype.round=function(){this.b=Math.round(this.b);this.a=Math.round(this.a);return this};var M;t:{var Cc=h.navigator;if(Cc){var Dc=Cc.userAgent;if(Dc){M=Dc;break t}}M=""}var N=function(a){return-1!=M.indexOf(a)};var Ec=N("Opera")||N("OPR"),O=N("Trident")||N("MSIE"),Fc=N("Gecko")&&-1==M.toLowerCase().indexOf("webkit")&&!(N("Trident")||N("MSIE")),Gc=-1!=M.toLowerCase().indexOf("webkit"),Hc=function(){var a=h.document;return a?a.documentMode:void 0},Ic=function(){var a="",b;if(Ec&&h.opera)return a=h.opera.version,"function"==k(a)?a():a;Fc?b=/rv\:([^\);]+)(\)|;)/:O?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Gc&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(M))?a[1]:"");return O&&(b=Hc(),b>parseFloat(a))?String(b):a}(),Jc={},
Kc=function(a){if(!Jc[a]){for(var b=0,c=String(Ic).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(c.length,d.length),f=0;0==b&&f<g;f++){var l=c[f]||"",w=d[f]||"",E=RegExp("(\\d*)(\\D*)","g"),y=RegExp("(\\d*)(\\D*)","g");do{var F=E.exec(l)||["","",""],I=y.exec(w)||["","",""];if(0==F[0].length&&0==I[0].length)break;b=Aa(0==F[1].length?0:parseInt(F[1],10),0==I[1].length?0:parseInt(I[1],10))||Aa(0==F[2].length,0==I[2].length)||Aa(F[2],
I[2])}while(0==b)}Jc[a]=0<=b}},Lc=h.document,Mc=Lc&&O?Hc()||("CSS1Compat"==Lc.compatMode?parseInt(Ic,10):5):void 0;if(Fc||O){var Nc;if(Nc=O)Nc=O&&9<=Mc;Nc||Fc&&Kc("1.9.1")}O&&Kc("9");var P=function(a,b,c){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var Q=function(a){return p(a)&&isFinite(a)&&0==a%1&&0<=a},Oc=function(a){return a.replace(/[^a-zA-Z0-9]/g,function(a){return"&#"+a.charCodeAt()+";"})},Pc=function(){var a=null,b=window,c=null;try{for(;null!=b&&b!==a;){c=b.location.protocol;if("https:"===c)break;else if("http:"===c||"file:"===c)return"http:";a=b;b=b.parent}}catch(d){}return"https:"};var Qc=function(a){return m(a)&&2==a.length&&Q(a[0])&&Q(a[1])},Rc=function(a){return m(a)&&1<a.length&&p(a[0])&&p(a[1])};var Sc=function(a,b){this.b=a;this.a=b};Sc.prototype.getWidth=function(){return this.b};Sc.prototype.getHeight=function(){return this.a};var Tc=function(a){var b=[];if(m(a))if(Rc(a))b.push(new Sc(a[0],a[1]));else for(var c=0;c<a.length;++c){var d=a[c];Rc(d)&&b.push(new Sc(d[0],d[1]))}return b};var Uc=function(a,b,c){this.b=a;this.c=p(b)?b:0;this.a=this.b+"_"+this.c;this.d=c||"gpt_unit_"+this.a};e=Uc.prototype;e.getId=function(){return this.a};e.getName=function(){return this.b};e.getInstance=function(){return this.c};e.toString=Uc.prototype.getId;e.getDomId=function(){return this.d};var Vc={T:"slotRenderEnded"},Wc=function(a){this.slot=a;this.isEmpty=!1;this.lineItemId=this.creativeId=this.size=null};var R=function(a,b){this.name=a;this.b=b?b:new h.GPT_jstiming.Timer;this.b.name=a;this.a=[]};R.prototype.tick=function(a,b){this.b.tick(a,b)};R.prototype.M=function(a){a&&this.a.push(a)};R.prototype.report=function(){var a="https:"==h.location.protocol?"https://www.google.com/csi":"http://csi.gstatic.com/csi",b={};this.a.length&&(b.e=this.a.join());return h.GPT_jstiming.report(this.b,b,a)};R.prototype.c=function(a){Ba(window,function(){setTimeout(a,10)})};var S=function(a){this.name=a};fa(S,R);
S.prototype.tick=function(){};S.prototype.M=function(){};S.prototype.report=function(){return null};S.prototype.c=function(){};var Xc=function(){var a=h.GPT_jstiming.load,b,c=0.01;void 0==c&&(c=0.01);h.GPT_jstiming&&h.GPT_jstiming.load&&("http:"==h.location.protocol||"https:"==h.location.protocol)&&Math.random()<c?b=new R("global",a):b=new S("global");return b};(function(){if(!r()._gpt_timer_&&h.GPT_jstiming){var a=Xc();a.c(function(){a.tick("load");a.report()});s("_gpt_timer_",a)}return r()._gpt_timer_})();var T=function(){this.N=[];this.O={};this.b=!1;this.o={};this.log=B();x(this.log,jb(this.getName()),this)};e=T.prototype;e.getName=function(){return"unknown"};e.getVersion=function(){return"unversioned"};e.getSlots=function(){return this.N};e.getSlotIdMap=function(){return this.O};e.enable=function(){if(this.b)x(this.log,mb(),this);else{this.b=!0;try{this.B()}catch(a){A(this.log,nb(String(a)),this)}}};
e.A=function(a){this.N.push(a);this.O[a.getSlotId().getId()]=a;x(this.log,ob(this.getName(),a.getName()),this,a)};e.addEventListener=function(a,b){if("function"!=k(b))return z(this.log,hc(),this),this;if(!Bc(Vc,a))return z(this.log,jc(a),this),this;m(this.o[a])||(this.o[a]=[]);this.o[a].push(b);return this};
var Yc=function(a,b){var c=a.o.slotRenderEnded;m(c)&&rc(c,function(a){try{a(b)}catch(c){a=c&&n(c.name)?c.name:null;var f=c&&n(c.message)?c.message:null,l="";a&&f?l=a+": "+f:a?l=a:f&&(l=f);z(this.log,ic(l),this)}},a)};var Zc=function(){this.a={};this.b=!1;this.c=B();this.f=x(this.c,La());Ba(window,ea(Zc.prototype.d,this))},$c=function(a,b){var c=null;b in a.a&&(c=a.a[b]);return c},ad=function(){var a=U();P(a.a,function(a,c){a.enable();var d=r()._gpt_timer_;d&&d.M(c)})};Zc.prototype.d=function(){this.b=!0;x(this.c,Fa(),null,null,this.f)};var U=function(){var a=r();return a.service_manager_instance||(a.service_manager_instance=new Zc)};s("enableServices",function(){ad()});var bd=function(a,b){this.a=a;this.b=b};var cd=function(a){this.a=a},dd=function(a,b){var c=uc(a.a,function(a){a=a.a;return a.b<=b.b&&a.a<=b.a});return null==c?null:c.b},ed=function(a){if(!m(a)||2!=a.length)throw Error("Each mapping entry has to be an array of size 2");var b;b=a[0];if(!Qc(b))throw Error("Size has to be an array of two non-negative integers");b=new L(b[0],b[1]);if(m(a[1])&&0==a[1].length)a=[];else if(a=Tc(a[1]),0==a.length)throw Error("At least one slot size must be present");return new bd(b,a)};var fd=function(a,b,c,d){this.h=a;this.v=Tc(c);this.n=null;this.b=new Uc(a,b,d);this.c=[];this.f={};this.k=null;this.a=B();x(this.a,Ga(this.b.toString()),null,this);this.g=this.i=null;this.u=this.s="";this.j=!0;this.d={};this.o=[];this.r=!1;this.q=this.p=null;this.l=0;this.m=-1};e=fd.prototype;
e.set=function(a,b){var c=this.getName();(a=a||"")&&n(a)&&b?(this.f[a]=b,this.i||this.g?z(this.a,Na(a,String(b),c),null,this):x(this.a,Ma(a,String(b),c),null,this)):z(this.a,Oa(String(a),String(b),c),null,this);return this};e.get=function(a){return a in this.f?this.f[a]:null};e.getAttributeKeys=function(){var a=[];P(this.f,function(b,c){a.push(c)});return a};
e.addService=function(a){var b=U();if(!Bc(b.a,a))return z(this.a,kc(this.b.toString()),null,this),this;for(b=0;b<this.c.length;++b)if(a==this.c[b])return z(this.a,Pa(a.getName(),this.b.toString()),a,this),this;this.c.push(a);a.A(this);return this};e.getName=function(){return this.h};e.getAdUnitPath=function(){return this.h};e.getSlotId=function(){return this.b};e.getServices=function(){return this.c};e.getSizes=function(a,b){return p(a)&&p(b)&&this.n?dd(this.n,new L(a,b)):this.v};
e.defineSizeMapping=function(a){try{if(!m(a))throw Error("Size mapping has to be an array");var b=sc(a,ed);this.n=new cd(b)}catch(c){z(this.a,Qa(c.message),null,this)}return this};e.hasWrapperDiv=function(){return!!document.getElementById(this.b.getDomId())};e.setClickUrl=function(a){this.u=a;return this};e.getClickUrl=function(){return this.u};
e.setCategoryExclusion=function(a){if(n(a)&&!za(null==a?"":String(a))){var b=this.o;0<=qc(b,a)||b.push(a);x(this.a,Ra(a),null,this)}else z(this.a,Sa(),null,this);return this};e.clearCategoryExclusions=function(){x(this.a,Ta(),null,this);this.o=[];return this};e.getCategoryExclusions=function(){return vc(this.o)};
e.setTargeting=function(a,b){var c=[];m(b)?c=b:b&&c.push(b.toString());a&&n(a)?(x(this.a,Ua(a,c.join(),this.getName()),null,this),this.d[a]=c):z(this.a,Va(String(a),c.join(),this.getName()),null,this);return this};e.clearTargeting=function(){x(this.a,Wa(),null,this);this.d={};return this};e.getTargetingMap=function(){var a=this.d,b={},c;for(c in a)b[c]=a[c];return b};e.getTargeting=function(a){return a in this.d?vc(this.d[a]):[]};
e.getTargetingKeys=function(){var a=[];P(this.d,function(b,c){a.push(c)});return a};e.getOutOfPage=function(){return this.r};e.getAudExtId=function(){return this.l};e.setTagForChildDirectedTreatment=function(a){if(0===a||1===a)this.m=a};e.gtfcd=function(){return this.m};e.setCollapseEmptyDiv=function(a,b){this.q=(this.p=a)&&Boolean(b);b&&!a&&z(this.a,Xa(this.b.toString()),null,this);return this};e.getCollapseEmptyDiv=function(){return this.p};e.getDivStartsCollapsed=function(){return this.q};
var gd=function(a){if(!a.hasWrapperDiv())return A(a.a,Ya(a.b.toString()),null,a),!1;var b=h.document,c=a.b.getDomId(),b=b&&b.getElementById(c);if(!b)return A(a.a,Za(c,a.b.toString()),null,a),!1;c=a.k;return n(c)&&0<c.length?(a.renderStarted(),b.innerHTML=c,a.renderEnded(new Wc(a)),!0):!1};e=fd.prototype;e.fetchStarted=function(a){this.i=x(this.a,Ha(this.getName()),null,this);this.s=a};e.getContentUrl=function(){return this.s};e.fetchEnded=function(){x(this.a,Ia(this.getName()),null,this,this.i)};
e.renderStarted=function(){this.g=x(this.a,Ja(this.getName()),null,this)};e.renderEnded=function(a){x(this.a,Ka(this.getName()),null,this,this.g);rc(this.c,function(b){Yc(b,a)})};var hd=function(){this.a={};this.b={};this.c=B()},id=function(a,b,c,d){if(!n(b)||0>=b.length||!c)return null;b in a.a||(a.a[b]=[]);c=new fd(b,a.a[b].length,c,d);d=c.getSlotId().getDomId();if(a.b[d])return A(a.c,cb(d)),null;a.a[b].push(c);return a.b[c.getSlotId().getDomId()]=c};hd.prototype.d=function(a,b){var c=b||0,d=n(a)&&this.a[a]||[];return 0<=c&&c<d.length&&(d=d[c],d.getSlotId().getInstance()==c)?d:null};
var jd=function(a,b){return Ac(a.a,function(a){return 0<=qc(a,b)})},V=function(){var a=r();return a.slot_manager_instance||(a.slot_manager_instance=new hd)},W=function(a,b,c){var d=V();return d&&id(d,a,b,c)};s("defineOutOfPageSlot",function(a,b){var c=V();return c?(c=id(c,a,[1,1],b))?(c.r=!0,c):null:null});s("defineSlot",W);s("defineUnit",W);hd.prototype.find=hd.prototype.d;hd.getInstance=V;var kd=function(a){var b=B();if(n(a)){var c;c=V();if(c=c.b[a]?c.b[a]:null)if(c.j&&!c.hasWrapperDiv())z(c.a,$a(c.h,c.b.getDomId()),null,c);else for(a=0;a<c.c.length;++a)c.c[a].b&&c.c[a].n(c);else A(b,bb(String(a)))}else A(b,ab(String(a)))};s("display",kd,!0);var ld=null,md=Fc||Gc||Ec||"function"==typeof h.atob;var od=function(a,b,c){if(!n(a)||0>=a.length||!Boolean(b)||!c)A(B(),db(String(a),String(b),String(c)));else{var d=nd++;this.a=new fd(a,d,b);this.a.addService(c);this.b=c}},nd=1;e=od.prototype;e.setClickUrl=function(a){this.a.setClickUrl(a);return this};e.setTargeting=function(a,b){this.a.setTargeting(a,b);return this};e.setAudExtId=function(a){Q(a)&&(this.a.l=a);return this};e.setTagForChildDirectedTreatment=function(a){this.a.setTagForChildDirectedTreatment(a);return this};
e.display=function(){pd(this.b,this.a)};var X=function(){T.call(this);this.f=!1;this.a=null;this.F=0;this.l=-1;this.m={};this.k={};this.r=[];this.D=this.q="";this.J=!1;this.H=!0;this.g=this.G=!1;this.c=!0;this.p=this.h=this.I=!1;this.d=[];this.i=[];this.j=[];this.v=!1;this.w={};this.s=!1;this.u=-1;this.K=this.L="";this.C=[]};fa(X,T);
var qd={adsense_ad_format:"google_ad_format",adsense_ad_types:"google_ad_type",adsense_allow_expandable_ads:"google_allow_expandable_ads",adsense_background_color:"google_color_bg",adsense_bid:"google_bid",adsense_border_color:"google_color_border",adsense_channel_ids:"google_ad_channel",adsense_content_section:"google_ad_section",adsense_cpm:"google_cpm",adsense_ed:"google_ed",adsense_encoding:"google_encoding",adsense_family_safe:"google_safe",adsense_feedback:"google_feedback",adsense_flash_version:"google_flash_version",
adsense_font_face:"google_font_face",adsense_font_size:"google_font_size",adsense_hints:"google_hints",adsense_host:"google_ad_host",adsense_host_channel:"google_ad_host_channel",adsense_host_tier_id:"google_ad_host_tier_id",adsense_keyword_type:"google_kw_type",adsense_keywords:"google_kw",adsense_line_color:"google_line_color",adsense_link_color:"google_color_link",adsense_relevant_content:"google_contents",adsense_reuse_colors:"google_reuse_colors",adsense_targeting:"google_targeting",adsense_targeting_types:"google_targeting",
adsense_test_mode:"google_adtest",adsense_text_color:"google_color_text",adsense_ui_features:"google_ui_features",adsense_ui_version:"google_ui_version",adsense_url_color:"google_color_url",alternate_ad_iframe_color:"google_alternate_color",alternate_ad_url:"google_alternate_ad_url",demographic_age:"google_cust_age",demographic_ch:"google_cust_ch",demographic_gender:"google_cust_gender",demographic_interests:"google_cust_interests",demographic_job:"google_cust_job",demographic_l:"google_cust_l",demographic_lh:"google_cust_lh",
demographic_u_url:"google_cust_u_url",demographic_unique_id:"google_cust_id",document_language:"google_language",geography_override_city:"google_city",geography_override_country:"google_country",geography_override_region:"google_region",page_url:"google_page_url"};e=X.prototype;e.set=function(a,b){n(a)&&0<a.length?(this.m[a]=b,x(this.log,kb(a,String(b),this.getName()),this,null)):z(this.log,lb(String(a),String(b),this.getName()),this,null);return this};e.get=function(a){return this.m[a]};
e.getAttributeKeys=function(){var a=[];P(this.m,function(b,c){a.push(c)});return a};e.display=function(a,b,c,d){this.enable();a=c?W(a,b,c):W(a,b);a.addService(this);d&&a.setClickUrl(d);kd(a.getSlotId().getDomId())};
e.B=function(){if(this.c){if(!this.f){var a=document,b=a.createElement("script");U();b.async=!0;b.type="text/javascript";b.src=rd();(a=a.getElementsByTagName("head")[0]||a.getElementsByTagName("body")[0])?(x(this.log,tb("GPT PubAds"),this),a.appendChild(b),this.f=!0):A(this.log,ub("GPT PubAds"),this)}}else sd(this)};e.getName=function(){return"publisher_ads"};
var rd=function(){return Pc()+"//partner.googleadservices.com/gpt/pubads_impl_39.js"},sd=function(a){var b=U();a.f||b.b||(b=document,a.f=!0,b.write('<script type="text/javascript" src="'+Oc(rd())+'">\x3c/script>'))};
X.prototype.fillSlot=function(a){x(this.log,xb());this.a.fillSlot(a);this.w[a.getName()]=!0;if(this.a)if(this.v)(a=this.getSlots()[0])&&a.getName()in this.w&&(this.refresh(),this.v=!1);else for(a=0;a<this.j.length;a++){var b=this.j[a];b[0].getName()in this.w&&(this.refresh(b),K.splice.call(this.j,a,1),a--)}else A(this.log,wb(),this)};
X.prototype.onGoogleAdsJsLoad=function(a){this.a=a;x(this.log,vb("GPT"),this);this.a.setCookieOptions(this.F);this.a.setTagForChildDirectedTreatment(this.l);this.a.setCenterAds(this.I);this.H||this.a.disableFetch();this.h&&this.a.collapseEmptyDivs(this.p);if(this.g){this.c?this.a.enableAsyncSingleRequest():this.a.enableSingleRequest();td(this);a=this.getSlots();for(var b=0;b<a.length;++b)ud(this,a[b])}else this.c&&this.a.enableAsyncRendering();this.G&&this.a.disableInitialLoad();vd(this);wd(this);
if(0<this.d.length)for(b=0;b<this.d.length;++b)this.n(this.d[b]);if(0<this.i.length)for(b=0;b<this.i.length;++b)pd(this,this.i[b])};X.prototype.A=function(a){this.c||(a.j=!1);T.prototype.A.call(this,a)};
X.prototype.n=function(a){if(U().b&&!this.c)A(this.log,yb(),this);else if(this.a)td(this),ud(this,a)&&this.fillSlot(a);else if(this.c||this.f&&0==this.d.length){for(var b=!1,c=0;c<this.d.length;++c)a===this.d[c]&&(b=!0);b||(x(this.log,zb(a.getName(),"GPT"),this,a),this.d.push(a))}else A(this.log,Bb(a.getName()),this,a)};
var ud=function(a,b){if(a.a&&null==a.a.addSlot(b))return A(a.log,Cb(b.getName()),a,b),!1;for(var c=b.getAttributeKeys(),d=0;d<c.length;++d)c[d]in qd?a.a.addAdSenseSlotAttribute(b,qd[c[d]],String(b.get(c[d]))):z(a.log,Eb(String(c[d]),String(b.get(c[d])),b.getName()),a,b);return!0},td=function(a){if(!a.J){a.J=!0;for(var b=a.getAttributeKeys(),c=0;c<b.length;++c)b[c]in qd?a.a.addAdSensePageAttribute(qd[b[c]],String(a.get(b[c]))):z(a.log,Db(String(b[c]),String(a.get(b[c]))),a);a.a.addAdSensePageAttribute("google_tag_info",
"v2");P(a.k,function(a,b){if(m(a))for(var c=0;c<a.length;++c)this.a.addAttribute(b,a[c])},a);rc(a.r,function(a){this.a.addPageCategoryExclusion(a)},a);a.a.setPublisherProvidedId(a.D);a.q&&a.a.setLocation(a.q);rc(a.C,function(a){this.a.setApiExperiment(a)},a)}};e=X.prototype;e.setCookieOptions=function(a){if(!Q(a))return z(this.log,Fb(String(a)),this),this;this.F=a;this.a&&this.a.setCookieOptions(a);return this};
e.setTagForChildDirectedTreatment=function(a){if(0!==a&&1!==a)return z(this.log,gc(String(a)),this),this;this.l=a;this.a&&this.a.setTagForChildDirectedTreatment(a);return this};e.clearTagForChildDirectedTreatment=function(){this.l=-1;this.a&&this.a.setTagForChildDirectedTreatment(-1);return this};
e.setTargeting=function(a,b){var c=null;n(b)?c=[b]:m(b)?c=b:aa(b)&&(c=vc(b));var d=c?c.join():String(b);if(!n(a)||za(null==a?"":String(a))||!c)return z(this.log,fc(String(a),d,this.getName()),this),this;this.k[a]=c;x(this.log,ec(a,d,this.getName()),this);if(this.a)for(this.a.clearAttribute(a),d=0;d<c.length;++d)this.a.addAttribute(a,c[d]);return this};
e.clearTargeting=function(a){if(!n(a)||za(null==a?"":String(a)))return z(this.log,$b(String(a),this.getName()),this),this;if(!this.k[a])return z(this.log,ac(a,this.getName()),this),this;delete this.k[a];x(this.log,Zb(a,this.getName()),this);this.a&&this.a.clearAttribute(a);return this};e.setCategoryExclusion=function(a){if(!n(a)||za(null==a?"":String(a)))return z(this.log,cc(),this),this;var b=this.r;0<=qc(b,a)||b.push(a);x(this.log,bc(a),this);this.a&&this.a.addPageCategoryExclusion(a);return this};
e.clearCategoryExclusions=function(){this.r=[];x(this.log,dc(),this);this.a&&this.a.clearPageCategoryExclusions();return this};e.noFetch=function(){this.a?z(this.log,Hb("noFetch","pubads"),this):this.H=!1};e.disableInitialLoad=function(){this.a?z(this.log,Hb("disableInitialLoad","pubads"),this):this.G=!0};e.enableSingleRequest=function(){this.b&&!this.g?z(this.log,Gb("enableSingleRequest"),this):(x(this.log,Jb("single request"),this),this.g=!0);return this.g};
e.enableAsyncRendering=function(){this.b&&!this.c?z(this.log,Gb("enableAsyncRendering"),this):(x(this.log,Jb("asynchronous rendering"),this),this.c=!0);return this.c};e.enableSyncRendering=function(){if(this.b&&this.c)z(this.log,Gb("enableSyncRendering"),this);else{x(this.log,Jb("synchronous rendering"),this);this.c=!1;for(var a=this.getSlots(),b=0;b<a.length;++b)a[b].j=!1}return!this.c};e.setCentering=function(a){x(this.log,Kb("centering",String(a)),this);this.I=a};
e.setPublisherProvidedId=function(a){this.b?z(this.log,Ib("setPublisherProvidedId",a),this):(x(this.log,Kb("PPID",a),this),this.D=a);return this};e.definePassback=function(a,b){return new od(a,b,this)};var pd=function(a,b){sd(a);a.a?a.a.passback(b):(x(a.log,Ab(b.getName(),"GPT"),a,b),a.i.push(b))};e=X.prototype;
e.refresh=function(a){if(a&&!m(a))z(this.log,Tb("Slots to refresh"),this);else{var b=null;if(a&&(b=xd(this,a),!b.length)){A(this.log,Lb("Refresh"),this);return}this.a?(x(this.log,Qb(),this),this.a.refresh(b)):this.g?(x(this.log,Pb(),this),b?(a=this.j,0<=qc(a,b)||a.push(b)):this.v=!0):z(this.log,Mb(),this)}};
e.videoRefresh=function(a,b,c,d,g,f){if(a&&!m(a))z(this.log,Tb("Slot list"),this);else if(b&&!p(b))z(this.log,J("Correlator"),this);else if(c&&!p(c))z(this.log,J("Pod number"),this);else if(d&&!p(d))z(this.log,J("Pod position"),this);else if(g&&!ba(g))z(this.log,Ub("Persistent roadblocks only"),this);else if(f&&!ba(f))z(this.log,Ub("Clear unfilled slots"),this);else if(this.a){var l=null;if(a&&(l=xd(this,a),!l.length)){A(this.log,Lb("refresh"),this);return}x(this.log,Qb(),this);this.a.refresh(l,b,
c,d,g,f)}else z(this.log,Mb(),this)};e.enableVideoAds=function(){this.s=!0;vd(this)};e.setVideoContent=function(a,b){this.s=!0;this.L=a;this.K=b;vd(this)};e.getVideoContent=function(){return this.a?this.a.getVideoContentInformation():null};var vd=function(a){a.s&&a.a&&a.a.setVideoContentInformation(a.L,a.K)},wd=function(a){a.a&&a.a.setCorrelator(-1==a.u?void 0:a.u)};e=X.prototype;e.getCorrelator=function(){return 0==this.getSlots().length?"not_available":this.a?this.a.getCorrelator():"not_loaded"};
e.setCorrelator=function(a){if(!Q(a)||0===a)return z(this.log,lc(String(a)),this),this;this.u=a;wd(this);return this};e.getVideoStreamCorrelator=function(){if(!this.a)return 0;var a=this.a.getVideoStreamCorrelator();return isNaN(a)?0:a};e.isAdRequestFinished=function(){return this.a?this.a.isAdRequestFinished():!1};e.isSlotAPersistentRoadblock=function(a){return this.a?this.a.isSlotAPersistentRoadblock(a):!1};
e.collapseEmptyDivs=function(a){this.h?z(this.log,Xb(),this):this.b?z(this.log,Gb("collapseEmptyDivs"),this):(this.p=Boolean(a),x(this.log,Wb(String(this.p)),this),this.h=!0);return this.h};e.clear=function(a){if(!this.a)return z(this.log,Ob(),this),!1;var b=null;if(a&&(b=xd(this,a),0==b.length))return A(this.log,Lb("Clear"),this),!1;x(this.log,Rb(),this);return this.a.clearSlotContents(b)};
e.clearNoRefreshState=function(){this.a?(x(this.log,Sb(),this),this.a.clearNoRefreshState()):z(this.log,Nb(),this)};
e.setLocation=function(a,b,c){var d="role:1 producer:12";if(void 0!==b){if(!p(a))return z(this.log,J("Latitude")),this;if(!p(b))return z(this.log,J("Longitude")),this;d+=" latlng{ latitude_e7: "+Math.round(1E7*a)+" longitude_e7: "+Math.round(1E7*b)+"}";if(void 0!==c){if(isNaN(c))return z(this.log,J("Radius")),this;d+=" radius:"+Math.round(c)}}else 50<a.length&&(b=a.substring(0,50),z(this.log,Vb(String(a),"50",b)),a=b),d+=' loc:"'+a+'"';if(md)d=h.btoa(d);else{a=d;d=[];for(c=b=0;c<a.length;c++){for(var g=
a.charCodeAt(c);255<g;)d[b++]=g&255,g>>=8;d[b++]=g}if(!aa(d))throw Error("encodeByteArray takes an array as a parameter");if(!ld)for(ld={},a=0;65>a;a++)ld[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);a=ld;b=[];for(c=0;c<d.length;c+=3){var f=d[c],l=(g=c+1<d.length)?d[c+1]:0,w=c+2<d.length,E=w?d[c+2]:0,y=f>>2,f=(f&3)<<4|l>>4,l=(l&15)<<2|E>>6,E=E&63;w||(E=64,g||(l=64));b.push(a[y],a[f],a[l],a[E])}d=b.join("")}this.q="a "+d;return this};
e.getVersion=function(){return this.a?this.a.getVersion():void 0};e.forceExperiment=function(a){this.b?z(this.log,Ib("forceExperiment",a),this):this.C.push(a)};var Y=function(){var a=U(),b=$c(a,"publisher_ads");if(!b){var c=b=new X;a.a[c.getName()]=c}return b},xd=function(a,b){for(var c=[],d=0;d<b.length;++d){var g=b[d];g instanceof fd?c.push(g):z(a.log,Yb(String(d)),a)}return c};s("pubads",Y);var Z=function(){T.call(this);this.m=!0;this.f=this.k=!1;this.h=0;this.j=this.i=void 0;this.l=this.g=!1;this.d={};this.a=!1;this.c={}};fa(Z,T);e=Z.prototype;e.set=function(a,b){n(a)&&0<a.length?(this.c[a]=b,x(this.log,kb(a,String(b),this.getName()),this,null)):z(this.log,lb(String(a),String(b),this.getName()),this,null);return this};e.get=function(a){return this.c[a]};e.getAttributeKeys=function(){var a=[];P(this.c,function(b,c){a.push(c)});return a};
e.display=function(a,b,c,d){this.enable();a=c?W(a,b,c):W(a,b);a.addService(this);d&&a.setClickUrl(d);kd(a.getSlotId().getDomId())};
e.B=function(){if(this.m){if(!this.l){var a=document,b=document.createElement("script");b.async=!0;b.type="text/javascript";b.src=yd();try{var c=a.getElementsByTagName("script")[0];x(this.log,tb("GPT CompanionAds"),this);this.l=!0;c.parentNode&&c.parentNode.insertBefore(b,c)}catch(d){A(this.log,ub("GPT CompanionAds"),this)}}}else this.g||(h.document.write('<script type="text/javascript" src="'+Oc(yd())+'">\x3c/script>'),this.g=!0)};e.enableSyncLoading=function(){this.m=!1};
e.setRefreshUnfilledSlots=function(a){ba(a)&&(this.k=a)};e.setClearUnfilledSlots=function(a){ba(a)&&(this.f=a)};e.notifyUnfilledSlots=function(a){if(this.k)zd(this,Ad(this,a));else if(this.f){a=Ad(this,a);var b=Y();b.b?b.clear(a):A(this.log,qb("PubAds","clear"))}};e.isRoadblockingSupported=function(){var a=Y();if(!a.b)return!1;var a=a.getSlots(),b=this.getSlots();if(a.length!=b.length)return!1;for(var c=0;c<b.length;++c){for(var d=!1,g=0;g<a.length;++g)if(b[c]===a[g]){d=!0;break}if(!d)return!1}return!0};
e.refreshAllSlots=function(){this.k&&zd(this,null)};e.setVideoSessionInfo=function(a,b,c,d,g,f,l){this.a=!1;this.h=0;this.j=this.i=void 0;this.h=a;void 0!==g&&(this.i=g);void 0!==f&&(this.j=f);void 0!==l&&(this.a=l)};e.setVideoSession=function(a,b,c,d){this.setVideoSessionInfo(a,"","","",b,c,d)};e.getDisplayAdsCorrelator=function(){return Y().getCorrelator()};e.getVideoStreamCorrelator=function(){return Y().getVideoStreamCorrelator()};
var zd=function(a,b){var c=Y();if(c.b){if(a.a){if(!a.isRoadblockingSupported()){z(a.log,pb());return}c.clearNoRefreshState();c.clear()}c.videoRefresh(b,a.h,a.i,a.j,a.a,a.f)}else A(a.log,qb("PubAds","refresh"))};Z.prototype.isSlotAPersistentRoadblock=function(a){var b=Y();if(b.b&&jd(V(),a))return b.isSlotAPersistentRoadblock(a);A(this.log,rb());return!1};var Ad=function(a,b){for(var c=a.getSlotIdMap(),d=[],g=0;g<b.length;++g){var f=b[g];f in c?d.push(c[f]):z(a.log,sb(),a)}return d};
Z.prototype.getName=function(){return"companion_ads"};var yd=function(){return Pc()+"//pagead2.googlesyndication.com/pagead/show_companion_ad.js"};Z.prototype.onImplementationLoaded=function(){x(this.log,vb("GPT CompanionAds"),this);this.g=!0};var Bd=function(a,b){var c=b&&b.getSlotId().getId();return c&&c in a.d&&b.hasWrapperDiv()&&a.b&&!a.isSlotAPersistentRoadblock(b)?(b.k=a.d[c],gd(b)):!1};Z.prototype.n=function(a){Bd(this,a)};
Z.prototype.fillSlot=function(a,b){return jd(V(),a)&&n(b)&&0<b.length?(this.d[a.getSlotId().toString()]=b,Bd(this,a)):!1};s("companionAds",function(){var a=U(),b=$c(a,"companion_ads");if(!b){var c=b=new Z;a.a[c.getName()]=c}return b});var $=function(){T.call(this);this.a={};this.c={}};fa($,T);e=$.prototype;e.getName=function(){return"content"};e.set=function(a,b){n(a)&&0<a.length?(this.a[a]=b,x(this.log,kb(a,String(b),this.getName()),this,null)):z(this.log,lb(String(a),String(b),this.getName()),this,null);return this};e.get=function(a){return this.a[a]};e.getAttributeKeys=function(){var a=[];P(this.a,function(b,c){a.push(c)});return a};
e.display=function(a,b,c,d){this.enable();a=c?W(a,b,c):W(a,b);a.addService(this);d&&a.setClickUrl(d);kd(a.getSlotId().getDomId())};var Cd=function(a,b){var c=b&&b.getSlotId().getId();c in a.c&&a.b&&b.hasWrapperDiv()&&!b.g&&(b.k=a.c[c],gd(b))};$.prototype.B=function(){for(var a=this.getSlots(),b=0;b<a.length;++b)Cd(this,a[b])};$.prototype.n=function(a){Cd(this,a)};$.prototype.setContent=function(a,b){jd(V(),a)&&n(b)&&0<b.length&&(this.c[a.getSlotId().getId()]=b,Cd(this,a))};
s("content",function(){var a=U(),b=$c(a,"content");if(!b){var c=b=new $;a.a[c.getName()]=c}return b});var Dd=/#|$/,Ed=function(a,b){var c=a.search(Dd),d;t:{d=0;for(var g=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+g),!f||61==f||38==f||35==f)break t;d+=g+1}d=-1}if(0>d)return null;g=a.indexOf("&",d);if(0>g||g>c)g=c;d+=b.length+1;return decodeURIComponent(a.substr(d,g-d).replace(/\+/g," "))};var Fd=function(){var a=window,b=document;if(r()._pubconsole_disable_)return!1;var c;c=document.cookie.split("google_pubconsole=");if(c=2==c.length?c[1].split(";")[0]:"")if(c=c.split("|"),0<c.length&&("1"==c[0]||"0"==c[0]))return!0;U();c=!1;try{c=a.top.document.URL===b.URL}catch(d){}a=c?b.URL:b.referrer;return null!==Ed(a,"google_debug")||null!==Ed(a,"google_console")||null!==Ed(a,"google_force_console")||null!==Ed(a,"googfc")},Gd=function(){if(Fd()){var a=document,b=a.createElement("script");b.type=
"text/javascript";b.src=Pc()+"//publisherconsole.appspot.com/js/loader.js";b.async=!0;(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(b,a)}};"complete"===document.readyState?Gd():Ba(window,Gd);s("disablePublisherConsole",function(){r()._pubconsole_disable_=!0});var Hd=function(){this.c=[];this.b=!1;this.a=B()};Hd.prototype.addSize=function(a,b){if(!Qc(a))return this.b=!0,z(this.a,hb(String(a))),this;var c;if(c=!Qc(b))c=!(m(b)&&tc(b,Qc));if(c)return this.b=!0,z(this.a,gb(String(b))),this;this.c.push([a,b]);return this};Hd.prototype.build=function(){if(this.b)return z(this.a,ib()),null;zc(this.c);return this.c};
var yc=function(a,b){var c;t:{c=b[0];for(var d=a[0],g=wc,f=Math.min(c.length,d.length),l=0;l<f;l++){var w=g(c[l],d[l]);if(0!=w){c=w;break t}}c=wc(c.length,d.length)}return c};s("sizeMapping",function(){return new Hd});s("getVersion",function(){return"39"});var Id=r().cmd;if(!Id||m(Id)){var Jd=r().cmd=new mc;Id&&0<Id.length&&Jd.push.apply(Jd,Id)}(function(){var a=document.getElementsByTagName("script");0<a.length&&(a=a[a.length-1],a.src&&0<=a.src.indexOf("/tag/js/gpt.js")&&a.innerHTML&&!a.googletag_executed&&(a.googletag_executed=!0,eval(a.innerHTML)))})();})()
