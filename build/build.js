!function i(r,o,s){function l(n,e){if(!o[n]){if(!r[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);throw new Error("Cannot find module '"+n+"'")}var a=o[n]={exports:{}};r[n][0].call(a.exports,function(e){var t=r[n][1][e];return l(t||e)},a,a.exports,i,r,o,s)}return o[n].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(e,t,n){t.exports=function(){return function(a){var i;function e(e){if(e){var t=i.indexOf(e),n=a.slide();r(e,"active"),r(e,"inactive"),r(e,"before"),r(e,"after"),t!==n?(o(e,"inactive"),o(e,t<n?"before":"after")):o(e,"active")}}function r(e,t){e.classList.remove("bespoke-backdrop-"+t)}function o(e,t){e.classList.add("bespoke-backdrop-"+t)}i=a.slides.map(function(e){var t=e.getAttribute("data-bespoke-backdrop");if(t){var n=document.createElement("div");return n.className=t,n.classList.add("bespoke-backdrop"),a.parent.appendChild(n),n}}),a.on("activate",function(){i.forEach(e)})}}},{}],2:[function(e,t,n){t.exports=function(o){return function(e){var t,n,r=e.slides.map(function(e){return[].slice.call(e.querySelectorAll("string"==typeof o?o:"[data-bespoke-bullet]"),0)}),a=function(a,i){t=a,n=i,r.forEach(function(e,n){e.forEach(function(e,t){e.classList.add("bespoke-bullet"),n<a||n===a&&t<=i?(e.classList.add("bespoke-bullet-active"),e.classList.remove("bespoke-bullet-inactive")):(e.classList.add("bespoke-bullet-inactive"),e.classList.remove("bespoke-bullet-active")),n===a&&t===i?e.classList.add("bespoke-bullet-current"):e.classList.remove("bespoke-bullet-current")})})},i=function(e){return void 0!==r[t][n+e]};e.on("next",function(){var e=t+1;if(i(1))return a(t,n+1),!1;r[e]&&a(e,0)}),e.on("prev",function(){var e=t-1;if(i(-1))return a(t,n-1),!1;r[e]&&a(e,r[e].length-1)}),e.on("slide",function(e){a(e.index,0)}),a(0,0)}}},{}],3:[function(e,t,n){t.exports=function(){return function(r){var o=function(e,t){e.classList.add("bespoke-"+t)},s=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},t=function(e,t){var n=r.slides[r.slide()],a=t-r.slide(),i=0<a?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(s.bind(null,e)),e!==n&&["inactive",i,i+"-"+Math.abs(a)].map(o.bind(null,e))};o(r.parent,"parent"),r.slides.map(function(e){o(e,"slide")}),r.on("activate",function(e){r.slides.map(t),o(e.slide,"active"),s(e.slide,"inactive")})}}},{}],4:[function(e,t,n){t.exports=function(){return function(a){var i=function(e){var t=-1<e&&e<a.slides.length?e:0;t!==a.slide()&&a.slide(t)},e=function(){var n=window.location.hash.slice(1),e=parseInt(n,10);n&&(e?i(e-1):a.slides.forEach(function(e,t){e.getAttribute("data-bespoke-hash")!==n&&e.id!==n||i(t)}))};setTimeout(function(){e(),a.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=t||e.index+1}),window.addEventListener("hashchange",e)},0)}}},{}],5:[function(e,t,n){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],6:[function(e,t,n){t.exports=function(){return function(t){var a=/\/\/player\.vimeo\.com\//,i=/\/\/www\.youtube\.com\/embed\//,r="command",o="file:"===location.protocol,s=function(e,t,n,a){for(var i=-1,r=t.querySelectorAll(e+(a||"")),o=r.length;++i<o;n(r[i]));},l=function(e,t){e.contentWindow.postMessage(JSON.stringify(t),"*")},u=function(e){var t=e.hasAttribute("data-rewind"),n=Math.min(Math.max(parseFloat(e.getAttribute("data-volume")),0),10);if(e.play)t&&e.readyState&&(e.currentTime=0),0<=n&&(e.volume=n/10),e.play();else if(i.test(e.src))t&&l(e,{event:r,func:"seekTo",args:[0]}),0<=n&&l(e,{event:r,func:"setVolume",args:[10*n]}),l(e,{event:r,func:"playVideo"});else if(a.test(e.src)){if(o)return console.warn("WARNING: Cannot play Vimeo video when deck is loaded via file://.");t&&l(e,{method:"seekTo",value:0}),0<=n&&l(e,{method:"setVolume",value:n/10}),l(e,{method:"play"})}},n=function(e){e.pause?e.pause():i.test(e.src)?l(e,{event:r,func:"pauseVideo"}):!o&&a.test(e.src)&&l(e,{method:"pause"})},c=function(e,t){e[t||"src"]=e.getAttribute(t||"src")},d=function(e){try{return e.contentDocument.rootElement}catch(e){}},f=function(e,t){(d(e)||e).classList[t||"add"]("active")},p=function(e){e.hasAttribute("data-reload")?c(e,"data"):d(e)?f(e):e.onload=function(){t.slides[t.slide()].contains(e)&&f(e)}},g=function(e){f(e,"remove")},h=s.bind(null,"audio,video,iframe"),m=s.bind(null,'object[type="image/svg+xml"]'),b=function(e){h(e,n)};t.on("activate",function(e){if(e.preview)return b(e.slide);var t,n;t=e.slide,h(t,u),n=e.slide,m(n,p),s('img[data-reload][src$=".gif"]',e.slide,c)}),t.on("deactivate",function(e){var t;b(e.slide),t=e.slide,m(t,g,":not([data-reload])")})}}},{}],7:[function(e,t,n){t.exports=function(t){return(t=t||{}).delay=t.delay||250,t.evalDelay=t.evalDelay||100,function(e){window.__nwWindowId&&window.nwDispatcher&&(window.BESPOKE_PDF=Object.create(e),t.setup instanceof Function&&t.setup(BESPOKE_PDF),document.documentElement.classList.add("pdf"),BESPOKE_PDF.once=function(e,t){var n=BESPOKE_PDF.on(e,function(e){n(),t(e)})},BESPOKE_PDF.when=function(e){return new Promise(function(t){BESPOKE_PDF.once(e,function(e){t(e)})})},BESPOKE_PDF.slides.map(function(e){return{element:e,headline:e.querySelector("h1")||e.querySelector("h2")||e.querySelector("h3")||e.querySelector("h4")||e.querySelector("h5")||e.querySelector("li")||e.querySelector("p")||e.querySelector("span")}}).map(function(e){if(e.headline)return e.element.dataset.pdfId=e.headline.innerText.trim().toLowerCase().split(" ").join("-"),e.element}).filter(Boolean).map(getComputedStyle).map(function(e,t){return"none"===e.display&&t}).filter(function(e){return"number"==typeof e}).forEach(function(e){BESPOKE_PDF.slides.splice(e,1)}),BESPOKE_PDF.options=t)}}},{}],8:[function(e,t,n){t.exports=function(i){return function(t){var e=document.createElement("div"),n=document.createElement("div"),a="vertical"===i?"height":"width";e.className="bespoke-progress-parent",n.className="bespoke-progress-bar",e.appendChild(n),t.parent.appendChild(e),t.on("activate",function(e){n.style[a]=100*e.index/(t.slides.length-1)+"%"})}}},{}],9:[function(c,i,r){(function(a){!function(e){if("object"==typeof r&&void 0!==i)i.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:void 0!==a?t=a:"undefined"!=typeof self&&(t=self);var n=t;(n=(n=n.bespoke||(n.bespoke={})).plugins||(n.plugins={})).run=e()}}(function(){return function i(r,o,s){function l(n,e){if(!o[n]){if(!r[n]){var t="function"==typeof c&&c;if(!e&&t)return t(n,!0);if(u)return u(n,!0);throw new Error("Cannot find module '"+n+"'")}var a=o[n]={exports:{}};r[n][0].call(a.exports,function(e){var t=r[n][1][e];return l(t||e)},a,a.exports,i,r,o,s)}return o[n].exports}for(var u="function"==typeof c&&c,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(e,t,n){t.exports=function(e){return function(a){var i=-1;[].forEach.call(document.querySelectorAll("[data-bespoke-run]"),function(e){e.setAttribute("href","#"),e.addEventListener("click",function(e){a.fire("runCurrentCode"),e.preventDefault()})}),a.on("runCurrentCode",function(){var e=document.querySelector(".bespoke-active code");if(!e)throw"No code element on this slide, or no bespoke-classes plugin";new Function(e.innerText)()}),a.on("prev",function(){i=a.slide()}),a.on("next",function(e){var t=e.slide.querySelector("code[data-bespoke-autorun]"),n=i!==a.slide();return i=a.slide(),!t||!n||(a.fire("runCurrentCode"),!1)})}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){t.exports=function(d){return function(e){var n,a=e.parent,t=e.slides[0],i=t.offsetHeight,r=t.offsetWidth,o="zoom"===d||"zoom"in a.style&&"transform"!==d,s=o?e.slides:e.slides.map(function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t}),l=(n="Transform","Moz Webkit O ms".split(" ").reduce(function(e,t){return t+n in a.style?t+n:e},n.toLowerCase())),u=o?function(e,t){t.style.zoom=e}:function(e,t){t.style[l]="scale("+e+")"},c=function(){var e=a.offsetWidth/r,t=a.offsetHeight/i;s.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",c),c()}}},{}],11:[function(e,t,n){t.exports=function(i){return function(e){var t,n,a="vertical"==i?"Y":"X";e.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(t=e.touches[0]["page"+a],n=0)}),e.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),n=e.touches[0]["page"+a]-t)}),e.parent.addEventListener("touchend",function(){50<Math.abs(n)&&e[0<n?"prev":"next"]()})}}},{}],12:[function(e,t,n){t.exports={from:function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),a=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),i=a[0],r={},o=function(e,t){a[e]&&(u("deactivate",c(i,t)),i=a[e],u("activate",c(i,t)))},s=function(e,t){var n=a.indexOf(i)+e;u(0<e?"next":"prev",c(i,t))&&o(n,t)},l=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},u=function(e,n){return(r[e]||[]).reduce(function(e,t){return e&&!1!==t(n)},!0)},c=function(e,t){return(t=t||{}).index=a.indexOf(e),t.slide=e,t},d={on:function(e,t){return(r[e]||(r[e]=[])).push(t),l.bind(null,e,t)},off:l,fire:u,slide:function(e,t){if(!arguments.length)return a.indexOf(i);u("slide",c(a[e],t))&&o(e,t)},next:s.bind(null,1),prev:s.bind(null,-1),parent:n,slides:a};return(t||[]).forEach(function(e){e(d)}),o(0),d}}},{}],13:[function(e,t,n){(function(e){var u="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},c=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,t=0,O=u.Prism={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof o?new o(e.type,O.util.encode(e.content),e.alias):"Array"===O.util.type(e)?e.map(O.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,n){var t=O.util.type(e);switch(n=n||{},t){case"Object":if(n[O.util.objId(e)])return n[O.util.objId(e)];var a={};for(var i in n[O.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=O.util.clone(e[i],n));return a;case"Array":if(n[O.util.objId(e)])return n[O.util.objId(e)];a=[];return n[O.util.objId(e)]=a,e.forEach(function(e,t){a[t]=O.util.clone(e,n)}),a}return e}},languages:{extend:function(e,t){var n=O.util.clone(O.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(n,e,t,a){var i=(a=a||O.languages)[n];if(2==arguments.length){for(var r in t=e)t.hasOwnProperty(r)&&(i[r]=t[r]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==e)for(var r in t)t.hasOwnProperty(r)&&(o[r]=t[r]);o[s]=i[s]}return O.languages.DFS(O.languages,function(e,t){t===a[n]&&e!=n&&(this[e]=o)}),a[n]=o},DFS:function(e,t,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==O.util.type(e[i])||a[O.util.objId(e[i])]?"Array"!==O.util.type(e[i])||a[O.util.objId(e[i])]||(a[O.util.objId(e[i])]=!0,O.languages.DFS(e[i],t,i,a)):(a[O.util.objId(e[i])]=!0,O.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){O.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};O.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),o=0;i=r[o++];)O.highlightElement(i,!0===t,a.callback)},highlightElement:function(e,t,n){for(var a,i,r=e;r&&!l.test(r.className);)r=r.parentNode;r&&(a=(r.className.match(l)||[,""])[1].toLowerCase(),i=O.languages[a]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+a,e.parentNode&&(r=e.parentNode,/pre/i.test(r.nodeName)&&(r.className=r.className.replace(l,"").replace(/\s+/g," ")+" language-"+a));var o={element:e,language:a,grammar:i,code:e.textContent};if(O.hooks.run("before-sanity-check",o),!o.code||!o.grammar)return o.code&&(O.hooks.run("before-highlight",o),o.element.textContent=o.code,O.hooks.run("after-highlight",o)),void O.hooks.run("complete",o);if(O.hooks.run("before-highlight",o),t&&u.Worker){var s=new Worker(O.filename);s.onmessage=function(e){o.highlightedCode=e.data,O.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,n&&n.call(o.element),O.hooks.run("after-highlight",o),O.hooks.run("complete",o)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=O.highlight(o.code,o.grammar,o.language),O.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,n&&n.call(e),O.hooks.run("after-highlight",o),O.hooks.run("complete",o)},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return O.hooks.run("before-tokenize",a),a.tokens=O.tokenize(a.code,a.grammar),O.hooks.run("after-tokenize",a),o.stringify(O.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,a,i,r,o){var s=O.Token;for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==o)return;var u=n[l];u="Array"===O.util.type(u)?u:[u];for(var c=0;c<u.length;++c){var d=u[c],f=d.inside,p=!!d.lookbehind,g=!!d.greedy,h=0,m=d.alias;if(g&&!d.pattern.global){var b=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,b+"g")}d=d.pattern||d;for(var v=a,y=i;v<t.length;y+=t[v].length,++v){var k=t[v];if(t.length>e.length)return;if(!(k instanceof s)){if(g&&v!=t.length-1){if(d.lastIndex=y,!(A=d.exec(e)))break;for(var w=A.index+(p?A[1].length:0),x=A.index+A[0].length,S=v,E=y,F=t.length;S<F&&(E<x||!t[S].type&&!t[S-1].greedy);++S)(E+=t[S].length)<=w&&(++v,y=E);if(t[v]instanceof s)continue;P=S-v,k=e.slice(y,E),A.index-=y}else{d.lastIndex=0;var A=d.exec(k),P=1}if(A){p&&(h=A[1]?A[1].length:0);x=(w=A.index+h)+(A=A[0].slice(h)).length;var j=k.slice(0,w),C=k.slice(x),L=[v,P];j&&(++v,y+=j.length,L.push(j));var N=new s(l,f?O.tokenize(A,f):A,m,A,g);if(L.push(N),C&&L.push(C),Array.prototype.splice.apply(t,L),1!=P&&O.matchGrammar(e,t,n,v,y,!0,l),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var a=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return O.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var n=O.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=O.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}}},o=O.Token=function(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!i};if(o.stringify=function(t,n,e){if("string"==typeof t)return t;if("Array"===O.util.type(t))return t.map(function(e){return o.stringify(e,n,t)}).join("");var a={type:t.type,content:o.stringify(t.content,n,e),tag:"span",classes:["token",t.type],attributes:{},language:n,parent:e};if(t.alias){var i="Array"===O.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(a.classes,i)}O.hooks.run("wrap",a);var r=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(r?" "+r:"")+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(O.disableWorkerMessageHandler||u.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,a=t.code,i=t.immediateClose;u.postMessage(O.highlight(a,O.languages[n],n)),i&&u.close()},!1)),u.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(O.filename=e.src,O.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(O.highlightAll):window.setTimeout(O.highlightAll,16):document.addEventListener("DOMContentLoaded",O.highlightAll))),u.Prism}();void 0!==t&&t.exports&&(t.exports=c),void 0!==e&&(e.Prism=c),c.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.languages.markup.tag.inside["attr-value"].inside.entity=c.languages.markup.entity,c.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),c.languages.xml=c.languages.markup,c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},c.languages.css.atrule.inside.rest=c.languages.css,c.languages.markup&&(c.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:c.languages.css,alias:"language-css",greedy:!0}}),c.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:c.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:c.languages.css}},alias:"language-css"}},c.languages.markup.tag)),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),c.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),c.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),c.languages.javascript["template-string"].inside.interpolation.inside.rest=c.languages.javascript,c.languages.markup&&c.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:c.languages.javascript,alias:"language-javascript",greedy:!0}}),c.languages.js=c.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var t,n=e.getAttribute("data-src"),a=e,i=/\blang(?:uage)?-([\w-]+)\b/i;a&&!i.test(a.className);)a=a.parentNode;if(a&&(t=(e.className.match(i)||[,""])[1]),!t){var r=(n.match(/\.(\w+)$/)||[,""])[1];t=l[r]||r}var o=document.createElement("code");o.className="language-"+t,e.textContent="",o.textContent="Loading…",e.appendChild(o);var s=new XMLHttpRequest;s.open("GET",n,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,c.highlightElement(o)):400<=s.status?o.textContent="✖ Error "+s.status+" while fetching file: "+s.statusText:o.textContent="✖ Error: File does not exist or is empty")},s.send(null)}),c.plugins.toolbar&&c.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e,t,n){var a=e("bespoke"),i=e("bespoke-classes"),r=e("bespoke-keys"),o=e("bespoke-touch"),s=e("bespoke-bullets"),l=e("bespoke-backdrop"),u=e("bespoke-scale"),c=e("bespoke-hash"),d=e("bespoke-pdf"),f=e("bespoke-progress"),p=e("bespoke-multimedia"),g=e("bespoke-run");a.from("article",[i(),r(),o(),g(),d(5e3),s("li, .bullet"),l(),u(),c(),f(),p()]),e("prismjs")},{bespoke:12,"bespoke-backdrop":1,"bespoke-bullets":2,"bespoke-classes":3,"bespoke-hash":4,"bespoke-keys":5,"bespoke-multimedia":6,"bespoke-pdf":7,"bespoke-progress":8,"bespoke-run":9,"bespoke-scale":10,"bespoke-touch":11,prismjs:13}]},{},[14]);