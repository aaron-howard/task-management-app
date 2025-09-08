"use strict";(self["webpackChunktask_management_app"]=self["webpackChunktask_management_app"]||[]).push([[504],{64:function(e,t,n){var r,i,s,o=n(471);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r["throw"](e))}catch(t){s(t)}}function c(e){e.done?n(e.value):i(e.value).then(o,a)}c((r=r.apply(e,t||[])).next())})}(function(e){e["SUCCESS"]="success",e["ERROR"]="error",e["WARNING"]="warning",e["INFO"]="info",e["DEFAULT"]="default"})(r||(r={})),function(e){e["TOP_LEFT"]="top-left",e["TOP_CENTER"]="top-center",e["TOP_RIGHT"]="top-right",e["BOTTOM_LEFT"]="bottom-left",e["BOTTOM_CENTER"]="bottom-center",e["BOTTOM_RIGHT"]="bottom-right"}(i||(i={})),function(e){e["ADD"]="add",e["DISMISS"]="dismiss",e["UPDATE"]="update",e["CLEAR"]="clear",e["UPDATE_DEFAULTS"]="update_defaults"}(s||(s={}));const c="Vue-Toastification",u={type:{type:String,default:r.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},l={type:u.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},h={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:u.classNames,showOnHover:Boolean,ariaLabel:{type:String,default:"close"}},d={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:Boolean,isRunning:Boolean},f={transition:{type:[Object,String],default:`${c}__bounce`},transitionDuration:{type:[Number,Object],default:750}},p={position:{type:String,default:i.TOP_RIGHT},draggable:u.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:u.trueBoolean,pauseOnHover:u.trueBoolean,closeOnClick:u.trueBoolean,timeout:d.timeout,hideProgressBar:d.hideProgressBar,toastClassName:u.classNames,bodyClassName:u.classNames,icon:l.customIcon,closeButton:h.component,closeButtonClassName:h.classNames,showCloseButtonOnHover:h.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:Boolean,eventBus:Object},m={id:{type:[String,Number],required:!0},type:u.type,content:{type:[String,Object,Function],required:!0},onClick:Function,onClose:Function},g={container:{type:void 0,default:()=>document.body},newestOnTop:u.trueBoolean,maxToasts:{type:Number,default:20},transition:f.transition,transitionDuration:f.transitionDuration,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:u.classNames,onMounted:Function};var v={CORE_TOAST:p,TOAST:m,CONTAINER:g,PROGRESS_BAR:d,ICON:l,TRANSITION:f,CLOSE_BUTTON:h};const y=e=>"function"===typeof e,w=e=>"string"===typeof e,b=e=>w(e)&&e.trim().length>0,_=e=>"number"===typeof e,I=e=>"undefined"===typeof e,T=e=>"object"===typeof e&&null!==e,E=e=>O(e,"tag")&&b(e.tag),S=e=>window.TouchEvent&&e instanceof TouchEvent,C=e=>O(e,"component")&&D(e.component),k=e=>y(e)&&O(e,"cid"),A=e=>!!k(e)||!!T(e)&&(!(!e.extends&&!e._Ctor)||(!!w(e.template)||R(e))),x=e=>e instanceof o.Ay||A(e),D=e=>!I(e)&&(w(e)||x(e)||R(e)||E(e)||C(e)),N=e=>T(e)&&_(e.height)&&_(e.width)&&_(e.right)&&_(e.left)&&_(e.top)&&_(e.bottom),O=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),R=e=>O(e,"render")&&y(e.render),P=(e=>()=>e++)(0);function L(e){return S(e)?e.targetTouches[0].clientX:e.clientX}function M(e){return S(e)?e.targetTouches[0].clientY:e.clientY}const F=e=>{I(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},V=e=>C(e)?V(e.component):E(e)?{render(){return e}}:e;var $=o.Ay.extend({props:v.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${c}__progress-bar`:""}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeDestroy(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}}});function U(e,t,n,r,i,s,o,a,c,u){"boolean"!==typeof o&&(c=a,a=o,o=!1);const l="function"===typeof n?n.options:n;let h;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),r&&(l._scopeId=r),s?(h=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=h):t&&(h=o?function(e){t.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),h)if(l.functional){const e=l.render;l.render=function(t,n){return h.call(n),e(t,n)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,h):[h]}return n}const j=$;var B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.cpClass,style:e.style})},q=[];B._withStripped=!0;const z=void 0,K=void 0,G=void 0,H=!1,W=U({render:B,staticRenderFns:q},z,j,K,H,G,!1,void 0,void 0,void 0);var Q=o.Ay.extend({props:v.CLOSE_BUTTON,computed:{buttonComponent(){return!1!==this.component?V(this.component):"button"},classes(){const e=[`${c}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}});const Y=Q;var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.buttonComponent,e._g({tag:"component",class:e.classes,attrs:{"aria-label":e.ariaLabel}},e.$listeners),[e._v("\n  ×\n")])},J=[];X._withStripped=!0;const Z=void 0,ee=void 0,te=void 0,ne=!1,re=U({render:X,staticRenderFns:J},Z,Y,ee,ne,te,!1,void 0,void 0,void 0);var ie={};const se=ie;var oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"svg-inline--fa fa-check-circle fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}})])},ae=[];oe._withStripped=!0;const ce=void 0,ue=void 0,le=void 0,he=!1,de=U({render:oe,staticRenderFns:ae},ce,se,ue,he,le,!1,void 0,void 0,void 0);var fe={};const pe=fe;var me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"svg-inline--fa fa-info-circle fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}})])},ge=[];me._withStripped=!0;const ve=void 0,ye=void 0,we=void 0,be=!1,_e=U({render:me,staticRenderFns:ge},ve,pe,ye,be,we,!1,void 0,void 0,void 0);var Ie={};const Te=Ie;var Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"svg-inline--fa fa-exclamation-circle fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}})])},Se=[];Ee._withStripped=!0;const Ce=void 0,ke=void 0,Ae=void 0,xe=!1,De=U({render:Ee,staticRenderFns:Se},Ce,Te,ke,xe,Ae,!1,void 0,void 0,void 0);var Ne={};const Oe=Ne;var Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"svg-inline--fa fa-exclamation-triangle fa-w-18",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[n("path",{attrs:{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}})])},Pe=[];Re._withStripped=!0;const Le=void 0,Me=void 0,Fe=void 0,Ve=!1,$e=U({render:Re,staticRenderFns:Pe},Le,Oe,Me,Ve,Fe,!1,void 0,void 0,void 0);var Ue=o.Ay.extend({props:v.ICON,computed:{customIconChildren(){return O(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return w(this.customIcon)?this.trimValue(this.customIcon):O(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return O(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:D(this.customIcon)?V(this.customIcon):this.iconTypeComponent},iconTypeComponent(){const e={[r.DEFAULT]:_e,[r.INFO]:_e,[r.SUCCESS]:de,[r.ERROR]:$e,[r.WARNING]:De};return e[this.type]},iconClasses(){const e=[`${c}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return b(e)?e.trim():t}}});const je=Ue;var Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.component,{tag:"component",class:e.iconClasses},[e._v(e._s(e.customIconChildren))])},qe=[];Be._withStripped=!0;const ze=void 0,Ke=void 0,Ge=void 0,He=!1,We=U({render:Be,staticRenderFns:qe},ze,je,Ke,He,Ge,!1,void 0,void 0,void 0);var Qe=o.Ay.extend({components:{ProgressBar:W,CloseButton:re,Icon:We},inheritAttrs:!1,props:Object.assign({},v.CORE_TOAST,v.TOAST),data(){const e={isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}};return e},computed:{classes(){const e=[`${c}__toast`,`${c}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${c}__toast--rtl`),e},bodyClasses(){const e=[`${c}__toast-${w(this.content)?"body":"component-body"}`].concat(this.bodyClassName);return e},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return N(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeDestroy(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},destroyed(){setTimeout(()=>{F(this.$el)},1e3)},methods:{getVueComponentFromObj:V,closeToast(){this.eventBus.$emit(s.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(this.beingDragged&&this.dragStart!==this.dragPos.x||this.closeToast())},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:L(e),y:M(e)},this.dragStart=L(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:L(e),y:M(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,N(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}});const Ye=Qe;var Xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classes,style:e.draggableStyle,on:{click:e.clickHandler,mouseenter:e.hoverPause,mouseleave:e.hoverPlay}},[e.icon?n("Icon",{attrs:{"custom-icon":e.icon,type:e.type}}):e._e(),e._v(" "),n("div",{class:e.bodyClasses,attrs:{role:e.accessibility.toastRole||"alert"}},["string"===typeof e.content?[e._v(e._s(e.content))]:n(e.getVueComponentFromObj(e.content),e._g(e._b({tag:"component",attrs:{"toast-id":e.id},on:{"close-toast":e.closeToast}},"component",e.content.props,!1),e.content.listeners))],2),e._v(" "),e.closeButton?n("CloseButton",{attrs:{component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel},on:{click:function(t){return t.stopPropagation(),e.closeToast(t)}}}):e._e(),e._v(" "),e.timeout?n("ProgressBar",{attrs:{"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout},on:{"close-toast":e.timeoutHandler}}):e._e()],1)},Je=[];Xe._withStripped=!0;const Ze=void 0,et=void 0,tt=void 0,nt=!1,rt=U({render:Xe,staticRenderFns:Je},Ze,Ye,et,nt,tt,!1,void 0,void 0,void 0);var it=o.Ay.extend({inheritAttrs:!1,props:v.TRANSITION,methods:{beforeEnter(e){const t="number"===typeof this.transitionDuration?this.transitionDuration:this.transitionDuration.enter;e.style.animationDuration=`${t}ms`,e.style.animationFillMode="both",this.$emit("before-enter",e)},afterEnter(e){this.cleanUpStyles(e),this.$emit("after-enter",e)},afterLeave(e){this.cleanUpStyles(e),this.$emit("after-leave",e)},beforeLeave(e){const t="number"===typeof this.transitionDuration?this.transitionDuration:this.transitionDuration.leave;e.style.animationDuration=`${t}ms`,e.style.animationFillMode="both",this.$emit("before-leave",e)},leave(e,t){this.setAbsolutePosition(e),this.$emit("leave",e,t)},setAbsolutePosition(e){e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.height=getComputedStyle(e).height,e.style.position="absolute"},cleanUpStyles(e){e.style.animationFillMode="",e.style.animationDuration=""}}});const st=it;var ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition-group",{attrs:{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:e.transition+"-enter-active","move-class":e.transition.move?e.transition.move:e.transition+"-move","leave-active-class":e.transition.leave?e.transition.leave:e.transition+"-leave-active"},on:{leave:e.leave,"before-enter":e.beforeEnter,"before-leave":e.beforeLeave,"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[e._t("default")],2)},at=[];ot._withStripped=!0;const ct=void 0,ut=void 0,lt=void 0,ht=!1,dt=U({render:ot,staticRenderFns:at},ct,st,ut,ht,lt,!1,void 0,void 0,void 0);var ft=o.Ay.extend({components:{Toast:rt,VtTransition:dt},props:Object.assign({},v.CORE_TOAST,v.CONTAINER,v.TRANSITION),data(){const e={count:0,positions:Object.values(i),toasts:{},defaults:{}};return e},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){this.setup(this.container);const e=this.eventBus;e.$on(s.ADD,this.addToast),e.$on(s.CLEAR,this.clearToasts),e.$on(s.DISMISS,this.dismissToast),e.$on(s.UPDATE,this.updateToast),e.$on(s.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},methods:{setup(e){return a(this,void 0,void 0,function*(){y(e)&&(e=yield e()),F(this.$el),e.appendChild(this.$el)})},setToast(e){I(e.id)||this.$set(this.toasts,e.id,e)},addToast(e){const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),n=this.defaults.filterBeforeCreate(t,this.toastArray);n&&this.setToast(n)},dismissToast(e){const t=this.toasts[e];I(t)||I(t.onClose)||t.onClose(),this.$delete(this.toasts,e)},clearToasts(){Object.keys(this.toasts).forEach(e=>{this.dismissToast(e)})},getPositionToasts(e){const t=this.filteredToasts.filter(t=>t.position===e).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){I(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:n}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):n&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){const t=[`${c}__container`,e];return t.concat(this.defaults.containerClassName)}}});const pt=ft;var mt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.positions,function(t){return n("div",{key:t},[n("VtTransition",{class:e.getClasses(t),attrs:{transition:e.defaults.transition,"transition-duration":e.defaults.transitionDuration}},e._l(e.getPositionToasts(t),function(t){return n("Toast",e._b({key:t.id},"Toast",t,!1))}),1)],1)}),0)},gt=[];mt._withStripped=!0;const vt=void 0,yt=void 0,wt=void 0,bt=!1,_t=U({render:mt,staticRenderFns:gt},vt,pt,yt,bt,wt,!1,void 0,void 0,void 0),It=(e,t={},n=!0)=>{const i=t.eventBus=t.eventBus||new e;if(n){const n=new(e.extend(_t))({el:document.createElement("div"),propsData:t}),r=t.onMounted;I(r)||r(n)}const o=(e,t)=>{const n=Object.assign({},{id:P(),type:r.DEFAULT},t,{content:e});return i.$emit(s.ADD,n),n.id};function a(e,{content:t,options:n},r=!1){i.$emit(s.UPDATE,{id:e,options:Object.assign({},n,{content:t}),create:r})}return o.clear=()=>i.$emit(s.CLEAR),o.updateDefaults=e=>{i.$emit(s.UPDATE_DEFAULTS,e)},o.dismiss=e=>{i.$emit(s.DISMISS,e)},o.update=a,o.success=(e,t)=>o(e,Object.assign({},t,{type:r.SUCCESS})),o.info=(e,t)=>o(e,Object.assign({},t,{type:r.INFO})),o.error=(e,t)=>o(e,Object.assign({},t,{type:r.ERROR})),o.warning=(e,t)=>o(e,Object.assign({},t,{type:r.WARNING})),o};function Tt(e,t=o.Ay){const n=e=>e instanceof t;return n(e)?It(t,{eventBus:e},!1):It(t,e,!0)}const Et=(e,t)=>{const n=Tt(t,e);e.$toast=n,e.prototype.$toast=n};t.Ay=Et},125:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});var r=n(743);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},173:function(e,t,n){function r(e,t){for(var n in t)e[n]=t[n];return e}n.d(t,{Ay:function(){return It}});var i=/[!'()*]/g,s=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,s).replace(o,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var s in t){var o=t[s];r[s]=Array.isArray(o)?o.map(l):l(o)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]}),t):t}function d(e){var t=e?Object.keys(e).map(function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach(function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))}),r.join("&")}return a(t)+"="+a(n)}).filter(function(e){return e.length>0}).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,s=t.query||{};try{s=m(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:y(t,i),matched:e?v(e):[]};return n&&(o.redirectedFrom=y(n,i)),Object.freeze(o)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var g=p(null,{path:"/"});function v(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var s=t||d;return(n||"/")+s(r)+i}function w(e,t,n){return t===g?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every(function(n,i){var s=e[n],o=r[i];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?b(s,a):String(s)===String(a)})}function _(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&I(e.query,t.query)}function I(e,t){for(var n in t)if(!(n in e))return!1;return!0}function T(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&S(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),T(u)};var y=g.props&&g.props[c];return y&&(r(l[c],{route:u,configProps:y}),S(v,o,u,y)),a(v,o,i)}};function S(e,t,n,i){var s=t.props=C(n,i);if(s){s=t.props=r({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function C(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function k(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function A(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function x(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var D=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},N=Y,O=F,R=V,P=j,L=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(e,t){var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!v,pattern:I?q(I):v?".*":"[^"+B(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function V(e,t){return j(F(e,t),t)}function $(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function U(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function j(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",K(t)));return function(t,r){for(var i="",s=t||{},o=r||{},a=o.pretty?$:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(D(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?U(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function z(e,t){return e.keys=t,e}function K(e){return e&&e.sensitive?"":"i"}function G(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(e,t)}function H(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Y(e[i],t,n).source);var s=new RegExp("(?:"+r.join("|")+")",K(n));return z(s,t)}function W(e,t,n){return Q(F(e,n),t,n)}function Q(e,t,n){D(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+s,K(n)),t)}function Y(e,t,n){return D(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?G(e,t):D(e)?H(e,t,n):W(e,t,n)}N.parse=O,N.compile=R,N.tokensToFunction=P,N.tokensToRegExp=L;var X=Object.create(null);function J(e,t,n){t=t||{};try{var r=X[e]||(X[e]=N.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Z(e,t,n,i){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=r({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&t){s=r({},s),s._normalized=!0;var a=r(r({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=J(c,a,"path "+t.path)}else 0;return s}var l=A(s.path||""),h=t&&t.path||"/",d=l.path?k(l.path,h,n||s.append):h,f=u(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[g]=w(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:_(i,v);var y=u[g]?this.ariaCurrentValue:null,b=function(e){se(e)&&(t.replace?n.replace(o,re):n.push(o,re))},I={click:se};Array.isArray(this.event)?this.event.forEach(function(e){I[e]=b}):I[this.event]=b;var T={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[m],isExactActive:u[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)T.on=I,T.attrs={href:c,"aria-current":y};else{var S=oe(this.$slots.default);if(S){S.isStatic=!1;var C=S.data=r({},S.data);for(var k in C.on=C.on||{},C.on){var A=C.on[k];k in I&&(C.on[k]=Array.isArray(A)?A:[A])}for(var x in I)x in C.on?C.on[x].push(I[x]):C.on[x]=b;var D=S.data.attrs=r({},S.data.attrs);D.href=c,D["aria-current"]=y}else T.on=I}return e(this.tag,T,this.$slots.default)}};function se(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oe(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=oe(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",E),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var s=t||[],o=n||Object.create(null),a=r||Object.create(null);e.forEach(function(e){le(s,o,a,e,i)});for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function le(e,t,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach(function(r){var i=s?x(s+"/"+r.path):void 0;le(e,t,n,r,l,i)}),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=N(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:x(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(e){ue(e,r,i,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;ue([t||e],r,i,s,n),n&&n.alias.length&&ue(n.alias.map(function(e){return{path:e,children:[t]}}),r,i,s,n)}function c(){return r.map(function(e){return i[e]})}function u(e,n,o){var a=Z(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter(function(e){return!e.optional}).map(function(e){return e.name});if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pe(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),g=J(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=J(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return t.params=i.params,d(o,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=e.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function me(e,t){return k(e,t.parent?t.parent.path:"/",!0)}var ge=ce&&window.performance&&window.performance.now?window.performance:Date;function ve(){return ge.now().toFixed(3)}var ye=ve();function we(){return ye}function be(e){return ye=e}var _e=Object.create(null);function Ie(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=we(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Se),function(){window.removeEventListener("popstate",Se)}}function Te(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick(function(){var s=Ce(),o=i.call(e,t,n,r?s:null);o&&("function"===typeof o.then?o.then(function(e){Re(e,s)}).catch(function(e){0}):Re(o,s))})}}function Ee(){var e=we();e&&(_e[e]={x:window.pageXOffset,y:window.pageYOffset})}function Se(e){Ee(),e.state&&e.state.key&&be(e.state.key)}function Ce(){var e=we();if(e)return _e[e]}function ke(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Ae(e){return Ne(e.x)||Ne(e.y)}function xe(e){return{x:Ne(e.x)?e.x:window.pageXOffset,y:Ne(e.y)?e.y:window.pageYOffset}}function De(e){return{x:Ne(e.x)?e.x:0,y:Ne(e.y)?e.y:0}}function Ne(e){return"number"===typeof e}var Oe=/^#\d/;function Re(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Oe.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=De(i),t=ke(r,i)}else Ae(e)&&(t=xe(e))}else n&&Ae(e)&&(t=xe(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Pe=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Le(e,t){Ee();var n=window.history;try{if(t){var i=r({},n.state);i.key=we(),n.replaceState(i,"",e)}else n.pushState({key:be(ve())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function Me(e){Le(e,!0)}var Fe={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ve(e,t){return Be(e,t,Fe.redirected,'Redirected when going from "'+e.fullPath+'" to "'+ze(t)+'" via a navigation guard.')}function $e(e,t){var n=Be(e,t,Fe.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Ue(e,t){return Be(e,t,Fe.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function je(e,t){return Be(e,t,Fe.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Be(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var qe=["params","query","hash"];function ze(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return qe.forEach(function(n){n in e&&(t[n]=e[n])}),JSON.stringify(t,null,2)}function Ke(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ge(e,t){return Ke(e)&&e._isRouter&&(null==t||e.type===t)}function He(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],function(){r(i+1)}):r(i+1)};r(0)}function We(e){return function(t,n,r){var i=!1,s=0,o=null;Qe(e,function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,s++;var c,u=Ze(function(t){Je(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,s--,s<=0&&r()}),l=Ze(function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=Ke(e)?e:new Error(t),r(o))});try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}}),i||r()}}function Qe(e,t){return Ye(e.map(function(e){return Object.keys(e.components).map(function(n){return t(e.components[n],e.instances[n],e,n)})}))}function Ye(e){return Array.prototype.concat.apply([],e)}var Xe="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Je(e){return e.__esModule||Xe&&"Module"===e[Symbol.toStringTag]}function Ze(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Qe(e,function(e,r,i,s){var o=it(e,t);if(o)return Array.isArray(o)?o.map(function(e){return n(e,r,i,s)}):n(o,r,i,s)});return Ye(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function st(e){return rt(e,"beforeRouteLeave",at,!0)}function ot(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",function(e,t,n,r){return ut(e,n,r)})}function ut(e,t,n){return function(r,i,s){return e(r,i,function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)})}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach(function(e){e(o)}),o}var s=this.current;this.confirmTransition(r,function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach(function(e){e&&e(r,s)}),i.ready||(i.ready=!0,i.readyCbs.forEach(function(e){e(r)}))},function(e){n&&n(e),e&&!i.ready&&(Ge(e,Fe.redirected)&&s===g||(i.ready=!0,i.readyErrorCbs.forEach(function(t){t(e)})))})},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var s=function(e){!Ge(e)&&Ke(e)&&(r.errorCbs.length?r.errorCbs.forEach(function(t){t(e)}):console.error(e)),n&&n(e)},o=e.matched.length-1,a=i.matched.length-1;if(w(e,i)&&o===a&&e.matched[o]===i.matched[a])return this.ensureURL(),e.hash&&Te(this.router,i,e,!1),s($e(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(st(l),this.router.beforeHooks,ot(u),h.map(function(e){return e.beforeEnter}),We(h)),f=function(t,n){if(r.pending!==e)return s(Ue(i,e));try{t(e,i,function(t){!1===t?(r.ensureURL(!0),s(je(i,e))):Ke(t)?(r.ensureURL(!0),s(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(s(Ve(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)})}catch(o){s(o)}};He(d,f,function(){var n=ct(h),o=n.concat(r.router.resolveHooks);He(o,f,function(){if(r.pending!==e)return s(Ue(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick(function(){T(e)})})})},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=g,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Pe&&n;r&&this.listeners.push(Ie());var i=function(){var n=e.current,i=ht(e.base);e.current===g&&i===e._startLocation||e.transitionTo(i,function(e){r&&Te(t,e,n,!0)})};window.addEventListener("popstate",i),this.listeners.push(function(){window.removeEventListener("popstate",i)})}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,function(e){Le(x(r.base+e.fullPath)),Te(r.router,e,s,!1),t&&t(e)},n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,function(e){Me(x(r.base+e.fullPath)),Te(r.router,e,s,!1),t&&t(e)},n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=x(this.base+this.current.fullPath);e?Le(t):Me(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(x(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Pe&&n;r&&this.listeners.push(Ie());var i=function(){var t=e.current;pt()&&e.transitionTo(mt(),function(n){r&&Te(e.router,n,t,!0),Pe||yt(n.fullPath)})},s=Pe?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push(function(){window.removeEventListener(s,i)})}},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,function(e){vt(e.fullPath),Te(r.router,e,s,!1),t&&t(e)},n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,function(e){yt(e.fullPath),Te(r.router,e,s,!1),t&&t(e)},n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?vt(t):yt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(x(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function gt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function vt(e){Pe?Le(gt(e)):window.location.hash=e}function yt(e){Pe?Me(gt(e)):window.location.replace(gt(e))}var wt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)},n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)},n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach(function(t){t&&t(r,e)})},function(e){Ge(e,Fe.duplicated)&&(t.index=n)})}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Pe&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new wt(this,e.base);break;default:0}},_t={currentRoute:{configurable:!0}};bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},_t.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()}),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,s=Pe&&i;s&&"fullPath"in e&&Te(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen(function(e){t.apps.forEach(function(t){t._route=e})})}},bt.prototype.beforeEach=function(e){return Tt(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return Tt(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return Tt(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise(function(t,n){r.history.push(e,t,n)});this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise(function(t,n){r.history.replace(e,t,n)});this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map(function(e){return Object.keys(e.components).map(function(t){return e.components[t]})})):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Z(e,t,n,this),i=this.match(r,t),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Et(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,_t);var It=bt;function Tt(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Et(e,t,n){var r="hash"===n?"#"+t:t;return e?x(e+"/"+r):r}bt.install=ae,bt.version="3.6.5",bt.isNavigationFailure=Ge,bt.NavigationFailureType=Fe,bt.START_LOCATION=g,ce&&window.Vue&&window.Vue.use(bt)},210:function(e,t,n){n.d(t,{P5:function(){return Bt}});var r=n(928),i=n(424),s=n(743),o=n(125);const a=(e,t)=>t.some(t=>e instanceof t);let c,u;function l(){return c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,g=new WeakMap;function v(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(T(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&d.set(t,e)}).catch(()=>{}),g.set(t,e),t}function y(e){if(f.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});f.set(e,t)}let w={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){w=e(w)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(e)?function(...t){return e.apply(E(this),t),T(d.get(this))}:function(...t){return T(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return p.set(r,t.sort?t.sort():[t]),T(r)}}function I(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&y(e),a(e,l())?new Proxy(e,w):e)}function T(e){if(e instanceof IDBRequest)return v(e);if(m.has(e))return m.get(e);const t=I(e);return t!==e&&(m.set(e,t),g.set(t,e)),t}const E=e=>g.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=T(o);return r&&o.addEventListener("upgradeneeded",e=>{r(T(o.result),e.oldVersion,e.newVersion,T(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const C=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],A=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}b(e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)}));const D="@firebase/installations",N="0.6.4",O=1e4,R=`w:${N}`,P="FIS_v2",L="https://firebaseinstallations.googleapis.com/v1",M=36e5,F="installations",V="Installations",$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},U=new s.FA(F,V,$);function j(e){return e instanceof s.g&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B({projectId:e}){return`${L}/projects/${e}/installations`}function q(e){return{token:e.token,requestStatus:2,expiresIn:W(e.expiresIn),creationTime:Date.now()}}async function z(e,t){const n=await t.json(),r=n.error;return U.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function K({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function G(e,{refreshToken:t}){const n=K(e);return n.append("Authorization",Q(t)),n}async function H(e){const t=await e();return t.status>=500&&t.status<600?e():t}function W(e){return Number(e.replace("s","000"))}function Q(e){return`${P} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=B(e),i=K(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:P,appId:e.appId,sdkVersion:R},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await H(()=>fetch(r,a));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:q(e.authToken)};return t}throw await z("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=/^[cdef][\w-]{21}$/,ee="";function te(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=ne(e);return Z.test(n)?n:ee}catch(e){return ee}}function ne(e){const t=J(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Map;function se(e,t){const n=re(e);oe(n,t),ae(n,t)}function oe(e,t){const n=ie.get(e);if(n)for(const r of n)r(t)}function ae(e,t){const n=ue();n&&n.postMessage({key:e,fid:t}),le()}let ce=null;function ue(){return!ce&&"BroadcastChannel"in self&&(ce=new BroadcastChannel("[Firebase] FID Change"),ce.onmessage=e=>{oe(e.data.key,e.data.fid)}),ce}function le(){0===ie.size&&ce&&(ce.close(),ce=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="firebase-installations-database",de=1,fe="firebase-installations-store";let pe=null;function me(){return pe||(pe=S(he,de,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fe)}}})),pe}async function ge(e,t){const n=re(e),r=await me(),i=r.transaction(fe,"readwrite"),s=i.objectStore(fe),o=await s.get(n);return await s.put(t,n),await i.done,o&&o.fid===t.fid||se(e,t.fid),t}async function ve(e){const t=re(e),n=await me(),r=n.transaction(fe,"readwrite");await r.objectStore(fe).delete(t),await r.done}async function ye(e,t){const n=re(e),r=await me(),i=r.transaction(fe,"readwrite"),s=i.objectStore(fe),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,!a||o&&o.fid===a.fid||se(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(e){let t;const n=await ye(e.appConfig,n=>{const r=be(n),i=_e(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===ee?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function be(e){const t=e||{fid:te(),registrationStatus:0};return Se(t)}function _e(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(U.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ie(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Te(e)}:{installationEntry:t}}async function Ie(e,t){try{const n=await Y(e,t);return ge(e.appConfig,n)}catch(n){throw j(n)&&409===n.customData.serverCode?await ve(e.appConfig):await ge(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Te(e){let t=await Ee(e.appConfig);while(1===t.registrationStatus)await X(100),t=await Ee(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await we(e);return n||t}return t}function Ee(e){return ye(e,e=>{if(!e)throw U.create("installation-not-found");return Se(e)})}function Se(e){return Ce(e)?{fid:e.fid,registrationStatus:0}:e}function Ce(e){return 1===e.registrationStatus&&e.registrationTime+O<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke({appConfig:e,heartbeatServiceProvider:t},n){const r=Ae(e,n),i=G(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:R,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await H(()=>fetch(r,a));if(c.ok){const e=await c.json(),t=q(e);return t}throw await z("Generate Auth Token",c)}function Ae(e,{fid:t}){return`${B(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t=!1){let n;const r=await ye(e.appConfig,r=>{if(!Re(r))throw U.create("not-registered");const i=r.authToken;if(!t&&Pe(i))return r;if(1===i.requestStatus)return n=De(e,t),r;{if(!navigator.onLine)throw U.create("app-offline");const t=Me(r);return n=Oe(e,t),t}}),i=n?await n:r.authToken;return i}async function De(e,t){let n=await Ne(e.appConfig);while(1===n.authToken.requestStatus)await X(100),n=await Ne(e.appConfig);const r=n.authToken;return 0===r.requestStatus?xe(e,t):r}function Ne(e){return ye(e,e=>{if(!Re(e))throw U.create("not-registered");const t=e.authToken;return Fe(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Oe(e,t){try{const n=await ke(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ge(e.appConfig,r),n}catch(n){if(!j(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ge(e.appConfig,n)}else await ve(e.appConfig);throw n}}function Re(e){return void 0!==e&&2===e.registrationStatus}function Pe(e){return 2===e.requestStatus&&!Le(e)}function Le(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+M}function Me(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Fe(e){return 1===e.requestStatus&&e.requestTime+O<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e){const t=e,{installationEntry:n,registrationPromise:r}=await we(t);return r?r.catch(console.error):xe(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t=!1){const n=e;await Ue(n);const r=await xe(n,t);return r.token}async function Ue(e){const{registrationPromise:t}=await we(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e){if(!e||!e.options)throw Be("App Configuration");if(!e.name)throw Be("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Be(e){return U.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="installations",ze="installations-internal",Ke=e=>{const t=e.getProvider("app").getImmediate(),n=je(t),i=(0,r._getProvider)(t,"heartbeat"),s={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return s},Ge=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r._getProvider)(t,qe).getImmediate(),i={getId:()=>Ve(n),getToken:e=>$e(n,e)};return i};function He(){(0,r._registerComponent)(new o.uA(qe,Ke,"PUBLIC")),(0,r._registerComponent)(new o.uA(ze,Ge,"PRIVATE"))}He(),(0,r.registerVersion)(D,N),(0,r.registerVersion)(D,N,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We="analytics",Qe="firebase_id",Ye="origin",Xe=6e4,Je="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ze="https://www.googletagmanager.com/gtag/js",et=new i.Vy("@firebase/analytics"),tt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new s.FA("analytics","Analytics",tt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rt(e){if(!e.startsWith(Ze)){const t=nt.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function it(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function st(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ot(e,t){const n=st("firebase-js-sdk-policy",{createScriptURL:rt}),r=document.createElement("script"),i=`${Ze}?l=${e}&id=${t}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function at(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ct(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=await it(n),r=e.find(e=>e.measurementId===i);r&&await t[r.appId]}}catch(a){et.error(a)}e("config",i,s)}async function ut(e,t,n,r,i){try{let s=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await it(n);for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){et.error(s)}}function lt(e,t,n,r){async function i(i,...s){try{if("event"===i){const[r,i]=s;await ut(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await ct(e,t,n,r,i,o)}else if("consent"===i){const[t]=s;e("consent","update",t)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){et.error(o)}}return i}function ht(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(s=window[i]),window[i]=lt(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function dt(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ze)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=30,pt=1e3;class mt{constructor(e={},t=pt){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gt=new mt;function vt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function yt(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:vt(r)},s=Je.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function wt(e,t=gt,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw nt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Tt;return setTimeout(async()=>{a.abort()},void 0!==n?n:Xe),bt({appId:r,apiKey:i,measurementId:s},o,a,t)}async function bt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=gt){var o;const{appId:a,measurementId:c}=e;try{await _t(r,t)}catch(u){if(c)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===u||void 0===u?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const t=await yt(e);return i.deleteThrottleMetadata(a),t}catch(u){const t=u;if(!It(t)){if(i.deleteThrottleMetadata(a),c)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:c};throw u}const l=503===Number(null===(o=null===t||void 0===t?void 0:t.customData)||void 0===o?void 0:o.httpStatus)?(0,s.p9)(n,i.intervalMillis,ft):(0,s.p9)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,h),et.debug(`Calling attemptFetch again in ${l} millis`),bt(e,h,r,i)}}function _t(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(nt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function It(e){if(!(e instanceof s.g)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Tt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Et,St;async function Ct(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}function kt(e){St=e}function At(e){Et=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(){if(!(0,s.zW)())return et.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eX)()}catch(e){return et.warn(nt.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function Dt(e,t,n,r,i,s,o){var a;const c=wt(e);c.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>et.error(e)),t.push(c);const u=xt().then(e=>e?r.getId():void 0),[l,h]=await Promise.all([c,u]);dt(s)||ot(s,l.measurementId),St&&(i("consent","default",St),kt(void 0)),i("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[Ye]="firebase",d.update=!0,null!=h&&(d[Qe]=h),i("config",l.measurementId,d),Et&&(i("set",Et),At(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.app=e}_delete(){return delete Ot[this.app.options.appId],Promise.resolve()}}let Ot={},Rt=[];const Pt={};let Lt,Mt,Ft="dataLayer",Vt="gtag",$t=!1;function Ut(){const e=[];if((0,s.sr)()&&e.push("This is a browser extension environment."),(0,s.dM)()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:t});et.warn(n.message)}}function jt(e,t,n){Ut();const r=e.options.appId;if(!r)throw nt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw nt.create("no-api-key");et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Ot[r])throw nt.create("already-exists",{id:r});if(!$t){at(Ft);const{wrappedGtag:e,gtagCore:t}=ht(Ot,Rt,Pt,Ft,Vt);Mt=e,Lt=t,$t=!0}Ot[r]=Dt(e,Rt,Pt,t,Lt,Ft,n);const i=new Nt(e);return i}function Bt(e=(0,r.getApp)()){e=(0,s.Ku)(e);const t=(0,r._getProvider)(e,We);return t.isInitialized()?t.getImmediate():qt(e)}function qt(e,t={}){const n=(0,r._getProvider)(e,We);if(n.isInitialized()){const e=n.getImmediate();if((0,s.bD)(t,n.getOptions()))return e;throw nt.create("already-initialized")}const i=n.initialize({options:t});return i}function zt(e,t,n,r){e=(0,s.Ku)(e),Ct(Mt,Ot[e.app.options.appId],t,n,r).catch(e=>et.error(e))}const Kt="@firebase/analytics",Gt="0.10.0";function Ht(){function e(e){try{const t=e.getProvider(We).getImmediate();return{logEvent:(e,n,r)=>zt(t,e,n,r)}}catch(t){throw nt.create("interop-component-reg-failed",{reason:t})}}(0,r._registerComponent)(new o.uA(We,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return jt(n,r,t)},"PUBLIC")),(0,r._registerComponent)(new o.uA("analytics-internal",e,"PRIVATE")),(0,r.registerVersion)(Kt,Gt),(0,r.registerVersion)(Kt,Gt,"esm2017")}Ht()},223:function(e,t,n){n.d(t,{Wp:function(){return r.initializeApp}});var r=n(928),i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.registerVersion)(i,s,"app")},353:function(e,t,n){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}n.d(t,{L8:function(){return L},i0:function(){return M}});var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(e){s&&(e._devtoolHook=s,s.emit("vuex:init",e),s.on("vuex:travel-to-state",function(t){e.replaceState(t)}),e.subscribe(function(e,t){s.emit("vuex:mutation",e,t)},{prepend:!0}),e.subscribeAction(function(e,t){s.emit("vuex:action",e,t)},{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,function(t){return t.original===e});if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach(function(n){r[n]=c(e[n],t)}),r}function u(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function l(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function d(e,t){return function(){return e(t)}}var f=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(e,t){this._children[e]=t},f.prototype.removeChild=function(e){delete this._children[e]},f.prototype.getChild=function(e){return this._children[e]},f.prototype.hasChild=function(e){return e in this._children},f.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},f.prototype.forEachChild=function(e){u(this._children,e)},f.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},f.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},f.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(f.prototype,p);var m=function(e){this.register([],e,!1)};function g(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;g(e.concat(r),t.getChild(r),n.modules[r])}}m.prototype.get=function(e){return e.reduce(function(e,t){return e.getChild(t)},this.root)},m.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")},"")},m.prototype.update=function(e){g([],this.root,e)},m.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new f(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&u(t.modules,function(t,i){r.register(e.concat(i),t,n)})},m.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},m.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var v;var y=function(e){var t=this;void 0===e&&(e={}),!v&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),I(this,u),n.forEach(function(e){return e(t)});var l=void 0!==e.devtools?e.devtools:v.config.devtools;l&&o(this)},w={state:{configurable:!0}};function b(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function _(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;T(e,n,[],e._modules.root,!0),I(e,n,t)}function I(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};u(i,function(t,n){s[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})});var o=v.config.silent;v.config.silent=!0,e._vm=new v({data:{$$state:t},computed:s}),v.config.silent=o,e.strict&&x(e),r&&(n&&e._withCommit(function(){r._data.$$state=null}),v.nextTick(function(){return r.$destroy()}))}function T(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=D(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){v.set(a,c,r.state)})}var u=r.context=E(e,o,n);r.forEachMutation(function(t,n){var r=o+n;C(e,r,t,u)}),r.forEachAction(function(t,n){var r=t.root?n:o+n,i=t.handler||t;k(e,r,i,u)}),r.forEachGetter(function(t,n){var r=o+n;A(e,r,t,u)}),r.forEachChild(function(r,s){T(e,t,n.concat(s),r,i)})}function E(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return S(e,t)}},state:{get:function(){return D(e.state,n)}}}),i}function S(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function C(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push(function(t){n.call(e,r.state,t)})}function k(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push(function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return h(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch(function(t){throw e._devtoolHook.emit("vuex:error",t),t}):i})}function A(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function x(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function D(e,t){return t.reduce(function(e,t){return e[t]},e)}function N(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function O(e){v&&e===v||(v=e,r(v))}w.state.get=function(){return this._vm._data.$$state},w.state.set=function(e){0},y.prototype.commit=function(e,t,n){var r=this,i=N(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit(function(){c.forEach(function(e){e(o)})}),this._subscribers.slice().forEach(function(e){return e(a,r.state)}))},y.prototype.dispatch=function(e,t){var n=this,r=N(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter(function(e){return e.before}).forEach(function(e){return e.before(o,n.state)})}catch(u){0}var c=a.length>1?Promise.all(a.map(function(e){return e(s)})):a[0](s);return new Promise(function(e,t){c.then(function(t){try{n._actionSubscribers.filter(function(e){return e.after}).forEach(function(e){return e.after(o,n.state)})}catch(u){0}e(t)},function(e){try{n._actionSubscribers.filter(function(e){return e.error}).forEach(function(t){return t.error(o,n.state,e)})}catch(u){0}t(e)})})}},y.prototype.subscribe=function(e,t){return b(e,this._subscribers,t)},y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return b(n,this._actionSubscribers,t)},y.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch(function(){return e(r.state,r.getters)},t,n)},y.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._vm._data.$$state=e})},y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),T(this,this.state,e,this._modules.get(e),n.preserveState),I(this,this.state)},y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var n=D(t.state,e.slice(0,-1));v.delete(n,e[e.length-1])}),_(this)},y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},y.prototype.hotUpdate=function(e){this._modules.update(e),_(this,!0)},y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(y.prototype,w);var R=U(function(e,t){var n={};return V(t).forEach(function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=j(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0}),n}),P=U(function(e,t){var n={};return V(t).forEach(function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=j(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}}),n}),L=U(function(e,t){var n={};return V(t).forEach(function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||j(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0}),n}),M=U(function(e,t){var n={};return V(t).forEach(function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=j(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}}),n}),F=function(e){return{mapState:R.bind(null,e),mapGetters:L.bind(null,e),mapMutations:P.bind(null,e),mapActions:M.bind(null,e)}};function V(e){return $(e)?Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function $(e){return Array.isArray(e)||l(e)}function U(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function j(e,t,n){var r=e._modulesNamespaceMap[n];return r}function B(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var s=e.actionFilter;void 0===s&&(s=function(e,t){return!0});var o=e.actionTransformer;void 0===o&&(o=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var h=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe(function(e,s){var o=c(s);if(n(e,h,o)){var a=K(),u=i(e),d="mutation "+e.type+a;q(l,d,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(o)),z(l)}h=o}),u&&e.subscribeAction(function(e,n){if(s(e,n)){var r=K(),i=o(e),a="action "+e.type+r;q(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),z(l)}}))}}function q(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function z(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function K(){var e=new Date;return" @ "+H(e.getHours(),2)+":"+H(e.getMinutes(),2)+":"+H(e.getSeconds(),2)+"."+H(e.getMilliseconds(),3)}function G(e,t){return new Array(t+1).join(e)}function H(e,t){return G("0",t-e.toString().length)+e}var W={Store:y,install:O,version:"3.6.2",mapState:R,mapMutations:P,mapGetters:L,mapActions:M,createNamespacedHelpers:F,createLogger:B};t.Ay=W},424:function(e,t,n){n.d(t,{$b:function(){return i},Ey:function(){return h},He:function(){return l},Vy:function(){return u}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},462:function(e,t,n){n.d(t,{A:function(){return Re}});var r={};n.r(r),n.d(r,{easeInCubic:function(){return D},easeInOutCubic:function(){return O},easeInOutQuad:function(){return x},easeInOutQuart:function(){return L},easeInOutQuint:function(){return V},easeInQuad:function(){return k},easeInQuart:function(){return R},easeInQuint:function(){return M},easeOutCubic:function(){return N},easeOutQuad:function(){return A},easeOutQuart:function(){return P},easeOutQuint:function(){return F},linear:function(){return C}});var i=n(471);function s(e,t,n){if(!Re.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?h(t):"")}}function o(e,t,n){const r=s(e,t,n);null!=r&&console.warn(r)}function a(e,t,n){const r=s(e,t,n);null!=r&&console.error(r)}const c=/(?:^|[-_])(\w)/g,u=e=>e.replace(c,e=>e.toUpperCase()).replace(/[-_]/g,"");function l(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=e&&e[1]}return(r?`<${u(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function h(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${l(e[0])}... (${e[1]} recursive calls)`:l(e)}`).join("\n")}return`\n\n(found in ${l(e)})`}function d(e,t={}){if(d.installed)return;d.installed=!0,i.Ay!==e&&a("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=t.components||{},r=t.directives||{};for(const i in r){const t=r[i];e.directive(i,t)}(function t(n){if(n){for(const r in n){const i=n[r];i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate(){const t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var f={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const p={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:f},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};let m=!1;try{if("undefined"!==typeof window){const e=Object.defineProperty({},"passive",{get:()=>{m=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(Pe){console.warn(Pe)}function g(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function v(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),g(e,t.split("."),n)):n}function y(e){return null!==e&&"object"===typeof e}Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function w(e){return Object.keys(e)}function b(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function _(e={},t={}){for(const n in t){const r=e[n],i=t[n];y(r)&&y(i)?e[n]=_(r,i):e[n]=i}return e}class I{constructor(){this.framework={}}init(e,t){}}class T extends I{constructor(e,t){super();const n=_({},p),{userPreset:r}=t,{preset:i={},...s}=r;null!=i.preset&&o("Global presets do not support the **preset** option, it can be safely omitted"),t.preset=_(_(n,i),s)}}T.property="presets";class E extends I{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(e,t,n){this.application[t][e]=n,this.update(t)}unregister(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}update(e){this[e]=Object.values(this.application[e]).reduce((e,t)=>e+t,0)}}E.property="application";class S extends I{constructor(e){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:t,scrollBarWidth:n,thresholds:r}=e[S.property];this.mobileBreakpoint=t,this.scrollBarWidth=n,this.thresholds=r}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(e=!1){const t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),r=n<this.thresholds.xs,i=n<this.thresholds.sm&&!r,s=n<this.thresholds.md-this.scrollBarWidth&&!(i||r),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||i||r),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=r,this.sm=i,this.md=s,this.lg=o,this.xl=a,this.xsOnly=r,this.smOnly=i,this.smAndDown=(r||i)&&!(s||o||a),this.smAndUp=!r&&(i||s||o||a),this.mdOnly=s,this.mdAndDown=(r||i||s)&&!(o||a),this.mdAndUp=!(r||i)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(r||i||s||o)&&!a,this.lgAndUp=!(r||i||s)&&(o||a),this.xlOnly=a,!0){case r:this.name="xs";break;case i:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}S.property="breakpoint";const C=e=>e,k=e=>e**2,A=e=>e*(2-e),x=e=>e<.5?2*e**2:(4-2*e)*e-1,D=e=>e**3,N=e=>--e**3+1,O=e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,R=e=>e**4,P=e=>1- --e**4,L=e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,M=e=>e**5,F=e=>1+--e**5,V=e=>e<.5?16*e**5:1+16*--e**5;function $(e){if("number"===typeof e)return e;let t=B(e);if(!t)throw"string"===typeof e?new Error(`Target element "${e}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${j(e)} instead.`);let n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function U(e){const t=B(e);if(t)return t;throw"string"===typeof e?new Error(`Container element "${e}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${j(e)} instead.`)}function j(e){return null==e?e:e.constructor.name}function B(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function q(e,t={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...t},i=U(n.container);if(n.appOffset&&q.framework.application){const e=i.classList.contains("v-navigation-drawer"),t=i.classList.contains("v-navigation-drawer--clipped"),{bar:r,top:s}=q.framework.application;n.offset+=r,e&&!t||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof e?$(e)-n.offset:$(e)-$(i)-n.offset;const a=i.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:r[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise(e=>requestAnimationFrame(function t(r){const u=r-s,l=Math.abs(n.duration?Math.min(u/n.duration,1):1);i.scrollTop=Math.floor(a+(o-a)*c(l));const h=i===document.body?document.documentElement.clientHeight:i.clientHeight,d=h+i.scrollTop>=i.scrollHeight;if(1===l||o>i.scrollTop&&d)return e(o);requestAnimationFrame(t)}))}q.framework={},q.init=()=>{};class z extends I{constructor(){return super(),q}}z.property="goTo";const K={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var G=K;const H={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var W=H;const Q={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var Y=Q;const X={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var J=X;const Z={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var ee=Z;function te(e,t){const n={};for(const r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}};return n}var ne=te("font-awesome-icon",J),re=Object.freeze({mdiSvg:G,md:W,mdi:Y,fa:J,fa4:ee,faSvg:ne});class ie extends I{constructor(e){super();const{iconfont:t,values:n,component:r}=e[ie.property];this.component=r,this.iconfont=t,this.values=_(re[t],n)}}ie.property="icons";const se="$vuetify.",oe=Symbol("Lang fallback");function ae(e,t,n=!1,r){const i=t.replace(se,"");let s=v(e,i,oe);return s===oe&&(n?(a(`Translation key "${i}" not found in fallback`),s=t):(o(`Translation key "${i}" not found, falling back to default`),s=ae(r,t,!0,r))),s}class ce extends I{constructor(e){super(),this.defaultLocale="en";const{current:t,locales:n,t:r}=e[ce.property];this.current=t,this.locales=n,this.translator=r||this.defaultTranslator}currentLocale(e){const t=this.locales[this.current],n=this.locales[this.defaultLocale];return ae(t,e,!1,n)}t(e,...t){return e.startsWith(se)?this.translator(e,...t):this.replace(e,t)}defaultTranslator(e,...t){return this.replace(this.currentLocale(e),t)}replace(e,t){return e.replace(/\{(\d+)\}/g,(e,n)=>String(t[+n]))}}function ue(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map(e=>e+e).join("")),6!==n.length&&o(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?(o(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&(o(`'${e}' is not a valid rgb color`),t=16777215),t}function le(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function he(e){return le(ue(e))}ce.property="lang";const de=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],fe=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,pe=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],me=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function ge(e){const t=Array(3),n=fe,r=de;for(let i=0;i<3;++i)t[i]=Math.round(255*b(n(r[i][0]*e[0]+r[i][1]*e[1]+r[i][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]|0)}function ve(e){const t=[0,0,0],n=me,r=pe,i=n((e>>16&255)/255),s=n((e>>8&255)/255),o=n((255&e)/255);for(let a=0;a<3;++a)t[a]=r[a][0]*i+r[a][1]*s+r[a][2]*o;return t}const ye=.20689655172413793,we=e=>e>ye**3?Math.cbrt(e):e/(3*ye**2)+4/29,be=e=>e>ye?e**3:3*ye**2*(e-4/29);function _e(e){const t=we,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function Ie(e){const t=be,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function Te(e,t=!1,n=!0){const{anchor:r,...i}=e,s=Object.keys(i),o={};for(let a=0;a<s.length;++a){const r=s[a],i=e[r];null!=i&&(n?t?("base"===r||r.startsWith("lighten")||r.startsWith("darken"))&&(o[r]=he(i)):o[r]="object"===typeof i?Te(i,!0,n):xe(r,ue(i)):o[r]={base:le(ue(i))})}return t||(o.anchor=r||o.base||o.primary.base),o}const Ee=(e,t)=>`\n.v-application .${e} {\n  background-color: ${t} !important;\n  border-color: ${t} !important;\n}\n.v-application .${e}--text {\n  color: ${t} !important;\n  caret-color: ${t} !important;\n}`,Se=(e,t,n)=>{const[r,i]=t.split(/(\d)/,2);return`\n.v-application .${e}.${r}-${i} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${e}--text.text--${r}-${i} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},Ce=(e,t="base")=>`--v-${e}-${t}`,ke=(e,t="base")=>`var(${Ce(e,t)})`;function Ae(e,t=!1){const{anchor:n,...r}=e,i=Object.keys(r);if(!i.length)return"";let s="",o="";const a=t?ke("anchor"):n;o+=`.v-application a { color: ${a}; }`,t&&(s+=`  ${Ce("anchor")}: ${n};\n`);for(let c=0;c<i.length;++c){const n=i[c],r=e[n];o+=Ee(n,t?ke(n):r.base),t&&(s+=`  ${Ce(n)}: ${r.base};\n`);const a=w(r);for(let e=0;e<a.length;++e){const i=a[e],c=r[i];"base"!==i&&(o+=Se(n,i,t?ke(n,i):c),t&&(s+=`  ${Ce(n,i)}: ${c};\n`))}}return t&&(s=`:root {\n${s}}\n\n`),s+o}function xe(e,t){const n={base:le(t)};for(let r=5;r>0;--r)n[`lighten${r}`]=le(De(t,r));for(let r=1;r<=4;++r)n[`darken${r}`]=le(Ne(t,r));return n}function De(e,t){const n=_e(ve(e));return n[0]=n[0]+10*t,ge(Ie(n))}function Ne(e,t){const n=_e(ve(e));return n[0]=n[0]-10*t,ge(Ie(n))}class Oe extends I{constructor(e){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:t,disable:n,options:r,themes:i}=e[Oe.property];this.dark=Boolean(t),this.defaults=this.themes=i,this.options=r,n?this.disabled=!0:this.themes={dark:this.fillVariant(i.dark,!0),light:this.fillVariant(i.light,!1)}}set css(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}set dark(e){const t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}setTheme(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(e={},t){const n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(e){if(this.vueMeta=e.$meta(),this.isVueMeta23)return void e.$nextTick(()=>{this.applyVueMeta23()});const t="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=e.$options[t]||{};e.$options[t]=()=>{n.style=n.style||[];const e=n.style.find(e=>"vuetify-theme-stylesheet"===e.id);return e?e.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:e}=this.vueMeta.addApp("vuetify");e({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(e){const t=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";e.head=e.head||"",e.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${t}>${this.generatedStyles}</style>`}initTheme(e){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",()=>{const t=i.Ay.observable({themes:this.themes});this.unwatch=e.$watch(()=>t.themes,()=>this.applyTheme(),{deep:!0})}),this.applyTheme())}get currentTheme(){const e=this.dark?"dark":"light";return this.themes[e]}get generatedStyles(){const e=this.parsedTheme,t=this.options||{};let n;return null!=t.themeCache&&(n=t.themeCache.get(e),null!=n)||(n=Ae(e,t.customProperties),null!=t.minifyTheme&&(n=t.minifyTheme(n)),null!=t.themeCache&&t.themeCache.set(e,n)),n}get parsedTheme(){return Te(this.currentTheme||{},void 0,g(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}Oe.property="theme";class Re{constructor(e={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=e,this.use(T),this.use(E),this.use(S),this.use(z),this.use(ie),this.use(ce),this.use(Oe)}init(e,t){this.installed.forEach(n=>{const r=this.framework[n];r.framework=this.framework,r.init(e,t)}),this.framework.rtl=Boolean(this.preset.rtl)}use(e){const t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}Re.install=d,Re.installed=!1,Re.version="2.6.13",Re.config={silent:!1}},471:function(e,t,n){n.d(t,{Ay:function(){return Jr}});
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function s(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function g(e){return o(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function v(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,y,2):String(e)}function y(e,t){return t&&t.__v_isRef?t.value:t}function w(e){var t=parseFloat(e);return isNaN(t)?e:t}function b(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}b("slot,component",!0);var _=b("key,ref,slot,slot-scope,is");function I(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var T=Object.prototype.hasOwnProperty;function E(e,t){return T.call(e,t)}function S(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var C=/-(\w)/g,k=S(function(e){return e.replace(C,function(e,t){return t?t.toUpperCase():""})}),A=S(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),x=/\B([A-Z])/g,D=S(function(e){return e.replace(x,"-$1").toLowerCase()});function N(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function O(e,t){return e.bind(t)}var R=Function.prototype.bind?O:N;function P(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function L(e,t){for(var n in t)e[n]=t[n];return e}function M(e){for(var t={},n=0;n<e.length;n++)e[n]&&L(t,e[n]);return t}function F(e,t,n){}var V=function(e,t,n){return!1},$=function(e){return e};function U(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every(function(e,n){return U(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every(function(n){return U(e[n],t[n])})}catch(c){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(U(e[n],t))return n;return-1}function B(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function q(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var z="data-server-rendered",K=["component","directive","filter"],G=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:V,isReservedAttr:V,isUnknownElement:V,getTagNamespace:F,parsePlatformTagName:$,mustUseProp:V,async:!0,_lifecycleHooks:G},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Q(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function Y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(W.source,".$_\\d]"));function J(e){if(!X.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Z="__proto__"in{},ee="undefined"!==typeof window,te=ee&&window.navigator.userAgent.toLowerCase(),ne=te&&/msie|trident/.test(te),re=te&&te.indexOf("msie 9.0")>0,ie=te&&te.indexOf("edge/")>0;te&&te.indexOf("android");var se=te&&/iphone|ipad|ipod|ios/.test(te);te&&/chrome\/\d+/.test(te),te&&/phantomjs/.test(te);var oe,ae=te&&te.match(/firefox\/(\d+)/),ce={}.watch,ue=!1;if(ee)try{var le={};Object.defineProperty(le,"passive",{get:function(){ue=!0}}),window.addEventListener("test-passive",null,le)}catch(Zo){}var he=function(){return void 0===oe&&(oe=!ee&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),oe},de=ee&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function fe(e){return"function"===typeof e&&/native code/.test(e.toString())}var pe,me="undefined"!==typeof Symbol&&fe(Symbol)&&"undefined"!==typeof Reflect&&fe(Reflect.ownKeys);pe="undefined"!==typeof Set&&fe(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ge=null;function ve(e){void 0===e&&(e=null),e||ge&&ge._scope.off(),ge=e,e&&e._scope.on()}var ye=function(){function e(e,t,n,r,i,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),we=function(e){void 0===e&&(e="");var t=new ye;return t.text=e,t.isComment=!0,t};function be(e){return new ye(void 0,void 0,void 0,String(e))}function _e(e){var t=new ye(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}"function"===typeof SuppressedError&&SuppressedError;var Ie=0,Te=[],Ee=function(){for(var e=0;e<Te.length;e++){var t=Te[e];t.subs=t.subs.filter(function(e){return e}),t._pending=!1}Te.length=0},Se=function(){function e(){this._pending=!1,this.id=Ie++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Te.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter(function(e){return e});for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();Se.target=null;var Ce=[];function ke(e){Ce.push(e),Se.target=e}function Ae(){Ce.pop(),Se.target=Ce[Ce.length-1]}var xe=Array.prototype,De=Object.create(xe),Ne=["push","pop","shift","unshift","splice","sort","reverse"];Ne.forEach(function(e){var t=xe[e];Y(De,e,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s})});var Oe=Object.getOwnPropertyNames(De),Re={},Pe=!0;function Le(e){Pe=e}var Me={notify:F,depend:F,addSub:F,removeSub:F},Fe=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Me:new Se,this.vmCount=0,Y(e,"__ob__",this),i(e)){if(!n)if(Z)e.__proto__=De;else for(var r=0,s=Oe.length;r<s;r++){var o=Oe[r];Y(e,o,De[o])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){o=a[r];$e(e,o,Re,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ve(e[t],!1,this.mock)},e}();function Ve(e,t,n){return e&&E(e,"__ob__")&&e.__ob__ instanceof Fe?e.__ob__:!Pe||!n&&he()||!i(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||Ge(e)||e instanceof ye?void 0:new Fe(e,t,n)}function $e(e,t,n,r,s,o,a){void 0===a&&(a=!1);var c=new Se,u=Object.getOwnPropertyDescriptor(e,t);if(!u||!1!==u.configurable){var l=u&&u.get,h=u&&u.set;l&&!h||n!==Re&&2!==arguments.length||(n=e[t]);var d=s?n&&n.__ob__:Ve(n,!1,o);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=l?l.call(e):n;return Se.target&&(c.depend(),d&&(d.dep.depend(),i(t)&&Be(t))),Ge(t)&&!s?t.value:t},set:function(t){var r=l?l.call(e):n;if(q(r,t)){if(h)h.call(e,t);else{if(l)return;if(!s&&Ge(r)&&!Ge(t))return void(r.value=t);n=t}d=s?t&&t.__ob__:Ve(t,!1,o),c.notify()}}}),c}}function Ue(e,t,n){if(!Ke(e)){var r=e.__ob__;return i(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&Ve(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?($e(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function je(e,t){if(i(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||Ke(e)||E(e,t)&&(delete e[t],n&&n.dep.notify())}}function Be(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&Be(t)}function qe(e){return ze(e,!0),Y(e,"__v_isShallow",!0),e}function ze(e,t){if(!Ke(e)){Ve(e,t,he());0}}function Ke(e){return!(!e||!e.__v_isReadonly)}function Ge(e){return!(!e||!0!==e.__v_isRef)}function He(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(Ge(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];Ge(r)&&!Ge(e)?r.value=e:t[n]=e}})}var We="watcher";"".concat(We," callback"),"".concat(We," getter"),"".concat(We," cleanup");var Qe;var Ye=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!e&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Qe;try{return Qe=this,e()}finally{Qe=t}}else 0},e.prototype.on=function(){Qe=this},e.prototype.off=function(){Qe=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Xe(e,t){void 0===t&&(t=Qe),t&&t.active&&t.effects.push(e)}function Je(){return Qe}function Ze(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var et=S(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}});function tt(e,t){function n(){var e=n.fns;if(!i(e))return Xt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),s=0;s<r.length;s++)Xt(r[s],null,arguments,t,"v-on handler")}return n.fns=e,n}function nt(e,t,n,r,i,o){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=et(c),s(u)||(s(l)?(s(u.fns)&&(u=e[c]=tt(u,o)),a(h.once)&&(u=e[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)s(e[c])&&(h=et(c),r(h.name,t[c],h.capture))}function rt(e,t,n){var r;e instanceof ye&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),I(r.fns,c)}s(i)?r=tt([c]):o(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=tt([i,c]),r.merged=!0,e[t]=r}function it(e,t,n){var r=t.options.props;if(!s(r)){var i={},a=e.attrs,c=e.props;if(o(a)||o(c))for(var u in r){var l=D(u);st(i,c,u,l,!0)||st(i,a,u,l,!1)}return i}}function st(e,t,n,r,i){if(o(t)){if(E(t,n))return e[n]=t[n],i||delete t[n],!0;if(E(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ot(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function at(e){return u(e)?[be(e)]:i(e)?ut(e):void 0}function ct(e){return o(e)&&o(e.text)&&c(e.isComment)}function ut(e,t){var n,r,c,l,h=[];for(n=0;n<e.length;n++)r=e[n],s(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ut(r,"".concat(t||"","_").concat(n)),ct(r[0])&&ct(l)&&(h[c]=be(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ct(l)?h[c]=be(l.text+r):""!==r&&h.push(be(r)):ct(r)&&ct(l)?h[c]=be(l.text+r.text):(a(e._isVList)&&o(r.tag)&&s(r.key)&&o(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function lt(e,t){var n,r,s,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(me&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(s=Object.keys(e),c=new Array(s.length),n=0,r=s.length;n<r;n++)a=s[n],c[n]=t(e[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function ht(e,t,n,r){var i,s=this.$scopedSlots[e];s?(n=n||{},r&&(n=L(L({},r),n)),i=s(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function dt(e){return Sr(this.$options,"filters",e,!0)||$}function ft(e,t){return i(e)?-1===e.indexOf(t):e!==t}function pt(e,t,n,r,i){var s=H.keyCodes[t]||n;return i&&r&&!H.keyCodes[t]?ft(i,r):s?ft(s,e):r?D(r)!==t:void 0===e}function mt(e,t,n,r,s){if(n)if(h(n)){i(n)&&(n=M(n));var o=void 0,a=function(i){if("class"===i||"style"===i||_(i))o=e;else{var a=e.attrs&&e.attrs.type;o=r||H.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=k(i),u=D(i);if(!(c in o)&&!(u in o)&&(o[i]=n[i],s)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function gt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),yt(r,"__static__".concat(e),!1)),r}function vt(e,t,n){return yt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function yt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&wt(e[r],"".concat(t,"_").concat(r),n);else wt(e,t,n)}function wt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function bt(e,t){if(t)if(f(t)){var n=e.on=e.on?L({},e.on):{};for(var r in t){var i=n[r],s=t[r];n[r]=i?[].concat(i,s):s}}else;return e}function _t(e,t,n,r){t=t||{$stable:!n};for(var s=0;s<e.length;s++){var o=e[s];i(o)?_t(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function It(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Tt(e,t){return"string"===typeof e?t+e:e}function Et(e){e._o=vt,e._n=w,e._s=v,e._l=lt,e._t=ht,e._q=U,e._i=j,e._m=gt,e._f=dt,e._k=pt,e._b=mt,e._v=be,e._e=we,e._u=_t,e._g=bt,e._d=It,e._p=Tt}function St(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var s=e[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Ct)&&delete n[u];return n}function Ct(e){return e.isComment&&!e.asyncFactory||" "===e.text}function kt(e){return e.isComment&&e.asyncFactory}function At(e,t,n,i){var s,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!o&&!i.$hasNormal)return i;for(var u in s={},t)t[u]&&"$"!==u[0]&&(s[u]=xt(e,n,u,t[u]))}else s={};for(var l in n)l in s||(s[l]=Dt(n,l));return t&&Object.isExtensible(t)&&(t._normalized=s),Y(s,"$stable",a),Y(s,"$key",c),Y(s,"$hasNormal",o),s}function xt(e,t,n,r){var s=function(){var t=ge;ve(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:at(n);var s=n&&n[0];return ve(t),n&&(!s||1===n.length&&s.isComment&&!kt(s))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:s,enumerable:!0,configurable:!0}),s}function Dt(e,t){return function(){return e[t]}}function Nt(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=Ot(e);ve(e),ke();var i=Xt(n,null,[e._props||qe({}),r],e,"setup");if(Ae(),ve(),l(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var s=e._setupProxy={};for(var o in i)"__sfc"!==o&&He(s,i,o)}else for(var o in i)Q(o)||He(e,i,o);else 0}}function Ot(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};Y(t,"_v_attr_proxy",!0),Rt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Rt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return Lt(e)},emit:R(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach(function(n){return He(e,t,n)})}}}function Rt(e,t,n,r,i){var s=!1;for(var o in t)o in e?t[o]!==n[o]&&(s=!0):(s=!0,Pt(e,o,r,i));for(var o in e)o in t||(s=!0,delete e[o]);return s}function Pt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function Lt(e){return e._slotsProxy||Mt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Mt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Ft(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=St(t._renderChildren,i),e.$scopedSlots=n?At(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return Gt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Gt(e,t,n,r,i,!0)};var s=n&&n.data;$e(e,"$attrs",s&&s.attrs||r,null,!0),$e(e,"$listeners",t._parentListeners||r,null,!0)}var Vt=null;function $t(e){Et(e.prototype),e.prototype.$nextTick=function(e){return ln(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t._parentVnode;r&&e._isMounted&&(e.$scopedSlots=At(e.$parent,r.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Mt(e._slotsProxy,e.$scopedSlots)),e.$vnode=r;var s,o=ge,a=Vt;try{ve(e),Vt=e,s=n.call(e._renderProxy,e.$createElement)}catch(Zo){Yt(Zo,e,"render"),s=e._vnode}finally{Vt=a,ve(o)}return i(s)&&1===s.length&&(s=s[0]),s instanceof ye||(s=we()),s.parent=r,s}}function Ut(e,t){return(e.__esModule||me&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function jt(e,t,n,r,i){var s=we();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:r,tag:i},s}function Bt(e,t){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=Vt;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",function(){return I(r,n)});var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=B(function(n){e.resolved=Ut(n,t),i?r.length=0:l(!0)}),f=B(function(t){o(e.errorComp)&&(e.error=!0,l(!0))}),p=e(d,f);return h(p)&&(g(p)?s(e.resolved)&&p.then(d,f):g(p.component)&&(p.component.then(d,f),o(p.error)&&(e.errorComp=Ut(p.error,t)),o(p.loading)&&(e.loadingComp=Ut(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout(function(){c=null,s(e.resolved)&&s(e.error)&&(e.loading=!0,l(!1))},p.delay||200)),o(p.timeout)&&(u=setTimeout(function(){u=null,s(e.resolved)&&f(null)},p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function qt(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||kt(n)))return n}}var zt=1,Kt=2;function Gt(e,t,n,r,s,o){return(i(n)||u(n))&&(s=r,r=n,n=void 0),a(o)&&(s=Kt),Ht(e,t,n,r,s)}function Ht(e,t,n,r,s){if(o(n)&&o(n.__ob__))return we();if(o(n)&&o(n.is)&&(t=n.is),!t)return we();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===Kt?r=at(r):s===zt&&(r=ot(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||H.getTagNamespace(t),a=H.isReservedTag(t)?new ye(H.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(u=Sr(e.$options,"components",t))?new ye(t,n,r,void 0,void 0,e):cr(u,n,e,r,t)}else a=cr(t,n,e,r);return i(a)?a:o(a)?(o(c)&&Wt(a,c),o(n)&&Qt(n),a):we()}function Wt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),o(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&Wt(c,t,n)}}function Qt(e){h(e.style)&&mn(e.style),h(e.class)&&mn(e.class)}function Yt(e,t,n){ke();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,e,t,n);if(o)return}catch(Zo){Jt(Zo,r,"errorCaptured hook")}}}Jt(e,t,n)}finally{Ae()}}function Xt(e,t,n,r,i){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch(function(e){return Yt(e,r,i+" (Promise/async)")}),s._handled=!0)}catch(Zo){Yt(Zo,r,i)}return s}function Jt(e,t,n){if(H.errorHandler)try{return H.errorHandler.call(null,e,t,n)}catch(Zo){Zo!==e&&Zt(Zo,null,"config.errorHandler")}Zt(e,t,n)}function Zt(e,t,n){if(!ee||"undefined"===typeof console)throw e;console.error(e)}var en,tn=!1,nn=[],rn=!1;function sn(){rn=!1;var e=nn.slice(0);nn.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&fe(Promise)){var on=Promise.resolve();en=function(){on.then(sn),se&&setTimeout(F)},tn=!0}else if(ne||"undefined"===typeof MutationObserver||!fe(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())en="undefined"!==typeof setImmediate&&fe(setImmediate)?function(){setImmediate(sn)}:function(){setTimeout(sn,0)};else{var an=1,cn=new MutationObserver(sn),un=document.createTextNode(String(an));cn.observe(un,{characterData:!0}),en=function(){an=(an+1)%2,un.data=String(an)},tn=!0}function ln(e,t){var n;if(nn.push(function(){if(e)try{e.call(t)}catch(Zo){Yt(Zo,t,"nextTick")}else n&&n(t)}),rn||(rn=!0,en()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}function hn(e){return function(t,n){if(void 0===n&&(n=ge),n)return dn(n,e,t)}}function dn(e,t,n){var r=e.$options;r[t]=vr(r[t],n)}hn("beforeMount"),hn("mounted"),hn("beforeUpdate"),hn("updated"),hn("beforeDestroy"),hn("destroyed"),hn("activated"),hn("deactivated"),hn("serverPrefetch"),hn("renderTracked"),hn("renderTriggered"),hn("errorCaptured");var fn="2.7.16";var pn=new pe;function mn(e){return gn(e,pn),pn.clear(),e}function gn(e,t){var n,r,s=i(e);if(!(!s&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ye)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(s){n=e.length;while(n--)gn(e[n],t)}else if(Ge(e))gn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)gn(e[r[n]],t)}}}var vn,yn=0,wn=function(){function e(e,t,n,r,i){Xe(this,Qe&&!Qe._vm?Qe:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++yn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pe,this.newDepIds=new pe,this.expression="",l(t)?this.getter=t:(this.getter=J(t),this.getter||(this.getter=F)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;ke(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Zo){if(!this.user)throw Zo;Yt(Zo,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&mn(e),Ae(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Xt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&I(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function bn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&En(e,t)}function _n(e,t){vn.$on(e,t)}function In(e,t){vn.$off(e,t)}function Tn(e,t){var n=vn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function En(e,t,n){vn=e,nt(t,n||{},_n,In,Tn,e),vn=void 0}function Sn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var s=0,o=e.length;s<o;s++)r.$on(e[s],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,s=e.length;r<s;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(o=a[c],o===t||o.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'.concat(e,'"'),s=0,o=n.length;s<o;s++)Xt(n[s],t,r,t,i)}return t}}var Cn=null;function kn(e){var t=Cn;return Cn=e,function(){Cn=t}}function An(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function xn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,s=kn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ln(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||I(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ln(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Dn(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=we),Ln(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&Ln(e,"beforeUpdate")}};new wn(e,r,F,i,!0),n=!1;var s=e._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==e.$vnode&&(e._isMounted=!0,Ln(e,"mounted")),e}function Nn(e,t,n,i,s){var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=s;var h=i.data.attrs||r;e._attrsProxy&&Rt(e._attrsProxy,h,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&Rt(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,En(e,n,d),t&&e.$options.props){Le(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var g=p[m],v=e.$options.props;f[g]=Cr(g,v,t,e)}Le(!0),e.$options.propsData=t}u&&(e.$slots=St(s,i.context),e.$forceUpdate())}function On(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Rn(e,t){if(t){if(e._directInactive=!1,On(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Rn(e.$children[n]);Ln(e,"activated")}}function Pn(e,t){if((!t||(e._directInactive=!0,!On(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Pn(e.$children[n]);Ln(e,"deactivated")}}function Ln(e,t,n,r){void 0===r&&(r=!0),ke();var i=ge,s=Je();r&&ve(e);var o=e.$options[t],a="".concat(t," hook");if(o)for(var c=0,u=o.length;c<u;c++)Xt(o[c],e,n||null,e,a);e._hasHookEvent&&e.$emit("hook:"+t),r&&(ve(i),s&&s.on()),Ae()}var Mn=[],Fn=[],Vn={},$n=!1,Un=!1,jn=0;function Bn(){jn=Mn.length=Fn.length=0,Vn={},$n=Un=!1}var qn=0,zn=Date.now;if(ee&&!ne){var Kn=window.performance;Kn&&"function"===typeof Kn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Kn.now()})}var Gn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Hn(){var e,t;for(qn=zn(),Un=!0,Mn.sort(Gn),jn=0;jn<Mn.length;jn++)e=Mn[jn],e.before&&e.before(),t=e.id,Vn[t]=null,e.run();var n=Fn.slice(),r=Mn.slice();Bn(),Yn(n),Wn(r),Ee(),de&&H.devtools&&de.emit("flush")}function Wn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ln(r,"updated")}}function Qn(e){e._inactive=!1,Fn.push(e)}function Yn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Rn(e[t],!0)}function Xn(e){var t=e.id;if(null==Vn[t]&&(e!==Se.target||!e.noRecurse)){if(Vn[t]=!0,Un){var n=Mn.length-1;while(n>jn&&Mn[n].id>e.id)n--;Mn.splice(n+1,0,e)}else Mn.push(e);$n||($n=!0,ln(Hn))}}function Jn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var r=Ze(e),i=me?Reflect.ownKeys(n):Object.keys(n),s=0;s<i.length;s++){var o=i[s];Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))}}}function Zn(e){var t=er(e.$options.inject,e);t&&(Le(!1),Object.keys(t).forEach(function(n){$e(e,n,t[n])}),Le(!0))}function er(e,t){if(e){for(var n=Object.create(null),r=me?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=e[s].from;if(o in t._provided)n[s]=t._provided[o];else if("default"in e[s]){var a=e[s].default;n[s]=l(a)?a.call(t):a}else 0}}return n}}function tr(e,t,n,s,o){var c,u=this,l=o.options;E(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=s,this.listeners=e.on||r,this.injections=er(l.inject,s),this.slots=function(){return u.$slots||At(s,e.scopedSlots,u.$slots=St(n,s)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return At(s,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=At(s,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var o=Gt(c,e,t,n,r,d);return o&&!i(o)&&(o.fnScopeId=l._scopeId,o.fnContext=s),o}:this._c=function(e,t,n,r){return Gt(c,e,t,n,r,d)}}function nr(e,t,n,s,a){var c=e.options,u={},l=c.props;if(o(l))for(var h in l)u[h]=Cr(h,l,t||r);else o(n.attrs)&&ir(u,n.attrs),o(n.props)&&ir(u,n.props);var d=new tr(n,u,a,s,e),f=c.render.call(null,d._c,d);if(f instanceof ye)return rr(f,n,d.parent,c,d);if(i(f)){for(var p=at(f)||[],m=new Array(p.length),g=0;g<p.length;g++)m[g]=rr(p[g],n,d.parent,c,d);return m}}function rr(e,t,n,r,i){var s=_e(e);return s.fnContext=n,s.fnOptions=r,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function ir(e,t){for(var n in t)e[k(n)]=t[n]}function sr(e){return e.name||e.__name||e._componentTag}Et(tr.prototype);var or={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;or.prepatch(n,n)}else{var r=e.componentInstance=ur(e,Cn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Nn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),e.data.keepAlive&&(t._isMounted?Qn(n):Rn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Pn(t,!0):t.$destroy())}},ar=Object.keys(or);function cr(e,t,n,r,i){if(!s(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(s(e.cid)&&(u=e,e=Bt(u,c),void 0===e))return jt(u,t,n,r,i);t=t||{},Yr(e),o(t.model)&&dr(e.options,t);var l=it(t,e,i);if(a(e.options.functional))return nr(e,l,t,n,r);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}lr(t);var p=sr(e.options)||i,m=new ye("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function ur(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function lr(e){for(var t=e.hook||(e.hook={}),n=0;n<ar.length;n++){var r=ar[n],i=t[r],s=or[r];i===s||i&&i._merged||(t[r]=i?hr(s,i):s)}}function hr(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function dr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),a=s[r],c=t.model.callback;o(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(s[r]=[c].concat(a)):s[r]=c}var fr=F,pr=H.optionMergeStrategies;function mr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,s,o=me?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)r=o[a],"__ob__"!==r&&(i=e[r],s=t[r],n&&E(e,r)?i!==s&&f(i)&&f(s)&&mr(i,s):Ue(e,r,s));return e}function gr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?mr(r,i):i}:t?e?function(){return mr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function vr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?yr(n):n}function yr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function wr(e,t,n,r){var i=Object.create(e||null);return t?L(i,t):i}pr.data=function(e,t,n){return n?gr(e,t,n):t&&"function"!==typeof t?e:gr(e,t)},G.forEach(function(e){pr[e]=vr}),K.forEach(function(e){pr[e+"s"]=wr}),pr.watch=function(e,t,n,r){if(e===ce&&(e=void 0),t===ce&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var s={};for(var o in L(s,e),t){var a=s[o],c=t[o];a&&!i(a)&&(a=[a]),s[o]=a?a.concat(c):i(c)?c:[c]}return s},pr.props=pr.methods=pr.inject=pr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return L(i,e),t&&L(i,t),i},pr.provide=function(e,t){return e?function(){var n=Object.create(null);return mr(n,l(e)?e.call(this):e),t&&mr(n,l(t)?t.call(this):t,!1),n}:t};var br=function(e,t){return void 0===t?e:t};function _r(e,t){var n=e.props;if(n){var r,s,o,a={};if(i(n)){r=n.length;while(r--)s=n[r],"string"===typeof s&&(o=k(s),a[o]={type:null})}else if(f(n))for(var c in n)s=n[c],o=k(c),a[o]=f(s)?s:{type:s};else 0;e.props=a}}function Ir(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var s=0;s<n.length;s++)r[n[s]]={from:n[s]};else if(f(n))for(var o in n){var a=n[o];r[o]=f(a)?L({from:o},a):{from:a}}else 0}}function Tr(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function Er(e,t,n){if(l(t)&&(t=t.options),_r(t,n),Ir(t,n),Tr(t),!t._base&&(t.extends&&(e=Er(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Er(e,t.mixins[r],n);var s,o={};for(s in e)a(s);for(s in t)E(e,s)||a(s);function a(r){var i=pr[r]||br;o[r]=i(e[r],t[r],n,r)}return o}function Sr(e,t,n,r){if("string"===typeof n){var i=e[t];if(E(i,n))return i[n];var s=k(n);if(E(i,s))return i[s];var o=A(s);if(E(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Cr(e,t,n,r){var i=t[e],s=!E(n,e),o=n[e],a=Nr(Boolean,i.type);if(a>-1)if(s&&!E(i,"default"))o=!1;else if(""===o||o===D(e)){var c=Nr(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=kr(r,i,e);var u=Pe;Le(!0),Ve(o),Le(u)}return o}function kr(e,t,n){if(E(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==xr(t.type)?r.call(e):r}}var Ar=/^\s*function (\w+)/;function xr(e){var t=e&&e.toString().match(Ar);return t?t[1]:""}function Dr(e,t){return xr(e)===xr(t)}function Nr(e,t){if(!i(t))return Dr(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Dr(t[n],e))return n;return-1}var Or={enumerable:!0,configurable:!0,get:F,set:F};function Rr(e,t,n){Or.get=function(){return this[t][n]},Or.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Or)}function Pr(e){var t=e.$options;if(t.props&&Lr(e,t.props),Nt(e),t.methods&&qr(e,t.methods),t.data)Mr(e);else{var n=Ve(e._data={});n&&n.vmCount++}t.computed&&$r(e,t.computed),t.watch&&t.watch!==ce&&zr(e,t.watch)}function Lr(e,t){var n=e.$options.propsData||{},r=e._props=qe({}),i=e.$options._propKeys=[],s=!e.$parent;s||Le(!1);var o=function(s){i.push(s);var o=Cr(s,t,n,e);$e(r,s,o,void 0,!0),s in e||Rr(e,"_props",s)};for(var a in t)o(a);Le(!0)}function Mr(e){var t=e.$options.data;t=e._data=l(t)?Fr(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var s=n[i];0,r&&E(r,s)||Q(s)||Rr(e,"_data",s)}var o=Ve(t);o&&o.vmCount++}function Fr(e,t){ke();try{return e.call(t,t)}catch(Zo){return Yt(Zo,t,"data()"),{}}finally{Ae()}}var Vr={lazy:!0};function $r(e,t){var n=e._computedWatchers=Object.create(null),r=he();for(var i in t){var s=t[i],o=l(s)?s:s.get;0,r||(n[i]=new wn(e,o||F,F,Vr)),i in e||Ur(e,i,s)}}function Ur(e,t,n){var r=!he();l(n)?(Or.get=r?jr(t):Br(n),Or.set=F):(Or.get=n.get?r&&!1!==n.cache?jr(t):Br(n.get):F,Or.set=n.set||F),Object.defineProperty(e,t,Or)}function jr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Se.target&&t.depend(),t.value}}function Br(e){return function(){return e.call(this,this)}}function qr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?F:R(t[n],e)}function zr(e,t){for(var n in t){var r=t[n];if(i(r))for(var s=0;s<r.length;s++)Kr(e,n,r[s]);else Kr(e,n,r)}}function Kr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function Gr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Ue,e.prototype.$delete=je,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return Kr(r,e,t,n);n=n||{},n.user=!0;var i=new wn(r,e,t,n);if(n.immediate){var s='callback for immediate watcher "'.concat(i.expression,'"');ke(),Xt(t,r,[i.value],r,s),Ae()}return function(){i.teardown()}}}var Hr=0;function Wr(e){e.prototype._init=function(e){var t=this;t._uid=Hr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ye(!0),t._scope.parent=void 0,t._scope._vm=!0,e&&e._isComponent?Qr(t,e):t.$options=Er(Yr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,An(t),bn(t),Ft(t),Ln(t,"beforeCreate",void 0,!1),Zn(t),Pr(t),Jn(t),Ln(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Qr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Yr(e){var t=e.options;if(e.super){var n=Yr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Xr(e);i&&L(e.extendOptions,i),t=e.options=Er(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Xr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Jr(e){this._init(e)}function Zr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=P(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function ei(e){e.mixin=function(e){return this.options=Er(this.options,e),this}}function ti(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var s=sr(e)||sr(n.options);var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Er(n.options,e),o["super"]=n,o.options.props&&ni(o),o.options.computed&&ri(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,K.forEach(function(e){o[e]=n[e]}),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=L({},o.options),i[r]=o,o}}function ni(e){var t=e.options.props;for(var n in t)Rr(e.prototype,"_props",n)}function ri(e){var t=e.options.computed;for(var n in t)Ur(e.prototype,n,t[n])}function ii(e){K.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function si(e){return e&&(sr(e.Ctor.options)||e.tag)}function oi(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function ai(e,t){var n=e.cache,r=e.keys,i=e._vnode,s=e.$vnode;for(var o in n){var a=n[o];if(a){var c=a.name;c&&!t(c)&&ci(n,o,r,i)}}s.componentOptions.children=void 0}function ci(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,I(n,t)}Wr(Jr),Gr(Jr),Sn(Jr),xn(Jr),$t(Jr);var ui=[String,RegExp,Array],li={name:"keep-alive",abstract:!0,props:{include:ui,exclude:ui,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;t[i]={name:si(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&ci(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ci(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(t){ai(e,function(e){return oi(t,e)})}),this.$watch("exclude",function(t){ai(e,function(e){return!oi(t,e)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=qt(e),n=t&&t.componentOptions;if(n){var r=si(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!oi(s,r))||o&&r&&oi(o,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,I(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},hi={KeepAlive:li};function di(e){var t={get:function(){return H}};Object.defineProperty(e,"config",t),e.util={warn:fr,extend:L,mergeOptions:Er,defineReactive:$e},e.set=Ue,e.delete=je,e.nextTick=ln,e.observable=function(e){return Ve(e),e},e.options=Object.create(null),K.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,L(e.options.components,hi),Zr(e),ei(e),ti(e),ii(e)}di(Jr),Object.defineProperty(Jr.prototype,"$isServer",{get:he}),Object.defineProperty(Jr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Jr,"FunctionalRenderContext",{value:tr}),Jr.version=fn;var fi=b("style,class"),pi=b("input,textarea,option,select,progress"),mi=function(e,t,n){return"value"===n&&pi(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},gi=b("contenteditable,draggable,spellcheck"),vi=b("events,caret,typing,plaintext-only"),yi=function(e,t){return Ti(t)||"false"===t?"false":"contenteditable"===e&&vi(t)?t:"true"},wi=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),bi="http://www.w3.org/1999/xlink",_i=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ii=function(e){return _i(e)?e.slice(6,e.length):""},Ti=function(e){return null==e||!1===e};function Ei(e){var t=e.data,n=e,r=e;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Si(r.data,t));while(o(n=n.parent))n&&n.data&&(t=Si(t,n.data));return Ci(t.staticClass,t.class)}function Si(e,t){return{staticClass:ki(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Ci(e,t){return o(e)||o(t)?ki(e,Ai(t)):""}function ki(e,t){return e?t?e+" "+t:e:t||""}function Ai(e){return Array.isArray(e)?xi(e):h(e)?Di(e):"string"===typeof e?e:""}function xi(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=Ai(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Di(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Ni={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Oi=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ri=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(e){return Oi(e)||Ri(e)};function Li(e){return Ri(e)?"svg":"math"===e?"math":void 0}var Mi=Object.create(null);function Fi(e){if(!ee)return!0;if(Pi(e))return!1;if(e=e.toLowerCase(),null!=Mi[e])return Mi[e];var t=document.createElement(e);return e.indexOf("-")>-1?Mi[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Mi[e]=/HTMLUnknownElement/.test(t.toString())}var Vi=b("text,number,password,search,email,tel,url");function $i(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function Ui(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function ji(e,t){return document.createElementNS(Ni[e],t)}function Bi(e){return document.createTextNode(e)}function qi(e){return document.createComment(e)}function zi(e,t,n){e.insertBefore(t,n)}function Ki(e,t){e.removeChild(t)}function Gi(e,t){e.appendChild(t)}function Hi(e){return e.parentNode}function Wi(e){return e.nextSibling}function Qi(e){return e.tagName}function Yi(e,t){e.textContent=t}function Xi(e,t){e.setAttribute(t,"")}var Ji=Object.freeze({__proto__:null,createElement:Ui,createElementNS:ji,createTextNode:Bi,createComment:qi,insertBefore:zi,removeChild:Ki,appendChild:Gi,parentNode:Hi,nextSibling:Wi,tagName:Qi,setTextContent:Yi,setStyleScope:Xi}),Zi={create:function(e,t){es(t)},update:function(e,t){e.data.ref!==t.data.ref&&(es(e,!0),es(t))},destroy:function(e){es(e,!0)}};function es(e,t){var n=e.data.ref;if(o(n)){var r=e.context,s=e.componentInstance||e.elm,a=t?null:s,c=t?void 0:s;if(l(n))Xt(n,r,[a],r,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Ge(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;t?i(p)&&I(p,s):i(p)?p.includes(s)||p.push(s):h?(f[n]=[s],ts(r,n,f[n])):n.value=[s]}else if(h){if(t&&f[n]!==s)return;f[n]=c,ts(r,n,a)}else if(d){if(t&&n.value!==s)return;n.value=a}else 0}}}function ts(e,t,n){var r=e._setupState;r&&E(r,t)&&(Ge(r[t])?r[t].value=n:r[t]=n)}var ns=new ye("",{},[]),rs=["create","activate","update","remove","destroy"];function is(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&ss(e,t)||a(e.isAsyncPlaceholder)&&s(t.asyncFactory.error))}function ss(e,t){if("input"!==e.tag)return!0;var n,r=o(n=e.data)&&o(n=n.attrs)&&n.type,i=o(n=t.data)&&o(n=n.attrs)&&n.type;return r===i||Vi(r)&&Vi(i)}function os(e,t,n){var r,i,s={};for(r=t;r<=n;++r)i=e[r].key,o(i)&&(s[i]=r);return s}function as(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<rs.length;++t)for(r[rs[t]]=[],n=0;n<c.length;++n)o(c[n][rs[t]])&&r[rs[t]].push(c[n][rs[t]]);function h(e){return new ye(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=l.parentNode(e);o(t)&&l.removeChild(t,e)}function p(e,t,n,r,i,s,c){if(o(e.elm)&&o(s)&&(e=s[c]=_e(e)),e.isRootInsert=!i,!m(e,t,n,r)){var u=e.data,h=e.children,d=e.tag;o(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),T(e),w(e,h,t),o(u)&&I(e,t),y(n,e.elm,r)):a(e.isComment)?(e.elm=l.createComment(e.text),y(n,e.elm,r)):(e.elm=l.createTextNode(e.text),y(n,e.elm,r))}}function m(e,t,n,r){var i=e.data;if(o(i)){var s=o(e.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(e,!1),o(e.componentInstance))return g(e,t),y(n,e.elm,r),a(s)&&v(e,t,n,r),!0}}function g(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(I(e,t),T(e)):(es(e),t.push(e))}function v(e,t,n,i){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<r.activate.length;++s)r.activate[s](ns,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){o(e)&&(o(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function w(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function _(e){while(e.componentInstance)e=e.componentInstance._vnode;return o(e.tag)}function I(e,n){for(var i=0;i<r.create.length;++i)r.create[i](ns,e);t=e.data.hook,o(t)&&(o(t.create)&&t.create(ns,e),o(t.insert)&&n.push(e))}function T(e){var t;if(o(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)o(t=n.context)&&o(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}o(t=Cn)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function E(e,t,n,r,i,s){for(;r<=i;++r)p(n[r],s,e,t,!1,n,r)}function S(e){var t,n,i=e.data;if(o(i))for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)S(e.children[n])}function C(e,t,n){for(;t<=n;++t){var r=e[t];o(r)&&(o(r.tag)?(k(r),S(r)):f(r.elm))}}function k(e,t){if(o(t)||o(e.data)){var n,i=r.remove.length+1;for(o(t)?t.listeners+=i:t=d(e.elm,i),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&k(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else f(e.elm)}function A(e,t,n,r,i){var a,c,u,h,d=0,f=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,w=n[0],b=n[y],_=!i;while(d<=m&&f<=y)s(g)?g=t[++d]:s(v)?v=t[--m]:is(g,w)?(D(g,w,r,n,f),g=t[++d],w=n[++f]):is(v,b)?(D(v,b,r,n,y),v=t[--m],b=n[--y]):is(g,b)?(D(g,b,r,n,y),_&&l.insertBefore(e,g.elm,l.nextSibling(v.elm)),g=t[++d],b=n[--y]):is(v,w)?(D(v,w,r,n,f),_&&l.insertBefore(e,v.elm,g.elm),v=t[--m],w=n[++f]):(s(a)&&(a=os(t,d,m)),c=o(w.key)?a[w.key]:x(w,t,d,m),s(c)?p(w,r,e,g.elm,!1,n,f):(u=t[c],is(u,w)?(D(u,w,r,n,f),t[c]=void 0,_&&l.insertBefore(e,u.elm,g.elm)):p(w,r,e,g.elm,!1,n,f)),w=n[++f]);d>m?(h=s(n[y+1])?null:n[y+1].elm,E(e,h,n,f,y,r)):f>y&&C(t,d,m)}function x(e,t,n,r){for(var i=n;i<r;i++){var s=t[i];if(o(s)&&is(e,s))return i}}function D(e,t,n,i,c,u){if(e!==t){o(t.elm)&&o(i)&&(t=i[c]=_e(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?R(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(o(f)&&_(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);o(d=f.hook)&&o(d=d.update)&&d(e,t)}s(t.text)?o(p)&&o(m)?p!==m&&A(h,p,m,n,u):o(m)?(o(e.text)&&l.setTextContent(h,""),E(h,null,m,0,m.length-1,n)):o(p)?C(p,0,p.length-1):o(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(e,t)}}}function N(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var O=b("attrs,class,staticClass,staticStyle,key");function R(e,t,n,r){var i,s=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(t,!0),o(i=t.componentInstance)))return g(t,n),!0;if(o(s)){if(o(u))if(e.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!R(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(t,u,n);if(o(c)){var f=!1;for(var p in c)if(!O(p)){f=!0,I(t,n);break}!f&&c["class"]&&mn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!s(t)){var c=!1,u=[];if(s(e))c=!0,p(t,u);else{var d=o(e.nodeType);if(!d&&is(e,t))D(e,t,u,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(z)&&(e.removeAttribute(z),n=!0),a(n)&&R(e,t,u))return N(t,u,!0),e;e=h(e)}var f=e.elm,m=l.parentNode(f);if(p(t,u,f._leaveCb?null:m,l.nextSibling(f)),o(t.parent)){var g=t.parent,v=_(t);while(g){for(var y=0;y<r.destroy.length;++y)r.destroy[y](g);if(g.elm=t.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](ns,g);var b=g.data.hook.insert;if(b.merged)for(var I=b.fns.slice(1),T=0;T<I.length;T++)I[T]()}else es(g);g=g.parent}}o(m)?C([e],0,0):o(e.tag)&&S(e)}}return N(t,u,c),t.elm}o(e)&&S(e)}}var cs={create:us,update:us,destroy:function(e){us(e,ns)}};function us(e,t){(e.data.directives||t.data.directives)&&ls(e,t)}function ls(e,t){var n,r,i,s=e===ns,o=t===ns,a=ds(e.data.directives,e.context),c=ds(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ps(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(ps(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)ps(u[n],"inserted",t,e)};s?rt(t,"insert",h):h()}if(l.length&&rt(t,"postpatch",function(){for(var n=0;n<l.length;n++)ps(l[n],"componentUpdated",t,e)}),!s)for(n in a)c[n]||ps(a[n],"unbind",e,e,o)}var hs=Object.create(null);function ds(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=hs),i[fs(r)]=r,t._setupState&&t._setupState.__sfc){var s=r.def||Sr(t,"_setupState","v-"+r.name);r.def="function"===typeof s?{bind:s,update:s}:s}r.def=r.def||Sr(t.$options,"directives",r.name,!0)}return i}function fs(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function ps(e,t,n,r,i){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,r,i)}catch(Zo){Yt(Zo,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var ms=[Zi,cs];function gs(e,t){var n=t.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(e.data.attrs)||!s(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(r in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=L({},h)),h)i=h[r],c=l[r],c!==i&&vs(u,r,i,t.data.pre);for(r in(ne||ie)&&h.value!==l.value&&vs(u,"value",h.value),l)s(h[r])&&(_i(r)?u.removeAttributeNS(bi,Ii(r)):gi(r)||u.removeAttribute(r))}}function vs(e,t,n,r){r||e.tagName.indexOf("-")>-1?ys(e,t,n):wi(t)?Ti(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):gi(t)?e.setAttribute(t,yi(t,n)):_i(t)?Ti(n)?e.removeAttributeNS(bi,Ii(t)):e.setAttributeNS(bi,t,n):ys(e,t,n)}function ys(e,t,n){if(Ti(n))e.removeAttribute(t);else{if(ne&&!re&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var ws={create:gs,update:gs};function bs(e,t){var n=t.elm,r=t.data,i=e.data;if(!(s(r.staticClass)&&s(r.class)&&(s(i)||s(i.staticClass)&&s(i.class)))){var a=Ei(t),c=n._transitionClasses;o(c)&&(a=ki(a,Ai(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var _s,Is={create:bs,update:bs},Ts="__r",Es="__c";function Ss(e){if(o(e[Ts])){var t=ne?"change":"input";e[t]=[].concat(e[Ts],e[t]||[]),delete e[Ts]}o(e[Es])&&(e.change=[].concat(e[Es],e.change||[]),delete e[Es])}function Cs(e,t,n){var r=_s;return function i(){var s=t.apply(null,arguments);null!==s&&xs(e,i,n,r)}}var ks=tn&&!(ae&&Number(ae[1])<=53);function As(e,t,n,r){if(ks){var i=qn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}_s.addEventListener(e,t,ue?{capture:n,passive:r}:n)}function xs(e,t,n,r){(r||_s).removeEventListener(e,t._wrapper||t,n)}function Ds(e,t){if(!s(e.data.on)||!s(t.data.on)){var n=t.data.on||{},r=e.data.on||{};_s=t.elm||e.elm,Ss(n),nt(n,r,As,xs,Cs,t.context),_s=void 0}}var Ns,Os={create:Ds,update:Ds,destroy:function(e){return Ds(e,ns)}};function Rs(e,t){if(!s(e.data.domProps)||!s(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(o(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=L({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=s(r)?"":String(r);Ps(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ri(i.tagName)&&s(i.innerHTML)){Ns=Ns||document.createElement("div"),Ns.innerHTML="<svg>".concat(r,"</svg>");var h=Ns.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Zo){}}}}function Ps(e,t){return!e.composing&&("OPTION"===e.tagName||Ls(e,t)||Ms(e,t))}function Ls(e,t){var n=!0;try{n=document.activeElement!==e}catch(Zo){}return n&&e.value!==t}function Ms(e,t){var n=e.value,r=e._vModifiers;if(o(r)){if(r.number)return w(n)!==w(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var Fs={create:Rs,update:Rs},Vs=S(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t});function $s(e){var t=Us(e.style);return e.staticStyle?L(e.staticStyle,t):t}function Us(e){return Array.isArray(e)?M(e):"string"===typeof e?Vs(e):e}function js(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=$s(i.data))&&L(r,n)}(n=$s(e.data))&&L(r,n);var s=e;while(s=s.parent)s.data&&(n=$s(s.data))&&L(r,n);return r}var Bs,qs=/^--/,zs=/\s*!important$/,Ks=function(e,t,n){if(qs.test(t))e.style.setProperty(t,n);else if(zs.test(n))e.style.setProperty(D(t),n.replace(zs,""),"important");else{var r=Hs(t);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)e.style[r]=n[i];else e.style[r]=n}},Gs=["Webkit","Moz","ms"],Hs=S(function(e){if(Bs=Bs||document.createElement("div").style,e=k(e),"filter"!==e&&e in Bs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Gs.length;n++){var r=Gs[n]+t;if(r in Bs)return r}});function Ws(e,t){var n=t.data,r=e.data;if(!(s(n.staticStyle)&&s(n.style)&&s(r.staticStyle)&&s(r.style))){var i,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=Us(t.data.style)||{};t.data.normalizedStyle=o(d.__ob__)?L({},d):d;var f=js(t,!0);for(a in h)s(f[a])&&Ks(c,a,"");for(a in f)i=f[a],Ks(c,a,null==i?"":i)}}var Qs={create:Ws,update:Ws},Ys=/\s+/;function Xs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ys).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Js(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ys).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Zs(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&L(t,eo(e.name||"v")),L(t,e),t}return"string"===typeof e?eo(e):void 0}}var eo=S(function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}}),to=ee&&!re,no="transition",ro="animation",io="transition",so="transitionend",oo="animation",ao="animationend";to&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(io="WebkitTransition",so="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(oo="WebkitAnimation",ao="webkitAnimationEnd"));var co=ee?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function uo(e){co(function(){co(e)})}function lo(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Xs(e,t))}function ho(e,t){e._transitionClasses&&I(e._transitionClasses,t),Js(e,t)}function fo(e,t,n){var r=mo(e,t),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===no?so:ao,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout(function(){c<o&&u()},s+1),e.addEventListener(a,l)}var po=/\b(transform|all)(,|$)/;function mo(e,t){var n,r=window.getComputedStyle(e),i=(r[io+"Delay"]||"").split(", "),s=(r[io+"Duration"]||"").split(", "),o=go(i,s),a=(r[oo+"Delay"]||"").split(", "),c=(r[oo+"Duration"]||"").split(", "),u=go(a,c),l=0,h=0;t===no?o>0&&(n=no,l=o,h=s.length):t===ro?u>0&&(n=ro,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?no:ro:null,h=n?n===no?s.length:c.length:0);var d=n===no&&po.test(r[io+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function go(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return vo(t)+vo(e[n])}))}function vo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function yo(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zs(e.data.transition);if(!s(r)&&!o(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,g=r.beforeEnter,v=r.enter,y=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,I=r.appear,T=r.afterAppear,E=r.appearCancelled,S=r.duration,C=Cn,k=Cn.$vnode;while(k&&k.parent)C=k.context,k=k.parent;var A=!C._isMounted||!e.isRootInsert;if(!A||I||""===I){var x=A&&f?f:c,D=A&&m?m:d,N=A&&p?p:u,O=A&&_||g,R=A&&l(I)?I:v,P=A&&T||y,L=A&&E||b,M=w(h(S)?S.enter:S);0;var F=!1!==i&&!re,V=_o(R),$=n._enterCb=B(function(){F&&(ho(n,N),ho(n,D)),$.cancelled?(F&&ho(n,x),L&&L(n)):P&&P(n),n._enterCb=null});e.data.show||rt(e,"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,$)}),O&&O(n),F&&(lo(n,x),lo(n,D),uo(function(){ho(n,x),$.cancelled||(lo(n,N),V||(bo(M)?setTimeout($,M):fo(n,a,$)))})),e.data.show&&(t&&t(),R&&R(n,$)),F||V||$()}}}function wo(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Zs(e.data.transition);if(s(r)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,g=r.delayLeave,v=r.duration,y=!1!==i&&!re,b=_o(f),_=w(h(v)?v.leave:v);0;var I=n._leaveCb=B(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(ho(n,u),ho(n,l)),I.cancelled?(y&&ho(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null});g?g(T):T()}function T(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(lo(n,c),lo(n,l),uo(function(){ho(n,c),I.cancelled||(lo(n,u),b||(bo(_)?setTimeout(I,_):fo(n,a,I)))})),f&&f(n,I),y||b||I())}}function bo(e){return"number"===typeof e&&!isNaN(e)}function _o(e){if(s(e))return!1;var t=e.fns;return o(t)?_o(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Io(e,t){!0!==t.data.show&&yo(t)}var To=ee?{create:Io,activate:Io,remove:function(e,t){!0!==e.data.show?wo(e,t):t()}}:{},Eo=[ws,Is,Os,Fs,Qs,To],So=Eo.concat(ms),Co=as({nodeOps:Ji,modules:So});re&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Po(e,"input")});var ko={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?rt(n,"postpatch",function(){ko.componentUpdated(e,t,n)}):Ao(e,t,n.context),e._vOptions=[].map.call(e.options,No)):("textarea"===n.tag||Vi(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Oo),e.addEventListener("compositionend",Ro),e.addEventListener("change",Ro),re&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ao(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,No);if(i.some(function(e,t){return!U(e,r[t])})){var s=e.multiple?t.value.some(function(e){return Do(e,i)}):t.value!==t.oldValue&&Do(t.value,i);s&&Po(e,"change")}}}};function Ao(e,t,n){xo(e,t,n),(ne||ie)&&setTimeout(function(){xo(e,t,n)},0)}function xo(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],i)s=j(r,No(o))>-1,o.selected!==s&&(o.selected=s);else if(U(No(o),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function Do(e,t){return t.every(function(t){return!U(t,e)})}function No(e){return"_value"in e?e._value:e.value}function Oo(e){e.target.composing=!0}function Ro(e){e.target.composing&&(e.target.composing=!1,Po(e.target,"input"))}function Po(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Lo(e){return!e.componentInstance||e.data&&e.data.transition?e:Lo(e.componentInstance._vnode)}var Mo={bind:function(e,t,n){var r=t.value;n=Lo(n);var i=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,yo(n,function(){e.style.display=s})):e.style.display=r?s:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=Lo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?yo(n,function(){e.style.display=e.__vOriginalDisplay}):wo(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Fo={model:ko,show:Mo},Vo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function $o(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?$o(qt(t.children)):e}function Uo(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[k(r)]=i[r];return t}function jo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Bo(e){while(e=e.parent)if(e.data.transition)return!0}function qo(e,t){return t.key===e.key&&t.tag===e.tag}var zo=function(e){return e.tag||kt(e)},Ko=function(e){return"show"===e.name},Go={name:"transition",props:Vo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(zo),n.length)){0;var r=this.mode;0;var i=n[0];if(Bo(this.$vnode))return i;var s=$o(i);if(!s)return i;if(this._leaving)return jo(e,i);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:u(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Uo(this),c=this._vnode,l=$o(c);if(s.data.directives&&s.data.directives.some(Ko)&&(s.data.show=!0),l&&l.data&&!qo(s,l)&&!kt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,rt(h,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),jo(e,i);if("in-out"===r){if(kt(s))return c;var d,f=function(){d()};rt(a,"afterEnter",f),rt(a,"enterCancelled",f),rt(h,"delayLeave",function(e){d=e})}}return i}}},Ho=L({tag:String,moveClass:String},Vo);delete Ho.mode;var Wo={props:Ho,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=kn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=Uo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Qo),e.forEach(Yo),e.forEach(Xo),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;lo(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(so,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(so,e),n._moveCb=null,ho(n,t))})}}))},methods:{hasMove:function(e,t){if(!to)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Js(n,e)}),Xs(n,t),n.style.display="none",this.$el.appendChild(n);var r=mo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Qo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Yo(e){e.data.newPos=e.elm.getBoundingClientRect()}function Xo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),s.transitionDuration="0s"}}var Jo={Transition:Go,TransitionGroup:Wo};Jr.config.mustUseProp=mi,Jr.config.isReservedTag=Pi,Jr.config.isReservedAttr=fi,Jr.config.getTagNamespace=Li,Jr.config.isUnknownElement=Fi,L(Jr.options.directives,Fo),L(Jr.options.components,Jo),Jr.prototype.__patch__=ee?Co:F,Jr.prototype.$mount=function(e,t){return e=e&&ee?$i(e):void 0,Dn(this,e,t)},ee&&setTimeout(function(){H.devtools&&de&&de.emit("init",Jr)},0)},611:function(e,t,n){var r,i=n(840),s=n(928),o=n(125),a=n(424),c=n(743),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(){this.s=this.s,this.o=this.o}var E=0;T.prototype.s=!1,T.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==E)||m(this)},T.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",()=>{},t),d.removeEventListener("test",()=>{},t)}catch(n){}return e}();function D(e){return/^[\s\xa0]*$/.test(e)}function N(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function O(e){return-1!=N().indexOf(e)}function R(e){return R[" "](e),e}function P(e,t){var n=_r;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}R[" "]=function(){};var L,M,F=O("Opera"),V=O("Trident")||O("MSIE"),$=O("Edge"),U=$||V,j=O("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),B=-1!=N().toLowerCase().indexOf("webkit")&&!O("Edge");function q(){var e=d.document;return e?e.documentMode:void 0}e:{var z="",K=function(){var e=N();return j?/rv:([^\);]+)(\)|;)/.exec(e):$?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):B?/WebKit\/(\S+)/.exec(e):F?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&(z=K?K[1]:""),V){var G=q();if(null!=G&&G>parseFloat(z)){L=String(G);break e}}L=z}if(d.document&&V){var H=q();M=H||(parseInt(L,10)||void 0)}else M=void 0;var W=M;function Q(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{R(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Q.$.h.call(this)}}I(Q,A);var Y={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),J=0;function Z(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++J,this.fa=this.ia=!1}function ee(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function te(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ne(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function re(e){const t={};for(const n in e)t[n]=e[n];return t}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function se(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ie.length;t++)n=ie[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function oe(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ee(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ce(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}oe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ce(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Z(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ue="closure_lm_"+(1e6*Math.random()|0),le={};function he(e,t,n,r,i){if(r&&r.once)return pe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,r,i);return null}return n=_e(n),e&&e[X]?e.O(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!1,r,i)}function de(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=we(e);if(a||(e[ue]=a=new oe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=fe(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)x||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ve(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function fe(){function e(n){return t.call(e.src,e.listener,n)}const t=ye;return e}function pe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=_e(n),e&&e[X]?e.P(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!0,r,i)}function me(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=_e(n),e&&e[X]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ce(s,n,r,i),-1<n&&(ee(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=we(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ce(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[X])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ve(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=we(t))?(ae(n,e),0==n.h&&(n.src=null,t[ue]=null)):ee(e)}}}function ve(e){return e in le?le[e]:le[e]="on"+e}function ye(e,t){if(e.fa)e=!0;else{t=new Q(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ge(e),e=n.call(r,t)}return e}function we(e){return e=e[ue],e instanceof oe?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function Ie(){T.call(this),this.i=new oe(this),this.S=this,this.J=null}function Te(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),se(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ee(o,r,!0,t)&&i}if(o=t.g=e,i=Ee(o,r,!0,t)&&i,i=Ee(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ee(o,r,!1,t)&&i}function Ee(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ae(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Ie,T),Ie.prototype[X]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){me(this,e,t,n,r)},Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ee(n[r]);delete t.g[e],t.h--}}this.J=null},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Se=d.JSON.stringify;class Ce{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ke(){var e=Le;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ae{constructor(){this.h=this.g=null}add(e,t){const n=xe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var xe=new Ce(()=>new De,e=>e.reset());class De{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ne(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Oe(e){d.setTimeout(()=>{throw e},0)}let Re,Pe=!1,Le=new Ae,Me=()=>{const e=d.Promise.resolve(void 0);Re=()=>{e.then(Fe)}};var Fe=()=>{for(var e;e=ke();){try{e.h.call(e.g)}catch(n){Oe(n)}var t=xe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pe=!1};function Ve(e,t){Ie.call(this),this.h=e||1,this.g=t||d,this.j=b(this.qb,this),this.l=Date.now()}function $e(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ue(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function je(e){e.g=Ue(()=>{e.g=null,e.i&&(e.i=!1,je(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Ve,Ie),r=Ve.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Te(this,"tick"),this.ga&&($e(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ve.$.N.call(this),$e(this),delete this.g};class Be extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(e){T.call(this),this.h=e,this.g={}}I(qe,T);var ze=[];function Ke(e,t,n,r){Array.isArray(n)||(n&&(ze[0]=n.toString()),n=ze);for(var i=0;i<n.length;i++){var s=he(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ge(e){te(e.g,function(e,t){this.g.hasOwnProperty(t)&&ge(e)},e),e.g={}}function He(){this.g=!0}function We(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}function Qe(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}function Ye(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Je(e,n)+(r?" "+r:"")})}function Xe(e,t){e.info(function(){return"TIMEOUT: "+t})}function Je(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Se(n)}catch(a){return t}}qe.prototype.N=function(){qe.$.N.call(this),Ge(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},He.prototype.Ea=function(){this.g=!1},He.prototype.info=function(){};var Ze={},et=null;function tt(){return et=et||new Ie}function nt(e){A.call(this,Ze.Ta,e)}function rt(e){const t=tt();Te(t,new nt(t))}function it(e,t){A.call(this,Ze.STAT_EVENT,e),this.stat=t}function st(e){const t=tt();Te(t,new it(t,e))}function ot(e,t){A.call(this,Ze.Ua,e),this.size=t}function at(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){e()},t)}Ze.Ta="serverreachability",I(nt,A),Ze.STAT_EVENT="statevent",I(it,A),Ze.Ua="timingevent",I(ot,A);var ct={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ut={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lt(){}function ht(e){return e.h||(e.h=e.i())}function dt(){}lt.prototype.h=null;var ft,pt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mt(){A.call(this,"d")}function gt(){A.call(this,"c")}function vt(){}function yt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new qe(this),this.P=bt,e=U?125:void 0,this.V=new Ve(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}I(mt,A),I(gt,A),I(vt,lt),vt.prototype.g=function(){return new XMLHttpRequest},vt.prototype.i=function(){return{}},ft=new vt;var bt=45e3,_t={},It={};function Tt(e,t,n){e.L=1,e.v=Kt(Ut(t)),e.s=n,e.S=!0,Et(e,null)}function Et(e,t){e.G=Date.now(),At(e),e.A=Ut(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),sn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new wt,e.g=lr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Be(b(e.Pa,e,e.g),e.O)),Ke(e.U,e.g,"readystatechange",e.nb),t=e.I?re(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),rt(),We(e.j,e.u,e.A,e.m,e.W,e.s)}function St(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ct(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=kt(e,n),r==It){4==t&&(e.o=4,st(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==_t){e.o=4,st(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Rt(e,r)}St(e)&&r!=It&&r!=_t&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,st(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nr(t),t.M=!0,st(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Ot(e),Nt(e))}function kt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?_t:(r+=1,r+n>t.length?It:(t=t.slice(r,r+n),e.C=r+n,t)))}function At(e){e.Y=Date.now()+e.P,xt(e,e.P)}function xt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=at(b(e.lb,e),t)}function Dt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Nt(e){0==e.l.H||e.J||sr(e.l,e)}function Ot(e){Dt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,$e(e.V),Ge(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Rt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||fn(n.i,e)))if(!e.K&&fn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ir(n),Hn(n)}tr(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=at(b(n.ib,n),6e3));if(1>=dn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else ar(n,11)}else if((e.K||n.g==e)&&ir(n),!D(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(pn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,zt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ur(r,r.J?r.pa:null,r.Y),o.K){mn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Dt(a),At(a)),r.g=o}else er(r);0<n.j.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||ar(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ar(n,7):Gn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}rt(4)}catch(u){}}function Pt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Lt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Lt(e),r=Pt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=yt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==$n(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=$n(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||U||this.g&&(this.h.h||this.g.ja()||Un(this.g)))){this.J||4!=l||7==t||rt(8==t||0>=h?3:2),Dt(this);var n=this.g.da();this.ca=n;t:if(St(this)){var r=Un(this.g);e="";var i=r.length,s=4==$n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ot(this),Nt(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,st(12),Ot(this),Nt(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rt(this,n)}this.S?(Ct(this,l,o),U&&this.i&&3==l&&(Ke(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,o,null),Rt(this,o)),4==l&&Ot(this),this.i&&!this.J&&(4==l?sr(this.l,this):(this.i=!1,At(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Ot(this),Nt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=$n(this.g),t=this.g.ja();this.C<t.length&&(Dt(this),Ct(this,e,t),this.i&&4!=e&&At(this))}},r.cancel=function(){this.J=!0,Ot(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Xe(this.j,this.A),2!=this.L&&(rt(),st(17)),Ot(this),this.o=2,Nt(this)):xt(this,this.Y-e)};var Ft=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $t(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=e.h,jt(this,e.j),this.s=e.s,this.g=e.g,Bt(this,e.m),this.l=e.l;var t=e.i,n=new en;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),qt(this,n),this.o=e.o}else e&&(t=String(e).match(Ft))?(this.h=!1,jt(this,t[1]||"",!0),this.s=Gt(t[2]||""),this.g=Gt(t[3]||"",!0),Bt(this,t[4]),this.l=Gt(t[5]||"",!0),qt(this,t[6]||"",!0),this.o=Gt(t[7]||"")):(this.h=!1,this.i=new en(null,this.h))}function Ut(e){return new $t(e)}function jt(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qt(e,t,n){t instanceof en?(e.i=t,an(e.i,e.h)):(n||(t=Ht(t,Jt)),e.i=new en(t,e.h))}function zt(e,t,n){e.i.set(t,n)}function Kt(e){return zt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ht(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Wt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ht(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ht(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ht(n,"/"==n.charAt(0)?Xt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ht(n,Zt)),e.join("")};var Qt=/[#\/\?@]/g,Yt=/[#\?:]/g,Xt=/[#\?]/g,Jt=/[#\?@]/g,Zt=/#/g;function en(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tn(e){e.g||(e.g=new Map,e.h=0,e.i&&Vt(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function nn(e,t){tn(e),t=on(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rn(e,t){return tn(e),t=on(e,t),e.g.has(t)}function sn(e,t,n){nn(e,t),0<n.length&&(e.i=null,e.g.set(on(e,t),C(n)),e.h+=n.length)}function on(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function an(e,t){t&&!e.j&&(tn(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(nn(this,t),sn(this,n,e))},e)),e.j=t}r=en.prototype,r.add=function(e,t){tn(this),this.i=null,e=on(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){tn(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},r.ta=function(){tn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){tn(this);let t=[];if("string"===typeof e)rn(this,e)&&(t=t.concat(this.g.get(on(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return tn(this),this.i=null,e=on(this,e),rn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.g=e,this.map=t}};function un(e){this.l=e||ln,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function hn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dn(e){return e.h?1:e.g?e.g.size:0}function fn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pn(e,t){e.g?e.g.add(t):e.h=t}function mn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return C(e.i)}un.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var vn=class{stringify(e){return d.JSON.stringify(e,void 0)}parse(e){return d.JSON.parse(e,void 0)}};function yn(){this.g=new vn}function wn(e,t,n){const r=n||"";try{Mt(e,function(e,n){let i=e;p(e)&&(i=Se(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function bn(e,t){const n=new He;if(d.Image){const r=new Image;r.onload=_(_n,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(_n,n,r,"TestLoadImage: error",!1,t),r.onabort=_(_n,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(_n,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function _n(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function In(e){this.l=e.fc||null,this.j=e.ob||!1}function Tn(e,t){Ie.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=En,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(In,lt),In.prototype.g=function(){return new Tn(this.l,this.j)},In.prototype.i=function(e){return function(){return e}}({}),I(Tn,Ie);var En=0;function Sn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,kn(e)}function kn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Tn.prototype,r.open=function(e,t){if(this.readyState!=En)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,kn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Cn(this)),this.readyState=En},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cn(this):kn(this),3==this.readyState&&Sn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Cn(this))},r.Ya=function(e){this.g&&(this.response=e,Cn(this))},r.ka=function(){this.g&&Cn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=d.JSON.parse;function xn(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dn,this.L=this.M=!1}I(xn,Ie);var Dn="",Nn=/^https?$/i,On=["POST","PUT"];function Rn(e){return V&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Pn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ln(e),Fn(e)}function Ln(e){e.F||(e.F=!0,Te(e,"complete"),Te(e,"error"))}function Mn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=$n(e)||2!=e.da()))if(e.v&&4==$n(e))Ue(e.La,0,e);else if(Te(e,"readystatechange"),4==$n(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Ft)[1]||null;!i&&d.self&&d.self.location&&(i=d.self.location.protocol.slice(0,-1)),r=!Nn.test(i?i.toLowerCase():"")}n=r}if(n)Te(e,"complete"),Te(e,"success");else{e.m=6;try{var s=2<$n(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Ln(e)}}finally{Fn(e)}}}function Fn(e,t){if(e.g){Vn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Te(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function $n(e){return e.g?e.g.readyState:0}function Un(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Dn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Qr){return null}}function jn(e){const t={};e=(e.g&&2<=$n(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(D(e[r]))continue;var n=Ne(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ne(t,function(e){return e.join(", ")})}function Bn(e){let t="";return te(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function qn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Bn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):zt(e,t,n))}function zn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kn(e){this.Ga=0,this.j=[],this.l=new He,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,e),this.hb=zn("retryDelaySeedMs",1e4,e),this.eb=zn("forwardChannelMaxRetries",2,e),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new un(e&&e.concurrentRequestLimit),this.Ja=new yn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Gn(e){if(Wn(e),3==e.H){var t=e.W++,n=Ut(e.I);if(zt(n,"SID",e.K),zt(n,"RID",t),zt(n,"TYPE","terminate"),Jn(e,n),t=new yt(e,e.l,t),t.L=2,t.v=Kt(Ut(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=lr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),At(t)}cr(e)}function Hn(e){e.g&&(nr(e),e.g.cancel(),e.g=null)}function Wn(e){Hn(e),e.u&&(d.clearTimeout(e.u),e.u=null),ir(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Qn(e){if(!hn(e.i)&&!e.m){e.m=!0;var t=e.Na;Re||Me(),Pe||(Re(),Pe=!0),Le.add(t,e),e.C=0}}function Yn(e,t){return!(dn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=at(b(e.Na,e,t),or(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.W++;const r=Ut(e.I);zt(r,"SID",e.K),zt(r,"RID",n),zt(r,"AID",e.V),Jn(e,r),e.o&&e.s&&qn(r,e.o,e.s),n=new yt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Zn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),pn(e.i,n),Tt(n,r,t)}function Jn(e,t){e.na&&te(e.na,function(e,n){zt(t,n,e)}),e.h&&Mt({},function(e,n){zt(t,n,e)})}function Zn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?b(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{wn(a,e,"req"+n+"_")}catch(ci){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function er(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Re||Me(),Pe||(Re(),Pe=!0),Le.add(t,e),e.A=0}}function tr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=at(b(e.Ma,e),or(e,e.A)),e.A++,!0)}function nr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function rr(e){e.g=new yt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Ut(e.wa);zt(t,"RID","rpc"),zt(t,"SID",e.K),zt(t,"AID",e.V),zt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&zt(t,"TO",e.qa),zt(t,"TYPE","xmlhttp"),Jn(e,t),e.o&&e.s&&qn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Kt(Ut(t)),n.s=null,n.S=!0,Et(n,e)}function ir(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function sr(e,t){var n=null;if(e.g==t){ir(e),nr(e),e.g=null;var r=2}else{if(!fn(e.i,t))return;n=t.F,mn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=tt(),Te(r,new ot(r,n)),Qn(e)}else er(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Yn(e,t)||2==r&&tr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ar(e,5);break;case 4:ar(e,10);break;case 3:ar(e,6);break;default:ar(e,2)}}function or(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ar(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=b(e.pb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||jt(n,"https"),Kt(n)),bn(n.toString(),r)}else st(2);e.H=0,e.h&&e.h.za(t),cr(e),Wn(e)}function cr(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(k(e.ma,t),k(e.ma,e.j),e.i.i.length=0,C(e.j),e.j.length=0),e.h.ya()}}function ur(e,t,n){var r=n instanceof $t?Ut(n):new $t(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Bt(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new $t(null);r&&jt(s,r),t&&(s.g=t),i&&Bt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&zt(r,n,t),zt(r,"VER",e.ra),Jn(e,r),r}function lr(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new xn(new In({ob:!0})):new xn(e.va),t.Oa(e.J),t}function hr(){}function dr(){if(V&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function fr(e,t){Ie.call(this),this.g=new Kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!D(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!D(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function pr(e){mt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){gt.call(this),this.status=1}function gr(e){this.g=e}function vr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function wr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function br(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=xn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ft.g(),this.C=this.u?ht(this.u):ht(ft),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Pn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=d.FormData&&e instanceof d.FormData,!(0<=S(On,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vn(this),0<this.B&&((this.L=Rn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Ue(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Pn(this,s)}},r.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Te(this,"complete"),Te(this,"abort"),Fn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),xn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<$n(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new yt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=re(s),se(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zn(this,i,t),n=Ut(this.I),zt(n,"RID",e),zt(n,"CVER",22),this.F&&zt(n,"X-HTTP-Session-Id",this.F),Jn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Bn(s)))+"&"+t:this.o&&qn(n,this.o,s)),pn(this.i,i),this.bb&&zt(n,"TYPE","init"),this.P?(zt(n,"$req",t),zt(n,"SID","null"),i.aa=!0,Tt(i,n,null)):Tt(i,n,t),this.H=2}}else 3==this.H&&(e?Xn(this,e):0==this.j.length||hn(this.i)||Xn(this))},r.Ma=function(){if(this.u=null,rr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=at(b(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Hn(this),rr(this))},r.ib=function(){null!=this.v&&(this.v=null,Hn(this),tr(this),st(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=hr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},dr.prototype.g=function(e,t){return new fr(e,t)},I(fr,Ie),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ur(e,null,e.Y),Qn(e)},fr.prototype.close=function(){Gn(this.g)},fr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Se(e),e=n);t.j.push(new cn(t.fb++,e)),3==t.H&&Qn(t)},fr.prototype.N=function(){this.g.h=null,delete this.j,Gn(this.g),delete this.g,fr.$.N.call(this)},I(pr,mt),I(mr,gt),I(gr,hr),gr.prototype.Ba=function(){Te(this.g,"a")},gr.prototype.Aa=function(e){Te(this.g,new pr(e))},gr.prototype.za=function(e){Te(this.g,new mr)},gr.prototype.ya=function(){Te(this.g,"b")},I(yr,vr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)wr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){wr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){wr(this,r),i=0;break}}this.h=i,this.i+=t},yr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var _r={};function Ir(e){return-128<=e&&128>e?P(e,function(e){return new br([0|e],0>e?-1:0)}):new br([0|e],0>e?-1:0)}function Tr(e){if(isNaN(e)||!isFinite(e))return Cr;if(0>e)return Nr(Tr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Sr;return new br(t,0)}function Er(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Nr(Er(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tr(Math.pow(t,8)),r=Cr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Tr(Math.pow(t,s)),r=r.R(s).add(Tr(o))):(r=r.R(n),r=r.add(Tr(o)))}return r}var Sr=4294967296,Cr=Ir(0),kr=Ir(1),Ar=Ir(16777216);function xr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Dr(e){return-1==e.h}function Nr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new br(n,~e.h).add(kr)}function Or(e,t){return e.add(Nr(t))}function Rr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Pr(e,t){this.g=e,this.h=t}function Lr(e,t){if(xr(t))throw Error("division by zero");if(xr(e))return new Pr(Cr,Cr);if(Dr(e))return t=Lr(Nr(e),t),new Pr(Nr(t.g),Nr(t.h));if(Dr(t))return t=Lr(e,Nr(t)),new Pr(Nr(t.g),t.h);if(30<e.g.length){if(Dr(e)||Dr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=kr,r=t;0>=r.X(e);)n=Mr(n),r=Mr(r);var i=Fr(n,1),s=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!xr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Fr(r,1),n=Fr(n,1)}return t=Or(e,i.R(t)),new Pr(i,t)}for(i=Cr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Tr(n),o=s.R(t);Dr(o)||0<o.X(e);)n-=r,s=Tr(n),o=s.R(t);xr(s)&&(s=kr),i=i.add(s),e=Or(e,o)}return new Pr(i,e)}function Mr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new br(n,e.h)}function Fr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new br(i,e.h)}r=br.prototype,r.ea=function(){if(Dr(this))return-Nr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Sr+r)*t,t*=Sr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(xr(this))return"0";if(Dr(this))return"-"+Nr(this).toString(e);for(var t=Tr(Math.pow(e,6)),n=this,r="";;){var i=Lr(n,t).g;n=Or(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,xr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Or(this,e),Dr(e)?-1:xr(e)?0:1},r.abs=function(){return Dr(this)?Nr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new br(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(xr(this)||xr(e))return Cr;if(Dr(this))return Dr(e)?Nr(this).R(Nr(e)):Nr(Nr(this).R(e));if(Dr(e))return Nr(this.R(Nr(e)));if(0>this.X(Ar)&&0>e.X(Ar))return Tr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Rr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Rr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Rr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Rr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new br(n,0)},r.gb=function(e){return Lr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new br(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new br(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new br(n,this.h^e.h)},dr.prototype.createWebChannel=dr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,ut.COMPLETE="complete",dt.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.O,xn.prototype.listenOnce=xn.prototype.P,xn.prototype.getLastError=xn.prototype.Sa,xn.prototype.getLastErrorCode=xn.prototype.Ia,xn.prototype.getStatus=xn.prototype.da,xn.prototype.getResponseJson=xn.prototype.Wa,xn.prototype.getResponseText=xn.prototype.ja,xn.prototype.send=xn.prototype.ha,xn.prototype.setWithCredentials=xn.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,br.prototype.add=br.prototype.add,br.prototype.multiply=br.prototype.R,br.prototype.modulo=br.prototype.gb,br.prototype.compare=br.prototype.X,br.prototype.toNumber=br.prototype.ea,br.prototype.toString=br.prototype.toString,br.prototype.getBits=br.prototype.D,br.fromNumber=Tr,br.fromString=Er;var Vr=l.createWebChannelTransport=function(){return new dr},$r=l.getStatEventTarget=function(){return tt()},Ur=l.ErrorCode=ct,jr=l.EventType=ut,Br=l.Event=Ze,qr=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zr=l.FetchXmlHttpFactory=In,Kr=l.WebChannel=dt,Gr=l.XhrIo=xn,Hr=l.Md5=yr,Wr=l.Integer=br;const Qr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yr.UNAUTHENTICATED=new Yr(null),Yr.GOOGLE_CREDENTIALS=new Yr("google-credentials-uid"),Yr.FIRST_PARTY=new Yr("first-party-uid"),Yr.MOCK_USER=new Yr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xr="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new a.Vy("@firebase/firestore");function Zr(){return Jr.logLevel}function ei(e){Jr.setLogLevel(e)}function ti(e,...t){if(Jr.logLevel<=a.$b.DEBUG){const n=t.map(ii);Jr.debug(`Firestore (${Xr}): ${e}`,...n)}}function ni(e,...t){if(Jr.logLevel<=a.$b.ERROR){const n=t.map(ii);Jr.error(`Firestore (${Xr}): ${e}`,...n)}}function ri(e,...t){if(Jr.logLevel<=a.$b.WARN){const n=t.map(ii);Jr.warn(`Firestore (${Xr}): ${e}`,...n)}}function ii(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e="Unexpected state"){const t=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+e;throw ni(t),new Error(t)}function oi(e,t){e||si()}function ai(e,t){e||si()}function ci(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class li extends c.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Yr.UNAUTHENTICATED))}shutdown(){}}class pi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mi{constructor(e){this.t=e,this.currentUser=Yr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hi,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{ti("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ti("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hi)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(ti("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(oi("string"==typeof t.accessToken),new di(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oi(null===e||"string"==typeof e),new Yr(e)}}class gi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Yr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class vi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new gi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Yr.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ti("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ti("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{ti("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):ti("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(oi("string"==typeof e.token),this.T=e.token,new yi(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=bi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ii(e,t){return e<t?-1:e>t?1:0}function Ti(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function Ei(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new li(ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new li(ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new li(ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new li(ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Si.fromMillis(Date.now())}static fromDate(e){return Si.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Si(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ii(this.nanoseconds,e.nanoseconds):Ii(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ci(e)}static min(){return new Ci(new Si(0,0))}static max(){return new Ci(new Si(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,n){void 0===t?t=0:t>e.length&&si(),void 0===n?n=e.length-t:n>e.length-t&&si(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ki.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ai extends ki{construct(e,t,n){return new Ai(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new li(ui.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Ai(t)}static emptyPath(){return new Ai([])}}const xi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Di extends ki{construct(e,t,n){return new Di(e,t,n)}static isValidIdentifier(e){return xi.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Di.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Di(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new li(ui.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new li(ui.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new li(ui.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new li(ui.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Di(t)}static emptyPath(){return new Di([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.path=e}static fromPath(e){return new Ni(Ai.fromString(e))}static fromName(e){return new Ni(Ai.fromString(e).popFirst(5))}static empty(){return new Ni(Ai.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ai.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ai.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ni(new Ai(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Ri(e){return e.fields.find(e=>2===e.kind)}function Pi(e){return e.fields.filter(e=>2!==e.kind)}Oi.UNKNOWN_ID=-1;class Li{constructor(e,t){this.fieldPath=e,this.kind=t}}class Mi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Mi(0,$i.min())}}function Fi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ci.fromTimestamp(1e9===r?new Si(n+1,0):new Si(n,r));return new $i(i,Ni.empty(),t)}function Vi(e){return new $i(e.readTime,e.key,-1)}class $i{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new $i(Ci.min(),Ni.empty(),-1)}static max(){return new $i(Ci.max(),Ni.empty(),-1)}}function Ui(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ni.comparator(e.documentKey,t.documentKey),0!==n?n:Ii(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ji="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e){if(e.code!==ui.FAILED_PRECONDITION||e.message!==ji)throw e;ti("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&si(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new zi((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof zi?t:zi.resolve(t)}catch(e){return zi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):zi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):zi.reject(t)}static resolve(e){return new zi((t,n)=>{t(e)})}static reject(e){return new zi((t,n)=>{n(e)})}static waitFor(e){return new zi((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=zi.resolve(!1);for(const n of e)t=t.next(e=>e?zi.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new zi((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next(e=>{s[c]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new zi((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new hi,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Wi(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{const n=Zi(t.target.error);this.v.reject(new Wi(e,n))}}static open(e,t,n,r){try{return new Ki(t,e.transaction(r,n))}catch(e){throw new Wi(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(ti("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Yi(t)}}class Gi{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Gi.S((0,c.ZQ)())&&ni("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ti("SimpleDb","Removing database:",e),Xi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,c.zW)())return!1;if(Gi.C())return!0;const e=(0,c.ZQ)(),t=Gi.S(e),n=0<t&&t<10,r=Gi.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/task-management-app/"})||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(ti("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Wi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new li(ui.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new li(ui.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Wi(e,r))},r.onupgradeneeded=e=>{ti("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.O(t,r.transaction,e.oldVersion,this.version).next(()=>{ti("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.$(e);const t=Ki.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.P(),e)).catch(e=>(t.abort(e),zi.reject(e))).toPromise();return s.catch(()=>{}),await t.R,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ti("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Hi{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Xi(this.L.delete())}}class Wi extends li{constructor(e,t){super(ui.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Qi(e){return"IndexedDbTransactionError"===e.name}class Yi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ti("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ti("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Xi(n)}add(e){return ti("SimpleDb","ADD",this.store.name,e,e),Xi(this.store.add(e))}get(e){return Xi(this.store.get(e)).next(t=>(void 0===t&&(t=null),ti("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return ti("SimpleDb","DELETE",this.store.name,e),Xi(this.store.delete(e))}count(){return ti("SimpleDb","COUNT",this.store.name),Xi(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new zi((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new zi((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){ti("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,(e,t,n)=>n.delete())}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new zi((n,r)=>{t.onerror=e=>{const t=Zi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}W(e,t){const n=[];return new zi((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Hi(i),o=t(i.primaryKey,i.value,s);if(o instanceof zi){const e=o.catch(e=>(s.done(),zi.reject(e)));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}}).next(()=>zi.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xi(e){return new zi((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Zi(e.target.error);n(t)}})}let Ji=!1;function Zi(e){const t=Gi.S((0,c.ZQ)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new li("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ji||(Ji=!0,setTimeout(()=>{throw e},0)),e}}return e}class es{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){ti("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{ti("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){Qi(e)?ti("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await qi(e)}await this.et(6e4)})}}class ts{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const n=new Set;let r=t,i=!0;return zi.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return ti("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.rt(r,n)).next(n=>(ti("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}rt(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=Vi(t);Ui(r,n)>0&&(n=r)}),new $i(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function rs(e){return null==e}function is(e){return 0===e&&1/e==-1/0}function ss(e){return"number"==typeof e&&Number.isInteger(e)&&!is(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=cs(t)),t=as(e.get(n),t);return cs(t)}function as(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function cs(e){return e+""}function us(e){const t=e.length;if(oi(t>=2),2===t)return oi(""===e.charAt(0)&&""===e.charAt(1)),Ai.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&si(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:si()}s=t+2}return new Ai(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns.ct=-1;const ls=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e,t){return[e,os(t)]}function ds(e,t,n){return[e,os(t),n]}const fs={},ps=["prefixPath","collectionGroup","readTime","documentId"],ms=["prefixPath","collectionGroup","documentId"],gs=["collectionGroup","readTime","prefixPath","documentId"],vs=["canonicalId","targetId"],ys=["targetId","path"],ws=["path","targetId"],bs=["collectionId","parent"],_s=["indexId","uid"],Is=["uid","sequenceNumber"],Ts=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Es=["indexId","uid","orderedDocumentKey"],Ss=["userId","collectionPath","documentId"],Cs=["userId","collectionPath","largestBatchId"],ks=["userId","collectionGroup","largestBatchId"],As=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xs=[...As,"documentOverlays"],Ds=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ns=Ds,Os=[...Ns,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Bi{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function Ps(e,t){const n=ci(e);return Gi.M(n.ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ms(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Fs(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.comparator=e,this.root=t||Us.EMPTY}insert(e,t){return new Vs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Us.BLACK,null,null))}remove(e){return new Vs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Us.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Us{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Us.RED,this.left=null!=r?r:Us.EMPTY,this.right=null!=i?i:Us.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Us(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Us.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Us.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Us.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Us.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw si();if(this.right.isRed())throw si();const e=this.left.check();if(e!==this.right.check())throw si();return e+(this.isRed()?0:1)}}Us.EMPTY=null,Us.RED=!0,Us.BLACK=!1,Us.EMPTY=new class{constructor(){this.size=0}get key(){throw si()}get value(){throw si()}get color(){throw si()}get left(){throw si()}get right(){throw si()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Us(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(e){this.comparator=e,this.data=new Vs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bs(this.data.getIterator())}getIteratorFrom(e){return new Bs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof js))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new js(this.comparator);return t.data=e,t}}class Bs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function qs(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.fields=e,e.sort(Di.comparator)}static empty(){return new zs([])}unionWith(e){let t=new js(Di.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new zs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ks("Invalid base64 string: "+e):e}}(e);return new Hs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Hs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ii(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Hs.EMPTY_BYTE_STRING=new Hs("");const Ws=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qs(e){if(oi(!!e),"string"==typeof e){let t=0;const n=Ws.exec(e);if(oi(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ys(e.seconds),nanos:Ys(e.nanos)}}function Ys(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Xs(e){return"string"==typeof e?Hs.fromBase64String(e):Hs.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Zs(e){const t=e.mapValue.fields.__previous_value__;return Js(t)?Zs(t):t}function eo(e){const t=Qs(e.mapValue.fields.__local_write_time__.timestampValue);return new Si(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class no{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new no("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},io={nullValue:"NULL_VALUE"};function so(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Js(e)?4:bo(e)?9007199254740991:10:si()}function oo(e,t){if(e===t)return!0;const n=so(e);if(n!==so(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eo(e).isEqual(eo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Qs(e.timestampValue),r=Qs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Xs(e.bytesValue).isEqual(Xs(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ys(e.geoPointValue.latitude)===Ys(t.geoPointValue.latitude)&&Ys(e.geoPointValue.longitude)===Ys(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ys(e.integerValue)===Ys(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ys(e.doubleValue),r=Ys(t.doubleValue);return n===r?is(n)===is(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ti(e.arrayValue.values||[],t.arrayValue.values||[],oo);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ls(n)!==Ls(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!oo(n[i],r[i])))return!1;return!0}(e,t);default:return si()}}function ao(e,t){return void 0!==(e.values||[]).find(e=>oo(e,t))}function co(e,t){if(e===t)return 0;const n=so(e),r=so(t);if(n!==r)return Ii(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ii(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ys(e.integerValue||e.doubleValue),r=Ys(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return uo(e.timestampValue,t.timestampValue);case 4:return uo(eo(e),eo(t));case 5:return Ii(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Xs(e),r=Xs(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ii(n[i],r[i]);if(0!==e)return e}return Ii(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ii(Ys(e.latitude),Ys(t.latitude));return 0!==n?n:Ii(Ys(e.longitude),Ys(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=co(n[i],r[i]);if(e)return e}return Ii(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ro.mapValue&&t===ro.mapValue)return 0;if(e===ro.mapValue)return 1;if(t===ro.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Ii(r[o],s[o]);if(0!==e)return e;const t=co(n[r[o]],i[s[o]]);if(0!==t)return t}return Ii(r.length,s.length)}(e.mapValue,t.mapValue);default:throw si()}}function uo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ii(e,t);const n=Qs(e),r=Qs(t),i=Ii(n.seconds,r.seconds);return 0!==i?i:Ii(n.nanos,r.nanos)}function lo(e){return ho(e)}function ho(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Qs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Xs(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ni.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ho(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ho(e.fields[i])}`;return n+"}"}(e.mapValue):si();var t,n}function fo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function po(e){return!!e&&"integerValue"in e}function mo(e){return!!e&&"arrayValue"in e}function go(e){return!!e&&"nullValue"in e}function vo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function yo(e){return!!e&&"mapValue"in e}function wo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ms(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=wo(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=wo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function bo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function _o(e){return"nullValue"in e?io:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?fo(no.empty(),Ni.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:si()}function Io(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?fo(no.empty(),Ni.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?ro:si()}function To(e,t){const n=co(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Eo(e,t){const n=co(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.value=e}static empty(){return new So({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!yo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(t)}setAll(e){let t=Di.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=wo(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());yo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return oo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];yo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ms(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new So(wo(this.value))}}function Co(e){const t=[];return Ms(e.fields,(e,n)=>{const r=new Di([e]);if(yo(n)){const e=Co(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new zs(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ko{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ko(e,0,Ci.min(),Ci.min(),Ci.min(),So.empty(),0)}static newFoundDocument(e,t,n,r){return new ko(e,1,t,Ci.min(),n,r,0)}static newNoDocument(e,t){return new ko(e,2,t,Ci.min(),Ci.min(),So.empty(),0)}static newUnknownDocument(e,t){return new ko(e,3,t,Ci.min(),Ci.min(),So.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ci.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=So.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=So.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ci.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ko&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ko(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.position=e,this.inclusive=t}}function xo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ni.comparator(Ni.fromName(o.referenceValue),n.key):co(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Do(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!oo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function Oo(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{}class Po extends Ro{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new zo(e,t,n):"array-contains"===t?new Wo(e,n):"in"===t?new Qo(e,n):"not-in"===t?new Yo(e,n):"array-contains-any"===t?new Xo(e,n):new Po(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ko(e,n):new Go(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(co(t,this.value)):null!==t&&so(this.value)===so(t)&&this.matchesComparison(co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return si()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lo extends Ro{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Lo(e,t)}matches(e){return Mo(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(e=>e.isInequality());return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Mo(e){return"and"===e.op}function Fo(e){return"or"===e.op}function Vo(e){return $o(e)&&Mo(e)}function $o(e){for(const t of e.filters)if(t instanceof Lo)return!1;return!0}function Uo(e){if(e instanceof Po)return e.field.canonicalString()+e.op.toString()+lo(e.value);if(Vo(e))return e.filters.map(e=>Uo(e)).join(",");{const t=e.filters.map(e=>Uo(e)).join(",");return`${e.op}(${t})`}}function jo(e,t){return e instanceof Po?function(e,t){return t instanceof Po&&e.op===t.op&&e.field.isEqual(t.field)&&oo(e.value,t.value)}(e,t):e instanceof Lo?function(e,t){return t instanceof Lo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&jo(n,t.filters[r]),!0)}(e,t):void si()}function Bo(e,t){const n=e.filters.concat(t);return Lo.create(n,e.op)}function qo(e){return e instanceof Po?function(e){return`${e.field.canonicalString()} ${e.op} ${lo(e.value)}`}(e):e instanceof Lo?function(e){return e.op.toString()+" {"+e.getFilters().map(qo).join(" ,")+"}"}(e):"Filter"}class zo extends Po{constructor(e,t,n){super(e,t,n),this.key=Ni.fromName(n.referenceValue)}matches(e){const t=Ni.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ko extends Po{constructor(e,t){super(e,"in",t),this.keys=Ho("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Go extends Po{constructor(e,t){super(e,"not-in",t),this.keys=Ho("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ho(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>Ni.fromName(e.referenceValue))}class Wo extends Po{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mo(t)&&ao(t.arrayValue,this.value)}}class Qo extends Po{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ao(this.value.arrayValue,t)}}class Yo extends Po{constructor(e,t){super(e,"not-in",t)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ao(this.value.arrayValue,t)}}class Xo extends Po{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ao(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function Zo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Jo(e,t,n,r,i,s,o)}function ea(e){const t=ci(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Uo(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),rs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>lo(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>lo(e)).join(",")),t.dt=e}return t.dt}function ta(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Oo(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!jo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Do(e.startAt,t.startAt)&&Do(e.endAt,t.endAt)}function na(e){return Ni.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ra(e,t){return e.filters.filter(e=>e instanceof Po&&e.field.isEqual(t))}function ia(e,t,n){let r=io,i=!0;for(const s of ra(e,t)){let e=io,t=!0;switch(s.op){case"<":case"<=":e=_o(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=io}To({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];To({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function sa(e,t,n){let r=ro,i=!0;for(const s of ra(e,t)){let e=ro,t=!0;switch(s.op){case">=":case">":e=Io(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=ro}Eo({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Eo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function aa(e,t,n,r,i,s,o,a){return new oa(e,t,n,r,i,s,o,a)}function ca(e){return new oa(e)}function ua(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function la(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ha(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function da(e){return null!==e.collectionGroup}function fa(e){const t=ci(e);if(null===t.wt){t.wt=[];const e=ha(t),n=la(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new No(e)),t.wt.push(new No(Di.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new No(Di.keyField(),e))}}}return t.wt}function pa(e){const t=ci(e);if(!t._t)if("F"===t.limitType)t._t=Zo(t.path,t.collectionGroup,fa(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of fa(t)){const t="desc"===i.dir?"asc":"desc";e.push(new No(i.field,t))}const n=t.endAt?new Ao(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ao(t.startAt.position,t.startAt.inclusive):null;t._t=Zo(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ma(e,t){t.getFirstInequalityField(),ha(e);const n=e.filters.concat([t]);return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ga(e,t,n){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function va(e,t){return ta(pa(e),pa(t))&&e.limitType===t.limitType}function ya(e){return`${ea(pa(e))}|lt:${e.limitType}`}function wa(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>qo(e)).join(", ")}]`),rs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>lo(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>lo(e)).join(",")),`Target(${t})`}(pa(e))}; limitType=${e.limitType})`}function ba(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ni.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of fa(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,fa(e),t))&&!(e.endAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,fa(e),t))}(e,t)}function _a(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ia(e){return(t,n)=>{let r=!1;for(const i of fa(e)){const e=Ta(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ta(e,t,n){const r=e.field.isKeyField()?Ni.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?co(r,i):si()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return si()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return Fs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Vs(Ni.comparator);function Ca(){return Sa}const ka=new Vs(Ni.comparator);function Aa(...e){let t=ka;for(const n of e)t=t.insert(n.key,n);return t}function xa(e){let t=ka;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Da(){return Oa()}function Na(){return Oa()}function Oa(){return new Ea(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ra=new Vs(Ni.comparator),Pa=new js(Ni.comparator);function La(...e){let t=Pa;for(const n of e)t=t.add(n);return t}const Ma=new js(Ii);function Fa(){return Ma}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(t)?"-0":t}}function $a(e){return{integerValue:""+e}}function Ua(e,t){return ss(t)?$a(t):Va(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this._=void 0}}function Ba(e,t,n){return e instanceof Ka?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Js(t)&&(t=Zs(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ga?Ha(e,t):e instanceof Wa?Qa(e,t):function(e,t){const n=za(e,t),r=Xa(n)+Xa(e.gt);return po(n)&&po(e.gt)?$a(r):Va(e.serializer,r)}(e,t)}function qa(e,t,n){return e instanceof Ga?Ha(e,t):e instanceof Wa?Qa(e,t):n}function za(e,t){return e instanceof Ya?po(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ka extends ja{}class Ga extends ja{constructor(e){super(),this.elements=e}}function Ha(e,t){const n=Ja(t);for(const r of e.elements)n.some(e=>oo(e,r))||n.push(r);return{arrayValue:{values:n}}}class Wa extends ja{constructor(e){super(),this.elements=e}}function Qa(e,t){let n=Ja(t);for(const r of e.elements)n=n.filter(e=>!oo(e,r));return{arrayValue:{values:n}}}class Ya extends ja{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Xa(e){return Ys(e.integerValue||e.doubleValue)}function Ja(e){return mo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.field=e,this.transform=t}}function ec(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ga&&t instanceof Ga||e instanceof Wa&&t instanceof Wa?Ti(e.elements,t.elements,oo):e instanceof Ya&&t instanceof Ya?oo(e.gt,t.gt):e instanceof Ka&&t instanceof Ka}(e.transform,t.transform)}class tc{constructor(e,t){this.version=e,this.transformResults=t}}class nc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nc}static exists(e){return new nc(void 0,e)}static updateTime(e){return new nc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ic{}function sc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new mc(e.key,nc.none()):new lc(e.key,e.data,nc.none());{const n=e.data,r=So.empty();let i=new js(Di.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new hc(e.key,r,new zs(i.toArray()),nc.none())}}function oc(e,t,n){e instanceof lc?function(e,t,n){const r=e.value.clone(),i=fc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof hc?function(e,t,n){if(!rc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=fc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(dc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ac(e,t,n,r){return e instanceof lc?function(e,t,n,r){if(!rc(e.precondition,t))return n;const i=e.value.clone(),s=pc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof hc?function(e,t,n,r){if(!rc(e.precondition,t))return n;const i=pc(e.fieldTransforms,r,t),s=t.data;return s.setAll(dc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return rc(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function cc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=za(r.transform,e||null);null!=i&&(null===n&&(n=So.empty()),n.set(r.field,i))}return n||null}function uc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ti(e,t,(e,t)=>ec(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class lc extends ic{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hc extends ic{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function fc(e,t,n){const r=new Map;oi(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,qa(o,a,n[i]))}return r}function pc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ba(e,s,t))}return r}class mc extends ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gc extends ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&oc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ac(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ac(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Na();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=sc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ci.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),La())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,(e,t)=>uc(e,t))&&Ti(this.baseMutations,e.baseMutations,(e,t)=>uc(e,t))}}class yc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){oi(e.mutations.length===n.length);let r=Ra;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new yc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _c,Ic;function Tc(e){switch(e){default:return si();case ui.CANCELLED:case ui.UNKNOWN:case ui.DEADLINE_EXCEEDED:case ui.RESOURCE_EXHAUSTED:case ui.INTERNAL:case ui.UNAVAILABLE:case ui.UNAUTHENTICATED:return!1;case ui.INVALID_ARGUMENT:case ui.NOT_FOUND:case ui.ALREADY_EXISTS:case ui.PERMISSION_DENIED:case ui.FAILED_PRECONDITION:case ui.ABORTED:case ui.OUT_OF_RANGE:case ui.UNIMPLEMENTED:case ui.DATA_LOSS:return!0}}function Ec(e){if(void 0===e)return ni("GRPC error has no .code"),ui.UNKNOWN;switch(e){case _c.OK:return ui.OK;case _c.CANCELLED:return ui.CANCELLED;case _c.UNKNOWN:return ui.UNKNOWN;case _c.DEADLINE_EXCEEDED:return ui.DEADLINE_EXCEEDED;case _c.RESOURCE_EXHAUSTED:return ui.RESOURCE_EXHAUSTED;case _c.INTERNAL:return ui.INTERNAL;case _c.UNAVAILABLE:return ui.UNAVAILABLE;case _c.UNAUTHENTICATED:return ui.UNAUTHENTICATED;case _c.INVALID_ARGUMENT:return ui.INVALID_ARGUMENT;case _c.NOT_FOUND:return ui.NOT_FOUND;case _c.ALREADY_EXISTS:return ui.ALREADY_EXISTS;case _c.PERMISSION_DENIED:return ui.PERMISSION_DENIED;case _c.FAILED_PRECONDITION:return ui.FAILED_PRECONDITION;case _c.ABORTED:return ui.ABORTED;case _c.OUT_OF_RANGE:return ui.OUT_OF_RANGE;case _c.UNIMPLEMENTED:return ui.UNIMPLEMENTED;case _c.DATA_LOSS:return ui.DATA_LOSS;default:return si()}}(Ic=_c||(_c={}))[Ic.OK=0]="OK",Ic[Ic.CANCELLED=1]="CANCELLED",Ic[Ic.UNKNOWN=2]="UNKNOWN",Ic[Ic.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ic[Ic.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ic[Ic.NOT_FOUND=5]="NOT_FOUND",Ic[Ic.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ic[Ic.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ic[Ic.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ic[Ic.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ic[Ic.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ic[Ic.ABORTED=10]="ABORTED",Ic[Ic.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ic[Ic.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ic[Ic.INTERNAL=13]="INTERNAL",Ic[Ic.UNAVAILABLE=14]="UNAVAILABLE",Ic[Ic.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Cc}static getOrCreateInstance(){return null===Cc&&(Cc=new Sc),Cc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Cc=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Wr([4294967295,4294967295],0);function xc(e){const t=kc().encode(e),n=new Hr;return n.update(t),new Uint8Array(n.digest())}function Dc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class Nc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Oc(`Invalid padding: ${t}`);if(n<0)throw new Oc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Oc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Oc(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Wr.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Wr.fromNumber(n)));return 1===r.compare(Ac)&&(r=new Wr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=xc(e),[n,r]=Dc(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);if(!this.At(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Nc(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.It)return;const t=xc(e),[n,r]=Dc(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Oc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Pc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Rc(Ci.min(),r,new Vs(Ii),Ca(),La())}}class Pc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Pc(n,t,La(),La(),La())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Mc{constructor(e,t){this.targetId=e,this.Vt=t}}class Fc{constructor(e,t,n=Hs.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Vc{constructor(){this.St=0,this.Dt=jc(),this.Ct=Hs.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=La(),t=La(),n=La();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:si()}}),new Pc(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=jc()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class $c{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ca(),this.zt=Uc(),this.Wt=new Vs(Ii)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:si()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((e,n)=>{this.te(n)&&t(n)})}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(na(s))if(0===r){const e=new Ni(s.path);this.Yt(n,e,ko.newNoDocument(e,Ci.min()))}else oi(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Sc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Xs(i).toUint8Array()}catch(e){if(e instanceof Ks)return ri("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Nc(a,s,o)}catch(e){return ri(e instanceof Oc?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)}),r}ce(e){const t=new Map;this.Qt.forEach((n,r)=>{const i=this.se(r);if(i){if(n.current&&na(i.target)){const t=new Ni(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,ko.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}});let n=La();this.zt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.jt.forEach((t,n)=>n.setReadTime(e));const r=new Rc(e,t,this.Wt,this.jt,n);return this.jt=Ca(),this.zt=Uc(),this.Wt=new Vs(Ii),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Vc,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new js(Ii),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||ti("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Vc),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Uc(){return new Vs(Ni.comparator)}function jc(){return new Vs(Ni.comparator)}const Bc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),qc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),zc=(()=>{const e={and:"AND",or:"OR"};return e})();class Kc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gc(e,t){return e.useProto3Json||rs(t)?t:{value:t}}function Hc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Qc(e,t){return Hc(e,t.toTimestamp())}function Yc(e){return oi(!!e),Ci.fromTimestamp(function(e){const t=Qs(e);return new Si(t.seconds,t.nanos)}(e))}function Xc(e,t){return function(e){return new Ai(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Jc(e){const t=Ai.fromString(e);return oi(Eu(t)),t}function Zc(e,t){return Xc(e.databaseId,t.path)}function eu(e,t){const n=Jc(t);if(n.get(1)!==e.databaseId.projectId)throw new li(ui.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new li(ui.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ni(iu(n))}function tu(e,t){return Xc(e.databaseId,t)}function nu(e){const t=Jc(e);return 4===t.length?Ai.emptyPath():iu(t)}function ru(e){return new Ai(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iu(e){return oi(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function su(e,t,n){return{name:Zc(e,t),fields:n.value.mapValue.fields}}function ou(e,t,n){const r=eu(e,t.name),i=Yc(t.updateTime),s=t.createTime?Yc(t.createTime):Ci.min(),o=new So({mapValue:{fields:t.fields}}),a=ko.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function au(e,t){return"found"in t?function(e,t){oi(!!t.found),t.found.name,t.found.updateTime;const n=eu(e,t.found.name),r=Yc(t.found.updateTime),i=t.found.createTime?Yc(t.found.createTime):Ci.min(),s=new So({mapValue:{fields:t.found.fields}});return ko.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){oi(!!t.missing),oi(!!t.readTime);const n=eu(e,t.missing),r=Yc(t.readTime);return ko.newNoDocument(n,r)}(e,t):si()}function cu(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:si()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(oi(void 0===t||"string"==typeof t),Hs.fromBase64String(t||"")):(oi(void 0===t||t instanceof Uint8Array),Hs.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ui.UNKNOWN:Ec(e.code);return new li(t,e.message||"")}(o);n=new Fc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=eu(e,r.document.name),s=Yc(r.document.updateTime),o=r.document.createTime?Yc(r.document.createTime):Ci.min(),a=new So({mapValue:{fields:r.document.fields}}),c=ko.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Lc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=eu(e,r.document),s=r.readTime?Yc(r.readTime):Ci.min(),o=ko.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Lc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=eu(e,r.document),s=r.removedTargetIds||[];n=new Lc([],s,i,null)}else{if(!("filter"in t))return si();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new bc(r,i),o=e.targetId;n=new Mc(o,s)}}return n}function uu(e,t){let n;if(t instanceof lc)n={update:su(e,t.key,t.value)};else if(t instanceof mc)n={delete:Zc(e,t.key)};else if(t instanceof hc)n={update:su(e,t.key,t.data),updateMask:Tu(t.fieldMask)};else{if(!(t instanceof gc))return si();n={verify:Zc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Ka)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ga)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wa)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ya)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw si()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Qc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:si()}(e,t.precondition)),n}function lu(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?nc.updateTime(Yc(e.updateTime)):void 0!==e.exists?nc.exists(e.exists):nc.none()}(t.currentDocument):nc.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)oi("REQUEST_TIME"===t.setToServerValue),n=new Ka;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ga(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Wa(e)}else"increment"in t?n=new Ya(e,t.increment):si();const r=Di.fromServerFormat(t.fieldPath);return new Za(r,n)}(e,t)):[];if(t.update){t.update.name;const i=eu(e,t.update.name),s=new So({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new zs(t.map(e=>Di.fromServerFormat(e)))}(t.updateMask);return new hc(i,s,e,n,r)}return new lc(i,s,n,r)}if(t.delete){const r=eu(e,t.delete);return new mc(r,n)}if(t.verify){const r=eu(e,t.verify);return new gc(r,n)}return si()}function hu(e,t){return e&&e.length>0?(oi(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?Yc(e.updateTime):Yc(t);return n.isEqual(Ci.min())&&(n=Yc(t)),new tc(n,e.transformResults||[])}(e,t))):[]}function du(e,t){return{documents:[tu(e,t.path)]}}function fu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=tu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=tu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Iu(Lo.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:bu(e.field),direction:vu(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Gc(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function pu(e){let t=nu(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oi(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=gu(e);return t instanceof Lo&&Vo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new No(_u(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,rs(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ao(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ao(n,t)}(n.endAt)),aa(t,i,o,s,a,"F",c,u)}function mu(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return si()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function gu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=_u(e.unaryFilter.field);return Po.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=_u(e.unaryFilter.field);return Po.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_u(e.unaryFilter.field);return Po.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_u(e.unaryFilter.field);return Po.create(i,"!=",{nullValue:"NULL_VALUE"});default:return si()}}(e):void 0!==e.fieldFilter?function(e){return Po.create(_u(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return si()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Lo.create(e.compositeFilter.filters.map(e=>gu(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return si()}}(e.compositeFilter.op))}(e):si()}function vu(e){return Bc[e]}function yu(e){return qc[e]}function wu(e){return zc[e]}function bu(e){return{fieldPath:e.canonicalString()}}function _u(e){return Di.fromServerFormat(e.fieldPath)}function Iu(e){return e instanceof Po?function(e){if("=="===e.op){if(vo(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NAN"}};if(go(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(vo(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NOT_NAN"}};if(go(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bu(e.field),op:yu(e.op),value:e.value}}}(e):e instanceof Lo?function(e){const t=e.getFilters().map(e=>Iu(e));return 1===t.length?t[0]:{compositeFilter:{op:wu(e.op),filters:t}}}(e):si()}function Tu(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Eu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,n,r,i=Ci.min(),s=Ci.min(),o=Hs.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Su(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.fe=e}}function ku(e,t){let n;if(t.document)n=ou(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Ni.fromSegments(t.noDocument.path),r=Nu(t.noDocument.readTime);n=ko.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return si();{const e=Ni.fromSegments(t.unknownDocument.path),r=Nu(t.unknownDocument.version);n=ko.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Si(e[0],e[1]);return Ci.fromTimestamp(t)}(t.readTime)),n}function Au(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:xu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Zc(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Hc(e,t.version.toTimestamp()),createTime:Hc(e,t.createTime.toTimestamp())}}(e.fe,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Du(t.version)};else{if(!t.isUnknownDocument())return si();r.unknownDocument={path:n.path.toArray(),version:Du(t.version)}}return r}function xu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Du(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Nu(e){const t=new Si(e.seconds,e.nanoseconds);return Ci.fromTimestamp(t)}function Ou(e,t){const n=(t.baseMutations||[]).map(t=>lu(e.fe,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>lu(e.fe,t)),i=Si.fromMillis(t.localWriteTimeMs);return new vc(t.batchId,i,n,r)}function Ru(e){const t=Nu(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Nu(e.lastLimboFreeSnapshotVersion):Ci.min();let r;var i;return void 0!==e.query.documents?(oi(1===(i=e.query).documents.length),r=pa(ca(nu(i.documents[0])))):r=function(e){return pa(pu(e))}(e.query),new Su(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Hs.fromBase64String(e.resumeToken))}function Pu(e,t){const n=Du(t.snapshotVersion),r=Du(t.lastLimboFreeSnapshotVersion);let i;i=na(t.target)?du(e.fe,t.target):fu(e.fe,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ea(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Lu(e){const t=pu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ga(t,t.limit,"L"):t}function Mu(e,t){return new wc(t.largestBatchId,lu(e.fe,t.overlayMutation))}function Fu(e,t){const n=t.path.lastSegment();return[e,os(t.path.popLast()),n]}function Vu(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Du(r.readTime),documentKey:os(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{getBundleMetadata(e,t){return Uu(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Nu(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Uu(e).put({bundleId:(n=t).id,createTime:Du(Yc(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return ju(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Lu(t.bundledQuery),readTime:Nu(t.readTime)};var t})}saveNamedQuery(e,t){return ju(e).put(function(e){return{name:e.name,readTime:Du(Yc(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Uu(e){return Ps(e,"bundles")}function ju(e){return Ps(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const n=t.uid||"";return new Bu(e,n)}getOverlay(e,t){return qu(e).get(Fu(this.userId,t)).next(e=>e?Mu(this.serializer,e):null)}getOverlays(e,t){const n=Da();return zi.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new wc(t,i);r.push(this.we(e,s))}),zi.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(os(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(qu(e).J("collectionPathOverlayIndex",r))}),zi.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Da(),i=os(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return qu(e).j("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=Mu(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=Da();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return qu(e).X({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=Mu(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}we(e,t){return qu(e).put(function(e,t,n){const[r,i,s]=Fu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:uu(e.fe,n.mutation)}}(this.serializer,this.userId,t))}}function qu(e){return Ps(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Ys(e.integerValue));else if("doubleValue"in e){const n=Ys(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),is(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Xs(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?bo(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):si()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),Ni.fromName(e).path.forEach(e=>{this.ye(t,60),this.be(e,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}function Ku(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Gu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Ku(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}zu.Ve=new zu;class Hu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.De(n.value),n=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ne(n.value),n=t.next();this.ke()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{const e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{const e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){const t=this.Fe(e),n=Gu(t);this.Be(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Le(e){const t=this.Fe(e),n=Gu(t);this.Be(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}De(e){const t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Wu{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class Qu{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Yu{constructor(){this.je=new Hu,this.ze=new Wu(this.je),this.We=new Qu(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Je(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Xu(this.indexId,this.documentKey,this.arrayValue,n)}}function Ju(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Zu(e.arrayValue,t.arrayValue),0!==n?n:(n=Zu(e.directionalValue,t.directionalValue),0!==n?n:Ni.comparator(e.documentKey,t.documentKey)))}function Zu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ze=e:this.Xe.push(e)}}tn(e){oi(e.collectionGroup===this.collectionId);const t=Ri(e);if(void 0!==t&&!this.en(t))return!1;const n=Pi(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.en(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.Ze){if(!r.has(this.Ze.field.canonicalString())){const e=n[i];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[s++],e))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],e))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(e){var t,n;if(oi(e instanceof Po||e instanceof Lo),e instanceof Po){if(e instanceof Qo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map(t=>Po.create(e.field,"==",t)))||[];return Lo.create(r,"or")}return e}const r=e.filters.map(e=>tl(e));return Lo.create(r,e.op)}function nl(e){if(0===e.getFilters().length)return[];const t=ol(tl(e));return oi(sl(t)),rl(t)||il(t)?[t]:t.getFilters()}function rl(e){return e instanceof Po}function il(e){return e instanceof Lo&&Vo(e)}function sl(e){return rl(e)||il(e)||function(e){if(e instanceof Lo&&Fo(e)){for(const t of e.getFilters())if(!rl(t)&&!il(t))return!1;return!0}return!1}(e)}function ol(e){if(oi(e instanceof Po||e instanceof Lo),e instanceof Po)return e;if(1===e.filters.length)return ol(e.filters[0]);const t=e.filters.map(e=>ol(e));let n=Lo.create(t,e.op);return n=ul(n),sl(n)?n:(oi(n instanceof Lo),oi(Mo(n)),oi(n.filters.length>1),n.filters.reduce((e,t)=>al(e,t)))}function al(e,t){let n;return oi(e instanceof Po||e instanceof Lo),oi(t instanceof Po||t instanceof Lo),n=e instanceof Po?t instanceof Po?function(e,t){return Lo.create([e,t],"and")}(e,t):cl(e,t):t instanceof Po?cl(t,e):function(e,t){if(oi(e.filters.length>0&&t.filters.length>0),Mo(e)&&Mo(t))return Bo(e,t.getFilters());const n=Fo(e)?e:t,r=Fo(e)?t:e,i=n.filters.map(e=>al(e,r));return Lo.create(i,"or")}(e,t),ul(n)}function cl(e,t){if(Mo(t))return Bo(t,e.getFilters());{const n=t.filters.map(t=>al(e,t));return Lo.create(n,"or")}}function ul(e){if(oi(e instanceof Po||e instanceof Lo),e instanceof Po)return e;const t=e.getFilters();if(1===t.length)return ul(t[0]);if($o(e))return e;const n=t.map(e=>ul(e)),r=[];return n.forEach(t=>{t instanceof Po?r.push(t):t instanceof Lo&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Lo.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ll{constructor(){this.rn=new hl}addToCollectionParentIndex(e,t){return this.rn.add(t),zi.resolve()}getCollectionParents(e,t){return zi.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return zi.resolve()}deleteFieldIndex(e,t){return zi.resolve()}getDocumentsMatchingTarget(e,t){return zi.resolve(null)}getIndexType(e,t){return zi.resolve(0)}getFieldIndexes(e,t){return zi.resolve([])}getNextCollectionGroupToUpdate(e){return zi.resolve(null)}getMinOffset(e,t){return zi.resolve($i.min())}getMinOffsetFromCollectionGroup(e,t){return zi.resolve($i.min())}updateCollectionGroup(e,t,n){return zi.resolve()}updateIndexEntries(e,t){return zi.resolve()}}class hl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new js(Ai.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new js(Ai.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Uint8Array(0);class fl{constructor(e,t){this.user=e,this.databaseId=t,this.on=new hl,this.un=new Ea(e=>ea(e),(e,t)=>ta(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const i={collectionId:n,parent:os(r)};return pl(e).put(i)}return zi.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Ei(t),""],!1,!0);return pl(e).j(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(us(r.parent))}return n})}addFieldIndex(e,t){const n=gl(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=vl(e);return i.next(e=>{n.put(Vu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=gl(e),r=vl(e),i=ml(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=ml(e);let r=!0;const i=new Map;return zi.forEach(this.cn(t),t=>this.an(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=La();const r=[];return zi.forEach(i,(i,s)=>{var o;ti("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${ea(t)}`);const a=function(e,t){const n=Ri(t);if(void 0===n)return null;for(const r of ra(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Pi(t))for(const t of ra(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?ia(e,i.fieldPath,e.startAt):sa(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Ao(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?sa(e,i.fieldPath,e.endAt):ia(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Ao(n,r)}(s,i),h=this.hn(i,s,u),d=this.hn(i,s,l),f=this.ln(i,s,c),p=this.fn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return zi.forEach(p,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{const n=Ni.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return zi.resolve(null)})}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:nl(Lo.create(e.filters,"and")).map(t=>Zo(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):dl,h=this.wn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],s),f=o.map(t=>this.wn(e,a,t,!0));u.push(...this.createRange(h,d,f))}return u}wn(e,t,n,r){const i=new Xu(e,Ni.empty(),t,n);return r?i:i.Je()}_n(e,t,n,r){const i=new Xu(e,Ni.empty(),t,n);return r?i.Je():i}an(e,t){const n=new el(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.cn(t);return zi.forEach(r,t=>this.an(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new js(Di.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n)}mn(e,t){const n=new Yu;for(const r of Pi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.He(r.kind);zu.Ve._e(e,i)}return n.Qe()}dn(e){const t=new Yu;return zu.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const n=new Yu;return zu.Ve._e(fo(this.databaseId,t),n.He(function(e){const t=Pi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Qe()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new Yu);let i=0;for(const s of Pi(e)){const e=n[i++];for(const n of r)if(this.yn(t,s.fieldPath)&&mo(e))r=this.pn(r,s,e);else{const t=n.He(s.kind);zu.Ve._e(e,t)}}return this.In(r)}hn(e,t,n){return this.ln(e,t,n.position)}In(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Qe();return t}pn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Yu;n.seed(e.Qe()),zu.Ve._e(s,n.He(t.kind)),i.push(n)}return i}yn(e,t){return!!e.filters.find(e=>e instanceof Po&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=gl(e),r=vl(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next(e=>{const t=[];return zi.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Mi(t.sequenceNumber,new $i(Nu(t.readTime),new Ni(us(t.documentKey)),t.largestBatchId)):Mi.empty(),r=e.fields.map(([e,t])=>new Li(Di.fromServerFormat(e),t));return new Oi(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Ii(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=gl(e),i=vl(e);return this.Tn(e).next(e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>zi.forEach(t,t=>i.put(Vu(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return zi.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?zi.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),zi.forEach(i,n=>this.En(e,t,n).next(t=>{const i=this.An(r,n);return t.isEqual(i)?zi.resolve():this.vn(e,r,n,t,i)}))))})}Rn(e,t,n,r){return ml(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,n,r){return ml(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}En(e,t,n){const r=ml(e);let i=new js(Ju);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},(e,r)=>{i=i.add(new Xu(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}An(e,t){let n=new js(Ju);const r=this.mn(t,e);if(null==r)return n;const i=Ri(t);if(null!=i){const s=e.data.field(i.fieldPath);if(mo(s))for(const i of s.arrayValue.values||[])n=n.add(new Xu(t.indexId,e.key,this.dn(i),r))}else n=n.add(new Xu(t.indexId,e.key,dl,r));return n}vn(e,t,n,r,i){ti("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=qs(s),c=qs(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=qs(o)):t?(i(a),a=qs(s)):(a=qs(s),c=qs(o))}}(r,i,Ju,r=>{s.push(this.Rn(e,t,n,r))},r=>{s.push(this.Pn(e,t,n,r))}),zi.waitFor(s)}Tn(e){let t=1;return vl(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Ju(e,t)).filter((e,t,n)=>!t||0!==Ju(e,n[t-1]));const r=[];r.push(e);for(const s of n){const n=Ju(s,e),i=Ju(s,t);if(0===n)r[0]=e.Je();else if(n>0&&i<0)r.push(s),r.push(s.Je());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.bn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,dl,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,dl,[]];i.push(IDBKeyRange.bound(e,t))}return i}bn(e,t){return Ju(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(yl)}getMinOffset(e,t){return zi.mapArray(this.cn(t),t=>this.an(e,t).next(e=>e||si())).next(yl)}}function pl(e){return Ps(e,"collectionParents")}function ml(e){return Ps(e,"indexEntries")}function gl(e){return Ps(e,"indexConfiguration")}function vl(e){return Ps(e,"indexState")}function yl(e){oi(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Ui(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new $i(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bl{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new bl(e,bl.DEFAULT_COLLECTION_PERCENTILE,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{oi(1===a)}));const u=[];for(const l of n.mutations){const e=ds(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return zi.waitFor(s).next(()=>u)}function Il(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw si();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bl.DEFAULT_COLLECTION_PERCENTILE=10,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bl.DEFAULT=new bl(41943040,bl.DEFAULT_COLLECTION_PERCENTILE,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bl.DISABLED=new bl(-1,0,0);class Tl{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Vn={}}static de(e,t,n,r){oi(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Tl(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Sl(e).X({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=Cl(e),s=Sl(e);return s.add({}).next(o=>{oi("number"==typeof o);const a=new vc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>uu(e.fe,t)),i=n.mutations.map(t=>uu(e.fe,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new js((e,t)=>Ii(e.canonicalString(),t.canonicalString()));for(const e of r){const t=ds(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,fs))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Vn[o]=a.keys()}),zi.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return Sl(e).get(t).next(e=>e?(oi(e.userId===this.userId),Ou(this.serializer,e)):null)}Sn(e,t){return this.Vn[t]?zi.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Vn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Sl(e).X({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(oi(t.batchId>=n),i=Ou(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Sl(e).X({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Sl(e).j("userMutationsIndex",t).next(e=>e.map(e=>Ou(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=hs(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Cl(e).X({range:r},(n,r,s)=>{const[o,a,c]=n,u=us(a);if(o===this.userId&&t.path.isEqual(u))return Sl(e).get(c).next(e=>{if(!e)throw si();oi(e.userId===this.userId),i.push(Ou(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new js(Ii);const r=[];return t.forEach(t=>{const i=hs(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Cl(e).X({range:s},(e,r,i)=>{const[s,o,a]=e,c=us(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),zi.waitFor(r).next(()=>this.Dn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=hs(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new js(Ii);return Cl(e).X({range:s},(e,t,i)=>{const[s,a,c]=e,u=us(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.Dn(e,o))}Dn(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Sl(e).get(t).next(e=>{if(null===e)throw si();oi(e.userId===this.userId),n.push(Ou(this.serializer,e))}))}),zi.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return _l(e.ht,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),zi.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return zi.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Cl(e).X({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=us(e[1]);r.push(t)}else n.done()}).next(()=>{oi(0===r.length)})})}containsKey(e,t){return El(e,this.userId,t)}xn(e){return kl(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function El(e,t,n){const r=hs(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Cl(e).X({range:s,Y:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function Sl(e){return Ps(e,"mutations")}function Cl(e){return Ps(e,"documentMutations")}function kl(e){return Ps(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Al(0)}static Mn(){return new Al(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const n=new Al(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(e=>Ci.fromTimestamp(new Si(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.$n(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(n=>(n.targetCount+=1,this.Bn(t,n),this.On(e,n))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Dl(e).delete(t.targetId)).next(()=>this.$n(e)).next(t=>(oi(t.targetCount>0),t.targetCount-=1,this.On(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return Dl(e).X((s,o)=>{const a=Ru(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>zi.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Dl(e).X((e,n)=>{const r=Ru(n);t(r)})}$n(e){return Nl(e).get("targetGlobalKey").next(e=>(oi(null!==e),e))}On(e,t){return Nl(e).put("targetGlobalKey",t)}Fn(e,t){return Dl(e).put(Pu(this.serializer,t))}Bn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.$n(e).next(e=>e.targetCount)}getTargetData(e,t){const n=ea(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Dl(e).X({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const s=Ru(n);ta(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=Ol(e);return t.forEach(t=>{const s=os(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),zi.waitFor(r)}removeMatchingKeys(e,t,n){const r=Ol(e);return zi.forEach(t,t=>{const i=os(t.path);return zi.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=Ol(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ol(e);let i=La();return r.X({range:n,Y:!0},(e,t,n)=>{const r=us(e[1]),s=new Ni(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=os(t.path),r=IDBKeyRange.bound([n],[Ei(n)],!1,!0);let i=0;return Ol(e).X({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}le(e,t){return Dl(e).get(t).next(e=>e?Ru(e):null)}}function Dl(e){return Ps(e,"targets")}function Nl(e){return Ps(e,"targetGlobal")}function Ol(e){return Ps(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl([e,t],[n,r]){const i=Ii(e,n);return 0===i?Ii(t,r):i}class Pl{constructor(e){this.Ln=e,this.buffer=new js(Rl),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Rl(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ll{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){ti("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Qi(e)?ti("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await qi(e)}await this.Qn(3e5)})}}class Ml{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return zi.resolve(ns.ct);const n=new Pl(t);return this.jn.forEachTarget(e,e=>n.Kn(e.sequenceNumber)).next(()=>this.jn.Wn(e,e=>n.Kn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector","Garbage collection skipped; disabled"),zi.resolve(wl)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wl):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(ti("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),Zr()<=a.$b.DEBUG&&ti("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),zi.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function Fl(e,t){return new Ml(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.db=e,this.garbageCollector=Fl(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Jn(e){let t=0;return this.Wn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(e,n)=>t(n))}addReference(e,t,n){return $l(e,n)}removeReference(e,t,n){return $l(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return $l(e,t)}Xn(e,t){return function(e,t){let n=!1;return kl(e).Z(r=>El(e,r,t).next(e=>(e&&(n=!0),zi.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,(s,o)=>{if(o<=t){const t=this.Xn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,Ci.min()),Ol(e).delete([0,os(s.path)])))});r.push(t)}}).next(()=>zi.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return $l(e,t)}Yn(e,t){const n=Ol(e);let r,i=ns.ct;return n.X({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ns.ct&&t(new Ni(us(r)),i),i=o,r=s):i=ns.ct}).next(()=>{i!==ns.ct&&t(new Ni(us(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function $l(e,t){return Ol(e).put(function(e,t){return{targetId:0,path:os(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.changes=new Ea(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ko.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?zi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Kl(e).put(n)}removeEntry(e,t,n){return Kl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],xu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Zn(e,n)))}getEntry(e,t){let n=ko.newInvalidDocument(t);return Kl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Gl(t))},(e,r)=>{n=this.ts(t,r)}).next(()=>n)}es(e,t){let n={size:0,document:ko.newInvalidDocument(t)};return Kl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Gl(t))},(e,r)=>{n={document:this.ts(t,r),size:Il(r)}}).next(()=>n)}getEntries(e,t){let n=Ca();return this.ns(e,t,(e,t)=>{const r=this.ts(e,t);n=n.insert(e,r)}).next(()=>n)}ss(e,t){let n=Ca(),r=new Vs(Ni.comparator);return this.ns(e,t,(e,t)=>{const i=this.ts(e,t);n=n.insert(e,i),r=r.insert(e,Il(t))}).next(()=>({documents:n,rs:r}))}ns(e,t,n){if(t.isEmpty())return zi.resolve();let r=new js(Wl);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(Gl(r.first()),Gl(r.last())),s=r.getIterator();let o=s.getNext();return Kl(e).X({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=Ni.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Wl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(Gl(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),xu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Kl(e).j(IDBKeyRange.bound(s,o,!0)).next(e=>{let n=Ca();for(const i of e){const e=this.ts(Ni.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(ba(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=Ca();const s=Hl(t,n),o=Hl(t,$i.max());return Kl(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.ts(Ni.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new ql(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return zl(e).get("remoteDocumentGlobalKey").next(e=>(oi(!!e),e))}Zn(e,t){return zl(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const e=ku(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ci.min()))return e}return ko.newInvalidDocument(e)}}function Bl(e){return new jl(e)}class ql extends Ul{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Ea(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new js((e,t)=>Ii(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.us.get(i);if(t.push(this.os.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Au(this.os.serializer,s);r=r.add(i.path.popLast());const c=Il(a);n+=c-o.size,t.push(this.os.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Au(this.os.serializer,s.convertToNoDocument(Ci.min()));t.push(this.os.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.os.updateMetadata(e,n)),zi.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:e,rs:t})=>(t.forEach((t,n)=>{this.us.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function zl(e){return Ps(e,"remoteDocumentGlobal")}function Kl(e){return Ps(e,"remoteDocumentsV14")}function Gl(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Hl(e,t){const n=t.documentKey.path.toArray();return[e,xu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Wl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Ii(n[s],r[s]),i)return i;return i=Ii(n.length,r.length),i||(i=Ii(n[n.length-2],r[r.length-2]),i||Ii(n[n.length-1],r[r.length-1])
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Ql{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&ac(n.mutation,e,zs.empty(),Si.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,La()).next(()=>t))}getLocalViewOfDocuments(e,t,n=La()){const r=Da();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Aa();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Da();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,La()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Ca();const s=Oa(),o=Oa();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof hc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ac(o.mutation,t,o.mutation.getFieldMask(),Si.now())):s.set(t.key,zs.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new Ql(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=Oa();let r=new Vs((e,t)=>e-t),i=La();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||zs.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||La()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Na();c.forEach(e=>{if(!i.has(e)){const r=sc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return zi.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ni.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):da(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):zi.resolve(Da());let o=-1,a=i;return s.next(t=>zi.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?zi.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,La())).next(e=>({batchId:o,changes:xa(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ni(t)).next(e=>{let t=Aa();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Aa();return this.indexManager.getCollectionParents(e,r).next(s=>zi.forEach(s,s=>{const o=function(e,t){return new oa(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ko.newInvalidDocument(r)))});let n=Aa();return e.forEach((e,i)=>{const s=r.get(e);void 0!==s&&ac(s.mutation,i,zs.empty(),Si.now()),ba(t,i)&&(n=n.insert(e,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return zi.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Yc(n.createTime)}),zi.resolve()}getNamedQuery(e,t){return zi.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:Lu(e.bundledQuery),readTime:Yc(e.readTime)}}(t)),zi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.overlays=new Vs(Ni.comparator),this.ls=new Map}getOverlay(e,t){return zi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Da();return zi.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.we(e,t,r)}),zi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ls.delete(n)),zi.resolve()}getOverlaysForCollection(e,t,n){const r=Da(),i=t.length+1,s=new Ni(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return zi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Vs((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Da(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Da(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=r)break;return zi.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new wc(t,n));let i=this.ls.get(t);void 0===i&&(i=La(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.fs=new js(eh.ds),this.ws=new js(eh._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new eh(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ys(new eh(e,t))}ps(e,t){e.forEach(e=>this.removeReference(e,t))}Is(e){const t=new Ni(new Ai([])),n=new eh(t,e),r=new eh(t,e+1),i=[];return this.ws.forEachInRange([n,r],e=>{this.ys(e),i.push(e.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Ni(new Ai([])),n=new eh(t,e),r=new eh(t,e+1);let i=La();return this.ws.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new eh(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class eh{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Ni.comparator(e.key,t.key)||Ii(e.As,t.As)}static _s(e,t){return Ii(e.As,t.As)||Ni.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new js(eh.ds)}checkEmpty(e){return zi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new vc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new eh(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return zi.resolve(s)}lookupMutationBatch(e,t){return zi.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return zi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return zi.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return zi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new eh(t,0),r=new eh(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],e=>{const t=this.Ps(e.As);i.push(t)}),zi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new js(Ii);return t.forEach(e=>{const t=new eh(e,0),r=new eh(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],e=>{n=n.add(e.As)})}),zi.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ni.isDocumentKey(i)||(i=i.child(""));const s=new eh(new Ni(i),0);let o=new js(Ii);return this.Rs.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)},s),zi.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach(e=>{const n=this.Ps(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){oi(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return zi.forEach(t.mutations,r=>{const i=new eh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=n})}Cn(e){}containsKey(e,t){const n=new eh(t,0),r=this.Rs.firstAfterOrEqual(n);return zi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,zi.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.Ds=e,this.docs=new Vs(Ni.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return zi.resolve(n?n.document.mutableCopy():ko.newInvalidDocument(t))}getEntries(e,t){let n=Ca();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ko.newInvalidDocument(e))}),zi.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ca();const s=t.path,o=new Ni(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ui(Vi(o),n)<=0||(r.has(o.key)||ba(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return zi.resolve(i)}getAllFromCollectionGroup(e,t,n,r){si()}Cs(e,t){return zi.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rh(this)}getSize(e){return zi.resolve(this.size)}}class rh extends Ul{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)}),zi.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.persistence=e,this.xs=new Ea(e=>ea(e),ta),this.lastRemoteSnapshotVersion=Ci.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Zl,this.targetCount=0,this.Ms=Al.kn()}forEachTarget(e,t){return this.xs.forEach((e,n)=>t(n)),zi.resolve()}getLastRemoteSnapshotVersion(e){return zi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return zi.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),zi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),zi.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Al(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,zi.resolve()}updateTargetData(e,t){return this.Fn(t),zi.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,zi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),zi.waitFor(i).next(()=>r)}getTargetCount(e){return zi.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return zi.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),zi.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),zi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),zi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return zi.resolve(n)}containsKey(e,t){return zi.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.$s={},this.overlays={},this.Os=new ns(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new ih(this),this.indexManager=new ll,this.remoteDocumentCache=function(e){return new nh(e)}(e=>this.referenceDelegate.Ls(e)),this.serializer=new Cu(t),this.qs=new Xl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new th(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){ti("MemoryPersistence","Starting transaction:",e);const r=new oh(this.Os.next());return this.referenceDelegate.Us(),n(r).next(e=>this.referenceDelegate.Ks(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gs(e,t){return zi.or(Object.values(this.$s).map(n=>()=>n.containsKey(e,t)))}}class oh extends Bi{constructor(e){super(),this.currentSequenceNumber=e}}class ah{constructor(e){this.persistence=e,this.Qs=new Zl,this.js=null}static zs(e){return new ah(e)}get Ws(){if(this.js)return this.js;throw si()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),zi.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),zi.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),zi.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(e=>this.Ws.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ws.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return zi.forEach(this.Ws,n=>{const r=Ni.fromPath(n);return this.Hs(e,r).next(e=>{e||t.removeEntry(r,Ci.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return zi.or([()=>zi.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.serializer=e}O(e,t,n,r){const i=new Ki("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0}),e.createObjectStore("documentMutations")}(e),uh(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=zi.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),uh(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ci.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").j().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return zi.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Ys(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),n<7&&r>=7&&(s=s.next(()=>this.Zs(i))),n<8&&r>=8&&(s=s.next(()=>this.ti(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.ei(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Ss});t.createIndex("collectionPathOverlayIndex",Cs,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ks,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ps});t.createIndex("documentKeyIndex",ms),t.createIndex("collectionGroupIndex",gs)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.si(e,i))),n<15&&r>=15&&(s=s.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:_s}).createIndex("sequenceNumberIndex",Is,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Ts}).createIndex("documentKeyIndex",Es,{unique:!1})}(e))),s}Xs(e){let t=0;return e.store("remoteDocuments").X((e,n)=>{t+=Il(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Ys(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next(t=>zi.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next(n=>zi.forEach(n,n=>{oi(n.userId===t.userId);const r=Ou(this.serializer,n);return _l(e,t.userId,r).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.X((n,i)=>{const s=new Ai(n),o=function(e){return[0,os(e)]}(s);r.push(t.get(o).next(n=>n?zi.resolve():(n=>t.put({targetId:0,path:os(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>zi.waitFor(r))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:bs});const n=t.store("collectionParents"),r=new hl,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:os(r)})}};return t.store("remoteDocuments").X({Y:!0},(e,t)=>{const n=new Ai(e);return i(n.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([e,t,n],r)=>{const s=us(t);return i(s.popLast())}))}ei(e){const t=e.store("targets");return t.X((e,n)=>{const r=Ru(n),i=Pu(this.serializer,r);return t.put(i)})}ni(e,t){const n=t.store("remoteDocuments"),r=[];return n.X((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new Ni(Ai.fromString(o.document.name).popFirst(5)):o.noDocument?Ni.fromSegments(o.noDocument.path):o.unknownDocument?Ni.fromSegments(o.unknownDocument.path):si()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>zi.waitFor(r))}si(e,t){const n=t.store("mutations"),r=Bl(this.serializer),i=new sh(ah.zs,this.serializer.fe);return n.j().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:La();Ou(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),zi.forEach(n,(e,n)=>{const s=new Yr(n),o=Bu.de(this.serializer,s),a=i.getIndexManager(s),c=Tl.de(s,this.serializer,a,i.referenceDelegate);return new Yl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Rs(t,ns.ct),e).next()})})}}function uh(e){e.createObjectStore("targetDocuments",{keyPath:ys}).createIndex("documentTargetsIndex",ws,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",vs,{unique:!0}),e.createObjectStore("targetGlobal")}const lh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class hh{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=o,this.ri=c,this.oi=u,this.ui=l,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!hh.D())throw new li(ui.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vl(this,r),this.di=t+"main",this.serializer=new Cu(a),this.wi=new Gi(this.di,this.ui,new ch(this.serializer)),this.Bs=new xl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Bl(this.serializer),this.qs=new $u,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&ni("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new li(ui.FAILED_PRECONDITION,lh);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new ns(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>fh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(Qi(e))return ti("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ti("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return dh(e).get("owner").next(e=>zi.resolve(this.Ri(e)))}Pi(e){return fh(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Ps(e,"clientMetadata");return t.j().next(e=>{const n=this.Si(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return zi.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?zi.resolve(!0):dh(e).get("owner").next(t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new li(ui.FAILED_PRECONDITION,lh);return!1}}return!(!this.networkEnabled||!this.inForeground)||fh(e).j().next(e=>void 0===this.Si(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&ti("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Rs(e,ns.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>fh(e).j().next(e=>this.Si(e,18e5).map(e=>e.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return Tl.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fl(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Bu.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,n){ti("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.ui)?Os:14===s?Ns:13===s?Ds:12===s?xs:11===s?As:void si();var s;let o;return this.wi.runTransaction(e,r,i,r=>(o=new Rs(r,this.Os?this.Os.next():ns.ct),"readwrite-primary"===t?this.Ti(o).next(e=>!!e||this.Ei(o)).next(t=>{if(!t)throw ni(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new li(ui.FAILED_PRECONDITION,ji);return n(o)}).next(e=>this.vi(o).next(()=>e)):this.Oi(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Oi(e){return dh(e).get("owner").next(e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new li(ui.FAILED_PRECONDITION,lh)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return dh(e).put("owner",t)}static D(){return Gi.D()}Ai(e){const t=dh(e);return t.get("owner").next(e=>this.Ri(e)?(ti("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):zi.resolve())}Vi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ni(`Detected an update time that is in the future: ${e} > ${n}`),!1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;(0,c.nr)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return ti("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ni("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){ni("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function dh(e){return Ps(e,"owner")}function fh(e){return Ps(e,"clientMetadata")}function ph(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=La(),r=La();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new mh(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next(i=>i||this.Gi(e,t,r,n)).next(n=>n||this.Qi(e,t))}Ki(e,t){if(ua(t))return zi.resolve(null);let n=pa(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=ga(t,null,"F"),n=pa(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=La(...r);return this.Ui.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,ga(t,null,"F")):this.Wi(e,s,t,n)}))})))}Gi(e,t,n,r){return ua(t)||r.isEqual(Ci.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next(i=>{const s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(Zr()<=a.$b.DEBUG&&ti("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),wa(t)),this.Wi(e,s,t,Fi(r,-1)))})}ji(e,t){let n=new js(Ia(e));return t.forEach((t,r)=>{ba(e,r)&&(n=n.add(r))}),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return Zr()<=a.$b.DEBUG&&ti("QueryEngine","Using full collection scan to execute query:",wa(t)),this.Ui.getDocumentsMatchingQuery(e,t,$i.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Vs(Ii),this.Yi=new Ea(e=>ea(e),ta),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yl(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function yh(e,t,n,r){return new vh(e,t,n,r)}async function wh(e,t){const n=ci(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=La();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({er:e,removedBatchIds:i,addedBatchIds:s}))})})}function bh(e,t){const n=ci(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=zi.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);oi(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=La();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}function _h(e){const t=ci(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Bs.getLastRemoteSnapshotVersion(e))}function Ih(e,t){const n=ci(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Hs.EMPTY_BYTE_STRING,Ci.min()).withLastLimboFreeSnapshotVersion(Ci.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(e,u))});let a=Ca(),c=La();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Th(e,s,t.documentUpdates).next(e=>{a=e.nr,c=e.sr})),!r.isEqual(Ci.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next(t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return zi.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.Ji=i,e))}function Th(e,t,n){let r=La(),i=La();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Ca();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ci.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ti("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{nr:r,sr:i}})}function Eh(e,t){const n=ci(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Sh(e,t){const n=ci(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Bs.getTargetData(e,t).next(i=>i?(r=i,zi.resolve(r)):n.Bs.allocateTargetId(e).next(i=>(r=new Su(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e})}async function Ch(e,t,n){const r=ci(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Qi(e))throw e;ti("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function kh(e,t,n){const r=ci(e);let i=Ci.min(),s=La();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=ci(e),i=r.Yi.get(n);return void 0!==i?zi.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,pa(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:Ci.min(),n?s:La())).next(e=>(Dh(r,_a(t),e),{documents:e,ir:s})))}function Ah(e,t){const n=ci(e),r=ci(n.Bs),i=n.Ji.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.le(e,t).next(e=>e?e.target:null))}function xh(e,t){const n=ci(e),r=n.Xi.get(t)||Ci.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Zi.getAllFromCollectionGroup(e,t,Fi(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(Dh(n,t,e),e))}function Dh(e,t,n){let r=e.Xi.get(t)||Ci.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Xi.set(t,r)}async function Nh(e,t,n,r){const i=ci(e);let s=La(),o=Ca();for(const u of n){const e=t.rr(u.metadata.name);u.document&&(s=s.add(e));const n=t.ur(u);n.setReadTime(t.cr(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Sh(i,function(e){return pa(ca(Ai.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Th(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.Bs.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.Bs.addMatchingKeys(e,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(e,t.nr,t.sr)).next(()=>t.nr)))}async function Oh(e,t,n=La()){const r=await Sh(e,pa(Lu(t.bundledQuery))),i=ci(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=Yc(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.qs.saveNamedQuery(e,t);const o=r.withResumeToken(Hs.EMPTY_BYTE_STRING,s);return i.Ji=i.Ji.insert(o.targetId,o),i.Bs.updateTargetData(e,o).next(()=>i.Bs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Bs.addMatchingKeys(e,n,r.targetId)).next(()=>i.qs.saveNamedQuery(e,t))})}function Rh(e,t){return`firestore_clients_${e}_${t}`}function Ph(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Lh(e,t){return`firestore_targets_${e}_${t}`}class Mh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static ar(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new li(r.error.code,r.error.message))),s?new Mh(e,t,r.state,i):(ni("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ar(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new li(n.error.code,n.error.message))),i?new Fh(e,n.state,r):(ni("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Fa();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ss(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Vh(e,i):(ni("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class $h{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new $h(t.clientId,t.onlineState):(ni("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Uh{constructor(){this.activeTargetIds=Fa()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jh{constructor(e,t,n,r,i){this.window=e,this.ii=t,this.persistenceKey=n,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Vs(Ii),this.started=!1,this.yr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=Rh(this.persistenceKey,this.wr),this.Ir=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Uh),this.Tr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.vr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Rr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const n of e){if(n===this.wr)continue;const e=this.getItem(Rh(this.persistenceKey,n));if(e){const t=Vh.ar(n,e);t&&(this.gr=this.gr.insert(t.clientId,t))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const e=this.br(t);e&&this.Vr(e)}for(const n of this.yr)this.mr(n);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,n){this.Dr(e,t,n),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Lh(this.persistenceKey,e));if(n){const r=Fh.ar(e,n);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lh(this.persistenceKey,e))}updateQueryState(e,t,n){this.kr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Cr(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ti("SharedClientState","READ",e,t),t}setItem(e,t){ti("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ti("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(ti("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void ni("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Tr.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.Fr(e,null)}{const e=this.Br(t.key,t.newValue);if(e)return this.Fr(e.clientId,e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.Lr(t.key,t.newValue);if(e)return this.qr(e)}}else if(this.Ar.test(t.key)){if(null!==t.newValue){const e=this.Ur(t.key,t.newValue);if(e)return this.Kr(e)}}else if(t.key===this.vr){if(null!==t.newValue){const e=this.br(t.newValue);if(e)return this.Vr(e)}}else if(t.key===this.Ir){const e=function(e){let t=ns.ct;if(null!=e)try{const n=JSON.parse(e);oi("number"==typeof n),t=n}catch(e){ni("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ns.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Gr(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Qr(e)))}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,n){const r=new Mh(this.currentUser,e,t,n),i=Ph(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const t=Ph(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,n){const r=Lh(this.persistenceKey,e),i=new Fh(e,t,n);this.setItem(r,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const n=this.Or(e);return Vh.ar(n,t)}Lr(e,t){const n=this.Er.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Mh.ar(new Yr(i),r,t)}Ur(e,t){const n=this.Ar.exec(e),r=Number(n[1]);return Fh.ar(r,t)}br(e){return $h.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);ti("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const n=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Wr(s,o).then(()=>{this.gr=n})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Fa();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Bh{constructor(){this.Hr=new Uh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Uh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){ti("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){ti("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh=null;function Gh(){return null===Kh?Kh=268435456+Math.round(2147483648*Math.random()):Kh++,"0x"+Kh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Hh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="WebChannelConnection";class Yh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=Gh(),o=this.To(e,t);ti("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then(t=>(ti("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw ri("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}To(e,t){const n=Hh[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=Gh();return new Promise((s,o)=>{const a=new Gr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ur.NO_ERROR:const t=a.getResponseJson();ti(Qh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Ur.TIMEOUT:ti(Qh,`RPC '${e}' ${i} timed out`),o(new li(ui.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const n=a.getStatus();if(ti(Qh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ui).indexOf(t)>=0?t:ui.UNKNOWN}(t.status);o(new li(e,t.message))}else o(new li(ui.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new li(ui.UNAVAILABLE,"Connection failed."));break;default:si()}}finally{ti(Qh,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);ti(Qh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)})}Ro(e,t,n){const r=Gh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Vr(),o=$r(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new zr({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ti(Qh,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Wh({ro:t=>{d?ti(Qh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(ti(Qh,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),ti(Qh,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(l,Kr.EventType.OPEN,()=>{d||ti(Qh,`RPC '${e}' stream ${r} transport opened.`)}),p(l,Kr.EventType.CLOSE,()=>{d||(d=!0,ti(Qh,`RPC '${e}' stream ${r} transport closed`),f.wo())}),p(l,Kr.EventType.ERROR,t=>{d||(d=!0,ri(Qh,`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new li(ui.UNAVAILABLE,"The operation could not be completed")))}),p(l,Kr.EventType.MESSAGE,t=>{var n;if(!d){const i=t.data[0];oi(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ti(Qh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=_c[e];if(void 0!==t)return Ec(t)}(t),i=o.message;void 0===n&&(n=ui.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new li(n,i)),l.close()}else ti(Qh,`RPC '${e}' stream ${r} received:`,i),f._o(i)}}),p(o,Br.STAT_EVENT,t=>{t.stat===qr.PROXY?ti(Qh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===qr.NOPROXY&&ti(Qh,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.fo()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return"undefined"!=typeof window?window:null}function Jh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(e){return new Kc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&ti("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ed(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===ui.RESOURCE_EXHAUSTED?(ni(t.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===ui.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Fo===t&&this.Zo(e,n)},t=>{e(()=>{const e=new li(ui.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)})})}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(e=>{n(()=>this.tu(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return ti("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(ti("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nd extends td{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=cu(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ci.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ci.min():t.readTime?Yc(t.readTime):Ci.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=ru(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=na(r)?{documents:du(e,r)}:{query:fu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Wc(e,t.resumeToken);const r=Gc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ci.min())>0){n.readTime=Hc(e,t.snapshotVersion.toTimestamp());const r=Gc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=mu(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=ru(this.serializer),t.removeTarget=e,this.Wo(t)}}class rd extends td{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(oi(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=hu(e.writeResults,e.commitTime),n=Yc(e.commitTime);return this.listener.cu(n,t)}return oi(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ru(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>uu(this.serializer,e))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new li(ui.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new li(ui.UNKNOWN,e.toString())})}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.vo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new li(ui.UNKNOWN,e.toString())})}terminate(){this.lu=!0}}class sd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ni(t),this.mu=!1):ti("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(e=>{n.enqueueAndForget(async()=>{md(this)&&(ti("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ci(e);t.vu.add(4),await cd(t),t.bu.set("Unknown"),t.vu.delete(4),await ad(t)}(this))})}),this.bu=new sd(n,r)}}async function ad(e){if(md(e))for(const t of e.Ru)await t(!0)}async function cd(e){for(const t of e.Ru)await t(!1)}function ud(e,t){const n=ci(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),pd(n)?fd(n):Rd(n).Ko()&&hd(n,t))}function ld(e,t){const n=ci(e),r=Rd(n);n.Au.delete(t),r.Ko()&&dd(n,t),0===n.Au.size&&(r.Ko()?r.jo():md(n)&&n.bu.set("Unknown"))}function hd(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ci.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Rd(e).su(t)}function dd(e,t){e.Vu.qt(t),Rd(e).iu(t)}function fd(e){e.Vu=new $c({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Rd(e).start(),e.bu.gu()}function pd(e){return md(e)&&!Rd(e).Uo()&&e.Au.size>0}function md(e){return 0===ci(e).vu.size}function gd(e){e.Vu=void 0}async function vd(e){e.Au.forEach((t,n)=>{hd(e,t)})}async function yd(e,t){gd(e),pd(e)?(e.bu.Iu(t),fd(e)):e.bu.set("Unknown")}async function wd(e,t,n){if(e.bu.set("Online"),t instanceof Fc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){ti("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await bd(e,n)}else if(t instanceof Lc?e.Vu.Ht(t):t instanceof Mc?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Ci.min()))try{const t=await _h(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(Hs.EMPTY_BYTE_STRING,r.snapshotVersion)),dd(e,t);const i=new Su(r.target,t,n,r.sequenceNumber);hd(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ti("RemoteStore","Failed to raise snapshot:",t),await bd(e,t)}}async function bd(e,t,n){if(!Qi(t))throw t;e.vu.add(1),await cd(e),e.bu.set("Offline"),n||(n=()=>_h(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ti("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ad(e)})}function _d(e,t){return t().catch(n=>bd(e,n,t))}async function Id(e){const t=ci(e),n=Pd(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Td(t);)try{const e=await Eh(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Ed(t,e)}catch(e){await bd(t,e)}Sd(t)&&Cd(t)}function Td(e){return md(e)&&e.Eu.length<10}function Ed(e,t){e.Eu.push(t);const n=Pd(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Sd(e){return md(e)&&!Pd(e).Uo()&&e.Eu.length>0}function Cd(e){Pd(e).start()}async function kd(e){Pd(e).hu()}async function Ad(e){const t=Pd(e);for(const n of e.Eu)t.uu(n.mutations)}async function xd(e,t,n){const r=e.Eu.shift(),i=yc.from(r,t,n);await _d(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Id(e)}async function Dd(e,t){t&&Pd(e).ou&&await async function(e,t){if(n=t.code,Tc(n)&&n!==ui.ABORTED){const n=e.Eu.shift();Pd(e).Qo(),await _d(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Id(e)}var n}(e,t),Sd(e)&&Cd(e)}async function Nd(e,t){const n=ci(e);n.asyncQueue.verifyOperationInProgress(),ti("RemoteStore","RemoteStore received new credentials");const r=md(n);n.vu.add(3),await cd(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ad(n)}async function Od(e,t){const n=ci(e);t?(n.vu.delete(2),await ad(n)):t||(n.vu.add(2),await cd(n),n.bu.set("Unknown"))}function Rd(e){return e.Su||(e.Su=function(e,t,n){const r=ci(e);return r.fu(),new nd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{uo:vd.bind(null,e),ao:yd.bind(null,e),nu:wd.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),pd(e)?fd(e):e.bu.set("Unknown")):(await e.Su.stop(),gd(e))})),e.Su}function Pd(e){return e.Du||(e.Du=function(e,t,n){const r=ci(e);return r.fu(),new rd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:kd.bind(null,e),ao:Dd.bind(null,e),au:Ad.bind(null,e),cu:xd.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await Id(e)):(await e.Du.stop(),e.Eu.length>0&&(ti("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ld{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ld(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new li(ui.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(e,t){if(ni("AsyncQueue",`${t}: ${e}`),Qi(e))return new li(ui.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ni.comparator(t.key,n.key):(e,t)=>Ni.comparator(e.key,t.key),this.keyedMap=Aa(),this.sortedSet=new Vs(this.comparator)}static emptySet(e){return new Fd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Fd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.Cu=new Vs(Ni.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):si():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,n)=>{e.push(n)}),e}}class $d{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new $d(e,t,Fd.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.Nu=void 0,this.listeners=[]}}class jd{constructor(){this.queries=new Ea(e=>ya(e),va),this.onlineState="Unknown",this.ku=new Set}}async function Bd(e,t){const n=ci(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ud),i)try{s.Nu=await n.onListen(r)}catch(e){const n=Md(e,`Initialization of query '${wa(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&Gd(n)}async function qd(e,t){const n=ci(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zd(e,t){const n=ci(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.$u(i)&&(r=!0);t.Nu=i}}r&&Gd(n)}function Kd(e,t,n){const r=ci(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Gd(e){e.ku.forEach(e=>{e.next()})}class Hd{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new $d(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=$d.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.serializer=e}rr(e){return eu(this.serializer,e)}ur(e){return e.metadata.exists?ou(this.serializer,e.document,!1):ko.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Yc(e)}}class Yd{constructor(e,t,n){this.ju=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Xd(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const n=Ai.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,n=new Qd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.rr(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||La()).add(e);t.set(n,r)}}return t}async complete(){const e=await Nh(this.localStore,new Qd(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const n of this.queries)await Oh(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function Xd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.key=e}}class Zd{constructor(e){this.key=e}}class ef{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=La(),this.mutatedKeys=La(),this.tc=Ia(e),this.ec=new Fd(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Vd,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=ba(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return si()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.tc(e.doc,t.doc)),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new $d(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Vd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(e=>this.Yu=this.Yu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Yu=this.Yu.delete(e)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=La(),this.ec.forEach(e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))});const t=[];return e.forEach(e=>{this.Zu.has(e)||t.push(new Zd(e))}),this.Zu.forEach(n=>{e.has(n)||t.push(new Jd(n))}),t}hc(e){this.Yu=e.ir,this.Zu=La();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return $d.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class tf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class nf{constructor(e){this.key=e,this.fc=!1}}class rf{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new Ea(e=>ya(e),va),this._c=new Map,this.mc=new Set,this.gc=new Vs(Ni.comparator),this.yc=new Map,this.Ic=new Zl,this.Tc={},this.Ec=new Map,this.Ac=Al.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function sf(e,t){const n=Pf(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await Sh(n.localStore,pa(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await of(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&ud(n.remoteStore,e)}return i}async function of(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await kh(e.localStore,t.query,!1).then(({documents:e})=>t.view.sc(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return wf(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await kh(e.localStore,t,!0),o=new ef(t,s.ir),a=o.sc(s.documents),c=Pc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);wf(e,n,u.cc);const l=new tf(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function af(e,t){const n=ci(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(e=>!va(e,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ch(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ld(n.remoteStore,r.targetId),vf(n,r.targetId)}).catch(qi)):(vf(n,r.targetId),await Ch(n.localStore,r.targetId,!0))}async function cf(e,t,n){const r=Lf(e);try{const e=await function(e,t){const n=ci(e),r=Si.now(),i=t.reduce((e,t)=>e.add(t.key),La());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Ca(),c=La();return n.Zi.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=cc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new hc(e.key,t,Co(t.value.mapValue),nc.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:xa(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Vs(Ii)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await If(r,e.changes),await Id(r.remoteStore)}catch(e){const t=Md(e,"Failed to persist write");n.reject(t)}}async function uf(e,t){const n=ci(e);try{const e=await Ih(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.yc.get(t);r&&(oi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?oi(r.fc):e.removedDocuments.size>0&&(oi(r.fc),r.fc=!1))}),await If(n,e,t)}catch(e){await qi(e)}}function lf(e,t,n){const r=ci(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=ci(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.Mu(t)&&(r=!0)}),r&&Gd(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hf(e,t,n){const r=ci(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new Vs(Ni.comparator);e=e.insert(s,ko.newNoDocument(s,Ci.min()));const n=La().add(s),i=new Rc(Ci.min(),new Map,new Vs(Ii),e,n);await uf(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),_f(r)}else await Ch(r.localStore,t,!1).then(()=>vf(r,t,n)).catch(qi)}async function df(e,t){const n=ci(e),r=t.batch.batchId;try{const e=await bh(n.localStore,t);gf(n,r,null),mf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await If(n,e)}catch(e){await qi(e)}}async function ff(e,t,n){const r=ci(e);try{const e=await function(e,t){const n=ci(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(oi(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);gf(r,t,n),mf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await If(r,e)}catch(n){await qi(n)}}async function pf(e,t){const n=ci(e);md(n.remoteStore)||ti("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=ci(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Ec.get(e)||[];r.push(t),n.Ec.set(e,r)}catch(e){const n=Md(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function mf(e,t){(e.Ec.get(t)||[]).forEach(e=>{e.resolve()}),e.Ec.delete(t)}function gf(e,t,n){const r=ci(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function vf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(t=>{e.Ic.containsKey(t)||yf(e,t)})}function yf(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(ld(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),_f(e))}function wf(e,t,n){for(const r of n)r instanceof Jd?(e.Ic.addReference(r.key,t),bf(e,r)):r instanceof Zd?(ti("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||yf(e,r.key)):si()}function bf(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(ti("SyncEngine","New document in limbo: "+n),e.mc.add(r),_f(e))}function _f(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Ni(Ai.fromString(t)),r=e.Ac.next();e.yc.set(r,new nf(n)),e.gc=e.gc.insert(n,r),ud(e.remoteStore,new Su(pa(ca(n.path)),r,"TargetPurposeLimboResolution",ns.ct))}}async function If(e,t,n){const r=ci(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((e,a)=>{o.push(r.Rc(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=mh.Li(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=ci(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>zi.forEach(t,t=>zi.forEach(t.Fi,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>zi.forEach(t.Bi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Qi(e))throw e;ti("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function Tf(e,t){const n=ci(e);if(!n.currentUser.isEqual(t)){ti("SyncEngine","User change. New user:",t.toKey());const e=await wh(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach(e=>{e.forEach(e=>{e.reject(new li(ui.CANCELLED,t))})}),e.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await If(n,e.er)}}function Ef(e,t){const n=ci(e),r=n.yc.get(t);if(r&&r.fc)return La().add(r.key);{let e=La();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}async function Sf(e,t){const n=ci(e),r=await kh(n.localStore,t.query,!0),i=t.view.hc(r);return n.isPrimaryClient&&wf(n,t.targetId,i.cc),i}async function Cf(e,t){const n=ci(e);return xh(n.localStore,t).then(e=>If(n,e))}async function kf(e,t,n,r){const i=ci(e),s=await function(e,t){const n=ci(e),r=ci(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Sn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):zi.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await Id(i.remoteStore):"acknowledged"===n||"rejected"===n?(gf(i,t,r||null),mf(i,t),function(e,t){ci(ci(e).mutationQueue).Cn(t)}(i.localStore,t)):si(),await If(i,s)):ti("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Af(e,t){const n=ci(e);if(Pf(n),Lf(n),!0===t&&!0!==n.vc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await xf(n,e.toArray());n.vc=!0,await Od(n.remoteStore,!0);for(const r of t)ud(n.remoteStore,r)}else if(!1===t&&!1!==n.vc){const e=[];let t=Promise.resolve();n._c.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(vf(n,i),Ch(n.localStore,i,!0))),ld(n.remoteStore,i)}),await t,await xf(n,e),function(e){const t=ci(e);t.yc.forEach((e,n)=>{ld(t.remoteStore,n)}),t.Ic.Ts(),t.yc=new Map,t.gc=new Vs(Ni.comparator)}(n),n.vc=!1,await Od(n.remoteStore,!1)}}async function xf(e,t,n){const r=ci(e),i=[],s=[];for(const o of t){let e;const t=r._c.get(o);if(t&&0!==t.length){e=await Sh(r.localStore,pa(t[0]));for(const e of t){const t=r.wc.get(e),n=await Sf(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Ah(r.localStore,o);e=await Sh(r.localStore,t),await of(r,Df(t),o,!1,e.resumeToken)}i.push(e)}return r.dc.nu(s),i}function Df(e){return aa(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Nf(e){const t=ci(e);return ci(ci(t.localStore).persistence).$i()}async function Of(e,t,n,r){const i=ci(e);if(i.vc)return void ti("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await xh(i.localStore,_a(s[0])),r=Rc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Hs.EMPTY_BYTE_STRING);await If(i,e,r);break}case"rejected":await Ch(i.localStore,t,!0),vf(i,t,r);break;default:si()}}async function Rf(e,t,n){const r=Pf(e);if(r.vc){for(const e of t){if(r._c.has(e)){ti("SyncEngine","Adding an already active target "+e);continue}const t=await Ah(r.localStore,e),n=await Sh(r.localStore,t);await of(r,Df(t),n.targetId,!1,n.resumeToken),ud(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await Ch(r.localStore,e,!1).then(()=>{ld(r.remoteStore,e),vf(r,e)}).catch(qi)}}function Pf(e){const t=ci(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ef.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hf.bind(null,t),t.dc.nu=zd.bind(null,t.eventManager),t.dc.Pc=Kd.bind(null,t.eventManager),t}function Lf(e){const t=ci(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=df.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ff.bind(null,t),t}function Mf(e,t,n){const r=ci(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=ci(e),r=Yc(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.qs.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Xd(r));const i=new Yd(r,e.localStore,t.serializer);let s=await t.bc();for(;s;){const e=await i.zu(s);e&&n._updateProgress(e),s=await t.bc()}const o=await i.complete();return await If(e,o.Ju,void 0),await function(e,t){const n=ci(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.qs.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Hu)}catch(e){return ri("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}class Ff{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return yh(this.persistence,new gh,e.initialUser,this.serializer)}createPersistence(e){return new sh(ah.zs,this.serializer)}createSharedClientState(e){return new Bh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vf extends Ff{constructor(e,t,n){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Lf(this.Vc.syncEngine),await Id(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return yh(this.persistence,new gh,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ll(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new ts(t,this.persistence);return new es(e.asyncQueue,n)}createPersistence(e){const t=ph(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?bl.withCacheSize(this.cacheSizeBytes):bl.DEFAULT;return new hh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Xh(),Jh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Bh}}class $f extends Vf{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof jh&&(this.sharedClientState.syncEngine={jr:kf.bind(null,t),zr:Of.bind(null,t),Wr:Rf.bind(null,t),$i:Nf.bind(null,t),Qr:Cf.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async e=>{await Af(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Xh();if(!jh.D(t))throw new li(ui.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ph(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new jh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tf.bind(null,this.syncEngine),await Od(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jd}createDatastore(e){const t=Zh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Yh(r));var r;return function(e,t,n,r){return new id(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>lf(this.syncEngine,e,0),s=zh.D()?new zh:new qh,new od(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new rf(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ci(e);ti("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await cd(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ni("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new hi,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Gu)}`))},e=>this.metadata.reject(e))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(null===e)return null;const t=this.xc.decode(e),n=Number(t);isNaN(n)&&this.Mc(`length string (${t}) is not valid number`);const r=await this.$c(n);return new Wd(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0;)if(await this.Fc())break;if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new li(ui.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=ci(e),r=ru(n.serializer)+"/documents",i={documents:t.map(e=>Zc(n.serializer,e))},s=await n.vo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach(e=>{const t=au(n.serializer,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());oi(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new mc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=Ni.fromPath(t);this.mutations.push(new gc(n,this.precondition(n)))}),await async function(e,t){const n=ci(e),r=ru(n.serializer)+"/documents",i={writes:t.map(e=>uu(n.serializer,e))};await n.Io("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw si();t=Ci.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new li(ui.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ci.min())?nc.exists(!1):nc.updateTime(t):nc.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ci.min()))throw new li(ui.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nc.updateTime(t)}return nc.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new ed(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new zf(this.datastore),t=this.qc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Uc(e)}))}).catch(e=>{this.Uc(e)})})}qc(e){try{const t=this.updateFunction(e);return!rs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Tc(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Yr.UNAUTHENTICATED,this.clientId=_i.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{ti("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(ti("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new li(ui.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Md(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Hf(e,t){e.asyncQueue.verifyOperationInProgress(),ti("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await wh(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Yf(e);ti("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>Nd(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Nd(t.remoteStore,n)),e._onlineComponents=t}function Qf(e){return"FirebaseError"===e.name?e.code===ui.FAILED_PRECONDITION||e.code===ui.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Yf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ti("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Qf(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await Hf(e,new Ff)}}else ti("FirestoreClient","Using default OfflineComponentProvider"),await Hf(e,new Ff);return e._offlineComponents}async function Xf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ti("FirestoreClient","Using user provided OnlineComponentProvider"),await Wf(e,e._uninitializedComponentsProvider._online)):(ti("FirestoreClient","Using default OnlineComponentProvider"),await Wf(e,new Uf))),e._onlineComponents}function Jf(e){return Yf(e).then(e=>e.persistence)}function Zf(e){return Yf(e).then(e=>e.localStore)}function ep(e){return Xf(e).then(e=>e.remoteStore)}function tp(e){return Xf(e).then(e=>e.syncEngine)}function np(e){return Xf(e).then(e=>e.datastore)}async function rp(e){const t=await Xf(e),n=t.eventManager;return n.onListen=sf.bind(null,t.syncEngine),n.onUnlisten=af.bind(null,t.syncEngine),n}function ip(e){return e.asyncQueue.enqueue(async()=>{const t=await Jf(e),n=await ep(e);return t.setNetworkEnabled(!0),function(e){const t=ci(e);return t.vu.delete(0),ad(t)}(n)})}function sp(e){return e.asyncQueue.enqueue(async()=>{const t=await Jf(e),n=await ep(e);return t.setNetworkEnabled(!1),async function(e){const t=ci(e);t.vu.add(0),await cd(t),t.bu.set("Offline")}(n)})}function op(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=ci(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new li(ui.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Md(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Zf(e),t,n)),n.promise}function ap(e,t,n={}){const r=new hi;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Bf({next:s=>{t.enqueueAndForget(()=>qd(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new li(ui.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new li(ui.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Hd(ca(n.path),s,{includeMetadataChanges:!0,Ku:!0});return Bd(e,o)}(await rp(e),e.asyncQueue,t,n,r)),r.promise}function cp(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await kh(e,t,!0),i=new ef(t,r.ir),s=i.sc(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Md(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Zf(e),t,n)),n.promise}function up(e,t,n={}){const r=new hi;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Bf({next:n=>{t.enqueueAndForget(()=>qd(e,o)),n.fromCache&&"server"===r.source?i.reject(new li(ui.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Hd(n,s,{includeMetadataChanges:!0,Ku:!0});return Bd(e,o)}(await rp(e),e.asyncQueue,t,n,r)),r.promise}function lp(e,t){const n=new Bf(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){ci(e).ku.add(t),t.next()}(await rp(e),n)),()=>{n.Dc(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){ci(e).ku.delete(t)}(await rp(e),n))}}function hp(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?kc().encode(e):e,function(e,t){return new qf(e,t)}(function(e,t){if(e instanceof Uint8Array)return jf(e,t);if(e instanceof ArrayBuffer)return jf(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,Zh(t));e.asyncQueue.enqueueAndForget(async()=>{Mf(await tp(e),i,r)})}function dp(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=ci(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.qs.getNamedQuery(e,t))}(await Zf(e),t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fp(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(e,t,n){if(!n)throw new li(ui.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gp(e,t,n,r){if(!0===t&&!0===r)throw new li(ui.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function vp(e){if(!Ni.isDocumentKey(e))throw new li(ui.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yp(e){if(Ni.isDocumentKey(e))throw new li(ui.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":si()}function bp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new li(ui.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wp(e);throw new li(ui.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function _p(e,t){if(t<=0)throw new li(ui.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new li(ui.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new li(ui.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fp(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Tp{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new li(ui.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new li(ui.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ip(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new fi;switch(e.type){case"firstParty":return new vi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new li(ui.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pp.get(e);t&&(ti("ComponentProvider","Removing Datastore"),pp.delete(e),t.terminate())}(this),Promise.resolve()}}function Ep(e,t,n,r={}){var i;const s=(e=bp(e,Tp))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Yr.MOCK_USER;else{t=(0,c.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new li(ui.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Yr(s)}e._authCredentials=new pi(new di(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sp(this.firestore,e,this._key)}}class Cp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Cp(this.firestore,e,this._query)}}class kp extends Cp{constructor(e,t,n){super(e,t,ca(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sp(this.firestore,null,new Ni(e))}withConverter(e){return new kp(this.firestore,e,this._path)}}function Ap(e,t,...n){if(e=(0,c.Ku)(e),mp("collection","path",t),e instanceof Tp){const r=Ai.fromString(t,...n);return yp(r),new kp(e,null,r)}{if(!(e instanceof Sp||e instanceof kp))throw new li(ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ai.fromString(t,...n));return yp(r),new kp(e.firestore,null,r)}}function xp(e,t){if(e=bp(e,Tp),mp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new li(ui.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cp(e,null,function(e){return new oa(Ai.emptyPath(),e)}(t))}function Dp(e,t,...n){if(e=(0,c.Ku)(e),1===arguments.length&&(t=_i.A()),mp("doc","path",t),e instanceof Tp){const r=Ai.fromString(t,...n);return vp(r),new Sp(e,null,new Ni(r))}{if(!(e instanceof Sp||e instanceof kp))throw new li(ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ai.fromString(t,...n));return vp(r),new Sp(e.firestore,e instanceof kp?e.converter:null,new Ni(r))}}function Np(e,t){return e=(0,c.Ku)(e),t=(0,c.Ku)(t),(e instanceof Sp||e instanceof kp)&&(t instanceof Sp||t instanceof kp)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Op(e,t){return e=(0,c.Ku)(e),t=(0,c.Ku)(t),e instanceof Cp&&t instanceof Cp&&e.firestore===t.firestore&&va(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rp{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ed(this,"async_queue_retry"),this.Xc=()=>{const e=Jh();e&&ti("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Jh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Jh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new hi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Qi(e))throw e;ti("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ni("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Hc=!1,e))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Ld.createAndSchedule(this,e,t,n,e=>this.na(e));return this.zc.push(r),r}Zc(){this.Wc&&si()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Pp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Lp{constructor(){this._progressObserver={},this._taskCompletionResolver=new hi,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=-1;class Fp extends Tp{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Rp,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$p(this),this._firestoreClient.terminate()}}function Vp(e){return e._firestoreClient||$p(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $p(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new to(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,fp(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Gf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function Up(e,t){Qp(e=bp(e,Fp));const n=Vp(e);if(n._uninitializedComponentsProvider)throw new li(ui.FAILED_PRECONDITION,"SDK cache is already specified.");ri("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new Uf;return Bp(n,i,new Vf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function jp(e){Qp(e=bp(e,Fp));const t=Vp(e);if(t._uninitializedComponentsProvider)throw new li(ui.FAILED_PRECONDITION,"SDK cache is already specified.");ri("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new Uf;return Bp(t,r,new $f(r,n.cacheSizeBytes))}function Bp(e,t,n){const r=new hi;return e.asyncQueue.enqueue(async()=>{try{await Hf(e,n),await Wf(e,t),r.resolve()}catch(e){const n=e;if(!Qf(n))throw n;ri("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}}).then(()=>r.promise)}function qp(e){if(e._initialized&&!e._terminated)throw new li(ui.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new hi;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Gi.D())return Promise.resolve();const t=e+"main";await Gi.delete(t)}(ph(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function zp(e){return function(e){const t=new hi;return e.asyncQueue.enqueueAndForget(async()=>pf(await tp(e),t)),t.promise}(Vp(e=bp(e,Fp)))}function Kp(e){return ip(Vp(e=bp(e,Fp)))}function Gp(e){return sp(Vp(e=bp(e,Fp)))}function Hp(e,t){const n=Vp(e=bp(e,Fp)),r=new Lp;return hp(n,e._databaseId,t,r),r}function Wp(e,t){return dp(Vp(e=bp(e,Fp)),t).then(t=>t?new Cp(e,null,t.query):null)}function Qp(e){if(e._initialized||e._terminated)throw new li(ui.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yp(Hs.fromBase64String(e))}catch(e){throw new li(ui.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Yp(Hs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new li(ui.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Di(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new li(ui.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new li(ui.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ii(this._lat,e._lat)||Ii(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=/^__.*__$/;class tm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new hc(e,this.data,this.fieldMask,t,this.fieldTransforms):new lc(e,this.data,t,this.fieldTransforms)}}class nm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new hc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw si()}}class im{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Em(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(rm(this.ca)&&em.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class sm{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Zh(e)}ya(e,t,n,r=!1){return new im({ca:e,methodName:t,ga:n,path:Di.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function om(e){const t=e._freezeSettings(),n=Zh(e._databaseId);return new sm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function am(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);bm("Data must be an object, but it was:",o,r);const a=ym(r,o);let c,u;if(s.merge)c=new zs(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=_m(t,r,n);if(!o.contains(i))throw new li(ui.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Sm(e,i)||e.push(i)}c=new zs(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new tm(new So(a),c,u)}class cm extends Jp{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cm}}function um(e,t,n){return new im({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class lm extends Jp{_toFieldTransform(e){return new Za(e.path,new Ka)}isEqual(e){return e instanceof lm}}class hm extends Jp{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=um(this,e,!0),n=this.pa.map(e=>vm(e,t)),r=new Ga(n);return new Za(e.path,r)}isEqual(e){return this===e}}class dm extends Jp{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=um(this,e,!0),n=this.pa.map(e=>vm(e,t)),r=new Wa(n);return new Za(e.path,r)}isEqual(e){return this===e}}class fm extends Jp{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Ya(e.serializer,Ua(e.serializer,this.Ia));return new Za(e.path,t)}isEqual(e){return this===e}}function pm(e,t,n,r){const i=e.ya(1,t,n);bm("Data must be an object, but it was:",i,r);const s=[],o=So.empty();Ms(r,(e,r)=>{const a=Tm(t,e,n);r=(0,c.Ku)(r);const u=i.da(a);if(r instanceof cm)s.push(a);else{const e=vm(r,u);null!=e&&(s.push(a),o.set(a,e))}});const a=new zs(s);return new nm(o,a,i.fieldTransforms)}function mm(e,t,n,r,i,s){const o=e.ya(1,t,n),a=[_m(t,r,n)],u=[i];if(s.length%2!=0)throw new li(ui.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(_m(t,s[c])),u.push(s[c+1]);const l=[],h=So.empty();for(let f=a.length-1;f>=0;--f)if(!Sm(l,a[f])){const e=a[f];let t=u[f];t=(0,c.Ku)(t);const n=o.da(e);if(t instanceof cm)l.push(e);else{const r=vm(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new zs(l);return new nm(h,d,o.fieldTransforms)}function gm(e,t,n,r=!1){return vm(n,e.ya(r?4:3,t))}function vm(e,t){if(wm(e=(0,c.Ku)(e)))return bm("Unsupported field value:",t,e),ym(e,t);if(e instanceof Jp)return function(e,t){if(!rm(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=vm(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ua(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Si.fromDate(e);return{timestampValue:Hc(t.serializer,n)}}if(e instanceof Si){const n=new Si(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Hc(t.serializer,n)}}if(e instanceof Zp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Yp)return{bytesValue:Wc(t.serializer,e._byteString)};if(e instanceof Sp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${wp(e)}`)}(e,t)}function ym(e,t){const n={};return Fs(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ms(e,(e,r)=>{const i=vm(r,t.ha(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function wm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Si||e instanceof Zp||e instanceof Yp||e instanceof Sp||e instanceof Jp)}function bm(e,t,n){if(!wm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=wp(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function _m(e,t,n){if((t=(0,c.Ku)(t))instanceof Xp)return t._internalPath;if("string"==typeof t)return Tm(e,t);throw Em("Field path arguments must be of type string or ",e,!1,void 0,n)}const Im=new RegExp("[~\\*/\\[\\]]");function Tm(e,t,n){if(t.search(Im)>=0)throw Em(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Xp(...t.split("."))._internalPath}catch(r){throw Em(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Em(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new li(ui.INVALID_ARGUMENT,a+e+c)}function Sm(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Sp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new km(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Am("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class km extends Cm{data(){return super.data()}}function Am(e,t){return"string"==typeof t?Tm(e,t):t instanceof Xp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new li(ui.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dm{}class Nm extends Dm{}function Om(e,t,...n){let r=[];t instanceof Dm&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof Lm).length,n=e.filter(e=>e instanceof Rm).length;if(t>1||t>0&&n>0)throw new li(ui.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Rm extends Nm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Rm(e,t,n)}_apply(e){const t=this._parse(e);return Ym(e._query,t),new Cp(e.firestore,e.converter,ma(e._query,t))}_parse(e){const t=om(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new li(ui.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Qm(o,s);const t=[];for(const n of o)t.push(Wm(r,e,n));a={arrayValue:{values:t}}}else a=Wm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Qm(o,s),a=gm(n,t,o,"in"===s||"not-in"===s);return Po.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Pm(e,t,n){const r=t,i=Am("where",e);return Rm._create(i,r,n)}class Lm extends Dm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lm(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Lo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Ym(n,i),n=ma(n,i)}(e._query,t),new Cp(e.firestore,e.converter,ma(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Mm extends Nm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Mm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new li(ui.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new li(ui.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new No(t,n);return function(e,t){if(null===la(e)){const n=ha(e);null!==n&&Xm(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Cp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new oa(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Fm(e,t="asc"){const n=t,r=Am("orderBy",e);return Mm._create(r,n)}class Vm extends Nm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Vm(e,t,n)}_apply(e){return new Cp(e.firestore,e.converter,ga(e._query,this._limit,this._limitType))}}function $m(e){return _p("limit",e),Vm._create("limit",e,"F")}function Um(e){return _p("limitToLast",e),Vm._create("limitToLast",e,"L")}class jm extends Nm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new jm(e,t,n)}_apply(e){const t=Hm(e,this.type,this._docOrFields,this._inclusive);return new Cp(e.firestore,e.converter,function(e,t){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Bm(...e){return jm._create("startAt",e,!0)}function qm(...e){return jm._create("startAfter",e,!1)}class zm extends Nm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new zm(e,t,n)}_apply(e){const t=Hm(e,this.type,this._docOrFields,this._inclusive);return new Cp(e.firestore,e.converter,function(e,t){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Km(...e){return zm._create("endBefore",e,!1)}function Gm(...e){return zm._create("endAt",e,!0)}function Hm(e,t,n,r){if(n[0]=(0,c.Ku)(n[0]),n[0]instanceof Cm)return function(e,t,n,r,i){if(!r)throw new li(ui.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of fa(e))if(o.field.isKeyField())s.push(fo(t,r.key));else{const e=r.data.field(o.field);if(Js(e))throw new li(ui.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new li(ui.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ao(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=om(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new li(ui.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new li(ui.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!da(e)&&-1!==s.indexOf("/"))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ai.fromString(s));if(!Ni.isDocumentKey(n))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Ni(n);a.push(fo(t,i))}else{const e=gm(n,r,s);a.push(e)}}return new Ao(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Wm(e,t,n){if("string"==typeof(n=(0,c.Ku)(n))){if(""===n)throw new li(ui.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!da(t)&&-1!==n.indexOf("/"))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ai.fromString(n));if(!Ni.isDocumentKey(r))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fo(e,new Ni(r))}if(n instanceof Sp)return fo(e,n._key);throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wp(n)}.`)}function Qm(e,t){if(!Array.isArray(e)||0===e.length)throw new li(ui.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ym(e,t){if(t.isInequality()){const n=ha(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new li(ui.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=la(e);null!==i&&Xm(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new li(ui.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new li(ui.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Xm(e,t,n){if(!n.isEqual(t))throw new li(ui.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Jm{convertValue(e,t="none"){switch(so(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ys(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw si()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ms(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new Zp(Ys(e.latitude),Ys(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Zs(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const t=Qs(e);return new Si(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ai.fromString(e);oi(Eu(n));const r=new no(n.get(1),n.get(3)),i=new Ni(n.popFirst(5));return r.isEqual(t)||ni(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class eg extends Jm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sp(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ng extends Cm{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Am("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rg extends ng{data(e={}){return super.data(e)}}class ig{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new tg(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new rg(this._firestore,this._userDataWriter,n.key,n,new tg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new li(ui.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new rg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new tg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new rg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new tg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:sg(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return si()}}function og(e,t){return e instanceof ng&&t instanceof ng?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ig&&t instanceof ig&&e._firestore===t._firestore&&Op(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(e){e=bp(e,Sp);const t=bp(e.firestore,Fp);return ap(Vp(t),e._key).then(n=>_g(t,e,n))}class cg extends Jm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sp(this.firestore,null,t)}}function ug(e){e=bp(e,Sp);const t=bp(e.firestore,Fp),n=Vp(t),r=new cg(t);return op(n,e._key).then(n=>new ng(t,r,e._key,n,new tg(null!==n&&n.hasLocalMutations,!0),e.converter))}function lg(e){e=bp(e,Sp);const t=bp(e.firestore,Fp);return ap(Vp(t),e._key,{source:"server"}).then(n=>_g(t,e,n))}function hg(e){e=bp(e,Cp);const t=bp(e.firestore,Fp),n=Vp(t),r=new cg(t);return xm(e._query),up(n,e._query).then(n=>new ig(t,r,e,n))}function dg(e){e=bp(e,Cp);const t=bp(e.firestore,Fp),n=Vp(t),r=new cg(t);return cp(n,e._query).then(n=>new ig(t,r,e,n))}function fg(e){e=bp(e,Cp);const t=bp(e.firestore,Fp),n=Vp(t),r=new cg(t);return up(n,e._query,{source:"server"}).then(n=>new ig(t,r,e,n))}function pg(e,t,n){e=bp(e,Sp);const r=bp(e.firestore,Fp),i=Zm(e.converter,t,n);return bg(r,[am(om(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nc.none())])}function mg(e,t,n,...r){e=bp(e,Sp);const i=bp(e.firestore,Fp),s=om(i);let o;return o="string"==typeof(t=(0,c.Ku)(t))||t instanceof Xp?mm(s,"updateDoc",e._key,t,n,r):pm(s,"updateDoc",e._key,t),bg(i,[o.toMutation(e._key,nc.exists(!0))])}function gg(e){return bg(bp(e.firestore,Fp),[new mc(e._key,nc.none())])}function vg(e,t){const n=bp(e.firestore,Fp),r=Dp(e),i=Zm(e.converter,t);return bg(n,[am(om(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nc.exists(!1))]).then(()=>r)}function yg(e,...t){var n,r,i;e=(0,c.Ku)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Pp(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Pp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Sp)l=bp(e.firestore,Fp),h=ca(e._key.path),u={next:n=>{t[o]&&t[o](_g(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=bp(e,Cp);l=bp(n.firestore,Fp),h=n._query;const r=new cg(l);u={next:e=>{t[o]&&t[o](new ig(l,r,n,e))},error:t[o+1],complete:t[o+2]},xm(e._query)}return function(e,t,n,r){const i=new Bf(r),s=new Hd(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>Bd(await rp(e),s)),()=>{i.Dc(),e.asyncQueue.enqueueAndForget(async()=>qd(await rp(e),s))}}(Vp(l),h,a,u)}function wg(e,t){return lp(Vp(e=bp(e,Fp)),Pp(t)?t:{next:t})}function bg(e,t){return function(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget(async()=>cf(await tp(e),t,n)),n.promise}(Vp(e),t)}function _g(e,t,n){const r=n.docs.get(t._key),i=new cg(e);return new ng(e,i,t._key,r,new tg(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ig={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=om(e)}set(e,t,n){this._verifyNotCommitted();const r=Eg(e,this._firestore),i=Zm(r.converter,t,n),s=am(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nc.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Eg(e,this._firestore);let s;return s="string"==typeof(t=(0,c.Ku)(t))||t instanceof Xp?mm(this._dataReader,"WriteBatch.update",i._key,t,n,r):pm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,nc.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Eg(e,this._firestore);return this._mutations=this._mutations.concat(new mc(t._key,nc.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new li(ui.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Eg(e,t){if((e=(0,c.Ku)(e)).firestore!==t)throw new li(ui.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=om(e)}get(e){const t=Eg(e,this._firestore),n=new eg(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return si();const r=e[0];if(r.isFoundDocument())return new Cm(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Cm(this._firestore,n,t._key,null,t.converter);throw si()})}set(e,t,n){const r=Eg(e,this._firestore),i=Zm(r.converter,t,n),s=am(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Eg(e,this._firestore);let s;return s="string"==typeof(t=(0,c.Ku)(t))||t instanceof Xp?mm(this._dataReader,"Transaction.update",i._key,t,n,r):pm(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Eg(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Eg(e,this._firestore),n=new cg(this._firestore);return super.get(e).then(e=>new ng(this._firestore,n,t._key,e._document,new tg(!1,!1),t.converter))}}function Cg(e,t,n){e=bp(e,Fp);const r=Object.assign(Object.assign({},Ig),n);return function(e){if(e.maxAttempts<1)throw new li(ui.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new hi;return e.asyncQueue.enqueueAndForget(async()=>{const i=await np(e);new Kf(e.asyncQueue,i,n,t,r).run()}),r.promise}(Vp(e),n=>t(new Sg(e,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){return new cm("deleteField")}function Ag(){return new lm("serverTimestamp")}function xg(...e){return new hm("arrayUnion",e)}function Dg(...e){return new dm("arrayRemove",e)}function Ng(e){return new fm("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Xr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.uA("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Fp(new mi(e.getProvider("auth-internal")),new wi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new li(ui.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Qr,"3.13.0",e),(0,s.registerVersion)(Qr,"3.13.0","esm2017")}();const Og="@firebase/firestore-compat",Rg="0.3.12";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pg(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new li("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){if("undefined"===typeof Uint8Array)throw new li("unimplemented","Uint8Arrays are not available in this environment.")}function Mg(){if(!Gs())throw new li("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Fg{constructor(e){this._delegate=e}static fromBase64String(e){return Mg(),new Fg(Yp.fromBase64String(e))}static fromUint8Array(e){return Lg(),new Fg(Yp.fromUint8Array(e))}toBase64(){return Mg(),this._delegate.toBase64()}toUint8Array(){return Lg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(e){return $g(e,["next","error","complete"])}function $g(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{enableIndexedDbPersistence(e,t){return Up(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return jp(e._delegate)}clearIndexedDbPersistence(e){return qp(e._delegate)}}class jg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof no||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||ri("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Ep(this._delegate,e,t,n)}enableNetwork(){return Kp(this._delegate)}disableNetwork(){return Gp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,gp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return zp(this._delegate)}onSnapshotsInSync(e){return wg(this._delegate,e)}get app(){if(!this._appCompat)throw new li("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new nv(this,Ap(this._delegate,e))}catch(t){throw Wg(t,"collection()","Firestore.collection()")}}doc(e){try{return new Hg(this,Dp(this._delegate,e))}catch(t){throw Wg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Zg(this,xp(this._delegate,e))}catch(t){throw Wg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Cg(this._delegate,t=>e(new zg(this,t)))}batch(){return Vp(this._delegate),new Kg(new Tg(this._delegate,e=>bg(this._delegate,e)))}loadBundle(e){return Hp(this._delegate,e)}namedQuery(e){return Wp(this._delegate,e).then(e=>e?new Zg(this,e):null)}}class Bg extends Jm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fg(new Yp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Hg.forKey(t,this.firestore,null)}}function qg(e){ei(e)}class zg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Bg(e)}get(e){const t=rv(e);return this._delegate.get(t).then(e=>new Xg(this._firestore,new ng(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=rv(e);return n?(Pg("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=rv(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=rv(e);return this._delegate.delete(t),this}}class Kg{constructor(e){this._delegate=e}set(e,t,n){const r=rv(e);return n?(Pg("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=rv(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=rv(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Gg{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new rg(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Jg(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Gg.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Gg(e,new Bg(e),t),r.set(t,i)),i}}Gg.INSTANCES=new WeakMap;class Hg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Bg(e)}static forPath(e,t,n){if(e.length%2!==0)throw new li("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Hg(t,new Sp(t._delegate,n,new Ni(e)))}static forKey(e,t,n){return new Hg(t,new Sp(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new nv(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new nv(this.firestore,Ap(this._delegate,e))}catch(t){throw Wg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.Ku)(e),e instanceof Sp&&Np(this._delegate,e)}set(e,t){t=Pg("DocumentReference.set",t);try{return t?pg(this._delegate,e,t):pg(this._delegate,e)}catch(n){throw Wg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?mg(this._delegate,e):mg(this._delegate,e,t,...n)}catch(r){throw Wg(r,"updateDoc()","DocumentReference.update()")}}delete(){return gg(this._delegate)}onSnapshot(...e){const t=Qg(e),n=Yg(e,e=>new Xg(this.firestore,new ng(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return yg(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?ug(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?lg(this._delegate):ag(this._delegate),t.then(e=>new Xg(this.firestore,new ng(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new Hg(this.firestore,e?this._delegate.withConverter(Gg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Wg(e,t,n){return e.message=e.message.replace(t,n),e}function Qg(e){for(const t of e)if("object"===typeof t&&!Vg(t))return t;return{}}function Yg(e,t){var n,r;let i;return i=Vg(e[0])?e[0]:Vg(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Xg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Hg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return og(this._delegate,e._delegate)}}class Jg extends Xg{data(e){const t=this._delegate.data(e);return ai(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Zg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Bg(e)}where(e,t,n){try{return new Zg(this.firestore,Om(this._delegate,Pm(e,t,n)))}catch(r){throw Wg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Zg(this.firestore,Om(this._delegate,Fm(e,t)))}catch(n){throw Wg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Zg(this.firestore,Om(this._delegate,$m(e)))}catch(t){throw Wg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Zg(this.firestore,Om(this._delegate,Um(e)))}catch(t){throw Wg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Zg(this.firestore,Om(this._delegate,Bm(...e)))}catch(t){throw Wg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Zg(this.firestore,Om(this._delegate,qm(...e)))}catch(t){throw Wg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Zg(this.firestore,Om(this._delegate,Km(...e)))}catch(t){throw Wg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Zg(this.firestore,Om(this._delegate,Gm(...e)))}catch(t){throw Wg(t,"endAt()","Query.endAt()")}}isEqual(e){return Op(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?dg(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?fg(this._delegate):hg(this._delegate),t.then(e=>new tv(this.firestore,new ig(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=Qg(e),n=Yg(e,e=>new tv(this.firestore,new ig(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return yg(this._delegate,t,n)}withConverter(e){return new Zg(this.firestore,e?this._delegate.withConverter(Gg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ev{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Jg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class tv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Zg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Jg(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new ev(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Jg(this._firestore,n))})}isEqual(e){return og(this._delegate,e._delegate)}}class nv extends Zg{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Hg(this.firestore,e):null}doc(e){try{return new Hg(this.firestore,void 0===e?Dp(this._delegate):Dp(this._delegate,e))}catch(t){throw Wg(t,"doc()","CollectionReference.doc()")}}add(e){return vg(this._delegate,e).then(e=>new Hg(this.firestore,e))}isEqual(e){return Np(this._delegate,e._delegate)}withConverter(e){return new nv(this.firestore,e?this._delegate.withConverter(Gg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function rv(e){return bp(e,Sp)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(...e){this._delegate=new Xp(...e)}static documentId(){return new iv(Di.keyField().canonicalString())}isEqual(e){return e=(0,c.Ku)(e),e instanceof Xp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this._delegate=e}static serverTimestamp(){const e=Ag();return e._methodName="FieldValue.serverTimestamp",new sv(e)}static delete(){const e=kg();return e._methodName="FieldValue.delete",new sv(e)}static arrayUnion(...e){const t=xg(...e);return t._methodName="FieldValue.arrayUnion",new sv(t)}static arrayRemove(...e){const t=Dg(...e);return t._methodName="FieldValue.arrayRemove",new sv(t)}static increment(e){const t=Ng(e);return t._methodName="FieldValue.increment",new sv(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov={Firestore:jg,GeoPoint:Zp,Timestamp:Si,Blob:Fg,Transaction:zg,WriteBatch:Kg,DocumentReference:Hg,DocumentSnapshot:Xg,Query:Zg,QueryDocumentSnapshot:Jg,QuerySnapshot:tv,CollectionReference:nv,FieldPath:iv,FieldValue:sv,setLogLevel:qg,CACHE_SIZE_UNLIMITED:Mp};function av(e,t){e.INTERNAL.registerComponent(new o.uA("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},ov)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(e){av(e,(e,t)=>new jg(e,t,new Ug)),e.registerVersion(Og,Rg)}cv(i.A)},656:function(e,t,n){function r(e,t,n,r,i,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{A:function(){return r}})},701:function(e,t,n){var r=n(840),i=n(743),s=n(928);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(424),c=n(125);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.FA("auth","Firebase",d()),g=new a.Vy("@firebase/auth");function v(e,...t){g.logLevel<=a.$b.WARN&&g.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}function y(e,...t){g.logLevel<=a.$b.ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,...t){throw T(e,...t)}function b(e,...t){return T(e,...t)}function _(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function I(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&w(e,"argument-error"),_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function T(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function E(e,t,...n){if(!e)throw T(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw y(t),new Error(t)}function C(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},M=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,r,s={}){return $(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function $(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),t);try{const t=new B(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw q(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _(e,a,o);w(e,a)}}catch(s){if(s instanceof i.g)throw s;w(e,"network-request-failed",{message:String(s)})}}async function U(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&w(e,"multi-factor-auth-required",{_serverResponse:s}),s}function j(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(b(this.auth,"network-request-failed")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=b(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return V(e,"POST","/v1/accounts:update",t)}async function G(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=Y(r);E(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:H(Q(s.auth_time)),issuedAtTime:H(Q(s.iat)),expirationTime:H(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function Y(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return y("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(y("Failed to decode base64 JWT payload"),null)}catch(s){return y("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function X(e){const t=Y(e);return E(t,"internal-error"),E("undefined"!==typeof t.exp,"internal-error"),E("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Z(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,G(n,{idToken:r}));E(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?se(s.providerUserInfo):[],a=ie(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new te(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function re(e){const t=(0,i.Ku)(e);await ne(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ie(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function se(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await $(e,{},async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=j(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E("undefined"!==typeof e.idToken,"internal-error"),E("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ae;return n&&(E("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(E("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(E("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){E("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ee(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new te(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return re(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ne(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;E(y&&I,e,"internal-error");const T=ae.fromJSON(this.name,I);E("string"===typeof y,e,"internal-error"),ce(l,e.name),ce(h,e.name),E("boolean"===typeof w,e,"internal-error"),E("boolean"===typeof b,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(m,e.name),ce(g,e.name),ce(v,e.name);const S=new ue({uid:y,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ne(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function he(e){C(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(he(fe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||he(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ue._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Te(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.ZQ)()){return/crios\//i.test(e)}function be(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function _e(e=(0,i.ZQ)()){return/android/i.test(e)}function Ie(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Te(e=(0,i.ZQ)()){return/webos/i.test(e)}function Ee(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Se(e=(0,i.ZQ)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ce(e=(0,i.ZQ)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return(0,i.lT)()&&10===document.documentMode}function Ae(e=(0,i.ZQ)()){return Ee(e)||_e(e)||Te(e)||Ie(e)||/windows phone/i.test(e)||be(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.ZQ)());break;case"Worker":n=`${ge((0,i.ZQ)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Oe(e,t){return V(e,"GET","/v2/recaptchaConfig",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){return void 0!==e&&void 0!==e.getResponse}function Pe(e){return void 0!==e&&void 0!==e.enterprise}class Le{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Fe(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Me().appendChild(r)})}function Ve(e){return`__${e}${Math.floor(1e6*Math.random())}`}const $e="https://www.google.com/recaptcha/enterprise.js?render=",Ue="recaptcha-enterprise",je="NO_RECAPTCHA";class Be{constructor(e){this.type=Ue,this.auth=Ge(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Oe(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Le(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;Pe(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(je)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&Pe(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Fe($e+n).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function qe(e,t,n,r=!1){const i=new Be(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new He(this),this.idTokenSubscription=new He(this),this.beforeStateQueue=new ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ne(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.Ku)(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(he(e))})}async initializeRecaptchaConfig(){const e=await Oe(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Le(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Be(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return E(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=De(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&v(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ge(e){return(0,i.Ku)(e)}class He{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)(e=>this.observer=e)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Ge(e);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ye(t),{host:o,port:a}=Xe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Ye(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xe(e){const t=Ye(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Je(t)}}}function Je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return V(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function nt(e,t){return V(e,"POST","/v1/accounts:update",t)}async function rt(e,t){return V(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function st(e,t){return V(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ot(e,t){return st(e,t)}async function at(e,t){return st(e,t)}async function ct(e,t){return st(e,t)}async function ut(e,t){return st(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function ht(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new dt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new dt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await qe(e,n,"signInWithPassword");return it(e,t)}return it(e,n).catch(async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await qe(e,n,"signInWithPassword");return it(e,t)}return Promise.reject(t)});case"emailLink":return lt(e,{email:this._email,oobCode:this._password});default:w(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ht(e,{idToken:t,email:this._email,oobCode:this._password});default:w(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="http://localhost";class mt extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):w("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new mt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:pt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function vt(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function yt(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const wt={["USER_NOT_FOUND"]:"user-not-found"};async function bt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),wt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new _t({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _t({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return vt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return yt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new _t({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class Et{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=It(null!==(r=c["mode"])&&void 0!==r?r:null);E(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Tt(e);try{return new Et(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(){this.providerId=St.PROVIDER_ID}static credential(e,t){return dt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Et.parseLink(t);return E(n,"argument-error"),dt._fromEmailAndCode(e,n.code,n.tenantId)}}St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Ct{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class At extends kt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return E("providerId"in t&&"signInMethod"in t,"argument-error"),mt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),mt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return At.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return At.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new At(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends kt{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch(t){return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt extends kt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Dt.credential(t,n)}catch(r){return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com",Dt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends kt{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch(t){return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com",Nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ot="http://localhost";class Rt extends et{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Rt(n,i):null}static _create(e,t){return new Rt(e,t)}buildRequest(){return{requestUri:Ot,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="saml.";class Lt extends Ct{constructor(e){E(e.startsWith(Pt),"argument-error"),super(e)}static credentialFromResult(e){return Lt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Lt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Rt.fromJSON(e);return E(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Rt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends kt{constructor(){super("twitter.com")}static credential(e,t){return mt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Mt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(e,t){return U(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.TWITTER_SIGN_IN_METHOD="twitter.com",Mt.PROVIDER_ID="twitter.com";class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),s=$t(n),o=new Vt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=$t(n);return new Vt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function $t(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e){var t;const n=Ge(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Vt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ft(n,{returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,jt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new jt(e,t,n,r)}}function Bt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw jt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(e,t){const n=(0,i.Ku)(e);await Gt(!0,n,t);const{providerUserInfo:r}=await K(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=qt(r||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Kt(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vt._forOperation(e,"link",r)}async function Gt(e,t,n){await ne(t);const r=qt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";E(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await J(e,Bt(r,i,t,e),n);E(s.idToken,r,"internal-error");const o=Y(s.idToken);E(o,r,"internal-error");const{sub:a}=o;return E(e.uid===a,r,"user-mismatch"),Vt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&w(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t,n=!1){const r="signIn",i=await Bt(e,r,t),s=await Vt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Qt(e,t){return Wt(Ge(e),t)}async function Yt(e,t){const n=(0,i.Ku)(e);return await Gt(!1,n,t.providerId),Kt(n,t)}async function Xt(e,t){return Ht((0,i.Ku)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){return U(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){const n=Ge(e),r=await Jt(n,{token:t,returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tn._fromServerResponse(e,t):"totpInfo"in t?nn._fromServerResponse(e,t):w(e,"internal-error")}}class tn extends en{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tn(t)}}class nn extends en{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new nn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t,n){var r;E((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),E("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t,n){var r;const i=Ge(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}else n&&rn(i,s,n),await at(i,s).catch(async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await qe(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}})}async function on(e,t,n){await tt((0,i.Ku)(e),{oobCode:t,newPassword:n})}async function an(e,t){await rt((0,i.Ku)(e),{oobCode:t})}async function cn(e,t){const n=(0,i.Ku)(e),r=await tt(n,{oobCode:t}),s=r.requestType;switch(E(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(r.mfaInfo,n,"internal-error");default:E(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=en._fromServerResponse(Ge(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function un(e,t){const{data:n}=await cn((0,i.Ku)(e),t);return n.email}async function ln(e,t,n){var r;const i=Ge(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"signUpPassword");o=Ft(i,e)}else o=Ft(i,s).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await qe(i,s,"signUpPassword");return Ft(i,e)}return Promise.reject(e)});const a=await o.catch(e=>Promise.reject(e)),c=await Vt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function hn(e,t,n){return Qt((0,i.Ku)(e),St.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e,t,n){var r;const i=Ge(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){E(t.handleCodeInApp,i,"argument-error"),t&&rn(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}else o(s,n),await ct(i,s).catch(async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await qe(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}})}function fn(e,t){const n=Et.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function pn(e,t,n){const r=(0,i.Ku)(e),s=St.credentialWithLink(t,n||k());return E(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t){return V(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){const n=A()?k():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await mn((0,i.Ku)(e),r);return s||[]}async function vn(e,t){const n=(0,i.Ku)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&rn(n.auth,s,t);const{email:o}=await ot(n.auth,s);o!==e.email&&await e.reload()}async function yn(e,t,n){const r=(0,i.Ku)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&rn(r.auth,o,n);const{email:a}=await ut(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.Ku)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await J(r,wn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function _n(e,t){return Tn((0,i.Ku)(e),t,null)}function In(e,t){return Tn((0,i.Ku)(e),null,t)}async function Tn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await J(e,nt(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Y(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new Sn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new kn(s,i);case"github.com":return new An(s,i);case"google.com":return new xn(s,i);case"twitter.com":return new Dn(s,i,e.screenName||null);case"custom":case"anonymous":return new Sn(s,null);default:return new Sn(s,r,i)}}class Sn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Cn extends Sn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class kn extends Sn{constructor(e,t){super(e,"facebook.com",t)}}class An extends Cn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class xn extends Sn{constructor(e,t){super(e,"google.com",t)}}class Dn extends Cn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Nn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:En(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new On("enroll",e,t)}static _fromMfaPendingCredential(e){return new On("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return On._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return On._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ge(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>en._fromServerResponse(n,e));E(r.mfaPendingCredential,n,"internal-error");const s=On._fromMfaPendingCredential(r.mfaPendingCredential);return new Rn(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Vt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return E(t.user,n,"internal-error"),Vt._forOperation(t.user,t.operationType,o);default:w(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Pn(e,t){var n;const r=(0,i.Ku)(e),s=t;return E(t.customData.operationType,r,"argument-error"),E(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Rn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Mn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Fn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Vn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function $n(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class Un{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>en._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new Un(e)}async getSession(){return On._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await J(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await J(this.user,$n(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const jn=new WeakMap;function Bn(e){const t=(0,i.Ku)(e);return jn.has(t)||jn.set(t,Un._fromUser(t)),jn.get(t)}const qn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qn,"1"),this.storage.removeItem(qn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){const e=(0,i.ZQ)();return ye(e)||Ee(e)}const Gn=1e3,Hn=10;class Wn extends zn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kn()&&xe(),this.fallbackToPolling=Ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ke()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Hn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Gn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wn.type="LOCAL";const Qn=Wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends zn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yn.type="SESSION";const Xn=Yn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Zn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Jn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.receivers=[];class tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=er("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function rr(e){nr().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return"undefined"!==typeof nr()["WorkerGlobalScope"]&&"function"===typeof nr()["importScripts"]}async function sr(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function or(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ar(){return ir()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="firebaseLocalStorageDb",ur=1,lr="firebaseLocalStorage",hr="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fr(e,t){return e.transaction([lr],t?"readwrite":"readonly").objectStore(lr)}function pr(){const e=indexedDB.deleteDatabase(cr);return new dr(e).toPromise()}function mr(){const e=indexedDB.open(cr,ur);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(lr,{keyPath:hr})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(lr)?t(n):(n.close(),await pr(),t(await mr()))})})}async function gr(e,t,n){const r=fr(e,!0).put({[hr]:t,value:n});return new dr(r).toPromise()}async function vr(e,t){const n=fr(e,!1).get(t),r=await new dr(n).toPromise();return void 0===r?null:r.value}function yr(e,t){const n=fr(e,!0).delete(t);return new dr(n).toPromise()}const wr=800,br=3;class _r{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await mr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>br)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ir()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zn._getInstance(ar()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sr(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&or()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mr();return await gr(e,qn,"1"),await yr(e,qn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gr(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>vr(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=fr(e,!1).getAll();return new dr(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}_r.type="LOCAL";const Ir=_r;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function Er(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}function Sr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=500,kr=6e4,Ar=1e12;class xr{constructor(e){this.auth=e,this.counter=Ar,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Dr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Ar;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Ar;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Ar;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Dr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;E(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=Nr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},kr)},Cr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Nr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=Ve("rcb"),Rr=new O(3e4,6e4),Pr="https://www.google.com/recaptcha/api.js?";class Lr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=nr().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return E(Mr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Re(nr().grecaptcha)?Promise.resolve(nr().grecaptcha):new Promise((n,r)=>{const s=nr().setTimeout(()=>{r(b(e,"network-request-failed"))},Rr.get());nr()[Or]=()=>{nr().clearTimeout(s),delete nr()[Or];const i=nr().grecaptcha;if(!i||!Re(i))return void r(b(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${Pr}?${(0,i.Am)({onload:Or,render:"explicit",hl:t})}`;Fe(o).catch(()=>{clearTimeout(s),r(b(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=nr().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Fr{async load(e){return new xr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="recaptcha",$r={theme:"light",type:"image"};class Ur{constructor(e,t=Object.assign({},$r),n){this.parameters=t,this.type=Vr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ge(n),this.isInvisible="invisible"===this.parameters.size,E("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;E(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Fr:new Lr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=nr()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(A()&&!ir(),this.auth,"internal-error"),await jr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Ne(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function jr(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=_t._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function qr(e,t,n){const r=Ge(e),s=await Gr(r,t,(0,i.Ku)(n));return new Br(s,e=>Qt(r,e))}async function zr(e,t,n){const r=(0,i.Ku)(e);await Gt(!1,r,"phone");const s=await Gr(r.auth,t,(0,i.Ku)(n));return new Br(s,e=>Yt(r,e))}async function Kr(e,t,n){const r=(0,i.Ku)(e),s=await Gr(r.auth,t,(0,i.Ku)(n));return new Br(s,e=>Xt(r,e))}async function Gr(e,t,n){var r;const i=await n.verify();try{let s;if(E("string"===typeof i,e,"argument-error"),E(n.type===Vr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){E("enroll"===t.type,e,"internal-error");const n=await Ln(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{E("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;E(n,e,"missing-multi-factor-info");const o=await Tr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await gt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Hr(e,t){await Kt((0,i.Ku)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.providerId=Wr.PROVIDER_ID,this.auth=Ge(e)}verifyPhoneNumber(e,t){return Gr(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return _t._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Wr.credentialFromTaggedObject(t)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?_t._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e,t){return t?he(t):(E(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wr.PROVIDER_ID="phone",Wr.PHONE_SIGN_IN_METHOD="phone";class Yr extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xr(e){return Wt(e.auth,new Yr(e),e.bypassAuthState)}function Jr(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),Ht(n,new Yr(e),e.bypassAuthState)}async function Zr(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),Kt(n,new Yr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xr;case"linkViaPopup":case"linkViaRedirect":return Zr;case"reauthViaPopup":case"reauthViaRedirect":return Jr;default:w(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new O(2e3,1e4);async function ni(e,t,n){const r=Ge(e);I(e,t,Ct);const i=Qr(r,n),s=new si(r,"signInViaPopup",t,i);return s.executeNotNull()}async function ri(e,t,n){const r=(0,i.Ku)(e);I(r.auth,t,Ct);const s=Qr(r.auth,n),o=new si(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function ii(e,t,n){const r=(0,i.Ku)(e);I(r.auth,t,Ct);const s=Qr(r.auth,n),o=new si(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class si extends ei{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,ti.get())};e()}}si.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oi="pendingRedirect",ai=new Map;class ci extends ei{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ai.get(this.auth._key());if(!e){try{const t=await ui(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ai.set(this.auth._key(),e)}return this.bypassAuthState||ai.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ui(e,t){const n=pi(t),r=fi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function li(e,t){return fi(e)._set(pi(t),"true")}function hi(){ai.clear()}function di(e,t){ai.set(e._key(),t)}function fi(e){return he(e._redirectPersistence)}function pi(e){return pe(oi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t,n){return gi(e,t,n)}async function gi(e,t,n){const r=Ge(e);I(e,t,Ct),await r._initializationPromise;const i=Qr(r,n);return await li(i,r),i._openRedirect(r,t,"signInViaRedirect")}function vi(e,t,n){return yi(e,t,n)}async function yi(e,t,n){const r=(0,i.Ku)(e);I(r.auth,t,Ct),await r.auth._initializationPromise;const s=Qr(r.auth,n);await li(s,r.auth);const o=await Ti(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function wi(e,t,n){return bi(e,t,n)}async function bi(e,t,n){const r=(0,i.Ku)(e);I(r.auth,t,Ct),await r.auth._initializationPromise;const s=Qr(r.auth,n);await Gt(!1,r,t.providerId),await li(s,r.auth);const o=await Ti(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function _i(e,t){return await Ge(e)._initializationPromise,Ii(e,t,!1)}async function Ii(e,t,n=!1){const r=Ge(e),i=Qr(r,t),s=new ci(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Ti(e){const t=er(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=6e5;class Si{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ai(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ki(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ei&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ci(e))}saveEventToCache(e){this.cachedEventUids.add(Ci(e)),this.lastProcessedEventTime=Date.now()}}function Ci(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ki({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ai(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ki(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ni=/^https?/;async function Oi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xi(e);for(const r of t)try{if(Ri(r))return}catch(n){}w(e,"unauthorized-domain")}function Ri(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ni.test(n))return!1;if(Di.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new O(3e4,6e4);function Li(){const e=nr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Mi(e){return new Promise((t,n)=>{var r,i,s;function o(){Li(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Li(),n(b(e,"network-request-failed"))},timeout:Pi.get()})}if(null===(i=null===(r=nr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=nr().gapi)||void 0===s?void 0:s.load)){const t=Ve("iframefcb");return nr()[t]=()=>{gapi.load?o():n(b(e,"network-request-failed"))},Fe(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw Fi=null,e})}let Fi=null;function Vi(e){return Fi=Fi||Mi(e),Fi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new O(5e3,15e3),Ui="__/auth/iframe",ji="emulator/auth/iframe",Bi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zi(e){const t=e.config;E(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,ji):`https://${e.config.authDomain}/${Ui}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=qi.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.Am)(r).slice(1)}`}async function Ki(e){const t=await Vi(e),n=nr().gapi;return E(n,e,"internal-error"),t.open({where:document.body,url:zi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bi,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=b(e,"network-request-failed"),s=nr().setTimeout(()=>{r(i)},$i.get());function o(){nr().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hi=500,Wi=600,Qi="_blank",Yi="http://localhost";class Xi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ji(e,t,n,r=Hi,s=Wi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gi),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=we(l)?Qi:n),ve(l)&&(t=t||Yi,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Ce(l)&&"_self"!==c)return Zi(t||"",c),new Xi(null);const d=window.open(t||"",c,h);E(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Xi(d)}function Zi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="__/auth/handler",ts="emulator/auth/handler",ns=encodeURIComponent("fac");async function rs(e,t,n,r,o,a){E(e.config.authDomain,e,"auth-domain-config-required"),E(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof Ct){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof kt){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];const l=await e._getAppCheckToken(),h=l?`#${ns}=${encodeURIComponent(l)}`:"";return`${is(e)}?${(0,i.Am)(u).slice(1)}${h}`}function is({config:e}){return e.emulator?R(e,ts):`https://${e.authDomain}/${es}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="webStorageSupport";class os{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xn,this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _openPopup(e,t,n,r){var i;C(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await rs(e,t,n,k(),r);return Ji(e,s,er())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await rs(e,t,n,k(),r);return rr(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ki(e),n=new Si(e);return t.register("authEvent",t=>{E(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ss,{type:ss},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ss];void 0!==i&&t(!!i),w(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Oi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ae()||ye()||Ee()}}const as=os;class cs{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class us extends cs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new us(e)}_finalizeEnroll(e,t,n){return Mn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Er(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ls{constructor(){}static assertion(e){return us._fromCredential(e)}}ls.FACTOR_ID="phone";class hs{static assertionForEnrollment(e,t){return ds._fromSecret(e,t)}static assertionForSignIn(e,t){return ds._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;E("undefined"!==typeof t.auth,"internal-error");const n=await Fn(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return fs._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}hs.FACTOR_ID="totp";class ds extends cs{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ds(t,void 0,e)}static _fromEnrollmentId(e,t){return new ds(t,e)}async _finalizeEnroll(e,t,n){return E("undefined"!==typeof this.secret,e,"argument-error"),Vn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){E(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Sr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class fs{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new fs(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(ps(e)||ps(t))&&(r=!0),r&&(ps(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),ps(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ps(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var ms="@firebase/auth",gs="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ws(e){(0,s._registerComponent)(new c.uA("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:De(e)},u=new Ke(r,i,s,c);return We(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),(0,s._registerComponent)(new c.uA("auth-internal",e=>{const t=Ge(e.getProvider("auth").getImmediate());return(e=>new vs(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(ms,gs,ys(e)),(0,s.registerVersion)(ms,gs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=300;(0,i.XA)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _s(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ws("Browser");const Is=2e3;async function Ts(e,t,n){var r;const{BuildInfo:i}=_s();C(t.sessionId,"AuthEvent did not contain a session ID");const s=await As(t.sessionId),o={};return Ee()?o["ibi"]=i.packageName:_e()?o["apn"]=i.packageName:w(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,rs(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function Es(e){const{BuildInfo:t}=_s(),n={};Ee()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:w(e,"operation-not-supported-in-this-environment"),await xi(e,n)}function Ss(e){const{cordova:t}=_s();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Se()?"_blank":"_system","location=yes"),n(i)})})}async function Cs(e,t,n){const{cordova:r}=_s();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(b(e,"redirect-cancelled-by-user"))},Is))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),_e()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function ks(e){var t,n,r,i,s,o,a,c,u,l;const h=_s();E("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),E("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),E("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function As(e){const t=xs(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function xs(e){if(C(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=20;class Ns extends Si{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Os(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Ms(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function Rs(e,t){return Fs()._set(Vs(e),t)}async function Ps(e){const t=await Fs()._get(Vs(e));return t&&await Fs()._remove(Vs(e)),t}function Ls(e,t){var n,r;const i=Us(t);if(i.includes("/__/auth/callback")){const t=js(i),s=t["firebaseError"]?$s(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Ms(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Ds;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Fs(){return he(Qn)}function Vs(e){return pe("authEvent",e.config.apiKey,e.name)}function $s(e){try{return JSON.parse(e)}catch(t){return null}}function Us(e){const t=js(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=js(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=js(i)["link"];return s||i||r||n||e}function js(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.I9)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=500;class qs{constructor(){this._redirectPersistence=Xn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Ns(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){w(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){ks(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),hi(),await this._originValidation(e);const s=Os(e,n,r);await Rs(e,s);const o=await Ts(e,s,t),a=await Ss(o);return Cs(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Es(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=_s(),s=setTimeout(async()=>{await Ps(e),t.onEvent(Ks())},Bs),o=async n=>{clearTimeout(s);const r=await Ps(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Ls(r,n["url"])),t.onEvent(i||Ks())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;_s().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const zs=qs;function Ks(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e,t){Ge(e)._logFramework(t)}var Hs="@firebase/auth-compat",Ws="0.4.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qs=1e3;function Ys(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Xs(){return"http:"===Ys()||"https:"===Ys()}function Js(e=(0,i.ZQ)()){return!("file:"!==Ys()&&"ionic:"!==Ys()&&"capacitor:"!==Ys()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Zs(){return(0,i.lV)()||(0,i.Ll)()}function eo(){return(0,i.lT)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function to(e=(0,i.ZQ)()){return/Edge\/\d+/.test(e)}function no(e=(0,i.ZQ)()){return eo()||to(e)}function ro(){try{const e=self.localStorage,t=er();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!no()||(0,i.zW)()}catch(e){return io()&&(0,i.zW)()}return!1}function io(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function so(){return(Xs()||(0,i.sr)()||Js())&&!Zs()&&ro()&&!io()}function oo(){return Js()&&"undefined"!==typeof document}async function ao(){return!!oo()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},Qs);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function co(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo={LOCAL:"local",NONE:"none",SESSION:"session"},lo=E,ho="persistence";function fo(e,t){lo(Object.values(uo).includes(t),e,"invalid-persistence-type"),(0,i.lV)()?lo(t!==uo.SESSION,e,"unsupported-persistence-type"):(0,i.Ll)()?lo(t===uo.NONE,e,"unsupported-persistence-type"):io()?lo(t===uo.NONE||t===uo.LOCAL&&(0,i.zW)(),e,"unsupported-persistence-type"):lo(t===uo.NONE||ro(),e,"unsupported-persistence-type")}async function po(e){await e._initializationPromise;const t=go(),n=pe(ho,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function mo(e,t){const n=go();if(!n)return[];const r=pe(ho,e,t),i=n.getItem(r);switch(i){case uo.NONE:return[fe];case uo.LOCAL:return[Ir,Xn];case uo.SESSION:return[Xn];default:return[]}}function go(){var e;try{return(null===(e=co())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=E;class yo{constructor(){this.browserResolver=he(as),this.cordovaResolver=he(zs),this.underlyingResolver=null,this._redirectPersistence=Xn,this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return oo()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return vo(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ao();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){return e.unwrap()}function bo(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){return To(e)}function Io(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new Co(e,Pn(e,t))}else if(r){const e=To(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function To(e){const{_tokenResponse:t}=e instanceof i.g?e.customData:e;if(!t)return null;if(!(e instanceof i.g)&&"temporaryProof"in t&&"phoneNumber"in t)return Wr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=Dt;break;case u.FACEBOOK:r=xt;break;case u.GITHUB:r=Nt;break;case u.TWITTER:r=Mt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?Rt._create(n,o):mt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new At(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.g?r.credentialFromError(e):r.credentialFromResult(e)}function Eo(e,t){return t.catch(t=>{throw t instanceof i.g&&Io(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:_o(e),additionalUserInfo:Nn(e),user:ko.getOrCreate(n)}})}async function So(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>Eo(e,n.confirm(t))}}class Co{constructor(e,t){this.resolver=t,this.auth=bo(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Eo(wo(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this._delegate=e,this.multiFactor=Bn(e)}static getOrCreate(e){return ko.USER_MAP.has(e)||ko.USER_MAP.set(e,new ko(e)),ko.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Eo(this.auth,Yt(this._delegate,e))}async linkWithPhoneNumber(e,t){return So(this.auth,zr(this._delegate,e,t))}async linkWithPopup(e){return Eo(this.auth,ii(this._delegate,e,yo))}async linkWithRedirect(e){return await po(Ge(this.auth)),wi(this._delegate,e,yo)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Eo(this.auth,Xt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return So(this.auth,Kr(this._delegate,e,t))}reauthenticateWithPopup(e){return Eo(this.auth,ri(this._delegate,e,yo))}async reauthenticateWithRedirect(e){return await po(Ge(this.auth)),vi(this._delegate,e,yo)}sendEmailVerification(e){return vn(this._delegate,e)}async unlink(e){return await zt(this._delegate,e),this}updateEmail(e){return _n(this._delegate,e)}updatePassword(e){return In(this._delegate,e)}updatePhoneNumber(e){return Hr(this._delegate,e)}updateProfile(e){return bn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return yn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ko.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ao=E;class xo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Ao(n,"invalid-api-key",{appName:e.name}),Ao(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?yo:void 0;this._delegate=t.initialize({options:{persistence:No(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ko.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Qe(this._delegate,e,t)}applyActionCode(e){return an(this._delegate,e)}checkActionCode(e){return cn(this._delegate,e)}confirmPasswordReset(e,t){return on(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Eo(this._delegate,ln(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return gn(this._delegate,e)}isSignInWithEmailLink(e){return fn(this._delegate,e)}async getRedirectResult(){Ao(so(),this._delegate,"operation-not-supported-in-this-environment");const e=await _i(this._delegate,yo);return e?Eo(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Gs(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=Do(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=Do(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return dn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return sn(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(fo(this._delegate,e),e){case uo.SESSION:t=Xn;break;case uo.LOCAL:const e=await he(Ir)._isAvailable();t=e?Ir:Qn;break;case uo.NONE:t=fe;break;default:return w("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Eo(this._delegate,Ut(this._delegate))}signInWithCredential(e){return Eo(this._delegate,Qt(this._delegate,e))}signInWithCustomToken(e){return Eo(this._delegate,Zt(this._delegate,e))}signInWithEmailAndPassword(e,t){return Eo(this._delegate,hn(this._delegate,e,t))}signInWithEmailLink(e,t){return Eo(this._delegate,pn(this._delegate,e,t))}signInWithPhoneNumber(e,t){return So(this._delegate,qr(this._delegate,e,t))}async signInWithPopup(e){return Ao(so(),this._delegate,"operation-not-supported-in-this-environment"),Eo(this._delegate,ni(this._delegate,e,yo))}async signInWithRedirect(e){return Ao(so(),this._delegate,"operation-not-supported-in-this-environment"),await po(this._delegate),mi(this._delegate,e,yo)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return un(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Do(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&ko.getOrCreate(e));return{next:s,error:t,complete:n}}function No(e,t){const n=mo(e,t);if("undefined"===typeof self||n.includes(Ir)||n.push(Ir),"undefined"!==typeof window)for(const r of[Qn,Xn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xo.Persistence=uo;class Oo{constructor(){this.providerId="phone",this._delegate=new Wr(wo(r.A.auth()))}static credential(e,t){return Wr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Oo.PHONE_SIGN_IN_METHOD=Wr.PHONE_SIGN_IN_METHOD,Oo.PROVIDER_ID=Wr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ro=E;class Po{constructor(e,t,n=r.A.app()){var i;Ro(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Ur(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="auth-compat";function Mo(e){e.INTERNAL.registerComponent(new c.uA(Lo,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new xo(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:St,FacebookAuthProvider:xt,GithubAuthProvider:Nt,GoogleAuthProvider:Dt,OAuthProvider:At,SAMLAuthProvider:Lt,PhoneAuthProvider:Oo,PhoneMultiFactorGenerator:ls,RecaptchaVerifier:Po,TwitterAuthProvider:Mt,Auth:xo,AuthCredential:et,Error:i.g}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Hs,Ws)}Mo(r.A)},743:function(e,t,n){n.d(t,{Am:function(){return j},Bd:function(){return E},FA:function(){return P},Fy:function(){return b},I9:function(){return B},Im:function(){return V},Ku:function(){return Z},Ll:function(){return T},T9:function(){return v},Uj:function(){return c},XA:function(){return y},ZQ:function(){return _},bD:function(){return $},cY:function(){return w},dM:function(){return N},eX:function(){return D},g:function(){return R},gR:function(){return F},hp:function(){return q},jZ:function(){return I},lT:function(){return k},lV:function(){return C},nr:function(){return A},p9:function(){return J},sr:function(){return S},tD:function(){return z},u:function(){return u},zW:function(){return x},zw:function(){return l}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/task-management-app/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function T(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function E(){return"object"===typeof self&&self.self===self}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){return!T()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function D(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function N(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?L(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function L(e,t){return e.replace(M,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(U(n)&&U(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){const n=new K(e,t);return n.subscribe.bind(n)}class K{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=H),void 0===r.error&&(r.error=H),void 0===r.complete&&(r.complete=H);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W=1e3,Q=2,Y=144e5,X=.5;function J(e,t=W,n=Q){const r=t*Math.pow(n,e),i=Math.round(X*r*(Math.random()-.5)*2);return Math.min(Y,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){return e&&e._delegate?e._delegate:e}},840:function(e,t,n){n.d(t,{A:function(){return v}});var r=n(743),i=n(125),s=n(928),o=n(424);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.uA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate)))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.FA("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.gR)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.gR)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.zw)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.zw)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.tD,ErrorFactory:r.FA,deepExtend:r.zw}),e}const d=h(),f=new o.Vy("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.13";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.Bd)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},889:function(e,t,n){var r=n(840),i=n(928),s=n(743),o=n(125);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="type.googleapis.com/google.protobuf.Int64Value",c="type.googleapis.com/google.protobuf.UInt64Value";function u(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function l(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"===typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>l(e));if("function"===typeof e||"object"===typeof e)return u(e,e=>l(e));throw new Error("Data cannot be encoded in JSON: "+e)}function h(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case a:case c:{const t=Number(e["value"]);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>h(e)):"function"===typeof e||"object"===typeof e?u(e,e=>h(e)):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d="functions",f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends s.g{constructor(e,t,n){super(`${d}/${e}`,t||""),this.details=n}}function m(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function g(e,t){let n,r=m(e),i=r;try{const e=t&&t.error;if(e){const t=e.status;if("string"===typeof t){if(!f[t])return new p("internal","internal");r=f[t],i=t}const s=e.message;"string"===typeof s&&(i=s),n=e.details,void 0!==n&&(n=h(n))}}catch(s){}return"ok"===r?null:new p(r,i,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(e=>this.auth=e,()=>{}),this.messaging||t.get().then(e=>this.messaging=e,()=>{}),this.appCheck||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null===e||void 0===e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken(e);return{authToken:t,messagingToken:n,appCheckToken:r}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y="us-central1";function w(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new p("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class b{constructor(e,t,n,r,i=y,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new v(t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{const e=new URL(i);this.customDomain=e.origin,this.region=y}catch(o){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){const n=this.emulatorOrigin;return`${n}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function _(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}function I(e,t,n){return r=>S(e,t,r,n||{})}function T(e,t,n){return r=>C(e,t,r,n||{})}async function E(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(o){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(o){}return{status:i.status,json:s}}function S(e,t,n,r){const i=e._url(t);return C(e,i,n,r)}async function C(e,t,n,r){n=l(n);const i={data:n},s={},o=await e.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s["Authorization"]="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),null!==o.appCheckToken&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,c=w(a),u=await Promise.race([E(t,i,s,e.fetchImpl),c.promise,e.cancelAllRequests]);if(c.cancel(),!u)throw new p("cancelled","Firebase Functions instance was deleted.");const d=g(u.status,u.json);if(d)throw d;if(!u.json)throw new p("internal","Response is not valid JSON object.");let f=u.json.data;if("undefined"===typeof f&&(f=u.json.result),"undefined"===typeof f)throw new p("internal","Response is missing data field.");const m=h(f);return{data:m}}const k="@firebase/functions",A="0.10.0",x="auth-internal",D="app-check-internal",N="messaging-internal";function O(e,t){const n=(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider(x),s=t.getProvider(N),o=t.getProvider(D);return new b(r,i,s,o,n,e)};(0,i._registerComponent)(new o.uA(d,n,"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(k,A,t),(0,i.registerVersion)(k,A,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t,n){_((0,s.Ku)(e),t,n)}function P(e,t,n){return I((0,s.Ku)(e),t,n)}function L(e,t,n){return T((0,s.Ku)(e),t,n)}O(fetch.bind(self));const M="@firebase/functions-compat",F="0.3.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e,t){this.app=e,this._delegate=t,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(e,t){return P(this._delegate,e,t)}httpsCallableFromURL(e,t){return L(this._delegate,e,t)}useFunctionsEmulator(e){const t=e.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(null==t)throw new s.g("functions","No origin provided to useFunctionsEmulator()");if(null==t[2])throw new s.g("functions","Port missing in origin provided to useFunctionsEmulator()");return R(this._delegate,t[1],Number(t[2]))}useEmulator(e,t){return R(this._delegate,e,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="us-central1",U=(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("functions").getImmediate({identifier:null!==t&&void 0!==t?t:$});return new V(n,r)};function j(){const e={Functions:V};r.A.INTERNAL.registerComponent(new o.uA("functions-compat",U,"PUBLIC").setServiceProps(e).setMultipleInstances(!0))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */j(),r.A.registerVersion(M,F)},928:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return s.g},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return be},getApps:function(){return _e},initializeApp:function(){return we},onLog:function(){return Ee},registerVersion:function(){return Te},setLogLevel:function(){return Se}});var r=n(125),i=n(424),s=n(743);const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),I(h.get(this))}:function(...t){return I(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}w(e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(D(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function D(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",O="0.9.13",R=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",$="@firebase/auth",U="@firebase/auth-compat",j="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",G="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.23.0",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[$]:"fire-auth",[U]:"fire-auth-compat",[j]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[G]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.FA("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ce.values())c.addComponent(r);const u=new ve(n,i,c);return ae.set(o,u),u}function be(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.T9)())return we();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Te(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}he(new r.uA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}function Ee(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Ey)(e,t)}function Se(e){(0,i.He)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="firebase-heartbeat-database",ke=1,Ae="firebase-heartbeat-store";let xe=null;function De(){return xe||(xe=E(Ce,ke,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch(e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})})),xe}async function Ne(e){try{const t=await De(),n=await t.transaction(Ae).objectStore(Ae).get(Re(e));return n}catch(t){if(t instanceof s.g)R.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function Oe(e,t){try{const n=await De(),r=n.transaction(Ae,"readwrite"),i=r.objectStore(Ae);await i.put(t,Re(e)),await r.done}catch(n){if(n instanceof s.g)R.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $e(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Ue(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ue(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ue(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){he(new r.uA("platform-logger",e=>new x(e),"PRIVATE")),he(new r.uA("heartbeat",e=>new Me(e),"PRIVATE")),Te(N,O,e),Te(N,O,"esm2017"),Te("fire-js","")}je("")},988:function(e,t,n){n.d(t,{A:function(){return r.A}});var r=n(840),i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.A.registerVersion(i,s,"app-compat")}}]);
//# sourceMappingURL=chunk-vendors.840cf318.js.map