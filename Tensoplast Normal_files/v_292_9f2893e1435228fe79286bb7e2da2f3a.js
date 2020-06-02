/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);;jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});;function formatedNumberToFloat(price,currencyFormat,currencySign)
{price=price.replace(currencySign,'');if(currencyFormat===1)
return parseFloat(price.replace(',','').replace(' ',''));else if(currencyFormat===2)
return parseFloat(price.replace(' ','').replace(',','.'));else if(currencyFormat===3)
return parseFloat(price.replace('.','').replace(' ','').replace(',','.'));else if(currencyFormat===4)
return parseFloat(price.replace(',','').replace(' ',''));return price;}
function formatNumber(value,numberOfDecimal,thousenSeparator,virgule)
{value=value.toFixed(numberOfDecimal);var val_string=value+'';var tmp=val_string.split('.');var abs_val_string=(tmp.length===2)?tmp[0]:val_string;var deci_string=('0.'+(tmp.length===2?tmp[1]:0)).substr(2);var nb=abs_val_string.length;for(var i=1;i<4;i++)
if(value>=Math.pow(10,(3*i)))
abs_val_string=abs_val_string.substring(0,nb-(3*i))+thousenSeparator+abs_val_string.substring(nb-(3*i));if(parseInt(numberOfDecimal)===0)
return abs_val_string;return abs_val_string+virgule+(deci_string>0?deci_string:'00');}
function formatCurrency(price,currencyFormat,currencySign,currencyBlank)
{var blank='';price=parseFloat(price).toFixed(10);price=ps_round(price,priceDisplayPrecision);if(currencyBlank>0)
blank=' ';if(currencyFormat==1)
return currencySign+blank+formatNumber(price,priceDisplayPrecision,',','.');if(currencyFormat==2)
return(formatNumber(price,priceDisplayPrecision,' ',',')+blank+currencySign);if(currencyFormat==3)
return(currencySign+blank+formatNumber(price,priceDisplayPrecision,'.',','));if(currencyFormat==4)
return(formatNumber(price,priceDisplayPrecision,',','.')+blank+currencySign);if(currencyFormat==5)
return(currencySign+blank+formatNumber(price,priceDisplayPrecision,'\'','.'));return price;}
function ps_round_helper(value,mode)
{if(value>=0.0)
{tmp_value=Math.floor(value+0.5);if((mode==3&&value==(-0.5+tmp_value))||(mode==4&&value==(0.5+2*Math.floor(tmp_value/2.0)))||(mode==5&&value==(0.5+2*Math.floor(tmp_value/2.0)-1.0)))
tmp_value-=1.0;}
else
{tmp_value=Math.ceil(value-0.5);if((mode==3&&value==(0.5+tmp_value))||(mode==4&&value==(-0.5+2*Math.ceil(tmp_value/2.0)))||(mode==5&&value==(-0.5+2*Math.ceil(tmp_value/2.0)+1.0)))
tmp_value+=1.0;}
return tmp_value;}
function ps_log10(value)
{return Math.log(value)/Math.LN10;}
function ps_round_half_up(value,precision)
{var mul=Math.pow(10,precision);var val=value*mul;var next_digit=Math.floor(val*10)-10*Math.floor(val);if(next_digit>=5)
val=Math.ceil(val);else
val=Math.floor(val);return val/mul;}
function ps_round(value,places)
{if(typeof(roundMode)==='undefined')
roundMode=2;if(typeof(places)==='undefined')
places=2;var method=roundMode;if(method===0)
return ceilf(value,places);else if(method===1)
return floorf(value,places);else if(method===2)
return ps_round_half_up(value,places);else if(method==3||method==4||method==5)
{var precision_places=14-Math.floor(ps_log10(Math.abs(value)));var f1=Math.pow(10,Math.abs(places));if(precision_places>places&&precision_places-places<15)
{var f2=Math.pow(10,Math.abs(precision_places));if(precision_places>=0)
tmp_value=value*f2;else
tmp_value=value/f2;tmp_value=ps_round_helper(tmp_value,roundMode);f2=Math.pow(10,Math.abs(places-precision_places));tmp_value/=f2;}
else
{if(places>=0)
tmp_value=value*f1;else
tmp_value=value/f1;if(Math.abs(tmp_value)>=1e15)
return value;}
tmp_value=ps_round_helper(tmp_value,roundMode);if(places>0)
tmp_value=tmp_value/f1;else
tmp_value=tmp_value*f1;return tmp_value;}}
function autoUrl(name,dest)
{var loc;var id_list;id_list=document.getElementById(name);loc=id_list.options[id_list.selectedIndex].value;if(loc!=0)
location.href=dest+loc;return;}
function autoUrlNoList(name,dest)
{var loc;loc=document.getElementById(name).checked;location.href=dest+(loc==true?1:0);return;}
function toggle(e,show)
{e.style.display=show?'':'none';}
function toggleMultiple(tab)
{var len=tab.length;for(var i=0;i<len;i++)
if(tab[i].style)
toggle(tab[i],tab[i].style.display=='none');}
function showElemFromSelect(select_id,elem_id)
{var select=document.getElementById(select_id);for(var i=0;i<select.length;++i)
{var elem=document.getElementById(elem_id+select.options[i].value);if(elem!=null)
toggle(elem,i==select.selectedIndex);}}
function openCloseAllDiv(name,option)
{var tab=$('*[name='+name+']');for(var i=0;i<tab.length;++i)
toggle(tab[i],option);}
function toggleDiv(name,option)
{$('*[name='+name+']').each(function(){if(option=='open')
{$('#buttonall').data('status','close');$(this).hide();}
else
{$('#buttonall').data('status','open');$(this).show();}})}
function toggleButtonValue(id_button,text1,text2)
{if($('#'+id_button).find('i').first().hasClass('process-icon-compress'))
{$('#'+id_button).find('i').first().removeClass('process-icon-compress').addClass('process-icon-expand');$('#'+id_button).find('span').first().html(text1);}
else
{$('#'+id_button).find('i').first().removeClass('process-icon-expand').addClass('process-icon-compress');$('#'+id_button).find('span').first().html(text2);}}
function toggleElemValue(id_button,text1,text2)
{var obj=document.getElementById(id_button);if(obj)
obj.value=((!obj.value||obj.value==text2)?text1:text2);}
function addBookmark(url,title)
{if(window.sidebar&&window.sidebar.addPanel)
return window.sidebar.addPanel(title,url,"");else if(window.external&&('AddFavorite'in window.external))
return window.external.AddFavorite(url,title);}
function writeBookmarkLink(url,title,text,img)
{var insert='';if(img)
insert=writeBookmarkLinkObject(url,title,'<img src="'+img+'" alt="'+escape(text)+'" title="'+removeQuotes(text)+'" />')+'&nbsp';insert+=writeBookmarkLinkObject(url,title,text);if(window.sidebar||window.opera&&window.print||(window.external&&('AddFavorite'in window.external)))
$('.add_bookmark, #header_link_bookmark').append(insert);}
function writeBookmarkLinkObject(url,title,insert)
{if(window.sidebar||window.external)
return('<a href="javascript:addBookmark(\''+escape(url)+'\', \''+removeQuotes(title)+'\')">'+insert+'</a>');else if(window.opera&&window.print)
return('<a rel="sidebar" href="'+escape(url)+'" title="'+removeQuotes(title)+'">'+insert+'</a>');return('');}
function checkCustomizations()
{var pattern=new RegExp(' ?filled ?');if(typeof customizationFields!='undefined')
for(var i=0;i<customizationFields.length;i++)
{if(parseInt(customizationFields[i][1])==1&&($('#'+customizationFields[i][0]).html()==''||$('#'+customizationFields[i][0]).text()!=$('#'+customizationFields[i][0]).val())&&!pattern.test($('#'+customizationFields[i][0]).attr('class')))
return false;}
return true;}
function emptyCustomizations()
{customizationId=null;if(typeof(customizationFields)=='undefined')return;$('.customization_block .success').fadeOut(function(){$(this).remove();});$('.customization_block .error').fadeOut(function(){$(this).remove();});for(var i=0;i<customizationFields.length;i++)
{$('#'+customizationFields[i][0]).html('');$('#'+customizationFields[i][0]).val('');}}
function ceilf(value,precision)
{if(typeof(precision)==='undefined')
precision=0;var precisionFactor=precision===0?1:Math.pow(10,precision);var tmp=value*precisionFactor;var tmp2=tmp.toString();if(tmp2[tmp2.length-1]===0)
return value;return Math.ceil(value*precisionFactor)/precisionFactor;}
function floorf(value,precision)
{if(typeof(precision)==='undefined')
precision=0;var precisionFactor=precision===0?1:Math.pow(10,precision);var tmp=value*precisionFactor;var tmp2=tmp.toString();if(tmp2[tmp2.length-1]===0)
return value;return Math.floor(value*precisionFactor)/precisionFactor;}
function setCurrency(id_currency)
{$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseDir+'index.php'+'?rand='+new Date().getTime(),data:'controller=change-currency&id_currency='+parseInt(id_currency),success:function(msg)
{location.reload(true);}});}
function isArrowKey(k_ev)
{var unicode=k_ev.keyCode?k_ev.keyCode:k_ev.charCode;if(unicode>=37&&unicode<=40)
return true;return false;}
function removeQuotes(value)
{value=value.replace(/\\"/g,'');value=value.replace(/"/g,'');value=value.replace(/\\'/g,'');value=value.replace(/'/g,'');return value;}
function sprintf(format)
{for(var i=1;i<arguments.length;i++)
format=format.replace(/%s/,arguments[i]);return format;}
function fancyMsgBox(msg,title)
{if(title)msg="<h2>"+title+"</h2><p>"+msg+"</p>";msg+="<br/><p class=\"submit\" style=\"text-align:right; padding-bottom: 0\"><input class=\"button\" type=\"button\" value=\"OK\" onclick=\"$.fancybox.close();\" /></p>";if(!!$.prototype.fancybox)
$.fancybox(msg,{'autoDimensions':false,'autoSize':false,'width':500,'height':'auto','openEffect':'none','closeEffect':'none'});}
function fancyChooseBox(question,title,buttons,otherParams)
{var msg,funcName,action;msg='';if(title)
msg="<h2>"+title+"</h2><p>"+question+"</p>";msg+="<br/><p class=\"submit\" style=\"text-align:right; padding-bottom: 0\">";var i=0;for(var caption in buttons){if(!buttons.hasOwnProperty(caption))continue;funcName=buttons[caption];if(typeof otherParams=='undefined')otherParams=0;otherParams=escape(JSON.stringify(otherParams));action=funcName?"$.fancybox.close();window['"+funcName+"'](JSON.parse(unescape('"+otherParams+"')), "+i+")":"$.fancybox.close()";msg+='<button type="submit" class="button btn-default button-medium" style="margin-right: 5px;" value="true" onclick="'+action+'" >';msg+='<span>'+caption+'</span></button>'
i++;}
msg+="</p>";if(!!$.prototype.fancybox)
$.fancybox(msg,{'autoDimensions':false,'width':500,'height':'auto','openEffect':'none','closeEffect':'none'});}
function toggleLayer(whichLayer,flag)
{if(!flag)
$(whichLayer).hide();else
$(whichLayer).show();}
function openCloseLayer(whichLayer,action)
{if(!action)
{if($(whichLayer).css('display')=='none')
$(whichLayer).show();else
$(whichLayer).hide();}
else if(action=='open')
$(whichLayer).show();else if(action=='close')
$(whichLayer).hide();}
function updateTextWithEffect(jQueryElement,text,velocity,effect1,effect2,newClass)
{if(jQueryElement.text()!==text)
{if(effect1==='fade')
jQueryElement.fadeOut(velocity,function(){$(this).addClass(newClass);if(effect2==='fade')$(this).text(text).fadeIn(velocity);else if(effect2==='slide')$(this).text(text).slideDown(velocity);else if(effect2==='show')$(this).text(text).show(velocity,function(){});});else if(effect1==='slide')
jQueryElement.slideUp(velocity,function(){$(this).addClass(newClass);if(effect2==='fade')$(this).text(text).fadeIn(velocity);else if(effect2==='slide')$(this).text(text).slideDown(velocity);else if(effect2==='show')$(this).text(text).show(velocity);});else if(effect1==='hide')
jQueryElement.hide(velocity,function(){$(this).addClass(newClass);if(effect2==='fade')$(this).text(text).fadeIn(velocity);else if(effect2==='slide')$(this).text(text).slideDown(velocity);else if(effect2==='show')$(this).text(text).show(velocity);});}}
function dbg(value)
{var active=false;var firefox=true;if(active)
if(firefox)
console.log(value);else
alert(value);}
function print_r(element,limit,depth)
{depth=depth?depth:0;limit=limit?limit:1;returnString='<ol>';for(property in element)
{if(property!='domConfig')
{returnString+='<li><strong>'+property+'</strong> <small>('+(typeof element[property])+')</small>';if(typeof element[property]=='number'||typeof element[property]=='boolean')
returnString+=' : <em>'+element[property]+'</em>';if(typeof element[property]=='string'&&element[property])
returnString+=': <div style="background:#C9C9C9;border:1px solid black; overflow:auto;"><code>'+
element[property].replace(/</g,'&amp;lt;').replace(/>/g,'&amp;gt;')+'</code></div>';if((typeof element[property]=='object')&&(depth<limit))
returnString+=print_r(element[property],limit,(depth+1));returnString+='</li>';}}
returnString+='</ol>';if(depth==0)
{winpop=window.open("","","width=800,height=600,scrollbars,resizable");winpop.document.write('<pre>'+returnString+'</pre>');winpop.document.close();}
return returnString;}
function in_array(value,array)
{for(var i in array)
if((array[i]+'')===(value+''))
return true;return false;}
function isCleanHtml(content)
{var events='onmousedown|onmousemove|onmmouseup|onmouseover|onmouseout|onload|onunload|onfocus|onblur|onchange';events+='|onsubmit|ondblclick|onclick|onkeydown|onkeyup|onkeypress|onmouseenter|onmouseleave|onerror|onselect|onreset|onabort|ondragdrop|onresize|onactivate|onafterprint|onmoveend';events+='|onafterupdate|onbeforeactivate|onbeforecopy|onbeforecut|onbeforedeactivate|onbeforeeditfocus|onbeforepaste|onbeforeprint|onbeforeunload|onbeforeupdate|onmove';events+='|onbounce|oncellchange|oncontextmenu|oncontrolselect|oncopy|oncut|ondataavailable|ondatasetchanged|ondatasetcomplete|ondeactivate|ondrag|ondragend|ondragenter|onmousewheel';events+='|ondragleave|ondragover|ondragstart|ondrop|onerrorupdate|onfilterchange|onfinish|onfocusin|onfocusout|onhashchange|onhelp|oninput|onlosecapture|onmessage|onmouseup|onmovestart';events+='|onoffline|ononline|onpaste|onpropertychange|onreadystatechange|onresizeend|onresizestart|onrowenter|onrowexit|onrowsdelete|onrowsinserted|onscroll|onsearch|onselectionchange';events+='|onselectstart|onstart|onstop';var script1=/<[\s]*script/im;var script2=new RegExp('('+events+')[\s]*=','im');var script3=/.*script\:/im;var script4=/<[\s]*(i?frame|embed|object)/im;if(script1.test(content)||script2.test(content)||script3.test(content)||script4.test(content))
return false;return true;}
function getStorageAvailable(){test='foo';storage=window.localStorage||window.sessionStorage;try{storage.setItem(test,test);storage.removeItem(test);return storage;}
catch(error){return null;}}
$(document).ready(function()
{$('form').submit(function(){$(this).find('.hideOnSubmit').hide();});$.fn.checkboxChange=function(fnChecked,fnUnchecked){if($(this).prop('checked')&&fnChecked)
fnChecked.call(this);else if(fnUnchecked)
fnUnchecked.call(this);if(!$(this).attr('eventCheckboxChange'))
{$(this).on('change',function(){$(this).checkboxChange(fnChecked,fnUnchecked);});$(this).attr('eventCheckboxChange',true);}};$('a._blank, a.js-new-window').attr('target','_blank');});;var responsiveflag=false;$(document).ready(function(){highdpiInit();responsiveResize();$(window).resize(responsiveResize);if(navigator.userAgent.match(/Android/i))
{var viewport=document.querySelector('meta[name="viewport"]');viewport.setAttribute('content','initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width,height=device-height');window.scrollTo(0,1);}
blockHover();if(typeof quickView!=='undefined'&&quickView)
quick_view();dropDown();if(typeof page_name!='undefined'&&!in_array(page_name,['index','product']))
{bindGrid();$(document).on('change','.selectProductSort',function(e){if(typeof request!='undefined'&&request)
var requestSortProducts=request;var splitData=$(this).val().split(':');if(typeof requestSortProducts!='undefined'&&requestSortProducts)
document.location.href=requestSortProducts+((requestSortProducts.indexOf('?')<0)?'?':'&')+'orderby='+splitData[0]+'&orderway='+splitData[1];});$(document).on('change','select[name="n"]',function(){$(this.form).submit();});$(document).on('change','select[name="manufacturer_list"], select[name="supplier_list"]',function(){if(this.value!='')
location.href=this.value;});$(document).on('change','select[name="currency_payement"]',function(){setCurrency($(this).val());});}
$(document).on('click','.back',function(e){e.preventDefault();history.back();});jQuery.curCSS=jQuery.css;if(!!$.prototype.cluetip)
$('a.cluetip').cluetip({local:true,cursor:'pointer',dropShadow:false,dropShadowSteps:0,showTitle:false,tracking:true,sticky:false,mouseOutClose:true,fx:{open:'fadeIn',openSpeed:'fast'}}).css('opacity',0.8);if(!!$.prototype.fancybox)
$.extend($.fancybox.defaults.tpl,{closeBtn:'<a title="'+FancyboxI18nClose+'" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="'+FancyboxI18nNext+'" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="'+FancyboxI18nPrev+'" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'});});function highdpiInit()
{if($('.replace-2x').css('font-size')=="1px")
{var els=$("img.replace-2x").get();for(var i=0;i<els.length;i++)
{src=els[i].src;extension=src.substr((src.lastIndexOf('.')+1));src=src.replace("."+extension,"2x."+extension);var img=new Image();img.src=src;img.height!=0?els[i].src=src:els[i].src=els[i].src;}}}
function responsiveResize()
{if($(document).width()<=767&&responsiveflag==false)
{accordion('enable');accordionFooter('enable');responsiveflag=true;}
else if($(document).width()>=768)
{accordion('disable');accordionFooter('disable');responsiveflag=false;}
if(typeof page_name!='undefined'&&in_array(page_name,['category']))
resizeCatimg();}
function blockHover(status)
{$(document).off('mouseenter').on('mouseenter','.product_list.grid li.ajax_block_product .product-container',function(e){if($('body').find('.container').width()==1170)
{var pcHeight=$(this).parent().outerHeight();var pcPHeight=$(this).parent().find('.button-container').outerHeight()+$(this).parent().find('.comments_note').outerHeight()+$(this).parent().find('.functional-buttons').outerHeight();$(this).parent().addClass('hovered').css({'height':pcHeight+pcPHeight,'margin-bottom':pcPHeight*(-1)});}});$(document).off('mouseleave').on('mouseleave','.product_list.grid li.ajax_block_product .product-container',function(e){if($('body').find('.container').width()==1170)
$(this).parent().removeClass('hovered').css({'height':'auto','margin-bottom':'0'});});}
function quick_view()
{$(document).on('click','.quick-view:visible, .quick-view-mobile:visible',function(e)
{e.preventDefault();var url=this.rel;if(url.indexOf('?')!=-1)
url+='&';else
url+='?';if(!!$.prototype.fancybox)
$.fancybox({'padding':0,'width':1087,'height':610,'type':'iframe','href':url+'content_only=1'});});}
function bindGrid()
{var view=$.totalStorage('display');if(!view&&(typeof displayList!='undefined')&&displayList)
view='list';if(view&&view!='grid')
display(view);else
$('.display').find('li#grid').addClass('selected');$(document).on('click','#grid',function(e){e.preventDefault();display('grid');});$(document).on('click','#list',function(e){e.preventDefault();display('list');});}
function display(view)
{if(view=='list')
{$('ul.product_list').removeClass('grid').addClass('list row');$('.product_list > li').removeClass('col-xs-12 col-sm-6 col-md-4').addClass('col-xs-12');$('.product_list > li').each(function(index,element){html='';html='<div class="product-container"><div class="row">';html+='<div class="left-block col-xs-4 col-xs-5 col-md-4">'+$(element).find('.left-block').html()+'</div>';html+='<div class="center-block col-xs-4 col-xs-7 col-md-4">';html+='<div class="product-flags">'+$(element).find('.product-flags').html()+'</div>';html+='<h5 itemprop="name">'+$(element).find('h5').html()+'</h5>';var rating=$(element).find('.comments_note').html();if(rating!=null){html+='<div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating" class="comments_note">'+rating+'</div>';}
html+='<p class="product-desc">'+$(element).find('.product-desc').html()+'</p>';var colorList=$(element).find('.color-list-container').html();if(colorList!=null){html+='<div class="color-list-container">'+colorList+'</div>';}
var availability=$(element).find('.availability').html();if(availability!=null){html+='<span class="availability">'+availability+'</span>';}
html+='</div>';html+='<div class="right-block col-xs-4 col-xs-12 col-md-4"><div class="right-block-content row">';var price=$(element).find('.content_price').html();if(price!=null){html+='<div class="content_price col-xs-5 col-md-12">'+price+'</div>';}
html+='<div class="button-container col-xs-7 col-md-12">'+$(element).find('.button-container').html()+'</div>';html+='<div class="functional-buttons clearfix col-sm-12">'+$(element).find('.functional-buttons').html()+'</div>';html+='</div>';html+='</div></div>';$(element).html(html);});$('.display').find('li#list').addClass('selected');$('.display').find('li#grid').removeAttr('class');$.totalStorage('display','list');}
else
{$('ul.product_list').removeClass('list').addClass('grid row');$('.product_list > li').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-4');$('.product_list > li').each(function(index,element){html='';html+='<div class="product-container">';html+='<div class="left-block">'+$(element).find('.left-block').html()+'</div>';html+='<div class="right-block">';html+='<div class="product-flags">'+$(element).find('.product-flags').html()+'</div>';html+='<h5 itemprop="name">'+$(element).find('h5').html()+'</h5>';var rating=$(element).find('.comments_note').html();if(rating!=null){html+='<div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating" class="comments_note">'+rating+'</div>';}
html+='<p itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</p>';var price=$(element).find('.content_price').html();if(price!=null){html+='<div class="content_price">'+price+'</div>';}
html+='<div itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="button-container">'+$(element).find('.button-container').html()+'</div>';var colorList=$(element).find('.color-list-container').html();if(colorList!=null){html+='<div class="color-list-container">'+colorList+'</div>';}
var availability=$(element).find('.availability').html();if(availability!=null){html+='<span class="availability">'+availability+'</span>';}
html+='</div>';html+='<div class="functional-buttons clearfix">'+$(element).find('.functional-buttons').html()+'</div>';html+='</div>';$(element).html(html);});$('.display').find('li#grid').addClass('selected');$('.display').find('li#list').removeAttr('class');$.totalStorage('display','grid');}}
function dropDown()
{elementClick='#header .current';elementSlide='ul.toogle_content';activeClass='active';$(elementClick).on('click',function(e){e.stopPropagation();var subUl=$(this).next(elementSlide);if(subUl.is(':hidden'))
{subUl.slideDown();$(this).addClass(activeClass);}
else
{subUl.slideUp();$(this).removeClass(activeClass);}
$(elementClick).not(this).next(elementSlide).slideUp();$(elementClick).not(this).removeClass(activeClass);e.preventDefault();});$(elementSlide).on('click',function(e){e.stopPropagation();});$(document).on('click',function(e){e.stopPropagation();var elementHide=$(elementClick).next(elementSlide);$(elementHide).slideUp();$(elementClick).removeClass('active');});}
function accordionFooter(status)
{if(status=='enable')
{$('#footer .footer-block h4').on('click',function(){$(this).toggleClass('active').parent().find('.toggle-footer').stop().slideToggle('medium');})
$('#footer').addClass('accordion').find('.toggle-footer').slideUp('fast');}
else
{$('.footer-block h4').removeClass('active').off().parent().find('.toggle-footer').removeAttr('style').slideDown('fast');$('#footer').removeClass('accordion');}}
function accordion(status)
{leftColumnBlocks=$('#left_column');if(status=='enable')
{$('#header .block .title_block, #right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4').on('click',function(){$(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');})
$('#header, #right_column, #left_column').addClass('accordion').find('.block .block_content').slideUp('fast');}
else
{$('#header .block .title_block, #right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4').removeClass('active').off().parent().find('.block_content').removeAttr('style').slideDown('fast');$('#header, #left_column, #right_column').removeClass('accordion');}}
function resizeCatimg()
{var div=$('.cat_desc').parent('div');var image=new Image;$(image).load(function(){var width=image.width;var height=image.height;var ratio=parseFloat(height/width);var calc=Math.round(ratio*parseInt(div.outerWidth(false)));div.css('min-height',calc);});if(div.length)
image.src=div.css('background-image').replace(/url\("?|"?\)$/ig,'');};/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown")}return e.focus(),!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b).on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("shown.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.options.delay&&c.options.delay.show?(c.hoverState="in",c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.options.delay&&c.options.delay.hide?(c.hoverState="out",c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){c.detach()}var c=this.tip(),d=a.Event("hide.bs."+this.type);return this.$element.trigger(d),d.isDefaultPrevented()?void 0:(c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);/*
 * TotalStorage
 *
 * Copyright (c) 2012 Jared Novack & Upstatement (upstatement.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Total Storage is the conceptual the love child of jStorage by Andris Reinman, 
 * and Cookie by Klaus Hartl -- though this is not connected to either project.
 *
 * @name $.totalStorage
 * @cat Plugins/Cookie
 * @author Jared Novack/jared@upstatement.com
 * @version 1.1.2
 * @url http://upstatement.com/blog/2012/01/jquery-local-storage-done-right-and-easy/
 */
(function($){var ls=window.localStorage;var supported;if(typeof ls=='undefined'||typeof window.JSON=='undefined'){supported=false;}else{supported=true;}
$.totalStorage=function(key,value,options){return $.totalStorage.impl.init(key,value);}
$.totalStorage.setItem=function(key,value){return $.totalStorage.impl.setItem(key,value);}
$.totalStorage.getItem=function(key){return $.totalStorage.impl.getItem(key);}
$.totalStorage.getAll=function(){return $.totalStorage.impl.getAll();}
$.totalStorage.deleteItem=function(key){return $.totalStorage.impl.deleteItem(key);}
$.totalStorage.impl={init:function(key,value){if(typeof value!='undefined'){return this.setItem(key,value);}else{return this.getItem(key);}},setItem:function(key,value){if(!supported){try{$.cookie(key,value);return value;}catch(e){console.log('Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie');}}
var saver=JSON.stringify(value);ls.setItem(key,saver);return this.parseResult(saver);},getItem:function(key){if(!supported){try{return this.parseResult($.cookie(key));}catch(e){return null;}}
return this.parseResult(ls.getItem(key));},deleteItem:function(key){if(!supported){try{$.cookie(key,null);return true;}catch(e){return false;}}
ls.removeItem(key);return true;},getAll:function(){var items=new Array();if(!supported){try{var pairs=document.cookie.split(";");for(var i=0;i<pairs.length;i++){var pair=pairs[i].split('=');var key=pair[0];items.push({key:key,value:this.parseResult($.cookie(key))});}}catch(e){return null;}}else{for(var i in ls){if(i.length){items.push({key:i,value:this.parseResult(ls.getItem(i))});}}}
return items;},parseResult:function(res){var ret;try{ret=JSON.parse(res);if(ret=='true'){ret=true;}
if(ret=='false'){ret=false;}
if(parseFloat(ret)==ret&&typeof ret!="object"){ret=parseFloat(ret);}}catch(e){}
return ret;}}})(jQuery);
;(function(wind,$,undef){"use strict";function attrOrProp($el){var args=Array.prototype.slice.call(arguments,1);if($el.prop){return $el.prop.apply($el,args);}
return $el.attr.apply($el,args);}
function bindMany($el,options,events){var name,namespaced;for(name in events){if(events.hasOwnProperty(name)){namespaced=name.replace(/ |$/g,options.eventNamespace);$el.bind(namespaced,events[name]);}}}
function bindUi($el,$target,options){bindMany($el,options,{focus:function(){$target.addClass(options.focusClass);},blur:function(){$target.removeClass(options.focusClass);$target.removeClass(options.activeClass);},mouseenter:function(){$target.addClass(options.hoverClass);},mouseleave:function(){$target.removeClass(options.hoverClass);$target.removeClass(options.activeClass);},"mousedown touchbegin":function(){if(!$el.is(":disabled")){$target.addClass(options.activeClass);}},"mouseup touchend":function(){$target.removeClass(options.activeClass);}});}
function classClearStandard($el,options){$el.removeClass(options.hoverClass+" "+options.focusClass+" "+options.activeClass);}
function classUpdate($el,className,enabled){if(enabled){$el.addClass(className);}else{$el.removeClass(className);}}
function classUpdateChecked($tag,$el,options){var c="checked",isChecked=$el.is(":"+c);if($el.prop){$el.prop(c,isChecked);}else{if(isChecked){$el.attr(c,c);}else{$el.removeAttr(c);}}
classUpdate($tag,options.checkedClass,isChecked);}
function classUpdateDisabled($tag,$el,options){classUpdate($tag,options.disabledClass,$el.is(":disabled"));}
function divSpanWrap($el,$container,method){switch(method){case"after":$el.after($container);return $el.next();case"before":$el.before($container);return $el.prev();case"wrap":$el.wrap($container);return $el.parent();}
return null;}
function divSpan($el,options,divSpanConfig){var $div,$span,id;if(!divSpanConfig){divSpanConfig={};}
divSpanConfig=$.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},divSpanConfig);$div=$('<div />');$span=$('<span />');if(options.autoHide&&$el.is(':hidden')&&$el.css('display')==='none'){$div.hide();}
if(divSpanConfig.divClass){$div.addClass(divSpanConfig.divClass);}
if(options.wrapperClass){$div.addClass(options.wrapperClass);}
if(divSpanConfig.spanClass){$span.addClass(divSpanConfig.spanClass);}
id=attrOrProp($el,'id');if(options.useID&&id){attrOrProp($div,'id',options.idPrefix+'-'+id);}
if(divSpanConfig.spanHtml){$span.html(divSpanConfig.spanHtml);}
$div=divSpanWrap($el,$div,divSpanConfig.divWrap);$span=divSpanWrap($el,$span,divSpanConfig.spanWrap);classUpdateDisabled($div,$el,options);return{div:$div,span:$span};}
function wrapWithWrapperClass($el,options){var $span;if(!options.wrapperClass){return null;}
$span=$('<span />').addClass(options.wrapperClass);$span=divSpanWrap($el,$span,"wrap");return $span;}
function highContrast(){var c,$div,el,rgb;rgb='rgb(120,2,153)';$div=$('<div style="width:0;height:0;color:'+rgb+'">');$('body').append($div);el=$div.get(0);if(wind.getComputedStyle){c=wind.getComputedStyle(el,'').color;}else{c=(el.currentStyle||el.style||{}).color;}
$div.remove();return c.replace(/ /g,'')!==rgb;}
function htmlify(text){if(!text){return"";}
return $('<span />').text(text).html();}
function isMsie(){return navigator.cpuClass&&!navigator.product;}
function isMsieSevenOrNewer(){if(wind.XMLHttpRequest!==undefined){return true;}
return false;}
function isMultiselect($el){var elSize;if($el[0].multiple){return true;}
elSize=attrOrProp($el,"size");if(!elSize||elSize<=1){return false;}
return true;}
function returnFalse(){return false;}
function noSelect($elem,options){var none='none';bindMany($elem,options,{'selectstart dragstart mousedown':returnFalse});$elem.css({MozUserSelect:none,msUserSelect:none,webkitUserSelect:none,userSelect:none});}
function setFilename($el,$filenameTag,options){var filename=$el.val();if(filename===""){filename=options.fileDefaultHtml;}else{filename=filename.split(/[\/\\]+/);filename=filename[(filename.length-1)];}
$filenameTag.text(filename);}
function swap($elements,newCss,callback){var restore,item;restore=[];$elements.each(function(){var name;for(name in newCss){if(Object.prototype.hasOwnProperty.call(newCss,name)){restore.push({el:this,name:name,old:this.style[name]});this.style[name]=newCss[name];}}});callback();while(restore.length){item=restore.pop();item.el.style[item.name]=item.old;}}
function sizingInvisible($el,callback){var targets;targets=$el.parents();targets.push($el[0]);targets=targets.not(':visible');swap(targets,{visibility:"hidden",display:"block",position:"absolute"},callback);}
function unwrapUnwrapUnbindFunction($el,options){return function(){$el.unwrap().unwrap().unbind(options.eventNamespace);};}
var allowStyling=true,highContrastTest=false,uniformHandlers=[{match:function($el){return $el.is("a, button, :submit, :reset, input[type='button']");},apply:function($el,options){var $div,defaultSpanHtml,ds,getHtml,doingClickEvent;defaultSpanHtml=options.submitDefaultHtml;if($el.is(":reset")){defaultSpanHtml=options.resetDefaultHtml;}
if($el.is("a, button")){getHtml=function(){return $el.html()||defaultSpanHtml;};}else{getHtml=function(){return htmlify(attrOrProp($el,"value"))||defaultSpanHtml;};}
ds=divSpan($el,options,{divClass:options.buttonClass,spanHtml:getHtml()});$div=ds.div;bindUi($el,$div,options);doingClickEvent=false;bindMany($div,options,{"click touchend":function(){var ev,res,target,href;if(doingClickEvent){return;}
if($el.is(':disabled')){return;}
doingClickEvent=true;if($el[0].dispatchEvent){ev=document.createEvent("MouseEvents");ev.initEvent("click",true,true);res=$el[0].dispatchEvent(ev);if($el.is('a')&&res){target=attrOrProp($el,'target');href=attrOrProp($el,'href');if(!target||target==='_self'){document.location.href=href;}else{wind.open(href,target);}}}else{$el.click();}
doingClickEvent=false;}});noSelect($div,options);return{remove:function(){$div.after($el);$div.remove();$el.unbind(options.eventNamespace);return $el;},update:function(){classClearStandard($div,options);classUpdateDisabled($div,$el,options);$el.detach();ds.span.html(getHtml()).append($el);}};}},{match:function($el){return $el.is(":checkbox");},apply:function($el,options){var ds,$div,$span;ds=divSpan($el,options,{divClass:options.checkboxClass});$div=ds.div;$span=ds.span;bindUi($el,$div,options);bindMany($el,options,{"click touchend":function(){classUpdateChecked($span,$el,options);}});classUpdateChecked($span,$el,options);return{remove:unwrapUnwrapUnbindFunction($el,options),update:function(){classClearStandard($div,options);$span.removeClass(options.checkedClass);classUpdateChecked($span,$el,options);classUpdateDisabled($div,$el,options);}};}},{match:function($el){return $el.is(":file");},apply:function($el,options){var ds,$div,$filename,$button;ds=divSpan($el,options,{divClass:options.fileClass,spanClass:options.fileButtonClass,spanHtml:options.fileButtonHtml,spanWrap:"after"});$div=ds.div;$button=ds.span;$filename=$("<span />").html(options.fileDefaultHtml);$filename.addClass(options.filenameClass);$filename=divSpanWrap($el,$filename,"after");if(!attrOrProp($el,"size")){attrOrProp($el,"size",$div.width()/10);}
function filenameUpdate(){setFilename($el,$filename,options);}
bindUi($el,$div,options);filenameUpdate();if(isMsie()){bindMany($el,options,{click:function(){$el.trigger("change");setTimeout(filenameUpdate,0);}});}else{bindMany($el,options,{change:filenameUpdate});}
noSelect($filename,options);noSelect($button,options);return{remove:function(){$filename.remove();$button.remove();return $el.unwrap().unbind(options.eventNamespace);},update:function(){classClearStandard($div,options);setFilename($el,$filename,options);classUpdateDisabled($div,$el,options);}};}},{match:function($el){if($el.is("input")){var t=(" "+attrOrProp($el,"type")+" ").toLowerCase(),allowed=" color date datetime datetime-local email month number password search tel text time url week ";return allowed.indexOf(t)>=0;}
return false;},apply:function($el,options){var elType,$wrapper;elType=attrOrProp($el,"type");$el.addClass(options.inputClass);$wrapper=wrapWithWrapperClass($el,options);bindUi($el,$el,options);if(options.inputAddTypeAsClass){$el.addClass(elType);}
return{remove:function(){$el.removeClass(options.inputClass);if(options.inputAddTypeAsClass){$el.removeClass(elType);}
if($wrapper){$el.unwrap();}},update:returnFalse};}},{match:function($el){return $el.is(":radio");},apply:function($el,options){var ds,$div,$span;ds=divSpan($el,options,{divClass:options.radioClass});$div=ds.div;$span=ds.span;bindUi($el,$div,options);bindMany($el,options,{"click touchend":function(){$.uniform.update($(':radio[name="'+attrOrProp($el,"name")+'"]'));}});classUpdateChecked($span,$el,options);return{remove:unwrapUnwrapUnbindFunction($el,options),update:function(){classClearStandard($div,options);classUpdateChecked($span,$el,options);classUpdateDisabled($div,$el,options);}};}},{match:function($el){if($el.is("select")&&!isMultiselect($el)){return true;}
return false;},apply:function($el,options){var ds,$div,$span,origElemWidth;if(options.selectAutoWidth){sizingInvisible($el,function(){origElemWidth=$el.width();});}
ds=divSpan($el,options,{divClass:options.selectClass,spanHtml:($el.find(":selected:first")||$el.find("option:first")).html(),spanWrap:"before"});$div=ds.div;$span=ds.span;if(options.selectAutoWidth){sizingInvisible($el,function(){swap($([$span[0],$div[0]]),{display:"block"},function(){var spanPad;spanPad=$span.outerWidth()-$span.width();$div.width(origElemWidth);$span.width(origElemWidth-spanPad);});});}else{$div.addClass('fixedWidth');}
bindUi($el,$div,options);bindMany($el,options,{change:function(){$span.html($el.find(":selected").html());$div.removeClass(options.activeClass);},"click touchend":function(){var selHtml=$el.find(":selected").html();if($span.html()!==selHtml){$el.trigger('change');}},keyup:function(){$span.html($el.find(":selected").html());}});noSelect($span,options);return{remove:function(){$span.remove();$el.unwrap().unbind(options.eventNamespace);return $el;},update:function(){if(options.selectAutoWidth){$.uniform.restore($el);$el.uniform(options);}else{classClearStandard($div,options);$span.html($el.find(":selected").html());classUpdateDisabled($div,$el,options);}}};}},{match:function($el){if($el.is("select")&&isMultiselect($el)){return true;}
return false;},apply:function($el,options){var $wrapper;$el.addClass(options.selectMultiClass);$wrapper=wrapWithWrapperClass($el,options);bindUi($el,$el,options);return{remove:function(){$el.removeClass(options.selectMultiClass);if($wrapper){$el.unwrap();}},update:returnFalse};}},{match:function($el){return $el.is("textarea");},apply:function($el,options){var $wrapper;$el.addClass(options.textareaClass);$wrapper=wrapWithWrapperClass($el,options);bindUi($el,$el,options);return{remove:function(){$el.removeClass(options.textareaClass);if($wrapper){$el.unwrap();}},update:returnFalse};}}];if(isMsie()&&!isMsieSevenOrNewer()){allowStyling=false;}
$.uniform={defaults:{activeClass:"active",autoHide:true,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:true,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:false,selectAutoWidth:true,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:true,wrapperClass:null},elements:[]};$.fn.uniform=function(options){var el=this;options=$.extend({},$.uniform.defaults,options);if(!highContrastTest){highContrastTest=true;if(highContrast()){allowStyling=false;}}
if(!allowStyling){return this;}
if(options.resetSelector){$(options.resetSelector).mouseup(function(){wind.setTimeout(function(){$.uniform.update(el);},10);});}
return this.each(function(){var $el=$(this),i,handler,callbacks;if($el.data("uniformed")){$.uniform.update($el);return;}
for(i=0;i<uniformHandlers.length;i=i+1){handler=uniformHandlers[i];if(handler.match($el,options)){callbacks=handler.apply($el,options);$el.data("uniformed",callbacks);$.uniform.elements.push($el.get(0));return;}}});};$.uniform.restore=$.fn.uniform.restore=function(elem){if(elem===undef){elem=$.uniform.elements;}
$(elem).each(function(){var $el=$(this),index,elementData;elementData=$el.data("uniformed");if(!elementData){return;}
elementData.remove();index=$.inArray(this,$.uniform.elements);if(index>=0){$.uniform.elements.splice(index,1);}
$el.removeData("uniformed");});};$.uniform.update=$.fn.uniform.update=function(elem){if(elem===undef){elem=$.uniform.elements;}
$(elem).each(function(){var $el=$(this),elementData;elementData=$el.data("uniformed");if(!elementData){return;}
elementData.update($el,elementData.options);});};}(this,jQuery));$(window).load(function(){$("select.form-control,input[type='checkbox']:not(.comparator), input[type='radio'],input#id_carrier2, input[type='file']").uniform();});$(window).resize(function(){$.uniform.update("select.form-control, input[type='file']");});;/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case"inline":case"ajax":case"html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=a.tpl.image.replace("{href}",g);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case"inside":c=b.skin;break;case"outside":c=b.wrap;break;case"over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;$(document).ready(function(){$(document).on('click','.add_to_compare',function(e){e.preventDefault();if(typeof addToCompare!='undefined')
addToCompare(parseInt($(this).data('id-product')));});reloadProductComparison();compareButtonsStatusRefresh();totalCompareButtons();});function addToCompare(productId)
{var totalValueNow=parseInt($('.bt_compare').next('.compare_product_count').val());var action,totalVal;if($.inArray(parseInt(productId),comparedProductsIds)===-1)
action='add';else
action='remove';$.ajax({url:'index.php?controller=products-comparison&ajax=1&action='+action+'&id_product='+productId,async:true,cache:false,success:function(data){if(action==='add'&&comparedProductsIds.length<comparator_max_item){comparedProductsIds.push(parseInt(productId)),compareButtonsStatusRefresh(),totalVal=totalValueNow+1,$('.bt_compare').next('.compare_product_count').val(totalVal),totalValue(totalVal);}
else if(action==='remove'){comparedProductsIds.splice($.inArray(parseInt(productId),comparedProductsIds),1),compareButtonsStatusRefresh(),totalVal=totalValueNow-1,$('.bt_compare').next('.compare_product_count').val(totalVal),totalValue(totalVal);}
else
{if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:true,minHeight:30,content:'<p class="fancybox-error">'+max_item+'</p>'}],{padding:0});else
alert(max_item);}
totalCompareButtons();},error:function(){}});}
function reloadProductComparison()
{$(document).on('click','a.cmp_remove',function(e){e.preventDefault();var idProduct=parseInt($(this).data('id-product'));$.ajax({url:'index.php?controller=products-comparison&ajax=1&action=remove&id_product='+idProduct,async:false,cache:false});$('td.product-'+idProduct).fadeOut(600);});};function compareButtonsStatusRefresh()
{$('.add_to_compare').each(function(){if($.inArray(parseInt($(this).data('id-product')),comparedProductsIds)!==-1)
$(this).addClass('checked');else
$(this).removeClass('checked');});}
function totalCompareButtons()
{var totalProductsToCompare=parseInt($('.bt_compare .total-compare-val').html());if(typeof totalProductsToCompare!=="number"||totalProductsToCompare===0)
$('.bt_compare').attr("disabled",true);else
$('.bt_compare').attr("disabled",false);}
function totalValue(value)
{$('.bt_compare').find('.total-compare-val').html(value);};;/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case"inline":case"ajax":case"html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=a.tpl.image.replace("{href}",g);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case"inside":c=b.skin;break;case"outside":c=b.wrap;break;case"over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;(function($){$.fn.idTabs=function(){var s={"start":null,"return":false,"click":null};for(var i=0;i<arguments.length;++i){var n={},a=arguments[i];switch(typeof a){case"object":$.extend(n,a);break;case"number":case"string":n.start=a;break;case"boolean":n["return"]=a;break;case"function":n.click=a;break;};$.extend(s,n);}
var self=this;var list=$("a[href^='#']",this).click(function(){if($("a.selected",self)[0]==this)
return s["return"];var id="#"+this.href.split('#')[1];var aList=[];var idList=[];$("a",self).each(function(){if(this.href.match(/#/)){aList[aList.length]=this;idList[idList.length]="#"+this.href.split('#')[1];}});if(s.click&&!s.click(id,idList,self))return s["return"];for(i in aList)$(aList[i]).removeClass("selected");for(i in idList){$(idList[i]).addClass('block_hidden_only_for_screen');}
$(this).addClass("selected");$(id).removeClass('block_hidden_only_for_screen');return s["return"];});var test;if(typeof s.start=="number"&&(test=list.filter(":eq("+s.start+")")).length)
test.click();else if(typeof s.start=="string"&&(test=list.filter("[href='#"+s.start+"']")).length)
test.click();else if((test=list.filter(".selected")).length)
test.removeClass("selected").click();else list.filter(":first").click();return this;};$(function(){$(".idTabs").each(function(){$(this).idTabs();});});})(jQuery);;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:0,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));;(function(a){var b=a.serialScroll=function(c){return a(window).serialScroll(c)};b.defaults={duration:1e3,axis:"x",event:"click",start:0,step:1,lock:!0,cycle:!0,constant:!0};a.fn.serialScroll=function(c){return this.each(function(){var t=a.extend({},b.defaults,c),s=t.event,i=t.step,r=t.lazy,e=t.target?this:document,u=a(t.target||this,e),p=u[0],m=t.items,h=t.start,g=t.interval,k=t.navigation,l;if(!r){m=d()}if(t.force){f({},h)}a(t.prev||[],e).bind(s,-i,q);a(t.next||[],e).bind(s,i,q);if(!p.ssbound){u.bind("prev.serialScroll",-i,q).bind("next.serialScroll",i,q).bind("goto.serialScroll",f)}if(g){u.bind("start.serialScroll",function(v){if(!g){o();g=!0;n()}}).bind("stop.serialScroll",function(){o();g=!1})}u.bind("notify.serialScroll",function(x,w){var v=j(w);if(v>-1){h=v}});p.ssbound=!0;if(t.jump){(r?u:d()).bind(s,function(v){f(v,j(v.target))})}if(k){k=a(k,e).bind(s,function(v){v.data=Math.round(d().length/k.length)*k.index(this);f(v,this)})}function q(v){v.data+=h;f(v,this)}function f(B,z){if(!isNaN(z)){B.data=z;z=p}var C=B.data,v,D=B.type,A=t.exclude?d().slice(0,-t.exclude):d(),y=A.length,w=A[C],x=t.duration;if(D){B.preventDefault()}if(g){o();l=setTimeout(n,t.interval)}if(!w){v=C<0?0:y-1;if(h!=v){C=v}else{if(!t.cycle){return}else{C=y-v-1}}w=A[C]}if(!w||t.lock&&u.is(":animated")||D&&t.onBefore&&t.onBefore(B,w,u,d(),C)===!1){return}if(t.stop){u.queue("fx",[]).stop()}if(t.constant){x=Math.abs(x/i*(h-C))}u.scrollTo(w,x,t).trigger("notify.serialScroll",[C])}function n(){u.trigger("next.serialScroll")}function o(){clearTimeout(l)}function d(){return a(m,p)}function j(w){if(!isNaN(w)){return w}var x=d(),v;while((v=x.index(w))==-1&&w!=p){w=w.parentNode}return v}})}})(jQuery);;!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);;var selectedCombination=[];var globalQuantity=0;var colors=[];$(document).ready(function(){if(typeof customizationFields!=='undefined'&&customizationFields)
{var customizationFieldsBk=customizationFields;customizationFields=[];var j=0;for(var i=0;i<customizationFieldsBk.length;++i)
{var key='pictures_'+parseInt(id_product)+'_'+parseInt(customizationFieldsBk[i]['id_customization_field']);customizationFields[i]=[];customizationFields[i][0]=(parseInt(customizationFieldsBk[i]['type'])==0)?'img'+i:'textField'+j++;customizationFields[i][1]=(parseInt(customizationFieldsBk[i]['type'])==0&&customizationFieldsBk[i][key])?2:parseInt(customizationFieldsBk[i]['required']);}}
if(typeof combinationImages!=='undefined'&&combinationImages)
{combinationImagesJS=[];combinationImagesJS[0]=[];var k=0;for(var i in combinationImages)
{combinationImagesJS[i]=[];for(var j in combinationImages[i])
{var id_image=parseInt(combinationImages[i][j]['id_image']);if(id_image)
{combinationImagesJS[0][k++]=id_image;combinationImagesJS[i][j]=[];combinationImagesJS[i][j]=id_image;}}}
if(typeof combinationImagesJS[0]!=='undefined'&&combinationImagesJS[0])
{var array_values=[];for(var key in arrayUnique(combinationImagesJS[0]))
array_values.push(combinationImagesJS[0][key]);combinationImagesJS[0]=array_values;}
combinationImages=combinationImagesJS;}
if(typeof combinations!=='undefined'&&combinations)
{combinationsJS=[];var k=0;for(var i in combinations)
{globalQuantity+=combinations[i]['quantity'];combinationsJS[k]=[];combinationsJS[k]['idCombination']=parseInt(i);combinationsJS[k]['idsAttributes']=combinations[i]['attributes'];combinationsJS[k]['quantity']=combinations[i]['quantity'];combinationsJS[k]['price']=combinations[i]['price'];combinationsJS[k]['ecotax']=combinations[i]['ecotax'];combinationsJS[k]['image']=parseInt(combinations[i]['id_image']);combinationsJS[k]['reference']=combinations[i]['reference'];combinationsJS[k]['unit_price']=combinations[i]['unit_impact'];combinationsJS[k]['minimal_quantity']=parseInt(combinations[i]['minimal_quantity']);combinationsJS[k]['available_date']=[];combinationsJS[k]['available_date']['date']=combinations[i]['available_date'];combinationsJS[k]['available_date']['date_formatted']=combinations[i]['date_formatted'];combinationsJS[k]['specific_price']=[];combinationsJS[k]['specific_price']['reduction_percent']=(combinations[i]['specific_price']&&combinations[i]['specific_price']['reduction']&&combinations[i]['specific_price']['reduction_type']=='percentage')?combinations[i]['specific_price']['reduction']*100:0;combinationsJS[k]['specific_price']['reduction_price']=(combinations[i]['specific_price']&&combinations[i]['specific_price']['reduction']&&combinations[i]['specific_price']['reduction_type']=='amount')?combinations[i]['specific_price']['reduction']:0;combinationsJS[k]['price']=(combinations[i]['specific_price']&&combinations[i]['specific_price']['price']&&parseInt(combinations[i]['specific_price']['price'])!=-1)?combinations[i]['specific_price']['price']:combinations[i]['price'];combinationsJS[k]['reduction_type']=(combinations[i]['specific_price']&&combinations[i]['specific_price']['reduction_type'])?combinations[i]['specific_price']['reduction_type']:'';combinationsJS[k]['id_product_attribute']=(combinations[i]['specific_price']&&combinations[i]['specific_price']['id_product_attribute'])?combinations[i]['specific_price']['id_product_attribute']:0;k++;}
combinations=combinationsJS;}
$('#thumbs_list').serialScroll({items:'li:visible',prev:'#view_scroll_left',next:'#view_scroll_right',axis:'x',offset:0,start:0,stop:true,onBefore:serialScrollFixLock,duration:700,step:1,lazy:true,lock:false,force:false,cycle:false});$('#thumbs_list').trigger('goto',1);$('#thumbs_list').trigger('goto',0);$('#views_block li a').hover(function(){displayImage($(this));},function(){});if(typeof(jqZoomEnabled)!='undefined'&&jqZoomEnabled)
{$('.jqzoom').jqzoom({zoomType:'innerzoom',zoomWidth:458,zoomHeight:458,xOffset:21,yOffset:0,title:false});}
$(document).on('click','#view_full_size, #image-block',function(e){$('#views_block .shown').click();});$(document).on('click','#short_description_block .button',function(e){$('#more_info_tab_more_info').click();$.scrollTo('#more_info_tabs',1200);});$(document).on('click','#customizedDatas input',function(e){$('#customizedDatas input').hide();$('#ajax-loader').fadeIn();$('#customizedDatas').append(uploading_in_progress);});original_url=window.location+'';first_url_check=true;var url_found=checkUrl();initLocationChange();if(typeof productHasAttributes!='undefined'&&productHasAttributes&&!url_found)
findCombination(true);else if(typeof productHasAttributes!='undefined'&&!productHasAttributes&&!url_found)
refreshProductImages(0);$(document).on('click','a[name=resetImages]',function(e){e.preventDefault();refreshProductImages(0);});$(document).on('click','.color_pick',function(e){e.preventDefault();colorPickerClick($(this));getProductAttribute();});$(document).on('change','.attribute_select',function(e){e.preventDefault();findCombination();getProductAttribute();});$(document).on('click','.attribute_radio',function(e){e.preventDefault();findCombination();getProductAttribute();});$(document).on('click','button[name=saveCustomization]',function(e){saveCustomization();});if(contentOnly==false)
{if(!!$.prototype.fancybox)
$('li:visible .fancybox').fancybox({'hideOnContentClick':true,'openEffect':'elastic','closeEffect':'elastic'});}
else
{$(document).on('click','.fancybox',function(e){e.preventDefault();});$(document).on('click','#image-block',function(e){e.preventDefault();var productUrl=window.document.location.href+'';var data=productUrl.replace('content_only=1','');window.parent.document.location.href=data;});if(typeof ajax_allowed!='undefined'&&!ajax_allowed)
$('#buy_block').attr('target','_top');}
if(!!$.prototype.bxSlider)
$('#bxslider').bxSlider({minSlides:1,maxSlides:6,slideWidth:178,slideMargin:20,pager:false,nextText:'',prevText:'',moveSlides:1,infiniteLoop:false,hideControlOnEnd:true});$(document).on('click','.product_quantity_up',function(e){e.preventDefault();fieldName=$(this).data('field-qty');var currentVal=parseInt($('input[name='+fieldName+']').val());if(quantityAvailable>0){quantityAvailableT=quantityAvailable;}else{quantityAvailableT=100000000;}
if(!isNaN(currentVal)&&currentVal<quantityAvailableT){$('input[name='+fieldName+']').val(currentVal+1).trigger('keyup');}else{$('input[name='+fieldName+']').val(quantityAvailableT);}});$(document).on('click','.product_quantity_down',function(e){e.preventDefault();fieldName=$(this).data('field-qty');var currentVal=parseInt($('input[name='+fieldName+']').val());if(!isNaN(currentVal)&&currentVal>1){$('input[name='+fieldName+']').val(currentVal-1).trigger('keyup');}else{$('input[name='+fieldName+']').val(1);}});if(typeof minimalQuantity!='undefined'&&minimalQuantity)
{checkMinimalQuantity();$(document).on('keyup','input[name=qty]',function(e){checkMinimalQuantity(minimalQuantity);});}
if(typeof ad!=='undefined'&&ad&&typeof adtoken!=='undefined'&&adtoken)
{$(document).on('click','input[name=publish_button]',function(e){e.preventDefault();submitPublishProduct(ad,0,adtoken);});$(document).on('click','input[name=lnk_view]',function(e){e.preventDefault();submitPublishProduct(ad,1,adtoken);});}
if(typeof product_fileDefaultHtml!=='undefined')
$.uniform.defaults.fileDefaultHtml=product_fileDefaultHtml;if(typeof product_fileButtonHtml!=='undefined')
$.uniform.defaults.fileButtonHtml=product_fileButtonHtml;});function arrayUnique(a)
{return a.reduce(function(p,c){if(p.indexOf(c)<0)
p.push(c);return p;},[]);};function function_exists(function_name)
{if(typeof function_name=='string')
return(typeof window[function_name]=='function');return(function_name instanceof Function);}
function oosHookJsCode()
{for(var i=0;i<oosHookJsCodeFunctions.length;i++)
{if(function_exists(oosHookJsCodeFunctions[i]))
setTimeout(oosHookJsCodeFunctions[i]+'()',0);}}
function addCombination(idCombination,arrayOfIdAttributes,quantity,price,ecotax,id_image,reference,unit_price,minimal_quantity,available_date,combination_specific_price)
{globalQuantity+=quantity;var combination=[];combination['idCombination']=idCombination;combination['quantity']=quantity;combination['idsAttributes']=arrayOfIdAttributes;combination['price']=price;combination['ecotax']=ecotax;combination['image']=id_image;combination['reference']=reference;combination['unit_price']=unit_price;combination['minimal_quantity']=minimal_quantity;combination['available_date']=[];combination['available_date']=available_date;combination['specific_price']=[];combination['specific_price']=combination_specific_price;combinations.push(combination);}
function findCombination(firstTime)
{$('#minimal_quantity_wanted_p').fadeOut();if(typeof $('#minimal_quantity_label').text()==='undefined'||$('#minimal_quantity_label').html()>1)
$('#quantity_wanted').val(1);var choice=[];var radio_inputs=parseInt($('#attributes .checked > input[type=radio]').length);if(radio_inputs)
radio_inputs='#attributes .checked > input[type=radio]';else
radio_inputs='#attributes input[type=radio]:checked';$('#attributes select, #attributes input[type=hidden], '+radio_inputs).each(function(){choice.push(parseInt($(this).val()));});if(typeof combinations=='undefined'||!combinations)
combinations=[];for(var combination=0;combination<combinations.length;++combination)
{var combinationMatchForm=true;$.each(combinations[combination]['idsAttributes'],function(key,value)
{if(!in_array(parseInt(value),choice))
combinationMatchForm=false;});if(combinationMatchForm)
{if(combinations[combination]['minimal_quantity']>1)
{$('#minimal_quantity_label').html(combinations[combination]['minimal_quantity']);$('#minimal_quantity_wanted_p').fadeIn();$('#quantity_wanted').val(combinations[combination]['minimal_quantity']);$('#quantity_wanted').bind('keyup',function(){checkMinimalQuantity(combinations[combination]['minimal_quantity']);});}
selectedCombination['unavailable']=false;selectedCombination['reference']=combinations[combination]['reference'];$('#idCombination').val(combinations[combination]['idCombination']);quantityAvailable=combinations[combination]['quantity'];selectedCombination['price']=combinations[combination]['price'];selectedCombination['unit_price']=combinations[combination]['unit_price'];selectedCombination['specific_price']=combinations[combination]['specific_price'];if(combinations[combination]['ecotax'])
selectedCombination['ecotax']=combinations[combination]['ecotax'];else
selectedCombination['ecotax']=default_eco_tax;if(combinations[combination]['image']&&combinations[combination]['image']!=-1)
displayImage($('#thumb_'+combinations[combination]['image']).parent());if(combinations[combination]['idCombination']&&combinations[combination]['idCombination']>0)
displayDiscounts(combinations[combination]['idCombination']);selectedCombination['available_date']=combinations[combination]['available_date'];updateDisplay();if(typeof(firstTime)!='undefined'&&firstTime)
refreshProductImages(0);else
refreshProductImages(combinations[combination]['idCombination']);return;}}
selectedCombination['unavailable']=true;if(typeof(selectedCombination['available_date'])!='undefined')
delete selectedCombination['available_date'];updateDisplay();}
function updateDisplay()
{var productPriceDisplay=productPrice;var productPriceWithoutReductionDisplay=productPriceWithoutReduction;if(!selectedCombination['unavailable']&&quantityAvailable>0&&productAvailableForOrder==1)
{$('#quantity_wanted_p:hidden').show('slow');$('#add_to_cart:hidden').fadeIn(600);$('#oosHook').hide();$('#availability_date').fadeOut();if(availableNowValue!='')
{$('#availability_value').removeClass('warning_inline');$('#availability_value').text(availableNowValue);if(stock_management==1)
$('#availability_statut:hidden').show();}
else
$('#availability_statut:visible').hide();if(!allowBuyWhenOutOfStock)
{if(quantityAvailable<=maxQuantityToAllowDisplayOfLastQuantityMessage)
$('#last_quantities').show('slow');else
$('#last_quantities').hide('slow');}
if(quantitiesDisplayAllowed)
{$('#pQuantityAvailable:hidden').show('slow');$('#quantityAvailable').text(quantityAvailable);if(quantityAvailable<2)
{$('#quantityAvailableTxt').show();$('#quantityAvailableTxtMultiple').hide();}
else
{$('#quantityAvailableTxt').hide();$('#quantityAvailableTxtMultiple').show();}}}
else
{if(productAvailableForOrder==1)
{$('#oosHook').show();if($('#oosHook').length>0&&function_exists('oosHookJsCode'))
oosHookJsCode();}
$('#last_quantities:visible').hide('slow');$('#pQuantityAvailable:visible').hide('slow');if(!allowBuyWhenOutOfStock)
$('#quantity_wanted_p:visible').hide('slow');if(!selectedCombination['unavailable'])
{$('#availability_value').text(doesntExistNoMore+(globalQuantity>0?' '+doesntExistNoMoreBut:''));if(!allowBuyWhenOutOfStock)
$('#availability_value').addClass('warning_inline');}
else
{$('#availability_value').text(doesntExist).addClass('warning_inline');$('#oosHook').hide();}
if(stock_management==1&&!allowBuyWhenOutOfStock)
$('#availability_statut:hidden').show();if(typeof(selectedCombination['available_date'])!='undefined'&&selectedCombination['available_date']['date'].length!=0)
{var available_date=selectedCombination['available_date']['date'];var tab_date=available_date.split('-');var time_available=new Date(tab_date[0],tab_date[1],tab_date[2]);time_available.setMonth(time_available.getMonth()-1);var now=new Date();if(now.getTime()<time_available.getTime()&&$('#availability_date_value').text()!=selectedCombination['available_date']['date_formatted'])
{$('#availability_date').fadeOut('normal',function(){$('#availability_date_value').text(selectedCombination['available_date']['date_formatted']);$(this).fadeIn();});}
else if(now.getTime()<time_available.getTime())
$('#availability_date').fadeIn();}
else
$('#availability_date').fadeOut();if(allowBuyWhenOutOfStock&&!selectedCombination['unavailable']&&productAvailableForOrder==1)
{$('#add_to_cart:hidden').fadeIn(600);if(availableLaterValue!='')
{$('#availability_value').text(availableLaterValue);if(stock_management==1)
$('#availability_statut:hidden').show('slow');}
else
$('#availability_statut:visible').hide('slow');}
else
{$('#add_to_cart:visible').fadeOut(600);if(stock_management==1)
$('#availability_statut:hidden').show('slow');}
if(productAvailableForOrder==0)
$('#availability_statut:visible').hide();}
if(selectedCombination['reference']||productReference)
{if(selectedCombination['reference'])
$('#product_reference span').text(selectedCombination['reference']);else if(productReference)
$('#product_reference span').text(productReference);$('#product_reference:hidden').show('slow');}
else
$('#product_reference:visible').hide('slow');if(productHasAttributes)
updatePrice();}
function updatePrice()
{combID=$('#idCombination').val();combination=combinationsFromController[combID];if(typeof combination=='undefined')
return;var basePriceWithoutTax=productBasePriceTaxExcl;var priceWithGroupReductionWithoutTax=0;basePriceWithoutTax=basePriceWithoutTax+combination.price;if(combination.specific_price&&combination.specific_price.price>0)
basePriceWithoutTax=combination.specific_price.price;priceWithGroupReductionWithoutTax=ps_round(basePriceWithoutTax*(1-group_reduction),2);var priceWithDiscountsWithoutTax=priceWithGroupReductionWithoutTax;if(noTaxForThisProduct||customerGroupWithoutTax)
{basePriceDisplay=basePriceWithoutTax;priceWithDiscountsDisplay=priceWithDiscountsWithoutTax;}
else
{basePriceDisplay=basePriceWithoutTax*(taxRate/100+1);priceWithDiscountsDisplay=priceWithDiscountsWithoutTax*(taxRate/100+1);if(default_eco_tax)
{basePriceDisplay=basePriceDisplay+default_eco_tax*(1+ecotaxTax_rate/100);priceWithDiscountsDisplay=priceWithDiscountsDisplay+default_eco_tax*(1+ecotaxTax_rate/100);}}
if(combination.specific_price&&combination.specific_price.reduction>0)
if(combination.specific_price.reduction_type=='amount')
{priceWithDiscountsDisplay=priceWithDiscountsDisplay-combination.specific_price.reduction;priceWithDiscountsWithoutTax=priceWithDiscountsDisplay*(1/(1+taxRate)/100);}
else if(combination.specific_price.reduction_type=='percentage')
{priceWithDiscountsDisplay=priceWithDiscountsDisplay*(1-combination.specific_price.reduction);priceWithDiscountsWithoutTax=priceWithDiscountsDisplay*(1/(1+taxRate)/100);}
if(basePriceDisplay!=priceWithDiscountsDisplay)
{var discountValue=basePriceDisplay-priceWithDiscountsDisplay;var discountPercentage=(1-(priceWithDiscountsDisplay/basePriceDisplay))*100;}
$('#reduction_percent').hide();$('#reduction_amount').hide();$('#old_price,#old_price_display,#old_price_display_taxes').hide();$('.price-ecotax').hide();$('.unit-price').hide();$('#our_price_display').text(formatCurrency(priceWithDiscountsDisplay*currencyRate,currencyFormat,currencySign,currencyBlank));precio=priceWithDiscountsDisplay*currencyRate;precio_fomateado=myRound(precio);$('#our_price_display').text(formatNumber(precio_fomateado,2,'.',','));if(priceWithDiscountsDisplay.toFixed(2)!=basePriceDisplay.toFixed(2))
{$('#old_price_display').text(formatCurrency(basePriceDisplay*currencyRate,currencyFormat,currencySign,currencyBlank));$('#old_price,#old_price_display,#old_price_display_taxes').show();if(priceWithDiscountsWithoutTax!=priceWithGroupReductionWithoutTax)
{if(combination.specific_price.reduction_type=='amount')
{$('#reduction_amount_display').html('-'+formatCurrency(parseFloat(discountValue),currencyFormat,currencySign,currencyBlank));$('#reduction_amount').show();}
else
{$('#reduction_percent_display').html('-'+parseFloat(discountPercentage).toFixed(0)+'%');$('#reduction_percent').show();}}}
if(default_eco_tax)
{ecotax=default_eco_tax;if(combination.ecotax)
ecotax=combination.ecotax;if(!noTaxForThisProduct)
ecotax=ecotax*(1+ecotaxTax_rate/100)
$('#ecotax_price_display').text(formatCurrency(ecotax*currencyRate,currencyFormat,currencySign,currencyBlank));$('.price-ecotax').show();}
if(productUnitPriceRatio>0)
{unit_price=priceWithDiscountsDisplay/productUnitPriceRatio;$('#unit_price_display').text(formatCurrency(unit_price*currencyRate,currencyFormat,currencySign,currencyBlank));$('.unit-price').show();}
updateDiscountTable(priceWithDiscountsDisplay);}
function myRound(num,dec){var exp=Math.pow(10,dec||2);return parseInt(num*exp,10)/exp;}
function displayImage(domAAroundImgThumb,no_animation)
{if(typeof(no_animation)=='undefined')
no_animation=false;if(domAAroundImgThumb.prop('href'))
{var new_src=domAAroundImgThumb.attr('href').replace('thickbox','large');var new_title=domAAroundImgThumb.attr('title');var new_href=domAAroundImgThumb.attr('href');if($('#bigpic').prop('src')!=new_src)
{$('#bigpic').attr({'src':new_src,'alt':new_title,'title':new_title}).load(function(){if(typeof(jqZoomEnabled)!='undefined'&&jqZoomEnabled)
$(this).attr('rel',new_href);});}
$('#views_block li a').removeClass('shown');$(domAAroundImgThumb).addClass('shown');}}
function displayDiscounts(combination)
{$('#quantityDiscount tbody tr').each(function(){if(($(this).attr('id')!='quantityDiscount_0')&&($(this).attr('id')!='quantityDiscount_'+combination)&&($(this).attr('id')!='noQuantityDiscount'))
$(this).fadeOut('slow');});if($('#quantityDiscount_'+combination+',.quantityDiscount_'+combination).length!=0||$('#quantityDiscount_0,.quantityDiscount_0').length!=0)
{$('#quantityDiscount').parent().show();$('#quantityDiscount_'+combination+',.quantityDiscount_'+combination).show();$('#noQuantityDiscount').hide();}
else
{$('#quantityDiscount').parent().hide();$('#noQuantityDiscount').show();}}
function updateDiscountTable(newPrice)
{$('#quantityDiscount tbody tr').each(function(){var type=$(this).data("discount-type");var discount=$(this).data("discount");var quantity=$(this).data("discount-quantity");if(type=='percentage')
{var discountedPrice=newPrice*(1-discount/100);var discountUpTo=newPrice*(discount/100)*quantity;}
else if(type=='amount')
{var discountedPrice=newPrice-discount;var discountUpTo=discount*quantity;}
if(displayDiscountPrice!=0)
$(this).children('td').eq(1).text(formatCurrency(discountedPrice,currencyFormat,currencySign,currencyBlank));$(this).children('td').eq(2).text(upToTxt+' '+formatCurrency(discountUpTo,currencyFormat,currencySign,currencyBlank));});}
function serialScrollFixLock(event,targeted,scrolled,items,position)
{serialScrollNbImages=$('#thumbs_list li:visible').length;serialScrollNbImagesDisplayed=5;var leftArrow=position==0?true:false;var rightArrow=position+serialScrollNbImagesDisplayed>=serialScrollNbImages?true:false;$('#view_scroll_left').css('cursor',leftArrow?'default':'pointer').css('display',leftArrow?'none':'block').fadeTo(0,leftArrow?0:1);$('#view_scroll_right').css('cursor',rightArrow?'default':'pointer').fadeTo(0,rightArrow?0:1).css('display',rightArrow?'none':'block');return true;}
function refreshProductImages(id_product_attribute)
{$('#thumbs_list_frame').scrollTo('li:eq(0)',700,{axis:'x'});id_product_attribute=parseInt(id_product_attribute);if(id_product_attribute>0&&typeof(combinationImages)!='undefined'&&typeof(combinationImages[id_product_attribute])!='undefined')
{$('#thumbs_list li').hide();$('#thumbs_list').trigger('goto',0);for(var i=0;i<combinationImages[id_product_attribute].length;i++)
if(typeof(jqZoomEnabled)!='undefined'&&jqZoomEnabled)
$('#thumbnail_'+parseInt(combinationImages[id_product_attribute][i])).show().children('a.shown').trigger('click');else
$('#thumbnail_'+parseInt(combinationImages[id_product_attribute][i])).show();}
else
$('#thumbs_list li').show();if(parseInt($('#thumbs_list_frame >li:visible').length)!=parseInt($('#thumbs_list_frame >li').length))
$('#wrapResetImages').stop(true,true).show();else
$('#wrapResetImages').stop(true,true).hide();var thumb_width=$('#thumbs_list_frame >li').outerWidth()+parseInt($('#thumbs_list_frame >li').css('marginRight'));$('#thumbs_list_frame').width((parseInt((thumb_width)*$('#thumbs_list_frame >li').length))+'px');$('#thumbs_list').trigger('goto',0);serialScrollFixLock('','','','',0);}
function saveCustomization()
{$('#quantityBackup').val($('#quantity_wanted').val());customAction=$('#customizationForm').attr('action');$('body select[id^="group_"]').each(function(){customAction=customAction.replace(new RegExp(this.id+'=\\d+'),this.id+'='+this.value);});$('#customizationForm').attr('action',customAction);$('#customizationForm').submit();}
function submitPublishProduct(url,redirect,token)
{var id_product=$('#admin-action-product-id').val();$.ajaxSetup({async:false});$.post(url+'/index.php',{action:'publishProduct',id_product:id_product,status:1,redirect:redirect,ajax:1,tab:'AdminProducts',token:token},function(data)
{if(data.indexOf('error')===-1)
document.location.href=data;});return true;}
function checkMinimalQuantity(minimal_quantity)
{if($('#quantity_wanted').val()<minimal_quantity)
{$('#quantity_wanted').css('border','1px solid red');$('#minimal_quantity_wanted_p').css('color','red');}
else
{$('#quantity_wanted').css('border','1px solid #BDC2C9');$('#minimal_quantity_wanted_p').css('color','#374853');}}
function colorPickerClick(elt)
{id_attribute=$(elt).attr('id').replace('color_','');$(elt).parent().parent().children().removeClass('selected');$(elt).fadeTo('fast',1,function(){$(this).fadeTo('fast',0,function(){$(this).fadeTo('fast',1,function(){$(this).parent().addClass('selected');});});});$(elt).parent().parent().parent().children('.color_pick_hidden').val(id_attribute);findCombination(false);}
function getProductAttribute()
{product_attribute_id=$('#idCombination').val();product_id=$('#product_page_product_id').val();request='';var tab_attributes=[];var radio_inputs=parseInt($('#attributes .checked > input[type=radio]').length);if(radio_inputs)
radio_inputs='#attributes .checked > input[type=radio]';else
radio_inputs='#attributes input[type=radio]:checked';$('#attributes select, #attributes input[type=hidden], '+radio_inputs).each(function(){tab_attributes.push($(this).val());});for(var i in attributesCombinations)
for(var a in tab_attributes)
if(attributesCombinations[i]['id_attribute']===tab_attributes[a])
request+='/'+attributesCombinations[i]['group']+attribute_anchor_separator+attributesCombinations[i]['attribute'];request=request.replace(request.substring(0,1),'#/');url=window.location+'';if(url.indexOf('#')!=-1)
url=url.substring(0,url.indexOf('#'));$('#customizationForm').attr('action',$('#customizationForm').attr('action')+request);window.location=url+request;}
function initLocationChange(time)
{if(!time)time=500;setInterval(checkUrl,time);}
function checkUrl()
{if(original_url!=window.location||first_url_check)
{first_url_check=false;url=window.location+'';if(url.indexOf('#/')!=-1)
{params=url.substring(url.indexOf('#')+1,url.length);tabParams=params.split('/');tabValues=[];if(tabParams[0]=='')
tabParams.shift();for(var i in tabParams)
tabValues.push(tabParams[i].split(attribute_anchor_separator));product_id=$('#product_page_product_id').val();$('.color_pick').removeClass('selected');$('.color_pick').parent().parent().children().removeClass('selected');count=0;for(var z in tabValues)
for(var a in attributesCombinations)
if(attributesCombinations[a]['group']===decodeURIComponent(tabValues[z][0])&&attributesCombinations[a]['attribute']===tabValues[z][1])
{count++;$('#color_'+attributesCombinations[a]['id_attribute']).addClass('selected');$('#color_'+attributesCombinations[a]['id_attribute']).parent().addClass('selected');$('input:radio[value='+attributesCombinations[a]['id_attribute']+']').attr('checked',true);$('input[type=hidden][name=group_'+attributesCombinations[a]['id_attribute_group']+']').val(attributesCombinations[a]['id_attribute']);$('select[name=group_'+attributesCombinations[a]['id_attribute_group']+']').val(attributesCombinations[a]['id_attribute']);}
if(count>=0)
{findCombination(false);original_url=url;return true;}
else
window.location=url.substring(0,url.indexOf('#'));}}
return false;}
function redondeo(numero,decimales)
{var flotante=parseFloat(numero);var resultado=Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);return resultado;};;/*!
 * jQzoom Evolution Library v2.3  - Javascript Image magnifier
 * http://www.mind-projects.it
 *
 * Copyright 2011, Engineer Marco Renzi
 * Licensed under the BSD license.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the organization nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * Date: 03 May 2011 22:16:00
 */
(function($){var isIE6=($.browser.msie&&$.browser.version<7);var body=$(document.body);var window=$(window);var jqzoompluging_disabled=false;$.fn.jqzoom=function(options){return this.each(function(){var node=this.nodeName.toLowerCase();if(node=='a'){new jqzoom(this,options);}});};jqzoom=function(el,options){var api=null;api=$(el).data("jqzoom");if(api)return api;var obj=this;var settings=$.extend({},$.jqzoom.defaults,options||{});obj.el=el;el.rel=$(el).attr('rel');el.zoom_active=false;el.zoom_disabled=false;el.largeimageloading=false;el.largeimageloaded=false;el.scale={};el.timer=null;el.mousepos={};el.mouseDown=false;$(el).css({'outline-style':'none','text-decoration':'none'});var img=$("img:eq(0)",el);el.title=$(el).attr('title');el.imagetitle=img.attr('title');var zoomtitle=($.trim(el.title).length>0)?el.title:el.imagetitle;var smallimage=new Smallimage(img);var lens=new Lens();var stage=new Stage();var largeimage=new Largeimage();var loader=new Loader();$(el).bind('click',function(e){e.preventDefault();return false;});var zoomtypes=['standard','drag','innerzoom','reverse'];if($.inArray($.trim(settings.zoomType),zoomtypes)<0){settings.zoomType='standard';}
$.extend(obj,{create:function(){if($(".zoomPad",el).length==0){el.zoomPad=$('<div/>').addClass('zoomPad');img.wrap(el.zoomPad);}
if(settings.zoomType=='innerzoom'){settings.zoomWidth=smallimage.w;settings.zoomHeight=smallimage.h;}
if($(".zoomPup",el).length==0){lens.append();}
if($(".zoomWindow",el).length==0){stage.append();}
if($(".zoomPreload",el).length==0){loader.append();}
if(settings.preloadImages||settings.zoomType=='drag'||settings.alwaysOn){obj.load();}
obj.init();},init:function(){if(settings.zoomType=='drag'){$(".zoomPad",el).mousedown(function(){el.mouseDown=true;});$(".zoomPad",el).mouseup(function(){el.mouseDown=false;});document.body.ondragstart=function(){return false;};$(".zoomPad",el).css({cursor:'default'});$(".zoomPup",el).css({cursor:'move'});}
if(settings.zoomType=='innerzoom'){$(".zoomWrapper",el).css({cursor:'crosshair'});}
$(".zoomPad",el).bind('mouseenter mouseover',function(event){img.attr('title','');$(el).attr('title','');el.zoom_active=true;smallimage.fetchdata();if(el.largeimageloaded){obj.activate(event);}else{obj.load();}});$(".zoomPad",el).bind('mouseleave',function(event){obj.deactivate();});$(".zoomPad",el).bind('mousemove',function(e){if(e.pageX>smallimage.pos.r||e.pageX<smallimage.pos.l||e.pageY<smallimage.pos.t||e.pageY>smallimage.pos.b){lens.setcenter();return false;}
el.zoom_active=true;if(el.largeimageloaded&&!$('.zoomWindow',el).is(':visible')){obj.activate(e);}
if(el.largeimageloaded&&(settings.zoomType!='drag'||(settings.zoomType=='drag'&&el.mouseDown))){lens.setposition(e);}});var thumb_preload=new Array();var i=0;var thumblist=new Array();thumblist=$('a').filter(function(){var regex=new RegExp("gallery[\\s]*:[\\s]*'"+$.trim(el.rel)+"'","i");var rel=$(this).attr('rel');if(regex.test(rel)){return this;}});if(thumblist.length>0){var first=thumblist.splice(0,1);thumblist.push(first);}
thumblist.each(function(){if(settings.preloadImages){var thumb_options=$.extend({},eval("("+$.trim($(this).attr('rel'))+")"));thumb_preload[i]=new Image();thumb_preload[i].src=thumb_options.largeimage;i++;}
$(this).click(function(e){if($(this).hasClass('zoomThumbActive')){return false;}
thumblist.each(function(){$(this).removeClass('zoomThumbActive');});e.preventDefault();obj.swapimage(this);return false;});});},load:function(){if(el.largeimageloaded==false&&el.largeimageloading==false){var url=$(el).attr('href');el.largeimageloading=true;largeimage.loadimage(url);}},activate:function(e){clearTimeout(el.timer);lens.show();stage.show();},deactivate:function(e){switch(settings.zoomType){case'drag':break;default:img.attr('title',el.imagetitle);$(el).attr('title',el.title);if(settings.alwaysOn){lens.setcenter();}else{stage.hide();lens.hide();}
break;}
el.zoom_active=false;},swapimage:function(link){el.largeimageloading=false;el.largeimageloaded=false;var options=new Object();options=$.extend({},eval("("+$.trim($(link).attr('rel'))+")"));if(options.smallimage&&options.largeimage){var smallimage=options.smallimage;var largeimage=options.largeimage;$(link).addClass('zoomThumbActive');$(el).attr('href',largeimage);img.attr('src',smallimage);lens.hide();stage.hide();obj.load();}else{throw'ERROR :: Missing parameter for largeimage or smallimage.';}
return false;}});if(img[0].complete){smallimage.fetchdata();if($(".zoomPad",el).length==0)obj.create();}
function Smallimage(image){var $obj=this;this.node=image[0];this.findborder=function(){var bordertop=0;bordertop=image.css('border-top-width');btop='';var borderleft=0;borderleft=image.css('border-left-width');bleft='';if(bordertop){for(i=0;i<3;i++){var x=[];x=bordertop.substr(i,1);if(isNaN(x)==false){btop=btop+''+bordertop.substr(i,1);}else{break;}}}
if(borderleft){for(i=0;i<3;i++){if(!isNaN(borderleft.substr(i,1))){bleft=bleft+borderleft.substr(i,1)}else{break;}}}
$obj.btop=(btop.length>0)?eval(btop):0;$obj.bleft=(bleft.length>0)?eval(bleft):0;};this.fetchdata=function(){$obj.findborder();$obj.w=image.width();$obj.h=image.height();$obj.ow=image.outerWidth();$obj.oh=image.outerHeight();$obj.pos=image.offset();$obj.pos.l=image.offset().left+$obj.bleft;$obj.pos.t=image.offset().top+$obj.btop;$obj.pos.r=$obj.w+$obj.pos.l;$obj.pos.b=$obj.h+$obj.pos.t;$obj.rightlimit=image.offset().left+$obj.ow;$obj.bottomlimit=image.offset().top+$obj.oh;};this.node.onerror=function(){throw'Problems while loading image.';};this.node.onload=function(){$obj.fetchdata();if($(".zoomPad",el).length==0)obj.create();};return $obj;};function Loader(){var $obj=this;this.append=function(){this.node=$('<div/>').addClass('zoomPreload').css('visibility','hidden').html(settings.preloadText);$('.zoomPad',el).append(this.node);};this.show=function(){this.node.top=(smallimage.oh-this.node.height())/2;this.node.left=(smallimage.ow-this.node.width())/2;this.node.css({top:this.node.top,left:this.node.left,position:'absolute',visibility:'visible'});};this.hide=function(){this.node.css('visibility','hidden');};return this;}
function Lens(){var $obj=this;this.node=$('<div/>').addClass('zoomPup');this.append=function(){$('.zoomPad',el).append($(this.node).hide());if(settings.zoomType=='reverse'){this.image=new Image();this.image.src=smallimage.node.src;$(this.node).empty().append(this.image);}};this.setdimensions=function(){this.node.w=(parseInt((settings.zoomWidth)/el.scale.x)>smallimage.w)?smallimage.w:(parseInt(settings.zoomWidth/el.scale.x));this.node.h=(parseInt((settings.zoomHeight)/el.scale.y)>smallimage.h)?smallimage.h:(parseInt(settings.zoomHeight/el.scale.y));this.node.top=(smallimage.oh-this.node.h-2)/2;this.node.left=(smallimage.ow-this.node.w-2)/2;this.node.css({top:0,left:0,width:this.node.w+'px',height:this.node.h+'px',position:'absolute',display:'none',borderWidth:1+'px'});if(settings.zoomType=='reverse'){this.image.src=smallimage.node.src;$(this.node).css({'opacity':1});$(this.image).css({position:'absolute',display:'block',left:-(this.node.left+1-smallimage.bleft)+'px',top:-(this.node.top+1-smallimage.btop)+'px'});}};this.setcenter=function(){this.node.top=(smallimage.oh-this.node.h-2)/2;this.node.left=(smallimage.ow-this.node.w-2)/2;this.node.css({top:this.node.top,left:this.node.left});if(settings.zoomType=='reverse'){$(this.image).css({position:'absolute',display:'block',left:-(this.node.left+1-smallimage.bleft)+'px',top:-(this.node.top+1-smallimage.btop)+'px'});}
largeimage.setposition();};this.setposition=function(e){el.mousepos.x=e.pageX;el.mousepos.y=e.pageY;var lensleft=0;var lenstop=0;function overleft(lens){return el.mousepos.x-(lens.w)/2<smallimage.pos.l;}
function overright(lens){return el.mousepos.x+(lens.w)/2>smallimage.pos.r;}
function overtop(lens){return el.mousepos.y-(lens.h)/2<smallimage.pos.t;}
function overbottom(lens){return el.mousepos.y+(lens.h)/2>smallimage.pos.b;}
lensleft=el.mousepos.x+smallimage.bleft-smallimage.pos.l-(this.node.w+2)/2;lenstop=el.mousepos.y+smallimage.btop-smallimage.pos.t-(this.node.h+2)/2;if(overleft(this.node)){lensleft=smallimage.bleft-1;}else if(overright(this.node)){lensleft=smallimage.w+smallimage.bleft-this.node.w-1;}
if(overtop(this.node)){lenstop=smallimage.btop-1;}else if(overbottom(this.node)){lenstop=smallimage.h+smallimage.btop-this.node.h-1;}
this.node.left=lensleft;this.node.top=lenstop;this.node.css({'left':lensleft+'px','top':lenstop+'px'});if(settings.zoomType=='reverse'){if($.browser.msie&&$.browser.version>7){$(this.node).empty().append(this.image);}
$(this.image).css({position:'absolute',display:'block',left:-(this.node.left+1-smallimage.bleft)+'px',top:-(this.node.top+1-smallimage.btop)+'px'});}
largeimage.setposition();};this.hide=function(){img.css({'opacity':1});this.node.hide();};this.show=function(){if(settings.zoomType!='innerzoom'&&(settings.lens||settings.zoomType=='drag')){this.node.show();}
if(settings.zoomType=='reverse'){img.css({'opacity':settings.imageOpacity});}};this.getoffset=function(){var o={};o.left=$obj.node.left;o.top=$obj.node.top;return o;};return this;};function Stage(){var $obj=this;this.node=$("<div class='zoomWindow'><div class='zoomWrapper'><div class='zoomWrapperTitle'></div><div class='zoomWrapperImage'></div></div></div>");this.ieframe=$('<iframe class="zoomIframe" src="javascript:\'\';" marginwidth="0" marginheight="0" align="bottom" scrolling="no" frameborder="0" ></iframe>');this.setposition=function(){this.node.leftpos=0;this.node.toppos=0;if(settings.zoomType!='innerzoom'){switch(settings.position){case"left":this.node.leftpos=(smallimage.pos.l-smallimage.bleft-Math.abs(settings.xOffset)-settings.zoomWidth>0)?(0-settings.zoomWidth-Math.abs(settings.xOffset)):(smallimage.ow+Math.abs(settings.xOffset));this.node.toppos=Math.abs(settings.yOffset);break;case"top":this.node.leftpos=Math.abs(settings.xOffset);this.node.toppos=(smallimage.pos.t-smallimage.btop-Math.abs(settings.yOffset)-settings.zoomHeight>0)?(0-settings.zoomHeight-Math.abs(settings.yOffset)):(smallimage.oh+Math.abs(settings.yOffset));break;case"bottom":this.node.leftpos=Math.abs(settings.xOffset);this.node.toppos=(smallimage.pos.t-smallimage.btop+smallimage.oh+Math.abs(settings.yOffset)+settings.zoomHeight<screen.height)?(smallimage.oh+Math.abs(settings.yOffset)):(0-settings.zoomHeight-Math.abs(settings.yOffset));break;default:this.node.leftpos=(smallimage.rightlimit+Math.abs(settings.xOffset)+settings.zoomWidth<screen.width)?(smallimage.ow+Math.abs(settings.xOffset)):(0-settings.zoomWidth-Math.abs(settings.xOffset));this.node.toppos=Math.abs(settings.yOffset);break;}}
this.node.css({'left':this.node.leftpos+'px','top':this.node.toppos+'px'});return this;};this.append=function(){$('.zoomPad',el).append(this.node);this.node.css({position:'absolute',display:'none',zIndex:5001});if(settings.zoomType=='innerzoom'){this.node.css({cursor:'default'});var thickness=(smallimage.bleft==0)?1:smallimage.bleft;$('.zoomWrapper',this.node).css({borderWidth:thickness+'px'});}
$('.zoomWrapper',this.node).css({width:Math.round(settings.zoomWidth)+'px',borderWidth:thickness+'px'});$('.zoomWrapperImage',this.node).css({width:'100%',height:Math.round(settings.zoomHeight)+'px'});$('.zoomWrapperTitle',this.node).css({width:'100%',position:'absolute'});$('.zoomWrapperTitle',this.node).hide();if(settings.title&&zoomtitle.length>0){$('.zoomWrapperTitle',this.node).html(zoomtitle).show();}
$obj.setposition();};this.hide=function(){switch(settings.hideEffect){case'fadeout':this.node.fadeOut(settings.fadeoutSpeed,function(){});break;default:this.node.hide();break;}
this.ieframe.hide();};this.show=function(){switch(settings.showEffect){case'fadein':this.node.fadeIn();this.node.fadeIn(settings.fadeinSpeed,function(){});break;default:this.node.show();break;}
if(isIE6&&settings.zoomType!='innerzoom'){this.ieframe.width=this.node.width();this.ieframe.height=this.node.height();this.ieframe.left=this.node.leftpos;this.ieframe.top=this.node.toppos;this.ieframe.css({display:'block',position:"absolute",left:this.ieframe.left,top:this.ieframe.top,zIndex:99,width:this.ieframe.width+'px',height:this.ieframe.height+'px'});$('.zoomPad',el).append(this.ieframe);this.ieframe.show();};};};function Largeimage(){var $obj=this;this.node=new Image();this.loadimage=function(url){loader.show();this.url=url;this.node.style.position='absolute';this.node.style.border='0px';this.node.style.display='none';this.node.style.left='-5000px';this.node.style.top='0px';document.body.appendChild(this.node);this.node.src=url;};this.fetchdata=function(){var image=$(this.node);var scale={};this.node.style.display='block';$obj.w=image.width();$obj.h=image.height();$obj.pos=image.offset();$obj.pos.l=image.offset().left;$obj.pos.t=image.offset().top;$obj.pos.r=$obj.w+$obj.pos.l;$obj.pos.b=$obj.h+$obj.pos.t;scale.x=($obj.w/smallimage.w);scale.y=($obj.h/smallimage.h);el.scale=scale;document.body.removeChild(this.node);$('.zoomWrapperImage',el).empty().append(this.node);lens.setdimensions();};this.node.onerror=function(){throw'Problems while loading the big image.';};this.node.onload=function(){$obj.fetchdata();loader.hide();el.largeimageloading=false;el.largeimageloaded=true;if(settings.zoomType=='drag'||settings.alwaysOn){lens.show();stage.show();lens.setcenter();}};this.setposition=function(){var left=-el.scale.x*(lens.getoffset().left-smallimage.bleft+1);var top=-el.scale.y*(lens.getoffset().top-smallimage.btop+1);$(this.node).css({'left':left+'px','top':top+'px'});};return this;};$(el).data("jqzoom",obj);};$.jqzoom={defaults:{zoomType:'standard',zoomWidth:300,zoomHeight:300,xOffset:10,yOffset:0,position:"right",preloadImages:true,preloadText:'Loading zoom',title:true,lens:true,imageOpacity:0.4,alwaysOn:false,showEffect:'show',hideEffect:'hide',fadeinSpeed:'slow',fadeoutSpeed:'2000'},disable:function(el){var api=$(el).data('jqzoom');api.disable();return false;},enable:function(el){var api=$(el).data('jqzoom');api.enable();return false;},disableAll:function(el){jqzoompluging_disabled=true;},enableAll:function(el){jqzoompluging_disabled=false;}};})(jQuery);;function RcAnalyticsEvents(){var publicValues=this;var privateValues={};privateValues.moduleUrl=baseDir+'modules/rcpganalytics/';privateValues.redirected=false;privateValues.redirectLink=null;privateValues.productsPosition={};privateValues.initial=true;privateValues.sendProducts=[];privateValues.sentProducts=[];privateValues.sendPromotions=[];privateValues.sentPromotions=[];privateValues.scrollTimeout=null;privateValues.lastIdProductView='';privateValues.doNotTrack=(window.doNotTrack=="1"||navigator.doNotTrack=="yes"||navigator.doNotTrack=="1"||navigator.msDoNotTrack=="1");publicValues.trackingFeatures=null;publicValues.lists=null;publicValues.productsListCache=null;publicValues.ecommPageType='other';publicValues.pageStep=1;publicValues.eventScrollList=eventScrollList;publicValues.eventClickPromotionItem=eventClickPromotionItem;publicValues.eventClickProductList=eventClickProductList;publicValues.eventAddCartProductList=eventAddCartProductList;publicValues.eventProductView=eventProductView;publicValues.eventAddCartProductView=eventAddCartProductView;publicValues.eventSocialShareProductView=eventSocialShareProductView;publicValues.eventWishListProductView=eventWishListProductView;publicValues.eventRemoveFromCart=eventRemoveFromCart;publicValues.eventCartQuantityUp=eventCartQuantityUp;publicValues.eventCartQuantityDown=eventCartQuantityDown;publicValues.eventCartQuantityDelete=eventCartQuantityDelete;publicValues.eventCheckoutStepThree=eventCheckoutStepThree;publicValues.eventCheckoutStepFour=eventCheckoutStepFour;publicValues.eventOpcSignUpPrestashop=eventOpcSignUpPrestashop;publicValues.eventOpcPrestashop=eventOpcPrestashop;publicValues.eventOpcZelarg=eventOpcZelarg;publicValues.eventOpcBestKit=eventOpcBestKit;publicValues.eventOpcPrestaTeam=eventOpcPrestaTeam;publicValues.eventOpcSuperCheckout=eventOpcSuperCheckout;publicValues.onSearchResults=onSearchResults;publicValues.onCheckoutProducts=onCheckoutProducts;publicValues.onAddOrder=onAddOrder;publicValues.onSignUp=onSignUp;publicValues.sendGtagConfig=sendGtagConfig;publicValues.setClientId=setClientIdInDb;if(RcAnalyticsEvents.prototype.getInstance){return RcAnalyticsEvents.prototype.getInstance;}
RcAnalyticsEvents.prototype.getInstance=this;function eventScrollList(){if(!privateValues.initial){clearTimeout(privateValues.scrollTimeout);scrollElementDetection();privateValues.scrollTimeout=setTimeout(function(){if(privateValues.sendProducts.length||privateValues.sendPromotions.length){doneScroll();}},800);}else{privateValues.initial=false;scrollElementDetection();doneScroll();}}
function eventClickPromotionItem(event){var mainSelector=['.js-ga-track-promo a'];var target=delegateEvents(mainSelector,event.target);var promoQuery;var promoLink;if(event.button===0&&target&&target.nodeName==='A'&&window.ga&&window.ga.length){promoQuery=target.search;promoLink=target.href;if(promoQuery&&promoLink){event.preventDefault();onPromotionClick(promoQuery,promoLink);}}}
function eventClickProductList(event){var mainSelector=['.ajax_block_product'];var variantSelector=['.color-list-container a'];var eventSelectors=['.ajax_block_product .product_img_link','.ajax_block_product .product-name','.ajax_block_product .quick-view','.ajax_block_product .quick-view-mobile','.ajax_block_product .lnk_view','.ajax_block_product .color_pick','.ajax_block_product .new-box','.ajax_block_product .sale-box'];var target=delegateEvents(eventSelectors,event.target);var caseClick=1;var classList;var link;var productNode;var variantNode;var variantAttribute;var idProduct;var idProductAttribute;var list;if(event.button===0&&target&&target.nodeName==='A'&&window.ga&&window.ga.length){if(!event.ctrlKey&&!event.shiftKey){classList=target.classList;if(!classList.contains('quick-view')&&!classList.contains('quick-view-mobile')){link=target.getAttribute('href');if(link){event.preventDefault();}}}
productNode=delegateEvents(mainSelector,target);variantNode=delegateEvents(variantSelector,target);if(productNode){idProduct=parseInt(productNode.getAttribute('data-id-product'));idProductAttribute=parseInt(productNode.getAttribute('data-id-product-attribute'));}
list=checkFilters();if(!isNaN(idProduct)){if(variantNode){variantAttribute=variantNode.getAttribute('data-id-product-attribute');if(variantAttribute){idProductAttribute=variantAttribute;}}
if(isNaN(idProductAttribute)){idProductAttribute=0;}
idProduct=idProduct+'-'+idProductAttribute;getData(caseClick,idProduct,list,link,null);}else if(link){document.location=link;}}}
function eventAddCartProductList(event){var mainSelector=['.ajax_block_product'];var eventSelectors=['.ajax_add_to_cart_button'];var target=delegateEvents(eventSelectors,event.target);var caseClick=2;var link;var productNode;var idProduct;var idProductAttribute;var list;if(event.button===0&&target&&target.nodeName==='A'&&window.ga&&window.ga.length){if(!event.ctrlKey&&!event.shiftKey){link=target.getAttribute('href');if(link){event.preventDefault();}}
productNode=delegateEvents(mainSelector,target);if(productNode){idProduct=parseInt(productNode.getAttribute('data-id-product'));idProductAttribute=parseInt(productNode.getAttribute('data-id-product-attribute'));}
list=checkFilters();if(!isNaN(idProduct)){if(isNaN(idProductAttribute)){idProductAttribute=0;}
idProduct=idProduct+'-'+idProductAttribute;getData(caseClick,idProduct,list,link,1);}else{if(link&&!publicValues.trackingFeatures.cartAjax){document.location=link;}}}}
function eventProductView(event){var target=document.body;var productViewList=publicValues.lists.productView;var idProductNode;var idProductAttributeNode;var idProductValue;var idProductAttributeValue;var idProductView;setTimeout(function(){if(event){if(event.type==='click'){target=event.view.window.document.body}else{target=event.target.body;}}
idProductNode=target.querySelector('#product_page_product_id');idProductValue=idProductNode.value;idProductAttributeNode=target.querySelector('#idCombination');idProductAttributeValue=idProductAttributeNode.value||'0';idProductView=idProductValue+'-'+idProductAttributeValue;if(idProductView!==privateValues.lastIdProductView){if(document.body.id!=='product'){productViewList='quick_view';}
getData(5,idProductView,productViewList,null,null);privateValues.lastIdProductView=idProductView;}});}
function eventAddCartProductView(event){var eventSelectors=['#add_to_cart input','#add_to_cart button'];var target=delegateEvents(eventSelectors,event.target);var caseClick=2;var productViewList=publicValues.lists.productView;var productForm;var idProductNode;var idProductAttributeNode;var quantityWantedNode;var idProduct;var idProductAttribute;var quantityWanted;if(event.button===0&&target&&window.ga&&window.ga.length){productForm=event.currentTarget.querySelector('#buy_block');if(productForm){idProductNode=productForm.querySelector('#product_page_product_id');idProductAttributeNode=productForm.querySelector('#idCombination');quantityWantedNode=productForm.querySelector('#quantity_wanted');idProduct=parseInt((idProductNode?idProductNode.value:null));idProductAttribute=parseInt((idProductAttributeNode?idProductAttributeNode.value:null));quantityWanted=parseInt((quantityWantedNode?quantityWantedNode.value:'1'));if(!isNaN(idProduct)){if(document.body.id!=='product'){productViewList='quick_view';}
if(isNaN(idProductAttribute)){idProductAttribute=0;}
idProduct=idProduct+'-'+idProductAttribute;getData(caseClick,idProduct,productViewList,null,quantityWanted);}}}}
function eventSocialShareProductView(event){var eventSelectors=['#send_friend_button','.social-sharing'];var target=delegateEvents(eventSelectors,event.target);var network='email';if(event.button===0&&target&&window.ga&&window.ga.length){if(target.classList.contains('social-sharing')){network=target.getAttribute('data-type');}
if(network){onSocialAction(network);}}}
function eventWishListProductView(event){var eventSelectors=['#wishlist_button_nopop','#wishlist_button'];var target=delegateEvents(eventSelectors,event.target);var caseClick=4;var productViewList=publicValues.lists.productView;var productForm;var idProductNode;var idProductAttributeNode;var idProduct;var idProductAttribute;if(event.button===0&&target&&window.ga&&window.ga.length){productForm=event.currentTarget.querySelector('#buy_block');if(productForm){idProductNode=productForm.querySelector('#product_page_product_id');idProductAttributeNode=productForm.querySelector('#idCombination');idProduct=parseInt((idProductNode?idProductNode.value:null));idProductAttribute=parseInt((idProductAttributeNode?idProductAttributeNode.value:null));if(!isNaN(idProduct)){if(document.body.id!=='product'){productViewList='quick_view';}
if(isNaN(idProductAttribute)){idProductAttribute=0;}
idProduct=idProduct+'-'+idProductAttribute;getData(caseClick,idProduct,productViewList,null,null);}}}}
function eventRemoveFromCart(event){var eventSelectors=['.ajax_cart_block_remove_link'];var cartProductSelectors=['[data-id^=cart_block_product_]'];var cartCustomizableSelectors=['[data-id^=deleteCustomizableProduct_]'];var target=delegateEvents(eventSelectors,event.target);var caseClick=3;var customizationId=0;var idProduct=0;var idProductAttribute=0;var quantityRemoved=1;var list=publicValues.lists.default;var firstCut;var productNode;var customizableProductNode;var link;var ids;if(event.button===0&&target&&target.nodeName==='A'&&window.ga&&window.ga.length){if(!event.ctrlKey&&!event.shiftKey){link=target.getAttribute('href');if(link){event.preventDefault();}}
customizableProductNode=delegateEvents(cartCustomizableSelectors,target);if(customizableProductNode){firstCut=customizableProductNode.getAttribute('data-id');ids=firstCut.split('_');if(typeof(ids[1])!=='undefined'){customizationId=parseInt(ids[1]);idProduct=parseInt(ids[2]);if(typeof(ids[3])!=='undefined'){idProductAttribute=parseInt(ids[3]);}}}
if(!customizationId){productNode=delegateEvents(cartProductSelectors,target);quantityRemoved=parseInt(productNode.querySelector('.quantity').textContent.trim());firstCut=productNode.getAttribute('data-id');firstCut=firstCut.replace('cart_block_product_','');firstCut=firstCut.replace('deleteCustomizableProduct_','');ids=firstCut.split('_');idProduct=parseInt(ids[0]);if(typeof(ids[1])!=='undefined'){idProductAttribute=parseInt(ids[1]);}}
if(!isNaN(idProduct)&&!isNaN(quantityRemoved)){if(isNaN(idProductAttribute)){idProductAttribute=0;}
idProduct=idProduct+'-'+idProductAttribute;if(document.body.id==='product'){list=publicValues.lists.productView;}
getData(caseClick,idProduct,list,link,quantityRemoved);}else{if(link&&!publicValues.trackingFeatures.cartAjax){document.location=link;}}}}
function eventCartQuantityDown(event){var eventSelectors=['.cart_quantity_down'];var target=delegateEvents(eventSelectors,event.target);var caseClick=3;var quantityRemoved=1;var firstCut;var ids;var idProduct;var idProductAttribute;if(event.button===0&&target&&window.ga&&window.ga.length){firstCut=target.getAttribute('id');ids=firstCut.split('_');idProduct=parseInt(ids[3]);if(typeof(ids[4])!=='undefined'){idProductAttribute=parseInt(ids[4]);}
if(!isNaN(idProduct)){if(isNaN(idProductAttribute)){idProductAttribute=0;}
idProduct=idProduct+'-'+idProductAttribute;getData(caseClick,idProduct,publicValues.lists.default,null,quantityRemoved);}}}
function eventCartQuantityUp(event){var eventSelectors=['.cart_quantity_up'];var target=delegateEvents(eventSelectors,event.target);var caseClick=2;var quantityWanted=1;var firstCut;var ids;var idProduct;var idProductAttribute;if(event.button===0&&target&&window.ga&&window.ga.length){firstCut=target.getAttribute('id');ids=firstCut.split('_');idProduct=parseInt(ids[3]);if(typeof(ids[4])!=='undefined'){idProductAttribute=parseInt(ids[4]);}
if(!isNaN(idProduct)){if(isNaN(idProductAttribute)){idProductAttribute=0;}
idProduct=idProduct+'-'+idProductAttribute;getData(caseClick,idProduct,publicValues.lists.default,null,quantityWanted);}}}
function eventCartQuantityDelete(event){var eventSelectors=['.cart_quantity_delete'];var mainNode=['[id^=product_]'];var target=delegateEvents(eventSelectors,event.target);var caseClick=3;var firstCut;var ids;var idProduct;var idProductAttribute;var quantityRemoved;if(event.button===0&&target&&window.ga&&window.ga.length){firstCut=target.getAttribute('id');ids=firstCut.split('_');idProduct=parseInt(ids[0]);if(typeof(ids[1])!=='undefined'){idProductAttribute=parseInt(ids[1]);}
quantityRemoved=delegateEvents(mainNode,target);if(quantityRemoved){quantityRemoved=quantityRemoved.querySelector('.cart_quantity input[type=hidden]');quantityRemoved=parseInt((quantityRemoved?quantityRemoved.value:null));}
if(!isNaN(idProduct)&&!isNaN(quantityRemoved)){if(isNaN(idProductAttribute)){idProductAttribute=0;}
idProduct=idProduct+'-'+idProductAttribute;getData(caseClick,idProduct,publicValues.lists.default,null,quantityRemoved);}}}
function eventCheckoutStepThree(){var cgv=document.querySelector('#cgv');var mainCarrierSelector=['.delivery_option'];var checkoutOption;var shippingNode;if(!cgv||cgv.checked){shippingNode=document.querySelector('.delivery_option_radio:checked');if(shippingNode){shippingNode=delegateEvents(mainCarrierSelector,shippingNode);shippingNode=shippingNode.querySelector('tr');shippingNode=shippingNode.children[2];checkoutOption=(shippingNode?shippingNode.textContent.trim():'');checkoutOption=normalizeText(checkoutOption);}
onCheckoutOption(checkoutOption,null);}}
function eventCheckoutStepFour(event){var eventSelectors=['#HOOK_PAYMENT a','#HOOK_PAYMENT input'];var advancedPayment=document.querySelector('#HOOK_ADVANCED_PAYMENT');var cgv;var target;var checkoutOption;var link;if(!advancedPayment){target=delegateEvents(eventSelectors,event.target);}else{target=document.querySelector('#HOOK_ADVANCED_PAYMENT .payment_selected');}
if(event.button===0&&target&&window.ga&&window.ga.length){cgv=document.querySelector('#cgv');if(!cgv||cgv.checked){if(!event.ctrlKey&&!event.shiftKey){if(!target.getAttribute('onclick')&&target.getAttribute('href')&&target.getAttribute('href').startsWith('http')){link=target.getAttribute('href');}
if(link){event.preventDefault();}}
checkoutOption=target.getAttribute('title')||target.textContent.trim();checkoutOption=normalizeText(checkoutOption);onCheckoutOption(checkoutOption,link);}}}
function eventOpcSignUpPrestashop(event){var eventSelectors=['#submitAccount','#submitGuestAccount'];var target=delegateEvents(eventSelectors,event.target);if(event.button===0&&target){getSignUpGoal();}}
function eventOpcPrestashop(event){var eventSelectors=['#HOOK_PAYMENT a','#HOOK_PAYMENT input'];var mainCarrierSelector=['.delivery_option'];var advancedPayment=document.querySelector('#HOOK_ADVANCED_PAYMENT');var shippingOption;var target;var cgv;var shippingNode;var paymentMethod;var checkoutOption;var link;if(!advancedPayment){target=delegateEvents(eventSelectors,event.target);}else{target=document.querySelector('#HOOK_ADVANCED_PAYMENT .payment_selected');}
if(event.button===0&&target&&window.ga&&window.ga.length){cgv=document.querySelector('#cgv');if(!cgv||cgv.checked){if(!event.ctrlKey&&!event.shiftKey){if(!target.getAttribute('onclick')&&target.getAttribute('href')&&target.getAttribute('href').startsWith('http')){link=target.getAttribute('href');}
if(link){event.preventDefault();}}
shippingNode=document.querySelector('.delivery_option_radio:checked');if(shippingNode){shippingNode=delegateEvents(mainCarrierSelector,shippingNode);shippingNode=shippingNode.querySelector('tr');shippingNode=shippingNode.children[2];shippingOption=(shippingNode?shippingNode.textContent.trim():'');shippingOption=normalizeText(shippingOption);}
paymentMethod=target.getAttribute('title')||target.textContent.trim();paymentMethod=normalizeText(paymentMethod);checkoutOption=paymentMethod+' / '+shippingOption;onCheckoutOption(checkoutOption,link);}}}
function eventOpcZelarg(event){var eventSelectors=['.confirm_button','#HOOK_PAYMENT a','#HOOK_PAYMENT input'];var mainCarrierSelector=['tr'];var mainPaymentSelector=['tr'];var target=delegateEvents(eventSelectors,event.target);var shippingOption;var link;var cgv;var shippingMode;var shippingNode;var paymentMode;var paymentNode;var paymentMethod;var checkoutOption;if(event.button===0&&target&&window.ga&&window.ga.length){cgv=document.querySelector('#cgv');if(!cgv||cgv.checked){shippingMode=document.querySelector('.carrier_name');paymentMode=document.querySelector('#HOOK_PAYMENT_PARSED');if(shippingMode){shippingNode=document.querySelector('.carrier_action input:checked');if(shippingNode){shippingNode=delegateEvents(mainCarrierSelector,shippingNode);shippingNode=shippingNode.querySelector('.carrier_name img')||shippingNode.querySelector('.carrier_name label');shippingOption=shippingNode.getAttribute('alt')||shippingNode.textContent.trim();}}else{shippingNode=document.querySelector('.delivery_option_radio:checked');if(shippingNode){shippingNode=delegateEvents(mainCarrierSelector,shippingNode);shippingNode=shippingNode.querySelector('tr');shippingNode=shippingNode.children[2];shippingOption=(shippingNode?shippingNode.textContent.trim():'');}}
if(paymentMode){paymentNode=document.querySelector('.payment_action input:checked');paymentNode=delegateEvents(mainPaymentSelector,paymentNode);paymentNode=paymentNode.querySelector('.payment_description label');paymentMethod=(paymentNode?paymentNode.textContent.trim():'');}else{if(!target.getAttribute('onclick')&&target.getAttribute('href')&&target.getAttribute('href').startsWith('http')){link=target.getAttribute('href');}
paymentMethod=target.getAttribute('title')||target.textContent.trim();paymentMethod=normalizeText(paymentMethod);}
shippingOption=normalizeText(shippingOption);paymentMethod=normalizeText(paymentMethod);checkoutOption=paymentMethod+' / '+shippingOption;if(publicValues.trackingFeatures.goals.signUp){getSignUpGoal();}
onCheckoutOption(checkoutOption,link);}}}
function eventOpcBestKit(event){var eventSelectors=['#HOOK_PAYMENT a','#HOOK_PAYMENT input'];var mainCarrierSelector=['.shipping-delivery-item-opc'];var target=delegateEvents(eventSelectors,event.target);var shippingOption;var link;var cgv;var shippingNode;var paymentMethod;var checkoutOption;if(event.button===0&&target&&window.ga&&window.ga.length){cgv=document.querySelector('#cgv');if(!cgv||cgv.checked){if(!event.ctrlKey&&!event.shiftKey){if(!target.getAttribute('onclick')&&target.getAttribute('href')&&target.getAttribute('href').startsWith('http')){link=target.getAttribute('href');}
if(link){event.preventDefault();}}
shippingNode=document.querySelector('.delivery_option_radio:checked');if(shippingNode){shippingNode=delegateEvents(mainCarrierSelector,shippingNode);shippingNode=shippingNode.querySelector('.shipping-title-opc');shippingOption=(shippingNode?shippingNode.textContent.trim():'');shippingOption=normalizeText(shippingOption);}
paymentMethod=target.getAttribute('title')||target.textContent.trim();paymentMethod=normalizeText(paymentMethod);checkoutOption=paymentMethod+' / '+shippingOption;if(publicValues.trackingFeatures.goals.signUp){getSignUpGoal();}
onCheckoutOption(checkoutOption,link);}}}
function eventOpcPrestaTeam(event){var eventSelectors=['#btn_place_order'];var mainCarrierSelector=['.delivery_option'];var mainPaymentSelector=['.module_payment_container'];var target=delegateEvents(eventSelectors,event.target);var shippingOption;var cgv;var shippingNode;var paymentNode;var paymentMethod;var checkoutOption;if(event.button===0&&target&&window.ga&&window.ga.length){cgv=document.querySelector('#cgv');if(!cgv||cgv.checked){shippingNode=document.querySelector('.delivery_option input:checked');if(shippingNode){shippingNode=delegateEvents(mainCarrierSelector,shippingNode);shippingNode=shippingNode.querySelector('.delivery_option_title');shippingOption=(shippingNode?shippingNode.textContent.trim():'');shippingOption=normalizeText(shippingOption);}
paymentNode=document.querySelector('.payment_input input:checked');if(paymentNode){paymentNode=delegateEvents(mainPaymentSelector,paymentNode);paymentNode=paymentNode.querySelector('.payment_content span');paymentMethod=(paymentNode?paymentNode.textContent.trim():'');paymentMethod=normalizeText(paymentMethod);checkoutOption=paymentMethod+' / '+shippingOption;if(publicValues.trackingFeatures.goals.signUp){getSignUpGoal();}
onCheckoutOption(checkoutOption,null);}}}}
function eventOpcSuperCheckout(event){var eventSelectors=['#supercheckout_confirm_order'];var mainCarrierSelector=['.highlight'];var mainPaymentSelector=['.highlight'];var target=delegateEvents(eventSelectors,event.target);var shippingOption;var cgv;var shippingNode;var paymentNode;var paymentMethod;var checkoutOption;if(event.button===0&&target&&window.ga&&window.ga.length){cgv=document.querySelector('#cgv');if(!cgv||cgv.checked){shippingNode=document.querySelector('.supercheckout_shipping_option:checked');if(shippingNode){shippingNode=delegateEvents(mainCarrierSelector,shippingNode);shippingNode=shippingNode.querySelector('label img')||shippingNode.querySelector('label');shippingOption=(shippingNode?shippingNode.getAttribute('alt')||shippingNode.textContent.trim():'');shippingOption=normalizeText(shippingOption);}
paymentNode=document.querySelector('#payment-method input:checked');paymentNode=delegateEvents(mainPaymentSelector,paymentNode);paymentNode=paymentNode.querySelector('label img')||paymentNode.querySelector('label span');paymentMethod=(paymentNode?paymentNode.getAttribute('alt')||paymentNode.textContent.trim():'');paymentMethod=normalizeText(paymentMethod);checkoutOption=paymentMethod+' / '+shippingOption;if(publicValues.trackingFeatures.goals.signUp){getSignUpGoal();}
onCheckoutOption(checkoutOption,null);}}}
function onSearchResults(){var eventName='view_search_results';var eventParams={};var searchTerm;if(document.body.id==='search'){searchTerm=getSearchTerm();if(searchTerm){eventParams.search_term=searchTerm;sendGtagEvent(eventName,eventParams);}}}
function onScrollTracking(products){var eventName='view_item_list';var eventParams;var eventDimensions;var sendNow;if(Array.isArray(products)&&products.length){while(products.length>0){sendNow=products.splice(0,publicValues.trackingFeatures.productSendRate);eventParams={'non_interaction':1,'items':[]};sendNow.forEach(function(product){eventParams.items.push(productLayer(product));});if(publicValues.trackingFeatures.config.remarketing||publicValues.trackingFeatures.config.businessData){eventDimensions=setRemarketingDimensions(sendNow,publicValues.ecommPageType);Object.assign(eventParams,eventDimensions);}
sendGtagEvent(eventName,eventParams);}}}
function onPromotionView(promotions){var eventName='view_promotion';var eventParams={'promotions':getPromotionsLayered(promotions)};sendGtagEvent(eventName,eventParams);}
function onPromotionClick(promotion,link){var eventName='select_content';var eventParams={'promotions':[getPromotionLayer(promotion)]};if(link){privateValues.redirectLink=link;eventParams['event_callback']=callbackWithTimeout(function(){redirectLink();},2000);}
sendGtagEvent(eventName,eventParams);}
function onProductClick(product,link){var eventName='select_content';var eventParams={'content_type':'product','items':[]};eventParams.items.push(productLayer(product));if(link){privateValues.redirectLink=link;eventParams['event_callback']=callbackWithTimeout(function(){redirectLink();},2000);}
sendGtagEvent(eventName,eventParams);}
function onProductView(product){var eventName='view_item';var eventParams={'non_interaction':1,'items':[]};var ecommPageType=publicValues.ecommPageType;var eventDimensions;eventParams.items.push(productLayer(product));if(publicValues.trackingFeatures.config.remarketing||publicValues.trackingFeatures.config.businessData){if(product.list_name==='quick_view'){ecommPageType='product';}
eventDimensions=setRemarketingDimensions([product],ecommPageType);Object.assign(eventParams,eventDimensions);}
sendGtagEvent(eventName,eventParams);}
function onSocialAction(network){var eventName='share';var eventParams={'method':network,'event_value':publicValues.trackingFeatures.eventValues.socialAction};if(publicValues.trackingFeatures.goals.socialAction){sendGtagEvent(eventName,eventParams);}}
function onWishList(product){var eventName='add_to_wishlist';var eventParams={'items':[],'value':publicValues.trackingFeatures.eventValues.wishList};eventParams.items.push(productLayer(product));sendGtagEvent(eventName,eventParams);}
function onSignUp(){var index=publicValues.trackingFeatures.isGuest;var customerType=publicValues.trackingFeatures.signUpTypes[index];var eventName='sign_up';var eventParams={'method':customerType,'value':publicValues.trackingFeatures.eventValues.signUp};if(publicValues.trackingFeatures.goals.signUp&&publicValues.trackingFeatures.isNewSignUp){sendGtagEvent(eventName,eventParams);publicValues.trackingFeatures.isNewSignUp=0;publicValues.trackingFeatures.isGuest=0;}}
function onAddToCart(product,link){var eventName='add_to_cart';var eventParams={'items':[]};var eventDimensions={};var ecommPageType='cart';eventParams.items.push(productLayer(product));if(publicValues.trackingFeatures.config.remarketing||publicValues.trackingFeatures.config.businessData){eventDimensions=setRemarketingDimensions([product],ecommPageType);Object.assign(eventParams,eventDimensions);}
if(!publicValues.trackingFeatures.cartAjax&&link){privateValues.redirectLink=link;eventParams['event_callback']=callbackWithTimeout(function(){redirectLink();},2000);}
sendGtagEvent(eventName,eventParams);}
function onRemoveFromCart(product,link){var eventName='remove_from_cart';var eventParams={'items':[]};eventParams.items.push(productLayer(product));if(!publicValues.trackingFeatures.cartAjax&&link){privateValues.redirectLink=link;eventParams['event_callback']=callbackWithTimeout(function(){redirectLink();},2000);}
sendGtagEvent(eventName,eventParams);}
function onCheckoutProducts(products){var eventName='checkout_progress';var eventParams;var eventDimensions;var sendNow;if(publicValues.pageStep===1){eventName='begin_checkout'}
if(Array.isArray(products)&&products.length){while(products.length>0){sendNow=products.splice(0,publicValues.trackingFeatures.productSendRate);eventParams={'checkout_step':publicValues.pageStep,'items':[]};sendNow.forEach(function(product){eventParams.items.push(productLayer(product));});if(publicValues.trackingFeatures.config.remarketing||publicValues.trackingFeatures.config.businessData){eventDimensions=setRemarketingDimensions(sendNow,publicValues.ecommPageType);Object.assign(eventParams,eventDimensions);}
sendGtagEvent(eventName,eventParams);}}}
function onCheckoutOption(checkoutOption,link){var eventName='set_checkout_option';var eventParams={'checkout_step':publicValues.pageStep,'checkout_option':checkoutOption};if(link){privateValues.redirectLink=link;eventParams['event_callback']=callbackWithTimeout(function(){redirectLink();},2000);}
sendGtagEvent(eventName,eventParams);}
function onAddOrder(order,products,idShop){var eventName='purchase';var adWordsConversionEventName='conversion';var adWordsConversionParams={'transaction_id':order.transaction_id,'value':order.value,'currency':publicValues.trackingFeatures.currency};var productLength=products.length;var firstLoop=1;var eventDimensions;var eventParams;var sendNow;if(Array.isArray(products)&&products.length){while(products.length>0){sendNow=products.splice(0,publicValues.trackingFeatures.productSendRate);eventParams={'items':[],'send_to':publicValues.trackingFeatures.analyticsId};if(firstLoop){eventParams['event_callback']=callbackWithTimeout(function(){setOrderInDb(order.transaction_id,idShop);},1000);firstLoop=0;}
Object.keys(order).forEach(function(key){if(order[key]!==null&&order[key]!==false){if(key==='value'&&productLength>publicValues.trackingFeatures.productSendRate){return;}
eventParams[key]=order[key];}});sendNow.forEach(function(product){eventParams.items.push(productLayer(product));});if(publicValues.trackingFeatures.config.remarketing||publicValues.trackingFeatures.config.businessData){eventDimensions=setRemarketingDimensions(sendNow,publicValues.ecommPageType);Object.assign(eventParams,eventDimensions);}
sendGtagEvent(eventName,eventParams);}
if(publicValues.trackingFeatures.adwordsId&&publicValues.trackingFeatures.adwordsCl){adWordsConversionParams['send_to']=publicValues.trackingFeatures.adwordsId+'/'+
publicValues.trackingFeatures.adwordsCl;sendGtagEvent(adWordsConversionEventName,adWordsConversionParams);}}}
function sendGtagConfig(configId){var configElement=publicValues.trackingFeatures[configId];var configFeatures=publicValues.trackingFeatures.config;var configParams={};var doNotTrack=(publicValues.trackingFeatures.checkDoNotTrack&&privateValues.doNotTrack);if(publicValues.trackingFeatures.disableInternalTracking||doNotTrack){window['ga-disable-'+publicValues.trackingFeatures.analyticsId]=true;}
if(configId==='analyticsId'){configParams['site_speed_sample_rate']=configFeatures.simpleSpeedSampleRate;configParams['anonymize_ip']=configFeatures.anonymizeIp;configParams['link_attribution']=configFeatures.linkAttribution;if(configFeatures.userIdFeature){configParams['user_id']=configFeatures.userIdValue;}
if(configFeatures.remarketing||configFeatures.businessData){configParams['custom_map']={};if(configFeatures.remarketing){configParams.custom_map['dimension'+configFeatures.customDimensions['ecommProdId']]='ecomm_prodid';configParams.custom_map['dimension'+configFeatures.customDimensions['ecommPageType']]='ecomm_pagetype';configParams.custom_map['dimension'+configFeatures.customDimensions['ecommTotalValue']]='ecomm_totalvalue';configParams.custom_map['dimension'+configFeatures.customDimensions['ecommCategory']]='ecomm_category';}
if(configFeatures.businessData){configParams.custom_map['dimension'+configFeatures.customDimensions['dynxItemId']]='dynx_itemid';configParams.custom_map['dimension'+configFeatures.customDimensions['dynxItemId2']]='dynx_itemid2';configParams.custom_map['dimension'+configFeatures.customDimensions['dynxPageType']]='dynx_pagetype';configParams.custom_map['dimension'+configFeatures.customDimensions['dynxTotalValue']]='dynx_totalvalue';}}else{configParams['allow_display_features']=configFeatures.remarketing;}
if(Array.isArray(configFeatures.crossDomainList)&&configFeatures.crossDomainList.length){configParams['linker']={'domains':configFeatures.crossDomainList};}
if(configFeatures.optimizeId){configParams['optimize_id']=configFeatures.optimizeId;}
configParams['currency']=publicValues.trackingFeatures.currency;}else if(configId==='adwordsId'){configParams['send_page_view']=false;}
if(configElement){gtag('config',configElement,configParams);}}
function sendGtagEvent(eventName,eventParams){gtag('event',eventName,eventParams);}
function getPromotionsLayered(promotions){var promotionsLayered=[];promotions.forEach(function(promotion){promotionsLayered.push(getPromotionLayer(promotion));});return promotionsLayered;}
function getPromotionLayer(promotion){var promotionFields={'pid':'id','pn':'name','pc':'creative_name','pp':'creative_slot'};var promotionLayer={};var promotionQueryData;var gaKey;promotionQueryData=getQueryData(promotion);Object.keys(promotionFields).forEach(function(key){gaKey=promotionFields[key];if(promotionQueryData.hasOwnProperty(key)){promotionLayer[gaKey]=decodeURIComponent(promotionQueryData[key]);}});return promotionLayer;}
function productLayer(product){var productKeys=['id','name','variant','brand','category','list_name','list_position','quantity','price','coupon'];var gaProduct={};productKeys.forEach(function(key){if(product[key]!=null){gaProduct[key]=product[key];}});return gaProduct;}
function setRemarketingDimensions(products,ecommPageType){var ecommDimensions={};var businessDimensions={};var remarketingDimensions={};var totalValue=0;var productPrice=0;products.forEach(function(product){productPrice=product.price;if(product.quantity){productPrice=productPrice*product.quantity;}
totalValue=parseFloat((totalValue+productPrice).toFixed(2));if(publicValues.trackingFeatures.config.remarketing){ecommDimensions=processEcommProduct(product,ecommDimensions,ecommPageType,totalValue);}
if(publicValues.trackingFeatures.config.businessData){businessDimensions=processBusinessProduct(product,businessDimensions,ecommPageType,totalValue);}});Object.assign(remarketingDimensions,ecommDimensions,businessDimensions);return remarketingDimensions;}
function getFeedIdProduct(idProduct,idAttribute,feedPrefix,feedVariant,feedSuffix){var feedIdProduct=idProduct;if(feedVariant&&idAttribute){feedIdProduct=idProduct+feedVariant+idAttribute;}
return feedPrefix+feedIdProduct+feedSuffix;}
function processEcommProduct(product,ecommDimensions,ecommPageType,totalValue){var feedIdProduct;ecommDimensions.ecomm_pagetype=ecommPageType;if(ecommPageType==='product'||ecommPageType==='cart'||ecommPageType==='purchase'){feedIdProduct=getFeedIdProduct(product.id,product.id_attribute,publicValues.trackingFeatures.merchantPrefix,publicValues.trackingFeatures.merchantVariant,publicValues.trackingFeatures.merchantSuffix);if(ecommPageType==='cart'||ecommPageType==='purchase'){if(!ecommDimensions.hasOwnProperty('ecomm_prodid')){ecommDimensions.ecomm_prodid=[];}
ecommDimensions.ecomm_prodid.push(feedIdProduct);}else{ecommDimensions.ecomm_prodid=feedIdProduct;}}
if(ecommPageType==='product'||ecommPageType==='cart'||ecommPageType==='purchase'){ecommDimensions.ecomm_totalvalue=totalValue;}
if((ecommPageType==='category'||ecommPageType==='product')&&product.category){ecommDimensions.ecomm_category=product.category;}
return ecommDimensions;}
function processBusinessProduct(product,businessDimensions,ecommPageType,totalValue){var dynxPageTypes={'home':'home','searchresults':'searchresults','product':'offerdetail','cart':'conversionintent','purchase':'conversion'};var dynxPageType='other';var idAttribute;var feedIdProduct;if(dynxPageTypes.hasOwnProperty(ecommPageType)){dynxPageType=dynxPageTypes[ecommPageType];}
businessDimensions.dynx_pagetype=dynxPageType;if(dynxPageType==='searchresults'||dynxPageType==='offerdetail'||dynxPageType==='conversionintent'||dynxPageType==='conversion'){feedIdProduct=getFeedIdProduct(product.id,product.id_attribute,publicValues.trackingFeatures.businessDataPrefix,publicValues.trackingFeatures.businessDataVariant,'');if(!publicValues.trackingFeatures.businessDataVariant){if(!businessDimensions.hasOwnProperty('dynx_itemid2')){businessDimensions.dynx_itemid2=[];}
if(product.id_attribute){idAttribute=product.id_attribute.toString();}
businessDimensions.dynx_itemid2.push(idAttribute);}
if(!businessDimensions.hasOwnProperty('dynx_itemid')){businessDimensions.dynx_itemid=[];}
businessDimensions.dynx_itemid.push(feedIdProduct);if(dynxPageType==='offerdetail'||dynxPageType==='conversionintent'||dynxPageType==='conversion'){businessDimensions.dynx_totalvalue=totalValue}}
return businessDimensions;}
function getSearchTerm(){var searchWordNode;var searchTerm;if(document.body.id==='search'){searchWordNode=document.querySelector('#search_query_top');searchTerm=searchWordNode.value||null;}
return searchTerm;}
function getData(caseClick,idProducts,list,link,quantityWanted){var req=new XMLHttpRequest();var url=privateValues.moduleUrl+'rcpganalytics-ajax.php';var data={'action':'product','products_position':privateValues.productsPosition,'list':list,'quantity_wanted':quantityWanted,'products_list_cache':publicValues.productsListCache};var formData;var response;var type;if(typeof idProducts==='object'){data['id_products']=idProducts;}else{data['id_products']=[idProducts];}
formData=new FormData();formData.append('data',JSON.stringify(data));formData.append('token',publicValues.trackingFeatures.token);req.open('POST',url,true);req.onreadystatechange=function(){try{if(req.status===200){if(req.readyState===4){type=req.getResponseHeader('Content-Type');if(type==='application/json'){response=JSON.parse(req.responseText);if(typeof response==='object'){if(caseClick===0){onScrollTracking(response);}else if(caseClick===1){onProductClick(response[0],link);}else if(caseClick===2){onAddToCart(response[0],link);}else if(caseClick===3){onRemoveFromCart(response[0],link);}else if(caseClick===4){onWishList(response[0]);}else if(caseClick===5){onProductView(response[0]);}}}else{throw'response is not an JSON object';}}}else{throw'Unexpected XHR error';}}catch(error){console.warn('rcpganalytics: '+error);if(link){privateValues.redirectLink=link;redirectLink();}}};req.send(formData);}
function getSignUpGoal(){var req=new XMLHttpRequest();var url=privateValues.moduleUrl+'rcpganalytics-ajax.php';var data={'action':'signUp','maxLapse':publicValues.trackingFeatures.maxLapse};var formData;var response;var type;setTimeout(function(){formData=new FormData();formData.append('data',JSON.stringify(data));formData.append('token',publicValues.trackingFeatures.token);req.open('POST',url,true);req.onreadystatechange=function(){if(req.readyState===4&&req.status===200){type=req.getResponseHeader('Content-Type');if(type==='application/json'){response=JSON.parse(req.responseText);if(typeof response==='object'){if(response.isNewSignUp){publicValues.trackingFeatures.isNewSignUp=response.isNewSignUp;publicValues.trackingFeatures.isGuest=response.isGuest;onSignUp();}}}}};req.send(formData);},1000);}
function setOrderInDb(orderId,idShop){var req=new XMLHttpRequest();var url=privateValues.moduleUrl+'rcpganalytics-ajax.php';var data={'action':'orderComplete','is_order':true,'id_order':orderId,'id_shop':idShop,'id_customer':publicValues.trackingFeatures.config.userIdValue};var adBlocker=(!window.ga||!window.ga.length);var doNotTrack=(publicValues.trackingFeatures.checkDoNotTrack&&privateValues.doNotTrack);var formData;if(doNotTrack||adBlocker){data.action='abortedTransaction';data.doNotTrack=privateValues.doNotTrack;data.adBlocker=adBlocker;}
formData=new FormData();formData.append('data',JSON.stringify(data));formData.append('token',publicValues.trackingFeatures.token);req.open('POST',url,true);req.send(formData);}
function setClientIdInDb(){var clientId;var trackers;var req;var url;var data;var formData;if(window.ga){ga(function(){trackers=ga.getAll();if(Array.isArray(trackers)&&trackers.length){clientId=trackers[0].get('clientId');if(clientId&&clientId!==publicValues.trackingFeatures.clientId){req=new XMLHttpRequest();url=privateValues.moduleUrl+'rcpganalytics-ajax.php';data={'action':'clientId','id_customer':publicValues.trackingFeatures.config.userIdValue,'id_shop':publicValues.trackingFeatures.idShop,'client_id':clientId};formData=new FormData();formData.append('data',JSON.stringify(data));formData.append('token',publicValues.trackingFeatures.token);req.open('POST',url,true);req.send(formData);}}});}}
function scrollElementDetection(){var products=document.querySelectorAll('.ajax_block_product');var promos=document.querySelectorAll('.js-ga-track-promo');if(products.length){processScrollElement(products,'product');}
if(promos.length){processScrollElement(promos,'promo');}}
function processScrollElement(elements,type){var visibleElement;var idProduct;var idProductAttribute;var isInViewport;elements.forEach(function(element){isInViewport=isElementInViewport(element);if(isInViewport){if(type==='product'){idProduct=parseInt(element.getAttribute('data-id-product'));idProductAttribute=parseInt(element.getAttribute('data-id-product-attribute'))|0;if(!isNaN(idProduct)){visibleElement=idProduct+'-'+idProductAttribute;if(privateValues.sentProducts.indexOf(visibleElement)===-1&&privateValues.sendProducts.indexOf(visibleElement)===-1){privateValues.sendProducts.push(visibleElement);}}}
else if(type==='promo'){visibleElement=element.querySelector('a').search;if(visibleElement){if(privateValues.sentPromotions.indexOf(visibleElement)===-1&&privateValues.sendPromotions.indexOf(visibleElement)===-1){privateValues.sendPromotions.push(visibleElement);}}}}});}
function scrollProductPositionDetection(){var products=document.querySelectorAll('.ajax_block_product');var actualPosition=getInitPosition();var productKey;var idProduct;var idProductAttribute;products.forEach(function(product){idProduct=parseInt(product.getAttribute('data-id-product'));idProductAttribute=parseInt(product.getAttribute('data-id-product-attribute'));if(isNaN(idProductAttribute)){idProductAttribute=0;}
if(!isNaN(idProduct)){productKey=idProduct+'-'+idProductAttribute;if(!privateValues.productsPosition.hasOwnProperty(productKey)){privateValues.productsPosition[productKey]=actualPosition;actualPosition++;}}});}
function getInitPosition(){var pagination;var itemsNumber;pagination=document.querySelector('#pagination .active span span');pagination=(pagination?pagination.textContent.trim():1);itemsNumber=document.querySelector('#nb_page_items option:checked')||document.querySelector('#nb_item option:checked');itemsNumber=(itemsNumber?itemsNumber.value:1);return(parseInt(itemsNumber)*parseInt(pagination))-parseInt(itemsNumber)+1;}
function doneScroll(){var caseClick=0;var list;if(privateValues.sendProducts.length>0){scrollProductPositionDetection();list=checkFilters();getData(caseClick,privateValues.sendProducts,list,null,null);Array.prototype.push.apply(privateValues.sentProducts,privateValues.sendProducts);privateValues.sendProducts=[];}
if(privateValues.sendPromotions.length>0){onPromotionView(privateValues.sendPromotions);Array.prototype.push.apply(privateValues.sentPromotions,privateValues.sendPromotions);privateValues.sendPromotions=[];}
clearTimeout(privateValues.scrollTimeout);}
function checkFilters(){var list=publicValues.lists.default;var isEnabledFilter=document.querySelector('#enabled_filters');var pmAdvancedSearch=document.querySelector('.PM_ASResetGroup');if(isEnabledFilter||pmAdvancedSearch){list=publicValues.lists.filter;}else if(document.body.id==='search'){list=publicValues.lists.search;publicValues.ecommPageType='searchresults';}
return list;}
function redirectLink(){if(!privateValues.redirected){privateValues.redirected=true;window.location=privateValues.redirectLink;}}
function callbackWithTimeout(callback,timeout){var called=false;function fn(){if(!called){called=true;callback();}}
setTimeout(fn,timeout||1000);return fn;}
function getQueryData(query){var vars={};query.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;}
function isElementInViewport(element){var isVisible=false;var winHeight=window.innerHeight;var winOffset=window.pageYOffset;var minY=winOffset;var maxY=winOffset+winHeight;var itemTop;var itemBottom;var elHeight;var elComputedStyle;var elHeightPadding;var rect;elHeight=element.clientHeight;if(elHeight){elComputedStyle=getComputedStyle(element);elHeightPadding=parseInt(elComputedStyle.paddingTop)+parseInt(elComputedStyle.paddingBottom);rect=element.getBoundingClientRect();itemTop=rect.top+winOffset;itemBottom=itemTop+(elHeight-elHeightPadding);isVisible=((itemTop>=minY&&itemTop<maxY)||(itemBottom>=minY&&itemBottom<maxY));}
return isVisible;}
function normalizeText(text){var filtered='';if(typeof text==='string'){filtered=text.replace(/^\s+|\n+.*/g,'').trim();}
return filtered;}
function delegateEvents(selectors,target){var matchMode;if(target){matchMode=target.matches||target.webkitMatchesSelector||target.msMatchesSelector;matchMode=matchMode.name||/function\s+([\w\$]+)\s*\(/.exec(matchMode.toString());if(typeof matchMode!=='string'){matchMode=matchMode?matchMode[1]:'';}
if(matchMode){while(target.parentNode!==null){if(target.nodeType===1){for(var i=0;i<selectors.length;i++){if(target[matchMode](selectors[i])){return target;}}}
target=target.parentNode;}}}}};;function updateVerticalDropdownPosition()
{$('#zverticalmegamenu.dropdown_fix_top .dropdown').each(function(index,element){pos=$('#zverticalmegamenu').offset().top-$(this).parent().offset().top;$(this).css('top',pos+'px');});}
$(document).ready(function(){setTimeout(function(){updateVerticalDropdownPosition();},500);$(window).resize(updateVerticalDropdownPosition);});;$(document).ready(function(){ajaxCart.overrideButtonsInThePage();$(document).on('click','.block_cart_collapse',function(e){e.preventDefault();ajaxCart.collapse();});$(document).on('click','.block_cart_expand',function(e){e.preventDefault();ajaxCart.expand();});var cart_qty=0;var current_timestamp=parseInt(new Date().getTime()/1000);if(typeof $('.ajax_cart_quantity').html()=='undefined'||(typeof generated_date!='undefined'&&generated_date!=null&&(parseInt(generated_date)+30)<current_timestamp))
ajaxCart.refresh();else
cart_qty=parseInt($('.ajax_cart_quantity').html());var cart_block=new HoverWatcher('#header .cart_block');var shopping_cart=new HoverWatcher('#header .shopping_cart');if('ontouchstart'in document.documentElement)
{$('.shopping_cart > a:first').on('click',function(e){e.preventDefault();});}
$(document).on('touchstart','#header .shopping_cart a:first',function(){if($(this).next('.cart_block:visible').length)
$("#header .cart_block").stop(true,true).slideUp(450);else
$("#header .cart_block").stop(true,true).slideDown(450);e.preventDefault();e.stopPropagation();});$("#header .shopping_cart a:first").hover(function(){if(ajaxCart.nb_total_products>0||cart_qty>0)
$("#header .cart_block").stop(true,true).slideDown(450);},function(){setTimeout(function(){if(!shopping_cart.isHoveringOver()&&!cart_block.isHoveringOver())
$("#header .cart_block").stop(true,true).slideUp(450);},200);});$("#header .cart_block").hover(function(){},function(){setTimeout(function(){if(!shopping_cart.isHoveringOver())
$("#header .cart_block").stop(true,true).slideUp(450);},200);});$(document).on('click','.delete_voucher',function(e){e.preventDefault();$.ajax({type:'POST',headers:{"cache-control":"no-cache"},async:true,cache:false,url:$(this).attr('href')+'?rand='+new Date().getTime()});$(this).parent().parent().remove();if($('body').attr('id')=='order'||$('body').attr('id')=='order-opc')
{if(typeof(updateAddressSelection)!='undefined')
updateAddressSelection();else
location.reload();}});$(document).on('click','#cart_navigation input',function(e){$(this).prop('disabled','disabled').addClass('disabled');$(this).closest("form").get(0).submit();});$(document).on('click','#layer_cart .cross, #layer_cart .continue, .layer_cart_overlay',function(e){e.preventDefault();$('.layer_cart_overlay').hide();$('#layer_cart').fadeOut('fast');});$('#columns #layer_cart, #columns .layer_cart_overlay').detach().prependTo('#columns');});var ajaxCart={nb_total_products:0,overrideButtonsInThePage:function(){$(document).on('click','.ajax_add_to_cart_button',function(e){e.preventDefault();var idProduct=$(this).data('id-product');if($(this).prop('disabled')!='disabled')
ajaxCart.add(idProduct,null,false,this);});$(document).on('click','#add_to_cart button',function(e){e.preventDefault();ajaxCart.add($('#product_page_product_id').val(),$('#idCombination').val(),true,null,$('#quantity_wanted').val(),null);});$(document).on('click','.cart_block_list .ajax_cart_block_remove_link',function(e){e.preventDefault();var customizationId=0;var productId=0;var productAttributeId=0;var customizableProductDiv=$($(this).parent().parent()).find("div[data-id^=deleteCustomizableProduct_]");var idAddressDelivery=false;if(customizableProductDiv&&$(customizableProductDiv).length)
{var ids=customizableProductDiv.data('id').split('_');if(typeof(ids[1])!='undefined')
{customizationId=parseInt(ids[1]);productId=parseInt(ids[2]);if(typeof(ids[3])!='undefined')
productAttributeId=parseInt(ids[3]);if(typeof(ids[4])!='undefined')
idAddressDelivery=parseInt(ids[4]);}}
if(!customizationId)
{var firstCut=$(this).parent().parent().data('id').replace('cart_block_product_','');firstCut=firstCut.replace('deleteCustomizableProduct_','');ids=firstCut.split('_');productId=parseInt(ids[0]);if(typeof(ids[1])!='undefined')
productAttributeId=parseInt(ids[1]);if(typeof(ids[2])!='undefined')
idAddressDelivery=parseInt(ids[2]);}
ajaxCart.remove(productId,productAttributeId,customizationId,idAddressDelivery);});},expand:function(){if($('.cart_block_list').hasClass('collapsed'))
{$('.cart_block_list.collapsed').slideDown({duration:450,complete:function(){$(this).addClass('expanded').removeClass('collapsed');}});$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseDir+'modules/blockcart/blockcart-set-collapse.php'+'?rand='+new Date().getTime(),async:true,cache:false,data:'ajax_blockcart_display=expand',complete:function(){$('.block_cart_expand').fadeOut('fast',function(){$('.block_cart_collapse').fadeIn('fast');});}});}},collapse:function(){if($('.cart_block_list').hasClass('expanded'))
{$('.cart_block_list.expanded').slideUp('slow',function(){$(this).addClass('collapsed').removeClass('expanded');});$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseDir+'modules/blockcart/blockcart-set-collapse.php'+'?rand='+new Date().getTime(),async:true,cache:false,data:'ajax_blockcart_display=collapse'+'&rand='+new Date().getTime(),complete:function(){$('.block_cart_collapse').fadeOut('fast',function(){$('.block_cart_expand').fadeIn('fast');});}});}},refresh:function(){$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseUri+'?rand='+new Date().getTime(),async:true,cache:false,dataType:"json",data:'controller=cart&ajax=true&token='+static_token,success:function(jsonData)
{ajaxCart.updateCart(jsonData);}});},updateCartInformation:function(jsonData,addedFromProductPage){ajaxCart.updateCart(jsonData);if(addedFromProductPage)
{$('#add_to_cart button').removeProp('disabled').removeClass('disabled');if(!jsonData.hasError||jsonData.hasError==false)
$('#add_to_cart button').addClass('added');else
$('#add_to_cart button').removeClass('added');}
else
$('.ajax_add_to_cart_button').removeProp('disabled');},updateFancyBox:function(){},add:function(idProduct,idCombination,addedFromProductPage,callerElement,quantity,whishlist){if(addedFromProductPage&&!checkCustomizations())
{if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:true,minHeight:30,content:'<p class="fancybox-error">'+fieldRequired+'</p>'}],{padding:0});else
alert(fieldRequired);return;}
emptyCustomizations();if(addedFromProductPage)
{$('#add_to_cart button').prop('disabled','disabled').addClass('disabled');$('.filled').removeClass('filled');}
else
$(callerElement).prop('disabled','disabled');if($('.cart_block_list').hasClass('collapsed'))
this.expand();$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseUri+'?rand='+new Date().getTime(),async:true,cache:false,dataType:"json",data:'controller=cart&add=1&ajax=true&qty='+((quantity&&quantity!=null)?quantity:'1')+'&id_product='+idProduct+'&token='+static_token+((parseInt(idCombination)&&idCombination!=null)?'&ipa='+parseInt(idCombination):''),success:function(jsonData,textStatus,jqXHR)
{if(whishlist&&!jsonData.errors)
WishlistAddProductCart(whishlist[0],idProduct,idCombination,whishlist[1]);if(!jsonData.hasError)
{if(contentOnly)
window.parent.ajaxCart.updateCartInformation(jsonData,addedFromProductPage);else
ajaxCart.updateCartInformation(jsonData,addedFromProductPage);if(jsonData.crossSelling)
$('.crossseling').html(jsonData.crossSelling);if(idCombination)
$(jsonData.products).each(function(){if(this.id!=undefined&&this.id==parseInt(idProduct)&&this.idCombination==parseInt(idCombination))
if(contentOnly)
window.parent.ajaxCart.updateLayer(this);else
ajaxCart.updateLayer(this);});else
$(jsonData.products).each(function(){if(this.id!=undefined&&this.id==parseInt(idProduct))
if(contentOnly)
window.parent.ajaxCart.updateLayer(this);else
ajaxCart.updateLayer(this);});if(contentOnly)
parent.$.fancybox.close();}
else
{if(contentOnly)
window.parent.ajaxCart.updateCart(jsonData);else
ajaxCart.updateCart(jsonData);if(addedFromProductPage)
$('#add_to_cart button').removeProp('disabled').removeClass('disabled');else
$(callerElement).removeProp('disabled');}
$('html, body').animate({scrollTop:0},'slow');},error:function(XMLHttpRequest,textStatus,errorThrown)
{var error="Impossible to add the product to the cart.<br/>textStatus: '"+textStatus+"'<br/>errorThrown: '"+errorThrown+"'<br/>responseText:<br/>"+XMLHttpRequest.responseText;if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:true,minHeight:30,content:'<p class="fancybox-error">'+error+'</p>'}],{padding:0});else
alert(error);if(addedFromProductPage)
$('#add_to_cart button').removeProp('disabled').removeClass('disabled');else
$(callerElement).removeProp('disabled');}});},remove:function(idProduct,idCombination,customizationId,idAddressDelivery){$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseUri+'?rand='+new Date().getTime(),async:true,cache:false,dataType:"json",data:'controller=cart&delete=1&id_product='+idProduct+'&ipa='+((idCombination!=null&&parseInt(idCombination))?idCombination:'')+((customizationId&&customizationId!=null)?'&id_customization='+customizationId:'')+'&id_address_delivery='+idAddressDelivery+'&token='+static_token+'&ajax=true',success:function(jsonData){ajaxCart.updateCart(jsonData);if($('body').attr('id')=='order'||$('body').attr('id')=='order-opc')
deleteProductFromSummary(idProduct+'_'+idCombination+'_'+customizationId+'_'+idAddressDelivery);},error:function()
{var error='ERROR: unable to delete the product';if(!!$.prototype.fancybox)
{$.fancybox.open([{type:'inline',autoScale:true,minHeight:30,content:error}],{padding:0});}
else
alert(error);}});},hideOldProducts:function(jsonData){if($('.cart_block_list:first dl.products').length>0)
{var removedProductId=null;var removedProductData=null;var removedProductDomId=null;$('.cart_block_list:first dl.products dt').each(function(){var domIdProduct=$(this).data('id');var firstCut=domIdProduct.replace('cart_block_product_','');var ids=firstCut.split('_');var stayInTheCart=false;for(aProduct in jsonData.products)
{if(jsonData.products[aProduct]['id']==ids[0]&&(!ids[1]||jsonData.products[aProduct]['idCombination']==ids[1]))
{stayInTheCart=true;ajaxCart.hideOldProductCustomizations(jsonData.products[aProduct],domIdProduct);}}
if(!stayInTheCart)
{removedProductId=$(this).data('id');if(removedProductId!=null)
{var firstCut=removedProductId.replace('cart_block_product_','');var ids=firstCut.split('_');$('dt[data-id="'+removedProductId+'"]').addClass('strike').fadeTo('slow',0,function(){$(this).slideUp('slow',function(){$(this).remove();if($('.cart_block:first dl.products dt').length==0)
{$("#header .cart_block").stop(true,true).slideUp(200);$('.cart_block_no_products:hidden').slideDown(450);$('.cart_block dl.products').remove();}});});$('dd[data-id="cart_block_combination_of_'+ids[0]+(ids[1]?'_'+ids[1]:'')+(ids[2]?'_'+ids[2]:'')+'"]').fadeTo('fast',0,function(){$(this).slideUp('fast',function(){$(this).remove();});});}}});}},hideOldProductCustomizations:function(product,domIdProduct){var customizationList=$('ul[data-id="customization_'+product['id']+'_'+product['idCombination']+'"]');if(customizationList.length>0)
{$(customizationList).find("li").each(function(){$(this).find("div").each(function(){var customizationDiv=$(this).data('id');var tmp=customizationDiv.replace('deleteCustomizableProduct_','');var ids=tmp.split('_');if((parseInt(product.idCombination)==parseInt(ids[2]))&&!ajaxCart.doesCustomizationStillExist(product,ids[0]))
$('div[data-id="'+customizationDiv+'"]').parent().addClass('strike').fadeTo('slow',0,function(){$(this).slideUp('slow');$(this).remove();});});});}
var removeLinks=$('.deleteCustomizableProduct[data-id="'+domIdProduct+'"]').find('.ajax_cart_block_remove_link');if(!product.hasCustomizedDatas&&!removeLinks.length)
$('div[data-id="'+domIdProduct+'"]'+' span.remove_link').html('<a class="ajax_cart_block_remove_link" rel="nofollow" href="'+baseUri+'?controller=cart&amp;delete=1&amp;id_product='+product['id']+'&amp;ipa='+product['idCombination']+'&amp;token='+static_token+'"> </a>');if(product.is_gift)
$('div[data-id="'+domIdProduct+'"]'+' span.remove_link').html('');},doesCustomizationStillExist:function(product,customizationId){var exists=false;$(product.customizedDatas).each(function(){if(this.customizationId==customizationId)
{exists=true;return false;}});return(exists);},refreshVouchers:function(jsonData){if(typeof(jsonData.discounts)=='undefined'||jsonData.discounts.length==0)
$('.vouchers').hide();else
{$('.vouchers tbody').html('');for(i=0;i<jsonData.discounts.length;i++)
{if(parseFloat(jsonData.discounts[i].price_float)>0)
{var delete_link='';if(jsonData.discounts[i].code.length)
delete_link='<a class="delete_voucher" href="'+jsonData.discounts[i].link+'" title="'+delete_txt+'"><i class="icon-remove-sign"></i></a>';$('.vouchers tbody').append($('<tr class="bloc_cart_voucher" data-id="bloc_cart_voucher_'+jsonData.discounts[i].id+'">'
+' <td class="quantity">1x</td>'
+' <td class="name" title="'+jsonData.discounts[i].description+'">'+jsonData.discounts[i].name+'</td>'
+' <td class="price">-'+jsonData.discounts[i].price+'</td>'
+' <td class="delete">'+delete_link+'</td>'
+'</tr>'));}}
$('.vouchers').show();}},updateProductQuantity:function(product,quantity){$('dt[data-id=cart_block_product_'+product.id+'_'+(product.idCombination?product.idCombination:'0')+'_'+(product.idAddressDelivery?product.idAddressDelivery:'0')+'] .quantity').fadeTo('fast',0,function(){$(this).text(quantity);$(this).fadeTo('fast',1,function(){$(this).fadeTo('fast',0,function(){$(this).fadeTo('fast',1,function(){$(this).fadeTo('fast',0,function(){$(this).fadeTo('fast',1);});});});});});},displayNewProducts:function(jsonData){$(jsonData.products).each(function(){if(this.id!=undefined)
{if($('.cart_block:first dl.products').length==0)
{$('.cart_block_no_products').before('<dl class="products"></dl>');$('.cart_block_no_products').hide();}
var domIdProduct=this.id+'_'+(this.idCombination?this.idCombination:'0')+'_'+(this.idAddressDelivery?this.idAddressDelivery:'0');var domIdProductAttribute=this.id+'_'+(this.idCombination?this.idCombination:'0');if($('dt[data-id="cart_block_product_'+domIdProduct+'"]').length==0)
{var productId=parseInt(this.id);var productAttributeId=(this.hasAttributes?parseInt(this.attributes):0);var content='<dt class="unvisible" data-id="cart_block_product_'+domIdProduct+'">';var name=$.trim($('<span />').html(this.name).text());name=(name.length>12?name.substring(0,10)+'...':name);content+='<a class="cart-images" href="'+this.link+'" title="'+name+'"><img  src="'+this.image_cart+'" alt="'+this.name+'"></a>';content+='<div class="cart-info"><div class="product-name">'+'<span class="quantity-formated"><span class="quantity">'+this.quantity+'</span>&nbsp;x&nbsp;</span><a href="'+this.link+'" title="'+this.name+'" class="cart_block_product_name">'+name+'</a></div>';if(this.hasAttributes)
content+='<div class="product-atributes"><a href="'+this.link+'" title="'+this.name+'">'+this.attributes+'</a></div>';if(typeof(freeProductTranslation)!='undefined')
content+='<span class="price">'+(parseFloat(this.price_float)>0?this.priceByLine:freeProductTranslation)+'</span></div>';if(typeof(this.is_gift)=='undefined'||this.is_gift==0)
content+='<span class="remove_link"><a rel="nofollow" class="ajax_cart_block_remove_link" href="'+baseUri+'?controller=cart&amp;delete=1&amp;id_product='+productId+'&amp;token='+static_token+(this.hasAttributes?'&amp;ipa='+parseInt(this.idCombination):'')+'"> </a></span>';else
content+='<span class="remove_link"></span>';content+='</dt>';if(this.hasAttributes)
content+='<dd data-id="cart_block_combination_of_'+domIdProduct+'" class="unvisible">';if(this.hasCustomizedDatas)
content+=ajaxCart.displayNewCustomizedDatas(this);if(this.hasAttributes)content+='</dd>';$('.cart_block dl.products').append(content);}
else
{var jsonProduct=this;if($.trim($('dt[data-id="cart_block_product_'+domIdProduct+'"] .quantity').html())!=jsonProduct.quantity||$.trim($('dt[data-id="cart_block_product_'+domIdProduct+'"] .price').html())!=jsonProduct.priceByLine)
{if(!this.is_gift)
$('dt[data-id="cart_block_product_'+domIdProduct+'"] .price').text(jsonProduct.priceByLine);else
$('dt[data-id="cart_block_product_'+domIdProduct+'"] .price').html(freeProductTranslation);ajaxCart.updateProductQuantity(jsonProduct,jsonProduct.quantity);if(jsonProduct.hasCustomizedDatas)
{customizationFormatedDatas=ajaxCart.displayNewCustomizedDatas(jsonProduct);if(!$('ul[data-id="customization_'+domIdProductAttribute+'"]').length)
{if(jsonProduct.hasAttributes)
$('dd[data-id="cart_block_combination_of_'+domIdProduct+'"]').append(customizationFormatedDatas);else
$('.cart_block dl.products').append(customizationFormatedDatas);}
else
{$('ul[data-id="customization_'+domIdProductAttribute+'"]').html('');$('ul[data-id="customization_'+domIdProductAttribute+'"]').append(customizationFormatedDatas);}}}}
$('.cart_block dl.products .unvisible').slideDown(450).removeClass('unvisible');var removeLinks=$('dt[data-id="cart_block_product_'+domIdProduct+'"]').find('a.ajax_cart_block_remove_link');if(this.hasCustomizedDatas&&removeLinks.length)
$(removeLinks).each(function(){$(this).remove();});}});},displayNewCustomizedDatas:function(product){var content='';var productId=parseInt(product.id);var productAttributeId=typeof(product.idCombination)=='undefined'?0:parseInt(product.idCombination);var hasAlreadyCustomizations=$('ul[data-id="customization_'+productId+'_'+productAttributeId+'"]').length;if(!hasAlreadyCustomizations)
{if(!product.hasAttributes)
content+='<dd data-id="cart_block_combination_of_'+productId+'" class="unvisible">';if($('ul[data-id="customization_'+productId+'_'+productAttributeId+'"]').val()==undefined)
content+='<ul class="cart_block_customizations" data-id="customization_'+productId+'_'+productAttributeId+'">';}
$(product.customizedDatas).each(function(){var done=0;customizationId=parseInt(this.customizationId);productAttributeId=typeof(product.idCombination)=='undefined'?0:parseInt(product.idCombination);content+='<li name="customization"><div class="deleteCustomizableProduct" data-id="deleteCustomizableProduct_'+customizationId+'_'+productId+'_'+(productAttributeId?productAttributeId:'0')+'"><a rel="nofollow" class="ajax_cart_block_remove_link" href="'+baseUri+'?controller=cart&amp;delete=1&amp;id_product='+productId+'&amp;ipa='+productAttributeId+'&amp;id_customization='+customizationId+'&amp;token='+static_token+'"></a></div>';$(this.datas).each(function(){if(this['type']==CUSTOMIZE_TEXTFIELD)
{$(this.datas).each(function(){if(this['index']==0)
{content+=' '+this.truncatedValue.replace(/<br \/>/g,' ');done=1;return false;}})}});if(!done)
content+=customizationIdMessage+customizationId;if(!hasAlreadyCustomizations)content+='</li>';if(customizationId)
{$('#uploadable_files li div.customizationUploadBrowse img').remove();$('#text_fields input').attr('value','');}});if(!hasAlreadyCustomizations)
{content+='</ul>';if(!product.hasAttributes)content+='</dd>';}
return(content);},updateLayer:function(product){$('#layer_cart_product_title').text(product.name);$('#layer_cart_product_attributes').text('');if(product.hasAttributes&&product.hasAttributes==true)
$('#layer_cart_product_attributes').html(product.attributes);$('#layer_cart_product_price').text(product.price);$('#layer_cart_product_quantity').text(product.quantity);$('.layer_cart_img').html('<img class="layer_cart_img img-responsive" src="'+product.image+'" alt="'+product.name+'" title="'+product.name+'" />');var n=parseInt($(window).scrollTop())+'px';$('.layer_cart_overlay').css('width','100%');$('.layer_cart_overlay').css('height','100%');$('.layer_cart_overlay').show();$('#layer_cart').css({'top':'20px'}).fadeIn('fast');crossselling_serialScroll();},updateCart:function(jsonData){if(jsonData.hasError)
{var errors='';for(error in jsonData.errors)
if(error!='indexOf')
errors+=$('<div />').html(jsonData.errors[error]).text()+"\n";if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:true,minHeight:30,content:'<p class="fancybox-error">'+errors+'</p>'}],{padding:0});else
alert(errors);}
else
{ajaxCart.updateCartEverywhere(jsonData);ajaxCart.hideOldProducts(jsonData);ajaxCart.displayNewProducts(jsonData);ajaxCart.refreshVouchers(jsonData);$('.cart_block .products dt').removeClass('first_item').removeClass('last_item').removeClass('item');$('.cart_block .products dt:first').addClass('first_item');$('.cart_block .products dt:not(:first,:last)').addClass('item');$('.cart_block .products dt:last').addClass('last_item');}},updateCartEverywhere:function(jsonData){$('.ajax_cart_total').text($.trim(jsonData.productTotal));if(parseFloat(jsonData.shippingCostFloat)>0)
$('.ajax_cart_shipping_cost').text(jsonData.shippingCost);else if(typeof(freeShippingTranslation)!='undefined')
$('.ajax_cart_shipping_cost').html(freeShippingTranslation);$('.ajax_cart_tax_cost').text(jsonData.taxCost);$('.cart_block_wrapping_cost').text(jsonData.wrappingCost);$('.ajax_block_cart_total').text(jsonData.total);$('.ajax_block_products_total').text(jsonData.productTotal);$('.ajax_total_price_wt').text(jsonData.total_price_wt);if(parseFloat(jsonData.freeShippingFloat)>0)
{$('.ajax_cart_free_shipping').html(jsonData.freeShipping);$('.freeshipping').fadeIn(0);}
else if(parseFloat(jsonData.freeShippingFloat)==0)
$('.freeshipping').fadeOut(0);this.nb_total_products=jsonData.nbTotalProducts;if(parseInt(jsonData.nbTotalProducts)>0)
{$('.ajax_cart_no_product').hide();$('.ajax_cart_quantity').text(jsonData.nbTotalProducts);$('.ajax_cart_quantity').fadeIn('slow');$('.ajax_cart_total').fadeIn('slow');if(parseInt(jsonData.nbTotalProducts)>1)
{$('.ajax_cart_product_txt').each(function(){$(this).hide();});$('.ajax_cart_product_txt_s').each(function(){$(this).show();});}
else
{$('.ajax_cart_product_txt').each(function(){$(this).show();});$('.ajax_cart_product_txt_s').each(function(){$(this).hide();});}}
else
{$('.ajax_cart_quantity, .ajax_cart_product_txt_s, .ajax_cart_product_txt, .ajax_cart_total').each(function(){$(this).hide();});$('.ajax_cart_no_product').show('slow');}}};function HoverWatcher(selector)
{this.hovering=false;var self=this;this.isHoveringOver=function(){return self.hovering;}
$(selector).hover(function(){self.hovering=true;},function(){self.hovering=false;})}
function crossselling_serialScroll()
{if(!!$.prototype.bxSlider)
$('#blockcart_caroucel').bxSlider({minSlides:2,maxSlides:4,slideWidth:178,slideMargin:20,moveSlides:1,infiniteLoop:false,hideControlOnEnd:true,pager:false});};;$(document).ready(function(){$('#newsletter-input').on({focus:function(){if($(this).val()==placeholder_blocknewsletter||$(this).val()==msg_newsl)
$(this).val('');},blur:function(){if($(this).val()=='')
$(this).val(placeholder_blocknewsletter);}});var cssClass='alert alert-danger';if(typeof nw_error!='undefined'&&!nw_error)
cssClass='alert alert-success';if(typeof msg_newsl!='undefined'&&msg_newsl)
{$('#columns').prepend('<div class="clearfix"></div><p class="'+cssClass+'"> '+alert_blocknewsletter+'</p>');$('html, body').animate({scrollTop:$('#columns').offset().top},'slow');}});;$(document).ready(function(){if(!!$.prototype.fancybox)
$('#send_friend_button').fancybox({'hideOnContentClick':false});$('#send_friend_form_content .closefb').click(function(e){$.fancybox.close();e.preventDefault();});$('#sendEmail').click(function(){var name=$('#friend_name').val();var email=$('#friend_email').val();if(name&&email&&!isNaN(id_product))
{$.ajax({url:baseDir+'modules/sendtoafriend/sendtoafriend_ajax.php?rand='+new Date().getTime(),type:"POST",headers:{"cache-control":"no-cache"},data:{action:'sendToMyFriend',secure_key:stf_secure_key,name:name,email:email,id_product:id_product},dataType:"json",success:function(result){$.fancybox.close();fancyMsgBox((result?stf_msg_success:stf_msg_error),stf_msg_title);}});}
else
$('#send_friend_form_error').text(stf_msg_required);});});;(function($){$.fn.extend({autocomplete:function(urlOrData,options){var isUrl=typeof urlOrData=="string";options=$.extend({},$.Autocompleter.defaults,{url:isUrl?urlOrData:null,data:isUrl?null:urlOrData,delay:isUrl?$.Autocompleter.defaults.delay:10,max:options&&!options.scroll?10:150},options);options.highlight=options.highlight||function(value){return value;};options.formatMatch=options.formatMatch||options.formatItem;return this.each(function(){new $.Autocompleter(this,options);});},result:function(handler){return this.bind("result",handler);},search:function(handler){return this.trigger("search",[handler]);},flushCache:function(){return this.trigger("flushCache");},setOptions:function(options){return this.trigger("setOptions",[options]);},unautocomplete:function(){return this.trigger("unautocomplete");}});$.Autocompleter=function(input,options){var KEY={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var $input=$(input).attr("autocomplete","off").addClass(options.inputClass);var timeout;var previousValue="";var cache=$.Autocompleter.Cache(options);var hasFocus=0;var lastKeyPressCode;var config={mouseDownOnSelect:false};var select=$.Autocompleter.Select(options,input,selectCurrent,config);var blockSubmit;$.browser.opera&&$(input.form).bind("submit.autocomplete",function(){if(blockSubmit){blockSubmit=false;return false;}});$input.bind(($.browser.opera?"keypress":"keydown")+".autocomplete",function(event){lastKeyPressCode=event.keyCode;switch(event.keyCode){case KEY.UP:event.preventDefault();if(select.visible()){select.prev();}else{onChange(0,true);}
break;case KEY.DOWN:event.preventDefault();if(select.visible()){select.next();}else{onChange(0,true);}
break;case KEY.PAGEUP:event.preventDefault();if(select.visible()){select.pageUp();}else{onChange(0,true);}
break;case KEY.PAGEDOWN:event.preventDefault();if(select.visible()){select.pageDown();}else{onChange(0,true);}
break;case options.multiple&&$.trim(options.multipleSeparator)==","&&KEY.COMMA:case KEY.TAB:case KEY.RETURN:if(selectCurrent()){event.preventDefault();blockSubmit=true;return false;}
break;case KEY.ESC:select.hide();break;default:clearTimeout(timeout);timeout=setTimeout(onChange,options.delay);break;}}).focus(function(){hasFocus++;}).blur(function(){hasFocus=0;if(!config.mouseDownOnSelect){hideResults();}}).click(function(){if(hasFocus++>1&&!select.visible()){onChange(0,true);}}).bind("search",function(){var fn=(arguments.length>1)?arguments[1]:null;function findValueCallback(q,data){var result;if(data&&data.length){for(var i=0;i<data.length;i++){if(data[i].result.toLowerCase()==q.toLowerCase()){result=data[i];break;}}}
if(typeof fn=="function")fn(result);else $input.trigger("result",result&&[result.data,result.value]);}
$.each(trimWords($input.val()),function(i,value){request(value,findValueCallback,findValueCallback);});}).bind("flushCache",function(){cache.flush();}).bind("setOptions",function(){$.extend(options,arguments[1]);if("data"in arguments[1])
cache.populate();}).bind("unautocomplete",function(){select.unbind();$input.unbind();$(input.form).unbind(".autocomplete");});function selectCurrent(){var selected=select.selected();if(!selected)
return false;var v=selected.result;previousValue=v;if(options.multiple){var words=trimWords($input.val());if(words.length>1){v=words.slice(0,words.length-1).join(options.multipleSeparator)+options.multipleSeparator+v;}
v+=options.multipleSeparator;}
$input.val(v);hideResultsNow();$input.trigger("result",[selected.data,selected.value]);return true;}
function onChange(crap,skipPrevCheck){if(lastKeyPressCode==KEY.DEL){select.hide();return;}
var currentValue=$input.val();if(!skipPrevCheck&&currentValue==previousValue)
return;previousValue=currentValue;currentValue=lastWord(currentValue);if(currentValue.length>=options.minChars){$input.addClass(options.loadingClass);if(!options.matchCase)
currentValue=currentValue.toLowerCase();request(currentValue,receiveData,hideResultsNow);}else{stopLoading();select.hide();}};function trimWords(value){if(!value){return[""];}
var words=value.split(options.multipleSeparator);var result=[];$.each(words,function(i,value){if($.trim(value))
result[i]=$.trim(value);});return result;}
function lastWord(value){if(!options.multiple)
return value;var words=trimWords(value);return words[words.length-1];}
function autoFill(q,sValue){if(options.autoFill&&(lastWord($input.val()).toLowerCase()==q.toLowerCase())&&lastKeyPressCode!=KEY.BACKSPACE){$input.val($input.val()+sValue.substring(lastWord(previousValue).length));$.Autocompleter.Selection(input,previousValue.length,previousValue.length+sValue.length);}};function hideResults(){clearTimeout(timeout);timeout=setTimeout(hideResultsNow,200);};function hideResultsNow(){var wasVisible=select.visible();select.hide();clearTimeout(timeout);stopLoading();if(options.mustMatch){$input.search(function(result){if(!result){if(options.multiple){var words=trimWords($input.val()).slice(0,-1);$input.val(words.join(options.multipleSeparator)+(words.length?options.multipleSeparator:""));}
else
$input.val("");}});}
if(wasVisible)
$.Autocompleter.Selection(input,input.value.length,input.value.length);};function receiveData(q,data){if(data&&data.length&&hasFocus){stopLoading();select.display(data,q);autoFill(q,data[0].value);select.show();}else{hideResultsNow();}};function request(term,success,failure){if(!options.matchCase)
term=term.toLowerCase();var data=cache.load(term);if(data&&data.length){success(term,data);}else if((typeof options.url=="string")&&(options.url.length>0)){var extraParams={timestamp:+new Date()};$.each(options.extraParams,function(key,param){extraParams[key]=typeof param=="function"?param():param;});$.ajax({mode:"abort",port:"autocomplete"+input.name,dataType:options.dataType,url:options.url,data:$.extend({q:lastWord(term),limit:options.max},extraParams),success:function(data){var parsed=options.parse&&options.parse(data)||parse(data);cache.add(term,parsed);success(term,parsed);}});}else{select.emptyList();failure(term);}};function parse(data){var parsed=[];var rows=data.split("\n");for(var i=0;i<rows.length;i++){var row=$.trim(rows[i]);if(row){row=row.split("|");parsed[parsed.length]={data:row,value:row[0],result:options.formatResult&&options.formatResult(row,row[0])||row[0]};}}
return parsed;};function stopLoading(){$input.removeClass(options.loadingClass);};};$.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(row){return row[0];},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(value,term){return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");},scroll:true,scrollHeight:180};$.Autocompleter.Cache=function(options){var data={};var length=0;function matchSubset(s,sub){if(!options.matchCase)
s=s.toLowerCase();var i=s.indexOf(sub);if(i==-1)return false;return i==0||options.matchContains;};function add(q,value){if(length>options.cacheLength){flush();}
if(!data[q]){length++;}
data[q]=value;}
function populate(){if(!options.data)return false;var stMatchSets={},nullData=0;if(!options.url)options.cacheLength=1;stMatchSets[""]=[];for(var i=0,ol=options.data.length;i<ol;i++){var rawValue=options.data[i];rawValue=(typeof rawValue=="string")?[rawValue]:rawValue;var value=options.formatMatch(rawValue,i+1,options.data.length);if(value===false)
continue;var firstChar=value.charAt(0).toLowerCase();if(!stMatchSets[firstChar])
stMatchSets[firstChar]=[];var row={value:value,data:rawValue,result:options.formatResult&&options.formatResult(rawValue)||value};stMatchSets[firstChar].push(row);if(nullData++<options.max){stMatchSets[""].push(row);}};$.each(stMatchSets,function(i,value){options.cacheLength++;add(i,value);});}
setTimeout(populate,25);function flush(){data={};length=0;}
return{flush:flush,add:add,populate:populate,load:function(q){if(!options.cacheLength||!length)
return null;if(!options.url&&options.matchContains){var csub=[];for(var k in data){if(k.length>0){var c=data[k];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub.push(x);}});}}
return csub;}else
if(data[q]){return data[q];}else
if(options.matchSubset){for(var i=q.length-1;i>=options.minChars;i--){var c=data[q.substr(0,i)];if(c){var csub=[];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub[csub.length]=x;}});return csub;}}}
return null;}};};$.Autocompleter.Select=function(options,input,select,config){var CLASSES={ACTIVE:"ac_over"};var listItems,active=-1,data,term="",needsInit=true,element,list;function init(){if(!needsInit)
return;element=$("<div/>").hide().addClass(options.resultsClass).css("position","absolute").appendTo(document.body);list=$("<ul/>").appendTo(element).mouseover(function(event){if(target(event).nodeName&&target(event).nodeName.toUpperCase()=='LI'){active=$("li",list).removeClass(CLASSES.ACTIVE).index(target(event));$(target(event)).addClass(CLASSES.ACTIVE);}}).click(function(event){$(target(event)).addClass(CLASSES.ACTIVE);select();input.focus();return false;}).mousedown(function(){config.mouseDownOnSelect=true;}).mouseup(function(){config.mouseDownOnSelect=false;});if(options.width>0)
element.css("width",options.width);needsInit=false;}
function target(event){var element=event.target;while(element&&element.tagName!="LI")
element=element.parentNode;if(!element)
return[];return element;}
function moveSelect(step){listItems.slice(active,active+1).removeClass(CLASSES.ACTIVE);movePosition(step);var activeItem=listItems.slice(active,active+1).addClass(CLASSES.ACTIVE);if(options.scroll){var offset=0;listItems.slice(0,active).each(function(){offset+=this.offsetHeight;});if((offset+activeItem[0].offsetHeight-list.scrollTop())>list[0].clientHeight){list.scrollTop(offset+activeItem[0].offsetHeight-list.innerHeight());}else if(offset<list.scrollTop()){list.scrollTop(offset);}}};function movePosition(step){active+=step;if(active<0){active=listItems.size()-1;}else if(active>=listItems.size()){active=0;}}
function limitNumberOfItems(available){return options.max&&options.max<available?options.max:available;}
function fillList(){list.empty();var max=limitNumberOfItems(data.length);for(var i=0;i<max;i++){if(!data[i])
continue;var formatted=options.formatItem(data[i].data,i+1,max,data[i].value,term);if(formatted===false)
continue;var li=$("<li/>").html(options.highlight(formatted,term)).addClass(i%2==0?"ac_even":"ac_odd").appendTo(list)[0];$.data(li,"ac_data",data[i]);}
listItems=list.find("li");if(options.selectFirst){listItems.slice(0,1).addClass(CLASSES.ACTIVE);active=0;}
if($.fn.bgiframe)
list.bgiframe();}
return{display:function(d,q){init();data=d;term=q;fillList();},next:function(){moveSelect(1);},prev:function(){moveSelect(-1);},pageUp:function(){if(active!=0&&active-8<0){moveSelect(-active);}else{moveSelect(-8);}},pageDown:function(){if(active!=listItems.size()-1&&active+8>listItems.size()){moveSelect(listItems.size()-1-active);}else{moveSelect(8);}},hide:function(){element&&element.hide();listItems&&listItems.removeClass(CLASSES.ACTIVE);active=-1;},visible:function(){return element&&element.is(":visible");},current:function(){return this.visible()&&(listItems.filter("."+CLASSES.ACTIVE)[0]||options.selectFirst&&listItems[0]);},show:function(){var offset=$(input).offset();element.css({width:typeof options.width=="string"||options.width>0?options.width:($(input).width()+parseInt($(input).css('padding-left'))+parseInt($(input).css('padding-right'))+parseInt($(input).css('margin-left'))+parseInt($(input).css('margin-right'))),top:offset.top+input.offsetHeight,left:offset.left}).show();if(options.scroll){list.css({maxHeight:options.scrollHeight,overflow:'auto'});if($.browser.msie&&typeof document.body.style.maxHeight==="undefined"){var listHeight=0;listItems.each(function(){listHeight+=this.offsetHeight;});var scrollbarsVisible=listHeight>options.scrollHeight;list.css('height',scrollbarsVisible?options.scrollHeight:listHeight);if(!scrollbarsVisible){listItems.width(list.width()-parseInt(listItems.css("padding-left"))-parseInt(listItems.css("padding-right")));}}}},selected:function(){var selected=listItems&&listItems.filter("."+CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);return selected&&selected.length&&$.data(selected[0],"ac_data");},emptyList:function(){list&&list.empty();},unbind:function(){element&&element.remove();}};};$.Autocompleter.Selection=function(field,start,end){if(field.createTextRange){var selRange=field.createTextRange();selRange.collapse(true);selRange.moveStart("character",start);selRange.moveEnd("character",end);selRange.select();}else if(field.setSelectionRange){field.setSelectionRange(start,end);}else{if(field.selectionStart){field.selectionStart=start;field.selectionEnd=end;}}
field.focus();};})(jQuery);;$(document).ready(function(){if(!!$.prototype.bxSlider)
$('#crossselling_list_car').bxSlider({minSlides:2,maxSlides:6,slideWidth:178,slideMargin:20,pager:false,nextText:'',prevText:'',moveSlides:1,infiniteLoop:false,hideControlOnEnd:true});});;$(document).ready(function(){$('.ajax_cart_block_remove_link').click(function(){updateCarrierSelectionAndGift();});$('.cart_quantity_button').click(function(){updateCarrierSelectionAndGift();});$('.cart_quantity_delete').click(function(){updateCarrierSelectionAndGift();});$('#cgv').click(function(){setTimeout(function(){updateCarrierSelectionAndGift();},2000);});$('#submitAccount').click(function(){setTimeout(function(){updateCarrierSelectionAndGift();},2000);});$('#SubmitLogin').click(function(){setTimeout(function(){updateCarrierSelectionAndGift();},2000);});$('#id_country').change(function(){setTimeout(function(){updateCarrierSelectionAndGift();},2500);});$("#login_form").submit(function(){setTimeout(function(){updateCarrierSelectionAndGift();},2000);});$("#new_account_form").submit(function(){setTimeout(function(){updateCarrierSelectionAndGift();},2000);});});;$(document).ready(function(){oosHookJsCodeMailAlert();$(document).on('keypress','#oos_customer_email',function(e){if(e.keyCode==13)
{e.preventDefault();addNotification();}});$(document).on('click','#oos_customer_email',function(e){clearText();});$(document).on('click','#mailalert_link',function(e){e.preventDefault();addNotification();});$(document).on('click','i[rel^=ajax_id_mailalert_]',function(e)
{var ids=$(this).attr('rel').replace('ajax_id_mailalert_','');ids=ids.split('_');var id_product_mail_alert=parseInt(ids[0]);var id_product_attribute_mail_alert=parseInt(ids[1]);var parent=$(this).parents('li');if(typeof mailalerts_url_remove=='undefined')
return;$.ajax({url:mailalerts_url_remove,type:"POST",data:{'id_product':id_product_mail_alert,'id_product_attribute':id_product_attribute_mail_alert},success:function(result)
{if(result=='0')
{parent.fadeOut("normal",function()
{if(parent.siblings().length==0)
$("#mailalerts_block_account_warning").removeClass('hidden');parent.remove();});}}});});});function clearText()
{if($('#oos_customer_email').val()==mailalerts_placeholder)
$('#oos_customer_email').val('');}
function oosHookJsCodeMailAlert()
{if(typeof mailalerts_url_check=='undefined')
return;$.ajax({type:'POST',url:mailalerts_url_check,data:'id_product='+id_product+'&id_product_attribute='+$('#idCombination').val(),success:function(msg){if(msg=='0')
{$('#mailalert_link').show();$('#oos_customer_email').show();}
else
{$('#mailalert_link').hide();$('#oos_customer_email').hide();}}});}
function addNotification()
{if($('#oos_customer_email').val()==mailalerts_placeholder||(typeof mailalerts_url_add=='undefined'))
return;$.ajax({type:'POST',url:mailalerts_url_add,data:'id_product='+id_product+'&id_product_attribute='+$('#idCombination').val()+'&customer_email='+$('#oos_customer_email').val()+'',success:function(msg){if(msg=='1')
{$('#mailalert_link').hide();$('#oos_customer_email').hide();$('#oos_customer_email_result').html(mailalerts_registered);$('#oos_customer_email_result').css('color','green').show();}
else if(msg=='2')
{$('#oos_customer_email_result').html(mailalerts_already);$('#oos_customer_email_result').css('color','red').show();}
else
{$('#oos_customer_email_result').html(mailalerts_invalid);$('#oos_customer_email_result').css('color','red').show();}}});};;(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:7,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn);}else if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector});}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});}
var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}
if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover},cfg.selector);};})(jQuery);;(function($){"use strict";var methods=(function(){var c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',menuArrowClass:'sf-arrows'},ios=(function(){var ios=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(ios){$(window).load(function(){$('body').children().on('click',$.noop);});}
return ios;})(),wp7=(function(){var style=document.documentElement.style;return('behavior'in style&&'fill'in style&&/iemobile/i.test(navigator.userAgent));})(),toggleMenuClasses=function($menu,o){var classes=c.menuClass;if(o.cssArrows){classes+=' '+c.menuArrowClass;}
$menu.toggleClass(classes);},setPathToCurrent=function($menu,o){return $menu.find('li.'+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+' '+c.bcClass).filter(function(){return($(this).children(o.popUpSelector).hide().show().length);}).removeClass(o.pathClass);},toggleAnchorClass=function($li){$li.children('a').toggleClass(c.anchorClass);},toggleTouchAction=function($menu){var touchAction=$menu.css('ms-touch-action');touchAction=(touchAction==='pan-y')?'auto':'pan-y';$menu.css('ms-touch-action',touchAction);},applyHandlers=function($menu,o){var targets='li:has('+o.popUpSelector+')';if($.fn.hoverIntent&&!o.disableHI){$menu.hoverIntent(over,out,targets);}
else{$menu.on('mouseenter.superfish',targets,over).on('mouseleave.superfish',targets,out);}
var touchevent='MSPointerDown.superfish';if(!ios){touchevent+=' touchend.superfish';}
if(wp7){touchevent+=' mousedown.superfish';}
$menu.on('focusin.superfish','li',over).on('focusout.superfish','li',out).on(touchevent,'a',o,touchHandler);},touchHandler=function(e){var $this=$(this),$ul=$this.siblings(e.data.popUpSelector);if($ul.length>0&&$ul.is(':hidden')){$this.one('click.superfish',false);if(e.type==='MSPointerDown'){$this.trigger('focus');}else{$.proxy(over,$this.parent('li'))();}}},over=function(){var $this=$(this),o=getOptions($this);clearTimeout(o.sfTimer);$this.siblings().superfish('hide').end().superfish('show');},out=function(){var $this=$(this),o=getOptions($this);if(ios){$.proxy(close,$this,o)();}
else{clearTimeout(o.sfTimer);o.sfTimer=setTimeout($.proxy(close,$this,o),o.delay);}},close=function(o){o.retainPath=($.inArray(this[0],o.$path)>-1);this.superfish('hide');if(!this.parents('.'+o.hoverClass).length){o.onIdle.call(getMenu(this));if(o.$path.length){$.proxy(over,o.$path)();}}},getMenu=function($el){return $el.closest('.'+c.menuClass);},getOptions=function($el){return getMenu($el).data('sf-options');};return{hide:function(instant){if(this.length){var $this=this,o=getOptions($this);if(!o){return this;}
var not=(o.retainPath===true)?o.$path:'',$ul=$this.find('li.'+o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),speed=o.speedOut;if(instant){$ul.show();speed=0;}
o.retainPath=false;o.onBeforeHide.call($ul);$ul.stop(true,true).animate(o.animationOut,speed,function(){var $this=$(this);o.onHide.call($this);});}
return this;},show:function(){var o=getOptions(this);if(!o){return this;}
var $this=this.addClass(o.hoverClass),$ul=$this.children(o.popUpSelector);o.onBeforeShow.call($ul);$ul.stop(true,true).animate(o.animation,o.speed,function(){o.onShow.call($ul);});return this;},destroy:function(){return this.each(function(){var $this=$(this),o=$this.data('sf-options'),$hasPopUp;if(!o){return false;}
$hasPopUp=$this.find(o.popUpSelector).parent('li');clearTimeout(o.sfTimer);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);$this.off('.superfish').off('.hoverIntent');$hasPopUp.children(o.popUpSelector).attr('style',function(i,style){return style.replace(/display[^;]+;?/g,'');});o.$path.removeClass(o.hoverClass+' '+c.bcClass).addClass(o.pathClass);$this.find('.'+o.hoverClass).removeClass(o.hoverClass);o.onDestroy.call($this);$this.removeData('sf-options');});},init:function(op){return this.each(function(){var $this=$(this);if($this.data('sf-options')){return false;}
var o=$.extend({},$.fn.superfish.defaults,op),$hasPopUp=$this.find(o.popUpSelector).parent('li');o.$path=setPathToCurrent($this,o);$this.data('sf-options',o);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);applyHandlers($this,o);$hasPopUp.not('.'+c.bcClass).superfish('hide',true);o.onInit.call(this);});}};})();$.fn.superfish=function(method,args){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}
else{return $.error('Method '+method+' does not exist on jQuery.fn.superfish');}};$.fn.superfish.defaults={popUpSelector:'ul,.sf-mega',hoverClass:'sfHover',pathClass:'overrideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},animationOut:{opacity:'hide'},speed:'normal',speedOut:'fast',cssArrows:true,disableHI:false,onInit:$.noop,onBeforeShow:$.noop,onShow:$.noop,onBeforeHide:$.noop,onHide:$.noop,onIdle:$.noop,onDestroy:$.noop};$.fn.extend({hideSuperfishUl:methods.hide,showSuperfishUl:methods.show});})(jQuery);$(window).resize(function(){$('.submenu-container').css({'width':$('.container').width()});});$(window).load(function(){$('.submenu-container').css({'width':$('.container').width()});});;var responsiveflagMenu=false;var categoryMenu=$('ul.sf-menu');var mCategoryGrover=$('.sf-contener .cat-title');$(document).ready(function(){categoryMenu=$('ul.sf-menu');mCategoryGrover=$('.sf-contener .cat-title');responsiveMenu();$(window).resize(responsiveMenu);});function responsiveMenu()
{if($(document).width()<=767&&responsiveflagMenu==false)
{menuChange('enable');responsiveflagMenu=true;}
else if($(document).width()>=768)
{menuChange('disable');responsiveflagMenu=false;}}
function desktopInit()
{mCategoryGrover.off();mCategoryGrover.removeClass('active');$('.sf-menu > li > ul').removeClass('menu-mobile').parent().find('.menu-mobile-grover').remove();$('.sf-menu').removeAttr('style');categoryMenu.superfish('init');$('.sf-menu > li > ul').addClass('submenu-container clearfix');$('.sf-menu > li > ul').each(function(){i=0;$(this).each(function(){if($(this).attr('id')!="category-thumbnail"){i++;if(i%2==1)
$(this).addClass('first-in-line-xs');else if(i%5==1)
$(this).addClass('first-in-line-lg');}});});}
function mobileInit()
{categoryMenu.superfish('destroy');$('.sf-menu').removeAttr('style');mCategoryGrover.on('click touchstart',function(){$(this).toggleClass('active').parent().find('ul.menu-content').stop().slideToggle('medium');});$('.sf-menu > li > ul').addClass('menu-mobile clearfix').parent().prepend('<span class="menu-mobile-grover"></span>');$(".sf-menu .menu-mobile-grover").on('click touchstart',function(){var catSubUl=$(this).next().next().next('.menu-mobile');if(catSubUl.is(':hidden'))
{catSubUl.slideDown();$(this).addClass('active');}
else
{catSubUl.slideUp();$(this).removeClass('active');}
return false;});$('#block_top_menu > ul:first > li > a').on('click touchstart',function(e){if($(this).parent('li').find('ul').length)
{e.preventDefault();var mobCatSubUl=$(this).next('.menu-mobile');var mobMenuGrover=$(this).next('.menu-mobile-grover');if(mobCatSubUl.is(':hidden'))
{mobCatSubUl.slideDown();mobMenuGrover.addClass('active');}
else
{mobCatSubUl.slideUp();mobMenuGrover.removeClass('active');}}});}
function menuChange(status)
{status=='enable'?mobileInit():desktopInit();};;;;(function(){"use strict";var $,Animation,Growl,__bind=function(fn,me){return function(){return fn.apply(me,arguments);};};$=jQuery;Animation=(function(){function Animation(){}
Animation.transitions={"webkitTransition":"webkitTransitionEnd","mozTransition":"mozTransitionEnd","oTransition":"oTransitionEnd","transition":"transitionend"};Animation.transition=function($el){var el,result,type,_ref;el=$el[0];_ref=this.transitions;for(type in _ref){result=_ref[type];if(el.style[type]!=null){return result;}}};return Animation;})();Growl=(function(){Growl.settings={namespace:'growl',duration:3200,close:"&times;",location:"default",style:"default",size:"medium"};Growl.growl=function(settings){if(settings==null){settings={};}
this.initialize();return new Growl(settings);};Growl.initialize=function(){return $("body:not(:has(#growls))").append('<div id="growls" />');};function Growl(settings){if(settings==null){settings={};}
this.html=__bind(this.html,this);this.$growl=__bind(this.$growl,this);this.$growls=__bind(this.$growls,this);this.animate=__bind(this.animate,this);this.remove=__bind(this.remove,this);this.dismiss=__bind(this.dismiss,this);this.present=__bind(this.present,this);this.close=__bind(this.close,this);this.cycle=__bind(this.cycle,this);this.unbind=__bind(this.unbind,this);this.bind=__bind(this.bind,this);this.render=__bind(this.render,this);this.settings=$.extend({},Growl.settings,settings);this.$growls().attr('class',this.settings.location);this.render();}
Growl.prototype.render=function(){var $growl;$growl=this.$growl();this.$growls().append($growl);this.cycle($growl);};Growl.prototype.bind=function($growl){if($growl==null){$growl=this.$growl();}
return $growl.find("."+this.settings.namespace+"-close").on("click",this.close);};Growl.prototype.unbind=function($growl){if($growl==null){$growl=this.$growl();}
return $growl.find("."+(this.settings.namespace-close)).off("click",this.close);};Growl.prototype.cycle=function($growl){if($growl==null){$growl=this.$growl();}
return $growl.queue(this.present).delay(this.settings.duration).queue(this.dismiss).queue(this.remove);};Growl.prototype.close=function(event){var $growl;event.preventDefault();event.stopPropagation();$growl=this.$growl();return $growl.stop().queue(this.dismiss).queue(this.remove);};Growl.prototype.present=function(callback){var $growl;$growl=this.$growl();this.bind($growl);return this.animate($growl,""+this.settings.namespace+"-incoming",'out',callback);};Growl.prototype.dismiss=function(callback){var $growl;$growl=this.$growl();this.unbind($growl);return this.animate($growl,""+this.settings.namespace+"-outgoing",'in',callback);};Growl.prototype.remove=function(callback){this.$growl().remove();return callback();};Growl.prototype.animate=function($element,name,direction,callback){var transition;if(direction==null){direction='in';}
transition=Animation.transition($element);$element[direction==='in'?'removeClass':'addClass'](name);$element.offset().position;$element[direction==='in'?'addClass':'removeClass'](name);if(callback==null){return;}
if(transition!=null){$element.one(transition,callback);}else{callback();}};Growl.prototype.$growls=function(){return this.$_growls!=null?this.$_growls:this.$_growls=$('#growls');};Growl.prototype.$growl=function(){return this.$_growl!=null?this.$_growl:this.$_growl=$(this.html());};Growl.prototype.html=function(){return"<div class='"+this.settings.namespace+" "+this.settings.namespace+"-"+this.settings.style+" "+this.settings.namespace+"-"+this.settings.size+"'>\n  <div class='"+this.settings.namespace+"-close'>"+this.settings.close+"</div>\n  <div class='"+this.settings.namespace+"-title'>"+this.settings.title+"</div>\n  <div class='"+this.settings.namespace+"-message'>"+this.settings.message+"</div>\n</div>";};return Growl;})();$.growl=function(options){if(options==null){options={};}
return Growl.growl(options);};$.growl.error=function(options){var settings;if(options==null){options={};}
settings={title:"Error!",style:"error"};return $.growl($.extend(settings,options));};$.growl.notice=function(options){var settings;if(options==null){options={};}
settings={title:"Notice!",style:"notice"};return $.growl($.extend(settings,options));};$.growl.warning=function(options){var settings;if(options==null){options={};}
settings={title:"Warning!",style:"warning"};return $.growl($.extend(settings,options));};}).call(this);;if(typeof jQuery=='undefined'){function loadScript(url,callback){var script=document.createElement("script")
script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;callback();}};}else{script.onload=function(){callback();};}
script.src=url;document.getElementsByTagName("head")[0].appendChild(script);}
var jQueryIsLoaded=false;try{if(typeof jQuery==='undefined')
jQueryIsLoaded=false;else
jQueryIsLoaded=true;}catch(err){jQueryIsLoaded=false;}
if(!jQueryIsLoaded){loadScript("http://www.avis-verifies.com/review/js/jquery-1.8.2.min.js");}}
jQuery(document).ready(function($){$('#AV_button').on("click",function(){if($(".nav-item a").length!="0"){$(".nav-item a").each(function(){if($(this)[0].innerText.match(/Avis Vérifiés/)||$(this)[0].innerText.match(/verified reviews/)||$(this)[0].innerText.match(/Echte Bewertungen/)||$(this)[0].innerText.match(/Opiniones Verificadas/)||$(this)[0].innerText.match(/Recensioni Verificate/)||$(this)[0].innerText.match(/Opiniões Verificadas/)){$(this).trigger('click');$(document).scrollTop($(this).offset().top)}})}else{$("a[href='#idTabavisverifies']").click();$('html,body').animate({scrollTop:$("#idTabavisverifies").offset().top},'slow');}});});function switchCommentsVisibility(review_number){comment=$('div[review_number='+review_number+']');console.log(review_number);comment.toggle();$('a#display'+review_number+'[review_number='+review_number+']').toggle();$('a#hide'+review_number+'[review_number='+review_number+']').toggle();};;$(document).ready(function(){if(THIS_CAPTCHA_HTML!=''&&$("#contact .contact-form-box .submit").length>0){$("#contact .contact-form-box .submit").prepend(THIS_CAPTCHA_HTML);}
if(THIS_CAPTCHA_HTML!=''){$("#account-creation_form #submitAccount").prepend(THIS_CAPTCHA_HTML);}});;$(function(){AppPET.init();});var AppPET={ignore_selector_modules:'',obj_tabs:[],init:function(){AppPET.registerEvents();if(typeof CONFIGS===typeof undefined||typeof CONFIGS.PET_STYLE_TABS===typeof undefined||typeof tabs===typeof undefined){return;}
AppPET.getNativeMenu();},registerEvents:function(){$('body').on('change','.product-variants [data-product-attribute]',function(event){event.preventDefault();AppPET.findTabCombination();});if(CONFIGS.PET_HOOK==='hook_display_product_extra_content'){AppPET.findTabCombination();}},getNativeMenu:function(){var container_native_tabs='';if(theme_name==='classic'){container_native_tabs=$('#product-details section');}else if($.inArray(theme_name,['jms_minimal'])!==-1){container_native_tabs='div#more_info_block ul';}else if(theme_name=='ZOneTheme'){container_native_tabs='div.main-product-bottom > div.block';}else if(theme_name=='panda'){container_native_tabs='div.product_info_tabs > ul.nav.nav-tabs';}else{if($('section#wrapper div#content-wrapper').find('div.tabs:visible > ul.nav')){container_native_tabs='div.tabs:visible > ul.nav';}}
AppPET.createNativeTabs(container_native_tabs);},createNativeTabs:function(container_native_tabs){if($.isEmpty(container_native_tabs)){return false;}
var $container_native_tabs=$(container_native_tabs);if(CONFIGS.PET_ORDER_TABS==='extratabs_first'&&tabs.length>0){AppPET.obj_tabs=tabs;}
if($container_native_tabs.is('ul')){$.each($container_native_tabs.children('li'),function(i,element){var $a=$(element).children('a');var name_tab=$a.html();var id_container_content=$a.attr('href');if($(id_container_content).is(AppPET.ignore_selector_modules)||$(id_container_content).find(AppPET.ignore_selector_modules).length>0){return true;}
if($(id_container_content).find('.mobile_tab_title').length>0){$(id_container_content).find('.mobile_tab_title').remove();}
AppPET.obj_tabs.push({id_tab:'313m'+i,id_tab_content:i+'313m',type:'element_',name_tab:name_tab,content:$(id_container_content).html()});$a.parent('li').remove();$(id_container_content).remove();});if($container_native_tabs.find('a').length>0){$container_native_tabs.find('a:first').trigger('click');}else{$container_native_tabs.parent().remove();}}else{$.each($container_native_tabs,function(i,element){if($(element).is(AppPET.ignore_selector_modules)||$(element).find(AppPET.ignore_selector_modules).length>0){return true;}
if(theme_name==='classic'){var $tab_title=$(element).children('h3');}else{var $tab_title=$(element).find('.title-block');}
var name_tab=$tab_title.html();$tab_title.remove();var $div=$('<div>').append($(element));AppPET.obj_tabs.push({id_tab:'313m'+i,id_tab_content:i+'313m',type:'element_',name_tab:name_tab,content:$div.html(),});});}
AppPETOtherModules.init();if(CONFIGS.PET_ORDER_TABS==='native_first'){$.each(tabs,function(i,value){AppPET.obj_tabs.push(value);});}
tabs=AppPET.obj_tabs;AppPET.showTabs();},showTabs:function(){if($(window).width()<=767){CONFIGS.PET_STYLE_TABS='accordion';AppPET.listTabAccordion();}else{CONFIGS.PET_STYLE_TABS='tab_horizontal';AppPET.listTabHorizontal();}
AppPET.findTabCombination();},findTabCombination:function(){var id_attributes=new Array();var $container_attrs=$('.product-variants');if($container_attrs.find('input.input-color:checked').length>0){var color_pick=$container_attrs.find('input.input-color:checked').val();id_attributes.push(color_pick);}
var $attribute_select=$container_attrs.find('select');$.each($attribute_select,function(i,select){id_attributes.push($(select).val());});var $attribute_radio=$container_attrs.find('input.input-radio:checked');$.each($attribute_radio,function(i,radio){id_attributes.push($(radio).val());});if(id_attributes.length===0){return;}
var $tab_combination_=$('[id*=tab_combination_]');var _json={data:{url_call:PresTeamShop.actions_productextratabs,action:'getContentByCombination',id_product:$('#product_page_product_id').val(),id_attributes:id_attributes,token:PresTeamShop.pts_static_token},beforeSend:function(){$tab_combination_.find('.tab_content').addClass('pts-pet-overlay');},complete:function(){$tab_combination_.find('.tab_content').removeClass('pts-pet-overlay');},success:function(json){if(json.message_code==PresTeamShop.success_code){$tab_combination_.find('.tab_content').html('');if(CONFIGS.PET_STYLE_TABS==='tab_horizontal'){var $div_tab_horizontal=$('div#tab_horizontal');$div_tab_horizontal.find('a[href*="#tab_combination_"]').parent('li').hide();$div_tab_horizontal.find('a.active').removeClass('active');$div_tab_horizontal.find('.tab-content > div.active.in').removeClass('active in');}else if(CONFIGS.PET_STYLE_TABS==='list_vertical'){$('div#list_vertical').find('div[id*="tab_combination_"]').hide();}else if(CONFIGS.PET_STYLE_TABS==='accordion'){$('div#div_accordion').find('div[id*="tab_combination_"]').hide();}
if(json.content!==false){$.each(json.content,function(i,tab){var _content=$.htmlDecode(tab.content);var $parent_combination=$('#tab_combination_'+tab.id_tab);if($parent_combination.length>0){$parent_combination.find('.tab_content').html(_content);}else{$('.tab_combination_'+tab.id_tab).html(_content);}
if(CONFIGS.PET_STYLE_TABS==='tab_horizontal'){$('div#tab_horizontal').find('a[href="#tab_combination_'+tab.id_tab+'"]').parent('li').show();}else if(CONFIGS.PET_STYLE_TABS==='list_vertical'){$('div#list_vertical').find('div[id*="tab_combination_'+tab.id_tab+'"]').show();}else if(CONFIGS.PET_STYLE_TABS==='accordion'){$('div#div_accordion').find('div[id*="tab_combination_'+tab.id_tab+'"]').show();}});}
if(CONFIGS.PET_STYLE_TABS==='tab_horizontal'){var $a_active=$('div#tab_horizontal > ul.nav > li:visible:first > a');$('div#tab_horizontal > div.tab-content > div'+$a_active.attr('href')).addClass('active').addClass(theme_name==='panda'?'show':'in');$a_active.addClass('active');}}}};$.makeRequest(_json);},listTabHorizontal:function(){var $div_horizontal_tabs=$('div#tab_horizontal');var $ul=$div_horizontal_tabs.children('ul');var $div_tab_content=$div_horizontal_tabs.children('.tab-content');$.each(tabs,function(i,tab){var $li=$('<li>').addClass('nav-item');$('<a>').addClass('nav-link').attr('href','#tab_'+tab.type+'_'+tab.id_tab).attr('data-toggle','tab').html(tab.name_tab).attr('aria-expanded','false').appendTo($li);var $div_fade=$('<div>').addClass('tab-pane fade').attr('id','tab_'+tab.type+'_'+tab.id_tab).appendTo($div_tab_content).attr('aria-expanded','false');if(tab.type==='combination'){$('<div>').addClass('tab_content').html(tab.content).appendTo($div_fade);}else{$div_fade.html(tab.content);}
if(tab.type==='contact'){var $input_id_product=$('<input>').addClass('form-control').attr({type:'hidden',name:'id_product',id:'id_product',value:id_product});$div_fade.find('.contact-form .form-fields').append($input_id_product);}
$div_tab_content.prepend($div_fade);$ul.append($li);});$div_horizontal_tabs.removeClass('hidden_pet');var $a_active=$div_horizontal_tabs.find('ul.nav > li:visible:first > a');$div_horizontal_tabs.find('div.tab-content > div'+$a_active.attr('href')).addClass('active').addClass(theme_name==='panda'?'show':'in');$a_active.addClass('active');},listTabVertical:function(){var $div_vertical=$('div#list_vertical');$.each(tabs,function(i,tab){var name_tab=tab.name_tab;var content=tab.content;var $div=$('<div>').addClass('page-product-box page_product_box clearfix').attr('id','tab_'+tab.type+'_'+tab.id_tab).appendTo($div_vertical);$('<h3>').addClass('page-product-heading').html(name_tab).appendTo($div);var $div_rte=$('<div>').addClass('rte tab_'+tab.type+'_'+tab.id_tab).data('section',tab.id_tab+'0').appendTo($div);if(typeof tab.type!==typeof undefined&&tab.type==='combination'){$('<div>').addClass('tab_content').appendTo($div_rte).html(content);}else{$div_rte.html(content);}});$div_vertical.removeClass('hidden_pet');},listTabAccordion:function(){var $div_accordion=$('div#div_accordion');$.each(tabs,function(i,value){var name_tab=value.name_tab;var content=value.content;var $div_panel=$('<div>').addClass('panel panel-default').attr('id','tab_'+value.type+'_'+value.id_tab);var $div_$panel_heading=$('<div>').addClass('panel-heading').appendTo($div_panel);var $h_panel_title=$('<h4>').addClass('panel-title').appendTo($div_$panel_heading);var $a=$('<a>').addClass('accordion-toggle').attr('role','button').attr('data-toggle','collapse').attr('data-parent','#div_accordion').attr('href','#'+value.type+value.id_tab_content).attr('aria-expanded',true).attr('aria-controls',value.type+value.id_tab_content).appendTo($h_panel_title);$('<span>').html(name_tab).appendTo($a);var $span=$('<span>').addClass('icon_show').appendTo($a);var $icon=$('<i>').addClass('indicator fa-pts').css('float','right').appendTo($span);var $div_panel_collapse=$('<div>').attr('id',value.type+value.id_tab_content).addClass('tab_'+value.type+'_'+value.id_tab+' panel-collapse collapse').attr('role','tabpanel').data('section',value.id_tab+'0').appendTo($div_panel);if(parseInt(i)===0){$div_panel_collapse.addClass(theme_name==='panda'?'show':'in');$icon.addClass('fa-pts-minus-circle');}else{$icon.addClass('fa-pts-plus-circle');}
var $div_panel_body=$('<div>').addClass('panel-body rte');if(typeof value.carousel!==typeof undefined&&value.carousel){$a.addClass('extratab_carousel');$div_panel_body.addClass('blockproductscategory page-product-box');}
$('<div>').addClass('tab_content').html(content).appendTo($div_panel_body);$div_panel_body.appendTo($div_panel_collapse);$div_panel.appendTo($div_accordion);});$div_accordion.removeClass('hidden_pet');$(document).on('hidden.bs.collapse','div#div_accordion',function(e){AppPET.toggleIconCollapse(e);});$(document).on('shown.bs.collapse','div#div_accordion',function(e){AppPET.toggleIconCollapse(e);});},toggleIconCollapse:function(e){var $accordion_toggle=$(e.target).siblings('.panel-heading').find('a.accordion-toggle');$accordion_toggle.find('i.indicator').toggleClass('fa-pts-minus-circle fa-pts-plus-circle');}};var AppPETOtherModules={init:function(){AppPETOtherModules.gSnippetsReviews();},gSnippetsReviews:function(){if($('#gsr').length>0&&!$('#gsr').is(AppPET.ignore_selector_modules)&&$('#gsr').find(AppPET.ignore_selector_modules).length==0){var $div=$('<div>');$.each($('[id="gsr"]'),function(i,elem){$(elem).appendTo($div);});AppPET.obj_tabs.push({id_tab:'gsr',id_tab_content:'gsr',type:'element_',name_tab:Msg.reviews_tab,content:$div.html()});}}};;;;/**
 * We offer the best and most useful modules PrestaShop and modifications for your online store.
 *
 * We are experts and professionals in PrestaShop
 *
 * @author    PresTeamShop.com <support@presteamshop.com>
 * @copyright 2011-2018 PresTeamShop
 * @license   see file: LICENSE.txt
 * @category  PrestaShop
 * @category  Module
 * @version   66
 */

$(function () {
    $('#pts_register_product')
        .on('click', '.register-button', function() {
            $('#pts_register_product .form-register').removeClass('hidden').slideDown();
            $('#pts_register_product .form-validate').slideUp();
        })
        .on('click', '.validate-button', function() {
            $('#pts_register_product .form-register').slideUp();
            $('#pts_register_product .form-validate').removeClass('hidden').slideDown();
        })
        .on('click', '#btn_send_register', function() {
            $('#sent_register').submit();
        })
        .on('click', '#btn_validate_license', function() {
            $('#validate_license').submit();
        });

    $(document).on('input change', '.tooltip-title-value', function(event) {
        $(event.currentTarget).attr('title', $(event.currentTarget).val());
    });
    $('.tooltip-title-value').trigger('change');

    //remove focus for elements
    $('.pts a, .pts .btn, .pts input:checkbox').click(function (e) {
        $(e.currentTarget).blur();
    });

    //change language of helper languages templates
    $('.pts').on('click', '.change-language', $.changeLanguage);

    //range
    $('input[type="range"]')
            .on('click', function(event) {
                $(event.currentTarget).trigger('blur');
            })
            .on('change', function(event) {
                $(event.currentTarget).attr('title', $(event.currentTarget).val());
            });
});

jQuery.extend(
        jQuery.expr[ ":" ],
        {reallyvisible: function (a) {
                return !(jQuery(a).css('display') == 'none');
            }}
);

jQuery.extend({
    isEmpty: function () {
        var count = 0;
        $.each(arguments, function (i, data) {
            if (typeof data !== typeof undefined && data !== null && data !== '' && (typeof data !== 'number' || (typeof data === 'number' && parseInt(data) !== 0))) {
                count++;
            }
            else
                return false
        });
        return (arguments).length == count ? false : true;
    },
    isEmail: function (val) {
        var regExp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
        return regExp.exec(val);
    },
    isJson: function (str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    },
    htmlEncode: function (value) {
        return $('<div/>').text(value).html();
    },
    htmlDecode: function (value) {
        return $('<div/>').html(value).text();
    },
    tinyMCEInit: function (element) {
        $().ready(function () {
            $(element).tinymce({
                // General options
                theme: "advanced",
                plugins: "safari,pagebreak,style,layer,table,advimage,advlink,inlinepopups,media,searchreplace,contextmenu,paste,directionality,fullscreen",
                // Theme options
                theme_advanced_buttons1: "newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",
                theme_advanced_buttons2: "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,,|,forecolor,backcolor",
                theme_advanced_buttons3: "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,media,|,ltr,rtl,|,fullscreen",
                theme_advanced_buttons4: "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,pagebreak",
                theme_advanced_toolbar_location: "top",
                theme_advanced_toolbar_align: "left",
                theme_advanced_statusbar_location: "bottom",
                theme_advanced_resizing: true,
                content_css: tiny_content_css,
                document_base_url: tiny_doc_base_url,
                template_external_list_url: "lists/template_list.js",
                external_link_list_url: "lists/link_list.js",
                external_image_list_url: "lists/image_list.js",
                media_external_list_url: "lists/media_list.js",
                elements: "nourlconvert",
                convert_urls: false,
                language: tiny_lang,
                width: "600"
            });
        });
    },
    getList: function (table, action, parameters, callback) {
        var $table = table;
        if (typeof table === 'string') {
            $table = $('#'+table);
        } else {
            table = $table.attr('id');
        }

        var div_loading = '#' + table + ' tbody';
        var data = {
            action: action,
            page: 1
        };
        $.extend(data, parameters);
        var _json = {
            data: data,
            beforeSend: function (request) {
                $('#' + table).addClass('table-loading');
            },
            success: function (json) {
                $('#' + table + ' thead').empty();
                $('#' + table + ' tbody').empty();
                $('#' + table).removeClass('table-loading');

                var $tr_head = $('<tr/>');
                if (typeof json.masive !== typeof undefined && typeof json.masive.actions !== typeof undefined && Object.keys(json.masive.actions).length > 0) {
                    var $chk_masive = $('<input/>').attr({type: 'checkbox'}).addClass('masive-check-all');
                    $chk_masive.on('change', function(e) {
                        $('#' + table + ' tbody').find('.td_masive input').prop('checked', $(e.currentTarget).prop('checked'));
                    });
                    var $th_masive = $('<th>').addClass('text-center').appendTo($tr_head);
                    $chk_masive.appendTo($th_masive);
                }
                $.each(json.headers, function (field, name_field) {
                    var $th_head = $('<th/>');
                    if (field === 'actions' || (typeof json.status !== typeof undefined && json.status instanceof Array
                            && (json.status.indexOf(field) !== -1) || field in json.status)) {
                        $th_head.addClass('text-center');
                    }
                    if (typeof name_field === 'object') {
                        if (name_field.type === 'icon') {
                            var $span_th = $('<span/>');
                            $('<i/>').addClass('fa-pts fa-pts-'+name_field['class']).css({cursor:'default'}).appendTo($span_th);
                            if (typeof name_field.title !== typeof undefined) {
                                $span_th.attr({title:name_field.title});
                            }
                            $th_head.append($span_th).appendTo($tr_head);
                        }
                    } else {
                        $th_head.html(name_field).appendTo($tr_head);
                    }
                });
                $tr_head.appendTo($('#' + table + ' thead'));

                $.each(json.content, function (i, data) {
                    var $tr = $('<tr/>');
                    if (typeof json.prefix_row !== typeof undefined && !$.isEmpty(json.prefix_row) &&
                        ((typeof data.id !== typeof undefined && !$.isEmpty(data.id)) || (typeof data['id_'+json.prefix_row] !== typeof undefined && !$.isEmpty(data['id_'+json.prefix_row])))
                    ) {
                       $tr.attr('id', json.prefix_row + '_' + (typeof data.id !== typeof undefined ? data.id : data['id_'+json.prefix_row]));
                    }

                    if (typeof json.color !== typeof undefined && typeof data[json.color.by] !== typeof undefined) {
                        $tr.addClass(json.color.colors[data[json.color.by]]);
                    }

                    //masive actions
                    if (typeof json.masive !== typeof undefined && typeof json.masive.actions !== typeof undefined && Object.keys(json.masive.actions).length > 0) {
                        var $td_masive = $('<td/>').addClass('td_masive text-center');
                        $('<input/>').attr({type: 'checkbox'}).addClass('masive-check').appendTo($td_masive)
                                .data({tr: $tr, data: data});
                        $td_masive.appendTo($tr);
                    }

                    $.each(json.headers, function (field, name_field) {
                        var $td = $('<td/>');
                        if (field == 'actions') {
                            $td.addClass('actions text-center');

                            var $button_group_actions = $('<div/>').addClass('btn-group').appendTo($td);
                            $button_group_actions.append(
                                $('<button/>').dropdown().attr({type:'button', 'data-toggle': 'dropdown'}).addClass('btn btn-default dropdown-toggle').data('toggle', 'dropdown').append(
                                    $('<i/>').addClass('fa-pts fa-pts-cog nohover'),
                                    '&nbsp;',
                                    $('<span/>').addClass('caret')
                                )
                            );
                            var $ul_group_actions = $('<ul/>').addClass('dropdown-menu pull-right').attr({role:'menu'}).appendTo($button_group_actions);

                            $.each(json.actions, function (action, attributes) {
                                if (typeof attributes.condition !== typeof undefined) {

                                    if (typeof attributes.condition.comparator === typeof 'string') {
                                        if (data[attributes.condition.field] != attributes.condition.comparator) {
                                            return true;
                                        }
                                    } else if (typeof attributes.condition.comparator === 'object') {
                                        if ($.inArray(data[attributes.condition.field], attributes.condition.comparator) < 0) {
                                            return true;
                                        }
                                    }
                                }

                                var $item_action = $('<a/>').attr({href:'#'}).appendTo($('<li/>').appendTo($ul_group_actions));
                                var action_class = PresTeamShop.class_name;
                                if (typeof attributes.action_class !== typeof undefined) {
                                    action_class = attributes.action_class;
                                }
                                if (typeof attributes['class'] !== typeof undefined) {
                                    var $span = $('<span/>').addClass(attributes['class']);
                                    $span.html('&nbsp;' + attributes.title);
                                    if (typeof attributes.icon !== typeof undefined) {
                                        var $icon = $('<i/>').addClass('fa-pts fa-pts-'+attributes.icon);
                                        $icon.prependTo($span);
                                    }
                                    if (typeof attributes.tooltip !== typeof undefined) {
                                        $span.tooltip({title: attributes.tooltip});
                                    }
                                    $span.click(function (event) {
                                        var objects = action_class.split(".");
                                        var object_class = null;

                                        for (var i = 0, len = objects.length; i < len; i++) {
                                            if (object_class === null) {
                                                object_class = window[objects[i]];
                                            } else {
                                                object_class = object_class[objects[i]];
                                            }
                                        }

                                        $(event.currentTarget).data('content', data);
                                        event.data = data;
                                        object_class[action](event, data);
                                    });
                                    $span.appendTo($item_action);
//                                    $span.appendTo($td);
                                } else if (typeof attributes.img !== typeof undefined) {
                                    var $img_action = $('<img/>').attr({
                                        src: PresTeamShop.module_img + 'icon/' + attributes.img,
                                        title: attributes.title,
                                        alt: attributes.title
                                    });
                                    $img_action.click(function (event) {
                                        window[action_class][action](event, data);
                                    });
                                    $img_action.appendTo($item_action);
//                                    _img.appendTo($td);
                                } else {
                                    $item_action.text(data[field]);
//                                    $td.html(data[field]);
                                }
                            });
                        } else if (typeof json.status !== typeof undefined && json.status instanceof Array
                                && (json.status.indexOf(field) !== -1) || field in json.status) {
                            var $span_status = $('<span/>');
                            var $icon_status = $('<i/>').css({'font-size': '1.5em'});
                            var label_class;
                            var icon_class;
                            var status = parseInt(data[field]);
                            if (status) {
                                label_class = 'success';
                                icon_class = 'check-circle';
                                $icon_status.css({color: '#5bc0de'});
                            } else {
                                label_class = 'danger';
                                icon_class = 'times-circle';
                                $icon_status.css({color: '#d9534f'});
                            }
                            $icon_status.addClass('nohover fa-pts fa-pts-' + icon_class);
//                            $span_status.addClass('badge label-' + label_class);
//                            $span_status.addClass('label-status label label-' + label_class);

                            $icon_status.appendTo($span_status);
                            $span_status.appendTo($td);
                            if (field in json.status && json.status[field] instanceof Object
                                    && typeof json.status[field].action !== typeof undefined) {
                                $span_status.addClass('cursor-pointer');
                                if (typeof json.status[field]['class'] !== typeof undefined)
                                    $span_status.addClass(json.status[field]['class']);

                                $span_status.click(function (event) {
                                    var action_class = PresTeamShop.class_name;
                                    if (typeof json.status[field].action_class !== typeof undefined) {
                                        action_class = json.status[field].action_class;
                                    }
                                    window[action_class][json.status[field].action](event, data);
                                });
                            }

                            $td.addClass('text-center');
                        } else {
                            var text = data[field];

                            if (text instanceof Object && typeof text[PresTeamShop.id_language_default] !== typeof undefined) {
                                text = text[PresTeamShop.id_language_default];
                            }

                            if (typeof json.truncate !== typeof undefined) {
                                if (typeof json.truncate[field] !== typeof undefined) {
                                    if (!$.isEmpty(text) && text.length > json.truncate[field]) {
                                        var $_span = $('<span/>');
                                        var _text_truncate = text.substring(0, json.truncate[field]) + '...';
                                        $_span.html(_text_truncate);
                                        //tooltip
                                        $_span.attr({
                                            'data-toggle': 'tooltip',
                                            'data-placement': 'top',
                                            'data-original-title': text
                                        });
                                        $_span.tooltip();
                                        $_span.appendTo($td);
                                    } else {
                                        $td.html(text);
                                    }
                                } else {
                                    $td.html(text);
                                }
                            } else {
                                $td.html(text);
                            }

                            if (typeof json.link !== typeof undefined) {
                                if ($.inArray(field, json.link.fields) !== -1) {

                                    var url = json.link.url;

                                    if (typeof json.link.params !== typeof undefined) {
                                        var _params = new Array();
                                        $.each(json.link.params, function (p, param) {
                                            if (p === 'token') {
                                                var _param_token = p + '=' + param;
                                                _params.push(_param_token);
                                            } else {
                                                var _param = p + '=' + data[param];
                                                _params.push(_param);
                                            }
                                        });
                                        url += '?' + _params.join('&');
                                    }

                                    var $link = $('<a/>');
                                    $link.attr({
                                        href: url,
                                        target: '_blank'
                                    });

                                    if (typeof json.link.icon !== typeof undefined) {
                                        var $icon_link = $('<i/>');
                                        $icon_link.addClass(json.link.icon);
                                        $icon_link.appendTo($link);
                                    }

                                    $link.appendTo($td);
                                }
                            }
                        }
                        $td.appendTo($tr);
                    });
                    $tr.appendTo($('#' + table + ' tbody'));
                });

                //masive actions
                if (typeof json.masive !== typeof undefined && typeof json.masive.actions !== typeof undefined && Object.keys(json.masive.actions).length > 0) {
                    if (typeof $('#' + table + ' tfoot')[0] === typeof undefined)
                        $table.append($('<tfoot/>'));

                    $('#' + table + ' tfoot').empty();
                    var $tr_foot = $('<tr/>');
                    var $td_foot = $('<td/>').addClass('text-right').appendTo($tr_foot).attr('colspan', Object.keys(json.headers).length + 1);
                    $tr_foot.appendTo($('#' + table + ' tfoot'));

                    var $btn_group_container = $('<div/>').addClass('input-group-btn');
                    var $btn_masive_actions = $('<button/>').dropdown().addClass('btn btn-default dropdown-toggle').attr('data-toggle', 'dropdown');
                    var $icon_masive_actions = $('<i/>').addClass('fa-pts fa-pts-caret-down nohover');
                    $btn_masive_actions.text(json.masive.label+'\xA0');
                    $icon_masive_actions.appendTo($btn_masive_actions);

                    var $list_actions = $('<ul/>').addClass('dropdown-menu pull-right');

                    $.each(json.masive.actions, function(masive_action, params) {

                        var $li_masive_action = $('<li/>');
                        var $span_masive_action = $('<a/>').text(params.title).attr('href', '#');

                        if (typeof params.icon !== typeof undefined) {
                            $('<i>')
                                    .addClass('fa-pts fa-pts-'+params.icon)
                                    .css('margin-right', '5px')
                                    .prependTo($span_masive_action);
                        }

                        $span_masive_action.appendTo($li_masive_action);
                        $li_masive_action.appendTo($list_actions);

                        $span_masive_action.on('click', function(masive_event) {
                            var masive_data = [];
                            $table.find('tbody tr td.td_masive input.masive-check:checked').each(function(i, checkbox_masive) {
                                masive_data.push({
                                    index: i,
                                    tr: $(checkbox_masive).data('tr'),
                                    data: $(checkbox_masive).data('data')
                                });
                            });

                            var action_class = PresTeamShop.class_name;
                            if (typeof params.action_class !== typeof undefined)
                                action_class = params.action_class;

                            var objects = action_class.split(".");
                            var object_class = null;

                            for (var i = 0, len = objects.length; i < len; i++) {
                                if (object_class === null) {
                                    object_class = window[objects[i]];
                                } else {
                                    object_class = object_class[objects[i]];
                                }
                            }

                            if (masive_data.length > 0)
                                object_class[masive_action](masive_event, masive_data);
                        });
                    });

                    $list_actions.appendTo($btn_group_container);
                    $btn_masive_actions.appendTo($btn_group_container);
                    $btn_group_container.appendTo($td_foot);

                }

                //pagination
                if (typeof json.pagination !== typeof undefined) {
                    $table.makePagination(json.pagination, action, parameters, callback);
                }

                //sort table
                if (typeof json.sort !== typeof undefined && typeof $.fn.tableDnD !== typeof undefined) {
                    $table.tableDnD({
                        onDrop: function() {
                            var index = 0;

                            if (typeof json.pagination !== typeof undefined) {
                                var $table_pagination_container = $table.data('pagination-context').container;
                                var items_per_page = $table_pagination_container.find('.pagination-pages select').val();
                                var page = $table_pagination_container.find('ul.pagination li.item_pagination.active').text();

                                items_per_page = parseInt(items_per_page);
                                page = parseInt(page);

                                index = (items_per_page * (page - 1)) + 1;
                            }

                            var items = [];
                            $table.find('tbody tr').each(function(i, tr) {
                                var index_row = index + i;
                                var id_item = $(tr).attr('id').split('_').pop();
                                items.push({index: index_row, id_item: parseInt(id_item)});
                            });
                            //request
                            var _json = {
                                data: {
                                    action: json.sort.action,
                                    items: items
                                }
                            };
                            $.makeRequest(_json);
                        }
                    });
                }

                //callback
                if(typeof callback === 'function'){
                    callback(json);
                }
            },
            div_loading: div_loading
        };

        $.makeRequest(_json);
    },
    radioHandler: function () {
        $('div.radio-group button').click(function (e) {
            var $parent = $(e.target).parent();
            $parent.find('button').removeClass('active blue');
            $(e.target).addClass('active blue');
            var _name = $parent.attr('data-toggle-name');
            var _val = $(e.target).val();
            $('input[name=' + _name + ']').val(_val);
        });
    },
    showMessage: function (message_code, message) {
        if (typeof $.growl !== 'undefined') {
            var data = {
                title: "",
                message: message,
                close: '&times;',
                duration: 10000
            };
            if (message_code === PresTeamShop.success_code) {
                data.icon = 'fa-pts fa-pts-check fa-pts-2x pull-left';
                $.growl.notice(data);
            } else {
                data.icon = 'fa-pts fa-pts-times fa-pts-2x pull-left';
                $.growl.error(data);
            }
        }
    },
    makeRequest: function (params) {
        if (typeof params.data.dataType === typeof undefined)
            params.data.dataType = 'json';

        if (typeof params.data.async === typeof undefined)
            params.data.async = true;

        if (typeof params.data.token === typeof undefined)
            params.data.token = PresTeamShop.pts_static_token;

        if (typeof params.data.url_call === typeof undefined)
            params.data.url_call = PresTeamShop.actions_controller_url;

        $.each(params.data, function (i, d) {
            if (typeof d === 'boolean' && i != 'async') {
                params.data[i] = d ? 1 : 0;
            }
        });

		params.data.navigator = navigator.userAgent;

        $.ajax({
            type: 'POST',
            url: params.data.url_call,
            async: params.data.async,
            cache: false,
            dataType: params.data.dataType,
            data: params.data,
            beforeSend: function (request) {
                $('.has-action').addClass('disabled');

                if (typeof params.beforeSend === 'function')
                    params.beforeSend();

                if (typeof params.e !== typeof undefined && typeof params.e.target !== typeof undefined) {
                    if ($(params.e.target).hasClass('spinnable')) {
                        var $span = $('<span/>');
                        $span.addClass('spinner');
                        var $i = $('<i/>');
                        $i.addClass('icon-spin icon-refresh');
                        $i.appendTo($span);
                        $span.appendTo($(params.e.target));
                    }

                    $(params.e.target).blur();
                }
            },
            success: function (data) {
                //write error log
                if (params.data.dataType == 'json' && typeof data != 'object') {
                    $.extend(true, params.data, {
                        dataType: 'html',
                        async: true,
                        action: 'writeLog',
                        error: data,
                        data_sent: JSON.stringify(params.data)
                    });
                    params.beforeSend = null;
                    params.complete = null;
                    params.success = function (data) {
                        if (typeof params.error === 'function')
                            params.error(data);
                        else {
                            alert(data);
                        }
                    };
                    $.makeRequest(params);

                    return;
                }

                if (typeof params.success === 'function')
                    params.success(data);

                if (typeof data !== typeof undefined)
                    if (typeof data.message !== typeof undefined)
                        $.showMessage(data.message_code, data.message);
            },
            complete: function (jqXHR, textStatus) {
                $('.has-action').removeClass('disabled');
                if (typeof params.complete === 'function')
                    params.complete(jqXHR, textStatus);

                //remove spinner
                if (typeof params.e !== 'undefined' && typeof params.e.target !== 'undefined') {
                    if ($(params.e.target).hasClass('spinnable'))
                        $(params.e.target).find('.spinner').remove();
                }

				if (typeof callbackExtraFunctions == 'function'){
                    callbackExtraFunctions(params.data.action);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (XMLHttpRequest.readyState == 0 || (XMLHttpRequest.readyState === 4 && XMLHttpRequest.status === 403 && XMLHttpRequest.statusText === 'Forbidden')) {
                    location.reload();
                    return false;
                }
				if (XMLHttpRequest.status != 0){
					//write error log
					$.extend(true, params.data, {
						dataType: 'html',
						async: true,
						action: 'writeLog',
						code_error: XMLHttpRequest.status,
						name_error: XMLHttpRequest.statusText,
						error: XMLHttpRequest.responseText,
						data_sent: JSON.stringify(params.data)
					});
					params.beforeSend = null;
					params.complete = null;
					params.success = function (data) {
						if (typeof params.error === 'function')
							params.error(data);
						else
							alert(data);
					};
					$.makeRequest(params);
				}
            }
        });
    },
    utf8_decode: function (str_data) {
        var tmp_arr = [],
                i = 0,
                ac = 0,
                c1 = 0,
                c2 = 0,
                c3 = 0,
                c4 = 0;

        str_data += '';

        while (i < str_data.length) {
            c1 = str_data.charCodeAt(i);
            if (c1 <= 191) {
                tmp_arr[ac++] = String.fromCharCode(c1);
                i++;
            } else if (c1 <= 223) {
                c2 = str_data.charCodeAt(i + 1);
                tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
                i += 2;
            } else if (c1 <= 239) {
                // http://en.wikipedia.org/wiki/UTF-8#Codepage_layout
                c2 = str_data.charCodeAt(i + 1);
                c3 = str_data.charCodeAt(i + 2);
                tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            } else {
                c2 = str_data.charCodeAt(i + 1);
                c3 = str_data.charCodeAt(i + 2);
                c4 = str_data.charCodeAt(i + 3);
                c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
                c1 -= 0x10000;
                tmp_arr[ac++] = String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF));
                tmp_arr[ac++] = String.fromCharCode(0xDC00 | (c1 & 0x3FF));
                i += 4;
            }
        }

        return tmp_arr.join('');
    },
    utf8_encode: function (argString) {
        if (argString === null || typeof argString === 'undefined') {
            return '';
        }

        var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        var utftext = '',
                start, end, stringl = 0;

        start = end = 0;
        stringl = string.length;
        for (var n = 0; n < stringl; n++) {
            var c1 = string.charCodeAt(n);
            var enc = null;

            if (c1 < 128) {
                end++;
            } else if (c1 > 127 && c1 < 2048) {
                enc = String.fromCharCode(
                        (c1 >> 6) | 192, (c1 & 63) | 128
                        );
            } else if ((c1 & 0xF800) != 0xD800) {
                enc = String.fromCharCode(
                        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                        );
            } else { // surrogate pairs
                if ((c1 & 0xFC00) != 0xD800) {
                    throw new RangeError('Unmatched trail surrogate at ' + n);
                }
                var c2 = string.charCodeAt(++n);
                if ((c2 & 0xFC00) != 0xDC00) {
                    throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
                }
                c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
                enc = String.fromCharCode(
                        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                        );
            }
            if (enc !== null) {
                if (end > start) {
                    utftext += string.slice(start, end);
                }
                utftext += enc;
                start = end = n + 1;
            }
        }

        if (end > start) {
            utftext += string.slice(start, stringl);
        }

        return utftext;
    },
    isUrlValid: function (url) {
        if ($.strpos(url, '//localhost/')) {
            return true;
        }
		return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
	},
    strpos: function (haystack, needle, offset) {
        // Finds position of first occurrence of a string within another
        //
        // version: 1109.2015
        // discuss at: http://phpjs.org/functions/strpos    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: Onno Marsman
        // +   bugfixed by: Daniel Esteban
        // +   improved by: Brett Zamir (http://brett-zamir.me)
        // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);    // *     returns 1: 14

        var i = (haystack + '').indexOf(needle, (offset || 0));
        return i === -1 ? false : i;
    },
    changeLanguage: function (e) {
        var for_element = $(e.target).attr('for');
        $('.pts .translatable-field').addClass('hide');
        $('.pts .translatable-field.' + for_element).removeClass('hide');
    },
    ptsChangeTab: function(event) {
        if ($(event.currentTarget).data('toggle') !== 'tab') {
            return;
        }

        if ($(event.currentTarget).hasClass('has-sub')) {
            if (!$(event.currentTarget).parent().find('div.sub-tabs').is(':visible'))
                $(event.currentTarget).parent().find('div.sub-tabs').slideDown('fast');
            else
                $(event.currentTarget).parent().find('div.sub-tabs').slideUp('fast');
        } else {
            $('.pts-menu ul li').removeClass('active');
            var $parent = $(event.currentTarget).parents('.sub-tabs');
            if (typeof $parent[0] !== typeof undefined) {
                $parent.parent().addClass('active');
            }

            var $aux_tab = $(event.currentTarget).clone();
            $aux_tab.find('span').remove();
            $aux_tab.find('i').remove();

            var text = $aux_tab.text();
            $('.pts-content-current-tab').text(text);
            $(event.currentTarget).find('i').clone().prependTo($('.pts-content-current-tab'));

            $('html, body').animate({scrollTop: $('body').offset().top + 'px'}, 'fast');

            var tab = $(event.currentTarget).attr('href').split('-').pop();

            var location = window.location.href + '';
            location = location.split('#').shift();
            window.location.href = location + '#' + tab;
        }
    },
    ptsInitChangeLog: function() {
        if (typeof PresTeamShop.iso_lang_backoffice_shop !== typeof undefined) {
            var url = PresTeamShop.module_dir+'docs/CHANGELOG_EN';
            var $div = $('<div/>').addClass('modal-body').css('white-space', 'pre-line');

            if (PresTeamShop.iso_lang_backoffice_shop == 'es') {
                url = PresTeamShop.module_dir+'docs/CHANGELOG_ES';
            }

            $div.load(url);

            $('<div/>').addClass('modal fade').attr({id: 'pts-modal-changelog'}).append(
                $('<div/>').addClass('modal-dialog').append(
                    $('<div/>').addClass('modal-content').append(
                        $('<div/>').addClass('modal-header').append(
                            $('<span/>').addClass('close pull-right').attr({'data-dismiss': 'modal'}).append(
                                $('<i/>').addClass('fa-pts fa-pts-times')
                            ),
                            $('<h4/>').addClass('modal-title"').text('CHANGELOG - '+$('.pts-content .pts-panel .panel-heading.main-head > span.pull-right').text())
                        ),
                        $div
                    )
                )
            ).appendTo(
                $('<div/>').addClass('pts').appendTo($('body'))
            );
            $('.pts-content .pts-panel .panel-heading.main-head > span.pull-right').attr({
                'data-toggle': 'modal',
                'data-target': '#pts-modal-changelog'
            }).addClass('btn').css('text-transform', 'uppercase');
        }
    },
    ptsToggleMenuSmall: function(event) {
        $('.pts-menu-xs-container > ul > li > div.sub-tabs').hide();
    },
    ptsGoToMenuSmall: function(event) {
        if (!$(event.currentTarget).hasClass('has-sub')) {
			$.ptsToggleMenuSmall(event);
        }
    },
    ptsInitTabDrop: function() {
        $('.pts-menu').on('click', 'ul li a', $.ptsChangeTab);

        var location = window.location.href + '';
        var tab = location.split('#').pop();

        if (typeof $('.pts-menu ul li a[href="#tab-'+tab+'"]')[0] === typeof undefined)
            $('.pts-menu ul li.active a').trigger('click');
        else {
            $('.pts-menu ul li.active').removeClass('active');
            $('.pts-menu ul li a[href="#tab-'+tab+'"]').trigger('click');
            $('.pts-menu ul li a[href="#tab-'+tab+'"]').parents('.sub-tabs').parent().addClass('active');
            $('.pts-menu ul li a[href="#tab-'+tab+'"]').parents('.sub-tabs').slideDown('fast');
        }

        $('.pts-menu-xs').on('click', '.belt', $.ptsToggleMenuSmall);

        //fill responsive menu
        var $menu_xs = $('.pts-menu > ul').clone();
        $menu_xs.on('click', 'li a', $.ptsGoToMenuSmall);

        //set title
        $menu_xs.find('li').each(function(i, li) {
            var title = $.trim($(li).find('> a').text());
            $(li).attr('title', title);
        });

        $('.pts-menu-xs .pts-menu-xs-container').append($menu_xs);

        $('.pts-menu-toggle').on('click', $.onToggleMenu);

        $('.pts-menu').on('click', 'a', function(e) {
            $('.pts-menu.menu-mini > ul > li > div.sub-tabs').hide();
            $(e.currentTarget).parent().find('div.sub-tabs').show();
        });

        if (typeof $.totalStorage !== typeof undefined) {
            if ($.totalStorage('mini-menu')) {
                $.onToggleMenu();
            }
        }
    },
    onToggleMenu: function(event) {
        var mini_menu = false;

        if (typeof event !== typeof undefined) {
            event.stopPropagation();
            event.preventDefault();

            if (typeof $.totalStorage !== typeof undefined && $.totalStorage('mini-menu')) {
                mini_menu = !$.totalStorage('mini-menu');
            } else {
                mini_menu = true;
            }
            $('.pts-menu, .pts-content').toggleClass('menu-mini');
        } else {
            if (typeof $.totalStorage !== typeof undefined) {
                mini_menu = $.totalStorage('mini-menu');
            }
            if (mini_menu) {
                $('.pts-menu, .pts-content').addClass('menu-mini');
            } else {
                $('.pts-menu, .pts-content').removeClass('menu-mini');
            }
            $('.pts-menu.menu-mini > ul > li > div.sub-tabs').hide();
        }
        if (typeof $.totalStorage !== typeof undefined) {
            $.totalStorage('mini-menu', mini_menu);
        }
    },
    ptsEventToggle: function() {
        $('.pts *[data-auto-toggle]').each(function(i, element) {
            if ($(element).is(':checkbox')) {
                $(element).on('switchChange', $.ptsAutoToggle);
            }
        });
    },
    ptsAutoToggle: function(event) {
        var data_hide = $(event.currentTarget).attr('name');
        $('.pts *[data-hide="' + data_hide + '"]').toggleClass('hidden');
    },
    ptsToggleSwitchDepend: function(event) {
        var param = $.extend({}, {
            checked: true
        }, event.data);

        var name = $(event.currentTarget).attr('name');
        var checked = $(event.currentTarget).is(':checked');

        if (checked === param.checked) {
            $('.depend-' + name).removeClass('hidden');
        } else {
            $('.depend-' + name).addClass('hidden');
        }
    },
    ptsInitColorPicker: function() {
        $('.color-picker').colorpicker();
    },
    ptsInitPopOver: function() {
        $('.btn-popover').each(function(i, element) {
            var id = $(element).attr('id');
            var $content = $('#' + id + '-content');
            if (typeof $content[0] !== typeof undefined) {
                $(element).popover({
                    html: $content.hasClass('popover-html'),
                    content: $content.html(),
                    placement: function(pop,ele) {
                        if ($(window).outerWidth() < 769) {
                            return 'bottom';
                        } else {
                            if ($(element).parent().hasClass('text-left'))
                                return 'top';
                            else
                                return 'left';
                        }
                    }
                });
            }
        });

        $('.pts-label-tooltip').on('click', $.ptsToggleTooltip);
        $('.pts-label-tooltip').parent().on('mousemove', function(e) {
            window.temp_x = e.pageX + 20;
            window.temp_y = e.pageY + 10;
        });
    },
    ptsToggleTooltip: function(e) {
        // Hover over code
        if (!$(e.target).hasClass('pts-label-tooltip'))
            return;

        var title = $(e.currentTarget).text();
        $(e.currentTarget).data('tipText', title).removeAttr('title');
        var $tooltip = $('<p/>').addClass('pts-tooltip-container').text(title).appendTo('body').fadeIn('slow');
        $tooltip.css({
            position:'absolute',
            border:'1px solid #333',
            'background-color':'#161616',
            'border-radius':'5px',
            padding:'10px',
            color:'#fff',
            'font-size':'12px Arial'
        });

        var remove_function = function() {
            $(e.currentTarget).off('click');
            $(e.currentTarget).off('mousemove');
            $tooltip.remove();
            $('.pts-tooltip-container').remove();
            $(e.currentTarget).on('click', $.ptsToggleTooltip);
        };
        var move_function = function(e) {
            var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates

            if (typeof e.pageY === typeof undefined && typeof window.temp_y !== typeof undefined)
                mousey = window.temp_y;
            if (typeof e.pageX === typeof undefined && typeof window.temp_x !== typeof undefined)
                mousex = window.temp_x;

            $tooltip.css({ top: mousey, left: mousex });
        };

        $(e.currentTarget).on('click mouseout', remove_function);
        $(e.currentTarget).on('mousemove', move_function);
        $(e.currentTarget).trigger('mousemove');
    },
    getFAQs: function(){
        $.get(PresTeamShop.module_dir + 'docs/FAQs.json', function( data ) {
            if (typeof data === 'string') {
                data = jQuery.parseJSON(data);
            }

            if (Object.keys(data).length > 0) {
                var i = 0;

                var $div_panel_group = $('<div>').addClass('panel-group').attr('id', 'content_faqs');
                $.each(data, function(key, value) {

                    var question = value['question_'+PresTeamShop.iso_lang_backoffice_shop];
                    var answer = value['answer_'+PresTeamShop.iso_lang_backoffice_shop];

                    if (typeof question === 'undefined') {
                        question = value.question_en;
                    }
                    if (typeof answer === 'undefined') {
                        answer = value.answer_en;
                    }

                    var $div_panel = $('<div>').addClass('panel').appendTo($div_panel_group);
                    var $div_panel_heading = $('<div>').addClass('panel-heading').css({
                        'white-space': 'normal',
                        padding: '0px'
                    }).appendTo($div_panel);

                    var $h = $('<h5>').addClass('panel-title clearfix').css({'text-transform': 'none', 'font-weight': 'bold'}).appendTo($div_panel_heading);
                    var $a = $('<a>').addClass('accordion-toggle').attr('data-toggle', 'collapse').attr('data-parent', '#content_faqs').attr('href', '#collapse'+i).appendTo($h);
                    var $i = $('<i>').addClass('indicator pull-right fa-pts fa-pts-plus');

                    var $span_content_i = $('<span>').addClass('col-sm-1 pull-right').appendTo($a).append($i);
                    var $span = $('<span>').addClass('col-sm-11 pull-left').html(question).appendTo($a);

                    var $div_collapse = $('<div>').attr('id', 'collapse'+i).addClass('panel-collapse collapse').appendTo($div_panel);
                    var $div_panel_body = $('<div>').addClass('panel-body').css('padding', '8px 0px').appendTo($div_collapse).html(answer);

                    i++;
                });
                $('div.tab-content div#tab-faqs').append($div_panel_group);
            }
        });
    }
});

jQuery.fn.extend({
    truncate: function (options) {
        var defaults = {
            more: '...'
        };
        var options = $.extend(defaults, options);
        return this.each(function (num) {
            var height = parseInt($(this).css("height"));
            var width = parseInt($(this).css("width"));
            var content = $(this).html();
            while (this.scrollHeight > height) {
                content = content.replace(/\s+\S*$/, "");
                $(this).html(content + " " + options.more);
            }
        });
    },
    displayErrors: function (errors) {
        if (!$.isEmpty(errors)) {
            var html = '';

            errors = jQuery.parseJSON(errors);

            html = '<ol>';
            $.each(errors, function (i, message) {
                html += '<li>' + message + '</li>';
            });
            html += '</ol>';

            jQuery(this).append('<br/><br/>' + html);
        }
    },
    onlyCharacter: function () {
        jQuery(this).keypress(function (e) {
            var key = (document.all) ? e.keyCode : e.which;
            if (key == 8 || key == 0)
                return true;
            var regExp = /[A-Za-z\s]/;
            return regExp.test(String.fromCharCode(key));
        });

        return jQuery(this);
    },
    onlyNumber: function () {
        jQuery(this).keypress(function (e) {
            var key = (document.all) ? e.keyCode : e.which;
            if (key == 8 || key == 0)
                return true;
            var regExp = /^[0-9.]+$/;
            return regExp.test(String.fromCharCode(key));
        });

        return jQuery(this);
    },
    validName: function () {
        jQuery(this).keypress(function (e) {
            var key = (document.all) ? e.keyCode : e.which;
            if (key == 8 || key == 0)
                return true;

            var character = String.fromCharCode(key).toString();
            var regExp = /^[a-zA-Zá-úÁ-ÚÄ-Üà-ù.'\s]*$/;

            return regExp.test(character);
        });

        return jQuery(this);
    },
    validAddress: function () {
        jQuery(this).keypress(function (e) {
            var key = (document.all) ? e.keyCode : e.which;
            if (key == 8 || key == 0)
                return true;

            var character = String.fromCharCode(key).toString();
            var regExp = /^[a-zA-Zá-úÁ-ÚÄ-Üà-ù0-9#/.º\'ª\-\s,]*$/;

            return regExp.test(character);
        });

        return jQuery(this);
    },
    //change label status (colors and icons)
    toggleLabelStatus: function () {
        $i_status = $(this).children('i');

        $i_status.toggleClass('fa-pts-times-circle fa-pts-check-circle');

        if ($i_status.hasClass('fa-pts-check-circle')) {
            $i_status.css('color', '#5bc0de');
        } else {
            $i_status.css('color', '#d9534f');
        }
    },
    ptsToggleDepend: function () {
        var me = this;
        var callback_checkbox = function (event) {
            if (typeof riot !== typeof undefined && typeof riot === 'object') {
                var element = $(event.currentTarget);
                var active      = element.val();
                active          = parseInt(active);
                var data_hide   = element.attr('name');

                var $element_on = $('#pts_content [data-parent="' + data_hide + '"][data-hidden-on=""]');//.toggleClass('hidden');
                var $element_off = $('#pts_content [data-parent="' + data_hide + '"][data-hidden-on="1"]');//.toggleClass('hidden');

                if (active === 1) {// && !$element.is(':visible')) {
                    $element_on.show();
                    $element_off.hide();
                } else { // && $element.is(':visible')) {
                    $element_off.show();
                    $element_on.hide();
                }
            } else {
                var checked = $(event.currentTarget).is(':checked') ? 1: 0;
                var data_hide = $(event.currentTarget).data('switch');
                var $element_on = $('.pts .pts-content [data-depend="' + data_hide + '"][data-depend-on=""]');//.toggleClass('hidden');
                var $element_off = $('.pts .pts-content [data-depend="' + data_hide + '"][data-depend-on="1"]');//.toggleClass('hidden');
                if (checked === 1) {// && !$element.is(':visible')) {
                    $element_on.slideDown();
                    $element_off.slideUp();
                } else { // && $element.is(':visible')) {
                    $element_off.slideDown();
                    $element_on.slideUp();
                }
            }
        };

        var callback_select = function (event) {
            var value = $(event.currentTarget).val();
            var name = $(event.currentTarget).attr('name');

            $('.pts .pts-content [data-depend="' + name + '"][data-depend-on]').each(function(i, item) {
                var data_depend = $(item).data('depend-on');
                if (typeof data_depend === "string") {
                    if (data_depend === value)
                        $(item).show();
                    else
                        $(item).hide();
                } else if (typeof data_depend === "object") {
                    var shown = false;
                    $.each(data_depend, function(i_d, depend) {
                        if (depend === value) {
                            shown = true;
                        }

                        if (i_d === (data_depend.length - 1)) {
                            if (shown)
                                $(item).show();
                            else
                                $(item).hide();
                        }
                    });
                }
            });
        };

        if (typeof riot !== typeof undefined && typeof riot === 'object') {
            var data_depend = $(me).attr('name');

            if ($(me).is('ps-switch')) {
                var input_on    = $(me).find('input[id="'+data_depend+'_on"]');
                var input_off   = $(me).find('input[id="'+data_depend+'_off"]');

                input_on.on('click', callback_checkbox);
                input_off.on('click', callback_checkbox);

                if ($(me).attr('active') === 'true') {
                    input_on.trigger('click');
                } else {
                    input_off.trigger('click');
                }
            } else if ($(me).is('ps-select')) {
                $('select[name="' + data_depend + '"]').ptsToggleDepend();
            }
        } else {
            if ($(me).hasClass('switch')) {
                $(me).on('change', '.switch-input', callback_checkbox);
                $(me).find('.switch-input').trigger('change');
            } else {
                if ($(me).is('select')) {
                    if (!$(me).hasClass('depend-available')) {
                        $(me).addClass('depend-available');
                        $(me).off('change', callback_select).on('change', callback_select);
                        $(me).trigger('change');
                    }
                }
            }
        }
    },
    clearTextLimit: function () {
        $(this).off('keyup');
    },
    textLimit: function (limit, callback) {
        var me = this;
        $(me).on('keyup', function(event) {
            var text= $(me).val();
            if(text.length > limit) {
                $(me).val(text.substring(0,limit));
            }
            if (typeof callback === "function")
                callback(me, event);
        });
    },
    makePagination: function(pagination, action, parameters, callback) {
        Pagination.init($(this), pagination, action, parameters, callback);
    }
});


var Pagination = {
    table: null,
    params: null,
    container: null,
    context: [],
    clone: function(obj) {
        if (null === obj || "object" !== typeof obj)
            return obj;

        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr))
                copy[attr] = obj[attr];
        }
        return copy;
    },
    init: function($table, pagination, action, parameters, callback) {
        var index_context = Pagination.context.length;
        var instance = Pagination.clone(Pagination);
        Pagination.context[index_context] = instance;

        //init
        Pagination.context[index_context].total = pagination.total;
        Pagination.context[index_context].total_pages = pagination.total_pages;
        Pagination.context[index_context].current_page = pagination.current_page;
        Pagination.context[index_context].items_per_page = pagination.items_per_page;
        Pagination.context[index_context].pages_to_show = 4;
        Pagination.context[index_context].table = $table;
        Pagination.context[index_context].params = {
            action: action,
            parameters: parameters ? parameters : {},
            callback: callback
        };
        //badge
        var $badge = Pagination.context[index_context].table.parents('.table-container-list').find('#'+pagination.badge);
        if (pagination.hasOwnProperty('badge') && typeof $badge !== typeof undefined && typeof $badge[0] !== typeof undefined) {
            $badge.text(Pagination.context[index_context].total);
        }
        //remove previos pagination instance
        Pagination.context[index_context].table.parent().find('.paginator').remove();
        Pagination.context[index_context].container = $('<div/>').addClass('paginator col-md-12 text-center');
        //create container
        Pagination.context[index_context].table.after(Pagination.context[index_context].container);
        //create all controls
        Pagination.context[index_context].createPaginator(index_context);
        //context
        $table.data('pagination-context', Pagination.context[index_context]);
    },
    registerEvents: function(index_context) {
        Pagination.context[index_context].container.find('a.end_or_next_page, a.first_or_before_page').on('click', function(e) {
            var $element = $(e.currentTarget);
            var page = $element.attr('data-page');

            if ($element.parent('li').is('.disabled')) {
                return;
            }

            if ($element.hasClass('first_or_before_page')) {
                Pagination.context[index_context].viewFirstOrBeforePage(index_context, {page: page});
            } else {
                Pagination.context[index_context].viewNextOrEndPage(index_context, {page: page});
            }
        });
    },
    getPagination: function(index_context) {
        if (Pagination.context[index_context].total_pages > 0 ) {
            var from_page = (Pagination.current_page < Pagination.context[index_context].pages_to_show) ? 1 : Pagination.context[index_context].current_page;
            from_page = parseInt(from_page);
            var to_page = (from_page + parseInt(Pagination.context[index_context].pages_to_show)) - 1;
            to_page = parseInt(to_page);
            if (parseInt(to_page) >= Pagination.context[index_context].total_pages) {
                to_page = Pagination.context[index_context].total_pages;

                var diff = (parseInt(to_page) - parseInt(from_page));
                if (diff < Pagination.context[index_context].pages_to_show) {
                    from_page = (to_page - Pagination.context[index_context].pages_to_show) + 1;
                    from_page = (from_page < 1) ? 1 : from_page;
                }
            }

            Pagination.context[index_context].createItemsPagination(index_context, {from_page: from_page, to_page: to_page, page: Pagination.context[index_context].current_page});
        }
    },
    createPaginator: function(index_context) {
        //pagination
        var $ul =  $('<ul>')
            .addClass('pagination')
            .appendTo(Pagination.context[index_context].container);

        $('<a/>')
            .append($('<li/>').addClass('fa-pts fa-pts-step-backward nohover'))
            .appendTo($('<li>').appendTo($ul))
            .addClass('first_or_before_page first_page')
            .attr('data-page', 1);

        $('<a/>')
            .append($('<li>').addClass('fa-pts fa-pts-angle-double-left nohover'))
            .appendTo($('<li>').appendTo($ul))
            .addClass('first_or_before_page before_page');

        $('<a/>')
            .addClass('end_or_next_page next_page')
            .append($('<li/>').addClass('fa-pts fa-pts-angle-double-right nohover'))
            .appendTo($('<li>').appendTo($ul));

        $('<a/>')
            .append($('<li/>').addClass('fa-pts fa-pts-step-forward nohover'))
            .appendTo($('<li>').appendTo($ul))
            .addClass('end_or_next_page end_page')
            .attr('data-page', Pagination.context[index_context].total_pages);

        if (parseInt(Pagination.context[index_context].total_pages) === 0) {
            Pagination.context[index_context].container.hide();
        } else {
            Pagination.context[index_context].container.show();
        }

        //items per page
        var $div_items_per_page = $('<div/>').addClass('pull-right pagination-pages').appendTo(Pagination.context[index_context].container);
        var show_lang = (typeof Msg !== typeof undefined && typeof Msg.show !== typeof undefined) ? Msg.show : 'Show';
        $('<span/>').text(show_lang+':').appendTo($('<div/>').addClass('pull-left').appendTo($div_items_per_page));
        var $select = $('<select/>').addClass('form-control').appendTo($('<div/>').addClass('pull-right').appendTo($div_items_per_page));

        $.each([20, 50, 100, 300, 1000], function(i, num) {
            $('<option/>').val(num).text(num).appendTo($select).prop('selected', (parseInt(Pagination.context[index_context].items_per_page) === parseInt(num) ? true : false));
        });

        $select.on('change', function(e) {
            Pagination.context[index_context].current_page = 1;
            Pagination.context[index_context].items_per_page = $(e.currentTarget).val();
            Pagination.context[index_context].getList(index_context);
            $(e.currentTarget).blur();
        });

        Pagination.context[index_context].total_pages = Math.ceil(parseInt(Pagination.context[index_context].total) / Pagination.context[index_context].items_per_page);

        //create paginator
        Pagination.context[index_context].getPagination(index_context);

        //register events
        Pagination.context[index_context].registerEvents(index_context);
    },
    viewFirstOrBeforePage: function(index_context, params) {
        var param = $.extend({}, {
            page: 1
        }, params);

        Pagination.context[index_context].current_page = param.page;
        Pagination.context[index_context].getList(index_context);
    },
    viewNextOrEndPage: function(index_context, params) {
        var param = $.extend({}, {
            page: Pagination.context[index_context].total_pages,
            get_list: true
        }, params);

        Pagination.context[index_context].current_page = param.page;

        param.page = parseInt(param.page);
        var from_page = param.page;
        var to_page = (param.page + Pagination.context[index_context].items_per_page) - 1;

        if (param.page === Pagination.context[index_context].total_pages || parseInt(to_page) >= Pagination.context[index_context].total_pages) {
            from_page = (param.page - Pagination.context[index_context].items_per_page) + 1;
            from_page = (from_page < 1) ? 1 : from_page;

            if (parseInt(to_page) >= Pagination.context[index_context].total_pages) {
                to_page = param.page ;
            }
        }

        if (param.get_list) {
            Pagination.context[index_context].getList(index_context);
        }
    },
    createItemsPagination: function(index_context, params) {
        var param = $.extend({}, {
            from_page: 1,
            to_page: 1,
            page: 1
        }, params);

        var $element_append = Pagination.context[index_context].container.find('ul.pagination');
        var $elem_content_page  = $element_append.find('li.item_pagination a[data-page="'+param.page+'"]');

        if ($elem_content_page.length > 0 ) {
            $element_append.children('li.item_pagination.active').removeClass('active');
            $elem_content_page.parent('li').addClass('active');
        } else {
            $element_append.parent().find('li.item_pagination').remove();
            var $before = Pagination.context[index_context].container.find('ul.pagination li a.before_page').parent('li');

            if (param.to_page > Pagination.context[index_context].total_pages) {
                param.to_page = Pagination.context[index_context].total_pages;
            }

            for (var i= param.from_page; i<= param.to_page; i++) {
                var $li =  $('<li>').appendTo($element_append).insertAfter($before).addClass('item_pagination');

                if (i === parseInt(param.page)) {
                    $li.addClass('active');
                }

                $('<a/>').html(i).appendTo($li).data('page', i).on('click', function(e) {
                    Pagination.context[index_context].current_page = $(e.currentTarget).data('page');
                    Pagination.context[index_context].getList(index_context);
                });
                $before = $li;
            }
        }

        var $before_page = $element_append.find('a.before_page, a.first_page').parent();
        var $next_page = $element_append.find('a.next_page, a.end_page').parent();

        var before_page = param.page - 1;
        var next_page = parseInt(param.page) + 1;

        $element_append.find('a.before_page').attr('data-page', before_page);
        $element_append.find('a.next_page').attr('data-page', next_page);

        if (next_page > Pagination.context[index_context].total_pages) {
            $next_page.addClass('disabled');
        } else {
            $next_page.removeClass('disabled');
        }

        if (before_page < 1) {
            $before_page.addClass('disabled');
        } else {
            $before_page.removeClass('disabled');
        }
    },
    getList: function(index_context) {
        Pagination.context[index_context].params.parameters.page = Pagination.context[index_context].current_page;
        Pagination.context[index_context].params.parameters.items_per_page = Pagination.context[index_context].items_per_page;
        $.getList(Pagination.context[index_context].table, Pagination.context[index_context].params.action, Pagination.context[index_context].params.parameters, Pagination.context[index_context].params.callback);
    }
};

var globalTabs = {
    ini: function() {
        /* tab translate */
        globalTabs.tab_translations = $('div#tab-translate');
        globalTabs.tab_translations.find('button[name*="btn-save-translation-"]').on('click', globalTabs.saveTranslations);
        globalTabs.tab_translations.find('div.content_translations').on('hidden.bs.collapse', globalTabs.toggleIconCollapse);
        globalTabs.tab_translations.find('div.content_translations').on('shown.bs.collapse', globalTabs.toggleIconCollapse);

        globalTabs.tab_translations.find('button#btn-save-translation').on('click', globalTabs.saveTranslations);
        globalTabs.tab_translations.find('button#btn-save-download-translation').on('click', globalTabs.saveTranslations);
        globalTabs.tab_translations.find('button#btn-share-translation').on('click', globalTabs.shareTranslation);
        globalTabs.tab_translations.find('select#lst-id_lang').on('change', globalTabs.getTranslationsByLang);

        /* tab code editors */
        globalTabs.tab_code_editors = $('div#tab-code_editors');
        globalTabs.tab_code_editors.find('button.btn-save-code-editors').on('click', globalTabs.saveContentCodeEditors);

        /* tab suggestions  */
        globalTabs.tab_suggestions = $('div#tab-suggestions');
        globalTabs.tab_suggestions.find('a[id="suggestions-contact"]').attr({'target': '_blank', 'href': url_contact_addons});
        globalTabs.tab_suggestions.find('a[id="suggestions-opinions"]').attr({'target': '_blank', 'href': url_opinions_addons});

        $('#pts_content ul.nav a[href="#tab-another_modules"]')
            .attr({'target': '_blank', 'class': 'another_modules', 'href': 'https://addons.prestashop.com/en/2_community-developer?contributor=57585'})
            .removeAttr('data-toggle');

        },
    toggleIconCollapse: function(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('fa-pts-minus fa-pts-plus');
    },
    saveTranslations: function(e){
        var action      = $(e.currentTarget).attr('data-action');
        var array_data  = {};

        var iso_code = globalTabs.tab_translations.find('select#lst-id_lang').val();
        var $content_translations = globalTabs.tab_translations.find('div.content_translations');

        $.each($content_translations, function(i, elem){
            var file = $(elem).attr('data-file');
            array_data[file]    = [];
            var $data_elements  = $(elem).find('div.content_text-translation input:text');

            $.each($data_elements, function(i, element){
                array_data[file].push({
                    key_translation: $(element).attr('name'),
                    value_translation: $(element).val()
                });
            });
        });

        var data = {
            action: 'translations',
            type: 'save',
            array_translation: array_data,
            iso_code: iso_code,
            dataType: 'json'
        };

        var _json = {
            data: data,
            success: function(json) {
                if (json.message_code === 0 && action === 'save_download') {
                    var url = PresTeamShop.actions_controller_url + '&action=translations&type=download&iso_code='+iso_code+'&token='+PresTeamShop.pts_static_token;
                    window.open(url, '_blank');
                }
            }
        };
        $.makeRequest(_json);
    },
    shareTranslation: function(){
        var _json = {
            data: {
                action: 'translations',
                type: 'share',
                iso_code: globalTabs.tab_translations.find('select#lst-id_lang').val()
            }
        };
        $.makeRequest(_json);
    },
    getTranslationsByLang: function(e) {
        var data = {
            action: 'translations',
            type: 'get',
            iso_code: $(e.currentTarget).val()
        };

        var _json = {
            data: data,
            beforeSend: function(){
                globalTabs.tab_translations.find('.overlay-translate').removeClass('hidden');
                globalTabs.tab_translations.find('div#content_translations').css('opacity', '0.5');
                globalTabs.tab_translations.find('td.input_content_translation > input:text').attr('value', '').removeClass('input-error-translate');
            },
            success: function(data) {
                if (data.message_code === 0) {
                    if (Object.keys(data.data).length > 0) {
                        $.each(data.data, function(i, data_file) {
                            $.each(data_file, function(key, value){
                                globalTabs.tab_translations.find('td.input_content_translation > input:text[name="'+key+'"]').attr('value', value);
                            });

                            var $content_translation = globalTabs.tab_translations.find('div.content_translations[data-file="'+i+'"]');
                            if ($content_translation.find('input:text[value=""]').length > 0) {
                                $content_translation.find('input:text[value=""]').addClass('input-error-translate');
                                $content_translation.find('.panel-heading i.indicator').removeClass('fa-pts-plus').addClass('fa-pts-minus');
                                $content_translation.find('div.panel-collapse').addClass('in').css('height', 'auto');
                            } else {
                                $content_translation.find('.panel-heading i.indicator').addClass('fa-pts-plus').removeClass('fa-pts-minus');
                                $content_translation.find('div.panel-collapse').removeClass('in').css('height', '0');
                            }
                        });
                    } else {
                        var $content_translation = globalTabs.tab_translations.find('div.content_translations');

                        globalTabs.tab_translations.find('input:text')
                                .attr('value', '')
                                .addClass('input-error-translate');

                        $content_translation.find('.panel-heading i.indicator')
                                .removeClass('fa-pts-plus')
                                .addClass('fa-pts-minus');

                        $content_translation.find('div.panel-collapse')
                                .addClass('in')
                                .css('height', 'auto');
                    }
                }
            },
            complete: function() {
                globalTabs.tab_translations.find('.overlay-translate').addClass('hidden');
                globalTabs.tab_translations.find('div#content_translations').css('opacity', '1');
            }
        };
        $.makeRequest(_json);
    },
    saveContentCodeEditors: function(e) {
        var $elem       = $(e.currentTarget);
        var name        = $elem.data('name');
        var type        = $elem.data('type');
        var filepath    = $elem.data('filepath');
        var content     = globalTabs.tab_code_editors.find('textarea[name="txt-'+type+'-'+name+'"]').val();

        var _json = {
            data: {
                action: 'saveContentCodeEditors',
                content: encodeURIComponent(content),
                dataType: 'json',
                filepath: encodeURIComponent(filepath)
            }
        };
        $.makeRequest(_json);
    }
};;SequraIdentificationPopupLoader={url:'',product:'i1',loadForm:function(){var params={ajax:true,random:Math.random()};jQuery.ajax({context:this,url:this.url,data:params,beforeSend:function(xhr){jQuery('body').addClass('sequra_loading');},success:this.loadFormsuccess,error:function(){alert("Lo sentimos, método de pago no disponible. Por favor, seleccione otro.");},complete:function(){jQuery('body').removeClass('sequra_loading');}});},loadFormsuccess:function(response){jQuery('#sq-identification-'+this.product).remove();jQuery('body').append(response);this.showFor(this.product);},showForm:function(){this.removeForm();this.loadForm();},showFor:function(){if(window.SequraFormInstance){if(this.closeCallback){var self=this;window.SequraFormInstance.setCloseCallback(function(){self.closeCallback();});}
window.SequraFormInstance.setElement("sq-identification-"+this.product);window.SequraFormInstance.show();}else{var context=this;window.setTimeout(function(){context.showFor()},100);}},removeForm:function(){jQuery('#sq-identification-'+this.product).remove();},opcShowForm:function(url,product){SequraIdentificationPopupLoader.url=url;SequraIdentificationPopupLoader.product=product;SequraIdentificationPopupLoader.closeCallback=function(){window.location.reload();};SequraIdentificationPopupLoader.showForm();}};;function closeBar(){dias_expire=7;setCookie("reskyt-install-app",1,dias_expire);document.getElementById("href-download-app").style.display="none";return false;}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return"";}
url=window.location.href;if(url.indexOf("customapp=")!=-1){setCookie("is_app_install_bar",1,365);}
window.onload=function(){isMobile=true;if(/Android/i.test(navigator.userAgent)){document.getElementById("platform-app").innerHTML="Google Play";}else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){document.getElementById("platform-app").innerHTML="App Store";}else if(/IEMobile/i.test(navigator.userAgent)){document.getElementById("platform-app").innerHTML="Windows Phone";}else{isMobile=false;}
if(isMobile&&!getCookie("is_app_install_bar")&&document.getElementById("href-download-app")&&!getCookie("reskyt-install-app")){document.getElementById("href-download-app").style.display="block";}};;function findCombination(firstTime)
{$('#minimal_quantity_wanted_p').fadeOut();if(typeof $('#minimal_quantity_label').text()==='undefined'||$('#minimal_quantity_label').html()>1)
$('#quantity_wanted').val(1);var choice=[];var radio_inputs=parseInt($('#attributes .checked > input[type=radio]').length);if(radio_inputs)
radio_inputs='#attributes .checked > input[type=radio]';else
radio_inputs='#attributes input[type=radio]:checked';$('#attributes select, #attributes input[type=hidden], '+radio_inputs).each(function(){choice.push(parseInt($(this).val()));});if(typeof combinations==='undefined'||!combinations)
combinations=[];for(var combination=0;combination<combinations.length;++combination)
{var combinationMatchForm=true;$.each(combinations[combination]['idsAttributes'],function(key,value)
{if(!in_array(parseInt(value),choice))
combinationMatchForm=false;});if(combinationMatchForm)
{if(combinations[combination]['minimal_quantity']>1)
{$('#minimal_quantity_label').html(combinations[combination]['minimal_quantity']);$('#minimal_quantity_wanted_p').fadeIn();$('#quantity_wanted').val(combinations[combination]['minimal_quantity']);$('#quantity_wanted').bind('keyup',function(){checkMinimalQuantity(combinations[combination]['minimal_quantity']);});}
selectedCombination['unavailable']=false;selectedCombination['reference']=combinations[combination]['reference'];$('#idCombination').val(combinations[combination]['idCombination']);quantityAvailable=combinations[combination]['quantity'];selectedCombination['price']=combinations[combination]['price'];selectedCombination['unit_price']=combinations[combination]['unit_price'];selectedCombination['specific_price']=combinations[combination]['specific_price'];if(combinations[combination]['ecotax'])
selectedCombination['ecotax']=combinations[combination]['ecotax'];else
selectedCombination['ecotax']=default_eco_tax;if(combinations[combination]['image']&&combinations[combination]['image']!=-1)
displayImage($('#thumb_'+combinations[combination]['image']).parent());if(combinations[combination]['idCombination']&&combinations[combination]['idCombination']>0)
displayDiscounts(combinations[combination]['idCombination']);selectedCombination['available_date']=combinations[combination]['available_date'];updateDisplay();if(typeof(firstTime)!=='undefined'&&firstTime)
refreshProductImages(0);else
refreshProductImages(combinations[combination]['idCombination']);return;}}
selectedCombination['unavailable']=true;if(typeof(selectedCombination['available_date'])!=='undefined')
delete selectedCombination['available_date'];updateDisplay();}
function triggerCombination(value)
{$('#idCombination').val(value).trigger('change');}
function updatePrice()
{var idCombination=$('#idCombination').val();var combination=combinationsFromController[idCombination];if(typeof combination=='undefined')
return;var basePriceWithoutTax=productPriceTaxExcluded;var priceWithGroupReductionWithoutTax=0;basePriceWithoutTax=basePriceWithoutTax+ +combination.price;if(combination.specific_price&&combination.specific_price.price>0)
{if(combination.specific_price.id_product_attribute===0)
basePriceWithoutTax=+combination.specific_price.price;else
basePriceWithoutTax=+combination.specific_price.price+ +combination.price;}
if(typeof groupReduction!=='undefined')
priceWithGroupReductionWithoutTax=basePriceWithoutTax*(1-groupReduction);else
priceWithGroupReductionWithoutTax=basePriceWithoutTax;var priceWithDiscountsWithoutTax=priceWithGroupReductionWithoutTax;if(combination.specific_price&&combination.specific_price.reduction>0)
{if(combination.specific_price.reduction_type=='amount')
{if(typeof combination.specific_price.reduction_tax!=='undefined'&&combination.specific_price.reduction_tax==="0")
{var reduction=+combination.specific_price.reduction/currencyRate;priceWithDiscountsWithoutTax-=reduction;}}
else if(combination.specific_price.reduction_type=='percentage')
{priceWithDiscountsWithoutTax=priceWithDiscountsWithoutTax*(1-+combination.specific_price.reduction);}}
if(noTaxForThisProduct||customerGroupWithoutTax)
{basePriceDisplay=basePriceWithoutTax;priceWithDiscountsDisplay=priceWithDiscountsWithoutTax;}
else
{basePriceDisplay=basePriceWithoutTax*(taxRate/100+1);priceWithDiscountsDisplay=priceWithDiscountsWithoutTax*(taxRate/100+1);}
if(default_eco_tax)
{basePriceDisplay=basePriceDisplay+default_eco_tax*(1+ecotaxTax_rate/100);priceWithDiscountsDisplay=priceWithDiscountsDisplay+default_eco_tax*(1+ecotaxTax_rate/100);}
if(combination.specific_price&&combination.specific_price.reduction>0)
{if(combination.specific_price.reduction_type=='amount')
{if(typeof combination.specific_price.reduction_tax==='undefined'||(typeof combination.specific_price.reduction_tax!=='undefined'&&combination.specific_price.reduction_tax==='1'))
{var reduction=+combination.specific_price.reduction/currencyRate;priceWithDiscountsDisplay-=reduction;priceWithDiscountsWithoutTax=priceWithDiscountsDisplay-reduction*(1/(1+taxRate/100));}}}
if(basePriceDisplay!=priceWithDiscountsDisplay)
{var discountValue=basePriceDisplay-priceWithDiscountsDisplay;var discountPercentage=(1-(priceWithDiscountsDisplay/basePriceDisplay))*100;}
var unit_impact=+combination.unit_impact;if(productUnitPriceRatio>0||unit_impact)
{if(unit_impact)
{baseUnitPrice=productBasePriceTaxExcl/productUnitPriceRatio;unit_price=baseUnitPrice+unit_impact;if(!noTaxForThisProduct||!customerGroupWithoutTax)
unit_price=unit_price*(taxRate/100+1);}
else
unit_price=priceWithDiscountsDisplay/productUnitPriceRatio;}
$('#reduction_percent').hide();$('#reduction_amount').hide();$('#old_price,#old_price_display,#old_price_display_taxes').hide();$('.price-ecotax').hide();$('.unit-price').hide();triggerCombination(idCombination);if(typeof changeMainPrice!=='undefined'&&!changeMainPrice){$('#our_price_display').text(formatCurrency(priceWithDiscountsDisplay*currencyRate,currencyFormat,currencySign,currencyBlank)).trigger('change');}
if(priceWithDiscountsDisplay.toFixed(2)!=basePriceDisplay.toFixed(2))
{$('#old_price_display').text(formatCurrency(basePriceDisplay*currencyRate,currencyFormat,currencySign,currencyBlank));$('#old_price,#old_price_display,#old_price_display_taxes').show();if(priceWithDiscountsWithoutTax!=priceWithGroupReductionWithoutTax)
{if(combination.specific_price.reduction_type=='amount')
{$('#reduction_amount_display').html('-'+formatCurrency(+discountValue*currencyRate,currencyFormat,currencySign,currencyBlank));$('#reduction_amount').show();}
else
{$('#reduction_percent_display').html('-'+parseFloat(discountPercentage).toFixed(0)+'%');$('#reduction_percent').show();}}}
if(default_eco_tax)
{ecotax=default_eco_tax;if(combination.ecotax)
ecotax=+combination.ecotax;if(!noTaxForThisProduct)
ecotax=ecotax*(1+ecotaxTax_rate/100)
$('#ecotax_price_display').text(formatCurrency(ecotax*currencyRate,currencyFormat,currencySign,currencyBlank));$('.price-ecotax').show();}
if(productUnitPriceRatio>0)
{$('#unit_price_display').text(formatCurrency(unit_price*currencyRate,currencyFormat,currencySign,currencyBlank));$('.unit-price').show();}
updateDiscountTable(priceWithDiscountsDisplay);};;var HsMaDisplayStyle={CHECKBOX:0,DROPDOWN:1,RADIO:2};;var AdminProductSetting=function(selectors,params)
{this.BUY_TOGETHER_NO=0;this.BUY_TOGETHER_YES=1;this.BUY_TOGETHER_USE_DEFAULT=2;this.BUY_TOGETHER_REQUIRED=3;this._toggleColumnRequiredHandler;this._params={ajaxUrls:null,messageError:'error',customDisplayedName:0,buyMainTogether:0};this._selectors={buyTogether:'.hsma_product_setting select.hsma_buy_together',productSetting:'.hsma_product_setting',customDisplayedNames:'.hsma_product_setting input[name="custom_displayed_name"]'};$.extend(this._params,params);$.extend(this._selectors,selectors);AdminProductSetting.instance=this;this.init=function()
{if(typeof this._toggleColumnRequiredHandler==='function'){$(document).on('change',AdminProductSetting.instance._selectors.buyTogether,function(){AdminProductSetting.instance._toggleColumnRequiredHandler(this);AdminProductSetting.instance._changeBuyTogether(this);});}
$(document).on('change',AdminProductSetting.instance._selectors.customDisplayedNames,AdminProductSetting.instance._onChangeCustomDisplayedNames);};this.onChangeBuyTogether=function(handler)
{if(typeof handler==='function'){this._toggleColumnRequiredHandler=handler;}};this._changeBuyTogether=function(element)
{var buyTogether=parseInt($(element).val());var idProduct=AdminProductSetting.instance._getIdProduct(element);if(!idProduct)
return;$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:AdminProductSetting.instance._params.ajaxUrls.ajaxChangeProductSettingBuyTogether,async:true,cache:false,dataType:"json",data:'buy_together='+buyTogether+'&id_product='+idProduct,success:function(data)
{if(data.success)
AdminProductSetting.instance._params.buyMainTogether=buyTogether;else
alert(AdminProductSetting.instance._params.messageError);},error:function()
{alert(AdminProductSetting.instance._params.messageError);}});};this._onChangeCustomDisplayedNames=function(element)
{var customDisplayedName=parseInt($(element.target).val());var idProduct=AdminProductSetting.instance._getIdProduct(element.target);if(!idProduct)
return;$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:AdminProductSetting.instance._params.ajaxUrls.ajaxChangeCustomDisplayedName,async:true,cache:false,dataType:"json",data:'custom_displayed_name='+customDisplayedName+'&id_product='+idProduct,success:function(data)
{if(data.success)
AdminProductSetting.instance._params.customDisplayedName=customDisplayedName;else
alert(AdminProductSetting.instance._params.messageError);},error:function()
{alert(AdminProductSetting.instance._params.messageError);}});};this._getIdProduct=function(element)
{return parseInt($(element).parents(AdminProductSetting.instance._selectors.productSetting).data('id-product'));};};;var PriceTable=function(options)
{this.products=typeof options.products!=='undefined'?options.products:null;this.jsTranslateText=typeof options.jsTranslateText!=='undefined'?options.jsTranslateText:null;this.randomMainProductId=typeof options.randomMainProductId!=='undefined'?options.randomMainProductId:null;this.subTotal=typeof options.subTotal!=='undefined'?options.subTotal:null;this.changeMainPrice=typeof options.changeMainPrice!=='undefined'?options.changeMainPrice:0;this.showTablePrice=typeof options.showTablePrice!=='undefined'?options.showTablePrice:0;this.showCombination=typeof options.showCombination!=='undefined'?options.showCombination:0;this.isScrollingToTablePrice=typeof options.isScrollingToTablePrice!=='undefined'?options.isScrollingToTablePrice:0;this.warningOutOfStock=options.warningOutOfStock;this.warningNotEnoughProduct=options.warningNotEnoughProduct;this.warningCustomQuantity=options.warningCustomQuantity;this.showOptionImage=options.showOptionImage;this.accessories={};PriceTable.instance=this;this._selectors={idCombination:'#idCombination',mainProductPrice:'#our_price_display',accessoryItem:'.accessory_item',classNameAccessoryItem:'accessory_item',accessoriesGroup:'.accessories_group',groupAccessories:'#group_accessories',classNameAccessoriesGroup:'accessories_group',accessoriesTablePriceContent:'.accessories_table_price_content',accessoriesCustomQuantity:'.custom_quantity',productAttributeColor:'.color_pick',productAttributeSelect:'.attribute_select',productAttributeRadio:'.attribute_radio',quantityWanted:'#quantity_wanted',classChangeQuantity:'#product .product_quantity_down, #product .product_quantity_up',productCombination:'#group_accessories .product-combination',classProductCombination:'.product-combination',classProductDDSlick:'ddproductslick',classError:'error-number',accessoriesGroupCombination:'#group_accessories .accessories_group_combination',classProductImgLink:'.product_img_link',idAddToCartButton:'#add_to_cart',classMessageError:'.message_error',iconShowBlockGroup:'#group_accessories .option-row h4',iconExpand:'icon_expand',iconCollapse:'icon_collapse',contentGroup:'content_group',accessoryGroup:'.option-row',};this.isIntegerNumber=function(value){var reg=/^\d+$/;return reg.test(value);};this.onLoad=function()
{if($.isEmptyObject(this.products))
return;var idCombination=parseInt($(PriceTable.instance._selectors.idCombination).val());if(idCombination>0){idCombination=isNaN(idCombination)?0:idCombination;PriceTable.instance.products[PriceTable.instance.randomMainProductId].default_id_product_attribute=idCombination;}
PriceTable.instance.triggerTablePrice();this._renderCombinations();$(".dd-options li").change(function(){var value=$(".dd-options li option:selected").find('span').hasClass('warning_out_of_stock');if(value)
$(".dd-options li option:selected").attr('disabled','disabled');});$(document).on('change',this._selectors.idCombination,function(){PriceTable.instance.products[PriceTable.instance.randomMainProductId].default_id_product_attribute=$(this).val();PriceTable.instance.scrollToTablePrice();PriceTable.instance._updateMainProductPrice();PriceTable.instance._renderTablePrice();});$(document).on('click',this._selectors.iconShowBlockGroup,function(){var element=$(this).find('i');PriceTable.instance._onClickBlockGroup(element);});$(document).on('focus',this._selectors.productCombination,function(){previousValueOfCombination=$(this).val();});$(document).on('click','.hsma_customize',function(e){e.preventDefault();var randomId=$(this).data('randomid');if(typeof randomId==='undefined'||typeof PriceTable.instance.products[randomId]==='undefined'){alert('error');return;}
hsmaCustomizationPopUp=new HsmaCustomizationPopUp();hsmaCustomizationPopUp.setIdAccessory(PriceTable.instance.products[randomId]['id_accessory']);hsmaCustomizationPopUp.setRandomId(randomId);hsmaCustomizationPopUp.setAjaxUrl(ajaxRenderAccessoriesUrl);hsmaCustomizationPopUp.setTitlePopup(PriceTable.instance.jsTranslateText.accessory_customization);hsmaCustomizationPopUp.setContentPopup(PriceTable.instance._getCustomzationPopupContent(randomId));hsmaCustomizationPopUp.setIdGroup(PriceTable.instance.products[randomId]['id_accessory_group']);hsmaCustomizationPopUp.show();});$(document).on('change',this._selectors.productCombination,function(){PriceTable.instance.scrollToTablePrice();var randomId=$(this).data('randomid');var idProductAttribute=parseInt($(this).val());customQuantity=$(this).parent().parent().find(PriceTable.instance._selectors.accessoriesCustomQuantity).val();customQuantity=typeof customQuantity!=='undefined'?customQuantity:PriceTable.instance.products[randomId]['qty'];var parentsElement=$(this).parents('tr');if(!PriceTable.instance.products[randomId]['combinations'][idProductAttribute]['out_of_stock']&&PriceTable.instance.products[randomId]['combinations'][idProductAttribute]['avaiable_quantity']<customQuantity)
{$(this).val(previousValueOfCombination);alert(PriceTable.instance.warningOutOfStock);window.getSelection().removeAllRanges();}
else
{previousValueOfCombination=$(this).val();PriceTable.instance.products[randomId].default_id_product_attribute=idProductAttribute;PriceTable.instance._updateMainProductPrice();PriceTable.instance._renderTablePrice();PriceTable.instance._updateAccessoryPrice(PriceTable.instance.products[randomId]);PriceTable.instance._updateProductCombinationImage(parentsElement,PriceTable.instance.products[randomId]);}});$(document).on('click',this._selectors.accessoryItem,function(){var selectedValue=$(this).val();if(selectedValue!=0){PriceTable.instance.scrollToTablePrice();}
if(parseInt(window.buyTogetherOption)===parseInt(adminProductSetting.BUY_TOGETHER_YES))
{if($(this).parents('table').find(PriceTable.instance._selectors.accessoryItem+':checked').length===0)
{$('<span class="message_error">'+alertMessage+'</span>').insertBefore($(this).parents('table'));}else{$(this).parents('table').prev(PriceTable.instance._selectors.classMessageError).remove();PriceTable.instance.scrollToTablePrice();}}
else if(parseInt(window.buyTogetherOption)===parseInt(adminProductSetting.BUY_TOGETHER_REQUIRED)&&$(this).attr('type')==='checkbox')
{if(parseInt($(this).data('required-buy-together'))===1)
{alert(alertMessage);window.getSelection().removeAllRanges();$(this).parent().addClass('checked');$(this).attr("checked","checked");}
PriceTable.instance.scrollToTablePrice();}
if($(this).is(':checked')){currentQty=parseInt($(this).parents('tr').find(PriceTable.instance._selectors.accessoriesCustomQuantity).val());$(this).parents('tr').find(PriceTable.instance._selectors.accessoriesCustomQuantity).val(currentQty>0?currentQty:1);}
PriceTable.instance._initProductAccessories();PriceTable.instance._renderTablePrice();});$(document).on('click',this._selectors.productAttributeColor,function(){PriceTable.instance._renderTablePrice(true);});$(document).on('click',this._selectors.productAttributeRadio,function(){PriceTable.instance._renderTablePrice(true);});$(document).on('change',this._selectors.productAttributeSelect,function(){PriceTable.instance._renderTablePrice(true);});$(this._selectors.accessoriesGroup).on('focus',function(){previousAccessory=this.value;}).change(function(){PriceTable.instance.scrollToTablePrice();var randomId=$(this).find(':selected').data('randomid');if(typeof randomId!=='undefined')
{var customQuantity=PriceTable.instance.products[randomId].custom_quantity?PriceTable.instance.products[randomId].custom_quantity:PriceTable.instance.products[randomId].default_quantity;var idProductAttribute=this.options[this.selectedIndex].getAttribute('data-id-product-attribute');var isOutOfStock=false;if(!PriceTable.instance.products[randomId]['out_of_stock']&&PriceTable.instance.products[randomId]['avaiable_quantity']<customQuantity)
isOutOfStock=true;if(typeof idProductAttribute!=='undefined'&&typeof PriceTable.instance.products[randomId]['combinations'][idProductAttribute]!=='undefined'&&!PriceTable.instance.products[randomId]['combinations'][idProductAttribute]['out_of_stock']&&PriceTable.instance.products[randomId]['combinations'][idProductAttribute]['avaiable_quantity']<customQuantity)
isOutOfStock=true;if(isOutOfStock)
{$(this).val(previousAccessory);alert(PriceTable.instance.warningOutOfStock);window.getSelection().removeAllRanges();}
else
{if(typeof PriceTable.instance.products[randomId]!=='undefined'&&Object.size(PriceTable.instance.products[randomId]['combinations'])>1)
PriceTable.instance._renderCombination(randomId,false);else
$(this).next().html('');previousAccessory=this.value;}}
else
{$(this).next().html('');previousAccessory=this.value;}
PriceTable.instance._initProductAccessories();PriceTable.instance._renderTablePrice();});$(document).on('keyup',this._selectors.quantityWanted,function(){var qty=$(this).val();isIntegerNumber=PriceTable.instance.isIntegerNumber(qty);if(!isIntegerNumber)
{$(this).addClass(PriceTable.instance._selectors.classError);$(this).select();}
else
$(this).removeClass(PriceTable.instance._selectors.classError);PriceTable.instance.triggerTablePrice();});$(document).on('click',this._selectors.quantityWanted,function(){PriceTable.instance.triggerTablePrice();});$(document).on('click',this._selectors.classChangeQuantity,function(){PriceTable.instance.triggerTablePrice();});if($('#product'+' '+this._selectors.groupAccessories+' '+this._selectors.accessoriesCustomQuantity).length>0)
{$(this._selectors.accessoriesCustomQuantity).on('focus',function(){previousAccessoryQuantity=this.value;}).change(function(){var newQuantity=parseInt($(this).val());var randomId=0;var idCombination=0;if($(this).parent().parent().find('.dd-selected-value').length>0)
{randomId=$(this).parent().parent().find('.randomid-group').data('randomid');var idGroup=$(this).parent().parent().find('.randomid-group').data('idgroup');idCombination=$('#combination_'+idGroup).find('.dd-selected-value').val();}else{randomId=typeof $(this).parent().parent().find(':checked').data('randomid')!=='undefined'?$(this).parent().parent().find(':checked').data('randomid'):$(this).parent().parent().find(PriceTable.instance._selectors.accessoryItem).data('randomid');idCombination=typeof $(this).parent().parent().find(':checked').data('id-product-attribute')!=='undefined'?$(this).parent().parent().find(':checked').data('id-product-attribute'):$(this).parent().parent().find(PriceTable.instance._selectors.accessoryItem).data('id-product-attribute');}
if(typeof randomId==='undefined'||randomId===0)
return;var minQuantity=parseInt(PriceTable.instance.products[randomId]['min_quantity']);if(newQuantity<minQuantity){$(this).val($(this).data('custom-quantity'));alert(PriceTable.instance.warningCustomQuantity.format(minQuantity));window.getSelection().removeAllRanges();return;}
idCombination=typeof idCombination!=='undefined'?idCombination:0;var idAccessory=PriceTable.instance.products[randomId]['id_accessory'];if(!idAccessory&&typeof window.ajaxRenderAccessoriesUrl==='undefined')
return;var currentThis=this;$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:window.ajaxRenderAccessoriesUrl,async:true,cache:false,dataType:"json",data:{'ajax':true,'id_accessory':idAccessory,'id_accessory_combination':idCombination,'new_quantity':newQuantity,'action':'isStockAvailable'},success:function(jsonData)
{if(!jsonData.hasError)
{isIntegerNumber=PriceTable.instance.isIntegerNumber(newQuantity);if(!isIntegerNumber)
{$(currentThis).addClass(PriceTable.instance._selectors.classError);$(currentThis).select();}
else
{$(currentThis).removeClass(PriceTable.instance._selectors.classError);PriceTable.instance.products[randomId]['custom_quantity']=newQuantity;$(currentThis).data('custom-quantity',newQuantity);}}
else
{var avaiableQuantity=PriceTable.instance.products[randomId]['avaiable_quantity'];$(currentThis).val(avaiableQuantity);$(currentThis).data('custom-quantity',avaiableQuantity);alert(jsonData.errors);window.getSelection().removeAllRanges();}},complete:function(){if(parseInt($(currentThis).val())>0){$(currentThis).parents('tbody').find('.radio').find('span').removeClass('checked');$(currentThis).parents('tbody').find('.radio').find('span input').prop('checked',false);$(currentThis).parents('tr').find('.checker, .radio').find('span').addClass('checked');$(currentThis).parents('tr').find('.checker, .radio').find('span input').prop('checked',true);}else{$(currentThis).parents('tr').find('.checker, .radio').find('span').removeClass('checked');$(currentThis).parents('tr').find('.checker, .radio').find('span input').prop('checked',false);}
PriceTable.instance._initProductAccessories();PriceTable.instance._renderTablePrice();PriceTable.instance._updateAccessoryPrice(PriceTable.instance.products[randomId]);PriceTable.instance.scrollToTablePrice();}});});}
$(document).on('click',this._selectors.classProductImgLink,function(e){$(PriceTable.instance._selectors.classProductImgLink).fancybox({'hideOnContentClick':false});});};this._initProductAccessories=function()
{this.accessories={};var selector=this._selectors;if($(selector.groupAccessories).find('.dd-selected-value'))
{$(selector.groupAccessories+' .randomid-group').each(function(){var randomId=$(this).data('randomid');if(typeof PriceTable.instance.products[randomId]!=='undefined')
{var quantity=PriceTable.instance.products[randomId].custom_quantity?PriceTable.instance.products[randomId].custom_quantity:PriceTable.instance.products[randomId].default_quantity;$(this).parent().find(PriceTable.instance._selectors.accessoriesCustomQuantity).val(quantity);PriceTable.instance.accessories[randomId]=PriceTable.instance.products[randomId];var qty=parseInt($('#product #quantity_wanted').val());var idGroup=$(this).data('idgroup');if($('#product'+' '+selector.groupAccessories+' '+selector.accessoriesCustomQuantity).length>0){qty=$('#quantity_'+idGroup).val();}
if(qty>=0){PriceTable.instance.products[randomId]['qty']=qty;}
$('#quantity_'+idGroup).val(PriceTable.instance.products[randomId]['qty']);$('#quantity_'+idGroup).data('custom-quantity',PriceTable.instance.products[randomId]['qty']);}});}
if($(selector.groupAccessories).find('select').hasClass(this._selectors.classNameAccessoriesGroup))
{$(PriceTable.instance._selectors.accessoriesGroup).each(function()
{var randomId=$(this).find(':selected').data('randomid');if(typeof PriceTable.instance.products[randomId]!=='undefined')
{var quantity=PriceTable.instance.products[randomId].custom_quantity?PriceTable.instance.products[randomId].custom_quantity:PriceTable.instance.products[randomId].default_quantity;$(this).prev().val(quantity);PriceTable.instance.accessories[randomId]=PriceTable.instance.products[randomId];var qty=parseInt($('#product #quantity_wanted').val());if($('#product'+' '+selector.groupAccessories+' '+selector.accessoriesCustomQuantity).length>0){qty=parseInt($('#quantity_'+$(this).attr('name').replace('accessory_','')).val());}
if(qty>=0){PriceTable.instance.products[randomId]['qty']=qty;}
$('#quantity_'+$(this).attr('name').replace('accessory_','')).data('custom-quantity',PriceTable.instance.products[randomId]['qty']);$('#quantity_'+$(this).attr('name').replace('accessory_','')).val(PriceTable.instance.products[randomId]['qty']);if(!PriceTable.instance.showOptionImage&&Object.size(PriceTable.instance.products[randomId]['combinations'])>1)
PriceTable.instance._renderCombination(randomId,false);if(!PriceTable.instance.showOptionImage){PriceTable.instance._renderCustomization(randomId,PriceTable.instance.products[randomId]['id_accessory_group']);}}});}
if($(selector.groupAccessories).find('input').hasClass(this._selectors.classNameAccessoryItem))
{$(PriceTable.instance._selectors.accessoryItem+':checked').each(function(i)
{var randomId=$(this).data('randomid');var qty=parseInt($('#product #quantity_wanted').val());if(typeof PriceTable.instance.products[randomId]!=='undefined')
{PriceTable.instance.accessories[randomId]=PriceTable.instance.products[randomId];if($('#product'+' '+selector.groupAccessories+' '+selector.accessoriesCustomQuantity).length>0)
qty=parseInt($('#quantity_'+$(this).attr('id').replace('accessories_proudct_','')).val());if(qty>=0)
PriceTable.instance.products[randomId]['qty']=qty;$('#quantity_'+$(this).attr('id').replace('accessories_proudct_','')).val(PriceTable.instance.products[randomId]['qty']);}});}
this.accessories[PriceTable.instance.randomMainProductId]=PriceTable.instance.products[PriceTable.instance.randomMainProductId];};this._updateMainProductPrice=function()
{if(typeof productPrice==='undefined')
return;if(typeof priceWithDiscountsDisplay==='undefined')
priceWithDiscountsDisplay=productPrice;idCombination=PriceTable.instance.products[PriceTable.instance.randomMainProductId]['default_id_product_attribute'];PriceTable.instance.products[PriceTable.instance.randomMainProductId]['combinations'][idCombination]['price']=priceWithDiscountsDisplay;var qty=$('#product #quantity_wanted').val();if(typeof qty!=='undefined')
{if(PriceTable.instance.isIntegerNumber(qty)&&parseInt(qty)>=0)
PriceTable.instance.products[PriceTable.instance.randomMainProductId]['qty']=parseInt(qty);}};this._renderTablePrice=function(forceToChangeMainPrice)
{if(typeof forceToChangeMainPrice==='undefined')
forceToChangeMainPrice=false;if($.isEmptyObject(this.accessories))
return;var priceTable='';var underline='';var totalPrice=0;$.each(this.accessories,function(randomid,product)
{PriceTable.instance._updateAccessoryPrice(PriceTable.instance.products[randomid]);var productPrice=0;var combinationName='';$.each(product.combinations,function(idProductAttribute,combination){if(typeof combination!=='undefined'&&(parseInt(product.default_id_product_attribute)===parseInt(idProductAttribute)||idProductAttribute==0)){productPrice=product.qty*combination.price;combinationName=combination.name;}
if(!$.isEmptyObject(combination.specific_prices))
{$.each(combination.specific_prices,function(fromQty,specificPrice){if(parseInt(product.qty)>=parseInt(fromQty)){productPrice=product.qty*specificPrice;}});}
if(combination.is_cart_rule&&(parseInt(product.default_id_product_attribute)===parseInt(idProductAttribute)||idProductAttribute==0)){productPrice=product.qty*combination.final_price;}});var outOfStockWarningIcon=PriceTable.instance._renderOutOfStockWarningIcon(product);underline=randomid===PriceTable.instance.randomMainProductId?'style="text-decoration: underline;"':'';totalPrice+=productPrice;var blockCombinationName=(combinationName&&PriceTable.instance.showCombination)?'<span class="ma_accessory_combination_name" title="'+combinationName+'">'+combinationName+'</span>':'';priceTable=priceTable+'<tr>'+'<td class="left-column" '+underline+'><span class="ma_accessory_name chech-accessorio" title="'+product.name+'">'+product.qty+' x '+product.name+':</span>'+blockCombinationName+'</td>'+'<td class="right-column">'+formatCurrency(productPrice,currencyFormat,currencySign,currencyBlank)+outOfStockWarningIcon+'</td>'+'</tr>';});var totals=formatCurrency(totalPrice,currencyFormat,currencySign,currencyBlank);priceTable=priceTable+'<tr>'+'<td class="left-column-total">'+this.subTotal+':</td>'+'<td class="right-column-total">'+totals+'</td>'+'</tr>';$("#total_products .total_price span").text(totals);if(parseInt(this.showTablePrice)===1)
$(this._selectors.accessoriesTablePriceContent).html(priceTable);if(this.changeMainPrice)
$(this._selectors.mainProductPrice).html(totals.replace("€",""));};this._renderOutOfStockWarningIcon=function(product)
{var outOfStockWarningIcon='<span title="'+product.available_later+'" class="warning_out_of_stock"></span>';var idProductAttribute=product.default_id_product_attribute;return(product.combinations[idProductAttribute].is_available_when_out_of_stock&&isShowIconOutOfStock)?outOfStockWarningIcon:'';};this._renderCombinations=function()
{if($(this._selectors.groupAccessories).find('select').hasClass(this._selectors.classNameAccessoriesGroup))
{if(this.showOptionImage)
{this._renderProductOptionImage();}
$(PriceTable.instance._selectors.accessoriesGroup).each(function()
{var randomId=$(this).val();if(typeof PriceTable.instance.products[randomId]!=='undefined'&&Object.size(PriceTable.instance.products[randomId]['combinations'])>1)
PriceTable.instance._renderCombination(randomId,false);});}
if($(this._selectors.groupAccessories).find('input').hasClass(this._selectors.classNameAccessoryItem))
{$.each(this.products,function(randomId,product){if(Object.keys(product.combinations).length>1)
PriceTable.instance._renderCombination(randomId,true);});}};this._renderCustomization=function(randomId,idGroup)
{if(typeof randomId==='undefined'||typeof PriceTable.instance.products[randomId]==='undefined'){return;}
var product=this.products[randomId];var blockHasCustomization='';if(typeof product.customization!=='undefined'&&Object.keys(product.customization).length>0){var hsmaJsi18n=PriceTable.instance.jsTranslateText;var classHide=product.is_enough_customization?'hide':'';blockHasCustomization='<a class="hsma_customize accessory_customization_'+product.id_accessory+'"  data-id_accessory="'+product.id_accessory+'" data-randomid ="'+randomId+'" title="'+hsmaJsi18n.add_customization_data+'">'+hsmaJsi18n.customize+'<input type="hidden" name="hsma_id_customization" class="hsma_id_customization" data-isenoughcustomization="'+product.is_enough_customization+'" value="'+product.id_customization+'"><span class="hsma_warning_red '+classHide+'" title="'+hsmaJsi18n.please_fill_the_required_custom_fields_to_complete_the_sale+'"></span></a>';}
$('.hsma_customize_group_'+idGroup).html(blockHasCustomization);};this._getCustomzationPopupContent=function(randomId)
{if(typeof randomId==='undefined'){return;}
var product=this.products[randomId];if(typeof product.customization==='undefined'||Object.keys(product.customization).length==0){return;}
var hsmaJsi18n=PriceTable.instance.jsTranslateText;var popupContent='<form method="post" action="" enctype="multipart/form-data" id="hsma_add_accessory_customization"><section class="product-customization hsma_block_customization accessory_customizations_modal_'+product.id_accessory+'">';popupContent+='<div class="hsma_show_error"></div><div class="card card-block"><span class="msg_warning">'+hsmaJsi18n.dont_forget_to_save_your_customization_to_be_able_to_add_to_cart+'</span>';popupContent+='<ul class="clearfix">';$.each(product.customizations,function(key,fields){if(typeof fields!=='undefined'&&Object.keys(fields).length>0){$.each(fields,function(index,field){var class_required=parseInt(field.required)===1?'is_required':'';var is_required=parseInt(field.required)?'required':'';var texRequired=parseInt(field.required)?'<sup>*</sup>':'';popupContent+='<li class="product-customization-item">';popupContent+='<label>'+field.label+texRequired+'</label>';if(field.type=='text'){var fieldText=field.text!==''?field.text:'';popupContent+='<textarea placeholder="'+hsmaJsi18n.your_message_here+'" class="product-message hsma_accessory_text_field '+class_required+'" maxlength="250" '+is_required+' name="'+field.input_name+'">'+fieldText+'</textarea>';popupContent+='<small class="float-xs-right">'+hsmaJsi18n.char_max+'</small>';}else if(field.type=='image'){if(field.is_customized){popupContent+='<br><img src="'+field.image.small.url+'">';popupContent+='<a class="hsma_remove_image" data-idaccessory="'+product.id_accessory+'" data-idcustomizationfield="'+field.id_customization_field+'" rel="nofollow">'+hsmaJsi18n.remove_image+'</a>';}
popupContent+='<input class="hs_ma_file-input hs_ma_js-file-input '+class_required+' hsma_accessory_file_input" '+is_required+' type="file" name="'+field.input_name+'">';popupContent+='<small class="float-xs-right">'+hsmaJsi18n.png_jpg_gif+'</small>';}
popupContent+='</li>';});}});popupContent+='</ul><span class="clear required"><sup>*</sup> '+hsmaJsi18n.required_fields+'</span><div class="clearfix"><button class="btn btn-primary float-xs-right submit_accessory_customization" type="submit" name="submitAccessoryCustomizedData">'+hsmaJsi18n.save_customization+'</button><button class="btn float-xs-right cancel_accessory_customization" type="button" name="cancel">'+hsmaJsi18n.cancel+'</button></div>';popupContent+='</div></section></form>';return popupContent;};this._renderCombination=function(randomId,checkbox)
{if(typeof randomId==='undefined')
return;var product=this.products[randomId];var hasCombination=true;var html='<select data-randomid="'+randomId+'" name="product-combination" class="product-combination">';var i=0;var defaultSelectedIndex=0;$.each(product.combinations,function(idProductAttribute,combination){var dataImg='';if(!checkbox){dataImg='data-imagesrc="'+combination.image_default+'"';}
var dataAllowOrderingWhenOutOfStock='data-alloworderingwhenoutofstock="'+combination.is_available_when_out_of_stock+'"';var dataStockAvailable='data-stockavailable="'+combination.is_stock_available+'"';var selected='';if(parseInt(idProductAttribute)===parseInt(product.default_id_product_attribute))
{defaultSelectedIndex=i;selected='selected="selected"';}
html+='<option '+dataImg+' '+dataStockAvailable+' '+dataAllowOrderingWhenOutOfStock+' value="'+idProductAttribute+'"'+selected+'>'+combination.name+'</option>';if(idProductAttribute===0)
hasCombination=false;i++;});html+='</select>';var classContainCombination='combination_'+product.id_accessory_group+'_'+product.id_accessory;if(checkbox&&hasCombination)
$('.'+classContainCombination).html(html);else
{var selector='combination_'+product.id_accessory_group;$('#'+selector).html('');if(hasCombination)
{if(this.showOptionImage)
$('#'+selector).ddslick('destroy');$('#'+selector).html(html);if(this.showOptionImage)
PriceTable.instance._renderCombinationOptionImage(selector,product,defaultSelectedIndex,randomId);}
else
{$('.accessory_image_'+product.id_accessory_group).html('<img src="'+product.combinations[0].image_default+'">');$('.accessory_image_'+product.id_accessory_group).attr('href',product.combinations[0].image_fancybox);}}};this._renderProductOptionImage=function(){$('.'+PriceTable.instance._selectors.classProductDDSlick).each(function(){var idDDSlick=$(this).attr('id');$('#'+idDDSlick).ddslick({showSelectedHTML:false,background:'#fff',onSelected:function(data){var idGroup=$('#'+idDDSlick).parent().data('idgroup');var randomId=data.selectedData.description;if(data.selectedData.value==0)
{var selector='combination_'+idGroup;$('#'+selector).html('');$('.accessory_image_'+idGroup).html('');$('#randomid-group-'+idGroup).data('randomid',0);}else{$('#randomid-group-'+idGroup).data('randomid',randomId);}
PriceTable.instance._initProductAccessories();PriceTable.instance._renderTablePrice();PriceTable.instance._renderCombination(randomId,false);PriceTable.instance._renderCustomization(randomId,idGroup);PriceTable.instance.scrollToTablePrice();}});});};this._renderCombinationOptionImage=function(selector,product,defaultSelectedIndex,randomId){var previousValueOfCombination=product.default_id_product_attribute;$('#'+selector).ddslick({showSelectedHTML:false,background:'#fff',defaultSelectedIndex:defaultSelectedIndex,onSelected:function(data){var idGroup=product.id_accessory_group;var idProductAttribute=data.selectedData.value;customQuantity=$('#'+selector).parent().find(PriceTable.instance._selectors.accessoriesCustomQuantity).val();customQuantity=typeof customQuantity!=='undefined'?customQuantity:PriceTable.instance.products[randomId]['qty'];if(!PriceTable.instance.products[randomId]['combinations'][idProductAttribute]['out_of_stock']&&PriceTable.instance.products[randomId]['combinations'][idProductAttribute]['avaiable_quantity']<customQuantity){var i=0;$.each(product.combinations,function(idProductAttribute,combination){if(idProductAttribute==previousValueOfCombination)
$('#'+selector).ddslick('select',{index:i});i++;});alert(PriceTable.instance.warningOutOfStock);window.getSelection().removeAllRanges();return;}else{previousValueOfCombination=idProductAttribute;var selectedCombination=product.combinations[idProductAttribute];if(selectedCombination.image_default!=''){$('.accessory_image_'+idGroup).html('<img src="'+selectedCombination.image_default+'">');}
if(selectedCombination.image_fancybox!=''){$('.accessory_image_'+idGroup).attr('href',selectedCombination.image_fancybox);}
PriceTable.instance.products[randomId].default_id_product_attribute=idProductAttribute;PriceTable.instance.triggerTablePrice();PriceTable.instance._updateAccessoryPrice(PriceTable.instance.products[randomId]);}
PriceTable.instance.scrollToTablePrice();}});};this._updateAccessoryPrice=function(product)
{var price=0;var final_price=0;$.each(product.combinations,function(idProductAttribute,combination){if(typeof combination!=='undefined'&&(parseInt(product.default_id_product_attribute)===parseInt(idProductAttribute)||idProductAttribute==0)){price=combination.price;}
if(!$.isEmptyObject(combination.specific_prices)){$.each(combination.specific_prices,function(fromQty,specificPrice){if(parseInt(product.qty)>=parseInt(fromQty)){final_price=specificPrice;}});}
if(combination.is_cart_rule&&(parseInt(product.default_id_product_attribute)===parseInt(idProductAttribute)||idProductAttribute==0)){final_price=combination.final_price;}});var classContainPrice='price_'+product.id_accessory_group+'_'+product.id_accessory;var classContainFinalPrice='final_price_'+product.id_accessory_group+'_'+product.id_accessory;if(price>0){$('.'+classContainPrice).html(formatCurrency(price,currencyFormat,currencySign,currencyBlank));}
if(final_price>0){var formatedFinalPrice=formatCurrency(final_price,currencyFormat,currencySign,currencyBlank);if($('.accessory_price').find('span').hasClass(classContainFinalPrice)){$('.'+classContainFinalPrice).html('&nbsp;'+formatedFinalPrice);}else{var htmlFinalprice='<span class="discount_price '+classContainFinalPrice+'"> '+formatedFinalPrice+'</span>';$(htmlFinalprice).insertAfter('.'+classContainPrice);$('.'+classContainPrice).addClass('line_though');}}else{$('.'+classContainFinalPrice).remove();$('.'+classContainPrice).removeClass('line_though');}};this._updateProductCombinationImage=function(element,product)
{var selectedCombination=product.combinations[product.default_id_product_attribute];$(element).find('.accessory_img_link').attr('href',selectedCombination.image_fancybox);$(element).find('.accessory_image').attr('src',selectedCombination.image_default);};this.isStockAvailable=function(randomId,newQuantity,idCombination)
{var flag=true;idCombination=typeof idCombination!=='undefined'?idCombination:0;var product=this.products[randomId].combinations[idCombination];var availableQuantity=product.avaiable_quantity;var outOfStock=product.out_of_stock;if(!outOfStock&&availableQuantity<newQuantity){flag=false;}
return flag;};this.isAddToCartButtonVisible=function(){return $(PriceTable.instance._selectors.idAddToCartButton).visible();};this.scrollToTablePrice=function(){if(!PriceTable.instance.isAddToCartButtonVisible()&&parseInt(PriceTable.instance.isScrollingToTablePrice)===1)
{if(parseInt(this.showTablePrice)===1){$('html, body').animate({scrollTop:$(PriceTable.instance._selectors.accessoriesTablePriceContent).offset().top-100},500);}}};this.triggerTablePrice=function(){PriceTable.instance._updateMainProductPrice();PriceTable.instance._initProductAccessories();PriceTable.instance._renderTablePrice();};this._onClickBlockGroup=function(element)
{if($(element).hasClass(PriceTable.instance._selectors.iconCollapse)){$(element).removeClass(PriceTable.instance._selectors.iconCollapse);$(element).addClass(PriceTable.instance._selectors.iconExpand);}else{$(element).removeClass(PriceTable.instance._selectors.iconExpand);$(element).addClass(PriceTable.instance._selectors.iconCollapse);}
$(element).parents(PriceTable.instance._selectors.accessoryGroup).find('.'+PriceTable.instance._selectors.contentGroup).toggle("slow");};this._onClickExpandGroup=function(element)
{if($(element).parents(PriceTable.instance._selectors.accessoryGroup).find('i').hasClass(PriceTable.instance._selectors.iconCollapse)){$(element).parents(PriceTable.instance._selectors.accessoryGroup).find('i').removeClass(PriceTable.instance._selectors.iconCollapse);$(element).parents(PriceTable.instance._selectors.accessoryGroup).find('i').addClass(PriceTable.instance._selectors.iconExpand);$(element).parents(PriceTable.instance._selectors.accessoryGroup).find('.'+PriceTable.instance._selectors.contentGroup).toggle("slow");}};this.emptyAccessoryCustomizations=function()
{if($.isEmptyObject(PriceTable.instance.accessories)||$.isEmptyObject(PriceTable.instance.products)){return;}
$.each(PriceTable.instance.products,function(prandomid,product){$.each(PriceTable.instance.accessories,function(arandomid,accessory){if(prandomid==arandomid&&product['is_customizable']){var isRequired=false;$.each(product.customizations,function(key,fields){if(typeof fields!=='undefined'){$.each(fields,function(index,field){if(field.type=='text'){PriceTable.instance.products[prandomid].customizations.fields[index].is_customized=0;PriceTable.instance.products[prandomid].customizations.fields[index].text='';}else if(field.type=='image'){PriceTable.instance.products[prandomid].customizations.fields[index].is_customized=0;PriceTable.instance.products[prandomid].customizations.fields[index].image='';}
if(parseInt(field.required)===1){isRequired=true;}});var idGroup=product.id_accessory_group;var currentElement=$('#product_list_accessory_'+idGroup+' .accessory_customization_'+product.id_accessory);if(isRequired){PriceTable.instance.products[prandomid].is_enough_customization=0;currentElement.find('.hsma_warning_red').removeClass('hide');}
var inputCustomizationData='<input type="hidden" name="hsma_id_customization" class="hsma_id_customization" data-isenoughcustomization="'+product.is_enough_customization+'" value="'+product.id_customization+'">';currentElement.find('.hsma_id_customization').replaceWith(inputCustomizationData);}});}});});};};Object.size=function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key))size++;}
return size;};;String.prototype.format=function(){var formatted=this;for(var i=0;i<arguments.length;i++){var regexp=new RegExp('\\{'+i+'\\}','gi');formatted=formatted.replace(regexp,arguments[i]);}
return formatted;};;$(document).ready(function(){$(document).on('click','.order .accessorygroup a.ma_accessory_name',clickAccessoryNameHandler);});$.fn.getSize=function(){var $wrap=$("<div />").appendTo($("body"));$wrap.css({"position":"absolute !important","visibility":"hidden !important","display":"block !important"});$clone=$(this).clone().appendTo($wrap);sizes={"width":this.width(),"height":this.height()};$wrap.remove();return sizes;};function clickAccessoryNameHandler(event){event.preventDefault();var contentSizes=$(this).parent().find('.tooltipster-content').getSize();var contentH=contentSizes.height>$(window).height()?'100%':contentSizes.height;$(this).parent().find('.tooltipster-content').modal({escClose:true,overlayClose:true,containerCss:{'width':'600px','height':contentH,'minHeight':'200px','text-align':'left'}});};;(function($){$.fn.ddslick=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exists.');}};var methods={},defaults={data:[],keepJSONItemsOnTop:false,width:260,height:null,background:"#eee",selectText:"",defaultSelectedIndex:null,truncateDescription:true,imagePosition:"left",showSelectedHTML:true,clickOffToClose:true,onSelected:function(){}},ddSelectHtml='<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>',ddOptionsHtml='<ul class="dd-options"></ul>',ddslickCSS='<style id="css-ddslick" type="text/css">'+'.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}'+'.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }'+'.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}'+'.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}'+'.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }'+'.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}'+'.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}'+'.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }'+'.dd-options > li:last-child > .dd-option{ border-bottom:none;}'+'.dd-option:hover{ background:#f3f3f3; color:#000;}'+'.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }'+'.dd-option-selected { background:#f6f6f6; }'+'.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}'+'.dd-image-right { float:right; margin-right:15px; margin-left:5px;}'+'.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>';if($('#css-ddslick').length<=0){$(ddslickCSS).appendTo('head');}
methods.init=function(options){var options=$.extend({},defaults,options);return this.each(function(){var obj=$(this),data=obj.data('ddslick');if(!data){var ddSelect=[],ddJson=options.data;obj.find('option').each(function(){var $this=$(this),thisData=$this.data();ddSelect.push({text:$.trim($this.text()),value:$this.val(),selected:$this.is(':selected'),description:thisData.description,stockAvailable:thisData.stockavailable,allowOrderingWhenOutOfStock:thisData.alloworderingwhenoutofstock,imageSrc:thisData.imagesrc});});if(options.keepJSONItemsOnTop)
$.merge(options.data,ddSelect);else options.data=$.merge(ddSelect,options.data);var original=obj,placeholder=$('<div id="'+obj.attr('id')+'"></div>');obj.replaceWith(placeholder);obj=placeholder;obj.addClass('dd-container').append(ddSelectHtml).append(ddOptionsHtml);var ddSelect=obj.find('.dd-select'),ddOptions=obj.find('.dd-options');ddOptions.css({width:options.width});ddSelect.css({width:options.width,background:options.background});obj.css({width:options.width});if(options.height!=null)
ddOptions.css({height:options.height,overflow:'auto'});$.each(options.data,function(index,item){if(item.selected)options.defaultSelectedIndex=index;ddOptions.append('<li>'+'<a class="dd-option">'+
(item.value?' <input class="dd-option-value" type="hidden" value="'+item.value+'" />':'')+
(item.imageSrc?' <img class="dd-option-image'+(options.imagePosition=="right"?' dd-image-right':'')+'" src="'+item.imageSrc+'" />':'')+
(item.text?formatedTextItem(item.text):'')+
((typeof item.stockAvailable!=='undefined'&&isShowIconOutOfStock)?item.stockAvailable?'':'<span class="forbidden_ordering" title="'+messageOutOfStock+'"></span>':'')+
((typeof item.allowOrderingWhenOutOfStock!=='undefined'&&isShowIconOutOfStock)?item.allowOrderingWhenOutOfStock?'<span class="warning_out_of_stock" title="'+msgAvailableLater+'"></span>':'':'')+
(item.description?' <small class="dd-option-description dd-desc">'+item.description+'</small>':'')+'</a>'+'</li>');});var pluginData={settings:options,original:original,selectedIndex:-1,selectedItem:null,selectedData:null}
obj.data('ddslick',pluginData);if(options.selectText.length>0&&options.defaultSelectedIndex==null){obj.find('.dd-selected').html(options.selectText);}
else{var index=(options.defaultSelectedIndex!=null&&options.defaultSelectedIndex>=0&&options.defaultSelectedIndex<options.data.length)?options.defaultSelectedIndex:0;selectIndex(obj,index);}
obj.find('.dd-select').on('click.ddslick',function(){open(obj);});obj.find('.dd-option').on('click.ddslick',function(){if($(this).parent().find('span').hasClass('forbidden_ordering')){return;}
selectIndex(obj,$(this).closest('li').index());});if(options.clickOffToClose){ddOptions.addClass('dd-click-off-close');obj.on('click.ddslick',function(e){e.stopPropagation();});$('body').on('click',function(){$('.dd-click-off-close').slideUp(50).siblings('.dd-select').find('.dd-pointer').removeClass('dd-pointer-up');});}}});};methods.select=function(options){return this.each(function(){if(options.index)
selectIndex($(this),options.index);});};methods.open=function(){return this.each(function(){var $this=$(this),pluginData=$this.data('ddslick');if(pluginData)
open($this);});};methods.close=function(){return this.each(function(){var $this=$(this),pluginData=$this.data('ddslick');if(pluginData)
close($this);});};methods.destroy=function(){return this.each(function(){var $this=$(this),pluginData=$this.data('ddslick');if(pluginData){var originalElement=pluginData.original;$this.removeData('ddslick').unbind('.ddslick').replaceWith(originalElement);}});}
function selectIndex(obj,index){var pluginData=obj.data('ddslick');var ddSelected=obj.find('.dd-selected'),ddSelectedValue=ddSelected.siblings('.dd-selected-value'),ddOptions=obj.find('.dd-options'),ddPointer=ddSelected.siblings('.dd-pointer'),selectedOption=obj.find('.dd-option').eq(index),selectedLiItem=selectedOption.closest('li'),settings=pluginData.settings,selectedData=pluginData.settings.data[index];obj.find('.dd-option').removeClass('dd-option-selected');selectedOption.addClass('dd-option-selected');pluginData.selectedIndex=index;pluginData.selectedItem=selectedLiItem;pluginData.selectedData=selectedData;if(settings.showSelectedHTML){ddSelected.html((selectedData.imageSrc?'<img class="dd-selected-image'+(settings.imagePosition=="right"?' dd-image-right':'')+'" src="'+selectedData.imageSrc+'" />':'')+
(selectedData.text?'<label class="dd-selected-text">'+selectedData.text+'</label>':'')+
((typeof selectedData.stockAvailable!=='undefined'&&isShowIconOutOfStock)?selectedData.stockAvailable?'<span class="forbidden_ordering" title="'+messageOutOfStock+'"></span>':'':'')+
((typeof selectedData.allowOrderingWhenOutOfStock!=='undefined'&&isShowIconOutOfStock)?selectedData.allowOrderingWhenOutOfStock?'<span class="warning_out_of_stock" title="'+msgAvailableLater+'"></span>':'':'')+
(selectedData.description?'<small class="dd-selected-description dd-desc'+(settings.truncateDescription?' dd-selected-description-truncated':'')+'" >'+selectedData.description+'</small>':''));}
else if(selectedData.text){ddSelected.html(formatedTextItem(selectedData.text));}
ddSelectedValue.val(selectedData.value);pluginData.original.val(selectedData.value);obj.data('ddslick',pluginData);close(obj);adjustSelectedHeight(obj);if(typeof settings.onSelected=='function'){settings.onSelected.call(this,pluginData);}}
function open(obj){var $this=obj.find('.dd-select'),ddOptions=$this.siblings('.dd-options'),ddPointer=$this.find('.dd-pointer'),wasOpen=ddOptions.is(':visible');$('.dd-click-off-close').not(ddOptions).slideUp(50);$('.dd-pointer').removeClass('dd-pointer-up');if(wasOpen){ddOptions.slideUp('fast');ddPointer.removeClass('dd-pointer-up');}
else{ddOptions.slideDown('fast');ddPointer.addClass('dd-pointer-up');}
adjustOptionsHeight(obj);}
function close(obj){obj.find('.dd-options').slideUp(50);obj.find('.dd-pointer').removeClass('dd-pointer-up').removeClass('dd-pointer-up');}
function adjustSelectedHeight(obj){var lSHeight=obj.find('.dd-select').css('height');var descriptionSelected=obj.find('.dd-selected-description');var imgSelected=obj.find('.dd-selected-image');if(descriptionSelected.length<=0&&imgSelected.length>0){obj.find('.dd-selected-text').css('lineHeight',lSHeight);}}
function adjustOptionsHeight(obj){obj.find('.dd-option').each(function(){var $this=$(this);var lOHeight=$this.css('height');var descriptionOption=$this.find('.dd-option-description');var imgOption=obj.find('.dd-option-image');if(descriptionOption.length<=0&&imgOption.length>0){$this.find('.dd-option-text').css('lineHeight',lOHeight);}});}
function formatedTextItem(textItem)
{var arrayTextItem=textItem.split("|");var formatedText=' <label class="dd-option-text">';formatedText=formatedText+arrayTextItem[0];if(typeof arrayTextItem[1]!=='undefined'){if(typeof arrayTextItem[2]!=='undefined'){formatedText=formatedText+' <span style="text-decoration: line-through;color: grey;">'+arrayTextItem[1]+'</span>'+arrayTextItem[2];}else{formatedText=formatedText+arrayTextItem[1];}}
formatedText=formatedText+' </label>';return formatedText;}})(jQuery);;(function($){var $w=$(window);$.fn.visible=function(partial,hidden,direction){if(this.length<1)
return;var $t=this.length>1?this.eq(0):this,t=$t.get(0),vpWidth=$w.width(),vpHeight=$w.height(),direction=(direction)?direction:'both',clientSize=hidden===true?t.offsetWidth*t.offsetHeight:true;if(typeof t.getBoundingClientRect==='function'){var rec=t.getBoundingClientRect(),tViz=rec.top>=0&&rec.top<vpHeight,bViz=rec.bottom>0&&rec.bottom<=vpHeight,lViz=rec.left>=0&&rec.left<vpWidth,rViz=rec.right>0&&rec.right<=vpWidth,vVisible=partial?tViz||bViz:tViz&&bViz,hVisible=partial?lViz||rViz:lViz&&rViz;if(direction==='both')
return clientSize&&vVisible&&hVisible;else if(direction==='vertical')
return clientSize&&vVisible;else if(direction==='horizontal')
return clientSize&&hVisible;}else{var viewTop=$w.scrollTop(),viewBottom=viewTop+vpHeight,viewLeft=$w.scrollLeft(),viewRight=viewLeft+vpWidth,offset=$t.offset(),_top=offset.top,_bottom=_top+$t.height(),_left=offset.left,_right=_left+$t.width(),compareTop=partial===true?_bottom:_top,compareBottom=partial===true?_top:_bottom,compareLeft=partial===true?_right:_left,compareRight=partial===true?_left:_right;if(direction==='both')
return!!clientSize&&((compareBottom<=viewBottom)&&(compareTop>=viewTop))&&((compareRight<=viewRight)&&(compareLeft>=viewLeft));else if(direction==='vertical')
return!!clientSize&&((compareBottom<=viewBottom)&&(compareTop>=viewTop));else if(direction==='horizontal')
return!!clientSize&&((compareRight<=viewRight)&&(compareLeft>=viewLeft));}};})(jQuery);;var HsmaRenderAccessories=function(ajaxRenderAccessoriesUrl)
{this._ajaxRenderAccessoriesUrl=ajaxRenderAccessoriesUrl?ajaxRenderAccessoriesUrl:null;this._params={};this._selectors={idProduct:'#product_page_product_id',classAjaxBlockProduct:'.ajax_block_product',buttonViewMore:'.lnk_view span',ajaxAddToCartButton:'.ajax_add_to_cart_button'};this.synUrl=function(url)
{var synUrl='';if(typeof url!=='undefined')
synUrl=url.indexOf('https:')>-1?url.replace("https:",document.location.protocol):url.replace("http:",document.location.protocol);return synUrl;};HsmaRenderAccessories.instance=this;this.init=function()
{var idProducts=HsmaRenderAccessories.instance._initListDataAccessories();if(idProducts.length>0){HsmaRenderAccessories.instance._renderAccessories(idProducts);}
$(document).ajaxComplete(function(event,xhr,settings){if(typeof xhr.responseJSON!=='undefined'&&typeof xhr.responseJSON.categoryCount!=='undefined'&&xhr.responseJSON.categoryCount.length>0)
{var idProducts=HsmaRenderAccessories.instance._initListDataAccessories();if(idProducts.length>0){HsmaRenderAccessories.instance._renderAccessories(idProducts);}}});};this._initListDataAccessories=function(){var idProducts=new Array();$(this._selectors.classAjaxBlockProduct).each(function(){var idProduct=HsmaRenderAccessories.instance._getIdProduct(this);if(parseInt(idProduct)>0){idProducts.push(idProduct);}});return idProducts;};this._renderAccessories=function(idProducts)
{if(!idProducts)
return;$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:HsmaRenderAccessories.instance._ajaxRenderAccessoriesUrl,async:true,cache:false,dataType:"json",data:{'ajax':true,'id_products':idProducts,'action':'renderAccessories'},success:function(jsonData)
{$(HsmaRenderAccessories.instance._selectors.classAjaxBlockProduct).each(function(){var idProduct=HsmaRenderAccessories.instance._getIdProduct(this);var buttonAddtoCart=this;if(parseInt(idProduct)>0){if(jsonData.show_total_price){$.each(jsonData.total_price,function(idProductRender,value){if(parseInt(idProduct)===parseInt(idProductRender)){$(buttonAddtoCart).find('.content_price .price').html(value);}});$.each(jsonData.total_price_without_discount,function(idProductRender,value){if(parseInt(idProduct)===parseInt(idProductRender)){if($(buttonAddtoCart).find('.content_price span').hasClass('old-price')){$(buttonAddtoCart).find('.content_price .old-price').html(value);}else{var blockPrice=$(buttonAddtoCart).find('.content_price .price');var showDiscountPrice='<span class="old-price product-price" style="padding-left:5px;">'+value+'</span>';$(showDiscountPrice).insertAfter(blockPrice);}}});}
$.each(jsonData.accessories,function(idProductRender,value){if(parseInt(idProduct)===parseInt(idProductRender)){$(buttonAddtoCart).find(HsmaRenderAccessories.instance._selectors.ajaxAddToCartButton).attr('data-id-accessories',value.id_accessories);$(buttonAddtoCart).find(HsmaRenderAccessories.instance._selectors.ajaxAddToCartButton).attr('data-id-accessories-combination',value.id_accessories_combination);$(buttonAddtoCart).find(HsmaRenderAccessories.instance._selectors.ajaxAddToCartButton).attr('data-custom-qty',value.custom_qty);if(parseInt(value.has_customization)!==2){var texTranslate=parseInt(value.has_customization)===1?jsonData.i18n_customize:jsonData.i18n_more;$(buttonAddtoCart).find(HsmaRenderAccessories.instance._selectors.ajaxAddToCartButton).attr('disabled','disabled');$(buttonAddtoCart).find(HsmaRenderAccessories.instance._selectors.buttonViewMore).html(texTranslate);}}});}});}});};this._getIdProduct=function(element){var links=$(element).find('a');var idProduct=0;for(var i=0;i<links.length;i++)
{var href=decodeURIComponent($(links[i]).attr('href'));if(href.indexOf('id_product')>0)
{i=links.length;idProduct=href.substring(href.indexOf('id_product')+11,href.length);}}
if(isNaN(idProduct)&&idProduct.indexOf('&')>0)
idProduct=idProduct.substring(0,idProduct.indexOf('&'));return idProduct;};};;var HsmaCustomizationPopUp=function(selectors)
{this._selectors={layerAccessory:'#layer_accessory_customization',layerAccessoryOverlay:'.layer_accessories_overlay',closeAccessoryCustomizePopUp:'#layer_accessory_customization .close, #layer_accessory_customization .cancel_accessory_customization',buttonSubmintAccessoryCustomization:'#layer_accessory_customization .submit_accessory_customization',blockErrors:'#layer_accessory_customization .hsma_show_error',inputFile:'#layer_accessory_customization input[type="file"]',inputText:'#layer_accessory_customization .hsma_accessory_text_field',modalTitle:'.layer_accessory .modal-title',accessoryCustomizationInfo:'.layer_accessory_customization_info',blockAccessoryCustomization:'.layer_accessory_customization_info .hsma_block_customization',buttonDeleteImage:'#layer_accessory_customization .hsma_remove_image',buttonSubmitCustomization:'#hsma_add_accessory_customization'};this.idAccessory;this.idGroup;this.ajaxUrl;this.contentPopup;this.titlePopup;this.randomId;$.extend(this._selectors,selectors);HsmaCustomizationPopUp.instance=this;this.show=function(){var heightop=parseInt($(window).scrollTop());$(this._selectors.modalTitle).html(HsmaCustomizationPopUp.instance.getTitlePopup());$(this._selectors.accessoryCustomizationInfo).html(HsmaCustomizationPopUp.instance.getContentPopup());$(this._selectors.layerAccessoryOverlay).css('width','100%');$(this._selectors.layerAccessoryOverlay).css('height','100%');$(this._selectors.blockAccessoryCustomization).css('display','block');$(this._selectors.layerAccessoryOverlay).show();$(this._selectors.layerAccessory).css({'top':heightop}).fadeIn('fast');this.handleEvent();};this.handleEvent=function()
{$(document).on('click',this._selectors.closeAccessoryCustomizePopUp,function(){window.parent.hsmaCustomizationPopUp.close();});$(document).on('click',this._selectors.layerAccessoryOverlay,function(){window.parent.hsmaCustomizationPopUp.close();});$(document).on('keyup',this._selectors.inputText,function(){$(this).removeClass('error');$(this).addClass('valid');$(HsmaCustomizationPopUp.instance._selectors.blockErrors).html('');var value=$(this).val();if(value.length>1){if(HsmaCustomizationPopUp.instance._isMessage(value)){$(this).removeClass('error');$(this).addClass('valid');}else{$(this).removeClass('valid');$(this).addClass('error');}}});HsmaCustomizationPopUp.instance._initUniform();$(this._selectors.buttonSubmitCustomization).on('submit',(function(e){e.preventDefault();if(HsmaCustomizationPopUp.instance._isEmptyForm()&&typeof msgEmptyForm!=='undefined'){HsmaCustomizationPopUp.instance._showError([msgEmptyForm]);return;}
var isValidate=HsmaCustomizationPopUp.instance._validate();if(isValidate){HsmaCustomizationPopUp.instance._submitAccessoryCustomization(this);}}));$(HsmaCustomizationPopUp.instance._selectors.buttonDeleteImage).on('click',(function(){var idCustomizationField=parseInt($(this).data('idcustomizationfield'));var randomId=HsmaCustomizationPopUp.instance.getRandomId();var idAccessory=parseInt($(this).data('idaccessory'));var ajaxUrl=HsmaCustomizationPopUp.instance.getAjaxUrl();if(typeof randomId==='undefined'||typeof ajaxUrl==='undefined'||typeof idCustomizationField==='undefined'||typeof idAccessory==='undefined'||idCustomizationField<1||idAccessory<1){alert('Error!');return;}
var dataPost=new FormData();dataPost.append('id_product',idAccessory);dataPost.append('ajax',true);dataPost.append('id_customization_field',idCustomizationField);dataPost.append('action','DeleteCustomizationImage');$.ajax({url:ajaxUrl,type:"POST",data:dataPost,contentType:false,cache:false,processData:false,dataType:"json",success:function(jsonData)
{if(jsonData.success){HsmaCustomizationPopUp.instance._updateAccessoryCustomizationEverywhere(jsonData,randomId);if(typeof PriceTable.instance.products!=='undefined'){PriceTable.instance.products[randomId]['id_customization']=jsonData.id_customization;}
$(HsmaCustomizationPopUp.instance._selectors.blockAccessoryCustomization).css('display','block');}else{HsmaCustomizationPopUp.instance._showError(jsonData.errors);}}});}));$(this._selectors.inputFile).change(function(e){var fileName=e.target.files[0].name;$(this).parent().find('.filename').html(fileName);$(this).parent().find('.filename').removeClass('error');$(this).parent().find('.filename').addClass('valid');$(HsmaCustomizationPopUp.instance._selectors.blockErrors).html('');});};this.setIdAccessory=function(idAccessory)
{if(typeof idAccessory!=='undefined'){this.idAccessory=parseInt(idAccessory);}};this._initUniform=function()
{if(!!$.prototype.uniform){$("#layer_accessory_customization input[type='file'], #layer_accessory_customization .hsma_accessory_text_field").uniform();}};this.setIdGroup=function(idGroup)
{if(typeof idGroup!=='undefined'){this.idGroup=parseInt(idGroup);}};this.setAjaxUrl=function(ajaxUrl)
{if(typeof ajaxUrl!=='undefined'){this.ajaxUrl=this.synUrl(ajaxUrl);}};this.setContentPopup=function(contentPopup)
{if(typeof contentPopup!=='undefined'){this.contentPopup=contentPopup;}};this.setTitlePopup=function(titlePopup)
{if(typeof titlePopup!=='undefined'){this.titlePopup=titlePopup;}};this.setRandomId=function(randomId)
{if(typeof randomId!=='undefined'){this.randomId=randomId;}};this.getIdAccessory=function()
{return this.idAccessory;};this.getIdGroup=function()
{return this.idGroup;};this.getContentPopup=function()
{return this.contentPopup;};this.getTitlePopup=function()
{return this.titlePopup;};this.getRandomId=function()
{return this.randomId;};this.getAjaxUrl=function()
{return this.ajaxUrl;};this._toggleClassError=function(element,isError=false){if(isError){$(element).removeClass('valid');$(element).addClass('error');}else{$(element).removeClass('error');$(element).addClass('valid');}};this._validate=function(){var result=true;$(this._selectors.inputText).each(function(i){var value=$(this).val();if($(this).hasClass('is_required')){if(value.length<1){HsmaCustomizationPopUp.instance._toggleClassError(this,true);result=false;}}
if(value.length>0){if(!HsmaCustomizationPopUp.instance._isMessage(value)){HsmaCustomizationPopUp.instance._toggleClassError(this,true);result=false;}}});$(this._selectors.inputFile).each(function(i){if($(this).hasClass('is_required')){var value=$(this).val();if(value.length<1){$(this).parent().find('.filename').addClass('error');result=false;}}});return result;};this._isEmptyForm=function(){var isEmptyFields=true;$(this._selectors.inputText).each(function(i){if($(this).val().length>0){isEmptyFields=false;}});$(this._selectors.inputFile).each(function(i){if($(this).val().length>0){isEmptyFields=false;}});return isEmptyFields;};this._isMessage=function(s)
{var reg=/^[^<>{}]+$/;return reg.test(s);};this._submitAccessoryCustomization=function(element){var idGroup=HsmaCustomizationPopUp.instance.getIdGroup();var idAccessory=HsmaCustomizationPopUp.instance.getIdAccessory();var randomId=HsmaCustomizationPopUp.instance.getRandomId();if(!this.getAjaxUrl()||!idAccessory||!idGroup){return;}
var dataPost=new FormData(element);dataPost.append('id_product',idAccessory);dataPost.append('ajax',true);dataPost.append('action','AddAccessoryCustomization');$.ajax({url:HsmaCustomizationPopUp.instance.getAjaxUrl(),type:"POST",data:dataPost,contentType:false,cache:false,processData:false,dataType:"json",success:function(jsonData)
{if(jsonData.success){HsmaCustomizationPopUp.instance._updateAccessoryCustomizationEverywhere(jsonData,randomId);HsmaCustomizationPopUp.instance.close();}else{HsmaCustomizationPopUp.instance._showError(jsonData.errors);}}});};this._showError=function(errors)
{var messageError='<article class="alert alert-danger" role="alert" data-alert="danger"><ul>';$.each(errors,function(key,msg){messageError+='<li>'+msg+'</li>';});messageError+='</ul></article>';$(HsmaCustomizationPopUp.instance._selectors.blockErrors).html(messageError);};this.synUrl=function(url)
{var synUrl='';if(typeof url!=='undefined')
synUrl=url.indexOf('https:')>-1?url.replace("https:",document.location.protocol):url.replace("http:",document.location.protocol);return synUrl;};this._updateAccessoryCustomizationEverywhere=function(jsonData,randomId){if(typeof PriceTable.instance.products!=='undefined'){PriceTable.instance.products[randomId]['customizations']=jsonData.customizations;PriceTable.instance.products[randomId]['is_enough_customization']=jsonData.is_enough_customization;HsmaCustomizationPopUp.instance.setContentPopup(PriceTable.instance._getCustomzationPopupContent(randomId));}
$(HsmaCustomizationPopUp.instance._selectors.accessoryCustomizationInfo).html(HsmaCustomizationPopUp.instance.getContentPopup());HsmaCustomizationPopUp.instance.handleEvent();var idGroup=HsmaCustomizationPopUp.instance.getIdGroup();var idAccessory=HsmaCustomizationPopUp.instance.getIdAccessory();var inputCustomizationData='<input type="hidden" name="hsma_id_customization" class="hsma_id_customization" data-isenoughcustomization="'+jsonData.is_enough_customization+'" value="'+jsonData.id_customization+'">';var currentElement=$('#product_list_accessory_'+idGroup+' .accessory_customization_'+idAccessory);currentElement.find('.hsma_id_customization').replaceWith(inputCustomizationData);if(jsonData.is_enough_customization){currentElement.find('.hsma_warning_red').addClass('hide');}else{currentElement.find('.hsma_warning_red').removeClass('hide');}};this.close=function(){$(this._selectors.layerAccessoryOverlay).hide();$(this._selectors.layerAccessory).fadeOut('fast');};};;$(document).on('submit','#form-send-doc-discapacidad',function(e){e.preventDefault();if(typeof $('#file_disc').prop('files')[0]!=='undefined'){var file=$('#file_disc').prop('files')[0];var file_2=$('#file_disc_2').prop('files')[0];var form_data=new FormData();var name=$("#file_disc").attr("data-id-cart");name_mod="cart-"+name;name_mod_2="cart2-"+name;form_data.append('image',file);form_data.append('image_2',file_2);form_data.append('name',name_mod);form_data.append('name_2',name_mod_2);$.ajax({url:'../modules/lgreducetax/ajax/lgupload.php',dataType:'text',cache:false,contentType:false,processData:false,data:form_data,type:'post',success:function(php_script_response){alert("Subido el fichero");},error:function(jqXHR,exception){alert("Se ha producido un error subir el fichero");},});}else{alert("No se ha facilitado ningún nuevo fichero");}});function showMessage(mensaje,tipo){$('#messsge-box').append('<div class="message-'+tipo+'">'+mensaje+'</div>');}
$(document).on('click','#text-cart-reduced-box-button-yes',function(e){$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseDir+'modules/lgreducetax/ajax/ajax.php',async:true,cache:false,success:function(){$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseUri+'?rand='+new Date().getTime(),async:true,cache:false,dataType:'json',data:'controller=cart&ajax=true'
+'&summary=true'
+'&allowSeperatedPackage=true'
+'&value='
+($(this).prop('checked')?'1':'0')
+'&token='+static_token
+'&allow_refresh=1',success:function(jsonData)
{if(jsonData.refresh)
window.location.href=window.location.href;updateCartSummary(jsonData.summary);if(window.ajaxCart!=undefined)
ajaxCart.updateCart(jsonData);updateHookShoppingCart(jsonData.HOOK_SHOPPING_CART);updateHookShoppingCartExtra(jsonData.HOOK_SHOPPING_CART_EXTRA);if(typeof(getCarrierListAndUpdate)!=='undefined')
getCarrierListAndUpdate();if(typeof(updatePaymentMethodsDisplay)!=='undefined')
updatePaymentMethodsDisplay();$("#box-send-doc-discapacidad").fadeIn("slow");}});}});});$(document).on('click','#text-cart-reduced-box-button-no',function(e){$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseDir+'modules/lgreducetax/ajax/ajax-no.php',async:true,cache:false,success:function(){$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseUri+'?rand='+new Date().getTime(),async:true,cache:false,dataType:'json',data:'controller=cart&ajax=true'
+'&summary=true'
+'&allowSeperatedPackage=true'
+'&value='
+($(this).prop('checked')?'1':'0')
+'&token='+static_token
+'&allow_refresh=1',success:function(jsonData)
{if(jsonData.refresh)
window.location.href=window.location.href;updateCartSummary(jsonData.summary);if(window.ajaxCart!=undefined)
ajaxCart.updateCart(jsonData);updateHookShoppingCart(jsonData.HOOK_SHOPPING_CART);updateHookShoppingCartExtra(jsonData.HOOK_SHOPPING_CART_EXTRA);if(typeof(getCarrierListAndUpdate)!=='undefined')
getCarrierListAndUpdate();if(typeof(updatePaymentMethodsDisplay)!=='undefined')
updatePaymentMethodsDisplay();$("#box-send-doc-discapacidad").fadeOut("slow");}});}});});;ajaxCart.add=function(idProduct,idCombination,addedFromProductPage,callerElement,quantity,wishlist)
{if($(callerElement).hasClass('ajax_add_to_cart_button')){var idAccesories=$(callerElement).data('id-accessories');var idAccesoriesAttributes=$(callerElement).data('id-accessories-combination');var customQties=$(callerElement).data('custom-qty');}else{if(!addedFromProductPage){addedFromProductPage=$('body#product').length>0;}
if($('.vouchers').length<=0){$('<table class="vouchers"><tbody></tbody></table>').insertAfter('.cart_block_list .cart_block_no_products');}
var isEnoughtAccessory=true;var groupAccessories=$('#group_accessories').find('select');var idAccesories=[];var idAccesoriesAttributes=[];var customQties=[];var idCustomizations=[];var isEnoughtCustomizations=true;if($('#group_accessories').find('div').hasClass('dd-container'))
{if($('#group_accessories').find('.dd-selected-value'))
{$('#group_accessories input.dd-selected-value').each(function(){var idSelectedElement=$(this).parent().parent().attr('id');var idAccesoryAttributes=$(this).val();if(idSelectedElement.indexOf('accessories_group')>=0)
{var selectedIdCustomization=0;if($('#'+idSelectedElement).parent().find('input').hasClass('hsma_id_customization')){selectedIdCustomization=parseInt($('#'+idSelectedElement).parent().find('.hsma_id_customization').val());if(parseInt($('#'+idSelectedElement).parent().find('.hsma_id_customization').data('isenoughcustomization'))===0){isEnoughtCustomizations=false;}}
idCustomizations.push(selectedIdCustomization);if(idAccesoryAttributes>0)
{idAccesories.push(parseInt(idAccesoryAttributes));var divCombination=$(this).parent().parent().next();var idAccesoryAttribute=0;if($(divCombination).find('input').hasClass('dd-selected-value')){idAccesoryAttribute=$(divCombination).find('.dd-selected-value').val();}
idAccesoriesAttributes.push(parseInt(idAccesoryAttribute));if(idAccesoryAttributes>0&&$('#'+idSelectedElement).parent().find('input').hasClass('custom_quantity')){customQty=parseInt($('#'+idSelectedElement).parent().find('.custom_quantity').val());if(customQty>0){customQties.push(customQty);}else{idAccesoriesAttributes.pop();idAccesories.pop();}}}}});}}
if(groupAccessories.hasClass('accessories_group'))
{$('.accessories_group option:selected').each(function(i){if(parseInt($(this).val())>0)
{var parentElement=$(this).parents('.option-row');idAccesories.push(parseInt($(this).val()));var selectedIdCustomization=0;if($(parentElement).find('input').hasClass('hsma_id_customization')){selectedIdCustomization=$(parentElement).find('.hsma_id_customization').val();if(parseInt($(parentElement).find('.hsma_id_customization').data('isenoughcustomization'))===0){isEnoughtCustomizations=false;}}
idCustomizations.push(parseInt(selectedIdCustomization));if($(parentElement).find('select').hasClass('product-combination'))
idAccesoriesAttributes.push(parseInt($(parentElement).find('.product-combination').val()));else
idAccesoriesAttributes.push(parseInt($(this).data('id-product-attribute')));if($(parentElement).find('input').hasClass('custom_quantity')){customQty=parseInt($(parentElement).find('.custom_quantity').val());if(customQty>0){customQties.push(customQty);}else{idAccesoriesAttributes.pop();idAccesories.pop();}}}});}
if($('#group_accessories').find('input').hasClass('accessory_item'))
{if(addedFromProductPage)
{$('#group_accessories .accessory_item'+':checked').each(function(i)
{var idItem=parseInt($(this).val());if(idItem>0){idAccesories.push(idItem);var parentElement=$(this).parents('tr');if($(parentElement).find('select').hasClass('product-combination'))
idAccesoriesAttributes.push(parseInt($(parentElement).find('.product-combination').val()));else
idAccesoriesAttributes.push(parseInt($(this).data('id-product-attribute')));if($(parentElement).find('input').hasClass('custom_quantity')){customQty=parseInt($(parentElement).find('.custom_quantity').val());if(customQty>0){customQties.push(customQty);}else{idAccesoriesAttributes.pop();idAccesories.pop();}}
var selectedIdCustomization=0;if($(parentElement).find('input').hasClass('hsma_id_customization')){selectedIdCustomization=$(parentElement).find('.hsma_id_customization').val();if(parseInt($(parentElement).find('.hsma_id_customization').data('isenoughcustomization'))===0){isEnoughtCustomizations=false;}}
idCustomizations.push(parseInt(selectedIdCustomization));}});if(parseInt(window.buyTogetherOption)===parseInt(adminProductSetting.BUY_TOGETHER_YES))
{$('#group_accessories .accessorygroup').each(function(){var numberCheckedAccessory=$(this).find('.accessory_item'+':checked').length;if(!numberCheckedAccessory)
isEnoughtAccessory=false;});}}}
if(idAccesories.length>0)
idAccesories=idAccesories.join(",");if(idAccesoriesAttributes.length>0)
idAccesoriesAttributes=idAccesoriesAttributes.join(",");if(customQties.length>0)
customQties=customQties.join(",");if(idCustomizations.length>0){idCustomizations=idCustomizations.join(",");}
if(!isEnoughtAccessory)
{$('#group_accessories .accessorygroup').each(function(){if(!$(this).find('.accessory_item'+':checked').length){priceTable._onClickExpandGroup(this);if(($(this).parent().find('.message_error')).length==0){$('<span class="message_error">'+alertMessage+'</span>').insertBefore($(this));}}});if($('.message_error').length){$('html, body').animate({scrollTop:$('.message_error').offset().top-100},500);}
return false;}
if(addedFromProductPage&&(!checkCustomizations()||!isEnoughtCustomizations))
{if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:true,minHeight:30,content:'<p class="fancybox-error">'+fieldRequired+'</p>'}],{padding:0});else
alert(fieldRequired);return;}
emptyCustomizations();if(addedFromProductPage)
{$('#add_to_cart button').prop('disabled','disabled').addClass('disabled');$('.filled').removeClass('filled');}
else
$(callerElement).prop('disabled','disabled');if($('.cart_block_list').hasClass('collapsed'))
this.expand();}
if(typeof idProduct==='undefined')
return;var dataPost='controller=cart&add=1&ajax=true&qty='+((quantity&&quantity!==null)?quantity:'1')+'&id_product='+idProduct+'&token='+static_token+((parseInt(idCombination)&&idCombination!==null)?'&ipa='+parseInt(idCombination):'');if(typeof idAccesories!=='undefined'&&idAccesories!==''){dataPost+='&id_accessories='+idAccesories;if(typeof customQties!=='undefined'&&customQties!==''){dataPost+='&custom_qty='+customQties;}
if(typeof idAccesoriesAttributes!=='undefined'&&idAccesoriesAttributes!==''){dataPost+='&id_accesories_attributes='+idAccesoriesAttributes;}
if(typeof idCustomizations!=='undefined'&&idCustomizations!==''){dataPost+='&id_customizations='+idCustomizations;}}
$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:baseUri+'?rand='+new Date().getTime(),async:true,cache:false,dataType:"json",data:dataPost,success:function(jsonData)
{if(!jsonData.hasError)
{if(typeof PriceTable.instance!=='undefined'&&PriceTable.instance.products!=='undefined'){PriceTable.instance.emptyAccessoryCustomizations();}
if(wishlist&&typeof WishlistAddProductCart==='function')
WishlistAddProductCart(wishlist[0],idProduct,idCombination,wishlist[1]);window.parent.ajaxCart.updateCartInformation(jsonData,addedFromProductPage);if(jsonData.crossSelling)
$('.crossseling').html(jsonData.crossSelling);if(idCombination)
$(jsonData.products).each(function(){if(this.id!==undefined&&parseInt(this.id)===parseInt(idProduct)&&parseInt(this.idCombination)===parseInt(idCombination))
if(typeof window.parent.ajaxCart.updateLayer!=='undefined'&&$.isFunction(window.parent.ajaxCart.updateLayer))
window.parent.ajaxCart.updateLayer(this);});else
$(jsonData.products).each(function(){if(this.id!==undefined&&parseInt(this.id)===parseInt(idProduct))
if(typeof window.parent.ajaxCart.updateLayer!=='undefined'&&$.isFunction(window.parent.ajaxCart.updateLayer))
window.parent.ajaxCart.updateLayer(this);});if(typeof window.contentOnly!=='undefined')
parent.$.fancybox.close();}
else
{if(addedFromProductPage)
$('#add_to_cart button').removeProp('disabled').removeClass('disabled');else
$(callerElement).removeProp('disabled');alert(jsonData.errors);}},error:function(XMLHttpRequest,textStatus,errorThrown)
{var error="Impossible to add the product to the cart.<br/>textStatus: '"+textStatus+"'<br/>errorThrown: '"+errorThrown+"'<br/>responseText:<br/>"+XMLHttpRequest.responseText;if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:true,minHeight:30,content:'<p class="fancybox-error">'+error+'</p>'}],{padding:0});else
alert(error);if(addedFromProductPage)
$('#add_to_cart button').removeProp('disabled').removeClass('disabled');else
$(callerElement).removeProp('disabled');}});};