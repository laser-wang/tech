(function(){var window=this;var d=this,aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var f=function(){this.a="";this.b=ca};f.prototype.s=!0;f.prototype.j=function(){return this.a};var da=function(a){return a instanceof f&&a.constructor===f&&a.b===ca?a.a:"type_error:TrustedResourceUrl"},ca={},ea=function(a){var b=new f;b.a=a;return b};var g=function(){this.l="";this.A=fa};g.prototype.s=!0;g.prototype.j=function(){return this.l};var ha=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,fa={},ia=function(a){var b=new g;b.l=a;return b};ia("about:blank");var k;a:{var ja=d.navigator;if(ja){var ka=ja.userAgent;if(ka){k=ka;break a}}k=""};var m=function(a){m[" "](a);return a};m[" "]=aa;var q=function(){return d.googletag||(d.googletag={})};var r={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:0,17:0,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,37:.01,38:.001,47:1E-4,53:"",54:0,57:0,58:1,159:1,60:0,63:0,65:.01,66:1E-5,67:0,68:0,69:.99,71:0,73:.001,74:0,75:"",162:0,163:"",76:"",77:.001,78:0,88:1,79:1,81:.001,83:1E-4,84:0,85:0,87:.2,89:1,90:0,91:0,96:1,97:0,99:.01,101:.001,103:.01,104:"/pagead/js/rum.js",105:.001,106:"1-0-14",107:"1-0-13",110:0,113:1,114:0,115:.01,116:.001,117:.01,118:.95,123:0,120:.05,124:.95,121:.01,169:.01,122:.01,125:.01,126:0,127:.001,129:0,131:"",132:0,156:.05,133:0,134:.01,135:0,137:.001,167:1,138:"",143:.001,168:1E-4,144:.001,141:1,151:.01,157:.05,158:.001,164:.05,150:"",153:.05,154:1,165:1,166:1,179:0,170:!1,160:"",176:.01,177:.01,152:[],171:.01,172:null,175:"21061296,21061297,21061298,21061299,21061254,21061255,21061338,21061339,21061340,21061341",178:.001,180:null};r[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(window);r[49]=(new Date).getTime();r[36]=/^true$/.test(!1);r[46]=/^true$/.test(!0);r[148]=/^true$/.test(!1);var t=function(){var a={},b;for(b in r)a[b]=r[b];this.a=a};t.prototype.get=function(a){return this.a[a]};t.prototype.set=function(a,b){this.a[a]=b};t.b=void 0;t.a=function(){return t.b?t.b:t.b=new t};var la=["21060621","21060622","21060833","21060713"],ma=["21061212","21061213","21061214","21061277"],na=t.a().a,oa=q(),pa=oa._vars_,u;for(u in pa)na[u]=pa[u];oa._vars_=na;var qa=function(){return"167"},ra=q();ra.hasOwnProperty("getVersion")||(ra.getVersion=qa);var sa=function(){var a=aa;return function(){if(a){var b=a;a=null;b()}}};var ta=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var va=function(){var a=d;this.b=a=void 0===a?d:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.f=[];this.o=!1;a:{var b=[d.top];a=[];for(var c=0,e;e=b[c++];){a.push(e);try{if(e.frames)for(var h=e.frames.length,n=0;n<h&&50>b.length;++n)b.push(e.frames[n])}catch(H){}}b:{try{var v=d.parent;if(v&&v!=d){var l=v;break b}}catch(H){}l=null}(h=l)&&a.unshift(h);a.unshift(d);var p;for(h=0;h<a.length;++h)try{var A=a[h],xa=w(A);if(xa){this.a=ua(xa);if(2!=this.a)break a;var J;if(J=!p){l=void 0;try{if(l=!!A&&null!=A.location.href)c:{try{m(A.foo);l=!0;break c}catch(H){}l=!1}J=l}catch(H){J=!1}}J&&(p=A)}}catch(H){}this.b=p||this.b}},x=function(a){if(2!=wa(a)){for(var b=1==wa(a),c=0;c<a.f.length;c++)try{a.f[c](b)}catch(e){}a.f=[]}},ya=function(a){var b=w(a.b);b&&2==a.a&&(a.a=ua(b))},wa=function(a){ya(a);return a.a},za=function(a){var b=y;b.f.push(a);if(2!=b.a)x(b);else if(b.o||(ta(b.b,function(a){var c=w(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}x(b)}}),b.o=!0),w(b.b))x(b);else{a=b.b.document.createElement("iframe");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.display="none";a.onload=function(){ya(b);x(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},Aa=function(a,b){try{return!!a.frames[b]}catch(c){return!1}},w=function(a){return a.frames[m("detect_3p_cookie")]||null},ua=function(a){return Aa(a,"3p_cookie_yes")?1:Aa(a,"3p_cookie_no")?0:2};var z=null;var Ba=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=d.navigator&&d.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),B=function(a,b){var c="script";c=void 0===c?"":c;var e=a.createElement("link");e.rel="preload";b instanceof f?b=da(b):b instanceof g?b=b instanceof g&&b.constructor===g&&b.A===fa?b.l:"type_error:SafeUrl":(b instanceof g||(b=b.s?b.j():String(b),ha.test(b)||(b="about:invalid#zClosurez"),b=ia(b)),b=b.j());e.href=b;c&&(e.as=c);(a=a.getElementsByTagName("head")[0])&&a.appendChild(e)};var Ca=/^\.google\.(com?\.)?[a-z]{2,3}$/,Da=/\.(cn|com\.bi|do|sl)$/,C=function(a){return Ca.test(a)&&!Da.test(a)},D=d,y,Ea=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(d.location.hostname)];E[3]>=+new Date&&b.push("adsid="+encodeURIComponent(E[1]));return a+"?"+b.join("&")},E,F,G=function(){D=d;E=D.googleToken=D.googleToken||{};var a=+new Date;E[1]&&E[3]>a&&0<E[2]||(E[1]="",E[2]=-1,E[3]=-1,E[4]="",E[6]="");F=D.googleIMState=D.googleIMState||{};C(F[1])||(F[1]=".google.com");"array"==ba(F[5])||(F[5]=[]);"boolean"==typeof F[6]||(F[6]=!1);"array"==ba(F[7])||(F[7]=[]);"number"==typeof F[8]||(F[8]=0)},Fa=function(a){try{a()}catch(b){d.setTimeout(function(){throw b;},0)}},Ha=function(a){"complete"==d.document.readyState||"loaded"==d.document.readyState||d.currentScript&&d.currentScript.async?Ga(3):a()},Ia=0,I={g:function(){return 0<F[8]},m:function(){F[8]++},u:function(){0<F[8]&&F[8]--},v:function(){F[8]=0},c:function(){},w:function(){return!1},i:function(){return F[5]},h:Fa},K={g:function(){return F[6]},m:function(){F[6]=!0},u:function(){F[6]=!1},v:function(){F[6]=!1},c:function(){},w:function(){return".google.com"!=F[1]&&2<++Ia},i:function(){return F[7]},h:function(a){Ha(function(){Fa(a)})}},Ga=function(a){if(1E-5>Math.random()){d.google_image_requests||(d.google_image_requests=[]);var b=d.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;d.google_image_requests.push(b)}};I.c=function(){if(!I.g()){var a=d.document,b=function(b){var c=Ea("js",b);B(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return d.processGoogleToken({},2)};c=ea(c);b.src=da(c);try{(a.head||a.body||a.documentElement).appendChild(b),I.m()}catch(v){}},c=F[1];b(c);".google.com"!=c&&b(".google.com");b={};var e=(b.newToken="FBT",b);d.setTimeout(function(){return d.processGoogleToken(e,1)},1E3)}};K.c=function(){if(!K.g()){var a=d.document,b=Ea("sync.js",F[1]);B(a,b);b=b.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"});var c=m("script"),e="<"+c+' src="'+b+'"></'+c+">"+("<"+c+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Ha(function(){a.write(e);K.m()})}};var Ja=function(a,b){G();var c=D.googleToken[5]||0;a&&(0!=c||E[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));E[3]>=+new Date&&E[2]>=+new Date||b.c()},La=function(a){d.processGoogleToken=d.processGoogleToken||function(a,c){return Ka(I,a,c)};Ja(a,I)},Ma=function(a){d.processGoogleTokenSync=d.processGoogleTokenSync||function(a,c){return Ka(K,a,c)};Ja(a,K)},Na=function(a){y=y||new va;za(function(b){b&&a()})},Ka=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var e=b.newToken||"",h=parseInt(b.freshLifetimeSecs||"",10)||3600,n=parseInt(b.validLifetimeSecs||"",10)||86400,v=b["1p_jar"]||"";b=b.pucrd||"";G();1==c?a.v():a.u();if(!e&&a.w())C(".google.com")&&(F[1]=".google.com"),a.c();else{var l=D.googleToken=D.googleToken||{},p=!(E[3]>=+new Date)&&0!=c;if(0==c&&e&&"string"==typeof e&&0<h&&0<n&&"string"==typeof v||p)p=+new Date,h=p+1E3*h,n=p+1E3*n,Ga(c),l[5]=c,l[1]=e,l[2]=h,l[3]=n,l[4]=v,l[6]=b,G();if(e||!a.g()){c=a.i();for(e=0;e<c.length;e++)a.h(c[e]);c.length=0}}};m("partner.googleadservices.com");var Oa=m("www.googletagservices.com"),L=!1,M=!1,N="",O="",P={},Pa=(P["21061282"]="/gpt/pubads_impl_nr_c_",P["21061283"]="/gpt/pubads_impl_nr_",P["21061289"]="/gpt/pubads_impl_moa_c_",P["21061290"]="/gpt/pubads_impl_moa_e_",P),Qa=t.a().get(46)&&!t.a().get(6);N=Qa?"http:":"https:";O=t.a().get(Qa?2:3);var Q=function(a,b){var c;if(null===z){z="";try{if(c=d.top.location.hash){var e=c.match(/\bdeid=([\d,]+)/);z=e?e[1]:""}}catch(n){}}if(c=(c=z)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{if(!(1E-4>Math.random())&&(c=Math.random(),c<a.length*b)){try{var h=new Uint32Array(1);d.crypto.getRandomValues(h);c=h[0]/65536/65536}catch(n){c=Math.random()}a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};var R=q(),S=R.fifWin||window,T=S.document,Ra=[],Sa=q();Sa.hasOwnProperty("cmd")||(Sa.cmd=Ra);if(R.evalScripts)R.evalScripts();else{switch(Q(ma,t.a().get(178))){case "21061213":M=!0;break;case "21061214":L=!0;break;case "21061277":L=M=!0}var U=t.a().get(138)||Q(la,t.a().get(137))||Q(["21061149"],t.a().get(167)),V=Q(["21061316","21061317"],.01);V&&("21061317"==V?(t.a().set(173,Oa),t.a().set(174,Oa)):t.a().set(163,V),t.a().get(152).push(V));-1!=k.indexOf("iPhone")&&t.a().set(79,0);var Ta=t.a().get(160);Ta&&t.a().get(152).push(Ta);if(U)try{var Ua=t.a().get(150);Ua&&(G(),C(Ua)&&(F[1]=Ua));t.a().set(138,U)}catch(a){}t.a().set(172,T.currentScript);var Va=S.performance;if(Va&&Va.now){var Wa=Va.now();(S.google_js_reporting_queue=S.google_js_reporting_queue||[]).push({label:"1",type:9,value:Wa,uniqueId:"rt."+Math.random()})}var Xa;var W=t.a(),X=W.get(76);if(X)Xa=X;else{var Y=W.get(131),Ya="",Z,Za="/gpt/pubads_impl_",$a=!1;Y?("21061297"!==Y&&"21061254"!==Y&&"21061255"!==Y&&(Ya="?eid="+Y),Z="167"):$a=!0;Z=Z||"167";if($a){var ab=Q(["21061282","21061283"],0),bb=Q(["21061289","21061290"],.001);ab?(W.get(152).push(ab),Z=20171025,Za=Pa[ab]):bb&&(W.get(152).push(bb),Z=20171107,Za=Pa[bb])}X=N+"//"+O+Za+Z+".js"+Ya;t.a().set(76,X);Xa=X}var cb=Xa,db=T.currentScript;if(!("complete"==T.readyState||"loaded"==T.readyState||db&&db.async)){var eb="gpt-impl-"+Math.random();try{var fb='<script id="'+eb+'" src="'+cb+'">\x3c/script>';fb+=L&&Ba()?'<link rel="preconnect" href="'+N+"//"+O+'">':"";T.write(fb);R._syncTagged_=!0}catch(a){}if(T.getElementById(eb))switch(R._loadStarted_=!0,U){case "21060833":var gb=sa();Na(gb);Ma(gb);break;case "21060622":case "21060713":case "21061149":Ma(null)}}if(!R._loadStarted_){switch(U){case "21060833":var hb=sa();Na(hb);La(hb);break;case "21060622":case "21060713":case "21061149":La(null)}M&&B(T,cb);var ib=T.createElement("script");ib.src=cb;ib.async=!0;var jb=T.head||T.body||T.documentElement;jb.appendChild(ib);if(L&&Ba()){var kb=T.createElement("link");kb.rel="preconnect";kb.href=N+"//"+O;jb.appendChild(kb)}R._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
