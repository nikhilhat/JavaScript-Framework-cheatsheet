/*2022-04-11 06:29:44*/
if(typeof(window['convert'])=="undefined" || typeof(window['convert']['doUseBackupData'])=="undefined") {
window['convertData']={"dev":{"mobile":0,"tablet":0,"desktop":1},"geo":{"country":"IN","continent":"AS"}};
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//
*/
var convert_temp = convert_temp || {};
(function(){
if(typeof(window['jQuery'])=="undefined" || typeof(window['jQuery'].fn)=="undefined" || typeof(window['jQuery'].fn)!="object" || window['jQuery'].fn.jquery!="1.9.1") {
(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b
/* REMOVE AMD DEFINITION SINCE NOT NEEDED ,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})*/})(window);
 convert_temp.jQuery = jQuery.noConflict(true);
} else {
	convert_temp.jQuery = jQuery;
}

})();

/* include this after including jQuery*/

//check if we have jQuery, if not throw an error
if(typeof(convert_temp.jQuery)=="undefined" || typeof(convert_temp.jQuery.fn)=="undefined")
    throw "jQuery library was not found, aborting everything..."

var convert_temp = convert_temp || {};
convert_temp.jQuery = convert_temp.jQuery || {};
convert_temp.jQuery.fn = convert_temp.jQuery.fn || {};
(function(){

//overwrite the jQuery standard CSS method to handle in a different way cssText
var originalCssMethod = convert_temp.jQuery.fn.css;	 
// Define overriding method.
convert_temp.jQuery.fn.css = function(name,value){
	//console.log("CSS overwritten");
	if(name=="cssText" && typeof(value)=="undefined") {
		try{
			return this.get(0).style.cssText;
		}catch(e){
		 }
	} else return originalCssMethod.apply( this, arguments );
};

if(typeof(convert_temp.jQuery.browser)=="undefined")
convert_temp.jQuery.browser = (function() {
	var uaMatch = function( ua ) {
		ua = ua.toLowerCase();

		var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
			/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
			/(msie) ([\w.]+)/.exec( ua ) ||
			ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
			[];

		return {
			browser: match[ 1 ] || "",
			version: match[ 2 ] || "0"
		};
	};


	matched = uaMatch( navigator.userAgent );
	var browser = {};

	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}
	return browser;
})();


 convert_temp.$ = convert_temp.jQuery;
/*legacy stuff*/
if(typeof(REED_$)=="undefined") {
	window['REED_$'] = convert_temp.jQuery;
	window['REED'] = {};
	REED._$ = convert_temp.jQuery;
}
})();

