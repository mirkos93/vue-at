module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e,t,n,i){var o,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var l=s.computed||(s.computed={});Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}})}return{esModule:o,exports:r,options:s}}},function(e,t,n){"use strict";function i(){var e=window.getSelection();if(e&&e.rangeCount>0)return e.getRangeAt(0)}t.f=function(e,t){if(e.scrollIntoViewIfNeeded)e.scrollIntoViewIfNeeded(!1);else{var n=e.offsetTop-t.scrollTop;(n<0||n>t.offsetHeight-e.offsetHeight)&&((t=t||e.parentElement).scrollTop=e.offsetTop)}},t.e=function(e){var t=window.getSelection();t&&(t.removeAllRanges(),t.addRange(e))},t.d=i,t.a=function(e,t){return t.map(function(t){return{at:t,index:e.lastIndexOf(t)}}).reduce(function(e,t){return e.index>t.index?e:t})},t.b=function(e,t){t=t||window;var n={top:e.offsetTop,left:e.offsetLeft},i=e.offsetParent;for(;null!=i&&i!=t;)n.left+=i.offsetLeft,n.top+=i.offsetTop,i=i.offsetParent;return n},t.g=function(e,t){do{if(t(e))return e}while(e=e&&e.parentNode)},t.c=function(){var e=i();if(e){var t=e.cloneRange();return t.collapse(!0),t.setStart(t.endContainer,0),t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(6),r=n.n(o),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=this;t.default={name:"At",mixins:[r.a],props:{value:{type:String,default:null},at:{type:String,default:null},ats:{type:Array,default:function(){return["@"]}},suffix:{type:String,default:" "},loop:{type:Boolean,default:!0},allowSpaces:{type:Boolean,default:!0},tabSelect:{type:Boolean,default:!1},avoidEmail:{type:Boolean,default:!0},showUnique:{type:Boolean,default:!0},hoverSelect:{type:Boolean,default:!0},members:{type:Array,default:function(){return[]}},emptyMembersMessage:{type:String,default:"There is no one to tag"},nameKey:{type:String,default:""},filterMatch:{type:Function,default:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.value,t=arguments[1];arguments[2];return e.toLowerCase().indexOf(t.toLowerCase())>-1}},deleteMatch:{type:Function,default:function(e,t,n){return t===e+n}},scrollRef:{type:String,default:""}},data:function(){return{bindsValue:null!=this.value,allMembers:this.members,customsEmbedded:!1,hasComposition:!1,atwho:null}},computed:{atItems:function(){return this.at?[this.at]:this.ats},currentItem:function(){return this.atwho?this.atwho.list[this.atwho.cur]:""},style:function(){if(this.atwho){var e=this.atwho,t=(e.list,e.cur,e.x),o=e.y,r=this.$refs.wrap;if(r){var a=n.i(i.b)(r),s=this.scrollRef?document.querySelector(this.scrollRef).scrollLeft:0,l=this.scrollRef?document.querySelector(this.scrollRef).scrollTop:0;return{left:t+s+window.pageXOffset-a.left+"px",top:o+l+window.pageYOffset-a.top+"px"}}}return null}},watch:{"atwho.cur":function(e){var t=this;null!=e&&this.$nextTick(function(){t.scrollToCur()})},members:function(e){this.allMembers=e},value:function(e,t){this.bindsValue&&this.handleValueUpdate(e)}},mounted:function(){this.$scopedSlots.embeddedItem&&(this.customsEmbedded=!0),this.bindsValue&&this.handleValueUpdate(this.value)},methods:{itemName:function(e){if(e){var t=this.nameKey;return t?e[t]:e}return""},isCur:function(e){return e===this.atwho.cur},handleValueUpdate:function(e){var t=this.$el.querySelector("[contenteditable]");e!==t.innerHTML&&(t.innerHTML=e,this.dispatchInput())},dispatchInput:function(){var e=this.$el.querySelector("[contenteditable]"),t=new Event("input",{bubbles:!0});e.dispatchEvent(t)},handleItemHover:function(e){this.hoverSelect&&this.selectByMouse(e)},handleItemClick:function(e){this.selectByMouse(e),this.insertItem()},handleDelete:function(e){var t=n.i(i.c)();if(t){if(this.customsEmbedded&&t.endOffset>=1){var o=t.endContainer.childNodes[t.endOffset]||t.endContainer.childNodes[t.endOffset-1];if(!o||o.nodeType===Node.TEXT_NODE&&!/^\s?$/.test(o.data))return;o.nodeType===Node.TEXT_NODE?o.previousSibling&&(o=o.previousSibling):o.previousElementSibling&&(o=o.previousElementSibling);var r=[].slice.call(o.childNodes);(r=[].reverse.call(r)).unshift(o);var a=void 0;if([].some.call(r,function(e){if(e.getAttribute&&null!=e.getAttribute("data-at-embedded"))return a=e,!0}),a){e.preventDefault(),e.stopPropagation();var s=n.i(i.d)();s&&(s.setStartBefore(a),s.deleteContents(),n.i(i.e)(s),this.handleInput())}return}var l=this.atItems,u=this.allMembers,d=this.suffix,c=this.deleteMatch,f=this.itemName,h=t.toString(),p=n.i(i.a)(h,l),m=p.at,v=p.index;if(v>-1){var w=h.slice(v+m.length);if(u.some(function(e){var t=f(e);return c(t,w,d)})){e.preventDefault(),e.stopPropagation();var g=n.i(i.d)();g&&(g.setStart(g.endContainer,v),g.deleteContents(),n.i(i.e)(g),this.handleInput())}}}},handleKeyDown:function(e){var t=this;if(this.atwho){if(38===e.keyCode||40===e.keyCode)return void(e.metaKey||e.ctrlKey||(e.preventDefault(),e.stopPropagation(),this.selectByKeyboard(e)));if(13===e.keyCode||this.tabSelect&&9===e.keyCode)return this.insertItem(),e.preventDefault(),void e.stopPropagation();if(27===e.keyCode)return void this.closePanel()}(e.keyCode>=48&&e.keyCode<=90||8===e.keyCode)&&setTimeout(function(){t.handleInput()},50),8===e.keyCode&&this.handleDelete(e)},handleCompositionStart:function(){this.hasComposition=!0},handleCompositionEnd:function(){this.hasComposition=!1,this.handleInput()},handleInput:function(e){if(!this.hasComposition){var t=this.$el.querySelector("[contenteditable]");this.$emit("input",t.innerHTML);var o=n.i(i.c)();if(o){var r=this.atItems,a=this.avoidEmail,s=this.allowSpaces,l=this.showUnique,u=!0,d=o.toString(),c=n.i(i.a)(d,r),f=c.at,h=c.index;h<0&&(u=!1);var p=d[h-1],m=d.slice(h+f.length,d.length);if(a&&/^[a-z0-9]$/i.test(p)&&(u=!1),!s&&/\s/.test(m)&&(u=!1),/^\s/.test(m)&&(u=!1),u){var v=this.allMembers,w=this.filterMatch,g=this.itemName;!e&&m&&this.$emit("at",m);var b=v.filter(function(e){var t=g(e);return w(t,m,f)});if(u=!1,b.length&&(u=!0,!l)){var y=b[0];m===g(y)&&(u=!1)}u?this.openPanel(b,o,h,f):this.closePanel()}else this.closePanel()}}},closePanel:function(){this.atwho&&(this.atwho=null)},openPanel:function(e,t,n,i){var o=this,r=function(){var r=t.cloneRange();r.setStart(r.endContainer,n+i.length);var a=r.getClientRects()[0];o.atwho={range:t,offset:n,list:e.length>0?e:[],x:a.left,y:a.top-4,cur:0}};this.atwho?r():setTimeout(r,10)},scrollToCur:function(){if(this.$refs.cur&&this.$refs.cur[0]){var e=this.$refs.cur[0],t=e.parentElement.parentElement;n.i(i.f)(e,t)}},selectByMouse:function(e){var t=+n.i(i.g)(e.target,function(e){return e.getAttribute("data-index")}).getAttribute("data-index");this.atwho=a({},this.atwho,{cur:t})},selectByKeyboard:function(e){var t=38===e.keyCode||13===e.keyCode?-1:1,n=this.atwho,i=n.cur,o=n.list,r=this.loop?(i+t+o.length)%o.length:Math.max(0,Math.min(i+t,o.length-1));this.atwho=a({},this.atwho,{cur:r})},insertText:function(e,t){t.deleteContents();var o=t.endContainer;if(o.nodeType===Node.TEXT_NODE){var r=t.endOffset;o.data=o.data.slice(0,r)+e+o.data.slice(r),t.setEnd(o,r+e.length)}else{var a=document.createTextNode(e);t.insertNode(a),t.setEndAfter(a)}t.collapse(!1),n.i(i.e)(t),this.dispatchInput()},insertHtml:function(e,t){t.deleteContents();var o=t.endContainer,r=document.createElement("span");if(r.appendChild(document.createTextNode(" ")),r.appendChild(this.htmlToElement(e)),r.appendChild(document.createTextNode(" ")),r.setAttribute("data-at-embedded",""),r.setAttribute("contenteditable",!1),o.nodeType===Node.TEXT_NODE){var a=t.endOffset,s=o.splitText(a);o.parentNode.insertBefore(r,s),t.setEndBefore(s)}else{var l=document.createTextNode(suffix);t.insertNode(r),t.setEndAfter(r),t.insertNode(l),t.setEndAfter(l)}t.collapse(!1),n.i(i.e)(t)},insertItem:function(){var e=this.atwho,t=e.range,o=(e.offset,e.list),r=e.cur,a=this.suffix,s=this.atItems,l=this.itemName,u=this.customsEmbedded,d=t.cloneRange(),c=t.toString(),f=n.i(i.a)(c,s),h=f.at,p=f.index,m=u?p:p+h.length;d.setStart(d.endContainer,m),n.i(i.e)(d),n.i(i.e)(d);var v=o[r];if(u){var w=this.$refs.embeddedItem.firstChild.innerHTML;this.insertHtml(w,d)}else{var g=l(v)+a;this.insertText(g,d)}this.$emit("insert",v),this.handleInput()},htmlToElement:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}}},function(e,t,n){(e.exports=n(4)()).push([e.i,".atwho-view{color:#000;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.1);min-width:120px;z-index:11110!important}.atwho-ul{list-style:none}.atwho-li{display:block}.atwho-view{border-radius:6px;box-shadow:0 0 10px 0 hsla(211,9%,44%,.5)}.atwho-ul{max-height:135px;padding:0;margin:0}.atwho-li{box-sizing:border-box;height:27px;padding:0 12px;white-space:nowrap;display:flex;align-items:center}.atwho-li span{overflow:hidden;text-overflow:ellipsis}.atwho-cur{background:#5bb8ff;color:#fff}.atwho-wrap{position:relative}.atwho-panel{position:absolute}.atwho-inner{position:relative}.atwho-view{position:absolute;bottom:0;left:-.8em;cursor:default;background-color:hsla(0,0%,100%,.94);min-width:140px;max-width:180px;max-height:200px;overflow-y:auto}.atwho-view::-webkit-scrollbar{width:11px;height:11px}.atwho-view::-webkit-scrollbar-track{background-color:#f5f5f5}.atwho-view::-webkit-scrollbar-thumb{min-height:36px;border:2px solid transparent;border-top:3px solid transparent;border-bottom:3px solid transparent;background-clip:padding-box;border-radius:7px;background-color:#c4c4c4}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var i=n(0)(n(2),null,null,null);e.exports=i.exports},function(e,t,n){n(9);var i=n(0)(null,n(7),null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrap",staticClass:"atwho-wrap",on:{compositionstart:e.handleCompositionStart,compositionend:e.handleCompositionEnd,input:function(t){return e.handleInput()},"!keydown":function(t){return e.handleKeyDown(t)}}},[n("div",{staticClass:"atwho-panel",style:e.style},[n("div",{staticClass:"atwho-inner"},[n("div",{staticClass:"atwho-view"},[e.atwho.list.length>0?n("ul",{staticClass:"atwho-ul"},e._l(e.atwho.list,function(t,i){return n("li",{key:i,ref:e.isCur(i)&&"cur",refInFor:!0,staticClass:"atwho-li",class:e.isCur(i)&&"atwho-cur",attrs:{"data-index":i},on:{mouseenter:e.handleItemHover,click:e.handleItemClick}},[e._t("item",[n("span",{domProps:{textContent:e._s(e.itemName(t))}})],{item:t})],2)}),0):n("ul",{staticClass:"atwho-ul"},[n("li",{staticClass:"atwho-li"},[e._t("emptyList",[n("span",{domProps:{textContent:e._s(e.emptyMembersMessage)}})])],2)])])])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"embeddedItem"},[e._t("embeddedItem",null,{current:e.currentItem})],2),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},function(e,t){var n={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},o=i(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),r=i(function(){return document.head||document.getElementsByTagName("head")[0]}),a=null,s=0,l=[];function u(e,t){for(var i=0;i<e.length;i++){var o=e[i],r=n[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(f(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(f(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function d(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[r]?n[r].parts.push(a):t.push(n[r]={id:r,parts:[a]})}return t}function c(e){var t=document.createElement("style");return t.type="text/css",function(e,t){var n=r(),i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}(e,t),t}function f(e,t){var n,i,o;if(t.singleton){var r=s++;n=a||(a=c(t)),i=m.bind(null,n,r,!1),o=m.bind(null,n,r,!0)}else n=c(t),i=function(e,t){var n=t.css,i=t.media,o=t.sourceMap;i&&e.setAttribute("media",i);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){!function(e){e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(t=t||{}).singleton&&(t.singleton=o()),void 0===t.insertAt&&(t.insertAt="bottom");var i=d(e);return u(i,t),function(e){for(var o=[],r=0;r<i.length;r++){var a=i[r];(s=n[a.id]).refs--,o.push(s)}e&&u(d(e),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete n[s.id]}}}};var h,p=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function m(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}},function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.i,i,""]]);n(8)(i,{});i.locals&&(e.exports=i.locals)}]);
//# sourceMappingURL=vue-at.js.map