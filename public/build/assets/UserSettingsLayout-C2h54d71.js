import{N as _,O as S,a7 as k,Q as z,j as s,k as n,J as w,W as f,M as b,B as P,f as y,p as g,l,q as p,H as c,aq as $,F as B,Z as j,z as N,A as D,v as I}from"./app-OIQOwgQc.js";var T=_`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
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
`,V={root:function(i){var e=i.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},A={root:function(i){var e=i.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},C=S.extend({name:"divider",style:T,classes:A,inlineStyles:V}),L={name:"BaseDivider",extends:k,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:C,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},d(t)}function u(t,i,e){return(i=q(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function q(t){var i=E(t,"string");return d(i)=="symbol"?i:i+""}function E(t,i){if(d(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,i);if(d(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}var m={name:"Divider",extends:L,inheritAttrs:!1,computed:{dataP:function(){return z(u(u(u({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},F=["aria-orientation","data-p"],M=["data-p"];function O(t,i,e,o,v,r){return n(),s("div",f({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout,"data-p":r.dataP},t.ptmi("root")),[t.$slots.default?(n(),s("div",f({key:0,class:t.cx("content"),"data-p":r.dataP},t.ptm("content")),[b(t.$slots,"default")],16,M)):w("",!0)],16,F)}m.render=O;const H={class:"flex flex-col gap-6 lg:gap-8 lg:flex-row"},J={class:"w-full md:max-w-2xl lg:w-48"},K={class:"flex flex-col space-x-0 space-y-1"},Q={class:"flex-1 md:max-w-2xl"},U={__name:"UserSettingsLayout",setup(t){const i=P(),e=y(()=>(i.url,route().current())),o=y(()=>[{title:"Profile",route:route("profile.edit"),active:e.value=="profile.edit"},{title:"Password",route:route("password.edit"),active:e.value=="password.edit"},{title:"Appearance",route:route("appearance"),active:e.value=="appearance"}]);return(v,r)=>{const h=m,x=I;return n(),s("div",null,[g($,null,{title:p(()=>r[0]||(r[0]=[c(" Settings ")])),subTitle:p(()=>r[1]||(r[1]=[c(" Manage your profile and account settings ")])),_:1}),g(h,{class:"my-8"}),l("div",H,[l("aside",J,[l("nav",K,[(n(!0),s(B,null,j(o.value,a=>(n(),N(x,{key:a.route,"pt:root:class":"flex items-center justify-start no-underline",severity:a.active?"secondary":"",variant:a.active?"outlined":"text",href:a.route,as:"InertiaLink"},{default:p(()=>[c(D(a.title),1)]),_:2},1032,["severity","variant","href"]))),128))])]),l("section",Q,[b(v.$slots,"default")])])])}}};export{U as _};