var convert_temp = convert_temp || {}; convert_temp.data = {"u_id":"10031559","prj":{"utc_of":"-18000","extset":{"d_anon":"1","autlnk":0,"gdprw":"1","dnt":"1","ecommerce":"1","csmb":"$","maxvis":"0","maxtv":"0","minordv":0,"maxordv":"99999","mindays":"14","minvis":"5","minconv":"5","g_jq":0,"integr":null,"gaUA":[],"stopTrackingGoalsAfterDays":"0"},"id":"1003891","name":"","global_d":{"js":"convert.$(document).ready(function () {\n\nif (window.dataLayer){\n \/\/ Set this to the dimension you want to send the data to\n  var track_id;\n  var dim_index;\n  var exp = convert.currentData.experiments;\n  var number_of_experiments = Object.keys(exp).length;\n  var loop_counter = 0;\n  var reporting_string = '';\n\n  if (location.href.includes('hubspot.com')) {\n  track_id = 'UA-1990066-30';\n  dim_index = '49';\n  }\n  else if (location.href.includes('hubspot.jp')) {\n  track_id = 'UA-1990066-36';\n  dim_index = '11';\n  }\n  else if (location.href.includes('hubspot.fr')) {\n  track_id = 'UA-1990066-37';\n  dim_index = '11';\n  }\n  else if (location.href.includes('hubspot.de')) {\n  track_id = 'UA-51400647-1';\n  dim_index = '11';\n  }\n  \n  else if (location.href.includes('hubspot.es')) {\n  track_id = ' UA-53854326-1';\n  dim_index = '11';\n  }\n  \/\/ default dimension if no domain matched.\n  else {\n  track_id = 'UA-1990066-30';\n  dim_index = '64';\n  }\n\n  for (var expID in exp){\n    reporting_string = reporting_string + expID + ':' + exp[expID].variation_id;\n    if (loop_counter < (number_of_experiments - 1)) {\n      reporting_string = reporting_string + '|';\n    }\n    loop_counter++\n  } \n  if (number_of_experiments > 0) {\n    window.dataLayer.push({event: 'convert-experiment','convert-experiments':reporting_string,'convert-trackid':track_id,'convert-dimension':dim_index});\n  }\n}\n});\n\n\nfunction postGoalProcessing(event){\n  switch (event.data.goal_id) {\n    \/\/ This filters only the goals events listed here:\n   \/\/ Check if this goal is the one just triggered, and if so, call the polling\n    case '10038692':  \/\/ Convert (.com+International) - Meeting Booked Goal\n      \/\/ Check if this has not been triggered before to prevent looping\n      if (!goal_retrigger[event.data.goal_id]){\n        \/\/ Call the polling\n        window._conv_q = window._conv_q || [];\n        window._conv_q.push(['recheck_goals'])\n        goal_retrigger[event.data.goal_id] = true;\n      }\n  }\n}\n\nconst goal_retrigger = [];\n\nwindow._conv_q = window._conv_q || [];\nwindow._conv_q.push({\nwhat: 'addListener',\nparams: {\nevent: 'goal.triggered',\nhandler: (event) => postGoalProcessing(event)\n}\n});\n\n\/*\n\/\/ Code to track funnel goals without an additional page view\n\/\/ function that executes when any goal is triggered in convert.\nfunction postGoalProcessing(event){\n  switch (event.data.goal_id) {\n    \/\/ This filters only the goals events listed here:\n    case '10038021':  \/\/.com - Demo Requested Modal (Marketing Demo)\n    case '10038022':  \/\/.com - Sales Demo Requested Modal\n    case '10038023':  \/\/.com - Service Demo Requested Modal\n    case '10038024':  \/\/.com - CMS Demo Requested Modal\n    case '10038025':  \/\/.com - Demo Requested\n    case '10037808':  \/\/.com - CMS Demo Requested\n    case '10038026':  \/\/.com - Sales Demo Requested\n    case '10038027':  \/\/.com - Service Demo Requested\n    case '100310947':  \/\/.com - Growth Demo Requested\n\tcase '100313833':  \/\/.com - Operation Demo Requested \n\tcase '100313802':  \/\/.com - Operation Demo Requested Modal\n      \/\/ then .com All Demos Requested Goal is triggered\n      \/\/ If all goals are exclusive to each other then this goal should be\n      \/\/ a close approximation of the sum of the other ones.\n      triggerGoal('100312130');\n \n\/\/ This filters only the goals events listed here:\n    case '10038684':  \/\/(.com+International) - CRM Signup Portal Created\n    case '10038685':  \/\/(.com+International) - Sales Signup Portal Created\n    case '10038686':  \/\/(.com+International) - Service Signup Portal Created\n    case '10038687':  \/\/(.com+International) - Marketing Signup Portal Created\n    case '10038688':  \/\/(.com+International) - Trial Signup Portal Created\n   \n      \/\/ then .com All Portals Created  Goal is triggered\n      \/\/ If all goals are exclusive to each other then this goal should be\n      \/\/ a close approximation of the sum of the other ones.\n      triggerGoal('100312131');  \n \n  }\n}\n\/\/ This allows us to listen when any goal is triggered\n\/\/ and then process that goal event with postGoalProcessing()\nwindow._conv_q = window._conv_q || [];\nwindow._conv_q.push({\nwhat: 'addListener',\nparams: {\nevent: 'goal.triggered',\nhandler: (event) => postGoalProcessing(event)\n}\n});\n*\/\n"},"domains":{"wthubspot.com":["wthubspot.com","academy.wthubspot.com","blog.wthubspot.com"],"hubspot.com":["*.hubspot.com","offers.hubspot.com","blog.hubspot.com","hubspot.com"],"hubspot.es":["*.hubspot.es"],"hubspot.de":["*.hubspot.de"],"hubspot.jp":["*.hubspot.jp"],"hubspot.fr":["*.hubspot.fr"],"inbound.com":["inbound.com"],"hubspotqa.com":["app.hubspotqa.com","local.hubspotqa.com"]},"domainsCount":14},"experiments":{"100321518":{"n":"Test #100321518","v":"5","id":100321518,"t_r_a":[[[{"entid":"50","compid":"4","not":0,"data":"https:\/\/wthubspot.com\/convert-test"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"3","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003110916":{"p":"33.333","secs":[""],"content":{"js":[{"c":"","w":2}],"html":[{"c":"\/\/ TODO: Move to separate \"convert-experiments.js\"\nconst CONVERT_EXPERIMENT_MAPPING = {\n  CRO_BLOG_CTA_REDESIGN: {\n    experimentId: 100321518,\n    variants: {\n      1003110916: 'control',\n      1003110917: 'b',\n      1003110918: 'c',\n    },\n  },\n};\n\n\n\/**\n * Stores whether or not Convert is installed on page\n *\/\nlet isConvertEnabledOnPage = null;\n\n\/**\n * sets if Convert is installed on page\n * @returns bool\n *\/\nfunction setIsConvertEnabledOnPage() {\n  isConvertEnabledOnPage = !!window.convert;\n}\n\n\/**\n * Retrieves ids of active experiments on page\n * @returns [<string>]\n *\/\nfunction getActiveExperiments() {\n  return window.convert.currentData.experiments;\n}\n\nfunction loadExperiment({ experimentId, variants }) {\n  const experiment = {\n    experimentId,\n    variant: null,\n  };\n\n  \/\/ Convert not checked yet\n  if (isConvertEnabledOnPage === null) {\n    setIsConvertEnabledOnPage();\n  }\n\n  \/\/ Convert not loaded\n  if (isConvertEnabledOnPage === false) {\n    console.error('Convert is not active on the page');\n    return experiment;\n  }\n\n  \/\/ Convert loaded...\n  const activeExperiments = getActiveExperiments();\n\n  if (!activeExperiments[experimentId]) {\n    console.error('Experiment with (<id>) is not active on page');\n    return experiment;\n  }\n\n  const activeVariantId = activeExperiments[experimentId].variation_id;\n  const mappedVariant = variants[activeVariantId];\n\n  if (!mappedVariant) {\n    console.error('The active variant was not mapped');\n    return experiment;\n  }\n\n  experiment.variant = mappedVariant;\n  return experiment;\n}\n\n\nfunction createCookie(name, value) {\n    var date = new Date();\n    date.setTime(date.getTime() + (100 * 1000));\n  \n    var expires = \"; expires=\" + date.toGMTString();\n\n    document.cookie = name + \"=\" + value + expires + \";\";\n}\n\nconst test = { loadExperiment };\n\n_conv_q = window._conv_q || [];\n_conv_q.push({\n  what: 'addListener',\n  params: {\n    event: 'experience.variation_decided',\n    handler: (event) => console.log('variation_decided', event)\n  }\n})\n\n_conv_q.push({\n  what: 'addListener',\n  params: {\n    event: 'experience.activated',\n    handler: (event) => console.log('activated', event)\n  }\n})\n\nsetTimeout(() => {\n    console.log('timeout expired!');\n  \tconst blogExperiment = test.loadExperiment(CONVERT_EXPERIMENT_MAPPING.CRO_BLOG_CTA_REDESIGN);\n  \t\/\/ createCookie('_conv_sptest', JSON.stringify(blogExperiment));\n  \t\/\/ console.log('cookie created!');\n\t\n  \tconsole.log({blogExperiment});\n}, 1000);\n","w":0}]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003110916"},"1003110917":{"p":"33.333","secs":[""],"content":{"js":[{"c":function(){ 
convert._$('DIV.hsg-cards-grid__wrapper.hsg-page-width-normal > DIV.hsg-card:nth-of-type(1) > DIV.hsg-card__content > DIV.hsg-card__text > A.hsg-card__cta').css('cssText',convert.$('DIV.hsg-cards-grid__wrapper.hsg-page-width-normal > DIV.hsg-card:nth-of-type(1) > DIV.hsg-card__content > DIV.hsg-card__text > A.hsg-card__cta').css('cssText') + '; background-color: #D600FC !important; ');

},"w":2}],"html":[{"c":"\/\/ TODO: Move to separate \"convert-experiments.js\"\nconst CONVERT_EXPERIMENT_MAPPING = {\n  CRO_BLOG_CTA_REDESIGN: {\n    experimentId: 100321518,\n    variants: {\n      1003110916: 'control',\n      1003110917: 'b',\n      1003110918: 'c',\n    },\n  },\n};\n\n\n\/**\n * Stores whether or not Convert is installed on page\n *\/\nlet isConvertEnabledOnPage = null;\n\n\/**\n * sets if Convert is installed on page\n * @returns bool\n *\/\nfunction setIsConvertEnabledOnPage() {\n  isConvertEnabledOnPage = !!window.convert;\n}\n\n\/**\n * Retrieves ids of active experiments on page\n * @returns [<string>]\n *\/\nfunction getActiveExperiments() {\n  return window.convert.currentData.experiments;\n}\n\nfunction loadExperiment({ experimentId, variants }) {\n  const experiment = {\n    experimentId,\n    variant: null,\n  };\n\n  \/\/ Convert not checked yet\n  if (isConvertEnabledOnPage === null) {\n    setIsConvertEnabledOnPage();\n  }\n\n  \/\/ Convert not loaded\n  if (isConvertEnabledOnPage === false) {\n    console.error('Convert is not active on the page');\n    return experiment;\n  }\n\n  \/\/ Convert loaded...\n  const activeExperiments = getActiveExperiments();\n\n  if (!activeExperiments[experimentId]) {\n    console.error('Experiment with (<id>) is not active on page');\n    return experiment;\n  }\n\n  const activeVariantId = activeExperiments[experimentId].variation_id;\n  const mappedVariant = variants[activeVariantId];\n\n  if (!mappedVariant) {\n    console.error('The active variant was not mapped');\n    return experiment;\n  }\n\n  experiment.variant = mappedVariant;\n  return experiment;\n}\n\nfunction createCookie(name, value) {\n    var date = new Date();\n    date.setTime(date.getTime() + (100 * 1000));\n  \n    var expires = \"; expires=\" + date.toGMTString();\n\n    document.cookie = name + \"=\" + value + expires + \";\";\n}\nconst test = { loadExperiment };\n\nsetTimeout(() => {\n    console.log('timeout expired!');\n\tconst blogExperiment = test.loadExperiment(CONVERT_EXPERIMENT_MAPPING.CRO_BLOG_CTA_REDESIGN);\n  \tconsole.log({blogExperiment});\n  createCookie('_conv_sptest', JSON.stringify(blogExperiment));\n  \tconsole.log('cookie created!');\n  \t\n}, 1000);\n","w":0}]},"chng":["Version 2"],"active":1,"settings":[],"name":"Var #1003110917"},"1003110918":{"p":"33.334","secs":[""],"content":{"js":[{"c":function(){ 
convert._$('DIV.hsg-cards-grid__wrapper.hsg-page-width-normal > DIV.hsg-card:nth-of-type(1) > DIV.hsg-card__content > DIV.hsg-card__text').css('cssText',convert.$('DIV.hsg-cards-grid__wrapper.hsg-page-width-normal > DIV.hsg-card:nth-of-type(1) > DIV.hsg-card__content > DIV.hsg-card__text').css('cssText') + '; background-color: #1A9BF0 !important; ');

},"w":2}],"html":[{"c":"\/\/ TODO: Move to separate \"convert-experiments.js\"\nconst CONVERT_EXPERIMENT_MAPPING = {\n  CRO_BLOG_CTA_REDESIGN: {\n    experimentId: 100321518,\n    variants: {\n      1003110916: 'control',\n      1003110917: 'b',\n      1003110918: 'c',\n    },\n  },\n};\n\n\nconst waitForConvert = (msInterval = 25, timeout = 1500) => {\n  let timeElapsed = 0;\n  const promiseHandler = (resolve, reject) => {\n    if (window.convert.currentData.experiments) {\n      resolve();\n      return;\n    }\n    const interval = setInterval(() => {\n      if (timeElapsed >= timeout) {\n        clearInterval(interval);\n        reject('convert script was not loaded');\n      }\n      if (window.convert.currentData.experiments) {\n        clearInterval(interval);\n        resolve();\n      }\n      timeElapsed += msInterval;\n    }, msInterval);\n  };\n  return new Promise(promiseHandler);\n};\n\nconst isExperimentActive = experimentId => {\n  const { experiments } = window.convert.currentData || {};\n  if (!experiments) return false;\n  const activeExperimentIds = Object.keys(experiments);\n  return activeExperimentIds.indexOf(experimentId) > -1;\n};\n\nconst getActiveVariant = (experimentId) => {\n  \/\/ as of 3\/15\/2021 convert's docs aren't correct, .vars properties are not returned in order, do not use this approach\n  \/\/ (https:\/\/support.convert.com\/hc\/en-us\/articles\/360020868732-React-Serving-different-modules-based-on-Variation)\n\n  \/\/ active variant id is available in convert.currentData, confirmed by convert\n  const experimentData = window.convert.currentData.experiments[experimentId];\n  return experimentData.variation_id.toString();\n};\n\nconst HSConvertExperiment = ({ experimentId, defaultVariantId, variants }) => {\n  return new Promise((resolve) => {\n    let activeVariantId = null;\n\n    waitForConvert()\n      .then(() => {\n        const isActive = isExperimentActive(experimentId);\n\n        if (!isActive) {\n          activeVariantId = defaultVariantId;\n        } else {\n          \/\/ active experiment -> get active variant id\n          activeVariantId = getActiveVariant(experimentId);\n        }\n        console.log('hit');\n        resolve({\n          experimentId,\n          variant: variants[activeVariantId] || null,\n        });\n      })\n      .catch((error) => {\n        console.warn(error);\n        resolve({\n          experimentId,\n          variant: null,\n        });\n      });\n  });\n};\n\nsetTimeout(async () => {\n    console.log('Timeout expired!');\n\tconst blogExperiment = await HSConvertExperiment({ experimentId: \"100321518\", defaultVariantId: 1003110916, variants: { 1003110917: 'b', 1003110918: 'c' }});\n  \tconsole.log({blogExperiment});\n}, 1000);\n","w":0}]},"chng":["Version 3"],"active":1,"settings":[],"name":"Var #1003110918"}},"vars_sort":[1003110916,1003110917,1003110918]},"100326120":{"n":"Test #100326120","v":"4","id":100326120,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"offers.hubspot.com\\\/contact-sales$|offers.hubspot.com\\\/contact-sales\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[{"r":[[[{"entid":"13","compid":"6","not":true,"data":"paid","repeat":null,"timesearch":null,"visitsCountSearch":null},{"entid":"13","compid":"6","not":true,"data":"Paid","repeat":null,"timesearch":null,"visitsCountSearch":null},{"entid":"13","compid":"6","not":true,"data":"am","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"tp":"0"}],"tp":"1","integr":[],"s":"1","global_d":{"js":"convert.setCookie('saw_experiment', 'true', 30*60);"},"sets":{"minordv":0,"maxordv":99999,"split_url_settings":{"split_regex_support":true,"split_add_query_params":true,"split_query_params_hide_regex":false}},"vars":{"1003121964":{"p":"50.00","secs":[""],"content":{"js":[],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003121964"},"1003121965":{"p":"50.00","secs":[""],"content":{"js":[{"c":"\/\/varURL:https:\/\/offers.hubspot.com\/contact-sales-b$1\nREED.REED_url = 'https:\/\/offers.hubspot.com\/contact-sales-b$1';\nvar REEDlocalUrl = window.location.href;REED.REED_url = REEDlocalUrl.replace(new RegExp('https:\/\/offers.hubspot.com\/contact-sales{0,1}(([\\\\?&]{1}(.*)[^=]*[&]{0,1})*)$','i'),'https:\/\/offers.hubspot.com\/contact-sales-b$1');\nREED.REED_url = REED.REED_url.replace('&&', '&');\nREED.REED_url = REED.REED_url.replace('?&', '?');\nREED.REED_url = REED.REED_url.replace('&?', '&');\nif(REED.REED_url.indexOf('&') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}if(REED.REED_url.indexOf('?') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}REED.REED_url = REED.REED_url.match(new RegExp('http|https')) ? REED.REED_url : window.location.protocol + REED.REED_url;if(typeof(convert)!='undefined' && typeof(convert.cookieUrl)=='function') REED.REED_url = convert.cookieUrl(REED.REED_url);\nif(window.location.href!=REED.REED_url) { REED_$('html').html('<meta http-equiv=\"refresh\" content=\"0;URL=\\''+REED.REED_url+'\\'\" \/>');window.location=REED.REED_url; }","w":1}],"html":[]},"chng":["Version 2"],"active":1,"settings":{"split_url_settings":{"original_pattern":"https:\/\/offers.hubspot.com\/contact-sales{0,1}(([\\?&]{1}(.*)[^=]*[&]{0,1})*)$","variation_pattern":"https:\/\/offers.hubspot.com\/contact-sales-b$1"}},"name":"Var #1003121965"}},"vars_sort":[1003121964,1003121965]},"100326908":{"n":"Test #100326908","v":"6","id":100326908,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.es\\\/products\\\/marketing$|www.hubspot.es\\\/products\\\/marketing\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123939":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Comenzar ahora";
const topNavGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.es/products/marketing&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Solicitar demostración";
const topNavDemoURL = "https://offers.hubspot.es/demo?hubs_signup-url=www.hubspot.es/products/marketing&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Comenzar gratis";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.es/products/marketing&hubs_signup-cta=marketing-hero";
const pageHeaderGetStartedClasses = "marketing-hero";

const pageHeaderDemoText = "Solicitar demostración";
const pageHeaderDemoURL = "https://offers.hubspot.es/demo?hubs_signup-url=www.hubspot.es/products/marketing&hubs_signup-cta=marketing-hero2";
const pageHeaderDemoClasses = "marketing-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Comienza con las herramientas gratuitas";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.es/products/marketing&hubs_signup-cta=marketing-middle";
const pricingCardsGetStartedClasses = "marketing-middle";

const pricingCardsDemoText = "Pide una demostración de las ediciones prémium";
const pricingCardsDemoURL = "https://offers.hubspot.es/demo?hubs_signup-url=www.hubspot.es/products/marketing&hubs_signup-cta=marketing-middle2";
const pricingCardsDemoClasses = "marketing-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Comenzar";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.es/products/marketing&hubs_signup-cta=marketing-bottom";
const fullWidthCtaGetStartedClasses = "marketing-bottom";

const fullWidthCtaDemoText = "Solicitar demostración";
const fullWidthCtaDemoURL = "https://offers.hubspot.es/demo?hubs_signup-url=www.hubspot.es/products/marketing&hubs_signup-cta=marketing-bottom2";
const fullWidthCtaDemoClasses = "marketing-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123939"}},"vars_sort":[1003123939]},"100326910":{"n":"Test #100326910","v":"6","id":100326910,"t_r_a":[[[{"entid":"50","compid":"5","not":0,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":function(){ 
convert.setCookie('saw_experiment', 'true', 30*60);
}},"sets":{"minordv":0,"maxordv":99999},"vars":{"1003123944":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Get free tools";
const topNavGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demo premium products";
const topNavDemoURL = "https://offers.hubspot.com/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Get free tools";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-hero";
const pageHeaderGetStartedClasses = "marketing-hero";

const pageHeaderDemoText = "Demo premium products";
const pageHeaderDemoURL = "https://offers.hubspot.com/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-hero2";
const pageHeaderDemoClasses = "marketing-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Get started with free tools";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-middle";
const pricingCardsGetStartedClasses = "marketing-middle";

const pricingCardsDemoText = "Get a demo of premium products";
const pricingCardsDemoURL = "https://offers.hubspot.com/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-middle2";
const pricingCardsDemoClasses = "marketing-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Get free tools";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-bottom";
const fullWidthCtaGetStartedClasses = "marketing-bottom";

const fullWidthCtaDemoText = "Demo premium products";
const fullWidthCtaDemoURL = "https://offers.hubspot.com/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-bottom2";
const fullWidthCtaDemoClasses = "marketing-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123944"}},"vars_sort":[1003123944]},"100326914":{"n":"Test #100326914","v":"6","id":100326914,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":function(){ 
convert.setCookie('saw_experiment', 'true', 30*60);
}},"sets":{"minordv":0,"maxordv":99999},"vars":{"1003123952":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Get free tools";
const topNavGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.com/products/sales&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demo premium products";
const topNavDemoURL = "https://offers.hubspot.com/sales-demo?hubs_signup-url=www.hubspot.com/products/sales&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Get free tools";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.com/products/sales&hubs_signup-cta=sales-hero";
const pageHeaderGetStartedClasses = "sales-hero";

const pageHeaderDemoText = "Demo premium products";
const pageHeaderDemoURL = "https://offers.hubspot.com/sales-demo?hubs_signup-url=www.hubspot.com/products/sales&hubs_signup-cta=sales-hero2";
const pageHeaderDemoClasses = "sales-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Get started with free tools";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.com/products/sales&hubs_signup-cta=sales-middle";
const pricingCardsGetStartedClasses = "sales-middle";

const pricingCardsDemoText = "Get a demo of premium products";
const pricingCardsDemoURL = "https://offers.hubspot.com/sales-demo?hubs_signup-url=www.hubspot.com/products/sales&hubs_signup-cta=sales-middle2";
const pricingCardsDemoClasses = "sales-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Get free tools";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.com/products/sales&hubs_signup-cta=sales-bottom";
const fullWidthCtaGetStartedClasses = "sales-bottom";

const fullWidthCtaDemoText = "Demo premium products";
const fullWidthCtaDemoURL = "https://offers.hubspot.com/sales-demo?hubs_signup-url=www.hubspot.com/products/sales&hubs_signup-cta=sales-bottom2";
const fullWidthCtaDemoClasses = "sales-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123952"}},"vars_sort":[1003123952]},"100326915":{"n":"Test #100326915","v":"6","id":100326915,"t_r_a":[[[{"entid":"50","compid":"5","not":0,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":function(){ 
convert.setCookie('saw_experiment', 'true', 30*60);
}},"sets":{"minordv":0,"maxordv":99999},"vars":{"1003123954":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Get free tools";
const topNavGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.com/products/service&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demo premium products";
const topNavDemoURL = "https://offers.hubspot.com/service-demo?hubs_signup-url=www.hubspot.com/products/service&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Get free tools";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.com/products/service&hubs_signup-cta=service-hero";
const pageHeaderGetStartedClasses = "service-hero";

const pageHeaderDemoText = "Demo premium products";
const pageHeaderDemoURL = "https://offers.hubspot.com/service-demo?hubs_signup-url=www.hubspot.com/products/service&hubs_signup-cta=service-hero2";
const pageHeaderDemoClasses = "service-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Get started with free tools";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.com/products/service&hubs_signup-cta=service-middle";
const pricingCardsGetStartedClasses = "service-middle";

const pricingCardsDemoText = "Get a demo of premium products";
const pricingCardsDemoURL = "https://offers.hubspot.com/service-demo?hubs_signup-url=www.hubspot.com/products/service&hubs_signup-cta=service-middle2";
const pricingCardsDemoClasses = "service-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Get free tools";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.com/products/service&hubs_signup-cta=service-bottom";
const fullWidthCtaGetStartedClasses = "service-bottom";

const fullWidthCtaDemoText = "Demo premium products";
const fullWidthCtaDemoURL = "https://offers.hubspot.com/service-demo?hubs_signup-url=www.hubspot.com/products/service&hubs_signup-cta=service-bottom2";
const fullWidthCtaDemoClasses = "service-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123954"}},"vars_sort":[1003123954]},"100326916":{"n":"Test #100326916","v":"6","id":100326916,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.es\\\/products\\\/sales$|www.hubspot.es\\\/products\\\/sales\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123955":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Comenzar ahora";
const topNavGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.es/products/sales&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Solicitar demostración";
const topNavDemoURL = "https://www.hubspot.es/products/sales/demo?hubs_signup-url=www.hubspot.es/products/sales&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Comenzar";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.es/products/sales&hubs_signup-cta=sales-hero";
const pageHeaderGetStartedClasses = "sales-hero";

const pageHeaderDemoText = "Solicitar demostración";
const pageHeaderDemoURL = "https://www.hubspot.es/products/sales/demo?hubs_signup-url=www.hubspot.es/products/sales&hubs_signup-cta=sales-hero2";
const pageHeaderDemoClasses = "sales-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Comienza con las herramientas gratuitas";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.es/products/sales&hubs_signup-cta=sales-middle";
const pricingCardsGetStartedClasses = "sales-middle";

const pricingCardsDemoText = "Pide una demostración de las ediciones prémium";
const pricingCardsDemoURL = "https://www.hubspot.es/products/sales/demo?hubs_signup-url=www.hubspot.es/products/sales&hubs_signup-cta=sales-middle2";
const pricingCardsDemoClasses = "sales-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Comenzar";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.es/products/sales&hubs_signup-cta=sales-bottom";
const fullWidthCtaGetStartedClasses = "sales-bottom";

const fullWidthCtaDemoText = "Solicitar demostración";
const fullWidthCtaDemoURL = "https://www.hubspot.es/products/sales/demo?hubs_signup-url=www.hubspot.es/products/sales&hubs_signup-cta=sales-bottom2";
const fullWidthCtaDemoClasses = "sales-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123955"}},"vars_sort":[1003123955]},"100326917":{"n":"Test #100326917","v":"6","id":100326917,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.es\\\/products\\\/service$|www.hubspot.es\\\/products\\\/service\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123956":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Comenzar ahora";
const topNavGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.es/products/service&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Solicitar demostración";
const topNavDemoURL = "https://offers.hubspot.es/service-demo?hubs_signup-url=www.hubspot.es/products/service&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Comenzar";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.es/products/service&hubs_signup-cta=service-hero";
const pageHeaderGetStartedClasses = "service-hero";

const pageHeaderDemoText = "Solicitar demostración";
const pageHeaderDemoURL = "https://offers.hubspot.es/service-demo?hubs_signup-url=www.hubspot.es/products/service&hubs_signup-cta=service-hero2";
const pageHeaderDemoClasses = "service-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Comienza con las herramientas gratuitas";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.es/products/service&hubs_signup-cta=service-middle";
const pricingCardsGetStartedClasses = "service-middle";

const pricingCardsDemoText = "Pide una demostración de las ediciones prémium";
const pricingCardsDemoURL = "https://offers.hubspot.es/service-demo?hubs_signup-url=www.hubspot.es/products/service&hubs_signup-cta=service-middle2";
const pricingCardsDemoClasses = "service-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Comenzar";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.es/products/service&hubs_signup-cta=service-bottom";
const fullWidthCtaGetStartedClasses = "service-bottom";

const fullWidthCtaDemoText = "Solicitar demostración";
const fullWidthCtaDemoURL = "https://offers.hubspot.es/service-demo?hubs_signup-url=www.hubspot.es/products/service&hubs_signup-cta=service-bottom2";
const fullWidthCtaDemoClasses = "service-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123956"}},"vars_sort":[1003123956]},"100326920":{"n":"Test #100326920","v":"6","id":100326920,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.fr\\\/products\\\/marketing$|www.hubspot.fr\\\/products\\\/marketing\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123961":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Faites vos premiers pas";
const topNavGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.fr/products/marketing&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demander une démonstration";
const topNavDemoURL = "https://offers.hubspot.fr/demo?hubs_signup-url=www.hubspot.fr/products/marketing&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Faire vos premiers pas";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.fr/products/marketing&hubs_signup-cta=marketing-hero";
const pageHeaderGetStartedClasses = "marketing-hero";

const pageHeaderDemoText = "Demander une démo";
const pageHeaderDemoURL = "https://offers.hubspot.fr/demo?hubs_signup-url=www.hubspot.fr/products/marketing&hubs_signup-cta=marketing-hero2";
const pageHeaderDemoClasses = "marketing-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Faire vos premiers pas avec les outils gratuits";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.fr/products/marketing&hubs_signup-cta=marketing-middle";
const pricingCardsGetStartedClasses = "marketing-middle";

const pricingCardsDemoText = "Obtenir une démonstration des fonctionnalités premium";
const pricingCardsDemoURL = "https://offers.hubspot.fr/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-middle2";
const pricingCardsDemoClasses = "marketing-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Faire vos premiers pas";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.fr/products/marketing&hubs_signup-cta=marketing-bottom";
const fullWidthCtaGetStartedClasses = "marketing-bottom";

const fullWidthCtaDemoText = "Demander une démonstration";
const fullWidthCtaDemoURL = "https://offers.hubspot.fr/demo?hubs_signup-url=www.hubspot.fr/products/marketing&hubs_signup-cta=marketing-bottom2";
const fullWidthCtaDemoClasses = "marketing-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123961"}},"vars_sort":[1003123961]},"100326921":{"n":"Test #100326921","v":"6","id":100326921,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.fr\\\/products\\\/sales$|www.hubspot.fr\\\/products\\\/sales\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123962":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "Faites vos premiers pas";
const topNavGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.fr/products/sales&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demander une démonstration";
const topNavDemoURL = "https://www.hubspot.fr/products/sales/demo?hubs_signup-url=www.hubspot.fr/products/sales&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Faire vos premiers pas";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.fr/products/sales&hubs_signup-cta=sales-hero";
const pageHeaderGetStartedClasses = "sales-hero";

const pageHeaderDemoText = "Demander une démo";
const pageHeaderDemoURL = "https://www.hubspot.fr/products/sales/demo?hubs_signup-url=www.hubspot.fr&hubs_signup-cta=sales-hero2";
const pageHeaderDemoClasses = "sales-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Faire vos premiers pas avec les outils gratuits";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.fr/products/sales&hubs_signup-cta=sales-middle";
const pricingCardsGetStartedClasses = "sales-middle";

const pricingCardsDemoText = "Obtenir une démonstration des fonctionnalités premium";
const pricingCardsDemoURL = "https://www.hubspot.fr/products/sales/demo?hubs_signup-url=www.hubspot.fr&hubs_signup-cta=sales-middle2";
const pricingCardsDemoClasses = "sales-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Faire vos premiers pas";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.fr/products/sales&hubs_signup-cta=sales-bottom";
const fullWidthCtaGetStartedClasses = "sales-bottom";

const fullWidthCtaDemoText = "Demander une démonstration";
const fullWidthCtaDemoURL = "https://www.hubspot.fr/products/sales/demo?hubs_signup-url=www.hubspot.fr&hubs_signup-cta=sales-bottom2";
const fullWidthCtaDemoClasses = "sales-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123962"}},"vars_sort":[1003123962]},"100326922":{"n":"Test #100326922","v":"6","id":100326922,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.fr\\\/products\\\/service$|www.hubspot.fr\\\/products\\\/service\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123963":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "Faites vos premiers pas";
const topNavGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.fr/products/service&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demander une démonstration";
const topNavDemoURL = "https://offers.hubspot.fr/service-demo?hubs_signup-url=www.hubspot.fr/products/service&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Faire vos premiers pas";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.fr/products/service&hubs_signup-cta=service-hero";
const pageHeaderGetStartedClasses = "service-hero";

const pageHeaderDemoText = "Demander une démo";
const pageHeaderDemoURL = "https://offers.hubspot.fr/service-demo?hubs_signup-url=www.hubspot.fr/products/service&hubs_signup-cta=service-hero2";
const pageHeaderDemoClasses = "service-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Faire vos premiers pas avec les outils gratuits";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.fr/products/service&hubs_signup-cta=service-middle";
const pricingCardsGetStartedClasses = "service-middle";

const pricingCardsDemoText = "Obtenir une démonstration des fonctionnalités premium";
const pricingCardsDemoURL = "https://offers.hubspot.fr/service-demo?hubs_signup-url=www.hubspot.fr/products/service&hubs_signup-cta=service-middle2";
const pricingCardsDemoClasses = "service-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Faire vos premiers pas";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.fr/products/service&hubs_signup-cta=service-bottom";
const fullWidthCtaGetStartedClasses = "service-bottom";

const fullWidthCtaDemoText = "Demander une démonstration";
const fullWidthCtaDemoURL = "https://offers.hubspot.fr/service-demo?hubs_signup-url=www.hubspot.fr/products/service&hubs_signup-cta=service-bottom2";
const fullWidthCtaDemoClasses = "service-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123963"}},"vars_sort":[1003123963]},"100326923":{"n":"Test #100326923","v":"6","id":100326923,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.de\\\/products\\\/service$|www.hubspot.de\\\/products\\\/service\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123964":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Jetzt kostenlos starten";
const topNavGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.de/products/service&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demo anfordern";
const topNavDemoURL = "https://offers.hubspot.de/service-demo?hubs_signup-url=www.hubspot.de/products/service&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Jetzt kostenlos einrichten";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.de/products/service&hubs_signup-cta=service-hero";
const pageHeaderGetStartedClasses = "service-hero";

const pageHeaderDemoText = "Demo anfordern";
const pageHeaderDemoURL = "https://offers.hubspot.de/service-demo?hubs_signup-url=www.hubspot.de/products/service&hubs_signup-cta=service-hero2";
const pageHeaderDemoClasses = "service-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Kostenlos einsteigen";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.de/products/service&hubs_signup-cta=service-middle";
const pricingCardsGetStartedClasses = "service-middle";

const pricingCardsDemoText = "Demo der Premium-Versionen anfragen";
const pricingCardsDemoURL = "https://offers.hubspot.de/service-demo?hubs_signup-url=www.hubspot.de/products/service&hubs_signup-cta=service-middle2";
const pricingCardsDemoClasses = "service-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Jetzt loslegen";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.de/products/service&hubs_signup-cta=service-bottom";
const fullWidthCtaGetStartedClasses = "service-bottom";

const fullWidthCtaDemoText = "Demo anfordern";
const fullWidthCtaDemoURL = "https://offers.hubspot.de/service-demo?hubs_signup-url=www.hubspot.de/products/service&hubs_signup-cta=service-bottom2";
const fullWidthCtaDemoClasses = "service-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123964"}},"vars_sort":[1003123964]},"100326926":{"n":"Test #100326926","v":"6","id":100326926,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.jp\\\/products\\\/service$|www.hubspot.jp\\\/products\\\/service\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123969":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "試してみる";
const topNavGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.jp/products/service&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "デモを申し込む";
const topNavDemoURL = "https://offers.hubspot.jp/service-demo?hubs_signup-url=www.hubspot.jp/products/service&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "無料で試してみる→";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.jp/products/service&hubs_signup-cta=service-hero";
const pageHeaderGetStartedClasses = "service-hero";

const pageHeaderDemoText = "デモを申し込む";
const pageHeaderDemoURL = "https://offers.hubspot.jp/service-demo?hubs_signup-url=www.hubspot.jp/products/service&hubs_signup-cta=service-hero2";
const pageHeaderDemoClasses = "service-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "無料で試してみる→";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.jp/products/service&hubs_signup-cta=service-middle";
const pricingCardsGetStartedClasses = "service-middle";

const pricingCardsDemoText = "有料プランのデモを申し込む→";
const pricingCardsDemoURL = "https://offers.hubspot.jp/service-demo?hubs_signup-url=www.hubspot.jp/products/service&hubs_signup-cta=service-middle2";
const pricingCardsDemoClasses = "service-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "無料で試してみる→";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=www.hubspot.jp/products/service&hubs_signup-cta=service-bottom";
const fullWidthCtaGetStartedClasses = "service-bottom";

const fullWidthCtaDemoText = "デモを申し込む";
const fullWidthCtaDemoURL = "https://offers.hubspot.jp/service-demo?hubs_signup-url=www.hubspot.jp/products/service&hubs_signup-cta=service-bottom2";
const fullWidthCtaDemoClasses = "service-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123969"}},"vars_sort":[1003123969]},"100326927":{"n":"Test #100326927","v":"6","id":100326927,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"br.hubspot.com\\\/products\\\/service$|br.hubspot.com\\\/products\\\/service\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123970":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "Comece agora";
const topNavGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=br.hubspot.com/products/service&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Assista a uma demonstração";
const topNavDemoURL = "https://br.hubspot.com/ofertas/service-demo?hubs_signup-url=br.hubspot.com/products/service&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Comece a usar";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=br.hubspot.com/products/service&hubs_signup-cta=service-hero";
const pageHeaderGetStartedClasses = "service-hero";

const pageHeaderDemoText = "Peça uma demonstração";
const pageHeaderDemoURL = "https://br.hubspot.com/ofertas/service-demo?hubs_signup-url=br.hubspot.com/products/service&hubs_signup-cta=service-hero2";
const pageHeaderDemoClasses = "service-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Comece a usar as ferramentas gratuitas";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=br.hubspot.com/products/service&hubs_signup-cta=service-middle";
const pricingCardsGetStartedClasses = "service-middle";

const pricingCardsDemoText = "Solicite uma demonstração das edições premium";
const pricingCardsDemoURL = "https://br.hubspot.com/ofertas/service-demo?hubs_signup-url=br.hubspot.com/products/service&hubs_signup-cta=service-middle2";
const pricingCardsDemoClasses = "service-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Comece a usar";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/service?hubs_signup-url=br.hubspot.com/products/service&hubs_signup-cta=service-bottom";
const fullWidthCtaGetStartedClasses = "service-bottom";

const fullWidthCtaDemoText = "Solicite uma demonstração";
const fullWidthCtaDemoURL = "https://br.hubspot.com/ofertas/service-demo?hubs_signup-url=br.hubspot.com/products/service&hubs_signup-cta=service-bottom2";
const fullWidthCtaDemoClasses = "service-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123970"}},"vars_sort":[1003123970]},"100326928":{"n":"Test #100326928","v":"6","id":100326928,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"br.hubspot.com\\\/products\\\/marketing$|br.hubspot.com\\\/products\\\/marketing\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123971":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "Comece agora";
const topNavGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=br.hubspot.com/products/marketing&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Assista a uma demonstração";
const topNavDemoURL = "https://br.hubspot.com/ofertas/demo?hubs_signup-url=br.hubspot.com/products/marketing&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Comece a usar";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=br.hubspot.com/products/marketing&hubs_signup-cta=marketing-hero";
const pageHeaderGetStartedClasses = "marketing-hero";

const pageHeaderDemoText = "Peça uma demonstração";
const pageHeaderDemoURL = "https://br.hubspot.com/ofertas/demo?hubs_signup-url=br.hubspot.com/products/marketing&hubs_signup-cta=marketing-hero2";
const pageHeaderDemoClasses = "marketing-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Comece a usar as ferramentas gratuitas";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=br.hubspot.com/products/marketing&hubs_signup-cta=marketing-middle";
const pricingCardsGetStartedClasses = "marketing-middle";

const pricingCardsDemoText = "Solicite uma demonstração das edições premium";
const pricingCardsDemoURL = "https://br.hubspot.com/ofertas/demo?hubs_signup-url=br.hubspot.com/products/marketing&hubs_signup-cta=marketing-middle2";
const pricingCardsDemoClasses = "marketing-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Comece a usar";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=br.hubspot.com/products/marketing&hubs_signup-cta=marketing-bottom";
const fullWidthCtaGetStartedClasses = "marketing-bottom";

const fullWidthCtaDemoText = "Assista a uma demonstração";
const fullWidthCtaDemoURL = "https://br.hubspot.com/ofertas/demo?hubs_signup-url=br.hubspot.com/products/marketing&hubs_signup-cta=marketing-bottom2";
const fullWidthCtaDemoClasses = "marketing-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123971"}},"vars_sort":[1003123971]},"100326929":{"n":"Test #100326929","v":"6","id":100326929,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.jp\\\/products\\\/marketing$|www.hubspot.jp\\\/products\\\/marketing\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123972":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "試してみる";
const topNavGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.jp/products/marketing&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "デモを申し込む";
const topNavDemoURL = "https://offers.hubspot.jp/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "無料で試してみる→";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.jp/products/marketing&hubs_signup-cta=marketing-hero";
const pageHeaderGetStartedClasses = "marketing-hero";

const pageHeaderDemoText = "デモを申し込む";
const pageHeaderDemoURL = "https://offers.hubspot.jp/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-hero2";
const pageHeaderDemoClasses = "marketing-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "無料で試してみる→";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.jp/products/marketing&hubs_signup-cta=marketing-middle";
const pricingCardsGetStartedClasses = "marketing-middle";

const pricingCardsDemoText = "有料プランのデモを申し込む→";
const pricingCardsDemoURL = "https://offers.hubspot.jp/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-middle2";
const pricingCardsDemoClasses = "marketing-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "無料で試してみる→";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.jp/products/marketing&hubs_signup-cta=marketing-bottom";
const fullWidthCtaGetStartedClasses = "marketing-bottom";

const fullWidthCtaDemoText = "デモを申し込む";
const fullWidthCtaDemoURL = "https://offers.hubspot.jp/demo?hubs_signup-url=www.hubspot.com/products/marketing&hubs_signup-cta=marketing-bottom2";
const fullWidthCtaDemoClasses = "marketing-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123972"}},"vars_sort":[1003123972]},"100326930":{"n":"Test #100326930","v":"6","id":100326930,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.de\\\/products\\\/marketing$|www.hubspot.de\\\/products\\\/marketing\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123973":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "Jetzt kostenlos starten";
const topNavGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.de/products/marketing&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demo anfordern";
const topNavDemoURL = "https://offers.hubspot.de/demo?hubs_signup-url=www.hubspot.de/products/marketing&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Jetzt kostenlos einrichten";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.de/products/marketing&hubs_signup-cta=marketing-hero";
const pageHeaderGetStartedClasses = "marketing-hero";

const pageHeaderDemoText = "Demo anfordern";
const pageHeaderDemoURL = "https://offers.hubspot.de/demo?hubs_signup-url=www.hubspot.de/products/marketing&hubs_signup-cta=marketing-hero2";
const pageHeaderDemoClasses = "marketing-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Kostenlos einsteigen";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.de/products/marketing&hubs_signup-cta=marketing-middle";
const pricingCardsGetStartedClasses = "marketing-middle";

const pricingCardsDemoText = "Demo der Premium-Versionen anfragen";
const pricingCardsDemoURL = "https://offers.hubspot.de/demo?hubs_signup-url=www.hubspot.de/products/marketing&hubs_signup-cta=marketing-middle2";
const pricingCardsDemoClasses = "marketing-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Jetzt loslegen";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup-hubspot/marketing?hubs_signup-url=www.hubspot.de/products/marketing&hubs_signup-cta=marketing-bottom";
const fullWidthCtaGetStartedClasses = "marketing-bottom";

const fullWidthCtaDemoText = "Demo anfordern";
const fullWidthCtaDemoURL = "https://offers.hubspot.de/demo?hubs_signup-url=www.hubspot.de/products/marketing&hubs_signup-cta=marketing-bottom2";
const fullWidthCtaDemoClasses = "marketing-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123973"}},"vars_sort":[1003123973]},"100326932":{"n":"Test #100326932","v":"6","id":100326932,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.de\\\/products\\\/sales$|www.hubspot.de\\\/products\\\/sales\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123976":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
// Top Nav
const topNavGetStartedText = "Jetzt kostenlos starten";
const topNavGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.de/products/sales&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Demo anfordern";
const topNavDemoURL = "https://www.hubspot.de/products/sales/demo?hubs_signup-url=www.hubspot.de/products/sales&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Jetzt kostenlos einrichten";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.de/products/sales&hubs_signup-cta=sales-hero";
const pageHeaderGetStartedClasses = "sales-hero";

const pageHeaderDemoText = "Demo anfordern";
const pageHeaderDemoURL = "https://www.hubspot.de/products/sales/demo?hubs_signup-url=www.hubspot.de/products/sales&hubs_signup-cta=sales-hero2";
const pageHeaderDemoClasses = "sales-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Kostenlos einsteigen";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.de/products/sales&hubs_signup-cta=sales-middle";
const pricingCardsGetStartedClasses = "sales-middle";

const pricingCardsDemoText = "Demo der Premium-Versionen anfragen";
const pricingCardsDemoURL = "https://www.hubspot.de/products/sales/demo?hubs_signup-url=www.hubspot.de/products/sales&hubs_signup-cta=sales-middle2";
const pricingCardsDemoClasses = "sales-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Jetzt loslegen";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.de/products/sales&hubs_signup-cta=sales-bottom";
const fullWidthCtaGetStartedClasses = "sales-bottom";

const fullWidthCtaDemoText = "Demo anfordern";
const fullWidthCtaDemoURL = "https://www.hubspot.de/products/sales/demo?hubs_signup-url=www.hubspot.de/products/sales&hubs_signup-cta=sales-bottom2";
const fullWidthCtaDemoClasses = "sales-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123976"}},"vars_sort":[1003123976]},"100326933":{"n":"Test #100326933","v":"6","id":100326933,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.jp\\\/products\\\/sales$|www.hubspot.jp\\\/products\\\/sales\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123977":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "試してみる";
const topNavGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.jp/products/sales&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "デモを申し込む";
const topNavDemoURL = "https://www.hubspot.jp/products/sales/demo?hubs_signup-url=www.hubspot.jp/products/sales&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "無料で試してみる→";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.jp/products/sales&hubs_signup-cta=sales-hero";
const pageHeaderGetStartedClasses = "sales-hero";

const pageHeaderDemoText = "デモを申し込む";
const pageHeaderDemoURL = "https://www.hubspot.jp/products/sales/demo?hubs_signup-url=www.hubspot.jp/products/sales&hubs_signup-cta=sales-hero2";
const pageHeaderDemoClasses = "sales-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "無料で試してみる→";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.jp/products/sales&hubs_signup-cta=sales-middle";
const pricingCardsGetStartedClasses = "sales-middle";

const pricingCardsDemoText = "有料プランのデモを申し込む→";
const pricingCardsDemoURL = "https://www.hubspot.jp/products/sales/demo?hubs_signup-url=www.hubspot.jp/products/sales&hubs_signup-cta=sales-middle2";
const pricingCardsDemoClasses = "sales-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "無料で試してみる→";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=www.hubspot.jp/products/sales&hubs_signup-cta=sales-bottom";
const fullWidthCtaGetStartedClasses = "sales-bottom";

const fullWidthCtaDemoText = "デモを申し込む";
const fullWidthCtaDemoURL = "https://www.hubspot.jp/products/sales/demo?hubs_signup-url=www.hubspot.jp/products/sales&hubs_signup-cta=sales-bottom2";
const fullWidthCtaDemoClasses = "sales-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123977"}},"vars_sort":[1003123977]},"100326935":{"n":"Test #100326935","v":"6","id":100326935,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"br.hubspot.com\\\/products\\\/sales$|br.hubspot.com\\\/products\\\/sales\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"4","integr":[],"s":"1","global_d":{"js":""},"sets":[],"vars":{"1003123980":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 // Top Nav
const topNavGetStartedText = "Comece agora";
const topNavGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=br.hubspot.com/products/sales&hubs_signup-cta=homepage-nav";
const topNavGetStartedClasses = "homepage-nav";

const topNavDemoText = "Assista a uma demonstração";
const topNavDemoURL = "https://br.hubspot.com/products/sales/demo?hubs_signup-url=br.hubspot.com/products/sales&hubs_signup-cta=homepage-nav2";
const topNavDemoClasses = "homepage-nav2";

// Page Header
const pageHeaderGetStartedText = "Comece a usar";
const pageHeaderGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=br.hubspot.com/products/sales&hubs_signup-cta=sales-hero";
const pageHeaderGetStartedClasses = "sales-hero";

const pageHeaderDemoText = "Peça uma demonstração";
const pageHeaderDemoURL = "https://br.hubspot.com/products/sales/demo?hubs_signup-url=br.hubspot.com/products/sales&hubs_signup-cta=sales-hero2";
const pageHeaderDemoClasses = "sales-hero2";

// Pricing Cards
const pricingCardsGetStartedText = "Comece a usar as ferramentas gratuitas";
const pricingCardsGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=br.hubspot.com/products/sales&hubs_signup-cta=sales-middle";
const pricingCardsGetStartedClasses = "sales-middle";

const pricingCardsDemoText = "Solicite uma demonstração das edições premium";
const pricingCardsDemoURL = "https://br.hubspot.com/products/sales/demo?hubs_signup-url=br.hubspot.com/products/sales&hubs_signup-cta=sales-middle2";
const pricingCardsDemoClasses = "sales-middle2";

// Full-Width CTA
const fullWidthCtaGetStartedText = "Comece a usar";
const fullWidthCtaGetStartedURL = "https://app.hubspot.com/signup/sales?hubs_signup-url=br.hubspot.com/products/sales&hubs_signup-cta=sales-bottom";
const fullWidthCtaGetStartedClasses = "sales-bottom";

const fullWidthCtaDemoText = "Assista a uma demonstração";
const fullWidthCtaDemoURL = "https://br.hubspot.com/products/sales/demo?hubs_signup-url=br.hubspot.com/products/sales&hubs_signup-cta=sales-bottom2";
const fullWidthCtaDemoClasses = "sales-bottom2";

function manipulateTopNavDOM() {
    const ctaNavCtaGroup = convert._$(".hsg-nav__group-item--cta");
    let ctaNavGetStarted = convert._$(".hsg-nav__group-item--cta .cta--primary");

    if (ctaNavGetStarted.length > 0 && ctaNavCtaGroup.length > 0) {
        ctaNavGetStarted = ctaNavGetStarted.clone();
        ctaNavGetStarted.removeClass("cta cta--primary");
        ctaNavGetStarted.addClass(`cta--features cta--secondary ${topNavGetStartedClasses}`);
        ctaNavGetStarted.attr("href", topNavGetStartedURL);
        ctaNavGetStarted.text(topNavGetStartedText);

        const ctaNavDemo = document.createElement("a");
        ctaNavDemo.className = `cta--features cta--regular cta--primary ${topNavDemoClasses}`;
        ctaNavDemo.href = topNavDemoURL;
        ctaNavDemo.innerText = topNavDemoText;

      	ctaNavCtaGroup.empty();
        ctaNavCtaGroup.append(ctaNavGetStarted);
        ctaNavCtaGroup.append(ctaNavDemo);
    }
}

function manipulateProductCoreHeaderDOM() {
    let productCoreHeaderCTAGetStarted = convert._$(".product-core-header__text--cta");
    const productCoreHeaderTitle = convert._$(".product-core-header__text-title");

    if (productCoreHeaderCTAGetStarted.length > 0 && productCoreHeaderTitle.length > 0) {
        const productCoreHeaderCTAGetStartedClone = productCoreHeaderCTAGetStarted.clone();
        productCoreHeaderCTAGetStarted.remove();
        productCoreHeaderCTAGetStartedClone.removeClass("product-core-header__text--cta cta--primary");
        productCoreHeaderCTAGetStartedClone.addClass(`cta--secondary product-core-header__text--cta-secondary product-core-header__text-multi-cta ${pageHeaderGetStartedClasses}`);
        productCoreHeaderCTAGetStartedClone.text(pageHeaderGetStartedText);
        productCoreHeaderCTAGetStartedClone.attr("href", pageHeaderGetStartedURL);
        productCoreHeaderCTAGetStartedClone.css({
            'margin-right': '0.5rem',
            'margin-bottom': '1rem',
            'padding': '0.9em 0.6em',
        });

        const productCoreHeaderCTADemo = document.createElement("a");
        productCoreHeaderCTADemo.className = `cta--primary product-core-header__text--cta product-core-header__text-multi-cta ${pageHeaderDemoClasses}`;
        productCoreHeaderCTADemo.href = pageHeaderDemoURL;
        productCoreHeaderCTADemo.innerText = pageHeaderDemoText;
        productCoreHeaderCTADemo.style.padding = '0.9em 0.6em';
    
        productCoreHeaderTitle.after(productCoreHeaderCTADemo);
        productCoreHeaderTitle.after(productCoreHeaderCTAGetStartedClone);
    }
}

function manipulateProductEditionGridDOM() {
    let productEditionGridCTAGetStarted = convert._$(".product-editions__ctas--get-started");
    let productEditionGridCTADemo = convert._$(".product-editions__ctas--demo");
    let productEditionGridCTAs = convert._$(".product-editions__ctas");

    if (productEditionGridCTAGetStarted.length > 0 && productEditionGridCTADemo.length > 0 && productEditionGridCTAs.length > 0) {
        productEditionGridCTAGetStarted = productEditionGridCTAGetStarted.clone();
        productEditionGridCTAGetStarted.removeClass("cta--primary product-editions__ctas--get-started");
        productEditionGridCTAGetStarted.addClass(`cta--secondary product-editions__ctas--demo ${pricingCardsGetStartedClasses}`);
        productEditionGridCTAGetStarted.text(pricingCardsGetStartedText);
        productEditionGridCTAGetStarted.attr("href", pricingCardsGetStartedURL);
        productEditionGridCTAGetStarted.css({
            'margin-right': '1rem',
            'margin-bottom': '1rem',
        });

        productEditionGridCTADemo = productEditionGridCTADemo.clone();
        productEditionGridCTADemo.removeClass("cta--secondary product-editions__ctas--demo");
        productEditionGridCTADemo.addClass(`cta--primary product-editions__ctas--get-started ${pricingCardsDemoClasses}`);
        productEditionGridCTADemo.text(pricingCardsDemoText);
        productEditionGridCTADemo.attr("href", pricingCardsDemoURL);

        productEditionGridCTAs.empty();
        productEditionGridCTAs.append(productEditionGridCTAGetStarted);
        productEditionGridCTAs.append(productEditionGridCTADemo);
    }
}

function manipulateFullWidthCTADOM() {
    const fullWidthCTAGetStarted = convert._$(".hsg-full-width-cta__buttons .cta--primary");

    if (fullWidthCTAGetStarted.length > 0) {
        fullWidthCTAGetStarted.removeClass("cta--primary");
        fullWidthCTAGetStarted.addClass(`cta--secondary ${fullWidthCtaGetStartedClasses}`);
        fullWidthCTAGetStarted.text(fullWidthCtaGetStartedText);
        fullWidthCTAGetStarted.attr("href", fullWidthCtaGetStartedURL);
        fullWidthCTAGetStarted.css({
            'background-color': '#fff',
            'color': '#ff7a59',
        });

        const fullWidthCTADemo = document.createElement("a");
        fullWidthCTADemo.className = `cta--medium cta--primary ${fullWidthCtaDemoClasses}`;
        fullWidthCTADemo.href = fullWidthCtaDemoURL;
        fullWidthCTADemo.innerText = fullWidthCtaDemoText;
        fullWidthCTADemo.style.backgroundColor = '#ff7a59';
        fullWidthCTADemo.style.color = '#fff';
        fullWidthCTAGetStarted.after(fullWidthCTADemo);
    }
}

manipulateTopNavDOM();
manipulateProductCoreHeaderDOM();
manipulateProductEditionGridDOM();
manipulateFullWidthCTADOM();
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003123980"}},"vars_sort":[1003123980]},"100327121":{"n":"Test #100327121","v":"6","id":100327121,"t_r_a":[[[{"entid":"31","compid":"4","not":false,"data":"https:\/\/www.hubspot.com\/crm\/e010a?utm_medium=paid&utm_source=facebook&utm_term=crm_EN&utm_campaign=Integrations_Portals_EN_Various_Various_Prospecting_LinkedInAds"},{"entid":"31","compid":"8","not":false,"data":"https:\/\/www.hubspot.com\/crm\/e010a?utm_medium=paid&utm_source=facebook&utm_term=crm_EN&utm_campaign=Integrations_Portals_EN_Various_Various_Prospecting_LinkedInAds&fbclid="}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"1","integr":[],"s":"1","global_d":{"js":""},"sets":{"split_url_settings":{"split_regex_support":true,"split_add_query_params":true,"split_query_params_hide_regex":false}},"vars":{"1003124411":{"p":"50.00","secs":[],"content":{"js":[],"html":[]},"chng":[""],"active":0,"name":"Var #1003124411"},"1003124412":{"p":"50.00","secs":[""],"content":{"js":[{"c":function(){ 
//varURL:https://www.hubspot.com/crm/linkedin-f527?$3
REED.REED_url = 'https://www.hubspot.com/crm/linkedin-f527?$3';
var REEDlocalUrl = window.location.href;REED.REED_url = REEDlocalUrl.replace(new RegExp('https://www.hubspot.com/crm/e010a/{0,1}(([?&]{1}(.*)[^=]*[&]{0,1})*)$','i'),'https://www.hubspot.com/crm/linkedin-f527?$3');
REED.REED_url = REED.REED_url.replace('&&', '&');
REED.REED_url = REED.REED_url.replace('?&', '?');
REED.REED_url = REED.REED_url.replace('&?', '&');
if(REED.REED_url.indexOf('&') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}if(REED.REED_url.indexOf('?') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}REED.REED_url = REED.REED_url.match(new RegExp('http|https')) ? REED.REED_url : window.location.protocol + REED.REED_url;if(typeof(convert)!='undefined' && typeof(convert.cookieUrl)=='function') REED.REED_url = convert.cookieUrl(REED.REED_url);
if(window.location.href!=REED.REED_url) { REED_$('html').html('<meta http-equiv="refresh" content="0;URL=\''+REED.REED_url+'\'" />');window.location=REED.REED_url; }
},"w":1}],"html":[]},"chng":["Version 2"],"active":1,"settings":{"split_url_settings":{"original_pattern":"https:\/\/www.hubspot.com\/crm\/e010a\/{0,1}(([?&]{1}(.*)[^=]*[&]{0,1})*)$","variation_pattern":"https:\/\/www.hubspot.com\/crm\/linkedin-f527?$3"}},"name":"Var #1003124412"}},"vars_sort":[1003124411,1003124412]},"100327140":{"n":"Test #100327140","v":"6","id":100327140,"t_r_a":[[[{"entid":"31","compid":"4","not":false,"data":"https:\/\/www.hubspot.com\/crm\/e010a?utm_medium=paid&utm_source=facebook&utm_term=crm_EN&utm_campaign=Integrations_Portals_EN_APAC_India_Prospecting_LinkedInAds"},{"entid":"31","compid":"8","not":false,"data":"https:\/\/www.hubspot.com\/crm\/e010a?utm_medium=paid&utm_source=facebook&utm_term=crm_EN&utm_campaign=Integrations_Portals_EN_APAC_India_Prospecting_LinkedInAds&fbclid="}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"1","integr":[],"s":"1","global_d":{"js":""},"sets":{"minordv":0,"maxordv":0,"split_url_settings":{"split_regex_support":true,"split_add_query_params":true,"split_query_params_hide_regex":false}},"vars":{"1003124466":{"p":"50.00","secs":[],"content":{"js":[],"html":[]},"chng":[""],"active":0,"name":"Var #1003124466"},"1003124467":{"p":"50.00","secs":[""],"content":{"js":[{"c":function(){ 
//varURL:https://www.hubspot.com/crm/linkedin-f527?$3
REED.REED_url = 'https://www.hubspot.com/crm/linkedin-f527?$3';
var REEDlocalUrl = window.location.href;REED.REED_url = REEDlocalUrl.replace(new RegExp('https://www.hubspot.com/crm/e010a/{0,1}(([?&]{1}(.*)[^=]*[&]{0,1})*)$','i'),'https://www.hubspot.com/crm/linkedin-f527?$3');
REED.REED_url = REED.REED_url.replace('&&', '&');
REED.REED_url = REED.REED_url.replace('?&', '?');
REED.REED_url = REED.REED_url.replace('&?', '&');
if(REED.REED_url.indexOf('&') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}if(REED.REED_url.indexOf('?') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}REED.REED_url = REED.REED_url.match(new RegExp('http|https')) ? REED.REED_url : window.location.protocol + REED.REED_url;if(typeof(convert)!='undefined' && typeof(convert.cookieUrl)=='function') REED.REED_url = convert.cookieUrl(REED.REED_url);
if(window.location.href!=REED.REED_url) { REED_$('html').html('<meta http-equiv="refresh" content="0;URL=\''+REED.REED_url+'\'" />');window.location=REED.REED_url; }
},"w":1}],"html":[]},"chng":["Version 2"],"active":1,"settings":{"split_url_settings":{"original_pattern":"https:\/\/www.hubspot.com\/crm\/e010a\/{0,1}(([?&]{1}(.*)[^=]*[&]{0,1})*)$","variation_pattern":"https:\/\/www.hubspot.com\/crm\/linkedin-f527?$3"}},"name":"Var #1003124467"}},"vars_sort":[1003124466,1003124467]},"100327264":{"n":"Test #100327264","v":"6","id":100327264,"t_r_a":[[[{"entid":"50","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/wordpress$|www.hubspot.com\\\/products\\\/wordpress\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[{"r":[[[{"entid":"13","compid":"6","not":true,"data":"paid","repeat":null,"timesearch":null,"visitsCountSearch":null},{"entid":"13","compid":"6","not":true,"data":"Paid","repeat":null,"timesearch":null,"visitsCountSearch":null},{"entid":"13","compid":"6","not":true,"data":"am","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"tp":"0"}],"tp":"1","integr":[],"s":"1","global_d":{"js":""},"sets":{"minordv":0,"maxordv":0,"split_url_settings":{"split_regex_support":true,"split_add_query_params":true,"split_query_params_hide_regex":false}},"vars":{"1003124744":{"p":"50.00","secs":[""],"content":{"js":[],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003124744"},"1003124745":{"p":"50.00","secs":[""],"content":{"js":[{"c":function(){ 
//varURL:https://www.hubspot.com/products/wordpress-var2$1
REED.REED_url = 'https://www.hubspot.com/products/wordpress-var2$1';
var REEDlocalUrl = window.location.href;REED.REED_url = REEDlocalUrl.replace(new RegExp('https://www.hubspot.com/products/wordpress{0,1}(([\\?&]{1}(.*)[^=]*[&]{0,1})*)$','i'),'https://www.hubspot.com/products/wordpress-var2$1');
REED.REED_url = REED.REED_url.replace('&&', '&');
REED.REED_url = REED.REED_url.replace('?&', '?');
REED.REED_url = REED.REED_url.replace('&?', '&');
if(REED.REED_url.indexOf('&') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}if(REED.REED_url.indexOf('?') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}REED.REED_url = REED.REED_url.match(new RegExp('http|https')) ? REED.REED_url : window.location.protocol + REED.REED_url;if(typeof(convert)!='undefined' && typeof(convert.cookieUrl)=='function') REED.REED_url = convert.cookieUrl(REED.REED_url);
if(window.location.href!=REED.REED_url) { REED_$('html').html('<meta http-equiv="refresh" content="0;URL=\''+REED.REED_url+'\'" />');window.location=REED.REED_url; }
},"w":1}],"html":[]},"chng":["Version 2"],"active":1,"settings":{"split_url_settings":{"original_pattern":"https:\/\/www.hubspot.com\/products\/wordpress{0,1}(([\\?&]{1}(.*)[^=]*[&]{0,1})*)$","variation_pattern":"https:\/\/www.hubspot.com\/products\/wordpress-var2$1"}},"name":"Var #1003124745"}},"vars_sort":[1003124744,1003124745]},"100327676":{"n":"Test #100327676","v":"6","id":100327676,"t_r_a":[[[{"entid":"31","compid":"5","not":0,"data":"www.hubspot.jp\/pa\/crm$|www.hubspot.jp\/pa\/crm\\?"}]]],"t_r_f":[],"t_seg":[],"t_ad_r":[],"tp":"1","integr":[],"s":"1","global_d":{"js":""},"sets":{"minordv":"0","maxordv":"99999","split_url_settings":{"split_regex_support":true,"split_add_query_params":true,"split_query_params_hide_regex":false},"regexsupport":"1","urlvarssupport":"1"},"vars":{"1003125695":{"p":"50.00","secs":[""],"content":{"js":[],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #1003125695"},"1003125696":{"p":"50.00","secs":[""],"content":{"js":[{"c":function(){ 
//varURL:www.hubspot.jp/pa/crm-37?$3
REED.REED_url = 'www.hubspot.jp/pa/crm-37?$3';
var REEDlocalUrl = window.location.href;REED.REED_url = REEDlocalUrl.replace(new RegExp('www.hubspot.jp/pa/crm|www.hubspot.jp/pa/crm?/{0,1}(([\\?&]{1}(.*)[^=]*[&]{0,1})*)$','i'),'www.hubspot.jp/pa/crm-37?$3');
REED.REED_url = REED.REED_url.replace('&&', '&');
REED.REED_url = REED.REED_url.replace('?&', '?');
REED.REED_url = REED.REED_url.replace('&?', '&');
if(REED.REED_url.indexOf('&') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}if(REED.REED_url.indexOf('?') === (REED.REED_url.length - 1)) {REED.REED_url = REED.REED_url.substring(0, (REED.REED_url.length - 1));}REED.REED_url = REED.REED_url.match(new RegExp('http|https')) ? REED.REED_url : window.location.protocol + REED.REED_url;if(typeof(convert)!='undefined' && typeof(convert.cookieUrl)=='function') REED.REED_url = convert.cookieUrl(REED.REED_url);
if(window.location.href!=REED.REED_url) { REED_$('html').html('<meta http-equiv="refresh" content="0;URL=\''+REED.REED_url+'\'" />');window.location=REED.REED_url; }
},"w":1}],"html":[]},"chng":["Version 2"],"active":1,"settings":{"split_url_settings":{"original_pattern":"www.hubspot.jp\/pa\/crm|www.hubspot.jp\/pa\/crm?\/{0,1}(([\\?&]{1}(.*)[^=]*[&]{0,1})*)$","variation_pattern":"www.hubspot.jp\/pa\/crm-37?$3"}},"name":"Var #1003125696"}},"vars_sort":[1003125695,1003125696]}},"goals":{"10033808":{"add":[[[{"entid":16,"compid":"3","not":1,"data":1,"dn":null,"repeat":1,"timesearch":0,"visitsCountSearch":0},{"entid":18,"compid":"3","not":1,"data":10,"dn":null,"repeat":1,"timesearch":0,"visitsCountSearch":0}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":1},"10037808":{"add":[],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"submit","s":"form[action='https:\/\/forms.hsforms.com\/submissions\/v3\/public\/submit\/formsnext\/multipart\/53\/8c4a85f3-f3bb-4881-a8f8-b58ac0b36049']"}]},"isbounce":0},"10038020":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"offers.hubspot.com\/thank-you\/.*","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"10038021":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/get-started$|www.hubspot.com\\\/products\\\/get-started\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"submit","s":"form[action='https:\/\/forms.hsforms.com\/submissions\/v3\/public\/submit\/formsnext\/multipart\/53\/33a37ef5-1777-4fee-b52c-bd2c46bcc575']"}]},"isbounce":0},"10038022":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/get-started$|www.hubspot.com\\\/products\\\/get-started\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"submit","s":"form[action='https:\/\/forms.hsforms.com\/submissions\/v3\/public\/submit\/formsnext\/multipart\/53\/c679a859-cd70-4032-89cd-8fba8603cd72']"}]},"isbounce":0},"10038023":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/get-started$|www.hubspot.com\\\/products\\\/get-started\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"submit","s":"form[action='https:\/\/forms.hsforms.com\/submissions\/v3\/public\/submit\/formsnext\/multipart\/53\/a8457796-655a-4643-b772-7bf3d2b04a32']"}]},"isbounce":0},"10038024":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/get-started$|www.hubspot.com\\\/products\\\/get-started\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"submit","s":"form[action='https:\/\/forms.hsforms.com\/submissions\/v3\/public\/submit\/formsnext\/multipart\/53\/8c4a85f3-f3bb-4881-a8f8-b58ac0b36049']"}]},"isbounce":0},"10038025":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"offers.hubspot.com\\\/demo$|offers.hubspot.com\\\/demo\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"submit","s":"form[action='https:\/\/forms.hsforms.com\/submissions\/v3\/public\/submit\/formsnext\/multipart\/53\/33a37ef5-1777-4fee-b52c-bd2c46bcc575']"}]},"isbounce":0},"10038026":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"offers.hubspot.com\\\/sales-demo$|offers.hubspot.com\\\/sales-demo\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"submit","s":"form[action='https:\/\/forms.hsforms.com\/submissions\/v3\/public\/submit\/formsnext\/multipart\/53\/c679a859-cd70-4032-89cd-8fba8603cd72']"}]},"isbounce":0},"10038027":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"offers.hubspot.com\\\/service-demo$|offers.hubspot.com\\\/service-demo\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"submit","s":"form[action='https:\/\/forms.hsforms.com\/submissions\/v3\/public\/submit\/formsnext\/multipart\/53\/a8457796-655a-4643-b772-7bf3d2b04a32']"}]},"isbounce":0},"10038684":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038685":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038686":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038687":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038688":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038689":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038690":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038691":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038692":{"add":[],"vpoints":"0","tp":1,"sts":[],"isbounce":0},"10038938":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing\\\/get-started$|www.hubspot.com\\\/products\\\/marketing\\\/get-started\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":"a.marketing-getstarted-demo"}]},"isbounce":0},"10038940":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales\\\/get-started$|www.hubspot.com\\\/products\\\/sales\\\/get-started\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":"a.sales-getstarted-demo"}]},"isbounce":0},"100317630":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".homepage-nav"}]},"isbounce":0},"100317633":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".homepage-nav2"}]},"isbounce":0},"100317635":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".marketing-hero"}]},"isbounce":0},"100317638":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".marketing-hero2"}]},"isbounce":0},"100317640":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".marketing-middle"}]},"isbounce":0},"100317643":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".marketing-middle2"}]},"isbounce":0},"100317646":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".marketing-bottom"}]},"isbounce":0},"100317649":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/marketing$|www.hubspot.com\\\/products\\\/marketing\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".marketing-bottom2"}]},"isbounce":0},"100317651":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317630,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038687,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317652":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317630,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038025,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317653":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317633,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038025,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317659":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317635,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038687,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317660":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317635,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038025,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317661":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317638,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038025,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317662":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317640,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038687,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317663":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317643,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038025,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317664":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317646,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038687,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317665":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317646,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038025,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317666":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317649,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038025,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317686":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".homepage-nav"}]},"isbounce":0},"100317687":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".homepage-nav2"}]},"isbounce":0},"100317688":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".sales-hero"}]},"isbounce":0},"100317689":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".sales-hero2"}]},"isbounce":0},"100317690":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".sales-middle"}]},"isbounce":0},"100317691":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".sales-middle2"}]},"isbounce":0},"100317692":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".sales-bottom"}]},"isbounce":0},"100317693":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/sales$|www.hubspot.com\\\/products\\\/sales\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".sales-bottom2"}]},"isbounce":0},"100317694":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317686,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038685,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317695":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317686,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038026,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317696":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317687,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038026,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317699":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317688,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038685,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317700":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317688,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038026,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317701":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317689,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038026,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317702":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317690,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038685,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317703":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317691,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038026,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317704":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317692,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038685,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317705":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317692,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038026,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317706":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317693,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038026,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317709":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".homepage-nav"}]},"isbounce":0},"100317710":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".homepage-nav2"}]},"isbounce":0},"100317711":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".service-hero"}]},"isbounce":0},"100317712":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".service-hero2"}]},"isbounce":0},"100317713":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".service-middle"}]},"isbounce":0},"100317714":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".service-middle2"}]},"isbounce":0},"100317715":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".service-bottom"}]},"isbounce":0},"100317716":{"add":[[[{"entid":"31","compid":"5","not":false,"data":"www.hubspot.com\\\/products\\\/service$|www.hubspot.com\\\/products\\\/service\\?","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".service-bottom2"}]},"isbounce":0},"100317718":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317709,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038686,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317719":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317709,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038027,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317721":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317710,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038027,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317722":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317711,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038686,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317723":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317711,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038027,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317724":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317712,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038027,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317725":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317713,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038686,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317726":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317714,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038027,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317727":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317715,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038686,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317728":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317715,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038027,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100317729":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100317716,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038027,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100318756":{"add":[],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".contactsales-chat"}]},"isbounce":0},"100318757":{"add":[],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":".contactsales-meeting"}]},"isbounce":0},"100319008":{"add":[[[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","compid":"10","not":false,"data":10038692,"repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0},"100319009":{"add":[[[{"entid":"60","compid":"10","not":false,"data":100318757,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"53","compid":"4","dn":"saw_experiment","not":false,"data":"true","repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"60","data":10038692,"not":false,"compid":"10","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"vpoints":"0","tp":0,"sts":[],"isbounce":0}},"specgoals":{"bounce":10033808},"segments":{"10031564":{"id":"10031564","r":[[[{"compid":"1","data":"1","dn":"","entid":"22","not":"0","jscode":""}]]],"r_tp":"1"}},"entities":{"1":{"entity_id":"1","group_id":"1","nice_name":"browser"},"2":{"entity_id":"2","group_id":"1","nice_name":"browserV"},"3":{"entity_id":"3","group_id":"1","nice_name":"os"},"4":{"entity_id":"4","group_id":"1","nice_name":"flash"},"5":{"entity_id":"5","group_id":"1","nice_name":"java"},"6":{"entity_id":"6","group_id":"1","nice_name":"screenColor"},"7":{"entity_id":"7","group_id":"1","nice_name":"screenResolution"},"10":{"entity_id":"10","group_id":"2","nice_name":"landingPage"},"11":{"entity_id":"11","group_id":"3","nice_name":"keyword"},"12":{"entity_id":"12","group_id":"3","nice_name":"sourceName"},"13":{"entity_id":"13","group_id":"3","nice_name":"referalMedium"},"14":{"entity_id":"14","group_id":"3","nice_name":"referalPath"},"15":{"entity_id":"15","group_id":"5","nice_name":"dayHour"},"16":{"entity_id":"16","group_id":"4","nice_name":"pageDepth"},"17":{"entity_id":"17","group_id":"4","nice_name":"daysLastVisit"},"18":{"entity_id":"18","group_id":"4","nice_name":"visitDuration"},"19":{"entity_id":"19","group_id":"4","nice_name":"timeOnPage"},"20":{"entity_id":"20","group_id":"4","nice_name":"avgTimeOnPAge"},"21":{"entity_id":"21","group_id":"4","nice_name":"visitKnown"},"22":{"entity_id":"22","group_id":"4","nice_name":"countVisits"},"24":{"entity_id":"24","group_id":"4","nice_name":"city"},"25":{"entity_id":"25","group_id":"4","nice_name":"country"},"26":{"entity_id":"26","group_id":"4","nice_name":"language"},"27":{"entity_id":"27","group_id":"4","nice_name":"region"},"28":{"entity_id":"28","group_id":"4","nice_name":"segment"},"29":{"entity_id":"29","group_id":"2","nice_name":"queryString"},"31":{"entity_id":"31","group_id":"2","nice_name":"pageUrl"},"33":{"entity_id":"33","group_id":"4","nice_name":"visitorPoints"},"34":{"entity_id":"34","group_id":"5","nice_name":"weekDay"},"35":{"entity_id":"35","group_id":"5","nice_name":"ptzWeekDay"},"36":{"entity_id":"36","group_id":"5","nice_name":"ptzDayHour"},"37":{"entity_id":"37","group_id":"5","nice_name":"minute"},"38":{"entity_id":"38","group_id":"5","nice_name":"tzMinute"},"39":{"entity_id":"39","group_id":"6","nice_name":"v0"},"40":{"entity_id":"40","group_id":"6","nice_name":"v1"},"41":{"entity_id":"41","group_id":"6","nice_name":"v2"},"42":{"entity_id":"42","group_id":"6","nice_name":"v3"},"43":{"entity_id":"43","group_id":"6","nice_name":"v4"},"44":{"entity_id":"44","group_id":"6","nice_name":"v41"},"45":{"entity_id":"45","group_id":"6","nice_name":"v5"},"46":{"entity_id":"46","group_id":"6","nice_name":"cv1"},"47":{"entity_id":"47","group_id":"6","nice_name":"cv2"},"48":{"entity_id":"48","group_id":"6","nice_name":"cv3"},"49":{"entity_id":"49","group_id":"6","nice_name":"cv4"},"50":{"entity_id":"50","group_id":"2","nice_name":"pageUrl1"},"51":{"entity_id":"51","group_id":"1","nice_name":"useragent"},"52":{"entity_id":"52","group_id":"4","nice_name":"testedVisitor"},"53":{"entity_id":"53","group_id":"4","nice_name":"cookie"},"54":{"entity_id":"54","group_id":"6","nice_name":"jscondition"},"55":{"entity_id":"55","group_id":"1","nice_name":"deviceMobile"},"56":{"entity_id":"56","group_id":"1","nice_name":"deviceTablet"},"57":{"entity_id":"57","group_id":"1","nice_name":"deviceDesktop"},"58":{"entity_id":"58","group_id":"3","nice_name":"referalCampaign"},"59":{"entity_id":"59","group_id":"7","nice_name":"weatherCondition"},"60":{"entity_id":"60","group_id":"4","nice_name":"goal"},"61":{"entity_id":"61","group_id":"4","nice_name":"bucketedSegment"}},"eclean":["100321478","100321604","100321618","100321773","100321775","100321776","100322241","100322424","100323891","100324165","100324993","100325195","100325446","100325729","100325767","100325935","100327079"],"comparisons":{"1":{"comparison_id":"1","module_name":"equal"},"2":{"comparison_id":"2","module_name":"less"},"3":{"comparison_id":"3","module_name":"lessEqual"},"4":{"comparison_id":"4","module_name":"matches"},"5":{"comparison_id":"5","module_name":"regeMatches"},"6":{"comparison_id":"6","module_name":"contains"},"7":{"comparison_id":"7","module_name":"endsWith"},"8":{"comparison_id":"8","module_name":"startsWith"},"9":{"comparison_id":"9","module_name":"isIn"},"10":{"comparison_id":"10","module_name":"equal"},"11":{"comparison_id":"11","module_name":"commaSepStringsContains"},"12":{"comparison_id":"12","module_name":"contains"}}};
(function(){var a=!0,g=null,h=!1;function p(b){return function(){return this[b]}}function t(b){return function(){return b}}var v=this;Math.random();var aa=Date.now||function(){return+new Date};function w(b,c){var d=b.split("."),e=v;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)!d.length&&void 0!==c?e[f]=c:e=e[f]?e[f]:e[f]={}};var A={plugins:{}};A.plugins.ta={};A.plugins.ta.za=function(b){try{b=b.replace(/[^a-zA-Z\-_\.\s0-9]/g,""),b=b.substr(0,100)}catch(c){}return b};A.plugins.ta.We=50;
A.plugins.ta.he=function(){var b=[],c=[],d;for(d in A.o.experiments)if(A.o.experiments.hasOwnProperty(d)&&!("undefined"==typeof A.data.experiments[d].integr.clicktale||"0"==A.data.experiments[d].integr.clicktale||!A.data.experiments[d].integr.clicktale)){var e=A.o.experiments[d].variation_name,e="Convert: "+A.plugins.ta.za(A.data.experiments[d].n)+" - "+A.plugins.Na.za(e);d=d+"_"+A.o.experiments[d].variation_id;try{"function"==typeof window.ClickTaleEvent?window.ClickTaleEvent(e):b.push(e),"function"==
typeof window.ClickTaleField?window.ClickTaleField("convert_e",d):c.push({name:"convert_e",value:d})}catch(f){}break}var k=0;(0<b.length||0<c.length)&&setTimeout(function m(){k++;if("function"==typeof window.ClickTaleEvent&&"function"==typeof window.ClickTaleField){for(var d=0,e=b.length;d<e;d++)window.ClickTaleEvent(b[d]);d=0;for(e=c.length;d<e;d++)window.ClickTaleField(c[d].name,c[d].value)}else k<=A.plugins.ta.We&&setTimeout(m,200)},10)};A.plugins.ta.Ve=20;
A.plugins.ta.ge=function(){function b(){c++;"function"!=typeof window.ClickTaleIsPlayback||"object"!=typeof window.ClickTaleContext||"function"!=typeof window.ClickTaleContext.getRecordingContextAsync?A.plugins.ta.Ve>=c&&setTimeout(function(){b()},200):window.ClickTaleIsPlayback()&&("object"==typeof window.ClickTaleContext&&"function"==typeof window.ClickTaleContext.getRecordingContextAsync)&&window.ClickTaleContext.getRecordingContextAsync("1.1",function(b){"undefined"!=typeof b.fields.convert_e&&
(b=b.fields.convert_e.split("_"),A.Nd(b[0],b[1]))})}var c=0;b()};A.f={};A.f.Oa=[];A.f.Eb=[];A.f.Uc={};A.f.Rc=h;A.f.ed=h;A.f.Fb=[];A.f.Ed=h;A.f.dd={};A.f.Vc={};A.f.Tb=h;A.f.Aa=function(){A.f.ed||(A.a.G.yc("goals_executed",A.I.$d),A.f.ed=a);for(var b in A.data.goals)A.data.goals.hasOwnProperty(b)&&A.f.Mc(b);0!=A.f.Oa.length?A.lc():(A.a.G.wa("goals_executed"),A.I.Nb.goals=1);A.f.vc();A.f.cf()};A.f.ef=function(){A.f.Aa()};w("convert.recheck_goals",A.f.ef);
A.f.ye=function(){if(!(A.f.Rc||0==A.f.Oa.length)){A.f.Rc=a;for(var b=0,c=A.f.Oa.length;b<c;b++)A.f.Mc(A.f.Oa[b]);A.f.vc(a);A.a.G.wa("goals_executed");A.I.Nb.goals=1;A.f.Oa=[]}};
A.f.cf=function(){!A.f.Ed&&0!=A.f.Fb.length&&(A.h(window).bind("scroll",function(){if(!A.f.Tb){for(var b=Math.ceil(100*(A.h(window).scrollTop()/(A.h(document).height()-A.h(window).height()))),c=0,d=A.f.Fb.length;c<d;c++){var e=A.f.Fb[c];b>=A.data.goals[e].sts.percentage&&!A.f.dd["g-"+e]&&(B.push(["triggerConversion",e]),A.f.dd["g-"+e]=a)}A.f.Tb=a}}),setInterval(function(){A.f.Tb&&(A.f.Tb=h)},200),A.f.Ed=a)};A.f.Ab=0;A.f.Wc=g;
A.f.vc=function(b){"undefined"==typeof b&&(b=h);A.h(document).ready(function(){if(!b||!(0<A.f.Ab&&A.f.Wc)){A.f.Ab++;A.k.gc=a;A.k.eb!=g&&(clearTimeout(A.k.eb),A.k.yb());for(var c=function(b,c){try{A.h(A.data.goals[b].sts.evts[c].s).each(function(){"click"==A.data.goals[b].sts.evts[c].ev&&A.h(this);A.h(this).bind(A.data.goals[b].sts.evts[c].ev,function(){A.Ia(b);try{"a"==this.tagName.toLowerCase()&&(-1!=this.href.indexOf("http")&&this.getAttribute&&!this.getAttribute("target"))&&A.a.j.pe()}catch(c){}})})}catch(d){}},
d=function(b,c){if("function"==typeof A.h(document).on)A.h(document).on(A.data.goals[c].sts.evts[b].ev,A.data.goals[c].sts.evts[b].s,function(){A.Ia(c)})},e=[],f=0,k=A.f.Eb.length;f<k;f++){var l=A.f.Eb[f];if(A.f.Uc[l])return;if(!("object"!=typeof A.data.goals[l].sts||"undefined"==typeof A.data.goals[l].sts.evts)){for(var m=a,r=0,x=A.data.goals[l].sts.evts.length;r<x;r++)A.f.Vc[l]||d(r,l),"undefined"!=typeof A.data.goals[l].sts.evts[r].binded&&A.data.goals[l].sts.evts[r].binded||(0>=A.h(A.data.goals[l].sts.evts[r].s).length?
m=h:(A.data.goals[l].sts.evts[r].binded=a,c(l,r)));A.f.Vc[l]=a;m?A.f.Uc[l]=1:e.push(l)}}A.f.Eb=e;0<e.length&&55>=A.f.Ab?A.f.Wc=setTimeout(function(){A.f.vc()},200):A.f.Ab=56}})};
A.f.Mc=function(b){var c=D(),d=h,e=G,f;for(f in e.b)if(e.b.hasOwnProperty(f)&&"1"!=e.b[f].v&&"undefined"==typeof e.b[f].g[b]&&"undefined"!=typeof A.data.experiments[f]){d=a;break}if(d||!(2>A.data.prj.domainsCount))if(d=h,A.data.goals[b].add&&0!=A.data.goals[b].add.length?d=c.Va(A.data.goals[b].add):0==A.data.goals[b].add.length&&(d=a),-1===d)A.f.Oa.push(b);else if(-2!==d)switch(A.data.goals[b].tp){case "1":case 1:break;case 2:case "2":case 3:case "3":if(d||0===A.data.goals[b].add.length)2==A.data.goals[b].tp?
A.f.Eb.push(b):3==A.data.goals[b].tp&&A.f.Fb.push(b);break;default:d&&G.Cc(b)}};A.f.Ia=function(b,c){G.Cc(b,c)};A.plugins.fd={};
A.plugins.fd.df=function(){var b;A.J.N.gtm&&A.J.N.gtm.dlv&&("string"==typeof A.J.N.gtm.dlv?("undefined"==typeof window[A.J.N.gtm.dlv]&&(window[A.J.N.gtm.dlv]=[]),b=window[A.J.N.gtm.dlv]):"function"==typeof A.J.N.gtm.dlv?b=A.J.N.gtm.dlv():"object"==typeof A.J.N.gtm.dlv&&(b=A.J.N.gtm.dlv));b||("undefined"==typeof window.dataLayer&&(window.dataLayer=[]),b=window.dataLayer);b=b||[];for(var c in A.o.experiments)if(A.o.experiments.hasOwnProperty(c)){var d=A.o.experiments[c],e;if(A.data.prj.extset.d_anon)e=d.variation_name;
else{if(1>d.variation_name_parts.changes.length)break;if(1==d.variation_name_parts.changes.length)e=d.variation_name_parts.changes[0];else{e="";for(var f=0,k=d.variation_name_parts.changes.length;f<k;f++)e+="/"+d.variation_name_parts.changes[f].replace(/\s{2,}/g,"_").replace(/\s/g,"_").replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$|[^a-zA-Z0-9\s-_]/g,"");e=e.substr(1)}}d={event:"convert-trigger-experiment-"+c,experiment_id:c,variation_name:e};try{d.gadimension=A.data.experiments[c].integr.ga_cv_s.s.d}catch(l){}b.push(d)}};A.plugins.Z={};A.plugins.Jb={};
A.plugins.Z.process_sitecatalyst=function(){A.h(document).ready(function(){var b,c=window.convert.data.experiments,d=h,e=window.s,f;for(f in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(f)&&!("undefined"==typeof A.data.experiments[f].integr.sitecatalyst||"0"==A.data.experiments[f].integr.sitecatalyst||!A.data.experiments[f].integr.sitecatalyst)){var k=window.convert.currentData.experiments[f],d=c[f]&&c[f].n?c[f].n:"unknown experiment name",d=d.replace("Test #",
"Test "),k=k.variation_name?k.variation_name:"unknown variant",k=k.replace("Var #","Variation ");try{var l=A.data.experiments[f].integr;l&&("undefined"!=typeof l.sitecatalyst_s&&"undefined"!=typeof l.sitecatalyst_s.evar)&&(b=l.sitecatalyst_s.evar)}catch(m){}A.J.N.sitecatalyst&&A.J.N.sitecatalyst.s_var&&("string"==typeof A.J.N.sitecatalyst.s_var?e=window[A.J.N.sitecatalyst.s_var]:"function"==typeof A.J.N.sitecatalyst.s_var?e=A.J.N.sitecatalyst.s_var():"object"==typeof A.J.N.sitecatalyst.s_var&&(e=
A.J.N.sitecatalyst.s_var));if("undefined"==typeof e){A.plugins.Jb.zc||(A.plugins.Jb.zc=0);6>A.plugins.Jb.zc&&setTimeout(function(){A.plugins.Jb.zc++;try{A.plugins.Z.process_sitecatalyst()}catch(b){}},500);return}e["eVar"+b]="Convert - "+d+" - "+k;d=a}d&&e.tl()})};
A.plugins.Z.process_baidu=function(){window._hmt=window._hmt||[];var b=h,c,d=window.convert.data.experiments,e;for(e in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(e)&&!("undefined"==typeof A.data.experiments[e].integr.baidu||"0"==A.data.experiments[e].integr.baidu||!A.data.experiments[e].integr.baidu)){var f=window.convert.currentData.experiments[e],b=d[e]&&d[e].M?d[e].M:"unknown experiment name",b=b.replace("Test #","Test "),f=f.variation_name?
f.variation_name:"unknown variant",f=f.replace("Var #","Variation ");try{var k=A.data.experiments[e].integr;k&&("undefined"!=typeof k.cnnz&&"undefined"!=typeof k.cnnz.cd)&&(c=k.baidu.cd)}catch(l){}window._hmt.push(["_setCustomVar",c,b,f,1]);b=a}b&&window._hmt.push(["_trackEvent","ConvertEvent",testName,variationName,0,1])};
A.plugins.Z.process_clicky=function(){if(window.clicky_custom!=g){window.clicky_custom.visitor={};window.clicky_custom.visitor_keys_cookie=[];var b=window.convert.data.experiments,c;for(c in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(c)&&!("undefined"==typeof A.data.experiments[c].integr.clicky||"0"==A.data.experiments[c].integr.clicky||!A.data.experiments[c].integr.clicky)){var d=window.convert.currentData.experiments[c],e=b[c]&&b[c].M?b[c].M:
"unknown experiment name",e=e.replace("Test #","Test "),d=d.variation_name?d.variation_name:"unknown variant",d=d.replace("Var #","Variation ");window.clicky_custom.visitor["test"+e]=e;window.clicky_custom.visitor["variation"+d]=d;window.clicky_custom.visitor_keys_cookie.push("test"+e);window.clicky_custom.visitor_keys_cookie.push("variation"+d)}}};
A.plugins.Z.process_cnzz=function(){window._czc=window._czc||[];var b,c=h,d=window.convert.data.experiments,e;for(e in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(e)&&!("undefined"==typeof A.data.experiments[e].integr.cnnz||"0"==A.data.experiments[e].integr.cnnz||!A.data.experiments[e].integr.cnnz)){var c=window.convert.currentData.experiments[e],f=d[e]&&d[e].M?d[e].M:"unknown experiment name",f=f.replace("Test #","Test "),k=c.variation_name?c.variation_name:
"unknown variant",k=k.replace("Var #","Variation ");try{var l=A.data.experiments[e].integr;l&&("undefined"!=typeof l.cnnz&&"undefined"!=typeof l.cnnz.cd)&&(b=l.cnnz.cd)}catch(m){}window._czc.push(["_setCustomVar",b,f,k,1]);c=a}c&&window._czc.push(["_trackEvent","Convert Events",f,k,0,a])};
A.plugins.Z.process_econda=function(){try{"undefined"==typeof window.emosGlobalProperties&&(window.emosGlobalProperties={});window.emosGlobalProperties.abtest=window.emosGlobalProperties.abtest||[];var b=window.convert.data.experiments,c;for(c in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(c)&&!("undefined"==typeof A.data.experiments[c].integr.econda||"0"==A.data.experiments[c].integr.econda||!A.data.experiments[c].integr.econda)){var d=window.convert.currentData.experiments[c],
e=b[c]&&b[c].n?b[c].n:"unknown experiment name",e=e.replace("Test #","Test "),f=d.variation_name?d.variation_name:"unknown variant",f=f.replace("Var #","Variation ");window.emosGlobalProperties.abtest.push([e,f])}"function"==typeof window.emosPropertiesEvent&&0<window.emosGlobalProperties.abtest.length&&window.emosPropertiesEvent({})}catch(k){}finally{}};
A.plugins.Z.process_eulerian=function(){var b=window.convert.data.experiments,c;for(c in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(c)&&!("undefined"==typeof A.data.experiments[c].integr.eulerian||"0"==A.data.experiments[c].integr.eulerian||!A.data.experiments[c].integr.eulerian)){var d=window.convert.currentData.experiments[c];(b[c]&&b[c].M?b[c].M:"unknown experiment name").replace("Test #","Test ");d=d.variation_name?d.variation_name:"unknown variant";
d=d.replace("Var #","Variation ");window._oEa.uparam({Pf:d})}};
A.plugins.Z.process_gosquared=function(){var b=h;if("function"==typeof window._gs){var c={},d=window.convert.data.experiments,e;for(e in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(e)&&!("undefined"==typeof A.data.experiments[e].integr.gosquared||"0"==A.data.experiments[e].integr.gosquared||!A.data.experiments[e].integr.gosquared))b=window.convert.currentData.experiments[e],(d[e]&&d[e].M?d[e].M:"unknown experiment name").replace("Test #","Test "),
b=b.variation_name?b.variation_name:"unknown variant",b=b.replace("Var #","Variation "),c["Test"+e]=b,b=a;b&&window._gs("set","visitor",c)}};
A.plugins.Z.process_heapanalytics=function(){A.h(document).ready(function(){var b=h;if(window.heap!=g&&"function"==typeof window.heap.track){var c={},d=window.convert.data.experiments,e;for(e in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(e)&&!("undefined"==typeof A.data.experiments[e].integr.heapanalytics||"0"==A.data.experiments[e].integr.heapanalytics||!A.data.experiments[e].integr.heapanalytics))b=window.convert.currentData.experiments[e],(d[e]&&
d[e].M?d[e].M:"unknown experiment name").replace("Test #","Test "),b=b.variation_name?b.variation_name:"unknown variant",b=b.replace("Var #","Variation "),c["Test"+e]=b,b=a;b&&window.heap.track("Convert Event",c)}})};
A.plugins.Z.process_mouseflow=function(){var b=window.convert.data.experiments;if(window._mfq&&"function"==typeof window._mfq.push)for(var c in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(c)&&!("undefined"==typeof A.data.experiments[c].integr.mouseflow||"0"==A.data.experiments[c].integr.mouseflow||!A.data.experiments[c].integr.mouseflow)){var d=window.convert.currentData.experiments[c];(b[c]&&b[c].M?b[c].M:"unknown experiment name").replace("Test #",
"Test ");d=d.variation_name?d.variation_name:"unknown variant";d=d.replace("Var #","Variation ");window._mfq.push(["setVariable","Test"+c,d])}};
A.plugins.Z.process_piwik=function(){var b=h,c,d=window.convert.data.experiments;window._paq=window._paq||[];for(var e in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(e)&&!("undefined"==typeof A.data.experiments[e].integr.piwik||"0"==A.data.experiments[e].integr.piwik||!A.data.experiments[e].integr.piwik)){var f=window.convert.currentData.experiments[e],b=d[e]&&d[e].M?d[e].M:"unknown experiment name",b=b.replace("Test #","Test "),f=f.variation_name?
f.variation_name:"unknown variant",f=f.replace("Var #","Variation ");try{var k=A.data.experiments[e].integr;k&&("undefined"!=typeof k.piwik&&"undefined"!=typeof k.piwik.cd)&&(c=k.piwik.cd)}catch(l){}window._paq.push(["setCustomVariable",c,b,f,"visit"]);b=a}b&&window._paq.push(["trackPageView"])};
A.plugins.Z.process_segmentio=function(){var b=h,c;for(c in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(c)&&!("undefined"==typeof A.data.experiments[c].integr.segmentio||"0"==A.data.experiments[c].integr.segmentio||!A.data.experiments[c].integr.segmentio)){b=a;break}b&&A.a.j.Qd("segioint","analytics",function(){var b=h,c={},f=window.convert.data.experiments,k;for(k in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(k)&&
!("undefined"==typeof A.data.experiments[k].integr.segmentio||"0"==A.data.experiments[k].integr.segmentio||!A.data.experiments[k].integr.segmentio))b=window.convert.currentData.experiments[k],(f[k]&&f[k].M?f[k].M:"unknown experiment name").replace("Test #","Test "),b=b.variation_name?b.variation_name:"unknown variant",b=b.replace("Var #","Variation "),c["Test"+k]=b,b=a;b&&window.analytics.track("Convert Event",c)},50)};
A.plugins.Z.process_yandex=function(){window.yaParams=window.yaParams||[];window.yaParams={Cf:"["+testId+"]"+mainTestName+" - ["+variationNumber+"]"+variationName}};
A.plugins.Z.process_ysance=function(){window._wt1Q=window._wt1Q||[];var b,c=window.convert.data.experiments;window._paq=window._paq||[];for(var d in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(d)&&!("undefined"==typeof A.data.experiments[d].integr.ysance||"0"==A.data.experiments[d].integr.ysance||!A.data.experiments[d].integr.ysance)){var e=window.convert.currentData.experiments[d],f=c[d]&&c[d].M?c[d].M:"unknown experiment name",f=f.replace("Test #",
"Test "),e=e.variation_name?e.variation_name:"unknown variant",e=e.replace("Var #","Variation ");try{var k=A.data.experiments[d].integr;k&&("undefined"!=typeof k.ysance&&"undefined"!=typeof k.ysance.cd)&&(b=k.ysance.cd)}catch(l){}window._wt1Q.push(["setCustomData",b,f+"-"+e])}};A.plugins.Z.process_webtrends=function(){};
A.plugins.Z.process_woopra=function(){var b=h;if(window.woopra!=g&&window.woopra.track!=g){var c={},d=window.convert.data.experiments,e;for(e in window.convert.currentData.experiments)if(window.convert.currentData.experiments.hasOwnProperty(e)&&!("undefined"==typeof A.data.experiments[e].integr.woopra||"0"==A.data.experiments[e].integr.woopra||!A.data.experiments[e].integr.woopra))b=window.convert.currentData.experiments[e],(d[e]&&d[e].M?d[e].M:"unknown experiment name").replace("Test #","Test "),
b=b.variation_name?b.variation_name:"unknown variant",b=b.replace("Var #","Variation "),c["Test"+e]=b,b=a;b&&window.woopra.track("Convert Event",c)}};A.J={};A.J.N={};
A.J.uf=function(){try{A.h(document).ready(function(){var b=h,c;for(c in A.o.experiments)if(A.o.experiments.hasOwnProperty(c)){try{"1"==A.data.experiments[c].integr.ga_cv&&(b=a)}catch(d){}try{"1"==A.data.experiments[c].integr.ga_ce&&(b=a)}catch(e){}if(b)break}if(b)try{A.plugins.F.nf()}catch(f){}})}catch(b){}try{"undefined"!=typeof A.data.prj.extset.integr&&(A.data.prj.extset.integr&&"undefined"!=typeof A.data.prj.extset.integr.km&&1==A.data.prj.extset.integr.km)&&A.h(document).ready(function(){try{A.plugins.pd.se()}catch(b){}})}catch(c){}try{A.plugins.ud.ue()}catch(d){}try{A.plugins.Na.re()}catch(e){}try{A.plugins.td.te()}catch(f){}try{A.plugins.ta.he()}catch(k){}try{A.plugins.fd.df()}catch(l){}try{A.plugins.kb.we()}catch(m){}A.h(document).ready(function(){for(var b="sitecatalyst baidu clicky cnzz econda eulerian gosquared heapanalytics mouseflow piwik segmentio ysance woopra".split(" "),
c=0;c<b.length;c++)try{A.plugins.Z["process_"+b[c]]()}catch(d){}})};A.a={};A.a.u={};A.a.u.i={};A.a.u.get=function(){try{A.a.u.Fe(),A.a.u.He(),A.a.u.Oe(),A.a.u.Ge(),A.a.u.Ne(),A.a.u.Je()}catch(b){}};A.a.u.jf=function(){A.a.u.get();return A.a.u.i};w("convert.getDefaultSegments",A.a.u.jf);A.a.u.Fe=function(){switch(H.La.browser){case "IE":case "EDG":case "IE":A.a.u.i.browser="IE";break;case "CH":A.a.u.i.browser="CH";break;case "FF":A.a.u.i.browser="FF";break;case "OP":A.a.u.i.browser="OP";break;case "SF":A.a.u.i.browser="SF";break;default:A.a.u.i.browser="OTH"}};
A.a.u.He=function(){A.a.u.i.devices=[];1==window.convertData.dev.mobile&&0==window.convertData.dev.tablet&&A.a.u.i.devices.push("ALLPH");1==window.convertData.dev.mobile&&(/iPhone/.test(navigator.userAgent)&&!window.Xb)&&A.a.u.i.devices.push("IPH");1==window.convertData.dev.mobile&&(0==window.convertData.dev.tablet&&(!/iPhone/.test(navigator.userAgent)||window.Xb))&&A.a.u.i.devices.push("OTHPH");1==window.convertData.dev.tablet&&A.a.u.i.devices.push("ALLTAB");1==window.convertData.dev.tablet&&(/iPad/.test(navigator.userAgent)&&
!window.Xb)&&A.a.u.i.devices.push("IPAD");1==window.convertData.dev.tablet&&(!/iPad/.test(navigator.userAgent)||window.Xb)&&A.a.u.i.devices.push("OTHTAB");1==window.convertData.dev.desktop&&A.a.u.i.devices.push("DESK");0==window.convertData.dev.desktop&&(0==window.convertData.dev.mobile&&0==window.convertData.dev.tablet)&&A.a.u.i.devices.push("OTHDEV")};A.a.u.Oe=function(){var b=G;A.a.u.i.source="cpc google"==b.la||""!=b.Ma?"Campaign":"organic"==b.la?"Search":"referral"==b.la?"referral":"direct"};
A.a.u.Ge=function(){A.a.u.i.campaign=G.Ma};A.a.u.Ne=function(){A.a.u.i["new"]=G.Pb?0:1};A.a.u.Je=function(){A.a.u.i.ctry=G.Sa.country};A.a.u.Mf=function(){};A.a.H={};A.a.H.equal=function(b,c,d){return A.a.H.returnNegationCheck(b==c,"undefined"!==typeof d?d:0)};A.a.H.contains=function(b,c,d){d="undefined"!==typeof d?d:0;b=new String(b);c=new String(c);b=b.valueOf().toLowerCase();c=c.valueOf().toLowerCase();return""==A.h.trim(c)?A.a.H.returnNegationCheck(a,d):-1!==b.indexOf(c)?A.a.H.returnNegationCheck(a,d):A.a.H.returnNegationCheck(h,d)};
A.a.H.less=function(b,c,d){b=new Number(b);c=new Number(c);return A.a.H.returnNegationCheck(b<c,"undefined"!==typeof d?d:0)};A.a.H.lessEqual=function(b,c,d){b=new Number(b);c=new Number(c);return A.a.H.returnNegationCheck(b<=c,"undefined"!==typeof d?d:0)};A.a.H.matches=function(b,c,d){b=new String(b);c=new String(c);b=b.valueOf().toLowerCase();c=c.valueOf().toLowerCase();return A.a.H.returnNegationCheck(b===c,"undefined"!==typeof d?d:0)};
A.a.H.regeMatches=function(b,c,d){d="undefined"!==typeof d?d:0;b=new String(b);c=new String(c);b=b.valueOf().toLowerCase();c=c.valueOf();return RegExp(c,"i").test(b)?A.a.H.returnNegationCheck(a,d):A.a.H.returnNegationCheck(h,d)};A.a.H.startsWith=function(b,c,d){d="undefined"!==typeof d?d:0;b=new String(b);c=new String(c);b=b.valueOf().toLowerCase();c=c.valueOf().toLowerCase();return 0===b.indexOf(c)?A.a.H.returnNegationCheck(a,d):A.a.H.returnNegationCheck(h,d)};
A.a.H.endsWith=function(b,c,d){d="undefined"!==typeof d?d:0;b=new String(b);c=new String(c);b=b.toLowerCase();c=c.toLowerCase();b=b.valueOf().toLowerCase();c=c.valueOf().toLowerCase();return-1!==b.indexOf(c,b.length-c.length)?A.a.H.returnNegationCheck(a,d):A.a.H.returnNegationCheck(h,d)};A.a.H.isIn=function(b,c,d){d="undefined"!==typeof d?d:0;c=c.split("|");"array"!=typeof b&&(b=[]);for(var e=0;e<c.length;e++)if(!A.h.inArray(c[e],b)&&0==d||A.h.inArray(c[e],b)&&1==d)return h;return a};
A.a.H.commaSepStringsContains=function(b,c,d){d="undefined"!==typeof d?d:0;b=b.split(",");for(var e=0;e<b.length;e++)if(0==d){if(A.h.trim(b[e])==c)return a}else if(A.h.trim(b[e])==c)return h;return 0==d?h:a};A.a.H.returnNegationCheck=function(b,c){return 1==("undefined"!==typeof c?c:0)?!b:b};A.plugins.kb={};A.plugins.kb.za=function(b){try{b=b.replace(/[^a-zA-Z\-_\.\s0-9]/g,""),b=b.substr(0,20)}catch(c){}return b};
A.plugins.kb.we=function(){var b=[],c;for(c in A.o.experiments)if(A.o.experiments.hasOwnProperty(c)&&!("undefined"==typeof A.data.experiments[c].integr.hotjar||"0"==A.data.experiments[c].integr.hotjar||!A.data.experiments[c].integr.hotjar)){var d=A.o.experiments[c].variation_name,d="Convert: "+A.plugins.kb.za(A.data.experiments[c].n)+" - "+A.plugins.kb.za(d);b.push(d)}try{window.hj=window.hj||function(){(window.hj.q=window.hj.q||[]).push(arguments)},window.hj("tagRecording",b)}catch(e){}};A.plugins.pd={};
A.plugins.pd.se=function(){for(var b in A.o.experiments)if(A.o.experiments.hasOwnProperty(b)){var c=A.o.experiments[b];b="CONVERT-"+b;var d;if(A.data.prj.extset.d_anon)d=c.variation_name;else{if(1>c.variation_name_parts.changes.length)break;if(1==c.variation_name_parts.changes.length)d=c.variation_name_parts.changes[0];else{d="";for(var e=0,f=c.variation_name_parts.changes.length;e<f;e++)d+="/"+c.variation_name_parts.changes[e].replace(/\s{2,}/g,"_").replace(/\s/g,"_").replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$|[^a-zA-Z0-9\s-_]/g,"");
d=d.substr(1)}}"undefined"!=typeof window._kmq&&(c={},c[b]=d,window._kmq.push(["set",c]));break}};function I(){this.gf=aa()}new I;I.prototype.get=p("gf");Math.random();var J,K,M,N;function O(){return v.navigator?v.navigator.userAgent:g}N=M=K=J=h;var P;if(P=O()){var ca=v.navigator;J=0==P.indexOf("Opera");K=!J&&-1!=P.indexOf("MSIE");M=!J&&-1!=P.indexOf("WebKit");N=!J&&!M&&"Gecko"==ca.product}var da=K,ea=N,fa=M;var Q;if(J&&v.opera){var R=v.opera.version;"function"==typeof R&&R()}else ea?Q=/rv\:([^\);]+)(\)|;)/:da?Q=/MSIE\s+([^\);]+)(\)|;)/:fa&&(Q=/WebKit\/(\S+)/),Q&&Q.exec(O());A.a.j={};A.a.j.Rd=h;A.a.j.Od="https://logs.convertexperiments.com/log";A.a.j.Id=function(b,c,d){"withCredentials"in new XMLHttpRequest||"undefined"!==typeof XDomainRequest?(b.cors=1,c={type:"POST",url:c,Df:a,data:JSON.stringify(b),dataType:"json",success:function(){},error:function(){b.errorCors=1;A.a.j.Jd(b,A.a.j.Od)}},d&&(c.xhrFields={withCredentials:a},c.crossDomain=h),A.h.ajax(c)):A.a.j.Jd(b,c)};
A.a.j.Jd=function(b,c){b.cors=0;try{var d=document.createElement("img");d.width=1;d.height=1;d.src=c+"?plain="+encodeURIComponent(A.a.JSON.stringify(b))}catch(e){d=document.createElement("img"),d.width=1,d.height=1,d.src=A.a.j.Od+"?plain="+encodeURIComponent('{"senderror":"'+(b.from?b.from:"")+" - "+e+'"}')}};
A.a.j.log=function(b,c){for(var d in b)b.hasOwnProperty(d)&&"object"==typeof b[d]&&(b[d]=A.a.JSON.stringify(b[d]),b[d].replace(/{/g,"|").replace(/}/g,"||"));d=new Date;var e=G;b.runHash=A.lf;b.cid=A.data.u_id;b.pid=A.data.prj.id;b.tmsp=d.getTime();b.from=c;b.cookiev=S().T("_conv_v");b.cookies=S().T("_conv_s");try{b.vid="1"==e.O?e.Fa:e.O}catch(f){}try{b.dl=document.location.href,b.dr=document.referrer,b.ua=navigator.userAgent}catch(k){}A.a.j.Id(b,"https://logs.convertexperiments.com/log",h)};
w("convert.sendLog",A.a.j.log);
A.a.j.sd=function(b,c){if(0!=b.length){var d=A.data.prj.id+"."+A.sf,e="undefined"!==typeof A.data.prj.extset.cname&&0<A.data.prj.extset.cname.length&&A.data.prj.extset.cname,f=h;e&&"done"==e[0].status&&(d=e[0].domain+"/",f=a);d="https://"+d+"log-rep/";f&&(d+="?d="+T().domain);var k=new Date,l=G,e={};e.cid=A.data.u_id;e.pid=A.data.prj.id;e.time=k.getTime();e.s="ts";e.seg=A.a.u.i;e.seg.cust=[];for(var m in l.i)l.i.hasOwnProperty(m)&&e.seg.cust.push(m);try{e.vid="1"==l.O?l.Fa:l.O}catch(r){}e.ev=[];"object"!=
typeof c&&(c={});for(m=0;m<b.length;m++){k={};k.evt=b[m];"object"!=typeof c[m]&&(c[m]={});for(var x in c[m])c[m].hasOwnProperty(x)&&(k[x]=c[m][x]);e.ev.push(k)}A.a.j.Id(e,d,f)}};A.a.j.De=function(){return(new Date).getTime()+"-"+Math.random()};A.a.j.Ff=function(b){var c="";if(A.h.isArray(b))c=b.join(".");else if("object"==typeof b){var c=[],d;for(d in b)b.hasOwnProperty(d)&&c.push(d+"-"+b[d]);c=c.join(".")}return c};
A.a.j.Ef=function(){var b=T().W("_conv_v","seg");if(!b)return{};b=b.split(".");if(-1!==(new String(b[0])).indexOf("-")){for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("-");c[f[0]]=f[1]}return c}return b};A.a.j.Qa=function(b){b=A.a.JSON.stringify(b);b=b.replace(/,/g,"-");b=b.replace(/:/g,".");return b=b.replace(/"/g,"")};A.a.j.dc=function(b){if(!b)return{};b=b.replace(/-/g,",");b=b.replace(/\./g,":");b=b.replace(/([a-z0-9]+):/g,'"$1":');return A.a.JSON.parse(b)};
A.a.j.rd=function(b){var c=document.createElement("script");c.src=b;try{A.V&&c.setAttribute("nonce",A.V)}catch(d){}b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};A.a.j.qe=0;A.a.j.pe=function(){var b=new Date,c=g;do c=new Date,A.a.j.qe++;while(350>c-b)};A.a.j.Qf=function(b){var c=0,d;for(d in b)b.hasOwnProperty(d)&&c++;return c};
A.a.j.Ue=function(b,c){var d="www."+b,e=RegExp("^"+c.replace(/\./g,"\\.").replace(/\?/g,"\\?").split("*").join(".*?")+"$");return e.test(d)||e.test(b)};A.a.j.Be=function(b){var c=A.data.prj.asoc_domains,d,e=h;if("undefined"!=typeof c[b]&&c[b]&&""!=c[b])d="."+c[b],e=a;else for(var f in c)if(c.hasOwnProperty(f)&&A.a.j.Ue(b,f)){d="."+c[f];e=a;break}return e?d:h};
A.a.j.Dd=function(){try{if(localStorage&&"function"==typeof localStorage.setItem&&document.referrer){var b={};b.timestamp=(new Date).getTime()+1E4;b.data=document.referrer;b=A.a.JSON.stringify(b);localStorage.setItem("splitReferrer",b)}}catch(c){}};A.a.j.Ja={};
A.a.j.Qd=function(b,c,d,e){e&&(e=50);A.a.j.Ja[b]||(A.a.j.Ja[b]={execCount:0,currTimout:g,status:1});window[c]?(A.a.j.Ja[b].status="2",d()):A.a.j.Ja[b].execCount<e?A.a.j.Ja[b].currTimout=setTimeout(function(){A.a.j.Qd(b,c,d,e)},100):A.a.j.Ja[b].status="0";A.a.j.Ja[b].execCount++};A.a.j.isArray=function(b){return Array.isArray?Array.isArray(b):"[object Array]"===Object.prototype.toString.call(b)};A.a.Ub=[{s:"google.",q:"q"},{s:"search.yahoo.",q:"p"},{s:"bing.com/search",q:"q"},{s:"search.about.com",q:"q"},{s:"alexa.com/search",q:"q"},{s:"ask.com",q:"q"},{s:"aol/search",q:"q"},{s:"yandsearch",q:"text"}];function ha(b,c,d){if("undefined"==typeof c||!c)c="default";this.Kb="URL "+c;if("undefined"!=typeof U[c]&&("undefined"==typeof d||!d))return U[c];this.ma=this.url=this.fa=this.m=g;this.L=function(b){this.fa=this.jb(b);this.url="undefined"==typeof b||!b?document.location.href:b;this.url=this.url.toLowerCase();this.m=this.Le(this.fa.query);this.ma=this.Me(this.fa.hash)};this.Nf=p("url");this.bd=function(){return this.fa.protocol+"//"+this.fa.hostOrig+this.fa.pathname};this.jb=function(b){if("undefined"==
typeof b||!b){var c=document.location;return{hash:c.hash.substring(1).toLowerCase(),host:document.domain.toLowerCase(),hostOrig:c.host.toLowerCase(),pathname:c.pathname.toLowerCase(),protocol:c.protocol.toLowerCase(),query:c.search.substring(1).toLowerCase()}}c={};b=/(http[s]{0,1}:){0,1}[/]{0,2}([^/]*)([^?]*)([^#]*)[#]{0,1}(.*)/.exec(b.toLowerCase());c.protocol=b[1];c.host=b[2];c.hostOrig=b[2];c.pathname=b[3];c.query=b[4];"undefined"!=typeof c.query&&0===c.query.indexOf("?")&&(c.query=c.query.substring(1));
c.hash=b[5];return c};this.Le=function(b){if(this.m!=g)return this.m;"undefined"==typeof b&&(b=this.jb().query);var c={},d,l,m;b=b.split("&");l=0;for(m=b.length;l<m;l++)""!=A.h.trim(b[0])&&(d=b[l].split("="),A.h.trim(d[0])&&(c[d[0]]=decodeURI(d[1]).replace(/\+/g," ")));return this.m=c};this.Me=function(b){if(this.ma!=g)return this.ma;"undefined"==typeof b&&(query=this.jb().hash);var c={},d,l,m;b=b.split("&");l=0;for(m=b.length;l<m;l++)d=b[l].split("="),A.h.trim(d[0])&&(c[d[0]]=decodeURI(d[1]).replace(/\+/g,
" "));return this.ma=c};this.L(b);U[c]=this}var U={};function ia(){function b(b){for(var c,d=b.length-1;0<=d;d--)if("undefined"!=typeof window[b[d]]){c=window[b[d]];break}return c}var c=A.Za;this.Kb="Request";this.la="";this.ba={};var d=document.referrer;if(H&&("undefined"==typeof c||!c))return H;this.La=A.a.B.$c();this.url=new ha(h,h,c);this.Ob=Math.round((new Date).getTime()/1E3);this.ld=h;if("undefined"!=typeof this.url.m.utm_source||"undefined"!=typeof this.url.m.utm_medium||"undefined"!=typeof this.url.m.utm_campaign||"undefined"!=typeof this.url.m.utm_content||
"undefined"!=typeof this.url.m.utm_term)this.ld=a;this.kd=h;d&&(this.kd=a);this.Ya=new ha(d,"referrer");this.vf=navigator.userAgent;this.sc=h;this.Fd="";for(var c=0,e=A.a.Ub.length;c<e;c++)if(-1!==d.indexOf(A.a.Ub[c].s)){this.sc=a;"undefined"!=typeof this.Ya.m[A.a.Ub[c].q]&&(this.Fd=this.Ya.m[A.a.Ub[c].q]);break}this.sc&&(this.la="organic");var f={v0:["REED_page_type","_conv_page_type"],v1:["REED_category_id","_conv_category_id"],v2:["REED_category_name","_conv_category_name"],v3:["REED_product_sku",
"_conv_product_sku"],v4:["REED_product_name","_conv_product_name"],v41:["REED_product_price","_conv_product_price"],v5:["REED_customer_id","_conv_customer_id"],cv1:["REED_custom_v1","_conv_custom_v1"],cv2:["REED_custom_v2","_conv_custom_v2"],cv3:["REED_custom_v3","_conv_custom_v3"],cv4:["REED_custom_v4","_conv_custom_v4"]};this.ba.v0=b(f.v0);this.ba.v1=b(f.v1);this.ba.v2=b(f.v2);this.ba.v3=b(f.v3);this.ba.v4=b(f.v4);this.ba.v41=b(f.v41);this.ba.v5=b(f.v5);this.ba.cv1=b(f.cv1);this.ba.cv2=b(f.cv2);
this.ba.cv3=b(f.cv3);this.ba.cv4=b(f.cv4);this.Ke=function(c){var d=b(f[c]);return this.ba[c]=d};H=this}var H=g;A.a.xf=function(b){void 0==b&&(b=(new Date).getTime());this.X=624;this.ub=397;this.Sd=2567483615;this.Yb=2147483648;this.Wb=2147483647;this.A=Array(this.X);this.ka=this.X+1;this.pc=function(b){this.A[0]=b>>>0;for(this.ka=1;this.ka<this.X;this.ka++)b=this.A[this.ka-1]^this.A[this.ka-1]>>>30,this.A[this.ka]=(1812433253*((b&4294901760)>>>16)<<16)+1812433253*(b&65535)+this.ka,this.A[this.ka]>>>=0};this.Of=function(b,d){var e,f,k;this.pc(19650218);e=1;f=0;for(k=this.X>d?this.X:d;k;k--){var l=this.A[e-
1]^this.A[e-1]>>>30;this.A[e]=(this.A[e]^(1664525*((l&4294901760)>>>16)<<16)+1664525*(l&65535))+b[f]+f;this.A[e]>>>=0;e++;f++;e>=this.X&&(this.A[0]=this.A[this.X-1],e=1);f>=d&&(f=0)}for(k=this.X-1;k;k--)l=this.A[e-1]^this.A[e-1]>>>30,this.A[e]=(this.A[e]^(1566083941*((l&4294901760)>>>16)<<16)+1566083941*(l&65535))-e,this.A[e]>>>=0,e++,e>=this.X&&(this.A[0]=this.A[this.X-1],e=1);this.A[0]=2147483648};this.Ra=function(){var b,d=[0,this.Sd];if(this.ka>=this.X){var e;this.ka==this.X+1&&this.pc(5489);
for(e=0;e<this.X-this.ub;e++)b=this.A[e]&this.Yb|this.A[e+1]&this.Wb,this.A[e]=this.A[e+this.ub]^b>>>1^d[b&1];for(;e<this.X-1;e++)b=this.A[e]&this.Yb|this.A[e+1]&this.Wb,this.A[e]=this.A[e+(this.ub-this.X)]^b>>>1^d[b&1];b=this.A[this.X-1]&this.Yb|this.A[0]&this.Wb;this.A[this.X-1]=this.A[this.ub-1]^b>>>1^d[b&1];this.ka=0}b=this.A[this.ka++];b^=b>>>11;b^=b<<7&2636928640;b^=b<<15&4022730752;return(b^b>>>18)>>>0};this.Gf=function(){return this.Ra()>>>1};this.Hf=function(){return this.Ra()*(1/4294967295)};
this.random=function(){return this.Ra()*(1/4294967296)};this.If=function(){return(this.Ra()+0.5)*(1/4294967296)};this.Jf=function(){var b=this.Ra()>>>5,d=this.Ra()>>>6;return 1.1102230246251565E-16*(67108864*b+d)};this.pc(b)};A.a.xa={};A.a.xa.Jc=h;
A.a.xa.Tc=function(){1<A.data.prj.domainsCount&&A.h(document).ready(function(){A.a.xa.Jc||(A.a.xa.Jc=a,setTimeout(A.a.xa.Tc,200));if(A.vb){var b=H.url.jb().host,b=b.replace(/^www\./,"");A.h("a").each(function(){if("done"!=A.h(this).data("convert_linking_binding")){var c=this.hostname,c=c.replace(/^www./,"");if("undefined"!=typeof A.data.prj.asoc_domains[c]&&c!=b&&A.data.prj.asoc_domains[c]!=A.data.prj.asoc_domains[b])A.h(this).on("click",function(){if("done"!=A.h(this).data("convert_linking")){var b=A.h(this),
c=b.prop("href"),b=b.get(0).hash;""!=b&&(c=c.replace(b,""));c=c+(-1!=c.indexOf("?")?"&":"?")+"_conv_v="+escape(S().T("_conv_v"))+"&_conv_s="+escape(S().T("_conv_s"));A.h(this).prop("href",c+b).data("convert_linking","done")}});A.h(this).data("convert_linking_binding","done")}});A.h("form").each(function(){if("done"!=A.h(this).data("convert_linking_binding")){var c=document.createElement("a"),d=A.h(this).prop("action");c.setAttribute("href",d);""!=c.hash&&(d=d.replace(c.hash,""));var e=c.hostname,
e=e.replace(/^www./,"");if("undefined"!=typeof A.data.prj.asoc_domains[e]&&e!=b&&A.data.prj.asoc_domains[e]!=A.data.prj.asoc_domains[b])A.h(this).on("submit",function(){if("done"!=A.h(this).data("convert_linking")){var b=A.h(this).prop("method");b&&b!=g&&(b=b.toLowerCase());"get"==b||!b||b==g?A.h(this).append('<input type="hidden" name="_conv_v" value="'+escape(S().T("_conv_v"))+'" /><input type="hidden" name="_conv_s" value="'+escape(S().T("_conv_s"))+'" />'):(b=d+(-1!=d.indexOf("?")?"&":"?")+"_conv_v="+
escape(S().T("_conv_v"))+"&_conv_s="+escape(S().T("_conv_s")),b+=c.hash,this.setAttribute("action",b),A.h(this).data("convert_linking","done"));return a}});A.h(this).data("convert_linking_binding","done")}})}})};
A.a.xa.ne=function(b){var c="";if(1<A.data.prj.domainsCount){if(!A.vb)return b;var d=document.location.host,d=d.replace(/^www\./,""),e=document.createElement("a");e.href=b;var f=e.hostname;""!=e.hash&&(c=e.hash,b=b.replace(c,""));f=f.replace(/^www\./,"");"undefined"!=typeof A.data.prj.asoc_domains[f]&&(f!=d&&A.data.prj.asoc_domains[f]!=A.data.prj.asoc_domains[d])&&(b=b+(-1!=b.indexOf("?")?"&":"?")+"_conv_v="+escape(S().T("_conv_v"))+"&_conv_s="+escape(S().T("_conv_s"))+"&_conv_sptest="+escape(S().T("_conv_sptest")))}return b+
c};A.P={};A.P.jc="snippet.initialized experience.variation_decided experience.activated goal.triggered snippet.experiences_evaluated snippet.goals_evaluated cookies.saved".split(" ");A.P.Gb={};A.P.L=function(){for(var b=0;b<A.P.jc.length;b++)A.P.Gb[A.P.jc[b]]=[]};A.P.L();A.P.Yd=function(b){if(-1==A.P.jc.indexOf(b.event))throw Error("Unsupported event "+b.type);if("function"!=typeof b.handler)throw Error("Unsupported handler, it has to be a function...");A.P.Gb[b.event].push({handler:b.handler})};
A.P.ab=function(b,c){c.event=b;for(var d=0;d<A.P.Gb[b].length;d++)(function(c){var f=A.P.Gb[b][d].handler;"function"==typeof f&&setTimeout(function(){f.apply(this,[c])},5)})(c)};A.b={};A.b.Bb={};A.b.kc={};A.b.Yc=h;A.b.types={1:"Split URL",2:"MVT",3:"A/B",4:"1:1 Experience",5:"A/A"};A.b.tc=2400;A.b.oa={};A.b.qa={};A.b.L=function(){A.b.ya=[];A.b.Qc=h;A.b.pa=[]};A.b.L();
A.b.Aa=function(){A.b.L();A.b.Yc||(A.b.Yc=a,A.a.G.yc("experiments_executed",A.I.Zd));var b={},c=T().W("_conv_sptest");if(c){for(var d in c)if(c.hasOwnProperty(d)){b[d]=1;if("-1"!=c[d].indexOf("preview"))A.na=a;else{if(100321607==d){var e={},f=G;e.vid=f.O;e["var"]=c[d];e.ve=f.b;try{e.appcode=navigator.appCodeName}catch(k){}try{e.appname=navigator.appName}catch(l){}try{e.appver=navigator.appVersion}catch(m){}try{e.appplatf=navigator.platform}catch(r){}try{e.appua=navigator.userAgent}catch(x){}try{e.buildn=
navigator.buildID}catch(F){}A.a.j.log(e,"splitTestCookie")}G.sb(d,c[d],a)}T().fc("_conv_sptest")}try{if(localStorage&&"function"==typeof localStorage.getItem){var n=localStorage.getItem("splitReferrer"),c={},q=new Date;n&&(c=A.a.JSON.parse(n));c&&c.timestamp&&c.timestamp>q.getTime()&&window.ga&&c.data&&ga("set","referrer",c.data)}}catch(C){}}q=H.url.m._conv_eignore;n=[];try{q&&(n=q.split(","))}catch(y){}(q=H.url.m._conv_eforce)||(q=H.url.m.conveforce);if(q){c=[];try{c=q.split("."),A.b.kc[c[0]]=c[1]}catch(z){}}for(var u in A.data.experiments)A.data.experiments.hasOwnProperty(u)&&
-1==n.indexOf(u)&&!(6>A.data.experiments[u].v&&"undefined"!=typeof b[u])&&(A.b.Qb(u),A.Ca&&A.gb());0!=A.b.ya.length?A.lc():A.a.G.wa("experiments_executed")};A.b.xe=function(){if(!(A.b.Qc||0==A.b.ya.length)){A.b.Qc=a;for(var b=0,c=A.b.ya.length;b<c;b++)A.b.Qb(A.b.ya[b]),A.Ca&&A.gb();A.b.ya=[];A.a.G.wa("experiments_executed")}};
A.b.Qb=function(b,c){var d=G;c||(c=h);if(A.data.experiments[b]&&(d=G,!(d.b[b]&&1==d.b[b].v))){var e=D({objectEvaled:"experiment",experiment_id:b}),f=h;if(!A.na||"undefined"==typeof A.b.Bb[b]){c?f=a:A.data.experiments[b].t_r_a&&(f=e.Va(A.data.experiments[b].t_r_a));if(-1===f)return A.b.ya.push(b),h;if(-2===f)return A.b.pa.push(b),h;if(f){var k=h;if("undefined"!=typeof A.data.experiments[b].t_ad_r)if(0==A.data.experiments[b].t_ad_r.length)k=a;else for(var l,m=0;m<A.data.experiments[b].t_ad_r.length;m++){0==
A.data.experiments[b].t_ad_r[m].tp||!A.data.experiments[b].t_ad_r[m].tp?l="undefined"==typeof G.b[b]?e.Va(A.data.experiments[b].t_ad_r[m].r):a:2==A.data.experiments[b].t_ad_r[m].tp&&(l=e.Va(A.data.experiments[b].t_ad_r[m].r));if(-1===l)return A.b.ya.push(b),h;if(-2===l)return A.b.pa.push(b),h;if(k=k||l)break}else if("undefined"==typeof G.b[b]){k="undefined"!=typeof A.data.experiments[b].t_r_f&&A.data.experiments[b].t_r_f?0==A.data.experiments[b].t_r_f.length?a:e.Va(A.data.experiments[b].t_r_f):a;
if(-1===k)return A.b.ya.push(b),h;if(-2===k)return A.b.pa.push(b),h}else k=a;f=f&&k;e=h;e="undefined"!=typeof A.data.experiments[b].t_ad_r?0==A.data.experiments[b].t_ad_r.length:0==A.data.experiments[b].t_r_f.length;if((!f||e)&&A.data.experiments[b].t_seg&&A.data.experiments[b].t_seg.length&&0<A.data.experiments[b].t_seg.length){f=h;for(e=0;e<A.data.experiments[b].t_seg.length;e++)if(d.rc(A.data.experiments[b].t_seg[e])){f=a;break}}}}else f=a;if(f){d="undefined"!=typeof A.b.Bb[b]?A.b.Bb[b]:A.b.Ie(b);
if(A.b.qa[b])try{clearTimeout(A.b.qa[b]),A.b.qa[b]=g}catch(r){}if(d)try{f={data:{}},f.data.experience_id=b+"",f.data.variation_id="1"==d?h:d+"",f.data.experience_name=A.data.experiments[b].n,f.data.variation_name="1"==d?h:A.data.experiments[b].vars[d].name,A.P.ab("experience.variation_decided",f)}catch(x){console.log("There has been an error triggering handler for event experiment.variation_decided - ",x.message)}if(d&&"1"!=d)return A.data.experiments[b].global_d&&A.data.experiments[b].global_d.js&&
A.a.ha.Ac(A.data.experiments[b].global_d.js,1,b),A.b.Cd(b,d),a;"1"==d&&(G.qf(b),T().da())}return h}};A.b.Cd=function(b,c){if(1==A.data.experiments[b].tp&&A.data.experiments[b].vars_sort[0]!=c){G.sb(b,c);setTimeout(function(){A.a.j.log({msg:"failed to redirect e: "+b+" v: "+c},"splitFailed")},5E3);try{A.a.ha.rb(A.data.experiments[b].vars[c].content,b,c)}catch(d){A.a.j.log({msg:d.message+b+" v: "+c},"splitRunError")}A.gb()}else A.a.ha.rb(A.data.experiments[b].vars[c].content,b,c),G.sb(b,c)};
A.b.Kd=function(b,c){A.b.Bb[b]=c};
A.b.Ie=function(b){var c=G;if(A.b.kc[b])return A.b.kc[b];if(3==A.data.experiments[b].s){for(var d,e=0,f=A.data.experiments[b].vars_sort.length;e<f;e++)if(d=A.data.experiments[b].vars_sort[e],1==A.data.experiments[b].vars[d].active)return d;return h}if("undefined"!=typeof c.b[b])return"undefined"==typeof A.data.experiments[b].vars[c.b[b].v]||0==A.data.experiments[b].vars[c.b[b].v].active&&3!=A.data.experiments[b].s?h:c.b[b].v;try{if(localStorage&&"function"==typeof localStorage.getItem){var k=localStorage.getItem("exp"+
b);if(k&&1==A.data.experiments[b].vars[k].active)return k}}catch(l){}k=100*Math.random();100026646==b&&A.a.j.log({Rf:k},"var_random_generated_new");for(var m=0,e=c=0,f=A.data.experiments[b].vars_sort.length;e<f;e++)d=A.data.experiments[b].vars_sort[e],0==A.data.experiments[b].vars[d].active?c+=parseFloat(A.data.experiments[b].vars[d].p):m++;e=0;0<m&&0<c&&(e=c/m);c=0;m=h;for(d in A.data.experiments[b].vars)if(A.data.experiments[b].vars.hasOwnProperty(d)&&1==A.data.experiments[b].vars[d].active&&(c+=
parseFloat(A.data.experiments[b].vars[d].p)+e,k<c)){m=d;break}if(m){try{localStorage&&"function"==typeof localStorage.setItem&&localStorage.setItem("exp"+b,d)}catch(r){}A.uc=a}else return"1";if(100026646==b){b={};c=G;b.vid=c.O;b["var"]=m;b.rand=k;b.ve=c.b;try{b.appcode=navigator.appCodeName}catch(x){}try{b.appname=navigator.appName}catch(F){}try{b.appver=navigator.appVersion}catch(n){}try{b.appplatf=navigator.platform}catch(q){}try{b.appua=navigator.userAgent}catch(C){}try{b.buildn=navigator.buildID}catch(y){}try{var z=
{};ga.Kf().forEach(function(b){z[b.get("trackingId")]=b});b.ga_id=z["UA-7791589-11"].get("clientId")}catch(u){}A.a.j.log(b,"pickVariationNew")}return m};A.b.Ae=function(){for(var b=[],c=0,d=A.b.pa.length;c<d;c++)b.push(A.b.pa[c]);A.b.pa=[];c=0;for(d=b.length;c<d;c++)A.b.Qb(b[c]),A.Ca&&A.gb();A.a.G.wa("experiments_executed")};w("convert.checkExperiments",A.b.Ae);A.b.Xc=function(b,c){var d=h,d=A.b.Qb(b,c);A.Ca&&A.gb();d&&A.a.G.wa("experiments_executed")};w("convert.executeExperiment",A.b.Xc);
A.b.ze=function(b){A.b.oa[b]||(A.b.oa[b]=0);if(A.b.qa[b])try{clearTimeout(A.b.qa[b]),A.b.qa[b]=g}catch(c){}A.b.oa[b]<A.b.tc?(A.b.oa[b]++,A.b.qa[b]=setTimeout(function(){A.b.Xc(b)},50)):A.b.oa[b]=0};w("convert.executeExperimentLooped",A.b.ze);A.a.G={};A.a.G.G={};A.a.G.yc=function(b,c){"undefined"==typeof A.a.G.G[b]&&(A.a.G.G[b]=[]);A.a.G.G[""+b].push(c)};A.a.G.wa=function(b){if("undefined"!=typeof A.a.G.G[b])for(var c=0,d=A.a.G.G[b].length;c<d;c++)A.a.G.G[b][c](void 0)};A.a.cb={};
A.a.cb.Nc=function(){if("undefined"!=typeof convert_temp&&convert_temp){"undefined"!=typeof convert_temp.$&&(A.h=convert_temp.$);"undefined"!=typeof convert_temp.jQuery&&(A.Se=convert_temp.jQuery);for(var b in convert_temp.data)convert_temp.data.hasOwnProperty(b)&&(A.data[b]=convert_temp.data[b]);A.data.prj.extset||(A.data.prj.extset={});convert_temp=g;delete convert_temp;A.data.prj.asoc_domains={};for(var c in A.data.prj.domains)if(A.data.prj.domains.hasOwnProperty(c)){b=0;for(var d=A.data.prj.domains[c].length;b<d;b++)A.data.prj.asoc_domains[A.data.prj.domains[c][b]]=
c}}w("convert.$",A.h);w("convert.jQuery",A.Se)};A.a.cb.Ce=function(b){b||(b=h);A.a.Y.Fc=b};w("convert.forceCookieSecure",A.a.cb.Ce);A.plugins.C={};
A.plugins.C.L=function(){A.plugins.C.Ea={};A.plugins.C.ja={};"undefined"==typeof window._gaq&&(window._gaq=[],window._gaq[0]=function(){var b=window._gaq.push;window._gaq.push=function(){for(var c=0;c<arguments.length;c++)A.plugins.C.gd(arguments[c]);b.apply(this,arguments)}},window._gaq.push=function(){for(var b=0;b<arguments.length;b++)A.plugins.C.gd(arguments[b]),window._gaq[window._gaq.length]=arguments[b]});"undefined"==typeof window.ga&&(window.ga=function(){try{A.plugins.C.hd(arguments)}catch(b){}(window.ga.q=window.ga.q||
[]).push(arguments)},window.ga.l=1*new Date,window.ga(function(){var b=window.ga;window.ga=function(){try{A.plugins.C.hd(arguments)}catch(c){}b.apply(this,arguments)};for(var c in b)b.hasOwnProperty(c)&&(window.ga[c]=b[c])}));A.h(document).ready(function(){setTimeout(function(){A.plugins.C.le();A.plugins.C.me()},200)})};A.plugins.C.gd=function(b){"string"==typeof b[0]&&("undefined"==typeof A.plugins.C.Ea[b[0]]&&(A.plugins.C.Ea[b[0]]=[]),A.plugins.C.Ea[b[0]].push(b))};
A.plugins.C.hd=function(b){"string"==typeof b[0]&&("undefined"==typeof A.plugins.C.ja[b[0]]&&(A.plugins.C.ja[b[0]]=[]),A.plugins.C.ja[b[0]].push(b))};A.plugins.C.le=function(){if("undefined"!=typeof A.plugins.C.Ea._addTrans){for(var b=0,c=0;c<A.plugins.C.Ea._addItem.length;c++)b+=parseInt(A.plugins.C.Ea._addItem[c][6]);A.Ka("",A.plugins.C.Ea._addTrans[0][3],b,g,"ga")}};
A.plugins.C.me=function(){if("undefined"!=typeof A.plugins.C.ja["ecommerce:addTransaction"]){for(var b=0,c=0;c<A.plugins.C.ja["ecommerce:addItem"].length;c++)b+=parseInt(A.plugins.C.ja["ecommerce:addItem"][c][1].quantity);A.Ka("",A.plugins.C.ja["ecommerce:addTransaction"][0][1].revenue,b,g,"ga_u")}else if("undefined"!=typeof A.plugins.C.ja["ec:setAction"]){for(var d=g,c=0;c<A.plugins.C.ja["ec:setAction"].length;c++)if("purchase"==A.plugins.C.ja["ec:setAction"][c][1]){d=A.plugins.C.ja["ec:setAction"][c];
break}if(d){for(c=b=0;c<A.plugins.C.ja["ec:addProduct"].length;c++)b+=parseInt(A.plugins.C.ja["ec:addProduct"][c][1].quantity);A.Ka("",d[2].revenue,b,g,"ga_u")}}};A.plugins.ud={};
A.plugins.ud.ue=function(){window.mixpanel=window.mixpanel||[];for(var b in A.o.experiments)if(A.o.experiments.hasOwnProperty(b)&&!("undefined"==typeof A.data.experiments[b].integr.mixpanel||"0"==A.data.experiments[b].integr.mixpanel||!A.data.experiments[b].integr.mixpanel)){var c=A.o.experiments[b],d="CONVERT - "+A.data.experiments[b].n,e;if(A.data.prj.extset.d_anon)e=c.variation_name;else{if(1>c.variation_name_parts.changes.length)break;if(1==c.variation_name_parts.changes.length)e=c.variation_name_parts.changes[0];
else{e="";for(var f=0,k=c.variation_name_parts.changes.length;f<k;f++)e+="/"+c.variation_name_parts.changes[f].replace(/\s{2,}/g,"_").replace(/\s/g,"_").replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$|[^a-zA-Z0-9\s-_]/g,"");e=e.substr(1)}}"undefined"!=typeof window.mixpanel&&(c={},c[d]=e,window.mixpanel.push(["track","View_Convert_Experiment",c]))}};A.plugins.Na={};A.plugins.Na.za=function(b){try{b=b.replace(/[^a-zA-Z\-_\.\s0-9]/g,""),b=b.substr(0,100)}catch(c){}return b};
A.plugins.Na.re=function(){for(var b in A.o.experiments)if(A.o.experiments.hasOwnProperty(b)&&!("undefined"==typeof A.data.experiments[b].integr.crazyegg||"0"==A.data.experiments[b].integr.crazyegg||!A.data.experiments[b].integr.crazyegg)){var c=A.o.experiments[b].variation_name;b="Convert: "+A.plugins.Na.za(A.data.experiments[b].n)+" - "+A.plugins.Na.za(c);try{window.CE_SNAPSHOT_NAME=b}catch(d){}break}};A.plugins.F={};A.plugins.F.Xe=50;A.plugins.F.ke=100;A.plugins.F.ec=0;A.plugins.F.Wa={};A.plugins.F.Dc=g;A.plugins.F.nf=function(){$cxApiNeeded=h;try{for(var b in A.o.experiments)if(A.o.experiments.hasOwnProperty(b)&&"undefined"!=typeof A.data.experiments[b].integr.ga_ce){$cxApiNeeded=a;break}}catch(c){}"undefined"==typeof window.cxApi&&$cxApiNeeded?(A.a.j.rd("//www.google-analytics.com/cx/api.js"),A.plugins.F.Lc()):A.plugins.F.wc()};
A.plugins.F.Lc=function(){"undefined"!=typeof window.cxApi?A.plugins.F.wc():setTimeout(function(){A.plugins.F.Lc()},50)};
A.plugins.F.wc=function(b,c){if(c||!A.plugins.F.Dc){var d,e,f=[],k=g;"undefined"!=typeof window.pageTracker&&(k=window.pageTracker);try{var l=h;if("undefined"!=typeof window.ga&&"function"===typeof window.ga.getAll){for(var m=window.ga.getAll(),r=0;r<m.length;r++){var x=m[r].get("trackingId");if(A.data.prj.extset.gaUA[x]){f.push(m[r]);break}}0===f.length&&(!A.data.prj.extset.gaUA||"undefined"!=typeof A.data.prj.extset.gaUA.length&&0==A.data.prj.extset.gaUA.length)&&f.push(m[0]);0!=f.length&&(l=a)}A.plugins.F.Dc=
g;if(!l&&(A.plugins.F.ec>A.plugins.F.Xe?A.plugins.F.ec=0:(A.plugins.F.ec++,A.plugins.F.Dc=setTimeout(function(){A.plugins.F.wc(a,a)},A.plugins.F.ke)),c))return}catch(F){}for(var n in A.o.experiments)if(A.o.experiments.hasOwnProperty(n)){$foundGaIntegr=h;try{"1"==A.data.experiments[n].integr.ga_cv&&($foundGaIntegr=a)}catch(q){}try{"1"==A.data.experiments[n].integr.ga_ce&&($foundGaIntegr=a)}catch(C){}if($foundGaIntegr){x=A.o.experiments[n];l="CONVERT-"+n;if(A.data.prj.extset.d_anon)m=x.variation_name,
r=escape(m),40<r.length&&(m=m.substr(0,m.length-r.length+40));else{if(1>x.variation_name_parts.changes.length)break;if(1==x.variation_name_parts.changes.length)m=x.variation_name_parts.changes[0];else{for(var y=Math.floor(40/x.variation_name_parts.changes.length),m="",r=0,z=x.variation_name_parts.changes.length;r<z;r++)m+="/"+x.variation_name_parts.changes[r].replace(/\s{2,}/g,"_").replace(/\s/g,"_").replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$|[^a-zA-Z0-9\s-_]/g,"").substr(0,y);m=m.substr(1);r=escape(m);
40<r.length&&(m=m.substr(0,m.length-r.length+40))}}try{"undefined"!=typeof A.data.experiments[n].integr.ga_ce&&window.cxApi.setChosenVariation(A.data.experiments[n].integr.ga_ce_s.vmap[A.o.experiments[n].variation_id],A.data.experiments[n].integr.ga_ce_s.e)}catch(u){}try{var E=A.data.experiments[n].integr;E&&"undefined"!=typeof E.ga_cv&&(1==E.ga_cv_s.tp&&(e=E.ga_cv_s.s.d),2==E.ga_cv_s.tp&&(d=E.ga_cv_s.s.sl))}catch(L){}if(!A.plugins.F.Wa[n]&&k!=g&&!b)try{k._addDevId("RVchy"),d&&(k._setCustomVar(parseInt(d),
l,m,1),k._trackEvent("Convert_Events","View_var",m,0,a),A.plugins.F.Wa[n]=1)}catch(ba){}if(!A.plugins.F.Wa[n]&&"undefined"!=typeof window.ga&&0<f.length){for(r=0;r<f.length;r++)e&&f[r].set("dimension"+e,m),f[r].send({hitType:"event",eventCategory:"Convert_Events",eventAction:"View_var",eventLabel:m,nonInteraction:1});A.plugins.F.Wa[n]=1}!A.plugins.F.Wa[n]&&("undefined"!=typeof window._gaq&&!b)&&(window._gaq.push(["_addDevId","RVchy"]),d&&(window._gaq.push(["_setCustomVar",parseInt(d),l,m,1]),window._gaq.push(["_trackEvent",
"Convert_Events","View_var",m,0,a]),A.plugins.F.Wa[n]=1))}}}};"object"!==typeof JSON&&(JSON={});
(function(){function b(b){e.lastIndex=0;return e.test(b)?'"'+b.replace(e,function(b){var c=l[b];return"string"===typeof c?c:"\\u"+("0000"+b.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+b+'"'}function c(d,e){var l,n,q,C,y=f,z,u=e[d];u&&("object"===typeof u&&"function"===typeof u.toJSON)&&(u=u.toJSON(d));"function"===typeof m&&(u=m.call(e,d,u));switch(typeof u){case "string":return b(u);case "number":return isFinite(u)?String(u):"null";case "boolean":case "null":return String(u);case "object":if(!u)return"null";
f+=k;z=[];if("[object Array]"===Object.prototype.toString.apply(u)){C=u.length;for(l=0;l<C;l+=1)z[l]=c(l,u)||"null";q=0===z.length?"[]":f?"[\n"+f+z.join(",\n"+f)+"\n"+y+"]":"["+z.join(",")+"]";f=y;return q}if(m&&"object"===typeof m){C=m.length;for(l=0;l<C;l+=1)"string"===typeof m[l]&&(n=m[l],(q=c(n,u))&&z.push(b(n)+(f?": ":":")+q))}else for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(q=c(n,u))&&z.push(b(n)+(f?": ":":")+q);q=0===z.length?"{}":f?"{\n"+f+z.join(",\n"+f)+"\n"+y+"}":"{"+z.join(",")+
"}";f=y;return q}}var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f,k,l={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},m;"function"!==typeof JSON.stringify&&(JSON.stringify=function(b,d,e){var l;k=f="";if("number"===typeof e)for(l=0;l<e;l+=1)k+=" ";else"string"===typeof e&&(k=e);
if((m=d)&&"function"!==typeof d&&("object"!==typeof d||"number"!==typeof d.length))throw Error("JSON.stringify");return c("",{"":b})});"function"!==typeof JSON.parse&&(JSON.parse=function(b,c){function e(b,d){var f,k,l=b[d];if(l&&"object"===typeof l)for(f in l)Object.prototype.hasOwnProperty.call(l,f)&&(k=e(l,f),void 0!==k?l[f]=k:delete l[f]);return c.call(b,d,l)}var f;b=String(b);d.lastIndex=0;d.test(b)&&(b=b.replace(d,function(b){return"\\u"+("0000"+b.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return f=eval("("+b+")"),"function"===typeof c?e({"":f},""):f;throw new SyntaxError("JSON.parse");})})();A.a.JSON=JSON;w("convert.utils.JSON",A.a.JSON);w("convert.utils.JSON.stringify",A.a.JSON.stringify);w("convert.utils.JSON.parse",A.a.JSON.parse);A.a.B={};
A.a.B.aa={L:function(){A.a.B.aa.B=A.a.B.aa.Gd(A.a.B.aa.ie)||"An unknown browser";A.a.B.aa.version=A.a.B.aa.Hd(navigator.userAgent)||A.a.B.aa.Hd(navigator.appVersion)||"an unknown version";A.a.B.aa.Td=A.a.B.aa.Gd(A.a.B.aa.je)||"an unknown OS"},Gd:function(b){for(var c=0;c<b.length;c++){var d=b[c].R,e=b[c].prop;A.a.B.aa.Pd=b[c].ia||b[c].K;if(d){if(-1!=d.indexOf(b[c].S))return b[c].K}else if(e)return b[c].K}},Hd:function(b){try{var c=b.indexOf(A.a.B.aa.Pd);if(-1!=c){var d=parseFloat(b.substring(c+A.a.B.aa.Pd.length+
1)),d=d.toString();-1==d.indexOf(".")&&(d+=".0");return d}}catch(e){}},ie:[{R:navigator.userAgent,S:"Trident/",K:"IE",ia:"rv",Q:"Internet Explorer"},{R:navigator.userAgent,S:"Edge/",K:"EDG",ia:"Edge",Q:"Microsoft Edge"},{R:navigator.userAgent,S:"Chrome",K:"CH",Q:"Google Chrome",ia:"Chrome"},{R:navigator.userAgent,S:"OmniWeb",ia:"OmniWeb/",K:"OW",Q:"OmniWeb"},{R:navigator.vendor,S:"Apple",K:"SF",ia:"Version",Q:"Safari"},{prop:window.opera,K:"OP",ia:"Version",Q:"Opera"},{R:navigator.vendor,S:"iCab",
K:"IB",ia:"iCab",Q:"iCab"},{R:navigator.vendor,S:"KDE",K:"KO",ia:"Konqueror",Q:"Konqueror"},{R:navigator.userAgent,S:"Firefox",K:"FF",Q:"Firefox",ia:"Firefox"},{R:navigator.vendor,S:"Camino",K:"CO",ia:"Camino",Q:"Camino"},{R:navigator.userAgent,S:"Netscape",K:"NS",ia:"Netscape",Q:"Netscape"},{R:navigator.userAgent,S:"MSIE",K:"IE",ia:"MSIE",Q:"Internet Explorer"},{R:navigator.userAgent,S:"Gecko",K:"MO",ia:"rv",Q:"Gecko Browsers"},{R:navigator.userAgent,S:"Mozilla",K:"NS",ia:"Mozilla",Q:"Netscape"}],
je:[{R:navigator.userAgent,S:"Android",K:"AND",Q:"Android"},{R:navigator.platform,S:"Win",K:"WIN",Q:"Microsoft Windows"},{R:navigator.platform,S:"Mac",K:"MAC",Q:"MacOS"},{R:navigator.userAgent,S:"iPhone",K:"IPH",Q:"IPhone"},{R:navigator.userAgent,S:"iPad",K:"IPA",Q:"IPad"},{R:navigator.userAgent,S:"iPod",K:"IPO",Q:"IPod"},{R:navigator.platform,S:"Linux",K:"LIN",Q:"Linux OS"}]};A.a.B.$c=function(){A.a.B.info||(A.a.B.aa.L(),A.a.B.info={},A.a.B.info.browser=A.a.B.aa.B,A.a.B.info.version=A.a.B.aa.version,A.a.B.info.os=A.a.B.aa.Td,A.a.B.info.screenWidth=window.screen.width,A.a.B.info.screenHeight=window.screen.height,"undefined"!=typeof navigator&&"undefined"!=typeof navigator.language?A.a.B.info.lang=navigator.language:"undefined"!=typeof navigator&&"undefined"!=typeof navigator.userLanguage&&(A.a.B.info.lang=navigator.userLanguage),A.a.B.info.lang=A.a.B.info.lang.split("-")[0]);
return A.a.B.info};A.a.B.info=g;A.tb={};A.tb.L=function(){try{if(window!=window.parent&&"undefined"==typeof window._conv_editor){window.addEventListener("message",A.tb.Bd,h);var b=JSON.stringify({type:"helloWebsite",msg:{}});window.parent.postMessage(b,"*")}}catch(c){console.error(c)}};A.tb.Bd=function(b){try{if(/^https{0,1}:\/\/.*?\.convert\.com(:[0-9]+){0,1}$/.test(b.origin)){var c=A.h.parseJSON(b.data);"ackEdFilesLoad"==c.type&&A.qd(c.msg.env,c.msg.version);window.removeEventListener("message",A.tb.Bd)}}catch(d){console.error(d)}};A.plugins.td={};A.plugins.td.te=function(){for(var b in A.o.experiments)if(A.o.experiments.hasOwnProperty(b)&&!("undefined"==typeof A.data.experiments[b].integr.lkor||"0"==A.data.experiments[b].integr.lkor||!A.data.experiments[b].integr.lkor)){try{var c=window.location.href,c=-1!==c.indexOf("?")?c+"&":c+"?",c=c+"convert_action=convert_vpreview&convert_e="+b+"&convert_v="+A.o.experiments[b].variation_id;window.__wtw_lucky_override_save_url=c}catch(d){}break}};A.a.ha={};A.a.ha.rb=function(b,c,d){c||(c=0);d||(d=0);A.mb.xb={experiment_id:c,variation_id:d};for(var e=0,f=b.html.length;e<f;e++)A.a.ha.kf(b.html[e].c,c);e=0;for(f=b.js.length;e<f;e++)A.a.ha.Ac(b.js[e].c,b.js[e].w,c,d)};
A.a.ha.kf=function(b,c){try{if("function"==typeof b)b();else if(0===b.indexOf('<style type="text/css" media="screen"'))A.V&&(b=b.replace('<style type="text/css" media="screen"','<style type="text/css" media="screen" class="convertcomcss convertcomcss_'+c+'" nonce="'+A.V+'"')),A.h("head").append(b);else{var d=document.head;d||(d=document.getElementsByTagName("head")[0]);var e=document.createElement("script"),f=document.createTextNode(b);e.setAttribute("type","text/javascript");try{A.V&&e.setAttribute("nonce",
A.V)}catch(k){}e.appendChild(f);d.appendChild(e)}}catch(l){"undefined"!=typeof console&&"undefined"!=typeof console.error&&console.error(l)}};A.a.ha.Ac=function(b,c,d,e){d||(d=0);e||(e=0);try{switch(c){case 0:case "0":A.h(document).ready(function(){A.a.ha.Rb(b)});break;case 1:case "1":A.a.ha.Rb(b);break;case 2:case "2":A.Vb?A.k.Ua.push({code:b}):A.h(document).ready(function(){A.a.ha.Rb(b)})}}catch(f){"undefined"!=typeof console&&"undefined"!=typeof console.error&&console.error(f)}};
A.a.ha.Rb=function(b){try{"function"==typeof b?b():""!=b&&eval(b)}catch(c){"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log(c)}};A.a.Y={};A.a.Y.Xd=15768E3;A.a.Y.Vd=1200;A.a.Y.Gc=15768E4;A.a.Y.Wd=15;A.a.Y.Ud=15552E3;A.a.Y.Fc=h;A.a.Y.Ld={name:"URL REDIRECT",msg:"Aborting execution, redirecting to split URL variation.",toString:function(){return this.name+" - "+this.msg}};function ja(b){this.Kb="Visitor";if(G&&!b)return G;this.L=function(){var b=new Date,d=H;this.zb=this.jd=h;this.Pb=a;this.ib=T().W("_conv_v","fs");this.fb=T().W("_conv_v","cs");this.qb=T().W("_conv_v","ps");this.ra=(this.ra=T().W("_conv_v","sc"))?parseInt(this.ra):0;this.cc=T().W("_conv_s","pv");this.pb=(this.pb=T().W("_conv_v","pv"))?parseInt(this.pb)+1:1;this.cc=this.cc?parseInt(this.cc)+1:1;this.Sa=window.convertData.geo;this.bb={};this.Ha=this.la=this.source="";this.Af=0;this.be="";this.yf=this.zf=
0;this.Ma="";var e=h,f=h,k=h,l=h;this.Ga=T().W("_conv_s","si");this.Fa=T().W("_conv_s","sh");if(!this.Ga&&d.sc)this.source=d.Ya.fa.host,this.la="organic",this.Ha=d.Fd,f=e=a,""!=this.Ha&&(k=a);else if(!this.Ga&&d.kd&&d.Ya.fa.host!=d.url.fa.host)this.source=d.Ya.fa.host,this.la="referral",this.Ha="",k=f=e=a;else{var m=T().W("_conv_r","s"),r=T().W("_conv_r","m"),x=T().W("_conv_r","t"),F=T().W("_conv_r","c");m&&(this.source=m,e=a);r&&(this.la=r,f=a);x&&(this.Ha=x,k=a);F&&(this.Ma=F,l=a)}"undefined"!=
typeof d.url.m.gclid&&(this.source="google",this.la="cpc google");!this.Ga&&d.ld&&("undefined"!=typeof d.url.m.utm_source&&(this.source=d.url.m.utm_source,e=a),"undefined"!=typeof d.url.m.utm_medium&&(this.la=d.url.m.utm_medium,f=a),"undefined"!=typeof d.url.m.utm_campaign&&(this.Ma=d.url.m.utm_campaign,l=a),"undefined"!=typeof d.url.m.utm_content&&(this.be=d.url.m.utm_content),"undefined"!=typeof d.url.m.utm_term&&(this.Ha=d.url.m.utm_term,k=a));if(e||f||k||l)T().U("_conv_r",(this.source+"").substr(0,
30),"s"),T().U("_conv_r",(this.la+"").substr(0,30),"m"),T().U("_conv_r",(this.Ha+"").substr(0,30),"t"),T().U("_conv_r",(this.Ma+"").substr(0,30),"c");this.i=A.a.j.dc(T().W("_conv_v","seg"));this.b=A.a.j.dc(T().W("_conv_v","exp"));"object"!=typeof this.b&&(this.b={});if(A.data.eclean&&A.data.eclean.length){d=[];for(e=0;e<A.data.eclean.length;e++)f=A.data.eclean[e],this.b[f]&&(delete this.b[f],d.push(f))}this.f=[];this.Db={};for(var n in this.b)if(this.b.hasOwnProperty(n))for(var q in this.b[n].g)this.b[n].g.hasOwnProperty(q)&&
"undefined"==typeof this.Db[q]&&(this.f.push(q),this.Db[q]=1);this.wf=h;this.O=T().W("_conv_v","vi");this.de();this.zb||(this.O||this.Ee(),this.Ga||(this.Ga=this.ra?this.ra+1:1,T().U("_conv_s",this.Ga,"si"),T().oc("_conv_v","sc"),this.ra++,1==this.O&&(this.Fa=A.a.j.De(),T().U("_conv_s",this.Fa,"sh")),1<this.ra&&(this.qb=this.fb,T().U("_conv_v",this.qb,"ps")),this.fb=Math.round(b.getTime()/1E3),T().U("_conv_v",this.fb,"cs"),1==this.ra&&(!this.ib&&"undefined"!==typeof this.ib)&&(this.ib=this.fb,T().U("_conv_v",
this.ib,"fs"))),1==this.ra&&(this.Pb=h),this.wf=a)};this.pf=function(){this.O=window.convert.backupData.vid;T().U("_conv_v",this.O,"vi")};this.hf=function(b,d){this.b[b]=d;T().U("_conv_v",A.a.j.Qa(this.b),"exp")};this.Ee=function(){this.O=1;T().U("_conv_v",this.O,"vi")};this.sb=function(b,d,e){try{var f={data:{}};f.data.experience_id=b+"";f.data.variation_id=d+"";f.data.activated_first_time="undefined"!=typeof this.b[b]&&this.b[b].v==d?h:a;f.data.experience_name=A.data.experiments[b].n;f.data.variation_name=
A.data.experiments[b].vars[d].name;A.P.ab("experience.activated",f)}catch(k){console.log("There has been an error triggering handler for event experiment.activated - ",k.message)}if(("undefined"==typeof e&&1==A.data.experiments[b].tp&&A.data.experiments[b].vars_sort[0]!=d||A.Ca)&&!A.na)A.na&&(d+="preview"),T().U("_conv_sptest",d,b),T().Pc("_conv_s"),T().Pc("_conv_v"),T().da();else{A.z.experiments[b]={};A.z.experiments[b].variation_id=d;A.z.experiments[b].variation_name_parts={sections:A.data.experiments[b].vars[d].secs,
changes:A.data.experiments[b].vars[d].chng};if(!A.z.experiments[b].variation_name_parts.changes.length||1>A.z.experiments[b].variation_name_parts.changes.length)A.z.experiments[b].variation_name_parts.changes=[],A.z.experiments[b].variation_name_parts.changes.push(A.data.experiments[b].vars[d].name);A.z.experiments[b].variation_name=A.data.experiments[b].vars[d].name;A.z.experiments[b].first_time=a;"undefined"!=typeof this.b[b]&&this.b[b].v==d?(A.z.experiments[b].first_time=h,A.o.experiments[b]=A.z.experiments[b]):
(4!=A.data.experiments[b].tp&&(this.jd=a),A.o.experiments[b]=A.z.experiments[b],this.b[b]={},this.b[b].v=d,this.b[b].g={},T().U("_conv_v",A.a.j.Qa(this.b),"exp"),T().da())}};this.qf=function(b){this.b[b]={};this.b[b].v="1";this.b[b].g={};T().U("_conv_v",A.a.j.Qa(this.b),"exp")};this.xd=function(b){this.i[b]=1;T().U("_conv_v",A.a.j.Qa(this.i),"seg")};this.rc=function(b){return this.i[b]?a:h};this.Cc=function(b,d){if(!(d&&4==A.data.experiments[d].tp)){var e=0,f=h,k;for(k in this.b)if("undefined"!=typeof d&&
(k=d,f=a),!this.b.hasOwnProperty(k)||!A.data.experiments[k]||4==A.data.experiments[k].tp){if(f)break}else if("undefined"==typeof A.data.experiments[k]){if(f)break}else if("1"!=this.b[k].v){if("undefined"==typeof this.b[k].g[b]){this.b[k].g[b]=1;"undefined"==typeof this.Db[b]&&(this.f.push(b),this.Db[b]=1);"undefined"==typeof A.z.experiments_goals[k]&&(A.z.experiments_goals[k]={});"undefined"==typeof A.z.experiments_goals[k][b]&&(A.z.experiments_goals[k][b]=1);"undefined"==typeof A.o.experiments_goals[k]&&
(A.o.experiments_goals[k]={});A.o.experiments_goals[k][b]=A.z.experiments_goals[k][b];A.z.goals[b]=1;A.o.goals[b]=A.z.goals[b];try{var l={data:{}};l.data.experience_id=k+"";l.data.variation_id=this.b[k].v+"";l.data.goal_id=b+"";l.data.experience_name=A.data.experiments[k].n;l.data.variation_name=A.data.experiments[k].vars[this.b[k].v].name;A.P.ab("goal.triggered",l)}catch(m){console.log("There has been an error triggering handler for event goal.triggered - ",m.message)}}e++;if(f)break}T().U("_conv_v",
A.a.j.Qa(this.b),"exp")}};this.de=function(){A.Xa&&(!A.lb&&!A.mc)&&(A.lb=a,this.O?(!this.Ga||this.O!=A.Xa)&&this.Zc():this.Zc())};this.Wf=p("zb");this.Zc=function(){var b=document.createElement("script");b.type="text/javascript";b.async=a;try{A.V&&b.setAttribute("nonce",A.V),b.setAttribute("data-cfasync","false")}catch(d){}b.src=A.Ec+"//datauid."+A.Md+"getjs/global/dataID.js?uid="+A.Xa+"&prj_id="+A.data.prj.id+"&_rnd="+(new Date).getTime();var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,
e);A.nc=setTimeout(function(){A.lb=h;A.mc=a;A.I.$a(a)},4500);this.zb=a};this.of=function(){if(A.Xa){var b=A.a.JSON.stringify(this.b),d=A.a.JSON.stringify(this.i),e=document.createElement("script");e.type="text/javascript";e.async=a;try{A.V&&e.setAttribute("nonce",A.V),e.setAttribute("data-cfasync","false")}catch(f){}e.src=A.Ec+"//datauid."+A.Md+"track/backup/?prj_id="+A.data.prj.id+"&vid="+this.O+"&exp="+b+"&seg="+d+"&_rnd="+(new Date).getTime();b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(e,
b)}};this.L();G=this}var G=g;w("convert.getVisitorSegments",function(){var b=G,c=A.a.u.i;c.cust=[];for(var d in b.i)b.i.hasOwnProperty(d)&&c.cust.push(d);return c});A.i={};A.i.md=h;A.i.oa={};A.i.tc=2400;A.i.L=function(){A.i.Pa=[];A.i.Sc=h;A.i.pa=[]};A.i.L();A.i.Aa=function(){A.i.L();A.i.md||(A.i.md=a,A.a.G.yc("segments_executed",A.I.ae));for(var b in A.data.segments)A.data.segments.hasOwnProperty(b)&&A.i.wb(b);0!=A.i.Pa.length?A.lc():A.a.G.wa("segments_executed")};A.i.ce=function(){if(!(A.i.Sc||0==A.i.Pa.length)){A.i.Sc=a;for(var b=0,c=A.i.Pa.length;b<c;b++)if(A.i.wb(A.i.Pa[b]),A.Ca)throw A.nb=a,A.a.j.Dd(),A.a.Y.Ld;A.b.Pa=[];A.a.G.wa("segments_executed")}};
A.i.wb=function(b){var c=G;if(!c.rc(b)&&A.data.segments[b]){var d=D({objectEvaled:"segment",segment_id:b}),e=h;A.data.segments[b].r&&(e=d.Va(A.data.segments[b].r));-1===e?A.i.Pa.push(b):-2===e?A.i.pa.push(b):e&&(c.xd(b),T().da())}};A.i.Ze=function(b){A.data.segments.hasOwnProperty(b)&&(G.xd(b),T().da())};w("convert.placeVisitorIntoSegment",A.i.Ze);A.i.ee=function(){for(var b=[],c=0,d=A.i.pa.length;c<d;c++)b.push(A.i.pa[c]);A.i.pa=[];c=0;for(d=b.length;c<d;c++)A.i.wb(b[c]);A.a.G.wa("segments_executed")};
w("convert.checkSegments",A.i.ee);A.i.fe=function(b){A.i.oa[b]||(A.i.oa[b]=0);A.i.oa[b]<A.i.tc?(A.i.oa[b]++,setTimeout(function(){A.i.wb(b)},50)):A.i.oa[b]=0};w("convert.checkSegmentLooped",A.i.fe);function V(b,c){if(W)return W;"undefined"==typeof b&&(b="");"undefined"==typeof c&&(c="/");this.bc=c;this.Oc=A.a.Y.Fc;this.ac=b;this.Tf=function(b){this.ac=b};this.Uf=function(b){this.bc=b};this.Vf=function(b){this.Oc=b};this.Ba=function(d,e,f){e=encodeURIComponent(e);"undefined"==typeof c&&(c="");"undefined"==typeof b&&(b="");"undefined"==typeof secure&&(secure="");var k=new Date;k.setTime((new Date).getTime()+1E3*f);document.cookie=d+"="+e+";expires="+k.toGMTString()+(this.bc?";path="+this.bc:"")+
(this.ac?";domain="+this.ac:"")+";SameSite=lax"+(this.Oc?";secure":"")};this.T=function(b){var c=""+document.cookie,f=c.indexOf(b+"=");if(-1==f||""==b)return g;var k=c.indexOf(";",f);-1==k&&(k=c.length);var l=g;try{l=decodeURIComponent(c.substring(f+b.length+1,k))}catch(m){A.a.j.log({cname:b,cval:c.substring(f+b.length+1,k),error:m},"cookieDecodeError")}return l};this.fc=function(b){this.Ba(b,"deleted",-1)};W=this}function S(){return W?W:new V}var W=g;function ka(b,c){this.Kb="Convert.cookies";if(X)return X;"undefined"==typeof b&&(b="");"undefined"==typeof c&&(c="/");this.domain=b;new V(b,c);this.Lf=p("domain");this.Te=function(){"undefined"!=typeof H.url.m._conv_v?(this.Lb("_conv_v",decodeURIComponent(H.url.m._conv_v)),this.Lb("_conv_s",decodeURIComponent(H.url.m._conv_s))):(this.Cb("_conv_v"),this.Cb("_conv_s"),this.Cb("_conv_r"));"undefined"!=typeof H.url.m._conv_sptest?this.Lb("_conv_sptest",decodeURIComponent(H.url.m._conv_sptest)):this.Cb("_conv_sptest")};
this.Cb=function(b){var c=S().T(b);c&&this.Lb(b,c)};this.Lb=function(b,c){this[b]={};var f="*";-1!=c.indexOf("|")&&(f="|");for(var f=c.split(f),k=0,l=f.length;k<l;k++){var m=f[k].split(":");if("undefined"!=typeof m[1])this[b][m[0]]=m[1];else{this[b]=m[0];break}}};this.W=function(b,c){return"undefined"!=typeof this[b]?"undefined"!=typeof c?this[b][c]:this[b]:h};this.U=function(b,c,f){"undefined"==typeof this[b]&&(this[b]={});"convert Deleted"==this[b]&&(this[b]={});"undefined"!=typeof f&&f?this[b][f]=
c:this[b]=c};this.da=function(){S().T("_conv_v");S().T("_conv_s");this.Sb("_conv_v",A.a.Y.Xd);this.Sb("_conv_s",A.a.Y.Vd);this.Sb("_conv_sptest",A.a.Y.Wd);this.Sb("_conv_r",A.a.Y.Ud);A.P.ab("cookies.saved",{})};this.Sb=function(b,c){if("undefined"==typeof this[b]||"convert Deleted"==this[b])S().Ba(b,"Deleted",-16E4),"undefined"!=typeof this[b]&&delete this[b];else{var f=[],k;for(k in this[b])this[b].hasOwnProperty(k)&&f.push(k+":"+(""+this[b][k]).replace(/:/g,"").replace(/\*/g," "));f=f.join("*");
S().Ba(b,f,c)}};this.oc=function(b,c){"undefined"==typeof c?"undefined"==typeof this[b]?this[b]=1:this[b]++:"undefined"==typeof this[b][c]?this[b][c]=1:this[b][c]++};this.Pc=function(b){"undefined"==typeof this[b].pv?this[b].pv=0:this[b].pv--};this.fc=function(b){this[b]="convert Deleted"};this.Te();X=this}function T(){return X?X:new ka}var X=g;A.k={};A.k.$b=h;A.k.Qe=function(){if(!("undefined"!=typeof window._conv_prevent_bodyhide&&window._conv_prevent_bodyhide)){var b="<style id='convert_hide_body' type='text/css' media='all'";A.V&&(b+=" nonce='"+A.V+"'");A.h("script:first").after(b+"> body { position: relative; left: -10000px; background - image: none!important; background - color:#fff!important; }</style > ");A.k.$b=a;A.k.Hb=setTimeout(function(){A.k.va()},A.k.hc)}};
A.k.L=function(){A.k.elements={};A.k.eb=g;A.k.Mb=0;A.k.Ua=[];A.k.Hb=g;A.k.hc=2500;A.k.gc=h;A.k.nd=0;A.k.Sf=h;A.k.Kc=a;"undefined"!=typeof _conv_domTimeout&&(A.k.hc=_conv_domTimeout);if(!A.Za||A.k.$b)A.k.Qe(),A.h(document).ready(function(){A.k.gc=a});A.k.nd=(new Date).getTime()};
A.Hc=function(b){var c;if("undefined"==typeof b)return A.h;if(0==b.indexOf("none_"))c=A.h;else try{c=A.h(b)}catch(d){}if("undefined"==typeof window.convertcom_insideApp||!window.convertcom_insideApp){"undefined"==typeof A.k.elements[b]&&(A.k.elements[b]=h);if(A.k.elements[b]!=h&&A.k.elements[b]!=A.k.Mb)return A.h([]);1<=c.length&&(A.k.elements[b]=A.k.Mb)}return c};window.REED._$=A.Hc;w("convert._$",A.Hc);
A.k.va=function(b){A.k.Hb!=g&&(clearTimeout(A.k.Hb),A.k.Hb=g);if("undefined"!=typeof b&&b||A.k.Kc)A.h("style#convert_hide_body").remove(),A.k.$b=h};
A.k.yb=function(){A.k.eb!=g&&(A.k.eb=g);1==A.I.Nb.experiments&&0==A.k.Ua.length&&A.k.va();if(0!=A.k.Ua.length){A.k.Mb++;A.k.rb();var b=a,c;for(c in A.k.elements)if(A.k.elements.hasOwnProperty(c)&&!A.k.elements[c]){b=h;break}!A.Za&&!b&&!A.k.gc?((new Date).getTime()-A.k.nd>A.k.hc&&A.k.va(),A.k.eb=setTimeout(function(){A.k.yb()},50)):A.Za||(b?A.k.Ua=[]:(A.k.Mb++,A.k.rb()),A.k.va())}};
A.k.rb=function(){for(var b=0,c=A.k.Ua.length;b<c;b++)try{A.a.ha.Rb(A.k.Ua[b].code)}catch(d){"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log(d.description)}};A.a.Bf={};Array.prototype.indexOf||(Array.prototype.indexOf=function(b,c){void 0===c&&(c=0);0>c&&(c+=this.length);0>c&&(c=0);for(var d=this.length;c<d;c++)if(c in this&&this[c]===b)return c;return-1});function la(){this.Kb="ruleProcessor";if(Y)return Y;this.t=A.a.H;this.D=G;this.ca=H;this.Da={};this.Va=function(b){this.t=A.a.H;this.D=G;this.ca=H;this.vd=this.ob=h;for(var c=0,d=b.length;c<d;c++)if(this.Aa(b[c],this.D)===a)return a;return this.ob?-1:this.vd?-2:h};this.Aa=function(b){for(var c=0,d=b.length;c<d;c++)try{if(this.af(b[c])===h)return h}catch(e){return h}return a};this.af=function(b){for(var c=0,d=b.length;c<d;c++){var e=b[c],f=A.data.entities[e.entid].nice_name,f=f.slice(0,1).toUpperCase()+
f.slice(1),f="process"+f;if(this[f](e)===a)return a}return h};this.processPagePath=function(b){var c=new String(b.data),c=A.h.trim(b.data),c=c.replace(/\/+$/,""),d=A.data.comparisons[b.compid].module_name,e=this.ca.url.fa.pathname,e=A.h.trim(e),e=e.replace(/\/+$/,"");return this.t[d](e,c,b.not)?a:h};this.processBucketedSegment=function(b){var c=new String(b.data),c=A.h.trim(b.data),c=c.replace(/\/+$/,"");return this.t[A.data.comparisons[b.compid].module_name](this.D.rc(c),a,b.not)?a:h};this.processQueryString=
function(b){var c=new String(b.data),c=A.h.trim(b.data),c=c.replace(/\/+$/,""),d=A.data.comparisons[b.compid].module_name,e=this.ca.url.fa.query,e=A.h.trim(e),e=e.replace(/\/+$/,""),e=e.toLowerCase();return this.t[d](e,c,b.not)?a:h};this.processPageUrl=function(b){var c=new String(b.data),c=A.h.trim(b.data),d=A.data.comparisons[b.compid].module_name,e=this.ca.url.url,e=A.h.trim(e);4==b.compid&&(c=c.replace(/\/+$/,""),e=e.replace(/\/+$/,""));return this.t[d](e,c,b.not)?a:h};this.processPageUrl1=function(b){var c=
new String(b.data),c=A.h.trim(b.data),d=A.data.comparisons[b.compid].module_name,e=this.ca.url.bd(),e=A.h.trim(e);4==b.compid&&(c=c.replace(/\/+$/,""),e=e.replace(/\/+$/,""));return this.t[d](e,c,b.not)?a:h};this.processHostname=function(b){var c=new String(b.data),c=A.h.trim(b.data),c=c.replace(/\/+$/,""),d=A.data.comparisons[b.compid].module_name,e=this.ca.url.bd(),e=A.h.trim(e),e=e.replace(/\/+$/,"");return this.t[d](e,c,b.not)?a:h};this.processSegment=function(b){for(var c=$rule.data,d=A.data.comparisons[b.compid].module_name,
e=[],f=0,k=this.D.i.length;f<k;f++)for(var l in this.D.i[f])this.D.i[f].hasOwnProperty(l)&&e.push(l);return this.t[d](e,c,b.not)?a:h};this.processVisitorPoints=function(b){for(var c=b.data,d=A.data.comparisons[b.compid].module_name,e=0,f=0,k=this.D.f.length;f<k;f++)e+=this.D.f[f].vpoints;return this.t[d](e,c,b.not)?a:h};this.processTimeOnPage=function(b){return this.t[A.data.comparisons[b.compid].module_name](Math.round((new Date).getTime()/1E3-this.ca.Ob),b.data,b.not)?a:h};this.processVisitKnown=
function(b){return this.t[A.data.comparisons[b.compid].module_name](this.D.Pb?1:0,b.data,b.not)?a:h};this.processBrowser=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.ca.La.browser,b.data,b.not)?a:h};this.processBrowserV=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.ca.La.version,b.data,b.not)?a:h};this.processOs=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.ca.La.os,b.data,b.not)?a:h};this.processFlash=t(a);this.processJava=
t(a);this.processScreenColor=t(h);this.processScreenResolution=t(h);this.processLandingPage=t(h);this.processSourceName=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.D.source,b.data,b.not)?a:h};this.processReferalMedium=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.D.la,b.data,b.not)?a:h};this.processReferalCampaign=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.D.Ma,b.data,b.not)?a:h};this.processReferalPath=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.ca.Ya.fa.pathname,
b.data,b.not)?a:h};this.processKeyword=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.D.Ha,b.data,b.not)?a:h};this.processDayHour=function(b){return this.t[A.data.comparisons[b.compid].module_name]((new Date).getHours(),b.data,b.not)?a:h};this.processWeekDay=function(b){var c=A.data.comparisons[b.compid].module_name,d=b.data,e=(new Date).getDay();0==e&&(e=7);return this.t[c](e,d,b.not)?a:h};this.processPtzDayHour=function(b){var c=A.data.comparisons[b.compid].module_name,
d=b.data,e=new Date,f=e.getTime()+6E4*e.getTimezoneOffset()+1E3*A.data.prj.utc_of;this.qc(e)&&(f+=36E5);return this.t[c]((new Date(f)).getHours(),d,b.not)?a:h};this.processPtzWeekDay=function(b){var c=A.data.comparisons[b.compid].module_name,d=b.data,e=new Date,f=e.getTime()+6E4*e.getTimezoneOffset()+1E3*A.data.prj.utc_of;this.qc(e)&&(f+=36E5);e=(new Date(f)).getDay();0==e&&(e=7);return this.t[c](e,d,b.not)?a:h};this.processMinute=function(b){return this.t[A.data.comparisons[b.compid].module_name]((new Date).getMinutes(),
b.data,b.not)?a:h};this.processTzMinute=function(b){var c=A.data.comparisons[b.compid].module_name,d=b.data,e=new Date,f=e.getTime()+6E4*e.getTimezoneOffset()+1E3*A.data.prj.utc_of;this.qc(e)&&(f+=36E5);return this.t[c]((new Date(f)).getMinutes(),d,b.not)?a:h};this.processPageDepth=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.D.pb,b.data,b.not)?a:h};this.processDaysLastVisit=function(b){var c=A.data.comparisons[b.compid].module_name,d=b.data;return"undefined"!=typeof this.D.qb&&
this.D.qb&&this.t[c]((this.ca.Ob-this.D.qb)/86400,d,b.not)?a:h};this.processVisitDuration=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.ca.Ob-this.D.fb,b.data,b.not)?a:h};this.processAvgTimeOnPAge=function(b){var c=b.data,d=A.data.comparisons[b.compid].module_name,e=0,e=Math.round((this.ca.Ob-this.D.ib)/this.D.pb);return this.t[d](e,c,b.not)?a:h};this.processCountVisits=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.D.ra,b.data,b.not)?a:h};this.processCity=
function(b){return"undefined"==typeof A.sa||!A.sa?(this.ob=a,h):this.t[A.data.comparisons[b.compid].module_name](this.D.Sa.city,b.data,b.not)?a:h};this.processCountry=function(b){return!window.convertData.geo.country&&("undefined"==typeof A.sa||!A.sa)?(this.ob=a,h):this.t[A.data.comparisons[b.compid].module_name](!window.convertData.geo.country?this.D.Sa.country:window.convertData.geo.country,b.data,b.not)?a:h};this.processRegion=function(b){return"undefined"==typeof A.sa||!A.sa?(this.ob=a,h):this.t[A.data.comparisons[b.compid].module_name](this.D.Sa.state,
b.data,b.not)?a:h};this.processWeatherCondition=function(b){if("undefined"==typeof A.sa||!A.sa)return this.ob=a,A.a.j.Rd=a,h;var c=b.data,d=g;this.D.bb&&(this.D.bb.current&&this.D.bb.current.condition&&this.D.bb.current.condition.text)&&(d=this.D.bb.current.condition.text);return this.t[A.data.comparisons[b.compid].module_name](d,c,b.not)?a:h};this.processLanguage=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.ca.La.lang,b.data,b.not)?a:h};this.processpageTag=function(b,
c){var d;d=H.Ke(c);return"undefined"==typeof d?(this.vd=a,h):this.t[A.data.comparisons[b.compid].module_name](d,b.data,b.not)?a:h};this.processV0=function(b){return this.processpageTag(b,"v0")};this.processV1=function(b){return this.processpageTag(b,"v1")};this.processV2=function(b){return this.processpageTag(b,"v2")};this.processV3=function(b){return this.processpageTag(b,"v3")};this.processV4=function(b){return this.processpageTag(b,"v4")};this.processV41=function(b){return this.processpageTag(b,
"v41")};this.processV5=function(b){return this.processpageTag(b,"v5")};this.processCv1=function(b){return this.processpageTag(b,"cv1")};this.processCv2=function(b){return this.processpageTag(b,"cv2")};this.processCv3=function(b){return this.processpageTag(b,"cv3")};this.processCv4=function(b){return this.processpageTag(b,"cv4")};this.processUseragent=function(b){return this.t[A.data.comparisons[b.compid].module_name](this.ca.vf,b.data,b.not)?a:h};this.processTestedVisitor=function(b){var c=Number(b.data),
d=0,e;for(e in this.D.b)if(this.D.b.hasOwnProperty(e)&&1!=this.D.b[e].v&&4!=A.data.experiments[e].tp&&!("experiment"==this.Da.objectEvaled&&this.Da.experiment_id==e)&&"undefined"!=typeof A.data.experiments[e]){d=1;break}return this.t[A.data.comparisons[b.compid].module_name](d,c,b.not)?a:h};this.processGoal=function(b){var c=b.data,d=h;if(-1!=this.D.f.indexOf(c)||-1!=this.D.f.indexOf(c+""))d=a;return this.t[A.data.comparisons[b.compid].module_name](d,a,b.not)?a:h};this.processJscondition=function(b){var c=
b.data;if("string"==typeof c){var d="",e="";"experiment"==this.Da.objectEvaled&&(d="convert.executeExperimentLooped('"+this.Da.experiment_id+"')",e="convert.executeExperiment('"+this.Da.experiment_id+"',true)");c=c.replace(/convert_recheck_experiment[\s]*\([\s]*\)/g,d);c=c.replace(/convert_trigger_experiment[\s]*\([\s]*\)/g,e)}var f;try{"function"==typeof c?f=c(A):(A.h.globalEval("convert.gEval = (\n"+c+"\n);"),f=window.convert.gEval)}catch(k){}return 1==("undefined"!==typeof b.not?b.not:0)?!f:f};
this.processCookie=function(b){var c=b.data,d=b.dn,d=S().T(d);return this.t[A.data.comparisons[b.compid].module_name](d,c,b.not)?a:h};this.rf=function(){var b=new Date;return Math.max((new Date(b.getFullYear(),0,1)).getTimezoneOffset(),(new Date(b.getFullYear(),6,1)).getTimezoneOffset())};this.qc=function(b){return b.getTimezoneOffset()<this.rf()};this.processDeviceMobile=function(b){var c=Number(b.data),d=A.data.comparisons[b.compid].module_name,e=0;1==window.convertData.dev.mobile&&0==window.convertData.dev.tablet&&
(e=1);return this.t[d](Number(e),c,b.not)?a:h};this.processDeviceTablet=function(b){return this.t[A.data.comparisons[b.compid].module_name](Number(window.convertData.dev.tablet),Number(b.data),b.not)?a:h};this.processDeviceDesktop=function(b){return this.t[A.data.comparisons[b.compid].module_name](Number(window.convertData.dev.desktop),Number(b.data),b.not)?a:h};Y=this}var Y=g;function D(b){b||(b={});if(Y)return Y.Da=b,Y;var c=new la;c.Da=b;return c};try{A.data={};A.mb={};A.o={};A.Ta={};A.z={};A.I={};var B=window._conv_q||[];try{A.lf=Math.random()}catch(ma){}A.hb=h;A.ic={};A.nb=h;A.uc=h;A.mc=h;A.lb=h;A.nc=h;A.V=g;A.xc=function(b){return!A.a.j.isArray(b)&&"addListener"==b.what?(A.P.Yd({event:b.params.event,handler:b.params.handler}),a):h};A.zd=function(b){if(A.xc(b))return a;if(A.a.j.isArray(b)){if("undefined"==typeof b[0])return a;if("function"==typeof b[0])return b[0](),a;if("string"!=typeof b[0])return a;if("function"==typeof window.convert[b[0]]){if("sendRevenue"==
b[0]||"pushRevenue"==b[0]||"triggerConversion"==b[0])return h;var c=b.slice(1);window.convert[b[0]].apply(window,c)}}return a};A.bf=function(){var b=[];try{for(var c=0,d=B.length;c<d;c++)A.zd(B[c])||b.push(B[c])}catch(e){}B={q:[]};B.q.push([function(){A.Ta.experiments={};var b=G,c;for(c in b.b)b.b.hasOwnProperty(c)&&("undefined"!=typeof A.data.experiments[c]&&1!=b.b[c].v)&&(A.Ta.experiments[c]={},A.Ta.experiments[c].variation_name=A.data.experiments[c].vars[b.b[c].v].name,A.Ta.experiments[c].variation_id=
b.b[c].v,A.Ta.experiments[c].goals=b.b[c].g);w("convert.historicalData",A.Ta)}]);for(c=0;c<b.length;c++)B.q.push(b[c]);B.push=function(b){A.zd(b)||B.q.push(b)};window._conv_q=B};A.yd=function(){try{if(!B.convert_done){for(var b=0,c=B.q.length;b<c;b++)if(!A.xc(B.q[b])&&"undefined"!=typeof B.q[b][0]&&"recheck_goals"!==B.q[b][0])if("function"==typeof B.q[b][0])B.q[b][0]();else if("string"==typeof B.q[b][0]&&"function"==typeof window.convert[B.q[b][0]]){var d=B.q[b].slice(1);window.convert[B.q[b][0]](d)}B=
{push:function(b){A.a.j.isArray(b);if(!A.xc(b)&&"undefined"!=typeof b[0])if("function"==typeof b[0])b[0]();else if("string"==typeof b[0]&&"function"==typeof window.convert[b[0]]){var c=b.slice(1);window.convert[b[0]](c)}},convert_done:a};w("_conv_q",B)}}catch(e){}};A.I.Nb={experiments:0,personalizations:1,goals:0,segments:0};A.Md="track.convertexperiments.com/";A.sf="metrics.convertexperiments.com/";A.Ec="";"undefined"!=typeof window._conv_force_protocol&&(A.Ec=window._conv_force_protocol+":");A.I.Ib=
function(b){"undefined"==typeof b?(A.o.experiments={},A.o.experiments_goals={},A.o.goals={}):(A.z.experiments={},A.z.experiments_goals={},A.z.goals={})};A.Ad=h;A.na=h;A.od=h;A.mf=function(){if(A.na){A.a.cb.Nc();A.Ad=a;var b,c;b=A.ad();c=b.exp;b=b["var"];"undefined"==typeof A.data.experiments[c]||"undefined"==typeof A.data.experiments[c].vars[b]?A.k.va():b&&c&&(A.b.Kd(c,b),A.I.$a())}};A.ad=function(){var b=H;return{exp:"undefined"!=typeof b.url.m.convert_e?b.url.m.convert_e:"undefined"!=typeof b.url.ma.convert_e?
b.url.ma.convert_e:g,"var":"undefined"!=typeof b.url.m.convert_v?b.url.m.convert_v:"undefined"!=typeof b.url.m.reed_a?b.url.m.reed_a:"undefined"!=typeof b.url.ma.convert_v?b.url.ma.convert_v:"undefined"!=typeof b.url.ma.reed_a?b.url.ma.reed_a:g}};A.qd=function(b,c){if(!b||""==b)b="app";if(!c||""==c)c=Math.random();var d=document.createElement("script");d.type="text/javascript";A.V&&d.setAttribute("nonce",A.V);d.async=a;try{d.setAttribute("data-cfasync","false")}catch(e){}d.src="appdev"!=b?"//editor."+
b+".convert.com/sys/"+c+"/js/neweditor/bundle-editor-iframe.js":"//"+b+".convert.com/sys/"+c+"/js/neweditor/bundle-editor-iframe_dev.php";var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(d,f)};A.L=function(){try{var b=document.querySelector("[nonce]");b&&(A.V=b.nonce||b.getAttribute("nonce"))}catch(c){}A.od||(A.bf(),A.a.cb.Nc());b=new ia;if(!A.Za)try{1==b.url.m._conv_editor?A.qd(b.url.m._conv_env,b.url.m._conv_v):A.tb.L()}catch(d){}A.Vb=a;A.h.browser.msie&&(A.Vb=h);if("undefined"!=
typeof A.data.prj.extset.polling&&"0"==A.data.prj.extset.polling||"undefined"!=typeof _conv_notag&&_conv_notag)A.Vb=h;A.vb=a;"undefined"!=typeof A.data.prj.extset.autlnk&&"1"==A.data.prj.extset.autlnk&&(A.vb=h);A.od=a;A.h(document).ready(function(){try{A.plugins.ta.ge()}catch(b){}})};A.Za=h;A.I.$a=function(b){"undefined"!=typeof b&&(A.Za=b);A.L();var c=h,d={AT:1,BE:1,BG:1,HR:1,CY:1,CZ:1,DK:1,EE:1,FI:1,FR:1,DE:1,GR:1,HU:1,IE:1,IT:1,LV:1,LT:1,LU:1,MT:1,NL:1,PL:1,PT:1,RO:1,SK:1,ES:1,SI:1,SE:1,GB:1},
e={IS:1,LI:1,NO:1};try{"undefined"!=typeof navigator.doNotTrack&&"1"==navigator.doNotTrack&&(c=a)}catch(f){}try{"undefined"!=typeof window.doNotTrack&&"1"==window.doNotTrack&&(c=a)}catch(k){}try{"undefined"!=typeof navigator.msDoNotTrack&&"1"==navigator.msDoNotTrack&&(c=a)}catch(l){}if(c){var c=A.data.prj.extset.dnt,m=h,r=window.convertData.geo.country;if(3==c)m=a;else if(2==c){if(r&&(d[r]||e[r]))m=a}else 1==c&&r&&d[r]&&(m=a);if(m)return h}d=H.url.jb().host;d=d.replace(/^www\./,"");e=A.a.j.Be(d);
c=e!==h?e:"";d=H;m=new V(c,"/");A.T=function(b){return S().T(b)};w("convert.getCookie",A.T);w("convert.getCspNonce",function(){return A.V});A.Ba=function(b,c,d){return S().Ba(b,c,d)};w("convert.setCookie",A.Ba);if("undefined"!=typeof d.url.m.reedge_codecheck||"undefined"!=typeof d.url.m._conv_codecheck)b=d.url.m._conv_domain_id,"undefined"==typeof b&&(b=d.url.m.reedge_domain_id),window.parent["codefound_"+b]=a;else if("undefined"!=typeof d.url.m.convert_canceloptout&&(m.fc("convert_optout"),1!=d.url.m.noconfirm&&
alert("Congratulations, you are not anymore opt-out for any tracking initiated by Convert.com scripts on "+d.url.fa.host+" domain.\n")),"undefined"!=typeof d.url.m.convert_optout)m.Ba("convert_optout",1,A.a.Y.Gc),1!=d.url.m.noconfirm&&alert("You've been opted out for any tracking initiated by Convert.com scripts on "+d.url.fa.host+" domain.\nIf you want to cancel the opt-out, just clear your browser's cookies or follow the instructions at http://www.convert.com/opt-out");else if((r=m.T("convert_optout"))&&
"1"==r)m.Ba("convert_optout",1,A.a.Y.Gc);else if(e===h)A.k.va(a);else if(!("undefined"!=typeof convertcom_insideApp&&convertcom_insideApp)){A.k.L();"undefined"!=typeof A.data.prj.extset.ecommerce&&(A.data.prj.extset.ecommerce&&"undefined"==typeof window._gaq)&&A.plugins.C.L();window._gaq=window._gaq||[];window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)};window.ga.l=1*new Date;window._kmq=window._kmq||[];if("reed_apreview"==d.url.m.reed_action||"convert_vpreview"==d.url.m.convert_action||
"reed_apreview"==d.url.ma.reed_action||"convert_vpreview"==d.url.ma.convert_action)A.na=a;if(A.na&&!A.Ad){d=A.ad();experiment_id=d.exp;variation_id=d["var"];b=document.createElement("script");b.type="text/javascript";A.V&&b.setAttribute("nonce",A.V);b.async=a;try{b.setAttribute("data-cfasync","false")}catch(x){}b.src="https://no-cdn.convertexperiments.com/getjs/global/data.js?client_id="+A.data.u_id+"&project_id="+A.data.prj.id+"&do=preview&exp="+d.exp+"&var="+d["var"]+"&_rnd="+(new Date).getTime();
d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}else A.I.Ib(),A.I.Ib("temp"),new ka(c,"/"),A.a.B.$c(),(new ja(b)).zb||(T().oc("_conv_s","pv"),T().oc("_conv_v","pv"),A.data.prj&&(A.data.prj.global_d&&A.data.prj.global_d.js)&&A.a.ha.Ac(A.data.prj.global_d.js,1),A.a.u.get(),A.i.Aa(),A.b.Aa(),T().da(),A.vb&&A.a.xa.Tc(),A.h(document).ready(function(){setTimeout(function(){"undefined"!=typeof A.data.specgoals&&"undefined"!=typeof A.data.specgoals.bounce&&A.Ia(A.data.specgoals.bounce)},
1E4)}))}};A.I.ae=function(){};A.I.Zd=function(){A.I.Nb.experiments=1;A.P.ab("snippet.experiences_evaluated",{});A.Vb?A.k.yb():A.k.va();A.na?(A.h(document).ready(function(){setTimeout(function(){A.h("body").append("<div id='url2png-cheese'></div>")},300)}),A.yd()):A.f.Aa()};A.I.$d=function(){A.P.ab("snippet.goals_evaluated",{});A.I.Bc();A.yd();A.uc&&A.Xa&&G.of();A.J.uf()};A.I.Bc=function(){T().da();if(!A.na){var b=[],c=[];if(!A.h.isEmptyObject(A.z.experiments)||!A.h.isEmptyObject(A.z.goals)){var d=
G;if(d.jd||!A.h.isEmptyObject(A.z.goals)){var e={};e.c=A.data.u_id;e.p=A.data.prj.id;e.v=d.O;d.Fa&&(e.sh=d.Fa);var f;"undefined"!=typeof window._conv_plugin_id?f=window._conv_plugin_id:"undefined"!=typeof window.REED_plugin_id&&(f=window.REED_plugin_id);"undefined"!=typeof e.pid&&1==d.ra&&(e.pid=f);var k=[],l=[],m=0,r=0,x=[];f=[];var F=[],n=[],q;for(q in d.b)if(d.b.hasOwnProperty(q)&&A.data.experiments[q]&&4!=A.data.experiments[q].tp){var C=q+"-"+d.b[q].v;"1"==A.data.experiments[q].s&&(F.push(d.b[q].v),
n.push(q));if("undefined"!=typeof d.b[q].g){var y="",z;for(z in d.b[q].g)if(d.b[q].g.hasOwnProperty(z)&&("undefined"==typeof A.z.experiments_goals[q]||"undefined"==typeof A.z.experiments_goals[q][z]))y+=z+".";y=y.substring(0,y.length-1);C+="-"+y}"undefined"==typeof A.z.experiments[q]||!A.z.experiments[q].first_time?k.push(C):A.z.experiments[q].first_time&&(k.unshift(C),m++,"1"==A.data.experiments[q].s&&x.push(q))}q=0;for(z=d.f.length;q<z;q++)"undefined"==typeof A.z.goals[d.f[q]]?l.push(d.f[q]):(l.unshift(d.f[q]),
r++,f.push(d.f[q]));if(0<k.length&&(0<m||0<r)){e.e=k.join(",");e.ea=m;e.g=l.join(",");e.ga=r;k=[];for(q=0;q<x.length;q++)k[q]=d.b[x[q]].v;0<x.length&&(x.length===n.length&&(b.push("tv"),c.push({})),b.push("viewExp"),c.push({exps:x,vars:k}));if(0<f.length&&0<n.length)for(x=0;x<f.length;x++){var n=[],k=[],u;for(u in A.z.experiments_goals)A.z.experiments_goals.hasOwnProperty(u)&&A.z.experiments_goals[u][f[x]]&&(n.push(u),k.push(d.b[u].v));b.push("hitGoal");c.push({goals:[f[x]],vars:k,exps:n})}}e._rnd=
(new Date).getTime();u=H;for(var E in u.ba)u.ba.hasOwnProperty(E)&&"undefined"!=typeof u.ba[E]&&(e["t_"+E]=u.ba[E]);e.s="ts";A.a.j.log({p:e,ve:d.b},"trackRequestNew");A.a.j.sd(b,c)}}}A.I.Ib("temp")};A.Ic=g;A.Zb=h;A.sa=h;A.$a=function(b){A.h&&A.h("head .convertcomcss").remove();A.I.$a(b)};A.lc=function(){if(A.sa)A.wd(A.Ic);else if(!A.Zb){A.Zb=a;var b=G.O;"1"==b&&(b=G.Fa);b="//cdn-3.convertexperiments.com/getjs/extra/data.js?vid="+b;A.a.j.Rd&&(b+="&iw=1");A.a.j.rd(b)}};A.wd=function(b){A.Ic=b;A.Zb=
h;A.sa=a;for(var c in b.geo)b.geo.hasOwnProperty(c)&&(G.Sa[c]=b.geo[c]);for(var d in b.weather)b.weather.hasOwnProperty(d)&&(G.bb[d]=b.weather[d]);A.i.ce();A.b.xe();A.f.ye();T().da()};A.Ye=function(b){if(A.lb){A.nc&&clearTimeout(A.nc);var c=A.a.j.dc(T().W("_conv_v","exp"));"object"!=typeof c&&(c={});var d=b.exp,e;for(e in c)c.hasOwnProperty(e)&&"undefined"==typeof d[e]&&(d[e]=c[e],A.uc=a);T().U("_conv_v",A.a.j.Qa(d),"exp");T().U("_conv_v",b.vi,"vi");T().da();A.lb=h;A.mc=a;A.I.$a(a)}};A.Ia=function(b,
c){A.f.Ia(b,c);T().da();A.I.Bc()};A.tf=function(b,c){for(var d=0;d<b.length;d++)A.f.Ia(b[d],c);T().da();A.I.Bc()};A.oe=function(){if(!A.Xa&&"undefined"!=typeof window.convert.backupData&&"undefined"!=typeof window.convert.backupData.vid&&window.convert.backupData.vid!=G.O){var b=G;b.pf();for(var c in window.convert.backupData.experiments)window.convert.backupData.experiments.hasOwnProperty(c)&&"undefined"==typeof b.b[c]&&b.hf(c,window.convert.backupData.experiments[c]);T().da()}};A.Ka=function(b,
c,d,e,f,k){var l=G,m=[],r=[],x=[],F=[];f||(f=h);k&&(e?A.ic[e]=h:A.hb=h);var n={};try{n.oid=A.data.prj.id+"-"+b,n.g_id=e,n.vid=l.O,n.src=f,n.rev=c,n.pcnt=d,n.done=A.hb,n.vg=l.f.join(","),n.ve=l.b,n.cd=A.o}catch(q){A.a.j.log({senderror:q,oid:A.data.prj.id+"-"+b},"dataErrorSendTransaction")}A.a.j.log(n,"sendTransaction");if(!A.na){if(e){if(A.ic[e])return}else if(A.hb)return;var C=[],y;for(y in l.b)l.b.hasOwnProperty(y)&&(A.data.experiments[y]&&4!=A.data.experiments[y].tp)&&(x.push(l.b[y].v),F.push(y));
if(e&&(l.Cc(e),1==A.z.goals[e])){var n=[],z=[],u;for(u in A.z.experiments_goals)A.z.experiments_goals.hasOwnProperty(u)&&A.z.experiments_goals[u][e]&&(n.push(u),z.push(l.b[u].v));m.push("hitGoal");r.push({goals:[e],vars:z,exps:n});A.I.Ib("temp")}if(e&&"undefined"!=typeof A.o.goals[e])C.push(e);else{n=0;for(u=l.f.length;n<u;n++)"undefined"!=typeof A.o.goals[l.f[n]]&&-1==C.indexOf(l.f[n])&&C.push(l.f[n])}u=[];z=[];for(y in l.b)if(l.b.hasOwnProperty(y)&&A.data.experiments[y]){var E,L;E=A.data.experiments[y].sets&&
A.data.experiments[y].sets.minordv!==g?A.data.experiments[y].sets.minordv:A.data.prj.extset.minordv;L=A.data.experiments[y].sets&&A.data.experiments[y].sets.maxordv!==g?A.data.experiments[y].sets.maxordv:A.data.prj.extset.maxordv;n=parseFloat(c);if(E!==g&&n<E||L!==g&&n>L){z.push(y);n={};try{n.oid=A.data.prj.id+"-"+b,n.g_id=e,n.vid=l.O,n.src=f,n.rev=c,n.pcnt=d,n.done=A.hb,n.vg=l.f.join(","),n.ve=l.b,n.cd=A.o,n.oliermin=E,n.oliermax=L}catch(ba){A.a.j.log({senderror:ba,oid:A.data.prj.id+"-"+b},"dataErrorSendTransaction")}A.a.j.log(n,
"sendTransactionOutlier")}else u.push(y+"-"+l.b[y].v)}k&&"force_multiple"==k&&(C=[e]);if(0==C.length)n={},n.oid=A.data.prj.id+"-"+b,n.g_id=e,n.vg=l.f.join(","),n.ve=l.b,n.cd=A.o,n.vid=l.O,A.a.j.log(n,"transactionNotSent");else{T().da();e?A.ic[e]=a:A.hb=a;m.push("tr");f=0;try{f=Number(d)}catch(oa){}isNaN(f)&&(f=0);r.push({goals:C,r:c,prc:f,vars:x,exps:F});A.a.j.sd(m,r);n={};n.oid=A.data.prj.id+"-"+b;n.g_id=e;n.url=url;A.a.j.log(n,"transactionSent")}}};"undefined"!=typeof window.REED&&(window.REED.addRevenueData=
A.Ka);window.convert.sendRevenue=function(b){try{A.Ka(b[0],b[1],b[2],b[3],"sendRevApi",b[4])}catch(c){}};window.convert.pushRevenue=function(b){try{A.Ka("",b[0],b[1],b[2],"sendRevApi",b[3])}catch(c){}};window.convert.assignVariation=function(b){try{b[0]&&b[1]&&A.b.Kd(b[0],b[1])}catch(c){}};window.convert.integration_setting=function(b){"undefined"==typeof A.J.N[b[0]]&&(A.J.N[b[0]]={});A.J.N[b[0]][b[1]]=b[2]};window.convert.triggerConversion=function(b){try{A.Ia(b[0],b[1])}catch(c){}};window.convert.triggerConversions=
function(b){try{A.tf(b[0],b[1])}catch(c){}};window.convert.cookieUrl=function(b){return A.a.xa.ne(b)};A.Re=function(b){A.Xa=b};w("convert.identify",A.Re);A.$e=function(){A.k.Kc=h};w("convert.preventBodyAutoshow",A.$e);A.va=function(){A.k.va(a)};w("convert.showBody",A.va);A.Nd=function(b,c){A.na=a;A.b.Cd(b,c);A.k.yb()};A.ff=function(b){try{A.Ca=a,A.nb=a,G.sb(A.mb.xb.experiment_id,A.mb.xb.variation_id),T().da(),window.convertcom_insideApp||"undefined"!=typeof window.Reed_designer||(setTimeout(function(){A.a.j.log({msg:"failed to redirect to: "+
b},"redirectFailed")},5E3),window.location.href=b)}catch(c){console.log(c)}};w("convert.redirect",A.ff);A.refresh=function(){try{A.Ca=a,A.nb=a,G.sb(A.mb.xb.experiment_id,A.mb.xb.variation_id),T().da(),window.convertcom_insideApp||"undefined"!=typeof window.Reed_designer||(setTimeout(function(){A.a.j.log({msg:"failed to refresh page"},"refreshFailed")},5E3),window.location.reload())}catch(b){console.log(b)}};w("convert.refresh",A.refresh);A.getUserData=function(){var b={};b.geo=G.Sa;b.system=H.La;
b.browsing={};b.browsing.returning=G.Pb;return b};w("convert.getUserData",A.getUserData);A.Pe=function(b){return H.url.m[b]};w("convert.getUrlParameter",A.Pe);w("convert.triggerExperimentVariation",A.Nd);w("convert.run",A.$a);w("convert.isRedirect",A.nb);w("convert.data",A.data);w("convert.currentData",A.o);w("convert.onAditionalDataReturn",A.wd);w("convert.onIDataReturn",A.Ye);w("convert.currentData.goals",A.o.f);w("convert.runPreview",A.mf);w("_conv_q",B);w("convert.doUseBackupData",A.oe)}catch(Z){if(!("object"==
typeof Z&&Z.name&&"URL REDIRECT"==Z.name)){var na={};na.jserror=Z;A.a.j.log(na,"mainGeneralError")}}A.gb=function(){for(var b in A.b.qa)A.b.qa[b]&&(clearTimeout(A.b.qa[b]),A.b.qa[b]=g);A.nb=a;A.a.j.Dd();throw A.a.Y.Ld;};})();try { convert.run();} catch(e) {if(!(typeof(e)=='object' && e.name && e.name=='URL REDIRECT')) {var loglyjson = {};loglyjson.jserror = e;convert.sendLog(loglyjson,'mainGeneralError');}}
}
