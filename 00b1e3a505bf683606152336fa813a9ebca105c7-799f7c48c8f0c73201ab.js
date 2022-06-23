/*! For license information please see 00b1e3a505bf683606152336fa813a9ebca105c7-799f7c48c8f0c73201ab.js.LICENSE.txt */
(self.webpackChunk_adamgraham_portfolio=self.webpackChunk_adamgraham_portfolio||[]).push([[507],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],o[s[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(m,"canUseDOM",l),m}}},9710:function(e,t,n){"use strict";n.d(t,{aH:function(){return Pe},mP:function(){return ze}});var r=n(4679),a=n(5900),i=n.n(a),o=n(7294),l=n(1597),c=n(5697),s=n.n(c),u=s().shape({sharp:s().shape({original:s().shape({src:s().string.isRequired,width:s().number,height:s().number})})}),m=(s().shape({category:s().string.isRequired,description:s().string,description_short:s().string,id:s().string.isRequired,image:u.isRequired,imageAltText:s().string,imageBorder:s().string,title:s().string.isRequired}),function(e){var t,n=e.className,a=e.slide,c="undefined"!=typeof navigator&&!navigator.onLine,s="/"+a.category+"/"+a.id;return o.createElement("div",{className:i()("slide",n)},o.createElement("div",{className:"slide__image-wrapper"},o.createElement(r.rU,{ElementType:l.Link,to:s,unstyled:!0},o.createElement(r.Qj,{alt:a.imageAltText||"",animated:!1,className:i()("slide__image",(t={},t["slide__image--border-"+a.imageBorder]=a.imageBorder,t)),width:a.image.sharp.original.width,height:a.image.sharp.original.height,src:a.image.sharp.original.src,showLoadingSpinner:!c}))),o.createElement("div",{className:"slide__text-wrapper"},o.createElement("div",{className:"slide__text-container"},o.createElement("h1",{className:"h3"},a.title),o.createElement("p",{className:"text-foreground-secondary"},a.description_short||a.description),o.createElement(r.rU,{ElementType:l.Link,to:s,unstyled:!0},o.createElement(r.zx,{size:r.zx.size.small},"More Details")))))}),d="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjg3KSIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE0LjcxIDYuNzFjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwTDguNzEgMTEuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw0LjU5IDQuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTAuODMgMTJsMy44OC0zLjg4Yy4zOS0uMzkuMzgtMS4wMyAwLTEuNDF6Ii8+PC9zdmc+",g="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjg3KSIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkuMjkgNi43MWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMy4xNyAxMmwtMy44OCAzLjg4Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwbDQuNTktNC41OWMuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEwLjcgNi43Yy0uMzgtLjM4LTEuMDItLjM4LTEuNDEuMDF6Ii8+PC9zdmc+",p=(0,o.createContext)({category:"",gallery:[],slideIndex:0,currentSlide:null,changeSlide:function(){},nextSlide:function(){},previousSlide:function(){},navigateToSlide:function(){}}),f=function(e){var t=e.className,n=(0,r.ac)("(max-width: 1365px)");return o.createElement(p.Consumer,null,(function(e){var r=e.gallery,a=e.currentSlide,l=e.slideIndex,c=e.nextSlide,s=e.previousSlide;return o.createElement("article",{className:i()("gallery",{"gallery--vertical-layout":n},t)},o.createElement("button",{"aria-label":"Previous Slide",className:"gallery__button left",disabled:l<=0,onClick:s},l>0&&o.createElement("img",{alt:"",src:d})),o.createElement("div",{className:"gallery__slides"},a&&o.createElement(m,{slide:a})),o.createElement("button",{"aria-label":"Next Slide",className:"gallery__button right",disabled:l>=r.length-1,onClick:c},l<r.length-1&&o.createElement("img",{alt:"",src:g})))}))};function y(e){return e.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}var h,b,v,E,T=[{name:"Games",to:"/games"},{name:"Visual Art",to:"/art"},{name:"Web Design",to:"/websites"},{name:"Emerging Tech",to:"/tech"},{name:"Presentations",to:"/presentations"},{name:"Software",to:"https://github.com/adamgraham",rightIcon:"open_in_new",ElementType:"a",external:!0}],w=[{key:"github",name:"GitHub",url:"https://github.com/adamgraham"},{key:"linkedIn",name:"LinkedIn",url:"https://www.linkedin.com/in/adamzigurous"},{key:"instagram",name:"Instagram",url:"http://instagram.com/adam.zigurous"},{key:"twitter",name:"Twitter",url:"https://twitter.com/Zigurous"},{key:"email",name:"Email",url:"mailto:adam@zigurous.com"}],M=function(e){var t=e.location,n=e.onToggleGallery,a=void 0===n?function(){}:n,i=e.onToggleMenu,c=void 0===i?function(){}:i,s=e.showGallery,u=e.showMenu;return o.createElement("header",{className:"app-menu__header"},o.createElement(p.Consumer,null,(function(e){var n=e.gallery,a=e.slideIndex,i=e.nextSlide,c=e.previousSlide;return o.createElement("div",null,o.createElement(r.rU,{className:"logo h4",ElementType:l.Link,to:"/",unstyled:!0},"Adam Graham"),void 0===a&&!fullscreen&&o.createElement(r.rU,{className:"app-menu__page-title h4 display-none margin-bottom-none",ElementType:l.Link,to:"/"+category,unstyled:!0},y(category)),void 0!==a&&o.createElement("div",{className:"app-menu__slide-buttons display-none",style:{marginLeft:"-8px"}},o.createElement("button",{"aria-label":"Previous Slide",disabled:a<=0,onClick:c},o.createElement("img",{alt:"",src:d})),o.createElement("button",{"aria-label":"Next Slide",className:"margin-left-md",disabled:a>=n.length-1,onClick:i},o.createElement("img",{alt:"",src:g}))),o.createElement(r.l2,{links:T,LinkElementType:l.Link,location:t}))})),o.createElement("div",null,o.createElement(r.lQ,{className:"margin-left-md margin-right-md",iconSize:20,iconInnerPadding:10,links:w}),o.createElement("button",{"aria-label":s?"Hide Gallery":"Show Gallery",className:"app-menu__gallery-button margin-left-xl",onClick:function(){return a(s)}},o.createElement("img",{alt:"",src:s?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjg3KSIgd2lkdGg9IjM2cHgiIGhlaWdodD0iMzZweCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik01IDE2aDN2M2gydi01SDV2MnptMy04SDV2Mmg1VjVIOHYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjVoLTJ2NWg1VjhoLTN6Ii8+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjg3KSIgd2lkdGg9IjM2cHgiIGhlaWdodD0iMzZweCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01eiIvPjwvc3ZnPg=="})),o.createElement("button",{"aria-label":u?"Close Menu":"Open Menu",className:"app-menu__menu-button margin-left-xl",onClick:function(){return c(u)}},o.createElement("img",{alt:"",src:u?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjg3KSIgd2lkdGg9IjM2cHgiIGhlaWdodD0iMzZweCI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMThoMTN2LTJIM3Yyem0wLTVoMTB2LTJIM3Yyem0wLTd2MmgxM1Y2SDN6bTE4IDkuNTlMMTcuNDIgMTIgMjEgOC40MSAxOS41OSA3bC01IDUgNSA1TDIxIDE1LjU5eiIvPjwvc3ZnPg==":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjg3KSIgd2lkdGg9IjM2cHgiIGhlaWdodD0iMzZweCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzeiIvPjwvc3ZnPg=="}))))},S=function(e){var t=e.onSelect,n=void 0===t?function(){}:t,a=e.show;return o.createElement("div",{"aria-hidden":!a,className:i()("app-menu__gallery-view",{open:a})},o.createElement(p.Consumer,null,(function(e){var t=e.gallery,l=e.changeSlide,c=e.navigateToSlide;return o.createElement("div",{className:"app-menu__gallery"},t.map((function(e,t){var s;return o.createElement("button",{"aria-disabled":!a,"aria-label":e.title,className:"app-menu__thumbnail",disabled:!a,key:e.id,onClick:function(){l(t),c(e),n()}},o.createElement(r.Qj,{alt:e.imageAltText||"",className:i()("app-menu__thumbnail-image",(s={},s["app-menu__thumbnail-image--border-"+e.imageBorder]=e.imageBorder,s)),imageProps:{loading:"lazy"},width:e.image.sharp.original.width,height:e.image.sharp.original.height,src:e.image.sharp.original.src}))})))})))},I=function(e){var t=e.onLink,n=void 0===t?function(){}:t,a=e.show;return o.createElement("div",{"aria-hidden":!a,className:i()("app-menu__menu-view",{open:a})},o.createElement("ul",{className:"app-menu__nav-list"},T.map((function(e){return o.createElement("li",{key:e.to},o.createElement(r.rU,{activeClassName:"","aria-disabled":!a,"aria-label":e.name,disabled:!a,ElementType:e.ElementType||l.Link,external:e.external,onClick:n,tabIndex:a?0:-1,to:e.to,unstyled:!0},e.name))}))))},C=function(e){var t=e.location,n=(0,o.useState)(!1),a=n[0],l=n[1],c=(0,o.useState)(!1),s=c[0],u=c[1],m=a||s;(0,r.NE)(m,!0);var d=(0,o.useCallback)((function(e){u(!e),l(!1)}),[]),g=(0,o.useCallback)((function(e){l(!e),u(!1)}),[]),p=(0,o.useCallback)((function(){u(!1)}),[]),f=(0,o.useCallback)((function(){l(!1)}),[]);return o.createElement("div",{className:i()("app-menu",{"app-menu--fullscreen":m})},o.createElement("div",{className:"app-menu__container"},o.createElement(M,{location:t,onToggleGallery:d,onToggleMenu:g,showGallery:s,showMenu:a}),o.createElement("div",{"aria-hidden":!m,className:"app-menu__body"},o.createElement(I,{onLink:f,show:a}),o.createElement(S,{onSelect:p,show:s}))))},N=n(4839),A=n.n(N),j=n(2993),k=n.n(j),x=n(6494),L=n.n(x),O="bodyAttributes",D="htmlAttributes",P="titleAttributes",_={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},z=(Object.keys(_).map((function(e){return _[e]})),"charset"),H="cssText",Z="href",R="http-equiv",B="innerHTML",G="itemprop",Y="name",U="property",W="rel",q="src",V="target",F={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Q="defaultTitle",K="defer",J="encodeSpecialCharacters",X="onChangeClientState",$="titleTemplate",ee=Object.keys(F).reduce((function(e,t){return e[F[t]]=t,e}),{}),te=[_.NOSCRIPT,_.SCRIPT,_.STYLE],ne="data-react-helmet",re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ie=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ce=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},se=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ue=function(e){var t=fe(e,_.TITLE),n=fe(e,$);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=fe(e,Q);return t||r||void 0},me=function(e){return fe(e,X)||function(){}},de=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return oe({},e,t)}),{})},ge=function(e,t){return t.filter((function(e){return void 0!==e[_.BASE]})).map((function(e){return e[_.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},pe=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Ee("Helmet: "+e+' should be of type "Array". Instead found type "'+re(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||n===W&&"canonical"===e[n].toLowerCase()||c===W&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==B&&l!==H&&l!==G||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=L()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},fe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ye=(h=Date.now(),function(e){var t=Date.now();t-h>16?(h=t,e(t)):setTimeout((function(){ye(e)}),0)}),he=function(e){return clearTimeout(e)},be="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ye:n.g.requestAnimationFrame||ye,ve="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||he:n.g.cancelAnimationFrame||he,Ee=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Te=null,we=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,d=e.titleAttributes;Ie(_.BODY,r),Ie(_.HTML,a),Se(m,d);var g={baseTag:Ce(_.BASE,n),linkTags:Ce(_.LINK,i),metaTags:Ce(_.META,o),noscriptTags:Ce(_.NOSCRIPT,l),scriptTags:Ce(_.SCRIPT,s),styleTags:Ce(_.STYLE,u)},p={},f={};Object.keys(g).forEach((function(e){var t=g[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(f[e]=g[e].oldTags)})),t&&t(),c(e,p,f)},Me=function(e){return Array.isArray(e)?e.join(""):e},Se=function(e,t){void 0!==e&&document.title!==e&&(document.title=Me(e)),Ie(_.TITLE,t)},Ie=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(ne),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute(ne):n.getAttribute(ne)!==o.join(",")&&n.setAttribute(ne,o.join(","))}},Ce=function(e,t){var n=document.head||document.querySelector(_.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===B)n.innerHTML=t.innerHTML;else if(r===H)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(ne,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},Ne=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)},je=function(e,t,n){switch(e){case _.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[ne]=!0,a=Ae(n,r),[o.createElement(_.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=Ne(n),i=Me(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+se(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+se(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case O:case D:return{toComponent:function(){return Ae(t)},toString:function(){return Ne(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[ne]=!0,r);return Object.keys(t).forEach((function(e){var n=F[e]||e;if(n===B||n===H){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===B||e===H)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+se(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===te.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ke=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,d=e.titleAttributes;return{base:je(_.BASE,t,r),bodyAttributes:je(O,n,r),htmlAttributes:je(D,a,r),link:je(_.LINK,i,r),meta:je(_.META,o,r),noscript:je(_.NOSCRIPT,l,r),script:je(_.SCRIPT,c,r),style:je(_.STYLE,s,r),title:je(_.TITLE,{title:m,titleAttributes:d},r)}},xe=A()((function(e){return{baseTag:ge([Z,V],e),bodyAttributes:de(O,e),defer:fe(e,K),encode:fe(e,J),htmlAttributes:de(D,e),linkTags:pe(_.LINK,[W,Z],e),metaTags:pe(_.META,[Y,z,R,U,G],e),noscriptTags:pe(_.NOSCRIPT,[B],e),onChangeClientState:me(e),scriptTags:pe(_.SCRIPT,[q,B],e),styleTags:pe(_.STYLE,[H],e),title:ue(e),titleAttributes:de(P,e)}}),(function(e){Te&&ve(Te),e.defer?Te=be((function(){we(e,(function(){Te=null}))})):(we(e),Te=null)}),ke)((function(){return null})),Le=(b=xe,E=v=function(e){function t(){return ae(this,t),ce(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!k()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.SCRIPT:case _.NOSCRIPT:return{innerHTML:t};case _.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return oe({},r,((t={})[n.type]=[].concat(r[n.type]||[],[oe({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case _.TITLE:return oe({},a,((t={})[r.type]=o,t.titleAttributes=oe({},i),t));case _.BODY:return oe({},a,{bodyAttributes:oe({},i)});case _.HTML:return oe({},a,{htmlAttributes:oe({},i)})}return oe({},a,((n={})[r.type]=oe({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=oe({},t);return Object.keys(e).forEach((function(t){var r;n=oe({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ee[n]||n]=e[n],t}),t)}(le(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case _.LINK:case _.META:case _.NOSCRIPT:case _.SCRIPT:case _.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=le(e,["children"]),r=oe({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(b,r)},ie(t,null,[{key:"canUseDOM",set:function(e){b.canUseDOM=e}}]),t}(o.Component),v.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},v.defaultProps={defer:!0,encodeSpecialCharacters:!0},v.peek=b.peek,v.rewind=function(){var e=b.rewind();return e||(e=ke({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);Le.renderStatic=Le.rewind;var Oe=function(e){var t=(0,l.useStaticQuery)("1995548873").site.metadata,n=Object.assign({},t,e);return o.createElement(Le,null,o.createElement("title",null,n.title),o.createElement("meta",{name:"description",content:n.description}),n.image&&o.createElement("meta",{name:"image",content:n.image}),n.url&&o.createElement("meta",{property:"og:url",content:n.url}),o.createElement("meta",{property:"og:type",content:"website"}),o.createElement("meta",{property:"og:title",content:n.title}),o.createElement("meta",{property:"og:description",content:n.description}),n.image&&o.createElement("meta",{property:"og:image",content:n.image}),o.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.createElement("meta",{name:"twitter:creator",content:"@zigurous"}),o.createElement("meta",{name:"twitter:title",content:n.title}),o.createElement("meta",{name:"twitter:description",content:n.description}),n.image&&o.createElement("meta",{name:"twitter:image",content:n.image}))},De=function(e){var t=e.children,n=e.className,r=e.id,a=e.location,l=e.metadata;return o.createElement("div",{className:"app","data-theme":"dark"},o.createElement(Oe,l),o.createElement("main",{className:i()("page",n),id:r},t),o.createElement(C,{location:a}))};var Pe=function(e){var t=e.category,n=e.gallery,r=e.location,a=(0,o.useState)(function(e){return e&&"undefined"!=typeof sessionStorage&&Number.parseInt(sessionStorage.getItem(e+"-slide"))||0}(t)),i=a[0],c=a[1],s=n[i],u=(0,o.useCallback)((function(e){var t=Math.min(Math.max(e,0),n.length-1);c(t)}),[n,c]),m=(0,o.useCallback)((function(){u(i+1)}),[u,i]),d=(0,o.useCallback)((function(){u(i-1)}),[u,i]),g=(0,o.useCallback)((function(e){(0,l.navigate)("/"+e.category)}),[]);return(0,o.useEffect)((function(){!function(e,t){e&&"undefined"!=typeof sessionStorage&&sessionStorage.setItem(e+"-slide",t)}(t,i)}),[t,i]),o.createElement(p.Provider,{value:{category:t,gallery:n,slideIndex:i,currentSlide:s,changeSlide:u,nextSlide:m,previousSlide:d,navigateToSlide:g}},o.createElement(De,{id:t,location:r,metadata:{url:"https://adamgraham.io/"+t,title:"Adam Graham • "+y(t)}},o.createElement(f,{category:t,gallery:n,setSlideIndex:c,slideIndex:i})))},_e=(s().shape({buttons:s().arrayOf(s().shape({name:s().string.isRequired,link:s().string.isRequired,icon:s().string})),category:s().string.isRequired,date:s().string,description:s().string,description_short:s().string,description_long:s().arrayOf(s().string),details:s().arrayOf(s().shape({key:s().string.isRequired,value:s().string.isRequired})),id:s().string.isRequired,image:u.isRequired,sections:s().arrayOf(s().shape({title:s().string,link:s().string,mainImage:u,mainVideo:s().string,paragraphs:s().arrayOf(s().string),gallery:s().arrayOf(u),videos:s().arrayOf(s().string)})),title:s().string.isRequired}),function(e){var t=e.className,n=e.project;return o.createElement("article",{className:i()("project","container-md",t)},o.createElement("section",null,o.createElement("h1",null,n.title)),o.createElement("section",null,n.date&&o.createElement("p",{className:"font-sm"},o.createElement("em",null,n.date)),n.description&&o.createElement("p",{className:"text-foreground-secondary"},n.description),n.description_long&&n.description_long.map((function(e){return o.createElement("p",{className:"text-foreground-secondary",key:e},e)}))),n.details&&o.createElement("section",null,o.createElement("p",{className:"font-sm"},n.details.map((function(e,t){return o.createElement(o.Fragment,{key:e.key},0!==t&&o.createElement("br",null),o.createElement("em",null,e.key)," ",e.value)})))),n.buttons&&o.createElement("section",null,o.createElement(r.hE,null,n.buttons.map((function(e){return o.createElement(r.rU,{external:!0,to:e.link,key:e.name,unstyled:!0},o.createElement(r.zx,{icon:e.icon&&"left",iconName:e.icon,size:r.zx.size.small},e.name))})))),n.sections&&n.sections.map((function(e,t){return o.createElement("section",{key:"section-"+t},e.title&&o.createElement("p",{className:"font-lg"},e.link?o.createElement(r.rU,{external:!0,href:e.link},o.createElement("b",null,e.title)):o.createElement("b",null,e.title)),e.mainImage&&o.createElement(r.Qj,{alt:n.title+" Screenshot",width:e.mainImage.sharp.original.width,height:e.mainImage.sharp.original.height,src:e.mainImage.sharp.original.src}),e.mainVideo&&o.createElement(r.fB,{origin:"https://adamgraham.io",videoId:e.mainVideo}),e.paragraphs&&e.paragraphs.map((function(e,n){return o.createElement("p",{className:"text-foreground-secondary font-sm",key:"section-"+t+"-paragraph-"+n},e)})),e.gallery&&o.createElement(r.hJ,{images:e.gallery.map((function(e){return{width:e.sharp.original.width,height:e.sharp.original.height,src:e.sharp.original.src}})),minWidth:128}),e.videos&&e.videos.map((function(e){return o.createElement(r.fB,{className:"margin-bottom-lg",key:e,origin:"https://adamgraham.io",videoId:e})})))})))}),ze=function(e){var t=e.gallery,n=e.location,r=e.project,a={url:"https://adamgraham.io/"+r.category+"/"+r.id,title:"Adam Graham • "+r.title,description:r.description_short||r.description,image:r.image&&r.image.sharp.original.src};return o.createElement(De,{category:r.category,gallery:t,id:r.id,location:n,metadata:a},o.createElement(_e,{project:r}))}}}]);
//# sourceMappingURL=00b1e3a505bf683606152336fa813a9ebca105c7-799f7c48c8f0c73201ab.js.map