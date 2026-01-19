import{a as m}from"./chunk-2RE6SGNZ.js";import{a as b}from"./chunk-ICFPGCXC.js";import{a as fe}from"./chunk-4UJDMMZO.js";import{a as _e}from"./chunk-NXVXYH52.js";import{a as oe}from"./chunk-EQ4AU2L4.js";import{a as le}from"./chunk-2HM355Z6.js";import{a as ge}from"./chunk-7NEJEENT.js";import{a as ne}from"./chunk-W5AYKYEG.js";import{f as ue,g as me,h as M,i as pe}from"./chunk-W5OAO5AI.js";import{a as P}from"./chunk-OCKH5R43.js";import"./chunk-GUX6PVR3.js";import{a as d,b as W,e as ee,f as re,i as c,j as e,k as te,l as ae,m as w,o as u,p as a,q as E}from"./chunk-PO5JPEC6.js";import{l as H}from"./chunk-ZPYC6U6N.js";import{a as ce}from"./chunk-XOMARGSF.js";import"./chunk-JJHHQMG7.js";import"./chunk-FZU6PMJX.js";import"./chunk-BN7SIALI.js";import"./chunk-RXP3HQVR.js";import"./chunk-UT6FFTSB.js";import"./chunk-TEQROHHI.js";import{X as se,Y as ie,Z as de}from"./chunk-SWI6TFLO.js";import"./chunk-76W6LHMW.js";import"./chunk-NGCX5STL.js";import"./chunk-2BA2WA5Y.js";import"./chunk-TSPT2GUD.js";import"./chunk-G73RBPZJ.js";import"./chunk-VL7OFEA7.js";import"./chunk-VM6CT5YT.js";import"./chunk-25J5MIFG.js";import{h as Z}from"./chunk-ME4V5RLK.js";var $=Z(ce(),1),Ge=Z(ce(),1);var Ae={filename:"/builds/devplat/dashboard-enterprise/packages/enterprise-dashboard-dialogs/EditPermissions.js",dirname:"/builds/devplat/dashboard-enterprise/packages/enterprise-dashboard-dialogs",relativefilename:"../enterprise-dashboard-dialogs/EditPermissions.js",relativedirname:"../enterprise-dashboard-dialogs",line:0},Ce={};ee(Ce,{default:()=>we});re(Ce,Ge);var he,ve,we=(ve=(he=$.default)==null?void 0:he.default)!=null?ve:$.default,Ee=(r,t)=>(0,b.includes)(t,"*")?r!=="*":!1,be=(r,t)=>t.length?!!((0,b.includes)(t,"*")&&r==="*"||(0,b.includes)(t,r)):!1,k=u(ae)`
    width: 550px;
`,Pe=u(le)`
    max-width: 1000px;
    margin: 0px;
    margin-left: 30px;
`,Oe=u(fe)`
    max-width: 100%;
`,ye=u(_e)`
    width: 16px;
    height: 16px;
    align-items: center;
`,Qe=u.div`
    margin-top: 5px;
    margin-left: -27px;
    margin-right: -27px;
`,je=u(m)`
    margin-top: 10px;
`,F=u(m.HeadCell)`
    background-color: transparent;
    border-top: 1px solid ${w.variables.backgroundColorHover};
    > div {
        justify-content: center;
        padding: 3px 0px;
        font-weight: bold;
        width: 40px;
    }
`,qe=u(m.Row)`
    td:first-child {
        text-indent: 10px;
        min-width: 300px;
    }

    &:nth-child(odd) {
        background-color: ${w.variables.backgroundColorHover};
    }
`,ze=(r,t)=>M(["getDashboard",r],()=>de({id:r}),{select:n=>n.entry[0],retry:!1,enabled:t,refetchOnWindowFocus:!1}),Ue=r=>M(["roles"],se,{select:t=>{let n=t.entry;for(let i of n)i.value=i.name;return[{name:(0,a._)("Everyone"),value:"*"},...n]},retry:!1,enabled:r,refetchOnWindowFocus:!1}),Ve=(r,t)=>me(n=>ie(n),{onSuccess:n=>{t.setQueryData(["getDashboard",r],n)}}),_=te(Ae.filename),Ye=e.memo(({handleCloseModal:r})=>e.createElement(k.Header,{title:(0,a._)("Edit Permissions"),onRequestClose:r})),Ie=e.memo(({handleCloseModal:r,handleEditPerm:t})=>e.createElement(k.Footer,null,e.createElement(E,d({appearance:"default",onClick:r,label:(0,a._)("Cancel")},_("cancel-permission"))),e.createElement(E,d({appearance:"primary",onClick:t,label:(0,a._)("Save")},_("save-permission"))))),B=({label:r,info:t})=>e.createElement(Pe,{label:r},e.createElement(Oe,d({},_(t)),e.createElement("strong",null,t))),Je=()=>e.createElement(c.Fragment,null,e.createElement(F,null)),Ke=({name:r,value:t,readPerms:n,writePerms:i,handleRead:p,handleWrite:g})=>e.createElement(qe,null,e.createElement(m.Cell,null,r),e.createElement(m.Cell,null,e.createElement(ye,d({"aria-label":`${(0,a._)("Read permissions for")} ${r}`,value:t,onClick:p,selected:be(t,n),disabled:Ee(t,n)},_(`${r}-read`)))),e.createElement(m.Cell,null,e.createElement(ye,d({"aria-label":`${(0,a._)("Write permissions for")} ${r}`,value:t,onClick:g,selected:be(t,i),disabled:Ee(t,i)},_(`${r}-write`))))),Ne=({roles:r,readPerms:t,writePerms:n,handleRead:i,handleWrite:p})=>e.createElement(je,null,e.createElement(m.Head,null,e.createElement(Je,null),e.createElement(F,null,(0,a._)("Read")),e.createElement(F,null,(0,a._)("Write"))),e.createElement(m.Body,null,r.map(g=>e.createElement(Ke,{key:g.name,name:g.name,value:g.value,readPerms:t,writePerms:n,handleRead:i,handleWrite:p})))),xe={read:void 0,write:void 0},Xe={height:"14px"},Se={marginLeft:0},Ze=[],er=({open:r,onCloseModal:t,dashboardTitle:n,dashboardId:i,trackEvent:p,telemetry:g,onUpdateSharing:L})=>{var A,G,O,Q,j,q,z;let[U,V]=(0,c.useState)(void 0),[C,D]=(0,c.useState)(xe),[Y,y]=(0,c.useState)([]),[I,ke]=(0,c.useState)(!1),De=ue(),{isLoading:Re,data:l,isError:Te}=ze(i,r),{isLoading:We,data:J,isError:He}=Ue(r),{mutate:Me}=Ve(i,De),x=null;(We||Re)&&(x=e.createElement(ge,{size:"small",style:Xe})),(He||Te)&&(x=e.createElement(ne,{type:"error"},(0,a._)("Permission editing is currently unavailable. Try again in a few minutes.")));let f=(A=U!=null?U:l==null?void 0:l.acl.sharing)!=null?A:"",h=(Q=(O=C.read)!=null?O:(G=l==null?void 0:l.acl.perms)==null?void 0:G.read)!=null?Q:[],v=(z=(q=C.write)!=null?q:(j=l==null?void 0:l.acl.perms)==null?void 0:j.write)!=null?z:[],K=o=>{p?p(o):g.emit(o)},R=P(o=>{y([]),D(xe),V(void 0),t(o)}),Be=()=>ke(!I),$e=o=>{if(Y.length){Be();return}Me({id:i,display:f,owner:l==null?void 0:l.acl.owner,readPerms:h,writePerms:v},{onSuccess:()=>{L==null||L(f),K(H({name:n,sharing:f,selectedRead:h.length,selectedWrite:v.length},p===void 0,!0)),R(o)},onError:s=>{y([s.message]),K(H({name:n,sharing:f,selectedRead:h.length,selectedWrite:v.length},p===void 0,!1))}})},N=(0,c.useCallback)((o,s)=>{!o.length&&!s.length?y([(0,a._)('You must select at least one "Read" or "Write" permission.')]):y([])},[]),X=(0,c.useCallback)((o,s)=>(y([]),(0,b.includes)(o,s)?(0,b.without)(o,s):[...o,s]),[]),Fe=P((o,{value:s})=>{let S=X(h,s);N(S,v),D(W(d({},C),{read:S}))}),Le=P((o,{value:s})=>{let S=X(v,s);N(h,S),D(W(d({},C),{write:S}))}),T=(0,c.useCallback)((o,{value:s})=>{V(s)},[]);return e.createElement(k,{open:r},e.createElement(Ye,{handleCloseModal:R}),e.createElement(k.Body,null,x||e.createElement(e.Fragment,null,e.createElement(oe,{errors:Y,errorA11yToggle:I}),e.createElement(B,{label:(0,a._)("Dashboard"),info:n}),e.createElement(B,{label:(0,a._)("Owner"),info:l==null?void 0:l.author}),e.createElement(B,{label:(0,a._)("App"),info:l==null?void 0:l.acl.app}),e.createElement(Pe,{label:(0,a._)("Display")},e.createElement(we,null,e.createElement(E,d({appearance:"default",label:(0,a._)("Owner"),onClick:T,selected:f==="user",disabled:!(l!=null&&l.acl.can_share_user),value:"user"},_("user-permission"))),e.createElement(E,d({style:Se,appearance:"default",label:(0,a._)("App"),onClick:T,selected:f==="app",disabled:!(l!=null&&l.acl.can_share_app),value:"app"},_("app-permission"))),e.createElement(E,d({style:Se,appearance:"default",label:(0,a._)("All apps"),onClick:T,selected:f==="global",disabled:!(l!=null&&l.acl.can_share_global),value:"global"},_("global-permission"))))),f!=="user"?e.createElement(Qe,null,e.createElement(Ne,{roles:J!=null?J:Ze,readPerms:h,writePerms:v,handleRead:Fe,handleWrite:Le})):null)),x?null:e.createElement(Ie,{handleCloseModal:R,handleEditPerm:$e}))},rr=pe(er),Wr=(0,w.withSplunkTheme)(rr);export{Wr as default};
