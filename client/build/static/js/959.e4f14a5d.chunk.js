"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[959],{6959:function(e,t,n){n.r(t);var r=n(7313),s=n(9666),i=n(1682),a=n(8197),o=n(9624),l=n(6370),c=n(6417);t.default=()=>{const[e,t]=(0,r.useState)("");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,c.jsx)(o.Z,{span:8,align:"center",children:(0,c.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,value:e,onChange:e=>{t(e.target.value)},label:"Nombre",variant:"standard"})}),(0,c.jsx)(o.Z,{span:8,align:"center",children:(0,c.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"CIF/DNI",variant:"standard"})})]}),(0,c.jsxs)(a.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,c.jsx)(o.Z,{span:8,align:"center",children:(0,c.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Cantidad IVa",variant:"standard"})}),(0,c.jsx)(o.Z,{span:8,align:"center",children:(0,c.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Cuota Mensual",variant:"standard"})})]}),(0,c.jsxs)(a.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,c.jsx)(o.Z,{span:8,align:"center",children:(0,c.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Nombre",variant:"standard"})}),(0,c.jsx)(o.Z,{span:8,align:"center",children:(0,c.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Cuota Mensual",variant:"standard"})})]}),(0,c.jsx)(a.Z,{style:{justifyContent:"center"},children:(0,c.jsx)(l.ZP,{type:"primary",onClick:()=>{""==e?i.Z.warning({description:"Campo de entrada!",placement:"bottomRight",duration:2}):i.Z.success({description:" Guardar \xe9xito!",placement:"bottomRight",duration:2})},children:"Guardar"})})]})}},6284:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7313),s=n(3233);let i;const a=()=>{if(!(0,s.Z)()||!window.document.documentElement)return!1;if(void 0!==i)return i;const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div"));const t=document.createElement("div");return t.style.position="absolute",t.style.zIndex="-9999",t.appendChild(e),document.body.appendChild(t),i=1===e.scrollHeight,document.body.removeChild(t),i};var o=()=>{const[e,t]=r.useState(!1);return r.useEffect((()=>{t(a())}),[]),e}},7041:function(e,t,n){n.d(t,{Z:function(){return a},c:function(){return i}});var r=n(7313),s=n(1768);const i=["xxl","xl","lg","md","sm","xs"];function a(){const[,e]=(0,s.Z)(),t=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const t=e,n=[].concat(i).reverse();return n.forEach(((e,r)=>{const s=e.toUpperCase(),i=`screen${s}Min`,a=`screen${s}`;if(!(t[i]<=t[a]))throw new Error(`${i}<=${a} fails : !(${t[i]}<=${t[a]})`);if(r<n.length-1){const e=`screen${s}Max`;if(!(t[a]<=t[e]))throw new Error(`${a}<=${e} fails : !(${t[a]}<=${t[e]})`);const i=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[i]))throw new Error(`${e}<=${i} fails : !(${t[e]}<=${t[i]})`)}})),e})(e));return r.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch(t){return r=t,e.forEach((e=>e(r))),e.size>=1},subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],s=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},i=window.matchMedia(n);i.addListener(s),this.matchHandlers[n]={mql:i,listener:s},s(i)}))},responsiveMap:t}}),[e])}},9624:function(e,t,n){var r=n(6297);t.Z=r.Z},6223:function(e,t,n){const r=(0,n(7313).createContext)({});t.Z=r},6297:function(e,t,n){var r=n(6123),s=n.n(r),i=n(7313),a=n(4714),o=n(6223),l=n(2358),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};const d=["xs","sm","md","lg","xl","xxl"],u=i.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:r}=i.useContext(a.E_),{gutter:u,wrap:f,supportFlexGap:p}=i.useContext(o.Z),{prefixCls:m,span:$,order:x,offset:h,push:y,pull:g,className:b,children:j,flex:v,style:w}=e,C=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),Z=n("col",m),[O,E]=(0,l.c)(Z);let M={};d.forEach((t=>{let n={};const s=e[t];"number"===typeof s?n.span=s:"object"===typeof s&&(n=s||{}),delete C[t],M=Object.assign(Object.assign({},M),{[`${Z}-${t}-${n.span}`]:void 0!==n.span,[`${Z}-${t}-order-${n.order}`]:n.order||0===n.order,[`${Z}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${Z}-${t}-push-${n.push}`]:n.push||0===n.push,[`${Z}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${Z}-${t}-flex-${n.flex}`]:n.flex||"auto"===n.flex,[`${Z}-rtl`]:"rtl"===r})}));const S=s()(Z,{[`${Z}-${$}`]:void 0!==$,[`${Z}-order-${x}`]:x,[`${Z}-offset-${h}`]:h,[`${Z}-push-${y}`]:y,[`${Z}-pull-${g}`]:g},b,M,E),I={};if(u&&u[0]>0){const e=u[0]/2;I.paddingLeft=e,I.paddingRight=e}if(u&&u[1]>0&&!p){const e=u[1]/2;I.paddingTop=e,I.paddingBottom=e}return v&&(I.flex=function(e){return"number"===typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}(v),!1!==f||I.minWidth||(I.minWidth=0)),O(i.createElement("div",Object.assign({},C,{style:Object.assign(Object.assign({},I),w),className:S,ref:t}),j))}));t.Z=u},4268:function(e,t,n){var r=n(6123),s=n.n(r),i=n(7313),a=n(4714),o=n(6284),l=n(7041),c=n(6223),d=n(2358),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function f(e,t){const[n,r]=i.useState("string"===typeof e?e:"");return i.useEffect((()=>{(()=>{if("string"===typeof e&&r(e),"object"===typeof e)for(let n=0;n<l.c.length;n++){const s=l.c[n];if(!t[s])continue;const i=e[s];if(void 0!==i)return void r(i)}})()}),[JSON.stringify(e),t]),n}const p=i.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:p,className:m,style:$,children:x,gutter:h=0,wrap:y}=e,g=u(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:b,direction:j}=i.useContext(a.E_),[v,w]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[C,Z]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),O=f(p,C),E=f(r,C),M=(0,o.Z)(),S=i.useRef(h),I=(0,l.Z)();i.useEffect((()=>{const e=I.subscribe((e=>{Z(e);const t=S.current||0;(!Array.isArray(t)&&"object"===typeof t||Array.isArray(t)&&("object"===typeof t[0]||"object"===typeof t[1]))&&w(e)}));return()=>I.unsubscribe(e)}),[]);const W=b("row",n),[k,G]=(0,d.V)(W),L=(()=>{const e=[void 0,void 0];return(Array.isArray(h)?h:[h,void 0]).forEach(((t,n)=>{if("object"===typeof t)for(let r=0;r<l.c.length;r++){const s=l.c[r];if(v[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),N=s()(W,{[`${W}-no-wrap`]:!1===y,[`${W}-${E}`]:E,[`${W}-${O}`]:O,[`${W}-rtl`]:"rtl"===j},m,G),P={},_=null!=L[0]&&L[0]>0?L[0]/-2:void 0,R=null!=L[1]&&L[1]>0?L[1]/-2:void 0;_&&(P.marginLeft=_,P.marginRight=_),M?[,P.rowGap]=L:R&&(P.marginTop=R,P.marginBottom=R);const[X,A]=L,B=i.useMemo((()=>({gutter:[X,A],wrap:y,supportFlexGap:M})),[X,A,y,M]);return k(i.createElement(c.Z.Provider,{value:B},i.createElement("div",Object.assign({},g,{className:N,style:Object.assign(Object.assign({},P),$),ref:t}),x)))}));t.Z=p},2358:function(e,t,n){n.d(t,{V:function(){return l},c:function(){return c}});var r=n(6122),s=n(3239);const i=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},a=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},o=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,s={};for(let i=r;i>=0;i--)0===i?(s[`${n}${t}-${i}`]={display:"none"},s[`${n}-push-${i}`]={insetInlineStart:"auto"},s[`${n}-pull-${i}`]={insetInlineEnd:"auto"},s[`${n}${t}-push-${i}`]={insetInlineStart:"auto"},s[`${n}${t}-pull-${i}`]={insetInlineEnd:"auto"},s[`${n}${t}-offset-${i}`]={marginInlineStart:0},s[`${n}${t}-order-${i}`]={order:0}):(s[`${n}${t}-${i}`]={display:"block",flex:`0 0 ${i/r*100}%`,maxWidth:i/r*100+"%"},s[`${n}${t}-push-${i}`]={insetInlineStart:i/r*100+"%"},s[`${n}${t}-pull-${i}`]={insetInlineEnd:i/r*100+"%"},s[`${n}${t}-offset-${i}`]={marginInlineStart:i/r*100+"%"},s[`${n}${t}-order-${i}`]={order:i});return s})(e,t),l=(0,r.Z)("Grid",(e=>[i(e)])),c=(0,r.Z)("Grid",(e=>{const t=(0,s.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[a(t),o(t,""),o(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},o(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},8197:function(e,t,n){var r=n(4268);t.Z=r.Z}}]);