function t(t){return function(t){return null!==document.querySelector(t)}(t)?document.querySelector(t):null}function e(t,...e){const o=document.createElement(t);return o.classList.add(...e),o}function o(t,e){try{return t.querySelector(e)}catch(t){return null}}function i(t){return Number.isFinite(t)}const n=t=>{const e={1:"thin",2:"regular",3:"bold"};return void 0!==e[t]?e[t]:"regular"},s=t=>"none"===t||"square"===t?t:"circle",r=t=>i(t)&&16!==t?t<=13?13:t>=28?28:t:null,l=t=>"#000000"!==t?t:null,a=t=>"#ffffff"!==t?t:null,d=t=>!i(t)||t>1||t<.1||.5===t?null:t;function c(t,e=0){return setTimeout((()=>{t()}),e)}function u(t,e=5e3){return setInterval((()=>{t()}),e)}function p(t){clearInterval(t),clearTimeout(t)}const h=[function(t,e){if(!t.getOption("breakpoint"))return;(()=>{const o=t.getOption("columns"),i=t.getOption("breakpoint.columns"),n=Number(e.getAttribute("data-columns")),s=((t,e)=>{const o=window.innerWidth,i=Object.keys(t).filter((e=>o<t[e]));return void 0!==i[0]?Number(i[0]):e})(i,o);if(e.setAttribute("data-columns",o),void 0!==s&&n!==s){const e=t.getItems();t.updateOption("columns",s),t.updateCurrentItems();for(let o=0;o<e.length;o+=1)t.go("columns",e[o]);t.emit("breakpoint.changed")}})()},function(t,e,...o){const[i]=o,n=t.getOption("duration");"stop"!==i?(e.style.setProperty("transition-duration",`${n}ms`),t.on("destory",(()=>{e.style.removeProperty("transition-duration")}))):e.style.removeProperty("transition-duration")},function(t,e,...o){const[i]=o;e.style.setProperty("transform",`translateX(${i}px)`),t.on("destory",(()=>{e.style.removeProperty("transform")}))},function(t){if(!t.getOption("autoplay"))return;const e=t.getOption("autoplay.duration"),o="left"===t.getOption("autoplay.direction")?"<":">",i=u((()=>{t.slideTo(o)}),e);t.on("destory",(()=>{p(i)}))},function(t,e,...o){const[i,n]=o,s=n+1;if(t.getOption("grouping")){const e=t.getOption("columns"),o=Math.ceil((n+1)/e);i.setAttribute("data-order",o)}else i.setAttribute("data-order",s);t.on("destory",(()=>{i.removeAttribute("data-order")}))},function(t,e,...o){const[i]=o,n=t.getOption("columns"),s=parseFloat((1/n*100).toFixed(2));i.style.setProperty("flex",`0 0 ${s}%`),t.on("destory",(()=>{i.style.removeProperty("flex")}))},function(t,e){if(!t.getOption("preview"))return;const o=t.getOption("preview.edge");e.style.setProperty("padding",`0 ${o}px`),t.on("destory",(()=>{e.style.removeProperty("padding")}))},function(t,e,...o){const[i]=o,n=Math.floor(t.getOption("spacing")/2);i.style.setProperty("padding",`0px ${n}px`),t.on("destory",(()=>{i.style.removeProperty("padding")}))},function(t,e){const o=t.getOption("align");"center"===o?e.style.setProperty("align-items","center"):"bottom"===o&&e.style.setProperty("align-items","flex-end"),t.on("destory",(()=>{e.style.removeProperty("align-items")}))},function(t,e){if(!t.getOption("touch"))return;(()=>{const o=t.getOption("touch.threshold"),i=t.getOption("touch.duration"),n=t.adaptEvent(e),s={x:0,y:0,time:0};n.on("touchstart",(t=>{t.preventDefault();const e=t.changedTouches[0];s.x=e.pageX,s.y=e.pageY,s.time=(new Date).getTime()})),n.on("touchmove",(t=>{t.preventDefault()})),n.on("touchend",(e=>{e.preventDefault();const n=e.changedTouches[0],r=(new Date).getTime()-s.time,l=Math.abs(n.pageX-s.x);if(r>i||l<o)return;const a=n.pageX>s.x?">":"<";t.slideTo(a)}))})()},function(t,e,...o){const[i,n]=o,s=t.getOption("columns"),r=t.getOption("preview"),l=t.getOption("loop");if(!r&&!l)return;const a=t.getItemCount(),d=t.getItems(),c=s,u=i.cloneNode(!0);let p=null,h=!1;u.classList.add("sliderm__slide--clone"),n<c&&(e.appendChild(u),h=!0),n>=a-c&&(h?(p=i.cloneNode(!0),p.classList.add("sliderm__slide--clone"),e.insertBefore(p,d[0])):e.insertBefore(u,d[0])),t.on("destory",(()=>{u.remove(),p&&p.remove()}))},function(t,e,...o){const[i,n]=o,s=t.getOption("grouping"),r=t.getOption("preview"),l=t.getOption("duration"),a=t.getOption("columns"),d=t.getOption("loop"),u=t.getItems()[0].offsetWidth,p=t.getPage(),h=d||r,m=p.maximum();let g=p.calculate(i,!1);const f=g<1||g>m;let v=1,y=0;!d&&f||(s?(v=0-(h?0:-1)-g,y=u*v*a):(v=1-(h?a:0)-g,y=u*v),t.emit("slide.start"),t.go("transition",n),t.go("transform",y),t.updatePosition(g),f?c((()=>{g=p.calculate(i,f),s?(v=0-g,y=u*v*a):(v=1-a-g,y=u*v),t.go("transition","stop"),t.go("transform",y),t.updatePosition(g),t.emit("slide.end")}),l+10):t.emit("slide.end"))},function(t,e){const o=t.getOption("loop"),i=t.getOption("grouping");if(!o||!i)return;const n=t.getItems(),s=t.getOption("columns"),r=t.getItemCount(),l=n[n.length-1],a=s-r%s,d=[];if(a!==s&&1!==s){for(let t=1;t<=a;t+=1){const t=l.cloneNode(!0);t.classList.add("sliderm__slide--empty"),t.innerHTML="",e.appendChild(t),d.push(t)}t.updateCurrentItems(),t.on("destory",(()=>{d.forEach((t=>{t.remove()}))}))}},function(t){const e=t.getOption("duration"),o=t.getRoot();o.classList.add("sliderm"),o.classList.remove("sliderm--initialized"),o.classList.add("sliderm--initialize"),t.on("initialized",(()=>{c((()=>{o.classList.remove("sliderm--initialize"),o.classList.add("sliderm--initialized")}),e+50)}))}],m=[function(t){let i,n,s;const r=e=>{if("sliderm__pagination"===e.target.className){const o=Array.prototype.indexOf.call(n.childNodes,e.target)+1;t.slideTo(o)}},l=()=>{const e=t.getPosition(),i=o(t.getRoot(),".sliderm__paginations").children;Array.from(i).forEach(((t,o)=>{const i=o+1;t.removeAttribute("data-active"),i===e&&t.setAttribute("data-active",!0)}))},a=()=>{s.off("click",r),t.off("slide.end",l),n.remove()},d=()=>{(()=>{const o=e("div","sliderm__paginations");i=t.getPage().maximum();for(let t=0;t<i;t+=1){const i=e("div","sliderm__pagination");0===t&&i.setAttribute("data-active",!0),o.append(i)}n=o,s=t.adaptEvent(n),t.getRoot().append(n)})(),s.on("click",r),t.on("slide.end",l)};t.on("destory",a),t.on("breakpoint.changed",(()=>{a(),d()})),d()},function(t){(()=>{const o=t.getOption("spinner.color"),i=e("div","sliderm__spinner");i.style.setProperty("color",o),t.getRoot().append(i),t.on("destory",(()=>{i.remove()}))})()},function(t){(()=>{const o=[r,n,s,a,l,d],i=e("div","sliderm__button--previous"),c=e("div","sliderm__button--next"),u=t.adaptEvent(i),p=t.adaptEvent(c);let h=null,m=null;for(let n=0;n<o.length;n+=1){let{name:s}=o[n],r=o[n](t.getOption(`arrow.${s}`));null!==r&&("bold"===s?(h=e("span",`sliderm__icon-left--${r}`),m=e("span",`sliderm__icon-right--${r}`)):"shape"===s?(i.classList.add(`sliderm__button--${r}`),c.classList.add(`sliderm__button--${r}`)):("bgColor"===s?s="background-color":"size"===s&&(s="font-size",r=`${r}px`),i.style.setProperty(s,r),c.style.setProperty(s,r)))}i.append(h),c.append(m),t.getRoot().append(i),t.getRoot().append(c),u.on("click",(()=>{t.slideTo("<")})),p.on("click",(()=>{t.slideTo(">")})),t.on("destory",(()=>{i.remove(),c.remove()}))})()}];class g{constructor(){this.events={}}on(t,e){Object.prototype.hasOwnProperty.call(this.events,t)||(this.events[t]=[]),this.events[t].push(e)}off(t,e){void 0===e?delete this.events[t]:this.events[t].forEach(((o,i)=>{o===e&&this.events[t].splice(i,1)}))}emit(t,...e){void 0!==this.events[t]&&Array.isArray(this.events[t])&&this.events[t].forEach((t=>{t(...e)}))}destory(){delete this.events}}class f{constructor(t){this.target=t,this.events={}}on(t,e){this.events[t]=e,this.target.addEventListener(t,this.events[t])}off(t){this.target.removeEventListener(t,this.events[t])}emit(t){void 0!==this.events[t]&&this.target.dispatchEvent(new Event(t))}destory(){const t=Object.keys(this.events);for(let e=0;e<t.length;e+=1)this.off(t[e]);delete this.events}mock(t,e){void 0!==this.events[t]&&this.events[t](e)}}function v(t){console.error(`[Sliderm] ${t}`)}var y={arrow:!0,pagination:!0,spinner:!0,grouping:!1,loop:!0,preview:!1,breakpoint:!0,touch:!0,autoplay:!1,columns:4,duration:1e3,spacing:10,align:"center",extensions:[],_arrow:{color:"#ffffff",bgColor:"#000000",opacity:.5,size:16,shape:"circle",bold:2},_preview:{edge:40},_spinner:{color:"#1cbbb4"},_breakpoint:{columns:{4:!1,3:960,2:768,1:420}},_touch:{threshold:10,duration:300},_autoplay:{direction:"right",duration:5e3}};class b{constructor(t){this.sliderm=t}calculate(...t){const[e,o]=t,i=this.sliderm.getOption("columns"),n=this.sliderm.getOption("grouping"),s=this.sliderm.getItemCount(),r=this.sliderm.getGroupCount(),l=this.sliderm.getPosition(),a=n?r:s;let d=l,c=0;if(n){d=Math.ceil(l*i/i)}return"number"==typeof e?c=e:">"===e?(c=d+1,c>a&&o&&(c=1)):"<"===e&&(c=d-1,c<=0&&o&&(c=a)),c}maximum(){const t=this.sliderm.getOption("loop"),e=this.sliderm.getOption("preview"),o=this.sliderm.getOption("grouping"),i=this.sliderm.getOption("columns"),n=t||e;return o?this.sliderm.getGroupCount():n?this.sliderm.getItemCount():this.sliderm.getItemCount()-i+1}}new class{constructor(e,i){const n=t(e);n?(this.options=Object.assign(y,i),this.event=new g,this.page=new b(this),this.root=n,this.initialized=!1,this.domEvents=[],this.itemCount=0,this.position=1,this.modules={},this.slider=o(this.root,".sliderm__slides"),this.items=[],this.#t()):v(`The DOM "${e}" is invalid.`)}#t(){this.emit("initialize"),this.#e(),this.#o(),this.#i(),this.#n(),this.go("init"),this.go("breakpoint"),this.go("loop"),this.go("align"),this.go("touch"),this.go("preview"),this.go("autoplay"),this.items.forEach(((t,e)=>{this.go("columns",t),this.go("spacing",t),this.go("grouping",t,e),this.go("clone",t,e)})),this.slideTo(1),this.initialized=!0,this.emit("initialized")}#n(){for(let t=0;t<h.length;t+=1)"function"==typeof h[t]&&(this.modules[h[t].name]=h[t]);for(let t=0;t<m.length;t+=1)"function"==typeof m[t]&&this.getOption(m[t].name)&&m[t](this)}#e(){this.items=Array.from(o(this.root,".sliderm__slides").children),this.itemCount=this.items.length}#o(){const t=this.getOption("columns");this.groupCount=Math.ceil(this.itemCount/t)}#i(){for(let t=0;t<this.options.extensions.length;t+=1){const e=this.options.extensions[t].name;if(""!==e){const o=this.options.extensions[t];void 0===this.options[e]?h.push(o):m.push(o)}}}adaptEvent(t){const e=new f(t);return this.domEvents.push(e),e}getPage(){return this.page}getRoot(){return this.root}getItemCount(){return this.itemCount}getGroupCount(){return this.groupCount}getItems(){return this.items}getPosition(){return this.position}updatePosition(t){this.position=t}updateCurrentItems(){return!this.initialized&&(this.#e(),this.#o(),!0)}getOption(t,e=null){const o=void 0!==this.options[t]?this.options[t]:e;if(t.includes("."))try{const[e,o]=t.split(".");return this.options[`_${e}`][o]}catch(t){return e}return o}updateOption(t,e){if(t.includes("."))try{const[o,i]=t.split(".");this.options[`_${o}`][i]=e}catch(t){}else this.options[t]=e}slideTo(t){this.go("slide",t)}go(t,...e){void 0!==this.modules[t]?this.modules[t](this,this.slider,...e):v(`Invalid module name: ${t}`)}on(t,e){this.event.on(t,e)}off(t,e){this.event.off(t,e)}emit(t,...e){const o=[this,...e];this.event.emit(t,...o)}destory(){this.event.emit("destory"),this.event.destory(),this.domEvents.forEach((t=>{t.destory()}))}}(".your-class-name",{arrow:!1,pagination:!0,grouping:!1,loop:!0,preview:!1,columns:1,duration:1e3,spacing:10,align:"center"});(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),i=()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};e.addEventListener("click",i),o.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.f0d56252.js.map
