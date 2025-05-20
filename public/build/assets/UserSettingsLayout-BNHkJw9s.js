import{d as $,c as _,a as S}from"./index-KMVAwozW.js";import{B as k,e as s,o as a,k as w,m as f,q as b,n as z,d as y,a as g,b as d,w as p,i as c,a9 as P,F as B,A as j,c as D,t as N}from"./app-Zf__d752.js";var I=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,T={root:function(i){var t=i.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},V={root:function(i){var t=i.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},A=k.extend({name:"divider",style:I,classes:V,inlineStyles:T}),C={name:"BaseDivider",extends:$,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:A,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},l(e)}function u(e,i,t){return(i=L(i))in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function L(e){var i=E(e,"string");return l(i)=="symbol"?i:i+""}function E(e,i){if(l(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,i);if(l(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}var m={name:"Divider",extends:C,inheritAttrs:!1,computed:{dataP:function(){return _(u(u(u({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},F=["aria-orientation","data-p"],q=["data-p"];function K(e,i,t,n,v,r){return a(),s("div",f({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout,"data-p":r.dataP},e.ptmi("root")),[e.$slots.default?(a(),s("div",f({key:0,class:e.cx("content"),"data-p":r.dataP},e.ptm("content")),[b(e.$slots,"default")],16,q)):w("",!0)],16,F)}m.render=K;const M={class:"flex flex-col gap-6 lg:gap-8 lg:flex-row"},O={class:"w-full md:max-w-2xl lg:w-48"},R={class:"flex flex-col space-x-0 space-y-1"},U={class:"flex-1 md:max-w-2xl"},J={__name:"UserSettingsLayout",setup(e){const i=z(),t=y(()=>(i.url,route().current())),n=y(()=>[{title:"Profile",route:route("profile.edit"),active:t.value=="profile.edit"},{title:"Password",route:route("password.edit"),active:t.value=="password.edit"},{title:"Appearance",route:route("appearance"),active:t.value=="appearance"}]);return(v,r)=>{const h=m,x=S;return a(),s("div",null,[g(P,null,{title:p(()=>r[0]||(r[0]=[c(" Settings ")])),subTitle:p(()=>r[1]||(r[1]=[c(" Manage your profile and account settings ")])),_:1}),g(h,{class:"my-8"}),d("div",M,[d("aside",O,[d("nav",R,[(a(!0),s(B,null,j(n.value,o=>(a(),D(x,{key:o.route,"pt:root:class":"flex items-center justify-start no-underline",severity:o.active?"secondary":"",variant:o.active?"outlined":"text",href:o.route,as:"InertiaLink"},{default:p(()=>[c(N(o.title),1)]),_:2},1032,["severity","variant","href"]))),128))])]),d("section",U,[b(v.$slots,"default")])])])}}};export{J as _};
