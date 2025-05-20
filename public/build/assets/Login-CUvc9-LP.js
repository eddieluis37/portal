import{b as A,c as F,a as G}from"./index-KMVAwozW.js";import{e as S,o as l,b as c,m as h,B as N,l as O,p as L,r as f,q,c as b,k as m,s as M,f as H,C as E,g as R,h as U,w as u,a as d,i as g,t as y,j as D,u as a}from"./app-Zf__d752.js";import{s as K}from"./index-CFtyyahN.js";import{a as W,s as Z}from"./index-CSwW9ZDC.js";import{s as J}from"./index-B4ZtG5eK.js";import{s as Q}from"./index-CJfKup4y.js";import{_ as X}from"./GuestAuthLayout-C6GlZN1H.js";import"./index-CkEF_yyc.js";import"./ApplicationLogo-1mCcn0R0.js";var B={name:"MinusIcon",extends:A};function Y(e,n,o,i,r,t){return l(),S("svg",h({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[c("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}B.render=Y;var ee=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,ne={root:function(n){var o=n.instance,i=n.props;return["p-checkbox p-component",{"p-checkbox-checked":o.checked,"p-disabled":i.disabled,"p-invalid":o.$pcCheckboxGroup?o.$pcCheckboxGroup.$invalid:o.$invalid,"p-variant-filled":o.$variant==="filled","p-checkbox-sm p-inputfield-sm":i.size==="small","p-checkbox-lg p-inputfield-lg":i.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},oe=N.extend({name:"checkbox",style:ee,classes:ne}),te={name:"BaseCheckbox",extends:W,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:oe,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function k(e){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},k(e)}function ie(e,n,o){return(n=re(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function re(e){var n=ae(e,"string");return k(n)=="symbol"?n:n+""}function ae(e,n){if(k(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,n);if(k(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ce(e){return ue(e)||de(e)||le(e)||se()}function se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(e,n){if(e){if(typeof e=="string")return v(e,n);var o={}.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?v(e,n):void 0}}function de(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ue(e){if(Array.isArray(e))return v(e)}function v(e,n){(n==null||n>e.length)&&(n=e.length);for(var o=0,i=Array(n);o<n;o++)i[o]=e[o];return i}var I={name:"Checkbox",extends:te,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var o=n==="root"?this.ptmi:this.ptm;return o(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var o=this;if(!this.disabled&&!this.readonly){var i=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,r;this.binary?r=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?r=i.filter(function(t){return!L(t,o.value)}):r=i?[].concat(ce(i),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(r,n):this.writeValue(r,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var o,i;this.$emit("blur",n),(o=(i=this.formField).onBlur)===null||o===void 0||o.call(i,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:O(this.value,n)},dataP:function(){return F(ie({invalid:this.$invalid,checked:this.checked,disabled:this.disabled,filled:this.$variant==="filled"},this.size,this.size))}},components:{CheckIcon:K,MinusIcon:B}},he=["data-p-checked","data-p-indeterminate","data-p-disabled","data-p"],be=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"],pe=["data-p"];function ke(e,n,o,i,r,t){var x=f("CheckIcon"),p=f("MinusIcon");return l(),S("div",h({class:e.cx("root")},t.getPTOptions("root"),{"data-p-checked":t.checked,"data-p-indeterminate":r.d_indeterminate||void 0,"data-p-disabled":e.disabled,"data-p":t.dataP}),[c("input",h({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:t.groupName,checked:t.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,"aria-checked":r.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return t.onFocus&&t.onFocus.apply(t,arguments)}),onBlur:n[1]||(n[1]=function(){return t.onBlur&&t.onBlur.apply(t,arguments)}),onChange:n[2]||(n[2]=function(){return t.onChange&&t.onChange.apply(t,arguments)})},t.getPTOptions("input")),null,16,be),c("div",h({class:e.cx("box")},t.getPTOptions("box"),{"data-p":t.dataP}),[q(e.$slots,"icon",{checked:t.checked,indeterminate:r.d_indeterminate,class:M(e.cx("icon")),dataP:t.dataP},function(){return[t.checked?(l(),b(x,h({key:0,class:e.cx("icon")},t.getPTOptions("icon"),{"data-p":t.dataP}),null,16,["class","data-p"])):r.d_indeterminate?(l(),b(p,h({key:1,class:e.cx("icon")},t.getPTOptions("icon"),{"data-p":t.dataP}),null,16,["class","data-p"])):m("",!0)]})],16,pe)],16,he)}I.render=ke;const me={class:"flex flex-col gap-2"},fe={class:"flex flex-col gap-2"},xe={class:"flex items-center justify-between"},ge={class:"flex items-center"},ye={class:"flex justify-end items-center gap-4 pt-2"},ze={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(e){const n=H("email-input"),o=E({email:"",password:"",remember:!1}),i=()=>{o.post(route("login"),{onFinish:()=>o.reset("password")})};return R(()=>{n.value.$el.focus()}),(r,t)=>{const x=f("InertiaHead"),p=Q,z=Z,V=J,T=I,$=G,j=f("InertiaLink");return l(),b(X,null,U({default:u(()=>{var w,C,_,P;return[d(x,{title:"Log in"}),c("form",{class:"space-y-6",onSubmit:D(i,["prevent"])},[c("div",me,[t[3]||(t[3]=c("label",{for:"email"},"Email",-1)),d(z,{id:"email",ref:"email-input",modelValue:a(o).email,"onUpdate:modelValue":t[0]||(t[0]=s=>a(o).email=s),invalid:!!((w=a(o).errors)!=null&&w.email),type:"email",autocomplete:"username",required:"",fluid:""},null,8,["modelValue","invalid"]),(C=a(o).errors)!=null&&C.email?(l(),b(p,{key:0,severity:"error",variant:"simple",size:"small"},{default:u(()=>{var s;return[g(y((s=a(o).errors)==null?void 0:s.email),1)]}),_:1})):m("",!0)]),c("div",fe,[t[4]||(t[4]=c("label",{for:"password"},"Password",-1)),d(V,{id:"password",modelValue:a(o).password,"onUpdate:modelValue":t[1]||(t[1]=s=>a(o).password=s),invalid:!!((_=a(o).errors)!=null&&_.password),feedback:!1,autocomplete:"current-password",toggleMask:"",required:"",fluid:""},null,8,["modelValue","invalid"]),(P=a(o).errors)!=null&&P.password?(l(),b(p,{key:0,severity:"error",variant:"simple",size:"small"},{default:u(()=>{var s;return[g(y((s=a(o).errors)==null?void 0:s.password),1)]}),_:1})):m("",!0)]),c("div",null,[c("div",xe,[c("div",ge,[d(T,{id:"remember",modelValue:a(o).remember,"onUpdate:modelValue":t[2]||(t[2]=s=>a(o).remember=s),class:"mr-2",binary:!0},null,8,["modelValue"]),t[5]||(t[5]=c("label",{for:"remember"},"Remember me",-1))])])]),c("div",ye,[e.canResetPassword?(l(),b(j,{key:0,href:r.route("password.request")},{default:u(()=>[d($,{class:"p-0",variant:"link",label:"Forgot your password?"})]),_:1},8,["href"])):m("",!0),d($,{loading:a(o).processing,type:"submit",label:"Log In"},null,8,["loading"])])],32)]}),_:2},[e.status?{name:"message",fn:u(()=>[d(p,{severity:"success",closable:!1,class:"shadow-sm"},{default:u(()=>[g(y(e.status),1)]),_:1})]),key:"0"}:void 0]),1024)}}};export{ze as default};
