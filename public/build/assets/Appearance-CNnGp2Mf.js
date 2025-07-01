import{s as D}from"./index-BdGk_e3J.js";import{_ as K}from"./AppLayout-CdWpWhko.js";import{_ as j}from"./UserSettingsLayout-C2h54d71.js";import{N as V,O as x,R as P,P as T,Q as $,S as B,T as E,U as R,j as v,k as u,l as d,M as S,V as q,J as N,W as p,A as L,X as k,Y as y,y as A,F,Z as H,z as f,G as U,q as g,i as W,r as Y,_ as Z,H as _,$ as G,u as m,a0 as J,b as Q,a1 as X,p as b}from"./app-OIQOwgQc.js";import{c as O}from"./createLucideIcon-Bg94YCyA.js";import"./settings-DqBOV_MH.js";import"./ApplicationLogo-DCWaatbj.js";/**
 * @license lucide-vue-next v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=O("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=O("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=O("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);var nt=V`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }
`,lt={root:function(e){var o=e.instance,a=e.props;return["p-togglebutton p-component",{"p-togglebutton-checked":o.active,"p-invalid":o.$invalid,"p-togglebutton-sm p-inputfield-sm":a.size==="small","p-togglebutton-lg p-inputfield-lg":a.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},at=x.extend({name:"togglebutton",style:nt,classes:lt}),rt={name:"BaseToggleButton",extends:T,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:at,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}function it(t,e,o){return(e=st(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function st(t){var e=ut(t,"string");return h(e)=="symbol"?e:e+""}function ut(t,e){if(h(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var a=o.call(t,e);if(h(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var C={name:"ToggleButton",extends:rt,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(e){var o=e==="root"?this.ptmi:this.ptm;return o(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit("change",e))},onBlur:function(e){var o,a;(o=(a=this.formField).onBlur)===null||o===void 0||o.call(a,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return B(this.onLabel)&&B(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return $(it({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:P}},dt=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],ct=["data-p"];function gt(t,e,o,a,i,n){var r=E("ripple");return R((u(),v("button",p({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.d_value,onClick:e[0]||(e[0]=function(){return n.onChange&&n.onChange.apply(n,arguments)}),onBlur:e[1]||(e[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)})},n.getPTOptions("root"),{"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"data-p-checked":n.active,"data-p-disabled":t.disabled,"data-p":n.dataP}),[d("span",p({class:t.cx("content")},n.getPTOptions("content"),{"data-p":n.dataP}),[S(t.$slots,"default",{},function(){return[S(t.$slots,"icon",{value:t.d_value,class:q(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(u(),v("span",p({key:0,class:[t.cx("icon"),t.d_value?t.onIcon:t.offIcon]},n.getPTOptions("icon")),null,16)):N("",!0)]}),d("span",p({class:t.cx("label")},n.getPTOptions("label")),L(n.label),17)]})],16,ct)],16,dt)),[[r]])}C.render=gt;var pt=V`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,bt={root:function(e){var o=e.instance;return["p-selectbutton p-component",{"p-invalid":o.$invalid}]}},ft=x.extend({name:"selectbutton",style:pt,classes:bt}),ht={name:"BaseSelectButton",extends:T,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:ft,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function yt(t,e){var o=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=z(t))||e){o&&(t=o);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n,r=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var c=o.next();return r=c.done,c},e:function(c){l=!0,n=c},f:function(){try{r||o.return==null||o.return()}finally{if(l)throw n}}}}function mt(t){return St(t)||kt(t)||z(t)||vt()}function vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(t,e){if(t){if(typeof t=="string")return w(t,e);var o={}.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?w(t,e):void 0}}function kt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function St(t){if(Array.isArray(t))return w(t)}function w(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,a=Array(e);o<e;o++)a[o]=t[o];return a}var I={name:"SelectButton",extends:ht,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(e){return this.optionLabel?y(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?y(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?y(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?y(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var o=this.isSelected(e);return this.multiple?o&&this.d_value.length===1:o},onOptionSelect:function(e,o,a){var i=this;if(!(this.disabled||this.isOptionDisabled(o)||this.isOptionReadonly(o))){var n=this.isSelected(o),r=this.getOptionValue(o),l;if(this.multiple)if(n){if(l=this.d_value.filter(function(s){return!k(s,r,i.equalityKey)}),!this.allowEmpty&&l.length===0)return}else l=this.d_value?[].concat(mt(this.d_value),[r]):[r];else{if(n&&!this.allowEmpty)return;l=n?null:r}this.writeValue(l,e),this.$emit("change",{event:e,value:l})}},isSelected:function(e){var o=!1,a=this.getOptionValue(e);if(this.multiple){if(this.d_value){var i=yt(this.d_value),n;try{for(i.s();!(n=i.n()).done;){var r=n.value;if(k(r,a,this.equalityKey)){o=!0;break}}}catch(l){i.e(l)}finally{i.f()}}}else o=k(this.d_value,a,this.equalityKey);return o}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return $({invalid:this.$invalid})}},directives:{ripple:P},components:{ToggleButton:C}},_t=["aria-labelledby","data-p"];function wt(t,e,o,a,i,n){var r=A("ToggleButton");return u(),v("div",p({class:t.cx("root"),role:"group","aria-labelledby":t.ariaLabelledby},t.ptmi("root"),{"data-p":n.dataP}),[(u(!0),v(F,null,H(t.options,function(l,s){return u(),f(r,{key:n.getOptionRenderKey(l),modelValue:n.isSelected(l),onLabel:n.getOptionLabel(l),offLabel:n.getOptionLabel(l),disabled:t.disabled||n.isOptionDisabled(l),unstyled:t.unstyled,size:t.size,readonly:n.isOptionReadonly(l),onChange:function(M){return n.onOptionSelect(M,l,s)},pt:t.ptm("pcToggleButton")},U({_:2},[t.$slots.option?{name:"default",fn:g(function(){return[S(t.$slots,"option",{option:l,index:s},function(){return[d("span",p({ref_for:!0},t.ptm("pcToggleButton").label),L(n.getOptionLabel(l)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,_t)}I.render=wt;const Lt={__name:"SelectColorModeButton",setup(t){const e=W("colorMode"),o=Y(e.value),a=[{label:"Light",value:"light",icon:ot},{label:"Dark",value:"dark",icon:et},{label:"System",value:"auto",icon:tt}];return Z(()=>e.value=o.value),(i,n)=>{const r=I;return u(),f(r,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=l=>o.value=l),options:a,allowEmpty:!1,optionLabel:"label",optionValue:"value"},{option:g(({option:l})=>[(u(),f(G(l.icon))),_(" "+L(l.label),1)]),_:1},8,["modelValue"])}}},Ot={__name:"ThemePresetSelector",setup(t){const{presets:e,selectedPreset:o,setPreset:a}=J();return(i,n)=>{const r=X;return u(),f(r,{modelValue:m(o),"onUpdate:modelValue":n[0]||(n[0]=l=>Q(o)?o.value=l:null),options:m(e),optionLabel:"label",optionValue:"value",onChange:n[1]||(n[1]=l=>m(a)(m(o)))},null,8,["modelValue","options"])}}},Bt={class:"space-y-6"},Vt={class:"flex flex-col gap-2"},xt={class:"flex flex-col gap-2"},Mt={__name:"Appearance",setup(t){return(e,o)=>{const a=A("InertiaHead"),i=D;return u(),f(K,null,{default:g(()=>[b(a,{title:"Appearance Settings"}),b(j,null,{default:g(()=>[b(i,{"pt:body:class":"max-w-2xl space-y-3","pt:caption:class":"space-y-1"},{title:g(()=>o[0]||(o[0]=[_(" Appearance settings ")])),subtitle:g(()=>o[1]||(o[1]=[_(" Update your account's appearance settings ")])),content:g(()=>[d("div",Bt,[d("div",Vt,[o[2]||(o[2]=d("label",{for:"color-mode-selector"},"Color Mode",-1)),b(Lt,{id:"color-mode-selector"})]),d("div",xt,[o[3]||(o[3]=d("label",{for:"theme-preset-selector"},"Theme",-1)),b(Ot,{id:"theme-preset-selector"})])])]),_:1})]),_:1})]),_:1})}}};export{Mt as default};
