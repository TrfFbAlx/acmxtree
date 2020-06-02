ReadSpeaker.Common=function(){var h={revision:"2887"},i={onAdapterReady:[],onInit:[],onCoreLoaded:[],onModsLoaded:[],onAfterModsLoaded:[],onAfterExtraModsLoaded:[],onConfigLoaded:[],onConfigSetup:[],onDOMReady:[],onReady:[],onSelectedText:[],onDeselectedText:[],onSettingsInitialized:[],onSettingsChanged:[],onSettingsLoaded:[],onSettingsClosed:[],onDownloadLoaded:[],onFocusIn:[],onFocusOut:[],onUIInitialized:[],onUIBeforePlay:[],onUIAfterPlay:[],onUIPause:[],onUISliderMove:[],onUIStop:[],onUIShowPlayer:[],
onUIClosePlayer:[],onAPIPlay:[],onAPIPause:[],onAPIStop:[],onAPIVolumeUp:[],onAPIVolumeDown:[],onAPIMute:[],onAPIFastForward:[],onAPIRewind:[],onAPISetVolume:[],onAPISetProgress:[],onAPIGetProgress:[],onAPIInitAdapter:[],onAPIReleaseAdapter:[],onAPIReloadAdapter:[],onBeforeSyncInit:[],onAfterSyncInit:[],onBeforeSync:[],onAfterSync:[],onAfterSyncExit:[],onBeforeContentChange:[],onAfterContentChange:[],onBeforeGetAudioLink:[],onBeforeParamsSet:[],onAudioLoadError:[],onVolumeAdjusted:[]},n={speed:function(a,
b){var c=parseInt(b||rspkr.pub.Config.item("general.defaultSpeedValue")||100);switch(a){case "slow":return c-25;case "medium":return c;case "fast":return c+25;default:return c}}},e={audioLink:null,params:{},postContent:"",postLink:null,saveLink:null,selectedHTML:"",selectedText:"",selectedRange:null,sync:"wordsent",syncLink:null,browser:{name:"",flashVersion:"",version:"",OS:"",html5AudioFormat:"",html5Support:!1,html5Priority:!1,syncContainer:""},setParams:function(a){rspkr.log("[rspkr.c.data.setParams] "+
a);if("string"==typeof a){this.params={};for(var b="",c="",b="",a=a.split("?")[1].split(/[;&]/),d=0;d<a.length;d++)if((b=a[d].split("="))&&2==b.length){var c=decodeURIComponent(b[0]),f=b[1],b=decodeURIComponent(b[1]);if("url"==c)0==b.length&&(f=encodeURIComponent(document.location.href));else if("lang"==c&&2==b.length)for(var g in rspkr.cfg.item("phrases"))if(rspkr.cfg.item("phrases").hasOwnProperty(g)&&b==g.substring(0,2)){f=g;break}this.params[c]=f}this.params.rsjs_ver=rspkr.getVersion();this.params.synccontainer=
this.browser.syncContainer;this.params.url||(this.params.url=document.location.href);this.params.readid=this.params.readid||""}},setDefaultValues:function(){rspkr.log("[rspkr.c.data.setDefaultValues] Called!");rspkr.Common.data.selectedHTML="";rspkr.Common.data.saveLink=null},setPostContent:function(a){if("string"==typeof a)if("textsel"===a){var b=this.selectedHTML;!0===rspkr.cfg.item("general.parseMathJax")&&(b=this.parseMathJax(b));this.postContent=q.encode(b)}else{var a=[],c="";rspkr.hl&&rspkr.hl.Restore.hasMarkup()&&
rspkr.hl.sync.fullCleanUp();if(rspkr.Common.data.params.hasOwnProperty("readclass")){var d=rspkr.Common.data.params.readclass,a=$rs.get("."+d);$rs.isArray(a)||(a=[a]);for(b=0;b<a.length;b++)c+='<div class="'+d+'">'+a[b].innerHTML+"</div>"}else if(rspkr.Common.data.params.hasOwnProperty("readid"))for(b in a=rspkr.Common.data.params.readid.split(","),a)a.hasOwnProperty(b)&&(c+='<div id="'+a[b]+'">'+$rs.get(a[b]).innerHTML+"</div>");!0===rspkr.cfg.item("general.parseMathJax")&&(c=this.parseMathJax(c));
this.postContent=q.encode(c)}},parseMathJax:function(a){var b=document.createElement("div"),c,d,f;d=window.MathJax;b.innerHTML=a;if(c=$rs.findIn(b,".MathJax")){a=$rs.findIn(c,".math");$rs.isArray(a)&&0===a.length&&(a=c);for(var a=$rs.isArray(a)?a:[a],g=a.length-1;0<=g;g--)"object"===typeof a[g]&&(f=document.createElement("div"),mjaxObj=d.Hub.getJaxFor(a[g].id),f.innerHTML=mjaxObj.originalText,c=$rs.closest(a[g],"div.MathJax_Display"),$rs.hasClass(a[g],"math")?(a[g].parentNode.parentNode.replaceChild(f,
a[g].parentNode),c&&c.tagName&&c.parentNode.replaceChild(f,c)):c?c.parentNode.replaceChild(f,c):a[g].parentNode.replaceChild(f,a[g]));d=b.getElementsByTagName("script");for(a=d.length-1;0<=a;a--)d[a].type&&"math/mml"===d[a].type&&d[a].parentNode.removeChild(d[a]);return b.innerHTML}return a},setSelectedText:function(a){this.selectedText="";var b=void 0,c=void 0;window.getSelection?(c=window.getSelection(),c.isCollapsed||(c.getRangeAt?b=c.getRangeAt(0):(b=document.createRange(),b.setStart(c.anchorNode,
c.anchorOffset),b.setEnd(c.focusNode,c.focusOffset)),b?(DOM=b.cloneContents(),object=document.createElement("div"),object.appendChild(DOM.cloneNode(!0)),this.selectedText=object.innerHTML):this.selectedText=c),this.selectedRange=b):document.selection?(c=document.selection,this.selectedText=(b=c.createRange())&&b.htmlText&&b.text&&0<b.text.length?b.htmlText:b&&b.text?b.text:"",this.selectedRange=b.duplicate()):document.getSelection&&(this.selectedText=document.getSelection());window.getSelection?0<
this.selectedText.length&&window.getSelection().getRangeAt&&window.getSelection().getRangeAt(0)&&0<window.getSelection().getRangeAt(0).toString().length&&a?l("onSelectedText",window,[a]):(this.selectedText="",l("onDeselectedText",window,["empty"])):0<this.selectedText.length&&a?l("onSelectedText",window,[a]):l("onDeselectedText",window,["empty"]);rspkr.log("[rspkr.c.setSelectedText] Selected text length is "+this.selectedText.length)},createReadRange:function(a){if(a=document.getElementById(a))if(document.selection&&
(9>this.browser.version||9>document.documentMode)){var b=document.body.createTextRange();b.moveToElementText(a);this.selectedRange=b;this.selectedText=b.htmlText}else b=document.createRange(),b.selectNodeContents(a),this.selectedRange=b,this.selectedText=b.toString()},getParam:function(a){return this.params&&this.params[a]&&void 0!==this.params[a]?this.params[a]:null},getParams:function(){return this.params},getPostContent:function(){return this.postContent},getRestoreContent:function(){return this.restoreContent},
getSelectedText:function(){return this.selectedText},getAudioLink:function(a,b){rspkr.devt("onBeforeGetAudioLink",window);b="undefined"!==typeof b?b:rspkr.HL;this.audioLink=null;var c={},d;for(d in this.params)this.params.hasOwnProperty(d)&&(c[d]=this.params[d]);for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);c.speed=n.speed(rspkr.Common.Settings.get("hlspeed"),c.speed?c.speed:void 0);(d=rspkr.cfg.item("general.selectionEngine"))&&"newcontent"===d&&c.hasOwnProperty("readid")&&1>this.selectedText.length&&
(!document.selection||document.selection&&8<rspkr.Common.data.browser.version&&8<document.documentMode)&&this.createReadRange(c.readid);if(c.readid&&/rslightbox_content/gi.test(c.readid)){!1==rs.cfg.item("general.usePost")?(rs.cfg.item("general.usePost",!0),rspkr.c.addEvent("onSettingsClosed",function(){rs.cfg.item("general.usePost",!1);rs.PlayerAPI.stop()})):rspkr.c.addEvent("onSettingsClosed",function(){rs.PlayerAPI.stop()});var f=function(a){for(var b=function(a,b){return document.defaultView&&
document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(a,null)[b]:a.currentStyle?a.currentStyle[b]:a.style[b]},c=0;c<a.childNodes.length;c++){var d=a.childNodes[c],e=d.className&&-1!==d.className.indexOf("rs_skip_always");1===d.nodeType&&("none"==b(d,"display")||"hidden"==b(d,"visibility"))&&!e?$rs.addClass(d,"rs_skip_always"):d.title?$rs.addClass(d,"rs_skip_always"):1===d.nodeType&&f(d)}};f($rs.get("rslightbox_content"))}0<this.selectedText.length||0<this.selectedHTML.length?
(0<this.selectedText.length&&b.clientMarkup.preProcess.init(),c.sync="user",c.syncalignuser=rspkr.st.get("hl"),this.setPostContent("textsel"),this.audioLink=j.issuePost(c)):!0===rspkr.cfg.item("general.premarkup")?(c.sync="user",this.setPostContent("nosel"),this.audioLink=!0===rspkr.pub.Config.item("general.usePost")?j.issuePost(c):p(c)):!0===rspkr.pub.Config.item("general.usePost")?(c.sync="wordsent",this.setPostContent("nosel"),this.audioLink=j.issuePost(c)):(c.sync="wordsent",this.audioLink=p(c));
rspkr.log("[rspkr.c.data.getAudioLink] Audio link: "+this.audioLink);return this.audioLink},setSettingsChanged:function(a){"hlspeed"===a&&(rspkr.c.data.settingsChanged=!0)},settingsChanged:!1,getSaveData:function(a){rspkr.log("[rspkr.c.data.getSaveData]");if(!this.saveLink||this.settingsChanged){var b={},c={audioformat:"mp3"};this.settingsChanged=!1;if("iOS"!==this.browser.OS&&"dialog"===(a||"link"))c.save="1";for(var d in this.params)this.params.hasOwnProperty(d)&&(b[d]=this.params[d]);for(d in c)c.hasOwnProperty(d)&&
(b[d]=c[d]);b.speed=n.speed(rspkr.st.get("hlspeed"),b.speed);0<this.selectedHTML.length?(this.setPostContent("textsel"),this.saveLink=j.issuePost(b)):!0===rspkr.cfg.item("general.usePost")?(this.setPostContent("nosel"),this.saveLink=j.issuePost(b)):this.saveLink=p(b)}return this.saveLink}},p=function(a){var b=rspkr.pub.Config.item("general.protocol")+"//"+rspkr.pub.Config.item("general.subdomain")+"."+rspkr.pub.Config.item("general.domain")+"/cgi-bin/"+rspkr.pub.Config.item("general.rsent")+"?",c;
for(c in a)a.hasOwnProperty(c)&&a[c]&&(b+=c+"="+a[c]+"&");return b.substr(0,b.length-1)},m=function(){var a=rspkr.cfg.item("extraMods")||[],b=[h.major,h.minor,h.update,h.revision].join("."),c=0;rspkr.log("[rspkr.c.loadExtraMods] Number of mod files to load: "+a.length);for(var d=0;d<a.length;d++){var f=a[d][0],g=f.substring(f.lastIndexOf(".")),k=void 0;".js"===g?(k=document.createElement("script"),k.type="text/javascript",k.src=rs.params.path+"mods/"+f+"?v="+b,k.async=!0):".css"===g&&(f=rs.params.path+
"mods/"+f+"?v="+b,"Explorer"==rs.c.data.browser.name&&8>=rs.c.data.browser.version?k=document.createStyleSheet(f):(k=document.createElement("link"),k.type="text/css",k.rel="stylesheet",k.href=f));if(!("Explorer"==rs.c.data.browser.name&&8>=rs.c.data.browser.version)&&void 0!==k.onreadystatechange){f=k;g=a[d][1];if("complete"==k.readyState||"loaded"==k.readyState)g&&"function"==typeof g&&g.apply(window),c++,c==a.length&&rs.devt("onAfterExtraModsLoaded",window);f.onreadystatechange=void 0}else f=k,
(g=a[d][1])&&"function"==typeof g&&g.apply(window),c++,c==a.length&&rs.devt("onAfterExtraModsLoaded",window),f.onload=void 0;document.getElementsByTagName("head")[0].appendChild(k)}},l=function(a,b,c){if(i[a]){c=c||[];rspkr.displog[a]=rspkr.displog[a]?++rspkr.displog[a]:1;if(!i[a].length)return rspkr.log("[rspkr.c] Dispatched event: "+a+" - no handlers to call.",2),!0;rspkr.log("[rspkr.c] Dispatching event: "+a,1);for(var d in i[a])if(i[a].hasOwnProperty(d)&&"function"==typeof i[a][d])try{"__self__"===
b&&(b=i[a][d]),i[a][d].apply(b,c)}catch(f){rspkr.log("[rspkr.c._dispatchEvent] Error: "+f.message,3),this.isok=!1}else if("object"==typeof i[a][d])try{var g=i[a][d];g.func.apply(g.context||window,g.params||c)}catch(k){this.isok=!1}}else rspkr.log("[rspkr.c] Undefined event: "+a,3)},j={issuePost:function(a){rspkr.log("[rspkr.c] Using POST");document.getElementById("ReadSpeakerPostIframe")||this.createIframe();var b=Math.random(),c=this.createForm(a),a=rspkr.pub.Config.item("general.protocol")+"//"+
rspkr.pub.Config.item("general.subdomain")+"."+rspkr.pub.Config.item("general.domain")+"/enterprise/iframeproxy.php?rsent="+rspkr.pub.Config.item("general.rsent")+"&version="+rspkr.pub.Config.item("general.proxyVersion");c.action=a+"&randid="+b;var d=document.createElement("textarea");1<e.getSelectedText().length?d.setAttribute("name","selectedhtml_base64"):d.setAttribute("name","html_base64");d.innerHTML=e.getPostContent();c.appendChild(d);setTimeout(function(){document.body.appendChild(c);c.submit();
document.body.removeChild(c)},0);return a+"&listen=1&randid="+b},createForm:function(a){var b,c=document.createElement("form");c.target="ReadSpeakerPostIframe";c.method="post";for(var d in a)b=document.createElement("input"),b.setAttribute("name",d),"url"===d?b.setAttribute("value",decodeURIComponent(a[d])):b.setAttribute("value",a[d]),c.appendChild(b);b=document.createElement("input");b.setAttribute("name","output");b.setAttribute("value","audiolink");c.appendChild(b);return c},createIframe:function(){var a=
null;if(document.selection)try{a=document.createElement('<iframe name="ReadSpeakerPostIframe">')}catch(b){a=document.createElement("iframe")}else a=document.createElement("iframe");a.setAttribute("name","ReadSpeakerPostIframe");a.setAttribute("id","ReadSpeakerPostIframe");a.setAttribute("style","display: none; position: absolute;");a.style.display="none";var c=document.getElementsByTagName("body"),d=null;0<c.length&&(d=c.item(0));d&&d.appendChild(a)},removeIframe:function(){document.getElementById("ReadSpeakerPostIframe")&&
document.body.removeChild(document.getElementById("ReadSpeakerPostIframe"))}},q={encode:function(a){newdata=encodeURIComponent(a);for(var b=0,c=0,a=[];b<newdata.length;b++)37!=newdata.charCodeAt(b)?a[c]=newdata.charCodeAt(b):(a[c]=parseInt("0x"+newdata.charAt(b+1)+""+newdata.charAt(b+2)),b+=2),c++;b=a.length;parseInt((b+2)/3);for(var c=new String,d=parseInt(b/3),f,g=b-3*d,b=0;b<3*d;b+=3)f=this.chars(a[b]>>2),c+=f,f=this.chars((a[b]&3)<<4|a[b+1]>>4),c+=f,f=this.chars((a[b+1]&15)<<2|a[b+2]>>6),c+=f,
f=this.chars(a[b+2]&63),c+=f;1==g&&(c+=this.chars(a[b]>>2),c+=this.chars((a[b]&3)<<4),c+="==");2==g&&(c+=this.chars(a[b]>>2),c+=this.chars((a[b]&3)<<4|a[b+1]>>4),c+=this.chars((a[b+1]&15)<<2),c+="=");return c},decode:function(a){for(var b="",c="",d=0,f=0,g="",k=a.length;d<k;)if(-1!=this.value(a[d])){for(var g=a.substring(d,d+4),e=f=0;4>e;e++)"="==g[e]&&f++;for(e=0;e<3-f;e++){0==e?c=this.value(g[0])<<2|(this.value(g[1])&48)>>4:1==e?c=(this.value(g[1])&15)<<4|(this.value(g[2])&60)>>2:2==e&&(c=(this.value(g[2])&
3)<<6|this.value(g[3]));var m=c.toString(16);1==m.length&&(m="0"+m);b+="%"+m}d+=4}else d++;return decodeURIComponent(b)},value:function(a){a=a.charCodeAt(0);return 65<=a&&90>=a?a-65:97<=a&&122>=a?a-97+26:48<=a&&57>=a?a-48+52:43==a?62:47==a?63:-1},chars:function(a){return 26>a?String.fromCharCode(a+65):52>a?String.fromCharCode(a+97-26):62>a?String.fromCharCode(a+48-52):62==a?"+":63==a?"/":String.fromCharCode(0)}};return{meta:h,init:function(){l("onInit",window);i.onInit=[];i.onUIShowPlayer.push(rspkr.Common.data.setDefaultValues);
i.onSettingsChanged.push(rspkr.Common.data.setSettingsChanged);i.onAfterModsLoaded.push(m)},addEvent:function(a,b){i[a].push(b)},base64:q,buildReadSpeakerCall:function(a){return p(a)},data:e,Detect:{init:function(){rspkr.log("[rspkr.c.Detect] Initialized!");var a=navigator.userAgent;e.browser.name=this.searchString(this.dataBrowser)||"Unknown";e.browser.version=this.searchVersion(a)||this.searchVersion(navigator.appVersion)||"Unknown";e.browser.OS=this.searchString(this.dataOS)||"Unknown";"Windows"===
e.browser.OS&&-1!==a.indexOf("Windows NT 6.0")&&(this.browserSettings.Firefox.html5Priority=!1);e.browser.flashVersion=this.getFlashVersion();rspkr.log("[rspkr.c.Detect.init] Flash version: "+e.browser.flashVersion,1);e.browser.syncContainer="default"!==rspkr.pub.Config.item("general.syncContainer")?rspkr.pub.Config.item("general.syncContainer"):"rs:span";a=e.browser.name;this.browserSettings.hasOwnProperty(e.browser.name)||(this.browserSettings[a]={});"default"===rspkr.pub.Config.item("general.syncContainer")&&
this.browserSettings[a].hasOwnProperty("syncContainer")&&(e.browser.syncContainer=this.browserSettings[a].syncContainer);this.browserSettings[a].hasOwnProperty("html5Support")?e.browser.html5Support=this.browserSettings[a].html5Support:document.createElement("audio").canPlayType&&(e.browser.html5Support=!0);if(!0===e.browser.html5Support){var b=document.createElement("audio"),c=!1,d=!1;b.canPlayType&&(c=!!b.canPlayType&&""!=b.canPlayType("audio/mpeg"),d=!!b.canPlayType&&""!=b.canPlayType('audio/ogg; codecs="vorbis"'));
rspkr.log("Browser can play mp3? "+b.canPlayType("audio/mpeg"),1);rspkr.log("Browser can play ogg? "+b.canPlayType('audio/ogg; codecs="vorbis"'),1);!0===c?e.browser.html5AudioFormat="mp3":!0===d?e.browser.html5AudioFormat="ogg":e.browser.html5Support=!1;e.browser.html5Priority=this.browserSettings[a].hasOwnProperty("html5Priority")?this.browserSettings[a].priority:!0;this.browserSettings[a].hasOwnProperty("audioFormat")&&(e.browser.html5AudioFormat=this.browserSettings[a].audioFormat)}this.browserSettings[a].hasOwnProperty("minver")&&
parseFloat(e.browser.version)<=parseFloat(this.browserSettings[a].minver)&&(e.browser.html5Priority=!1)},browserSettings:{Android:{minver:4},Explorer:{syncContainer:"font"},Firefox:{minver:6},Opera:{html5Support:!1,priority:!1}},getFlashVersion:function(){try{if(document.selection){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{a.AllowScriptAccess="always"}catch(b){return"6,0,0"}}catch(c){}return(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,
",").match(/^,?(.+),?$/)[1]}try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(d){}}catch(f){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(g){}}return"0,0,0"},
searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chromium",identity:"Chromium"},{string:navigator.userAgent,subString:"Chrome",
identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},
{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,
subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iOS"},{string:navigator.userAgent,subString:"iPad",identity:"iOS"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]},dispatchEvent:function(a,b,c){l(a,b,c)},post:j,cookie:{create:function(a,b,c,d,f){c=c||rspkr.pub.Config.item("general.cookieLifetime");d=d||rspkr.pub.Config.item("general.cookiePath");f=f||rspkr.pub.Config.item("general.cookieDomain");
if(c){var g=new Date;g.setTime(g.getTime()+c);c="; expires="+g.toGMTString()}else c="";return document.cookie=a+"="+b+c+(d?"; path="+d:"")+(f?"; domain="+f:"")},read:function(a){for(var a=a+"=",b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}},readKey:function(a,b){var c=this.read(a),d;if(c)for(var c=c.split("&"),f=0,g=c.length;f<g;f++)if(d=c[f].split("="),d[0]==b)return d[1]},readKeyAll:function(a){var a=
this.read(a),b={},c;if(a){for(var a=a.split("&"),d=0,f=a.length;d<f;d++)c=a[d].split("="),b[c[0]]=c[1];return b}},createSub:function(a,b,c,d,f){if("object"!==typeof b)this.create(a,b.toString(),c,d,f);else{var g=[],e;for(e in b)g.push(e+"="+b[e]);return this.create(a,g.join("&"),c,d,f)}},updateKey:function(a,b,c,d,f,g){for(var c=c.toString(),e=decodeURIComponent(this.read(a)),m,j={},l=!1,e=!e||"null"==e||"undefined"==e?[]:-1<e.indexOf("=")&&-1==e.indexOf("&")?[e]:e.split("&"),h=0,i=e.length;h<i;h++)m=
e[h].split("="),m[0]==b&&(m[1]=c,l=!0),m.length&&m[1].length&&(j[m[0]]=m[1]);!l&&c.length&&(j[b]=c);return this.createSub(a,j,d,f,g)},erase:function(a,b,c){this.create(a,"",-1,b,c)}},css:{getStylesheet:function(a){var b;if(!(b=document.styleSheets[a]||document.getElementById(a)))b=document.createElement("style"),b.type="text/css",b.id=b.name=a,(document.getElementsByTagName("head")[0]||document.body).appendChild(b),!b.addRule&&!b.sheet&&(b=document.styleSheets[a]);return b.sheet||b},rsSheet:function(a){this.rules=
a.rules||a.cssRules;this.del=function(a,c){a.deleteRule?a.deleteRule(c):a.removeRule&&a.removeRule(c)};this.ins=function(a,c,d){$rs.isArray(d)||(d=[d]);if(a.insertRule&&a.cssRules)a.insertRule(c+" {"+d.join(";")+";}",a.cssRules.length);else if(a.addRule)for(var f=0,g=d.length;f<g;f++)a.addRule(c,d[f])}},setRule:function(a,b,c){var a=this.getStylesheet(a),d=new this.rsSheet(a);d.ins(a,b,"string"==typeof c?c.split(";"):c);return d.length},removeRule:function(a,b){var c=this.getStylesheet(a),d=new this.rsSheet(c),
f=[];if(d.rules){for(var g=0,e=d.rules.length;g<e;g++)d.rules[g].selectorText==b&&f.push(g);for(;f.length;)d.del(c,f.pop());return f}return d},replaceRule:function(a,b,c){this.removeRule(a,b);this.setRule(a,b,c)}},converter:n,findFirstRSButton:function(a){for(var a=a||document.body,a=a.getElementsByTagName("a"),b=0,c=a.length;b<c;b++)if($rs.hasClass(a[b],"rsbtn_play")||a[b].href&&-1!==a[b].href.indexOf(rspkr.pub.Config.item("general.domain")+"/cgi-bin/"+rspkr.pub.Config.item("general.rsent"))||a[b].href&&
/customerid=/i.test(a[b].href)&&/lang=/i.test(a[b].href)&&/(readid|readclass)/i.test(a[b].href))return a[b];return!1},decodeEntities:function(a){var b=document.createElement("p");b.innerHTML=a;return b.textContent||b.innerText},e:i,createShortcuts:function(){var a=window.ReadSpeaker;a.Common&&(a.c=a.Common);a.c&&(a.evt=a.c.addEvent,a.devt=a.c.dispatchEvent);a.c&&a.c.Settings&&(a.c.s=a.c.Settings);a.c.s&&(a.st=a.c.s);a.lib&&(a.l=a.lib);a.l&&a.lib.Facade&&(a.l.f=a.lib.Facade);a.l&&(a.l.f&&a.l.f.adapter)&&
(a.l.f.a=a.l.f.adapter);a.modmap&&(a.m=a.modmap);a.pub&&a.pub.Config&&(a.pub.c=a.pub.Config);a.pub.c&&(a.cfg=a.pub.c);a.PlayerAPI&&(a.pl=a.PlayerAPI);a.HL&&(a.hl=a.HL);a.ui&&(a.u=a.ui)}}}();rspkr.lib||(rspkr.lib={});
rspkr.lib.Facade=function(h){var i=function(e,l,j){for(var e=String(e),j=String(j),l="="==l?"==":l,e=e.split("."),j=j.split("."),h=Math.max(e.length,j.length),a,b,c=0,d=0;d<h&&!c;d++)a=parseInt(e[d],10)||0,b=parseInt(j[d],10)||0,a<b&&(c=1),a>b&&(c=-1);return eval("0"+l+c)},n=[{name:"jquery",minver:"1.4",check:function(){if("function"==typeof jQuery){if("explorer"===rspkr.Common.data.browser.name.toLowerCase()&&9>rspkr.Common.data.browser.version&&i(jQuery.fn.jquery,"<",2))return!1;if(i(jQuery.fn.jquery,
">=",this.minver))return!0}return!1}}],e="",p={store:[],push:function(e,h,j){this.store[e]||(this.store[e]=[]);this.store[e][h]||(this.store[e][h]=[]);this.store[e][h].push(j);return this.store.length},pop:function(e,h,j){var i;if(this.store[e]&&this.store[e][h]){i=this.store[e][h];for(var a=i.length-1;-1<a;a--)i[a]==j&&this.store[e][h].splice(a,1);return this.store[e][h].length}return 0},dispatch:function(e,h){var j=$rs.convertEvent(e,h),i=$rs.getAttr(j.target.window?document.documentElement:j.target,
"data-rsevent-id");if(i){for(var a=!0,i=p.store[i][j.type],b=0,c=i.length;b<c;b++)"function"==typeof i[b]&&(i[b].apply(j.target,[j])||(a=!1));return a}}};return{init:function(){if(rspkr&&rspkr.params&&rspkr.params.forceRSLib&&"1"===rspkr.params.forceRSLib)e="RSLib";else{for(idx in n)if(n[idx]&&n[idx].check&&n[idx].check()){e=n[idx].name;break}e.length||(e="RSLib")}},currentLib:function(){return e},setLib:function(h){e=h},eq:p,adapterInit:function(e){h.$rs=e}}}(window);
ReadSpeaker.lib.Facade.RSEvent=function(){};
ReadSpeaker.modmap={products:{all:[["Common.Settings","text/javascript",["Common.Settings"]]],custom:function(){var h=[];h.push(["Custom","text/javascript"]);return h},dr:function(){var h=[];h.push(["DocReader.AutoAdd","text/javascript"]);return h},expl:function(){var h=this.all;h.push(["PlayerAPI","text/javascript"],["XP","text/javascript"],["ui","text/javascript",["ui","ui.Lightbox","ui.Slider"]]);return h},embhl:function(){var h=this.all;h.push(["PlayerAPI","text/javascript"],["HL","text/javascript"],
["ui","text/javascript",["ui","ui.Lightbox","ui.Slider"]]);return h}}};
