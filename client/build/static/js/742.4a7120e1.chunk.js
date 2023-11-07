"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[742],{5184:function(e,t,n){var r=n(5898),a=n(6417);t.Z=()=>(0,a.jsx)(r.Z,{direction:"row",justifyContent:"space-between"})},6013:function(e,t,n){var r=n(7829),a=n(922),i=n(6417);t.Z=e=>{let{children:t,...n}=e;return(0,i.jsx)(a.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,children:(0,i.jsx)(r.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})})}},7547:function(e,t,n){const r=(0,n(7592).ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh"}}));t.Z=r},6742:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(9019),a=n(7547),i=n(6013),o=n(7313),s=n(8119),l=n(9099),c=n(2481),d=n(9666),u=n(2548),m=n(1405),p=n(891),h=n(7829),x=n(9137),b=n(1113),Z=n(178),g=n(7458),v=n(6159),f=n(6573),y=n(1682),j=n(7890),C=n(6287),w=n(6135),S=n(6417);const k=(0,g.Z)();var $=(0,w.$j)((e=>({wholeState:e})))((e=>{let{wholeState:t}=e;const[n,a]=(0,o.useState)(""),[i,g]=(0,o.useState)(""),[w,$]=(0,o.useState)(""),[W,P]=(0,o.useState)(""),[R,M]=(0,o.useState)([]),[I,G]=(0,o.useState)("");(0,o.useEffect)((()=>{V()}),[]);const V=async()=>{let e=(await f.Z.get(C.Z.API_URL+"api/users/clientlist")).data.data;console.log("whole client ",e),M(e)},N=(0,j.s0)();return(0,S.jsx)(v.Z,{theme:k,children:(0,S.jsxs)(Z.Z,{component:"main",maxWidth:"xs",children:[(0,S.jsx)(c.ZP,{}),(0,S.jsxs)(h.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,S.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,S.jsx)(x.Z,{})}),(0,S.jsx)(b.Z,{component:"h1",variant:"h5",children:"Inscribirse"}),(0,S.jsxs)(h.Z,{component:"form",noValidate:!0,onSubmit:e=>{if(e.preventDefault(),window.localStorage.setItem("name",n),window.localStorage.setItem("lname",i),""==n||""==i||""==w||""==W)return y.Z.warning({description:"Registro fallida!",placement:"bottomRight",duration:2});console.log("angency_id",I),f.Z.post(C.Z.API_URL+"api/users/register",{fname:n,lname:i,email:w,password:W,agency:"",consumption:.2,fee:6,agency_id:I}).then((()=>{y.Z.success({description:"Registro exitoso!",placement:"bottomRight",duration:2}),N("/");let e={client:I,user:n+" "+i+" has just registered!"};t.customization.socket.emit("Add User",e)})).catch((()=>y.Z.error({description:"Registro fallida!",placement:"bottomRight",duration:2})))},sx:{mt:3},children:[(0,S.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(d.Z,{autoComplete:"given-name",name:"fname",required:!0,fullWidth:!0,id:"firstName",label:"Nombre de pila",autoFocus:!0,onChange:e=>{a(e.target.value)}})}),(0,S.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(d.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Apellido",value:i,name:"lname",onChange:e=>{g(e.target.value)},autoComplete:"family-name"})}),(0,S.jsx)(r.ZP,{item:!0,xs:12,children:(0,S.jsx)(d.Z,{required:!0,fullWidth:!0,id:"email",label:"Correo electr\xf3nico",name:"email",value:w,onChange:e=>{$(e.target.value)},autoComplete:"email"})}),(0,S.jsx)(r.ZP,{item:!0,xs:12,children:(0,S.jsx)(d.Z,{required:!0,fullWidth:!0,name:"password",value:W,onChange:e=>{P(e.target.value)},label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"new-password"})}),(0,S.jsx)(r.ZP,{item:!0,xs:12,children:(0,S.jsx)(u.Z,{fullWidth:!0,labelId:"demo-simple-select-label",id:"demo-simple-select",value:I,onChange:e=>G(e.target.value),children:R.map((e=>(0,S.jsx)(m.Z,{value:e._id,children:e.id},e._id)))})})]}),(0,S.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Inscribirse"}),(0,S.jsx)(r.ZP,{container:!0,justifyContent:"flex-end",children:(0,S.jsx)(r.ZP,{item:!0,children:(0,S.jsx)(p.Z,{href:"/",variant:"body2",children:"Ya tienes una cuenta? Iniciar sesi\xf3n"})})})]})]})]})})})),W=n(5184);var P=()=>(0,S.jsx)(a.Z,{children:(0,S.jsxs)(r.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,S.jsx)(r.ZP,{item:!0,xs:12,children:(0,S.jsx)(r.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,S.jsx)(r.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,S.jsx)(i.Z,{children:(0,S.jsx)(r.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:(0,S.jsx)(r.ZP,{item:!0,xs:12,children:(0,S.jsx)($,{})})})})})})}),(0,S.jsx)(r.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,S.jsx)(W.Z,{})})]})})},9137:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5045)),i=n(6417),o=(0,a.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=o},178:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(3366),a=n(7462),i=n(7313),o=n(3061),s=n(114),l=n(2298),c=n(1921),d=n(4614);var u=(0,n(6541).ZP)(),m=n(5318),p=n(6417);const h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.Z)(),b=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),Z=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:x}),g=(e,t)=>{const{classes:n,fixed:r,disableGutters:a,maxWidth:i}=e,o={root:["root",i&&`maxWidth${(0,s.Z)(String(i))}`,r&&"fixed",a&&"disableGutters"]};return(0,c.Z)(o,(e=>(0,l.Z)(t,e)),n)};var v=n(1615),f=n(7592),y=n(7342);const j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=b,useThemeProps:n=Z,componentName:s="MuiContainer"}=e,l=t((e=>{let{theme:t,ownerState:n}=e;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:n}=e;return n.fixed&&Object.keys(t.breakpoints.values).reduce(((e,n)=>{const r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:`${a}${t.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:t,ownerState:n}=e;return(0,a.Z)({},"xs"===n.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},n.maxWidth&&"xs"!==n.maxWidth&&{[t.breakpoints.up(n.maxWidth)]:{maxWidth:`${t.breakpoints.values[n.maxWidth]}${t.breakpoints.unit}`}})})),c=i.forwardRef((function(e,t){const i=n(e),{className:c,component:d="div",disableGutters:u=!1,fixed:m=!1,maxWidth:x="lg"}=i,b=(0,r.Z)(i,h),Z=(0,a.Z)({},i,{component:d,disableGutters:u,fixed:m,maxWidth:x}),v=g(Z,s);return(0,p.jsx)(l,(0,a.Z)({as:d,ownerState:Z,className:(0,o.Z)(v.root,c),ref:t},b))}));return c}({createStyledComponent:(0,f.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,v.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})});var C=j},891:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(3366),a=n(7462),i=n(7313),o=n(3061),s=n(1921),l=n(1615),c=n(7592),d=n(7342),u=n(9127),m=n(6983),p=n(1113),h=n(7430),x=n(2298);function b(e){return(0,x.Z)("MuiLink",e)}var Z=(0,h.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=n(6428),v=n(7551);const f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=e=>{let{theme:t,ownerState:n}=e;const r=(e=>f[e]||e)(n.color),a=(0,g.DW)(t,`palette.${r}`,!1)||n.color,i=(0,g.DW)(t,`palette.${r}Channel`);return"vars"in t&&i?`rgba(${i} / 0.4)`:(0,v.Fq)(a,.4)},j=n(6417);const C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],w=(0,c.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})((e=>{let{theme:t,ownerState:n}=e;return(0,a.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:y({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Z.focusVisible}`]:{outline:"auto"}})}));var S=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:h="a",onBlur:x,onFocus:Z,TypographyClasses:g,underline:v="always",variant:y="inherit",sx:S}=n,k=(0,r.Z)(n,C),{isFocusVisibleRef:$,onBlur:W,onFocus:P,ref:R}=(0,u.Z)(),[M,I]=i.useState(!1),G=(0,m.Z)(t,R),V=(0,a.Z)({},n,{color:p,component:h,focusVisible:M,underline:v,variant:y}),N=(e=>{const{classes:t,component:n,focusVisible:r,underline:a}=e,i={root:["root",`underline${(0,l.Z)(a)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(i,b,t)})(V);return(0,j.jsx)(w,(0,a.Z)({color:p,className:(0,o.Z)(N.root,c),classes:g,component:h,onBlur:e=>{W(e),!1===$.current&&I(!1),x&&x(e)},onFocus:e=>{P(e),!0===$.current&&I(!0),Z&&Z(e)},ref:G,ownerState:V,variant:y,sx:[...Object.keys(f).includes(p)?[]:[{color:p}],...Array.isArray(S)?S:[S]]},k))}))},1405:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(3366),a=n(7462),i=n(7313),o=n(3061),s=n(1921),l=n(7551),c=n(7592),d=n(7342),u=n(1195),m=n(7999),p=n(4993),h=n(6983),x=n(9273),b=n(7363),Z=n(1081),g=n(7430),v=n(2298);function f(e){return(0,v.Z)("MuiMenuItem",e)}var y=(0,g.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j=n(6417);const C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],w=(0,c.ZP)(m.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:n}=e;return(0,a.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${y.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${y.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${y.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${y.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${x.Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${x.Z.inset}`]:{marginLeft:52},[`& .${Z.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${Z.Z.inset}`]:{paddingLeft:36},[`& .${b.Z.root}`]:{minWidth:36}},!n.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},n.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${b.Z.root} svg`]:{fontSize:"1.25rem"}}))}));var S=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:m=!1,divider:x=!1,disableGutters:b=!1,focusVisibleClassName:Z,role:g="menuitem",tabIndex:v,className:y}=n,S=(0,r.Z)(n,C),k=i.useContext(u.Z),$=i.useMemo((()=>({dense:m||k.dense||!1,disableGutters:b})),[k.dense,m,b]),W=i.useRef(null);(0,p.Z)((()=>{l&&W.current&&W.current.focus()}),[l]);const P=(0,a.Z)({},n,{dense:$.dense,divider:x,disableGutters:b}),R=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:i,selected:o,classes:l}=e,c={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",o&&"selected"]},d=(0,s.Z)(c,f,l);return(0,a.Z)({},l,d)})(n),M=(0,h.Z)(W,t);let I;return n.disabled||(I=void 0!==v?v:-1),(0,j.jsx)(u.Z.Provider,{value:$,children:(0,j.jsx)(w,(0,a.Z)({ref:M,role:g,tabIndex:I,component:c,focusVisibleClassName:(0,o.Z)(R.focusVisible,Z),className:(0,o.Z)(R.root,y)},S,{ownerState:P,classes:R}))})}))}}]);