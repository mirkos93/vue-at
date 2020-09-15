module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=function(e,t,n,i){var r,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var l=s.computed||(s.computed={});Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}})}return{esModule:r,exports:o,options:s}}},function(e,t,n){"use strict";function i(){var e=window.getSelection();if(e&&e.rangeCount>0)return e.getRangeAt(0)}t.f=function(e,t){if(e.scrollIntoViewIfNeeded)e.scrollIntoViewIfNeeded(!1);else{var n=e.offsetTop-t.scrollTop;(n<0||n>t.offsetHeight-e.offsetHeight)&&((t=t||e.parentElement).scrollTop=e.offsetTop)}},t.e=function(e){var t=window.getSelection();t&&(t.removeAllRanges(),t.addRange(e))},t.d=i,t.a=function(e,t){return t.map(function(t){return{at:t,index:e.lastIndexOf(t)}}).reduce(function(e,t){return e.index>t.index?e:t})},t.b=function(e,t){t=t||window;var n={top:e.offsetTop,left:e.offsetLeft},i=e.offsetParent;for(;null!=i&&i!=t;)n.left+=i.offsetLeft,n.top+=i.offsetTop,i=i.offsetParent;return n},t.g=function(e,t){do{if(t(e))return e}while(e=e&&e.parentNode)},t.c=function(){var e=i();if(e){var t=e.cloneRange();return t.collapse(!0),t.setStart(t.endContainer,0),t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(6),o=n.n(r),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=this;t.default={name:"At",mixins:[o.a],props:{value:{type:String,default:null},at:{type:String,default:null},ats:{type:Array,default:function(){return["@"]}},suffix:{type:String,default:" "},loop:{type:Boolean,default:!0},allowSpaces:{type:Boolean,default:!0},tabSelect:{type:Boolean,default:!1},avoidEmail:{type:Boolean,default:!0},showUnique:{type:Boolean,default:!0},hoverSelect:{type:Boolean,default:!0},members:{type:Array,default:function(){return[]}},emptyMembersMessage:{type:String,default:"There is no one to tag"},nameKey:{type:String,default:""},filterMatch:{type:Function,default:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.value,t=arguments[1];arguments[2];return e.toLowerCase().indexOf(t.toLowerCase())>-1}},deleteMatch:{type:Function,default:function(e,t,n){return t===e+n}},scrollRef:{type:String,default:""}},data:function(){return{bindsValue:null!=this.value,allMembers:this.members,customsEmbedded:!1,hasComposition:!1,atwho:null}},computed:{atItems:function(){return this.at?[this.at]:this.ats},currentItem:function(){return this.atwho?this.atwho.list[this.atwho.cur]:""},style:function(){if(this.atwho){var e=this.atwho,t=(e.list,e.cur,e.x),r=e.y,o=this.$refs.wrap;if(o){var a=n.i(i.b)(o),s=this.scrollRef?document.querySelector(this.scrollRef).scrollLeft:0,l=this.scrollRef?document.querySelector(this.scrollRef).scrollTop:0;return{left:t+s+window.pageXOffset-a.left+"px",top:r+l+window.pageYOffset-a.top+"px"}}}return null}},watch:{"atwho.cur":function(e){var t=this;null!=e&&this.$nextTick(function(){t.scrollToCur()})},members:function(e){this.allMembers=e},value:function(e,t){this.bindsValue&&this.handleValueUpdate(e)}},mounted:function(){this.$scopedSlots.embeddedItem&&(this.customsEmbedded=!0),this.bindsValue&&this.handleValueUpdate(this.value)},methods:{itemName:function(e){if(e){var t=this.nameKey;return t?e[t]:e}return""},isCur:function(e){return e===this.atwho.cur},handleValueUpdate:function(e){var t=this.$el.querySelector("[contenteditable]");e!==t.innerHTML&&(t.innerHTML=e,this.dispatchInput())},dispatchInput:function(){var e=this.$el.querySelector("[contenteditable]"),t=new Event("input",{bubbles:!0});e.dispatchEvent(t)},handleItemHover:function(e){this.hoverSelect&&this.selectByMouse(e)},handleItemClick:function(e){this.selectByMouse(e),this.insertItem()},handleDelete:function(e){var t=n.i(i.c)();if(t){if(this.customsEmbedded&&t.endOffset>=1){var r=t.endContainer.childNodes[t.endOffset]||t.endContainer.childNodes[t.endOffset-1];if(!r||r.nodeType===Node.TEXT_NODE&&!/^\s?$/.test(r.data))return;r.nodeType===Node.TEXT_NODE?r.previousSibling&&(r=r.previousSibling):r.previousElementSibling&&(r=r.previousElementSibling);var o=[].slice.call(r.childNodes);(o=[].reverse.call(o)).unshift(r);var a=void 0;if([].some.call(o,function(e){if(e.getAttribute&&null!=e.getAttribute("data-at-embedded"))return a=e,!0}),a){e.preventDefault(),e.stopPropagation();var s=n.i(i.d)();s&&(s.setStartBefore(a),s.deleteContents(),n.i(i.e)(s),this.handleInput())}return}var l=this.atItems,u=this.allMembers,c=this.suffix,d=this.deleteMatch,h=this.itemName,f=t.toString(),p=n.i(i.a)(f,l),v=p.at,m=p.index;if(m>-1){var w=f.slice(m+v.length);if(u.some(function(e){var t=h(e);return d(t,w,c)})){e.preventDefault(),e.stopPropagation();var g=n.i(i.d)();g&&(g.setStart(g.endContainer,m),g.deleteContents(),n.i(i.e)(g),this.handleInput())}}}},handleKeyDown:function(e){var t=this;if(this.atwho){if(38===e.keyCode||40===e.keyCode)return void(e.metaKey||e.ctrlKey||(e.preventDefault(),e.stopPropagation(),this.selectByKeyboard(e)));if(13===e.keyCode||this.tabSelect&&9===e.keyCode)return this.insertItem(),e.preventDefault(),void e.stopPropagation();if(27===e.keyCode)return void this.closePanel()}(e.keyCode>=48&&e.keyCode<=90||8===e.keyCode)&&setTimeout(function(){t.handleInput()},50),8===e.keyCode&&this.handleDelete(e)},handleCompositionStart:function(){this.hasComposition=!0},handleCompositionEnd:function(){this.hasComposition=!1,this.handleInput()},handleInput:function(e){if(!this.hasComposition){var t=this.$el.querySelector("[contenteditable]");this.$emit("input",t.innerHTML);var r=n.i(i.c)();if(r){var o=this.atItems,a=this.avoidEmail,s=this.allowSpaces,l=this.showUnique,u=!0,c=r.toString(),d=n.i(i.a)(c,o),h=d.at,f=d.index;f<0&&(u=!1);var p=c[f-1],v=c.slice(f+h.length,c.length);if(a&&/^[a-z0-9]$/i.test(p)&&(u=!1),!s&&/\s/.test(v)&&(u=!1),/^\s/.test(v)&&(u=!1),u){var m=this.allMembers,w=this.filterMatch,g=this.itemName;!e&&v&&this.$emit("at",v);var b=m.filter(function(e){var t=g(e);return w(t,v,h)});if(u=!1,b.length&&(u=!0,!l)){var x=b[0];v===g(x)&&(u=!1)}u?this.openPanel(b,r,f,h):this.closePanel()}else this.closePanel()}}},closePanel:function(){this.atwho&&(this.atwho=null)},openPanel:function(e,t,n,i){var r=this,o=function(){var o=t.cloneRange();o.setStart(o.endContainer,n+i.length);var a=o.getClientRects()[0];r.atwho={range:t,offset:n,list:e.length>0?e:[],x:a.left,y:a.top-4,cur:0}};this.atwho?o():setTimeout(o,10)},scrollToCur:function(){if(this.$refs.cur&&this.$refs.cur[0]){var e=this.$refs.cur[0],t=e.parentElement.parentElement;n.i(i.f)(e,t)}},selectByMouse:function(e){var t=+n.i(i.g)(e.target,function(e){return e.getAttribute("data-index")}).getAttribute("data-index");this.atwho=a({},this.atwho,{cur:t})},selectByKeyboard:function(e){var t=38===e.keyCode||13===e.keyCode?-1:1,n=this.atwho,i=n.cur,r=n.list,o=this.loop?(i+t+r.length)%r.length:Math.max(0,Math.min(i+t,r.length-1));this.atwho=a({},this.atwho,{cur:o})},insertText:function(e,t){t.deleteContents();var r=t.endContainer;if(r.nodeType===Node.TEXT_NODE){var o=t.endOffset;r.data=r.data.slice(0,o)+e+r.data.slice(o),t.setEnd(r,o+e.length)}else{var a=document.createTextNode(e);t.insertNode(a),t.setEndAfter(a)}t.collapse(!1),n.i(i.e)(t),this.dispatchInput()},insertHtml:function(e,t){t.deleteContents();var r=t.endContainer,o=document.createElement("span");if(o.appendChild(document.createTextNode(" ")),o.appendChild(this.htmlToElement(e)),o.appendChild(document.createTextNode(" ")),o.setAttribute("data-at-embedded",""),o.setAttribute("contenteditable",!1),r.nodeType===Node.TEXT_NODE){var a=t.endOffset,s=r.splitText(a);r.parentNode.insertBefore(o,s),t.setEndBefore(s)}else{var l=document.createTextNode(suffix);t.insertNode(o),t.setEndAfter(o),t.insertNode(l),t.setEndAfter(l)}t.collapse(!1),n.i(i.e)(t)},insertItem:function(){var e=this.atwho,t=e.range,r=(e.offset,e.list),o=e.cur,a=this.suffix,s=this.atItems,l=this.itemName,u=this.customsEmbedded,c=t.cloneRange(),d=t.toString(),h=n.i(i.a)(d,s),f=h.at,p=h.index,v=u?p:p+f.length;c.setStart(c.endContainer,v),n.i(i.e)(c),n.i(i.e)(c);var m=r[o];if(u){var w=this.$refs.embeddedItem.firstChild.innerHTML;this.insertHtml(w,c)}else{var g=l(m)+a;this.insertText(g,c)}this.$emit("insert",m),this.handleInput()},htmlToElement:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}}},function(e,t,n){(e.exports=n(4)()).push([e.i,".atwho-view{color:#000;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.1);min-width:120px;z-index:11110!important}.atwho-ul{list-style:none}.atwho-li{display:block}.atwho-view{border-radius:6px;box-shadow:0 0 10px 0 hsla(211,9%,44%,.5)}.atwho-ul{max-height:135px;padding:0;margin:0}.atwho-li{box-sizing:border-box;height:27px;padding:0 12px;white-space:nowrap;display:flex;align-items:center}.atwho-li span{overflow:hidden;text-overflow:ellipsis}.atwho-cur{background:#5bb8ff;color:#fff}.atwho-wrap{position:relative}.atwho-panel{position:absolute}.atwho-inner{position:relative}.atwho-view{position:absolute;bottom:0;left:-.8em;cursor:default;background-color:hsla(0,0%,100%,.94);min-width:140px;max-width:180px;max-height:200px;overflow-y:auto}.atwho-view::-webkit-scrollbar{width:11px;height:11px}.atwho-view::-webkit-scrollbar-track{background-color:#f5f5f5}.atwho-view::-webkit-scrollbar-thumb{min-height:36px;border:2px solid transparent;border-top:3px solid transparent;border-bottom:3px solid transparent;background-clip:padding-box;border-radius:7px;background-color:#c4c4c4}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var i=n(0)(n(2),null,null,null);e.exports=i.exports},function(e,t,n){n(9);var i=n(0)(null,n(7),null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrap",staticClass:"atwho-wrap",on:{compositionstart:e.handleCompositionStart,compositionend:e.handleCompositionEnd,input:function(t){return e.handleInput()},"!keydown":function(t){return e.handleKeyDown(t)}}},[n("div",{staticClass:"atwho-panel",style:e.style},[n("div",{staticClass:"atwho-inner"},[n("div",{staticClass:"atwho-view"},[e.atwho.list.length>0?n("ul",{staticClass:"atwho-ul"},e._l(e.atwho.list,function(t,i){return n("li",{key:i,ref:e.isCur(i)&&"cur",refInFor:!0,staticClass:"atwho-li",class:e.isCur(i)&&"atwho-cur",attrs:{"data-index":i},on:{mouseenter:e.handleItemHover,click:e.handleItemClick}},[e._t("item",[n("span",{domProps:{textContent:e._s(e.itemName(t))}})],{item:t})],2)}),0):n("ul",{staticClass:"atwho-ul"},[n("li",{staticClass:"atwho-li"},[e._t("emptyList",[n("span",{domProps:{textContent:e._s(e.emptyMembersMessage)}})])],2)])])])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"embeddedItem"},[e._t("embeddedItem",null,{current:e.currentItem})],2),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},function(e,t){var n={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},r=i(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),o=i(function(){return document.head||document.getElementsByTagName("head")[0]}),a=null,s=0,l=[];function u(e,t){for(var i=0;i<e.length;i++){var r=e[i],o=n[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(h(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(h(r.parts[a],t));n[r.id]={id:r.id,refs:1,parts:s}}}}function c(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],a={css:r[1],media:r[2],sourceMap:r[3]};n[o]?n[o].parts.push(a):t.push(n[o]={id:o,parts:[a]})}return t}function d(e){var t=document.createElement("style");return t.type="text/css",function(e,t){var n=o(),i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}(e,t),t}function h(e,t){var n,i,r;if(t.singleton){var o=s++;n=a||(a=d(t)),i=v.bind(null,n,o,!1),r=v.bind(null,n,o,!0)}else n=d(t),i=function(e,t){var n=t.css,i=t.media,r=t.sourceMap;i&&e.setAttribute("media",i);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){!function(e){e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(t=t||{}).singleton&&(t.singleton=r()),void 0===t.insertAt&&(t.insertAt="bottom");var i=c(e);return u(i,t),function(e){for(var r=[],o=0;o<i.length;o++){var a=i[o];(s=n[a.id]).refs--,r.push(s)}e&&u(c(e),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete n[s.id]}}}};var f,p=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function v(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.i,i,""]]);n(8)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),r=n.n(i),o=n(12),a=n.n(o),s=n(1);t.default={extends:r.a,name:"AtTextarea",computed:{style:function(){if(this.atwho){var e=this.atwho,t=(e.list,e.cur,e.x),n=e.y,i=this.$refs.wrap,r=this.$el.querySelector("textarea");if(i)return{left:t+r.offsetLeft-r.scrollLeft+"px",top:n+r.offsetTop-r.scrollTop+"px"}}return null}},methods:{handleValueUpdate:function(e){var t=this.$el.querySelector("textarea");e!==t.value&&(t.value=e,this.dispatchInput())},dispatchInput:function(){var e=this.$el.querySelector("textarea"),t=new Event("input",{bubbles:!0});e.dispatchEvent(t)},handleDelete:function(e){var t=this.$el.querySelector("textarea"),i=t.value.slice(0,t.selectionEnd);if(i){var r=this.atItems,o=this.members,a=this.suffix,l=this.deleteMatch,u=this.itemName,c=n.i(s.a)(i,r),d=c.at,h=c.index;if(h>-1){var f=i.slice(h+d.length);o.some(function(e){var t=u(e);return l(t,f,a)})&&(t.value=t.value.slice(0,h)+t.value.slice(t.selectionEnd-1),t.selectionStart=h+1,t.selectionEnd=h+1,this.handleInput())}}},handleInput:function(e){if(!this.hasComposition){var t=this.$el.querySelector("textarea");this.$emit("input",t.value);var i=t.value.slice(0,t.selectionEnd);if(i){var r=this.atItems,o=this.avoidEmail,a=this.allowSpaces,l=!0,u=n.i(s.a)(i,r),c=u.at,d=u.index;d<0&&(l=!1);var h=i[d-1],f=i.slice(d+c.length,i.length);if(o&&/^[a-z0-9]$/i.test(h)&&(l=!1),!a&&/\s/.test(f)&&(l=!1),/^\s/.test(f)&&(l=!1),l){var p=this.members,v=this.filterMatch,m=this.itemName;e||this.$emit("at",f);var w=p.filter(function(e){var t=m(e);return v(t,f,c)});w.length?this.openPanel(w,f,d,c,e):this.closePanel()}else this.closePanel()}else this.closePanel()}},openPanel:function(e,t,n,i){var r=this,o=function(){var o=r.$el.querySelector("textarea"),s=n+i.length,l=a()(o,s);r.atwho={chunk:t,offset:n,list:e,atEnd:s,x:l.left,y:l.top-4,cur:0}};this.atwho?o():setTimeout(o,10)},insertText:function(e,t){var n=t.selectionStart,i=t.selectionEnd;t.value=t.value.slice(0,n)+e+t.value.slice(i);var r=n+e.length;t.selectionStart=r,t.selectionEnd=r,this.dispatchInput()},insertItem:function(){var e=this.atwho,t=(e.chunk,e.offset,e.list),i=e.cur,r=e.atEnd,o=this.suffix,a=this.atItems,l=this.itemName,u=this.$el.querySelector("textarea"),c=u.value.slice(0,r),d=n.i(s.a)(c,a),h=d.at,f=d.index+h.length;u.selectionStart=f,u.focus();var p=t[i],v=l(p)+o;this.insertText(v,u),this.$emit("insert",p),this.handleInput()}}}},function(e,t,n){var i=n(0)(n(10),null,null,null);e.exports=i.exports},function(e,t){e.exports=require("textarea-caret")}]);
//# sourceMappingURL=vue-at-textarea.js.map